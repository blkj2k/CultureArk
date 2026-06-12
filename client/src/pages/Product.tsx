import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  Image as ImageIcon, 
  BarChart3, 
  Send, 
  User, 
  Bot, 
  Sparkles, 
  X, 
  Info,
  Globe,
  Shield,
  Zap,
  Users,
  Building2,
  TrendingUp,
  Database,
  Lock,
  CheckCircle2,
  ArrowRight,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/contexts/I18nContext";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";

export default function Product() {
  const { language } = useI18n();

  const content = {
    en: {
      // Hero
      badge: "Product Platform",
      heroTitle1: "The Operating System",
      heroTitle2: "for Cultural AI",
      heroSubtitle: "A complete platform that transforms cultural heritage into intelligent, interactive, and monetizable digital assets. Built for scale, designed for authenticity.",
      
      // Platform Overview
      platformTitle: "Platform Capabilities",
      platformSubtitle: "Everything cultural institutions need to digitize, deploy, and monetize their heritage.",
      platformItems: [
        {
          icon: Database,
          title: "Knowledge Ingestion",
          description: "Transform archives, manuscripts, and artifacts into structured, AI-ready knowledge bases with our proprietary digitization pipeline."
        },
        {
          icon: Bot,
          title: "AI Agent Deployment",
          description: "Deploy custom-trained AI agents that embody your cultural IP—conversational, accurate, and respectful of source material."
        },
        {
          icon: Globe,
          title: "Multi-Language Reach",
          description: "Automatically serve global audiences in their native languages while preserving cultural nuance and authenticity."
        },
        {
          icon: BarChart3,
          title: "Revenue Analytics",
          description: "Real-time dashboards showing usage, engagement, and revenue generation across all your cultural assets."
        },
        {
          icon: Shield,
          title: "IP Protection",
          description: "Built-in safeguards ensure your cultural heritage is represented accurately and your intellectual property is protected."
        },
        {
          icon: Lock,
          title: "Compliance Ready",
          description: "GDPR, cultural sensitivity guidelines, and ethical AI principles baked into every layer of the platform."
        }
      ],
      
      // AI Agent Section
      aiAgentTitle: "Meet the Cultural Guardian",
      aiAgentSubtitle: "Experience our flagship AI agent—trained on thousands of verified sources to deliver authentic cultural knowledge.",
      aiAgentFeatures: [
        "Context-aware multi-turn dialogue",
        "Source citation for every answer",
        "Personalized learning paths",
        "Multi-language support"
      ],
      aiAgentHint: "Try asking about 'The Silk Road' or 'Emperor Taizong' to experience the knowledge base in action.",
      
      // Use Cases
      useCasesTitle: "Transforming Industries",
      useCasesSubtitle: "See how different sectors leverage CultureArk to create value.",
      useCases: [
        {
          title: "Museums & Archives",
          description: "Transform static collections into interactive experiences that engage visitors before, during, and after their visit.",
          metrics: "3x visitor engagement"
        },
        {
          title: "Education",
          description: "Provide students with expert-level cultural knowledge accessible 24/7, personalized to their learning pace.",
          metrics: "40% better retention"
        },
        {
          title: "Tourism",
          description: "Offer travelers immersive cultural guides that enhance destination experiences and drive longer stays.",
          metrics: "25% longer visits"
        },
        {
          title: "Media & Entertainment",
          description: "Enable authentic cultural storytelling with AI-verified historical accuracy for films, games, and content.",
          metrics: "90% accuracy rate"
        }
      ],
      
      // Revenue Model
      revenueTitle: "Transparent Value Creation",
      revenueSubtitle: "Our platform creates measurable value for all stakeholders.",
      revenueItems: [
        { label: "Average Revenue per IP", value: "$50K+", subtext: "Annual recurring" },
        { label: "Revenue Share to Partners", value: "70%", subtext: "Industry leading" },
        { label: "Time to First Revenue", value: "30 Days", subtext: "From onboarding" },
        { label: "Global Market Access", value: "150+", subtext: "Countries served" }
      ],
      
      // CTA
      ctaTitle: "Ready to Transform Your Cultural Assets?",
      ctaSubtitle: "Join leading cultural institutions already using CultureArk to reach global audiences.",
      ctaButton1: "Schedule Demo",
      ctaButton2: "View Documentation"
    },
    zh: {
      // Hero
      badge: "产品平台",
      heroTitle1: "文化AI的",
      heroTitle2: "操作系统",
      heroSubtitle: "一个完整的平台，将文化遗产转化为智能、互动、可商业化的数字资产。为规模而建，为真实性而设计。",
      
      // Platform Overview
      platformTitle: "平台能力",
      platformSubtitle: "文化机构数字化、部署和变现其遗产所需的一切。",
      platformItems: [
        {
          icon: Database,
          title: "知识导入",
          description: "通过我们专有的数字化管道，将档案、手稿和文物转化为结构化的、AI就绪的知识库。"
        },
        {
          icon: Bot,
          title: "AI智能体部署",
          description: "部署体现您文化IP的定制训练AI智能体——对话式、准确且尊重原始材料。"
        },
        {
          icon: Globe,
          title: "多语言覆盖",
          description: "自动以用户母语服务全球受众，同时保持文化细微差别和真实性。"
        },
        {
          icon: BarChart3,
          title: "收入分析",
          description: "实时仪表板显示所有文化资产的使用情况、参与度和收入生成。"
        },
        {
          icon: Shield,
          title: "IP保护",
          description: "内置保护措施确保您的文化遗产得到准确呈现，知识产权得到保护。"
        },
        {
          icon: Lock,
          title: "合规就绪",
          description: "GDPR、文化敏感性准则和AI伦理原则融入平台的每一层。"
        }
      ],
      
      // AI Agent Section
      aiAgentTitle: "认识文化守护者",
      aiAgentSubtitle: "体验我们的旗舰AI智能体——基于数千个经过验证的来源训练，提供真实的文化知识。",
      aiAgentFeatures: [
        "上下文感知的多轮对话",
        "每个答案都有来源引用",
        "个性化学习路径",
        "多语言支持"
      ],
      aiAgentHint: "尝试询问'丝绸之路'或'唐太宗'来体验知识库的功能。",
      
      // Use Cases
      useCasesTitle: "变革各行各业",
      useCasesSubtitle: "了解不同领域如何利用文化方舟创造价值。",
      useCases: [
        {
          title: "博物馆与档案馆",
          description: "将静态藏品转化为互动体验，在访客参观前、中、后都能吸引他们。",
          metrics: "3倍访客参与度"
        },
        {
          title: "教育",
          description: "为学生提供24/7可访问的专家级文化知识，根据他们的学习节奏个性化定制。",
          metrics: "40%更好的记忆保持"
        },
        {
          title: "旅游",
          description: "为旅行者提供沉浸式文化导览，增强目的地体验并延长停留时间。",
          metrics: "25%更长的访问时间"
        },
        {
          title: "媒体与娱乐",
          description: "通过AI验证的历史准确性，为电影、游戏和内容实现真实的文化叙事。",
          metrics: "90%准确率"
        }
      ],
      
      // Revenue Model
      revenueTitle: "透明的价值创造",
      revenueSubtitle: "我们的平台为所有利益相关者创造可衡量的价值。",
      revenueItems: [
        { label: "每个IP平均收入", value: "$50K+", subtext: "年度经常性" },
        { label: "合作伙伴收入分成", value: "70%", subtext: "行业领先" },
        { label: "首次收入时间", value: "30天", subtext: "从入驻开始" },
        { label: "全球市场覆盖", value: "150+", subtext: "服务国家" }
      ],
      
      // CTA
      ctaTitle: "准备好转化您的文化资产了吗？",
      ctaSubtitle: "加入已经使用文化方舟触达全球受众的领先文化机构。",
      ctaButton1: "预约演示",
      ctaButton2: "查看文档"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-chart-1/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase mb-6">
              {t.badge}
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight text-foreground">
              {t.heroTitle1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-1 to-chart-2">
                {t.heroTitle2}
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {t.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.platformTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.platformSubtitle}</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.platformItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-sm bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Demo Section */}
      <section className="py-24 md:py-32">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.aiAgentTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.aiAgentSubtitle}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-8">
              <ul className="space-y-3">
                {t.aiAgentFeatures.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <div className="p-4 bg-muted/30 rounded-sm border border-border text-sm text-muted-foreground italic">
                "{t.aiAgentHint}"
              </div>
            </div>
            
            <div className="lg:col-span-8 relative rounded-sm border border-border bg-card p-1 shadow-2xl overflow-hidden h-[600px] md:h-[700px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              <ChatDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.useCasesTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.useCasesSubtitle}</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {t.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-sm bg-card border border-border relative overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{useCase.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {useCase.metrics}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-24 md:py-32">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.revenueTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.revenueSubtitle}</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.revenueItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-sm bg-card border border-border text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.subtext}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">{t.ctaTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 text-lg rounded-sm bg-primary hover:bg-primary/90 text-primary-foreground font-heading tracking-wide shadow-lg shadow-primary/20">
                  {t.ctaButton1}
                </Button>
              </Link>
              <Link href="/technology">
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-sm border-primary/30 hover:bg-primary/5 font-heading tracking-wide">
                  {t.ctaButton2}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// --- Enhanced Chat Demo with Typewriter Effect ---

// Knowledge Base Data (Bilingual)
const KNOWLEDGE_BASE: Record<string, { title: { en: string; zh: string }; description: { en: string; zh: string }; image: string }> = {
  "Taizong": {
    title: { en: "Emperor Taizong", zh: "唐太宗" },
    description: { 
      en: "Li Shimin (598–649), known as Emperor Taizong of Tang, was the second emperor of the Tang dynasty of China. He is considered one of the greatest emperors in Chinese history.",
      zh: "李世民（598-649），即唐太宗，是中国唐朝的第二位皇帝。他被认为是中国历史上最伟大的皇帝之一。"
    },
    image: "/images/hero-bg.jpg"
  },
  "丝绸之路": {
    title: { en: "The Silk Road", zh: "丝绸之路" },
    description: { 
      en: "A network of trade routes connecting the East and West, which was central to the economic, cultural, political, and religious interactions between these regions.",
      zh: "连接东西方的贸易路线网络，是这些地区之间经济、文化、政治和宗教交流的核心。"
    },
    image: "/images/feature-global.jpg"
  },
  "Silk Road": {
    title: { en: "The Silk Road", zh: "丝绸之路" },
    description: { 
      en: "A network of trade routes connecting the East and West, which was central to the economic, cultural, political, and religious interactions between these regions.",
      zh: "连接东西方的贸易路线网络，是这些地区之间经济、文化、政治和宗教交流的核心。"
    },
    image: "/images/feature-global.jpg"
  },
  "唐太宗": {
    title: { en: "Emperor Taizong", zh: "唐太宗" },
    description: { 
      en: "Li Shimin (598–649), known as Emperor Taizong of Tang, was the second emperor of the Tang dynasty of China. He is considered one of the greatest emperors in Chinese history.",
      zh: "李世民（598-649），即唐太宗，是中国唐朝的第二位皇帝。他被认为是中国历史上最伟大的皇帝之一。"
    },
    image: "/images/hero-bg.jpg"
  },
  "Zhenguan": {
    title: { en: "Reign of Zhenguan", zh: "贞观之治" },
    description: { 
      en: "The era name of Emperor Taizong's rule. It is considered a golden age of Chinese history and became the required study for future crown princes.",
      zh: "唐太宗统治时期的年号。被认为是中国历史的黄金时代，成为后世太子的必修课。"
    },
    image: "/images/feature-data.jpg"
  },
  "贞观": {
    title: { en: "Reign of Zhenguan", zh: "贞观之治" },
    description: { 
      en: "The era name of Emperor Taizong's rule. It is considered a golden age of Chinese history and became the required study for future crown princes.",
      zh: "唐太宗统治时期的年号。被认为是中国历史的黄金时代，成为后世太子的必修课。"
    },
    image: "/images/feature-data.jpg"
  },
  "Wei Zheng": {
    title: { en: "Wei Zheng", zh: "魏征" },
    description: { 
      en: "A Chinese politician and historian. He served as a chancellor of the Tang dynasty during the reign of Emperor Taizong and was known for his honest advice.",
      zh: "中国政治家和历史学家。他在唐太宗统治期间担任宰相，以直言进谏著称。"
    },
    image: "/images/ai-agent-avatar.png"
  },
  "魏征": {
    title: { en: "Wei Zheng", zh: "魏征" },
    description: { 
      en: "A Chinese politician and historian. He served as a chancellor of the Tang dynasty during the reign of Emperor Taizong and was known for his honest advice.",
      zh: "中国政治家和历史学家。他在唐太宗统治期间担任宰相，以直言进谏著称。"
    },
    image: "/images/ai-agent-avatar.png"
  }
};

// Typewriter Hook
function useTypewriter(text: string, speed: number = 30, enabled: boolean = true) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    setDisplayedText("");
    setIsComplete(false);
    
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, enabled]);

  return { displayedText, isComplete };
}

