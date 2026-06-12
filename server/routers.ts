import { COOKIE_NAME } from "../shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { 
  getChatSessions,
  authenticateUser,
  setUserPassword, 
  createChatSession, 
  getChatMessages, 
  addChatMessage,
  deleteChatSession,
  getFavorites,
  addFavorite,
  removeFavorite,
  createContactSubmission,
  getContactSubmissions,
  markContactAsRead,
  getKnowledgeEntries,
  getKnowledgeEntryBySlug,
  createKnowledgeEntry,
  updateKnowledgeEntry,
  deleteKnowledgeEntry,
  getAdminStats,
  getAllUsers,
  getActivityLogs,
  logActivity,
  createUserByAdmin,
  updateUserByAdmin,
  deleteUserByAdmin,
  getDailyUsage,
  incrementDailyUsage
} from "./db";
import { notifyOwner } from "./_core/notification";
import { invokeLLM } from "./_core/llm";
import { ENV } from "./_core/env";

// Daily limits by role
const DAILY_LIMITS: Record<string, number> = {
  user: 15,
  investor: 30,
  admin: -1, // unlimited
};

// Admin procedure - requires admin role
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== 'admin') {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
  }
  return next({ ctx });
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    
    // Internal login with email/password
    login: publicProcedure
      .input(z.object({
        email: z.string().email(),
        password: z.string().min(1),
      }))
      .mutation(async ({ ctx, input }) => {
        const result = await authenticateUser(input.email, input.password);
        
        if (!result.success || !result.user) {
          throw new TRPCError({ 
            code: 'UNAUTHORIZED', 
            message: result.error || 'Authentication failed' 
          });
        }
        
        // Set session cookie
        const { SignJWT } = await import('jose');
        if (!ENV.cookieSecret) {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'JWT_SECRET is not configured',
          });
        }
        const secret = new TextEncoder().encode(ENV.cookieSecret);
        const token = await new SignJWT({ 
          userId: result.user.id,
          openId: result.user.openId,
          role: result.user.role 
        })
          .setProtectedHeader({ alg: 'HS256' })
          .setExpirationTime('7d')
          .sign(secret);
        
        const cookieOptions = getSessionCookieOptions(ctx.req);
        ctx.res.cookie(COOKIE_NAME, token, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 });
        
        await logActivity({ userId: result.user.id, action: 'user_login', details: input.email });
        
        return { 
          success: true, 
          user: {
            id: result.user.id,
            name: result.user.name,
            email: result.user.email,
            role: result.user.role,
          }
        };
      }),
    
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // User info and quota
  user: router({
    getQuotaInfo: protectedProcedure.query(async ({ ctx }) => {
      const tier = ctx.user.role;
      const dailyLimit = DAILY_LIMITS[tier] ?? 15;
      if (dailyLimit === -1) {
        return { remaining: -1, dailyLimit: -1, unlimited: true, tier };
      }
      const usage = await getDailyUsage(ctx.user.id);
      const remaining = Math.max(0, dailyLimit - usage);
      return { remaining, dailyLimit, unlimited: false, tier };
    }),
  }),

  // Chat session management
  chat: router({
    // Get all chat sessions for current user
    getSessions: protectedProcedure.query(async ({ ctx }) => {
      return await getChatSessions(ctx.user.id);
    }),

    // Create a new chat session
    createSession: protectedProcedure
      .input(z.object({
        title: z.string().min(1).max(255),
      }))
      .mutation(async ({ ctx, input }) => {
        await logActivity({ userId: ctx.user.id, action: 'chat_session_created', details: input.title });
        return await createChatSession({
          userId: ctx.user.id,
          title: input.title,
          persona: "default",
        });
      }),

    // Get messages for a specific session
    getMessages: protectedProcedure
      .input(z.object({ sessionId: z.number() }))
      .query(async ({ ctx, input }) => {
        return await getChatMessages(input.sessionId, ctx.user.id);
      }),

    // Add a message to a session (with quota check)
    addMessage: protectedProcedure
      .input(z.object({
        sessionId: z.number(),
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1),
      }))
      .mutation(async ({ ctx, input }) => {
        // Check quota for user messages
        if (input.role === "user") {
          const limit = DAILY_LIMITS[ctx.user.role] ?? 15;
          if (limit !== -1) {
            const usage = await getDailyUsage(ctx.user.id);
            if (usage >= limit) {
              throw new TRPCError({ 
                code: 'TOO_MANY_REQUESTS', 
                message: 'Daily chat limit reached. Please try again tomorrow.' 
              });
            }
            await incrementDailyUsage(ctx.user.id);
          }
        }
        
        return await addChatMessage({
          sessionId: input.sessionId,
          role: input.role,
          content: input.content,
        }, ctx.user.id);
      }),

    // Delete a chat session
    deleteSession: protectedProcedure
      .input(z.object({ sessionId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        await logActivity({ userId: ctx.user.id, action: 'chat_session_deleted', details: String(input.sessionId) });
        return await deleteChatSession(input.sessionId, ctx.user.id);
      }),

    // AI Chat completion using built-in LLM
    aiComplete: publicProcedure
      .input(z.object({
        message: z.string().min(1).max(2000),
        history: z.array(z.object({
          role: z.enum(['user', 'assistant']),
          content: z.string()
        })).optional(),
        language: z.enum(['en', 'zh']).default('zh')
      }))
      .mutation(async ({ input }) => {
        const systemPrompt = input.language === 'zh' 
          ? `你是"文化守护者"，一位专门研究中国传统文化和国学的AI学者。你的职责是：
1. 提供关于中国历史、哲学、文学、艺术、传统习俗等方面的详细、准确的信息
2. 引用历史文献和经典著作来支持你的回答
3. 用生动有趣的方式讲述文化故事
4. 帮助用户理解中华文化的深层含义和现代价值

请用中文回答，保持学术性但不失亲和力。回答应该简洁但信息丰富，通常在100-300字之间。`
          : `You are the "Cultural Guardian", an AI scholar specializing in Chinese traditional culture and Guoxue (Chinese Studies). Your responsibilities are:
1. Provide detailed, accurate information about Chinese history, philosophy, literature, art, and traditional customs
2. Cite historical documents and classical works to support your answers
3. Tell cultural stories in an engaging way
4. Help users understand the deeper meanings and modern values of Chinese culture

Please respond in English, maintaining academic rigor while being approachable. Answers should be concise but informative, typically 100-300 words.`;

        const messages = [
          { role: 'system' as const, content: systemPrompt },
          ...(input.history || []).map(m => ({
            role: m.role === 'user' ? 'user' as const : 'assistant' as const,
            content: m.content
          })),
          { role: 'user' as const, content: input.message }
        ];

        try {
          const result = await invokeLLM({ messages });
          const content = result.choices[0]?.message?.content;
          
          if (typeof content === 'string') {
            return { success: true, response: content };
          } else if (Array.isArray(content)) {
            const textContent = content.find(c => c.type === 'text');
            if (textContent && 'text' in textContent) {
              return { success: true, response: textContent.text };
            }
          }
          
          return { success: false, response: input.language === 'zh' ? '抱歉，无法生成回复。' : 'Sorry, unable to generate a response.' };
        } catch (error) {
          console.error('AI completion error:', error);
          return { 
            success: false, 
            response: input.language === 'zh' 
              ? '抱歉，智慧源暂时不可用。请稍后再试。' 
              : 'Sorry, the wisdom source is temporarily unavailable. Please try again later.' 
          };
        }
      }),
  }),

  // Knowledge favorites management
  favorites: router({
    // Get all favorites for current user
    getAll: protectedProcedure.query(async ({ ctx }) => {
      return await getFavorites(ctx.user.id);
    }),

    // Add a new favorite
    add: protectedProcedure
      .input(z.object({
        knowledgeId: z.string().min(1).max(64),
        title: z.string().min(1).max(255),
        category: z.string().min(1).max(64),
        imageUrl: z.string().optional(),
        description: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        await logActivity({ userId: ctx.user.id, action: 'favorite_added', details: input.title });
        return await addFavorite({
          userId: ctx.user.id,
          knowledgeId: input.knowledgeId,
          title: input.title,
          category: input.category,
          imageUrl: input.imageUrl || null,
          description: input.description || null,
        });
      }),

    // Remove a favorite
    remove: protectedProcedure
      .input(z.object({ favoriteId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        await logActivity({ userId: ctx.user.id, action: 'favorite_removed', details: String(input.favoriteId) });
        return await removeFavorite(input.favoriteId, ctx.user.id);
      }),
  }),

  // Contact form (public)
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1).max(255),
        email: z.string().email().max(320),
        company: z.string().max(255).optional(),
        type: z.enum(["investor", "partner", "media", "other"]),
        message: z.string().min(10).max(5000),
      }))
      .mutation(async ({ input }) => {
        const result = await createContactSubmission({
          name: input.name,
          email: input.email,
          company: input.company || null,
          type: input.type,
          message: input.message,
        });

        // Notify owner
        await notifyOwner({
          title: `New ${input.type} inquiry from ${input.name}`,
          content: `Email: ${input.email}\nCompany: ${input.company || 'N/A'}\n\nMessage:\n${input.message}`,
        });

        await logActivity({ userId: null, action: 'contact_submitted', details: `${input.type}: ${input.email}` });

        return { success: true, id: result.id };
      }),
  }),

  // Knowledge base (public read, admin write)
  knowledge: router({
    getAll: publicProcedure.query(async () => {
      return await getKnowledgeEntries(true);
    }),

    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return await getKnowledgeEntryBySlug(input.slug);
      }),
  }),

  // Admin panel
  admin: router({
    // Get dashboard stats
    getStats: adminProcedure.query(async () => {
      return await getAdminStats();
    }),

    // Get all users
    getUsers: adminProcedure.query(async () => {
      return await getAllUsers();
    }),

    // Create user (for closed beta)
    createUser: adminProcedure
      .input(z.object({
        email: z.string().email().max(320),
        name: z.string().min(1).max(255),
        password: z.string().min(6).max(100),
        role: z.enum(["user", "investor", "admin"]),
        canLogin: z.boolean().default(true),
      }))
      .mutation(async ({ input }) => {
        const result = await createUserByAdmin({
          email: input.email,
          name: input.name,
          role: input.role,
          canLogin: input.canLogin,
        });
        // Set password for the new user
        if (result.id) {
          await setUserPassword(result.id, input.password);
        }
        await logActivity({ userId: null, action: 'user_created_by_admin', details: input.email });
        return result;
      }),

    // Update user
    updateUser: adminProcedure
      .input(z.object({
        id: z.number(),
        name: z.string().min(1).max(255).optional(),
        role: z.enum(["user", "investor", "admin"]).optional(),
        canLogin: z.boolean().optional(),
      }))
      .mutation(async ({ input }) => {
        const { id, ...data } = input;
        await logActivity({ userId: null, action: 'user_updated_by_admin', details: String(id) });
        return await updateUserByAdmin(id, data);
      }),

    // Delete user
    deleteUser: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await logActivity({ userId: null, action: 'user_deleted_by_admin', details: String(input.id) });
        return await deleteUserByAdmin(input.id);
      }),

    // Get activity logs
    getActivityLogs: adminProcedure.query(async () => {
      return await getActivityLogs();
    }),

    // Contact management
    getContacts: adminProcedure.query(async () => {
      return await getContactSubmissions();
    }),

    markContactRead: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        return await markContactAsRead(input.id);
      }),

    // Knowledge management
    getAllKnowledge: adminProcedure.query(async () => {
      return await getKnowledgeEntries(false);
    }),

    createKnowledge: adminProcedure
      .input(z.object({
        slug: z.string().min(1).max(64),
        title: z.string().min(1).max(255),
        titleZh: z.string().max(255).optional(),
        category: z.string().min(1).max(64),
        description: z.string().min(1),
        descriptionZh: z.string().optional(),
        imageUrl: z.string().optional(),
        isActive: z.boolean().default(true),
      }))
      .mutation(async ({ input }) => {
        return await createKnowledgeEntry({
          slug: input.slug,
          title: input.title,
          titleZh: input.titleZh || null,
          category: input.category,
          description: input.description,
          descriptionZh: input.descriptionZh || null,
          imageUrl: input.imageUrl || null,
          isActive: input.isActive,
        });
      }),

    updateKnowledge: adminProcedure
      .input(z.object({
        id: z.number(),
        slug: z.string().min(1).max(64).optional(),
        title: z.string().min(1).max(255).optional(),
        titleZh: z.string().max(255).optional(),
        category: z.string().min(1).max(64).optional(),
        description: z.string().min(1).optional(),
        descriptionZh: z.string().optional(),
        imageUrl: z.string().optional(),
        isActive: z.boolean().optional(),
      }))
      .mutation(async ({ input }) => {
        const { id, ...data } = input;
        return await updateKnowledgeEntry(id, data);
      }),

    deleteKnowledge: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        return await deleteKnowledgeEntry(input.id);
      }),
  }),
});

export type AppRouter = typeof appRouter;
