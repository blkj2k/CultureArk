import { eq, and, desc, count, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, 
  users, 
  chatSessions, 
  chatMessages, 
  knowledgeFavorites,
  contactSubmissions,
  knowledgeEntries,
  activityLogs,
  dailyUsage,
  InsertChatSession,
  InsertChatMessage,
  InsertKnowledgeFavorite,
  InsertContactSubmission,
  InsertKnowledgeEntry,
  InsertActivityLog
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ============ Chat Session Functions ============

export async function getChatSessions(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(chatSessions)
    .where(eq(chatSessions.userId, userId))
    .orderBy(desc(chatSessions.updatedAt));
}

export async function createChatSession(session: Omit<InsertChatSession, 'id' | 'createdAt' | 'updatedAt'>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(chatSessions).values(session);
  return { id: Number(result[0].insertId), ...session };
}

export async function getChatMessages(sessionId: number, userId: number) {
  const db = await getDb();
  if (!db) return [];

  // First verify the session belongs to the user
  const session = await db
    .select()
    .from(chatSessions)
    .where(and(eq(chatSessions.id, sessionId), eq(chatSessions.userId, userId)))
    .limit(1);

  if (session.length === 0) {
    throw new Error("Session not found or access denied");
  }

  return await db
    .select()
    .from(chatMessages)
    .where(eq(chatMessages.sessionId, sessionId))
    .orderBy(chatMessages.createdAt);
}

export async function addChatMessage(
  message: Omit<InsertChatMessage, 'id' | 'createdAt'>,
  userId: number
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Verify session ownership
  const session = await db
    .select()
    .from(chatSessions)
    .where(and(eq(chatSessions.id, message.sessionId), eq(chatSessions.userId, userId)))
    .limit(1);

  if (session.length === 0) {
    throw new Error("Session not found or access denied");
  }

  const result = await db.insert(chatMessages).values(message);
  
  // Update session's updatedAt
  await db
    .update(chatSessions)
    .set({ updatedAt: new Date() })
    .where(eq(chatSessions.id, message.sessionId));

  return { id: Number(result[0].insertId), ...message };
}

export async function deleteChatSession(sessionId: number, userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Verify ownership
  const session = await db
    .select()
    .from(chatSessions)
    .where(and(eq(chatSessions.id, sessionId), eq(chatSessions.userId, userId)))
    .limit(1);

  if (session.length === 0) {
    throw new Error("Session not found or access denied");
  }

  // Delete messages first
  await db.delete(chatMessages).where(eq(chatMessages.sessionId, sessionId));
  
  // Delete session
  await db.delete(chatSessions).where(eq(chatSessions.id, sessionId));

  return { success: true };
}

// ============ Knowledge Favorites Functions ============

export async function getFavorites(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(knowledgeFavorites)
    .where(eq(knowledgeFavorites.userId, userId))
    .orderBy(desc(knowledgeFavorites.createdAt));
}

export async function addFavorite(favorite: Omit<InsertKnowledgeFavorite, 'id' | 'createdAt'>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Check if already favorited
  const existing = await db
    .select()
    .from(knowledgeFavorites)
    .where(
      and(
        eq(knowledgeFavorites.userId, favorite.userId),
        eq(knowledgeFavorites.knowledgeId, favorite.knowledgeId)
      )
    )
    .limit(1);

  if (existing.length > 0) {
    return existing[0]; // Already favorited
  }

  const result = await db.insert(knowledgeFavorites).values(favorite);
  return { id: Number(result[0].insertId), ...favorite };
}

export async function removeFavorite(favoriteId: number, userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db
    .delete(knowledgeFavorites)
    .where(
      and(
        eq(knowledgeFavorites.id, favoriteId),
        eq(knowledgeFavorites.userId, userId)
      )
    );

  return { success: true };
}

// ============ Contact Submissions Functions ============

export async function createContactSubmission(submission: Omit<InsertContactSubmission, 'id' | 'createdAt' | 'isRead'>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(contactSubmissions).values(submission);
  return { id: Number(result[0].insertId), ...submission };
}

export async function getContactSubmissions(limit = 50) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(contactSubmissions)
    .orderBy(desc(contactSubmissions.createdAt))
    .limit(limit);
}

export async function markContactAsRead(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db
    .update(contactSubmissions)
    .set({ isRead: true })
    .where(eq(contactSubmissions.id, id));

  return { success: true };
}

export async function getUnreadContactCount() {
  const db = await getDb();
  if (!db) return 0;

  const result = await db
    .select({ count: count() })
    .from(contactSubmissions)
    .where(eq(contactSubmissions.isRead, false));

  return result[0]?.count || 0;
}

// ============ Knowledge Entries Functions ============

export async function getKnowledgeEntries(activeOnly = true) {
  const db = await getDb();
  if (!db) return [];

  if (activeOnly) {
    return await db
      .select()
      .from(knowledgeEntries)
      .where(eq(knowledgeEntries.isActive, true))
      .orderBy(desc(knowledgeEntries.updatedAt));
  }

  return await db
    .select()
    .from(knowledgeEntries)
    .orderBy(desc(knowledgeEntries.updatedAt));
}

export async function getKnowledgeEntryBySlug(slug: string) {
  const db = await getDb();
  if (!db) return null;

  const result = await db
    .select()
    .from(knowledgeEntries)
    .where(eq(knowledgeEntries.slug, slug))
    .limit(1);

  return result.length > 0 ? result[0] : null;
}

export async function createKnowledgeEntry(entry: Omit<InsertKnowledgeEntry, 'id' | 'createdAt' | 'updatedAt'>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(knowledgeEntries).values(entry);
  return { id: Number(result[0].insertId), ...entry };
}

