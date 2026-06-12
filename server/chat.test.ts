import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database functions
vi.mock("./db", () => ({
  getChatSessions: vi.fn().mockResolvedValue([
    { id: 1, userId: 1, title: "Test Session", persona: "historian", createdAt: new Date(), updatedAt: new Date() }
  ]),
  createChatSession: vi.fn().mockResolvedValue({ id: 2, userId: 1, title: "New Session", persona: "poet" }),
  getChatMessages: vi.fn().mockResolvedValue([
    { id: 1, sessionId: 1, role: "user", content: "Hello", createdAt: new Date() },
    { id: 2, sessionId: 1, role: "assistant", content: "Greetings", createdAt: new Date() }
  ]),
  addChatMessage: vi.fn().mockResolvedValue({ id: 3, sessionId: 1, role: "user", content: "Test" }),
  deleteChatSession: vi.fn().mockResolvedValue({ success: true }),
  getFavorites: vi.fn().mockResolvedValue([
    { id: 1, userId: 1, knowledgeId: "tang-dynasty", title: "Tang Dynasty", category: "history", createdAt: new Date() }
  ]),
  addFavorite: vi.fn().mockResolvedValue({ id: 2, userId: 1, knowledgeId: "silk-road", title: "Silk Road", category: "trade" }),
  removeFavorite: vi.fn().mockResolvedValue({ success: true }),
  logActivity: vi.fn().mockResolvedValue(undefined),
  getDailyUsage: vi.fn().mockResolvedValue(0),
  incrementDailyUsage: vi.fn().mockResolvedValue(undefined),
}));

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("chat.getSessions", () => {
  it("returns chat sessions for authenticated user", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chat.getSessions();

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Test Session");
  });
});

describe("chat.createSession", () => {
  it("creates a new chat session", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chat.createSession({
      title: "New Session",
      persona: "poet",
    });

    expect(result.title).toBe("New Session");
    expect(result.persona).toBe("poet");
  });
});

describe("chat.getMessages", () => {
  it("returns messages for a session", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chat.getMessages({ sessionId: 1 });

    expect(result).toHaveLength(2);
    expect(result[0].role).toBe("user");
    expect(result[1].role).toBe("assistant");
  });
});

describe("chat.addMessage", () => {
  it("adds a message to a session", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chat.addMessage({
      sessionId: 1,
      role: "user",
      content: "Test message",
    });

    expect(result.content).toBe("Test");
  });
});

describe("chat.deleteSession", () => {
  it("deletes a chat session", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chat.deleteSession({ sessionId: 1 });

    expect(result.success).toBe(true);
  });
});

describe("favorites.getAll", () => {
  it("returns favorites for authenticated user", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.favorites.getAll();

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Tang Dynasty");
  });
});

describe("favorites.add", () => {
  it("adds a new favorite", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.favorites.add({
      knowledgeId: "silk-road",
      title: "Silk Road",
      category: "trade",
    });

    expect(result.knowledgeId).toBe("silk-road");
  });
});

describe("favorites.remove", () => {
  it("removes a favorite", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.favorites.remove({ favoriteId: 1 });

    expect(result.success).toBe(true);
  });
});


// Mock the LLM function
vi.mock("./_core/llm", () => ({
  invokeLLM: vi.fn().mockResolvedValue({
    choices: [{
      message: {
        content: "这是一个关于中国文化的测试回复。"
      }
    }]
  })
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("chat.aiComplete", () => {
  it("returns AI response for Chinese language", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chat.aiComplete({
      message: "什么是丝绸之路？",
      language: "zh"
    });

    expect(result.success).toBe(true);
    expect(result.response).toBeDefined();
  });

  it("returns AI response for English language", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chat.aiComplete({
      message: "What is the Silk Road?",
      language: "en"
    });

    expect(result.success).toBe(true);
    expect(result.response).toBeDefined();
  });

  it("handles conversation history", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.chat.aiComplete({
      message: "请继续",
      history: [
        { role: "user", content: "什么是丝绸之路？" },
        { role: "assistant", content: "丝绸之路是古代连接东西方的贸易路线。" }
      ],
      language: "zh"
    });

    expect(result.success).toBe(true);
    expect(result.response).toBeDefined();
  });
});