// Message Bubble Component with Typewriter
function MessageBubble({ 
  message, 
  isLatest, 
  index 
}: { 
  message: { role: 'user' | 'ai'; content: string }; 
  isLatest: boolean;
  index: number;
}) {
  const isAI = message.role === 'ai';
  const shouldAnimate = isAI && isLatest;
  const { displayedText, isComplete } = useTypewriter(message.content, 25, shouldAnimate);
  
  const bubbleVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.9,
      x: message.role === 'user' ? 20 : -20
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 500,
        damping: 30,
        delay: index * 0.05
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 20,
        delay: index * 0.05
      }
    }
  };

  return (
    <motion.div
      variants={bubbleVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      className={cn(
        "flex gap-3 max-w-[90%] md:max-w-[85%]",
        message.role === 'user' ? "ml-auto flex-row-reverse" : ""
      )}
    >
      <motion.div 
        variants={avatarVariants}
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
          message.role === 'user' ? "bg-background border-border" : "bg-primary/10 border-primary/20"
        )}
      >
        {message.role === 'user' ? (
          <User className="w-4 h-4 text-muted-foreground" />
        ) : (
          <Bot className="w-4 h-4 text-primary" />
        )}
      </motion.div>
      
      <motion.div 
        className={cn(
          "p-3 rounded-lg text-sm leading-relaxed shadow-sm relative overflow-hidden",
          message.role === 'user' 
            ? "bg-primary text-primary-foreground rounded-tr-none" 
            : "bg-card border border-border rounded-tl-none text-foreground"
        )}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {isAI && !isComplete && shouldAnimate && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        )}
        
        <span className="relative z-10">
          {shouldAnimate ? displayedText : message.content}
          {isAI && !isComplete && shouldAnimate && (
            <motion.span
              className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
          )}
        </span>
      </motion.div>
    </motion.div>
  );
}

