import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Heart, 
  Trash2, 
  Clock, 
  User as UserIcon,
  BookOpen,
  ChevronRight,
  Loader2,
  History,
  Star,
  Zap
} from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { format } from "date-fns";

export default function Dashboard() {
  const { user, loading: authLoading } = useAuth();
  const { language } = useI18n();
  const [, setLocation] = useLocation();

  // Fetch user data
  const { data: sessions, isLoading: sessionsLoading, refetch: refetchSessions } = trpc.chat.getSessions.useQuery(
    undefined,
    { enabled: !!user }
  );
  const { data: favorites, isLoading: favoritesLoading, refetch: refetchFavorites } = trpc.favorites.getAll.useQuery(
    undefined,
    { enabled: !!user }
  );
  const { data: quotaInfo } = trpc.user.getQuotaInfo.useQuery(
    undefined,
    { enabled: !!user }
  );

  // Mutations
  const deleteSessionMutation = trpc.chat.deleteSession.useMutation({
    onSuccess: () => {
      toast.success(language === 'zh' ? '会话已删除' : 'Session deleted');
      refetchSessions();
    },
    onError: () => {
      toast.error(language === 'zh' ? '删除失败' : 'Failed to delete');
    }
  });

  const removeFavoriteMutation = trpc.favorites.remove.useMutation({
    onSuccess: () => {
      toast.success(language === 'zh' ? '已取消收藏' : 'Removed from favorites');
      refetchFavorites();
    },
    onError: () => {
      toast.error(language === 'zh' ? '操作失败' : 'Operation failed');
    }
  });

  // Redirect if not logged in
  if (!authLoading && !user) {
    setLocation('/');
    return null;
  }

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const translations = {
    en: {
      title: "My Dashboard",
      subtitle: "Manage your chat history and saved knowledge",
      chatHistory: "Chat History",
      favorites: "Favorites",
      noSessions: "No chat sessions yet",
      noSessionsDesc: "Start a conversation with our AI to see your history here",
      noFavorites: "No favorites yet",
      noFavoritesDesc: "Save knowledge cards while chatting to build your collection",
      startChat: "Start Chatting",
      delete: "Delete",
      view: "View",
      messages: "messages",
      persona: "Persona",
      savedOn: "Saved on",
      category: "Category",
      dailyQuota: "Daily Quota",
      remaining: "remaining",
      unlimited: "Unlimited",
      tier: "Account Tier",
      user: "User",
      investor: "Investor",
      admin: "Admin",
    },
    zh: {
      title: "我的仪表板",
      subtitle: "管理您的聊天记录和收藏的知识",
      chatHistory: "聊天记录",
      favorites: "我的收藏",
      noSessions: "暂无聊天记录",
      noSessionsDesc: "开始与AI对话，您的历史记录将显示在这里",
      noFavorites: "暂无收藏",
      noFavoritesDesc: "在聊天时保存知识卡片来建立您的收藏",
      startChat: "开始对话",
      delete: "删除",
      view: "查看",
      messages: "条消息",
      persona: "角色",
      savedOn: "保存于",
      category: "分类",
      dailyQuota: "每日配额",
      remaining: "剩余",
      unlimited: "无限制",
      tier: "账户等级",
      user: "普通用户",
      investor: "投资人",
      admin: "管理员",
    }
  };

  const text = translations[language];

  const tierLabels: Record<string, { en: string; zh: string }> = {
    user: { en: "User", zh: "普通用户" },
    investor: { en: "Investor", zh: "投资人" },
    admin: { en: "Admin", zh: "管理员" },
  };

  const tierColors: Record<string, string> = {
    user: "bg-slate-500/10 text-slate-600 border-slate-300",
    investor: "bg-amber-500/10 text-amber-600 border-amber-300",
    admin: "bg-purple-500/10 text-purple-600 border-purple-300",
  };

  const userTier = (user as any)?.tier || 'user';

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-24">
      <div className="container py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <UserIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-heading font-bold">{text.title}</h1>
              <p className="text-muted-foreground">{text.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{sessions?.length || 0}</p>
                  <p className="text-sm text-muted-foreground">{text.chatHistory}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{favorites?.length || 0}</p>
                  <p className="text-sm text-muted-foreground">{text.favorites}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  {quotaInfo?.unlimited ? (
                    <p className="text-2xl font-bold">{text.unlimited}</p>
                  ) : (
                    <p className="text-2xl font-bold">
                      {quotaInfo?.remaining ?? '-'}/{quotaInfo?.dailyLimit ?? '-'}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">{text.dailyQuota}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <Badge className={`${tierColors[userTier]} border`}>
                    {tierLabels[userTier]?.[language] || userTier}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-1">{text.tier}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="history" className="space-y-6">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="history" className="gap-2">
              <History className="w-4 h-4" />
              {text.chatHistory}
            </TabsTrigger>
            <TabsTrigger value="favorites" className="gap-2">
              <Star className="w-4 h-4" />
              {text.favorites}
            </TabsTrigger>
          </TabsList>

          {/* Chat History Tab */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  {text.chatHistory}
                </CardTitle>
                <CardDescription>
                  {language === 'zh' 
                    ? '您与文化守护者AI的所有对话记录' 
                    : 'All your conversations with the Cultural Guardian AI'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {sessionsLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                  </div>
                ) : sessions && sessions.length > 0 ? (
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-3">
                      {sessions.map((session) => (
                        <div
                          key={session.id}
                          className="group flex items-center justify-between p-4 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all"
                        >
                          <div className="flex items-center gap-4 min-w-0">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <MessageSquare className="w-5 h-5 text-primary" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-medium truncate">{session.title}</h4>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Badge variant="secondary" className="text-xs">
                                  {session.persona}
                                </Badge>
                                <span>•</span>
                                <span>{format(new Date(session.updatedAt), 'MMM d, yyyy')}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deleteSessionMutation.mutate({ sessionId: session.id })}
                              disabled={deleteSessionMutation.isPending}
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                      <MessageSquare className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium mb-2">{text.noSessions}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{text.noSessionsDesc}</p>
                    <Button asChild>
                      <Link href="/product">
                        {text.startChat}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  {text.favorites}
                </CardTitle>
                <CardDescription>
                  {language === 'zh' 
                    ? '您收藏的知识卡片' 
                    : 'Your saved knowledge cards'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {favoritesLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                  </div>
                ) : favorites && favorites.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favorites.map((favorite) => (
                      <Card key={favorite.id} className="group overflow-hidden hover:shadow-lg transition-all">
                        {favorite.imageUrl && (
                          <div className="aspect-video overflow-hidden bg-muted">
                            <img
                              src={favorite.imageUrl}
                              alt={favorite.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <Badge variant="outline" className="mb-2 text-xs">
                                {favorite.category}
                              </Badge>
                              <h4 className="font-heading font-bold truncate">{favorite.title}</h4>
                              {favorite.description && (
                                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                  {favorite.description}
                                </p>
                              )}
                              <p className="text-xs text-muted-foreground mt-2">
                                {text.savedOn} {format(new Date(favorite.createdAt), 'MMM d, yyyy')}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFavoriteMutation.mutate({ favoriteId: favorite.id })}
                              disabled={removeFavoriteMutation.isPending}
                              className="shrink-0 text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium mb-2">{text.noFavorites}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{text.noFavoritesDesc}</p>
                    <Button asChild>
                      <Link href="/product">
                        {text.startChat}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