export async function updateKnowledgeEntry(id: number, entry: Partial<Omit<InsertKnowledgeEntry, 'id' | 'createdAt' | 'updatedAt'>>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db
    .update(knowledgeEntries)
    .set({ ...entry, updatedAt: new Date() })
    .where(eq(knowledgeEntries.id, id));

  return { success: true };
}

export async function deleteKnowledgeEntry(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.delete(knowledgeEntries).where(eq(knowledgeEntries.id, id));
  return { success: true };
}

// ============ Activity Logs Functions ============

export async function logActivity(log: Omit<InsertActivityLog, 'id' | 'createdAt'>) {
  const db = await getDb();
  if (!db) return;

  await db.insert(activityLogs).values(log);
}

export async function getActivityLogs(limit = 100) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(activityLogs)
    .orderBy(desc(activityLogs.createdAt))
    .limit(limit);
}

// ============ Admin Statistics Functions ============

export async function getAdminStats() {
  const db = await getDb();
  if (!db) return null;

  const [userCount] = await db.select({ count: count() }).from(users);
  const [sessionCount] = await db.select({ count: count() }).from(chatSessions);
  const [messageCount] = await db.select({ count: count() }).from(chatMessages);
  const [favoriteCount] = await db.select({ count: count() }).from(knowledgeFavorites);
  const [contactCount] = await db.select({ count: count() }).from(contactSubmissions);
  const [knowledgeCount] = await db.select({ count: count() }).from(knowledgeEntries);
  const unreadContacts = await getUnreadContactCount();

  return {
    users: userCount?.count || 0,
    chatSessions: sessionCount?.count || 0,
    chatMessages: messageCount?.count || 0,
    favorites: favoriteCount?.count || 0,
    contacts: contactCount?.count || 0,
    unreadContacts,
    knowledgeEntries: knowledgeCount?.count || 0,
  };
}

export async function getAllUsers(limit = 100) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(users)
    .orderBy(desc(users.lastSignedIn))
    .limit(limit);
}


// ============ User Management Functions (Admin) ============

export async function createUserByAdmin(userData: {
  email: string;
  name: string;
  role: 'user' | 'investor' | 'admin';
  canLogin: boolean;
}) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Generate a unique openId for admin-created users
  const openId = `admin_created_${Date.now()}_${Math.random().toString(36).substring(7)}`;

  const result = await db.insert(users).values({
    openId,
    email: userData.email,
    name: userData.name,
    role: userData.role,
    canLogin: userData.canLogin,
  });

  return { id: Number(result[0].insertId), openId, ...userData };
}

export async function updateUserByAdmin(id: number, data: Partial<{
  name: string;
  role: 'user' | 'investor' | 'admin';
  canLogin: boolean;
}>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db
    .update(users)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(users.id, id));

  return { success: true };
}

export async function deleteUserByAdmin(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Delete related data first
  await db.delete(chatMessages).where(
    sql`session_id IN (SELECT id FROM chat_sessions WHERE user_id = ${id})`
  );
  await db.delete(chatSessions).where(eq(chatSessions.userId, id));
  await db.delete(knowledgeFavorites).where(eq(knowledgeFavorites.userId, id));
  await db.delete(dailyUsage).where(eq(dailyUsage.userId, id));
  
  // Delete user
  await db.delete(users).where(eq(users.id, id));

  return { success: true };
}

// ============ Daily Usage Functions ============

export async function getDailyUsage(userId: number): Promise<number> {
  const db = await getDb();
  if (!db) return 0;

  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const result = await db
    .select()
    .from(dailyUsage)
    .where(and(eq(dailyUsage.userId, userId), sql`DATE(usage_date) = ${today}`))
    .limit(1);

  return result.length > 0 ? result[0].chatCount : 0;
}

export async function incrementDailyUsage(userId: number): Promise<void> {
  const db = await getDb();
  if (!db) return;

  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  // Try to update existing record
  const existing = await db
    .select()
    .from(dailyUsage)
    .where(and(eq(dailyUsage.userId, userId), sql`DATE(usage_date) = ${today}`))
    .limit(1);

  if (existing.length > 0) {
    await db
      .update(dailyUsage)
      .set({ chatCount: sql`chat_count + 1` })
      .where(eq(dailyUsage.id, existing[0].id));
  } else {
    await db.insert(dailyUsage).values({
      userId,
      usageDate: new Date(today),
      chatCount: 1,
    });
  }
}


// ============ Internal Auth Functions ============

import { createHash, randomBytes } from "crypto";

// Simple password hashing using SHA-256 with salt
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex');
  const hash = createHash('sha256').update(password + salt).digest('hex');
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedHash: string): boolean {
  const [salt, hash] = storedHash.split(':');
  if (!salt || !hash) return false;
  const computedHash = createHash('sha256').update(password + salt).digest('hex');
  return hash === computedHash;
}

export async function getUserByEmail(email: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function authenticateUser(email: string, password: string) {
  const user = await getUserByEmail(email);
  if (!user) {
    return { success: false, error: 'User not found' };
  }
  
  if (!user.canLogin) {
    return { success: false, error: 'Account not activated. Contact administrator.' };
  }
  
  if (!user.passwordHash) {
    return { success: false, error: 'Password not set. Contact administrator.' };
  }
  
  if (!verifyPassword(password, user.passwordHash)) {
    return { success: false, error: 'Invalid password' };
  }
  
  // Update last signed in
  const db = await getDb();
  if (db) {
    await db.update(users).set({ lastSignedIn: new Date() }).where(eq(users.id, user.id));
  }
  
  return { success: true, user };
}

export async function setUserPassword(userId: number, password: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const passwordHash = hashPassword(password);
  await db.update(users).set({ passwordHash }).where(eq(users.id, userId));
  return { success: true };
}
