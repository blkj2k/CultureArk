import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  User, 
  LayoutDashboard, 
  Settings,
  LogOut,
  ChevronDown,
  Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useAuth } from "@/_core/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language } = useI18n();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const navItems = [
    { name: t('nav.vision'), path: "/vision" },
    { name: t('nav.technology'), path: "/technology" },
    { name: t('nav.product'), path: "/product" },
    { name: t('nav.roadmap'), path: "/roadmap" },
    { name: language === 'zh' ? '团队' : 'Team', path: "/team" },
    { name: language === 'zh' ? '联系我们' : 'Contact', path: "/contact" },
  ];

  const userMenuText = {
    en: {
      dashboard: "My Dashboard",
      admin: "Admin Panel",
      logout: "Logout",
    },
    zh: {
      dashboard: "我的仪表板",
      admin: "管理面板",
      logout: "登出",
    }
  }[language];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = () => {
    setLocation('/login');
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-background/80 backdrop-blur-md border-border py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link 
            href="/" 
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 group"
          >
            <img 
              src="/images/logo.png" 
              alt="CultureArk Logo" 
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl tracking-wider bg-gradient-to-r from-amber-500 to-cyan-400 bg-clip-text text-transparent">
                CultureArk
              </span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                {language === 'zh' ? '文化方舟' : 'Cultural AI Platform'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                onClick={() => handleNavClick(item.path)}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-primary relative group",
                  location === item.path ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  location === item.path ? "w-full" : ""
                )} />
              </Link>
            ))}
            
            <LanguageSwitcher />
            
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="border-primary/50 hover:bg-primary/10 hover:text-primary font-heading gap-2"
                  >
                    <User className="w-4 h-4" />
                    {user?.name || 'User'}
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{user?.name || 'User'}</p>
                      <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="cursor-pointer"
                    onClick={() => { handleNavClick('/dashboard'); setLocation('/dashboard'); }}
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    {userMenuText.dashboard}
                  </DropdownMenuItem>
                  {user?.role === 'admin' && (
                    <DropdownMenuItem 
                      className="cursor-pointer"
                      onClick={() => { handleNavClick('/admin'); setLocation('/admin'); }}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      {userMenuText.admin}
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="cursor-pointer text-destructive focus:text-destructive"
                    onClick={() => logout()}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    {userMenuText.logout}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                onClick={handleLogin}
                className="relative overflow-hidden group bg-gradient-to-r from-amber-500 via-orange-500 to-cyan-500 hover:from-amber-600 hover:via-orange-600 hover:to-cyan-600 text-white font-heading font-semibold px-6 py-2 rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {language === 'zh' ? '立即登录' : 'Sign In'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col gap-6 animate-in slide-in-from-top-10 duration-300">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors"
              onClick={() => handleNavClick(item.path)}
            >
              {item.name}
            </Link>
          ))}
          {isAuthenticated && (
            <>
              <Link 
                href="/dashboard"
                className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors"
                onClick={() => handleNavClick('/dashboard')}
              >
                {userMenuText.dashboard}
              </Link>
              {user?.role === 'admin' && (
                <Link 
                  href="/admin"
                  className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors"
                  onClick={() => handleNavClick('/admin')}
                >
                  {userMenuText.admin}
                </Link>
              )}
            </>
          )}
          {isAuthenticated ? (
            <Button 
              className="w-full mt-4 font-heading text-lg py-6"
              onClick={() => { logout(); setMobileMenuOpen(false); }}
            >
              {t('nav.logout')}
            </Button>
          ) : (
            <Button 
              className="w-full mt-4 font-heading text-lg py-6 bg-gradient-to-r from-amber-500 via-orange-500 to-cyan-500"
              onClick={handleLogin}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {language === 'zh' ? '立即登录' : 'Sign In'}
            </Button>
          )}
        </div>
      )}

      {/* Main Content - Added pt-24 to prevent overlap with fixed header */}
      <main className="pt-24 min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16 mt-20">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="CultureArk Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-heading font-bold text-lg bg-gradient-to-r from-amber-500 to-cyan-400 bg-clip-text text-transparent">
                CultureArk
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {language === 'zh' 
                ? '连接古老智慧与未来智能。文化AI智能体的首选平台。' 
                : 'Bridging ancient wisdom with future intelligence. The premier platform for cultural AI agents.'}
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold mb-6 text-foreground">
              {language === 'zh' ? '平台' : 'Platform'}
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/ai-agents" onClick={() => handleNavClick('/ai-agents')} className="hover:text-primary transition-colors">
                  {language === 'zh' ? 'AI智能体' : 'AI Agents'}
                </Link>
              </li>
              <li>
                <Link href="/data-assets" onClick={() => handleNavClick('/data-assets')} className="hover:text-primary transition-colors">
                  {language === 'zh' ? '数据资产' : 'Data Assets'}
                </Link>
              </li>
              <li>
                <Link href="/compliance" onClick={() => handleNavClick('/compliance')} className="hover:text-primary transition-colors">
                  {language === 'zh' ? '合规体系' : 'Compliance'}
                </Link>
              </li>
              <li>
                <Link href="/api" onClick={() => handleNavClick('/api')} className="hover:text-primary transition-colors">
                  {language === 'zh' ? 'API接口' : 'API Access'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold mb-6 text-foreground">
              {language === 'zh' ? '公司' : 'Company'}
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/vision" onClick={() => handleNavClick('/vision')} className="hover:text-primary transition-colors">
                  {language === 'zh' ? '关于我们' : 'About Us'}
                </Link>
              </li>
              <li>
                <Link href="/roadmap" onClick={() => handleNavClick('/roadmap')} className="hover:text-primary transition-colors">
                  {language === 'zh' ? '发展路线' : 'Roadmap'}
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => handleNavClick('/contact')} className="hover:text-primary transition-colors">
                  {language === 'zh' ? '联系我们' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold mb-6 text-foreground">
              {language === 'zh' ? '法律' : 'Legal'}
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" onClick={() => handleNavClick('/privacy')} className="hover:text-primary transition-colors">
                  {language === 'zh' ? '隐私政策' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link href="/terms" onClick={() => handleNavClick('/terms')} className="hover:text-primary transition-colors">
                  {language === 'zh' ? '服务条款' : 'Terms of Service'}
                </Link>
              </li>
              <li>
                <Link href="/data-ethics" onClick={() => handleNavClick('/data-ethics')} className="hover:text-primary transition-colors">
                  {language === 'zh' ? '数据伦理' : 'Data Ethics'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 CultureArk NZ Limited. {language === 'zh' ? '保留所有权利。' : 'All rights reserved.'}</p>
          <p>Designed with Neo-Heritage Futurism</p>
        </div>
      </footer>
    </div>
  );
}
