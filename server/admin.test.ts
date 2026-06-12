import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db functions
vi.mock("./db", () => ({
  getChatSessions: vi.fn().mockResolvedValue([]),
  createChatSession: vi.fn().mockResolvedValue({ id: 1, title: "Test", persona: "historian" }),
  getChatMessages: vi.fn().mockResolvedValue([]),
  addChatMessage: vi.fn().mockResolvedValue({ id: 1, content: "Test" }),
  deleteChatSession: vi.fn().mockResolvedValue({ success: true }),
  getFavorites: vi.fn().mockResolvedValue([]),
  addFavorite: vi.fn().mockResolvedValue({ id: 1, title: "Test" }),
  removeFavorite: vi.fn().mockResolvedValue({ success: true }),
  createContactSubmission: vi.fn().mockResolvedValue({ id: 1 }),
  getContactSubmissions: vi.fn().mockResolvedValue([]),
  markContactAsRead: vi.fn().mockResolvedValue({ success: true }),
  getKnowledgeEntries: vi.fn().mockResolvedValue([]),
  getKnowledgeEntryBySlug: vi.fn().mockResolvedValue(null),
  createKnowledgeEntry: vi.fn().mockResolvedValue({ id: 1 }),
  updateKnowledgeEntry: vi.fn().mockResolvedValue({ success: true }),
  deleteKnowledgeEntry: vi.fn().mockResolvedValue({ success: true }),
  getAdminStats: vi.fn().mockResolvedValue({
    users: 10,
    chatSessions: 5,
    chatMessages: 50,
    favorites: 20,
    contacts: 3,
    unreadContacts: 1,
    knowledgeEntries: 15,
  }),
  getAllUsers: vi.fn().mockResolvedValue([]),
  getActivityLogs: vi.fn().mockResolvedValue([]),
  logActivity: vi.fn().mockResolvedValue(undefined),
}));

// Mock notification
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAdminContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
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

function createUserContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 2,
    openId: "regular-user",
    email: "user@example.com",
    name: "Regular User",
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

describe("Admin API", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("admin can access stats", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const stats = await caller.admin.getStats();

    expect(stats).toBeDefined();
    expect(stats?.users).toBe(10);
    expect(stats?.chatSessions).toBe(5);
  });

  it("regular user cannot access admin stats", async () => {
    const ctx = createUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.getStats()).rejects.toThrow("Admin access required");
  });

  it("admin can get all users", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const users = await caller.admin.getUsers();

    expect(Array.isArray(users)).toBe(true);
  });

  it("admin can get activity logs", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const logs = await caller.admin.getActivityLogs();

    expect(Array.isArray(logs)).toBe(true);
  });

  it("admin can mark contact as read", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.markContactRead({ id: 1 });

    expect(result.success).toBe(true);
  });
});

describe("Contact API", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("public user can submit contact form", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Test User",
      email: "test@example.com",
      company: "Test Company",
      type: "investor",
      message: "This is a test message for investment inquiry.",
    });

    expect(result.success).toBe(true);
    expect(result.id).toBeDefined();
  });

  it("validates email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "invalid-email",
        type: "investor",
        message: "This is a test message.",
      })
    ).rejects.toThrow();
  });

  it("validates message length", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        type: "investor",
        message: "Short", // Less than 10 characters
      })
    ).rejects.toThrow();
  });
});

describe("Knowledge API", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("public user can get knowledge entries", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const entries = await caller.knowledge.getAll();

    expect(Array.isArray(entries)).toBe(true);
  });

  it("public user can get knowledge by slug", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const entry = await caller.knowledge.getBySlug({ slug: "test-slug" });

    // Returns null since mock returns null
    expect(entry).toBeNull();
  });

  it("admin can create knowledge entry", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.createKnowledge({
      slug: "new-entry",
      title: "New Entry",
      category: "history",
      description: "This is a new knowledge entry.",
      isActive: true,
    });

    expect(result.id).toBeDefined();
  });

  it("admin can update knowledge entry", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.updateKnowledge({
      id: 1,
      title: "Updated Title",
    });

    expect(result.success).toBe(true);
  });

  it("admin can delete knowledge entry", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.deleteKnowledge({ id: 1 });

    expect(result.success).toBe(true);
  });

  it("regular user cannot create knowledge entry", async () => {
    const ctx = createUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.admin.createKnowledge({
        slug: "new-entry",
        title: "New Entry",
        category: "history",
        description: "This is a new knowledge entry.",
        isActive: true,
      })
    ).rejects.toThrow("Admin access required");
  });
});
