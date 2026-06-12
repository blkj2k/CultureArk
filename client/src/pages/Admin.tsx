import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { 
  LayoutDashboard,
  Users,
  MessageSquare,
  Heart,
  Mail,
  BookOpen,
  Activity,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Loader2,
  CheckCircle,
  Clock,
  TrendingUp,
  Shield,
  AlertCircle
} from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { useLocation } from "wouter";
import { toast } from "sonner";
import { format } from "date-fns";

export default function Admin() {
  const { user, loading: authLoading } = useAuth();
  const { language } = useI18n();
  const [, setLocation] = useLocation();
  const [newKnowledgeOpen, setNewKnowledgeOpen] = useState(false);
  const [newUserOpen, setNewUserOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    password: "",
    role: "user" as "user" | "investor" | "admin",
    canLogin: true,
  });
  const [newKnowledge, setNewKnowledge] = useState({
    slug: "",
    title: "",
    titleZh: "",
    category: "",
    description: "",
    descriptionZh: "",
    imageUrl: "",
    isActive: true,
  });

  // Fetch admin data
  const { data: stats, isLoading: statsLoading } = trpc.admin.getStats.useQuery(undefined, {
    enabled: !!user && user.role === 'admin'
  });
  const { data: allUsers, isLoading: usersLoading } = trpc.admin.getUsers.useQuery(undefined, {
    enabled: !!user && user.role === 'admin'
  });
  const { data: contacts, isLoading: contactsLoading, refetch: refetchContacts } = trpc.admin.getContacts.useQuery(undefined, {
    enabled: !!user && user.role === 'admin'
  });
  const { data: knowledge, isLoading: knowledgeLoading, refetch: refetchKnowledge } = trpc.admin.getAllKnowledge.useQuery(undefined, {
    enabled: !!user && user.role === 'admin'
  });
  const { data: activityLogs, isLoading: logsLoading } = trpc.admin.getActivityLogs.useQuery(undefined, {
    enabled: !!user && user.role === 'admin'
  });

  // Mutations
  const createUserMutation = trpc.admin.createUser.useMutation({
    onSuccess: () => {
      toast.success(language === 'zh' ? '用户已创建' : 'User created successfully');
      setNewUserOpen(false);
      setNewUser({ email: "", name: "", password: "", role: "user", canLogin: true });
      trpc.useUtils().admin.getUsers.invalidate();
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const markReadMutation = trpc.admin.markContactRead.useMutation({
    onSuccess: () => {
      toast.success(language === 'zh' ? '已标记为已读' : 'Marked as read');
      refetchContacts();
    }
  });

  const createKnowledgeMutation = trpc.admin.createKnowledge.useMutation({
    onSuccess: () => {
      toast.success(language === 'zh' ? '知识条目已创建' : 'Knowledge entry created');
      setNewKnowledgeOpen(false);
      setNewKnowledge({
        slug: "", title: "", titleZh: "", category: "",
        description: "", descriptionZh: "", imageUrl: "", isActive: true
      });
      refetchKnowledge();
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const deleteKnowledgeMutation = trpc.admin.deleteKnowledge.useMutation({
    onSuccess: () => {
      toast.success(language === 'zh' ? '已删除' : 'Deleted');
      refetchKnowledge();
    }
  });

  // Access control
  if (!authLoading && !user) {
    setLocation('/');
    return null;
  }

  if (!authLoading && user && user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <div className="w-16 h-16 rounded-full bg-destructive/10 mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-destructive" />
            </div>
            <h2 className="text-xl font-bold mb-2">
              {language === 'zh' ? '访问被拒绝' : 'Access Denied'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'zh' ? '您没有管理员权限' : 'You do not have admin privileges'}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (authLoading || statsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const text = {
    en: {
      title: "Admin Panel",
      subtitle: "Manage your platform",
      overview: "Overview",
      users: "Users",
      contacts: "Contacts",
      knowledge: "Knowledge",
      activity: "Activity",
      totalUsers: "Total Users",
      chatSessions: "Chat Sessions",
      favorites: "Favorites",
      unreadContacts: "Unread Contacts",
      recentUsers: "Recent Users",
      contactInquiries: "Contact Inquiries",
      knowledgeBase: "Knowledge Base",
      activityLog: "Activity Log",
      addEntry: "Add Entry",
      markRead: "Mark Read",
      delete: "Delete",
      noData: "No data available",
      createUser: "Create User",
      email: "Email",
      name: "Name",
      role: "Role",
      canLogin: "Can Login",
      create: "Create",
      cancel: "Cancel",
    },
    zh: {
      title: "管理面板",
      subtitle: "管理您的平台",
      overview: "概览",
      users: "用户",
      contacts: "联系",
      knowledge: "知识库",
      activity: "活动",
      totalUsers: "总用户数",
      chatSessions: "聊天会话",
      favorites: "收藏数",
      unreadContacts: "未读联系",
      recentUsers: "最近用户",
      contactInquiries: "联系咨询",
      knowledgeBase: "知识库",
      activityLog: "活动日志",
      addEntry: "添加条目",
      markRead: "标记已读",
      delete: "删除",
      noData: "暂无数据",
      createUser: "创建用户",
      email: "邮箱",
      name: "姓名",
      role: "角色",
      canLogin: "允许登录",
      create: "创建",
      cancel: "取消",
    }
  }[language];

  const handleCreateKnowledge = () => {
    if (!newKnowledge.slug || !newKnowledge.title || !newKnowledge.category || !newKnowledge.description) {
      toast.error(language === 'zh' ? '请填写必填字段' : 'Please fill required fields');
      return;
    }
    createKnowledgeMutation.mutate(newKnowledge);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-24">
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <LayoutDashboard className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-heading font-bold">{text.title}</h1>
              <p className="text-muted-foreground">{text.subtitle}</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="overview" className="gap-2">
              <TrendingUp className="w-4 h-4" />
              {text.overview}
            </TabsTrigger>
            <TabsTrigger value="users" className="gap-2">
              <Users className="w-4 h-4" />
              {text.users}
            </TabsTrigger>
            <TabsTrigger value="contacts" className="gap-2">
              <Mail className="w-4 h-4" />
              {text.contacts}
              {stats?.unreadContacts ? (
                <Badge variant="destructive" className="ml-1 h-5 px-1.5">
                  {stats.unreadContacts}
                </Badge>
              ) : null}
            </TabsTrigger>
            <TabsTrigger value="knowledge" className="gap-2">
              <BookOpen className="w-4 h-4" />
              {text.knowledge}
            </TabsTrigger>
            <TabsTrigger value="activity" className="gap-2">
              <Activity className="w-4 h-4" />
              {text.activity}
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold">{stats?.users || 0}</p>
                      <p className="text-sm text-muted-foreground">{text.totalUsers}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold">{stats?.chatSessions || 0}</p>
                      <p className="text-sm text-muted-foreground">{text.chatSessions}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold">{stats?.favorites || 0}</p>
                      <p className="text-sm text-muted-foreground">{text.favorites}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold">{stats?.unreadContacts || 0}</p>
                      <p className="text-sm text-muted-foreground">{text.unreadContacts}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{text.recentUsers}</CardTitle>
                <Dialog open={newUserOpen} onOpenChange={setNewUserOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      {text.createUser}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{text.createUser}</DialogTitle>
                      <DialogDescription>
                        {language === 'zh' ? '为封闭测试创建新用户账户' : 'Create a new user account for closed beta'}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label>{text.email} *</Label>
                        <Input
                          type="email"
                          placeholder="user@example.com"
                          value={newUser.email}
                          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>{text.name} *</Label>
                        <Input
                          placeholder="John Doe"
                          value={newUser.name}
                          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>{language === 'zh' ? '密码' : 'Password'} *</Label>
                        <Input
                          type="password"
                          placeholder={language === 'zh' ? '至少6个字符' : 'At least 6 characters'}
                          value={newUser.password}
                          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>{text.role}</Label>
                        <select
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                          value={newUser.role}
                          onChange={(e) => setNewUser({ ...newUser, role: e.target.value as "user" | "investor" | "admin" })}
                        >
                          <option value="user">{language === 'zh' ? '普通用户 (15次/天)' : 'User (15/day)'}</option>
                          <option value="investor">{language === 'zh' ? '投资人 (30次/天)' : 'Investor (30/day)'}</option>
                          <option value="admin">{language === 'zh' ? '管理员 (无限制)' : 'Admin (Unlimited)'}</option>
                        </select>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={newUser.canLogin}
                          onCheckedChange={(checked) => setNewUser({ ...newUser, canLogin: checked })}
                        />
                        <Label>{text.canLogin}</Label>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setNewUserOpen(false)}>
                        {text.cancel}
                      </Button>
                      <Button 
                        onClick={() => {
                          if (!newUser.email || !newUser.name || !newUser.password) {
                            toast.error(language === 'zh' ? '请填写必填字段' : 'Please fill required fields');
                            return;
                          }
                          if (newUser.password.length < 6) {
                            toast.error(language === 'zh' ? '密码至少需要6个字符' : 'Password must be at least 6 characters');
                            return;
                          }
                          createUserMutation.mutate(newUser);
                        }}
                        disabled={createUserMutation.isPending}
                      >
                        {createUserMutation.isPending && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
                        {text.create}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {usersLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin" />
                  </div>
                ) : allUsers && allUsers.length > 0 ? (
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {allUsers.map((u) => (
                        <div key={u.id} className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Users className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{u.name || 'Anonymous'}</p>
                              <p className="text-sm text-muted-foreground">{u.email || u.openId}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={u.role === 'admin' ? 'default' : 'secondary'}>
                              {u.role}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(u.lastSignedIn), 'MMM d, yyyy')}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                ) : (
                  <p className="text-center text-muted-foreground py-8">{text.noData}</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>{text.contactInquiries}</CardTitle>
              </CardHeader>
              <CardContent>
                {contactsLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin" />
                  </div>
                ) : contacts && contacts.length > 0 ? (
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {contacts.map((contact) => (
                        <div 
                          key={contact.id} 
                          className={`p-4 rounded-lg border ${!contact.isRead ? 'bg-primary/5 border-primary/20' : 'bg-card/50'}`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium">{contact.name}</span>
                                <Badge variant="outline">{contact.type}</Badge>
                                {!contact.isRead && (
                                  <Badge variant="default" className="bg-primary">New</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                {contact.email} {contact.company && `• ${contact.company}`}
                              </p>
                              <p className="text-sm line-clamp-2">{contact.message}</p>
                              <p className="text-xs text-muted-foreground mt-2">
                                {format(new Date(contact.createdAt), 'MMM d, yyyy HH:mm')}
                              </p>
                            </div>
                            {!contact.isRead && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => markReadMutation.mutate({ id: contact.id })}
                                disabled={markReadMutation.isPending}
                              >
                                <CheckCircle className="w-4 h-4 mr-1" />
                                {text.markRead}
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                ) : (
                  <p className="text-center text-muted-foreground py-8">{text.noData}</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Knowledge Tab */}
          <TabsContent value="knowledge">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{text.knowledgeBase}</CardTitle>
                <Dialog open={newKnowledgeOpen} onOpenChange={setNewKnowledgeOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      {text.addEntry}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{language === 'zh' ? '添加知识条目' : 'Add Knowledge Entry'}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Slug *</Label>
                          <Input
                            placeholder="taizong"
                            value={newKnowledge.slug}
                            onChange={(e) => setNewKnowledge({ ...newKnowledge, slug: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Category *</Label>
                          <Input
                            placeholder="history"
                            value={newKnowledge.category}
                            onChange={(e) => setNewKnowledge({ ...newKnowledge, category: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Title (EN) *</Label>
                          <Input
                            placeholder="Emperor Taizong"
                            value={newKnowledge.title}
                            onChange={(e) => setNewKnowledge({ ...newKnowledge, title: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Title (ZH)</Label>
                          <Input
                            placeholder="唐太宗"
                            value={newKnowledge.titleZh}
                            onChange={(e) => setNewKnowledge({ ...newKnowledge, titleZh: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Description (EN) *</Label>
                        <Textarea
                          placeholder="Description in English..."
                          value={newKnowledge.description}
                          onChange={(e) => setNewKnowledge({ ...newKnowledge, description: e.target.value })}
                          rows={3}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Description (ZH)</Label>
                        <Textarea
                          placeholder="中文描述..."
                          value={newKnowledge.descriptionZh}
                          onChange={(e) => setNewKnowledge({ ...newKnowledge, descriptionZh: e.target.value })}
                          rows={3}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Image URL</Label>
                        <Input
                          placeholder="https://..."
                          value={newKnowledge.imageUrl}
                          onChange={(e) => setNewKnowledge({ ...newKnowledge, imageUrl: e.target.value })}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={newKnowledge.isActive}
                          onCheckedChange={(checked) => setNewKnowledge({ ...newKnowledge, isActive: checked })}
                        />
                        <Label>Active</Label>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setNewKnowledgeOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleCreateKnowledge} disabled={createKnowledgeMutation.isPending}>
                        {createKnowledgeMutation.isPending ? (
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        ) : null}
                        Create
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {knowledgeLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin" />
                  </div>
                ) : knowledge && knowledge.length > 0 ? (
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {knowledge.map((entry) => (
                        <div key={entry.id} className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                          <div className="flex items-center gap-3 min-w-0">
                            {entry.imageUrl ? (
                              <img src={entry.imageUrl} alt="" className="w-12 h-12 rounded object-cover" />
                            ) : (
                              <div className="w-12 h-12 rounded bg-muted flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-muted-foreground" />
                              </div>
                            )}
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <p className="font-medium truncate">{entry.title}</p>
                                {entry.titleZh && (
                                  <span className="text-muted-foreground">({entry.titleZh})</span>
                                )}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Badge variant="outline">{entry.category}</Badge>
                                <span>•</span>
                                <span>{entry.slug}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {entry.isActive ? (
                              <Eye className="w-4 h-4 text-green-500" />
                            ) : (
                              <EyeOff className="w-4 h-4 text-muted-foreground" />
                            )}
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteKnowledgeMutation.mutate({ id: entry.id })}
                              disabled={deleteKnowledgeMutation.isPending}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                ) : (
                  <p className="text-center text-muted-foreground py-8">{text.noData}</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>{text.activityLog}</CardTitle>
              </CardHeader>
              <CardContent>
                {logsLoading ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin" />
                  </div>
                ) : activityLogs && activityLogs.length > 0 ? (
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {activityLogs.map((log) => (
                        <div key={log.id} className="flex items-center gap-3 p-3 rounded-lg border bg-card/50">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Activity className="w-4 h-4 text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm">
                              <span className="font-medium">{log.action}</span>
                              {log.details && (
                                <span className="text-muted-foreground"> - {log.details}</span>
                              )}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {format(new Date(log.createdAt), 'MMM d, yyyy HH:mm:ss')}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                ) : (
                  <p className="text-center text-muted-foreground py-8">{text.noData}</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