// Typing Indicator Component
function TypingIndicator() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="flex gap-3 max-w-[85%]"
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0"
      >
        <Bot className="w-4 h-4 text-primary" />
      </motion.div>
      <motion.div 
        className="bg-card border border-border p-3 rounded-lg rounded-tl-none flex items-center gap-1.5"
        animate={{ 
          boxShadow: [
            "0 0 0 0 rgba(var(--primary), 0)",
            "0 0 0 4px rgba(var(--primary), 0.1)",
            "0 0 0 0 rgba(var(--primary), 0)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 bg-primary/60 rounded-full"
            animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

function ChatDemo() {
  const { language } = useI18n();
  
  const uiText = {
    en: {
      greeting: "Greetings. I am the Cultural Guardian, powered by advanced AI. Ask me about Chinese traditional culture, history, philosophy, or art.",
      placeholder: "Ask about Chinese culture...",
      agentName: "Cultural Guardian",
      aiPowered: "AI Powered",
      knowledgeCard: "Knowledge Card",
      relatedArtifacts: "Related Artifacts"
    },
    zh: {
      greeting: "您好。我是文化守护者，由先进AI驱动。请向我询问中国传统文化、历史、哲学或艺术方面的问题。",
      placeholder: "询问国学文化...",
      agentName: "文化守护者",
      aiPowered: "AI 驱动",
      knowledgeCard: "知识卡片",
      relatedArtifacts: "相关文物"
    }
  }[language];

  // Use backend AI API
  const aiCompleteMutation = trpc.chat.aiComplete.useMutation();

  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([
    { role: 'ai', content: uiText.greeting }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'ai', content: uiText.greeting }]);
  }, [language]);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current;
      const targetScroll = scrollElement.scrollHeight;
      const startScroll = scrollElement.scrollTop;
      const distance = targetScroll - startScroll;
      const duration = 300;
      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        scrollElement.scrollTop = startScroll + distance * easeOutCubic;
        if (progress < 1) requestAnimationFrame(animateScroll);
      };
      
      requestAnimationFrame(animateScroll);
    }
  }, [messages, isTyping]);

  const scanForKeywords = useCallback((text: string) => {
    for (const key in KNOWLEDGE_BASE) {
      if (text.toLowerCase().includes(key.toLowerCase())) {
        setActiveCard(key);
        return;
      }
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput("");
    setIsTyping(true);
    setActiveCard(null);

    try {
      // Build conversation history for context
      const history = messages.slice(1).map(m => ({
        role: m.role === 'user' ? 'user' as const : 'assistant' as const,
        content: m.content
      }));

      // Call backend AI API
      const result = await aiCompleteMutation.mutateAsync({
        message: userMsg,
        history,
        language
      });

      const aiResponse = result.response;
      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
      scanForKeywords(aiResponse);

    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: language === 'zh' ? "出了点问题，请重试。" : "Something went wrong. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex h-full bg-background/50 backdrop-blur-sm overflow-hidden">
      <div className="flex-1 flex flex-col min-w-0">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="p-4 border-b border-border bg-card/50 shrink-0"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(var(--primary), 0)",
                    "0 0 0 8px rgba(var(--primary), 0.1)",
                    "0 0 0 0 rgba(var(--primary), 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Bot className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <div className="font-heading font-bold text-sm">{uiText.agentName}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <motion.span 
                    className="w-1.5 h-1.5 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  {uiText.aiPowered}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-chart-1" />
              <span className="text-xs text-muted-foreground">
                {language === 'zh' ? '智能对话' : 'Smart Chat'}
              </span>
            </div>
          </div>
        </motion.div>

        <div 
          className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent" 
          ref={scrollRef}
        >
          <AnimatePresence mode="popLayout">
            {messages.map((msg, idx) => (
              <MessageBubble 
                key={`${idx}-${msg.content.slice(0, 20)}`}
                message={msg}
                isLatest={idx === messages.length - 1}
                index={idx}
              />
            ))}
          </AnimatePresence>
          
          <AnimatePresence>
            {isTyping && <TypingIndicator />}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
          className="p-4 border-t border-border bg-card/50 shrink-0"
        >
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex gap-2"
          >
            <motion.input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={uiText.placeholder}
              className="flex-1 bg-background border border-border rounded-md px-4 py-3 md:py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              whileFocus={{ scale: 1.01 }}
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                type="submit" 
                size="icon" 
                disabled={!input.trim() || isTyping} 
                className="shrink-0 w-10 h-10 md:w-9 md:h-9"
              >
                <Send className="w-5 h-5 md:w-4 md:h-4" />
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeCard && KNOWLEDGE_BASE[activeCard] && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute inset-y-0 right-0 w-full md:w-80 bg-card border-l border-border shadow-2xl z-20 flex flex-col"
          >
            <div className="p-4 border-b border-border flex items-center justify-between bg-muted/30">
              <div className="flex items-center gap-2 text-sm font-bold font-heading">
                <Info className="w-4 h-4 text-primary" />
                {uiText.knowledgeCard}
              </div>
              <Button variant="ghost" size="icon" onClick={() => setActiveCard(null)} className="h-8 w-8">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="aspect-video rounded-md overflow-hidden bg-muted relative"
              >
                <img 
                  src={KNOWLEDGE_BASE[activeCard].image} 
                  alt={KNOWLEDGE_BASE[activeCard].title[language]}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-heading font-bold mb-2">{KNOWLEDGE_BASE[activeCard].title[language]}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {KNOWLEDGE_BASE[activeCard].description[language]}
                </p>
              </motion.div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 border-t border-border"
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">{uiText.relatedArtifacts}</h4>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i} 
                      className="aspect-square bg-muted rounded-sm"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
