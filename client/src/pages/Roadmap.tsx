import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { 
  Rocket, 
  Target, 
  Globe, 
  Zap, 
  Users, 
  Building2,
  TrendingUp,
  CheckCircle2,
  Circle,
  ArrowRight,
  Sparkles,
  Shield,
  Coins,
  Network,
  Crown,
  Landmark,
  BookOpen,
  Palette,
  Music,
  Film,
  GraduationCap,
  Map,
  Award,
  LineChart,
  PieChart,
  BarChart3,
  DollarSign,
  Percent,
  Calendar,
  Flag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Roadmap() {
  const { language } = useI18n();

  const content = {
    en: {
      // Hero
      badge: "Strategic Roadmap 2026-2030",
      heroTitle1: "Building the",
      heroTitle2: "Cultural AI Standard",
      heroSubtitle: "A five-year strategic vision to establish CultureArk as the global infrastructure for cultural heritage digitization, AI deployment, and monetization. Each phase creates exponential value for investors, cultural institutions, and end users.",
      
      // Market Opportunity
      marketTitle: "The $50B Cultural AI Opportunity",
      marketSubtitle: "We're positioned at the intersection of three converging mega-trends.",
      marketStats: [
        { value: "$50B", label: "Cultural Heritage Tech Market by 2030", icon: DollarSign },
        { value: "85%", label: "Museums Planning Digital Transformation", icon: Percent },
        { value: "3.2B", label: "Global Cultural Tourism Visitors Annually", icon: Users },
        { value: "12%", label: "Annual Market Growth Rate", icon: TrendingUp }
      ],
      marketTrends: [
        {
          title: "AI Revolution",
          description: "Large language models have made cultural knowledge accessible at scale for the first time in history.",
          growth: "+340% YoY"
        },
        {
          title: "Cultural Digitization Wave",
          description: "Post-pandemic, institutions are racing to digitize collections and create virtual experiences.",
          growth: "+180% YoY"
        },
        {
          title: "Experience Economy",
          description: "Consumers increasingly value authentic, educational experiences over passive consumption.",
          growth: "+95% YoY"
        }
      ],
      
      // Strategic Phases
      phasesTitle: "Five-Year Strategic Roadmap",
      phasesSubtitle: "Clear milestones with measurable outcomes at each stage.",
      phases: [
        {
          phase: "Phase 1",
          title: "Foundation & Proof of Concept",
          status: "complete",
          timeline: "Q1-Q2 2026",
          investment: "Seed: $500K",
          description: "Establish core technology platform and validate with flagship Chinese cultural IP.",
          milestones: [
            { text: "Core AI platform architecture complete", done: true },
            { text: "First cultural IP partnership (Chinese Classics)", done: true },
            { text: "Knowledge base: 10,000+ verified entries", done: true },
            { text: "Multi-turn conversational AI capability", done: true },
            { text: "Beta testing with 500+ users", done: false }
          ],
          keyMetrics: [
            { label: "Knowledge Entries", value: "10,000+" },
            { label: "AI Accuracy", value: "94%" },
            { label: "User Satisfaction", value: "4.7/5" }
          ],
          deliverables: "Working platform, first revenue, validated PMF"
        },
        {
          phase: "Phase 2",
          title: "Market Validation & Revenue",
          status: "current",
          timeline: "Q3-Q4 2026",
          investment: "Pre-A: $2M",
          description: "Prove revenue model, expand IP portfolio, establish market leadership in Chinese cultural AI.",
          milestones: [
            { text: "Public launch with 5,000+ active users", done: false },
            { text: "3 additional cultural IP partnerships", done: false },
            { text: "B2B API launch for enterprise clients", done: false },
            { text: "First educational institution partnership", done: false },
            { text: "$100K ARR milestone", done: false }
          ],
          keyMetrics: [
            { label: "Target Users", value: "5,000" },
            { label: "Target ARR", value: "$100K" },
            { label: "IP Partners", value: "4" }
          ],
          deliverables: "Proven revenue model, enterprise traction, category leadership"
        },
        {
          phase: "Phase 3",
          title: "Regional Expansion",
          status: "upcoming",
          timeline: "2027",
          investment: "Series A: $10M",
          description: "Expand to pan-Asian cultural heritage, launch multi-language support, scale B2B operations.",
          milestones: [
            { text: "Japanese cultural IP partnerships (Edo period, Samurai)", done: false },
            { text: "Korean cultural IP partnerships (Joseon dynasty)", done: false },
            { text: "Southeast Asian heritage partnerships", done: false },
            { text: "Multi-language support: EN/ZH/JP/KR/TH", done: false },
            { text: "50,000+ monthly active users", done: false },
            { text: "$1M ARR milestone", done: false }
          ],
          keyMetrics: [
            { label: "Target MAU", value: "50,000" },
            { label: "Target ARR", value: "$1M" },
            { label: "IP Partners", value: "15+" }
          ],
          deliverables: "Pan-Asian market leadership, enterprise revenue stream"
        },
        {
          phase: "Phase 4",
          title: "Global Platform",
          status: "upcoming",
          timeline: "2028",
          investment: "Series B: $30M",
          description: "Expand to Western cultural heritage, launch multi-modal capabilities, establish global marketplace.",
          milestones: [
            { text: "European cultural IP partnerships (Renaissance, Classical)", done: false },
            { text: "Middle Eastern heritage partnerships", done: false },
            { text: "African cultural heritage partnerships", done: false },
            { text: "Multi-modal AI: Image/Audio/Video generation", done: false },
            { text: "Cultural AI marketplace launch", done: false },
            { text: "500,000+ monthly active users", done: false }
          ],
          keyMetrics: [
            { label: "Target MAU", value: "500K" },
            { label: "Target ARR", value: "$10M" },
            { label: "IP Partners", value: "50+" }
          ],
          deliverables: "Global platform, multi-modal capabilities, marketplace revenue"
        },
        {
          phase: "Phase 5",
          title: "Platform Dominance",
          status: "upcoming",
          timeline: "2029-2030",
          investment: "Series C: $100M",
          description: "Become the definitive global infrastructure for Cultural AI with IPO readiness.",
          milestones: [
            { text: "2M+ monthly active users globally", done: false },
            { text: "100+ cultural IP partnerships across 6 continents", done: false },
            { text: "Cultural AI developer ecosystem", done: false },
            { text: "Autonomous cultural content creation", done: false },
            { text: "IPO preparation and execution", done: false }
          ],
          keyMetrics: [
            { label: "Target MAU", value: "2M+" },
            { label: "Target ARR", value: "$50M" },
            { label: "IP Partners", value: "100+" }
          ],
          deliverables: "Market dominance, IPO, category definition"
        }
      ],
      
      // Investment Thesis
      investTitle: "Investment Thesis",
      investSubtitle: "Why CultureArk represents a compelling investment opportunity.",
      investPoints: [
        {
          icon: Target,
          title: "First-Mover Advantage",
          description: "No existing platform combines cultural IP digitization, AI deployment, and monetization at scale. We're defining the category."
        },
        {
          icon: Shield,
          title: "Defensible Moats",
          description: "Exclusive IP partnerships, proprietary training data, and network effects create compounding competitive advantages."
        },
        {
          icon: TrendingUp,
          title: "Multiple Revenue Streams",
          description: "B2C subscriptions, B2B API licensing, marketplace commissions, and IP revenue sharing create diversified income."
        },
        {
          icon: Globe,
          title: "Global Scalability",
          description: "Cultural heritage is universal. Our platform can expand to any culture, any language, any market."
        }
      ],
      
      // Financial Projections
      financeTitle: "Financial Projections",
      financeSubtitle: "Conservative estimates based on comparable platform businesses.",
      financeYears: [
        { year: "2026", revenue: "$100K", users: "5K", margin: "-40%" },
        { year: "2027", revenue: "$1M", users: "50K", margin: "10%" },
        { year: "2028", revenue: "$10M", users: "500K", margin: "35%" },
        { year: "2029", revenue: "$30M", users: "1.2M", margin: "45%" },
        { year: "2030", revenue: "$50M+", users: "2M+", margin: "50%+" }
      ],
      
      // Cultural Partner Benefits
      partnerTitle: "Cultural Institution Partnership",
      partnerSubtitle: "How we create value for heritage organizations.",
      partnerBenefits: [
        {
          icon: Coins,
          title: "New Revenue Stream",
          description: "Monetize your cultural IP through AI interactions, licensing, and merchandise—without additional staff or infrastructure.",
          metric: "70% revenue share"
        },
        {
          icon: Globe,
          title: "Global Reach",
          description: "Reach audiences worldwide in their native languages. Your heritage, accessible to billions.",
          metric: "150+ countries"
        },
        {
          icon: Shield,
          title: "IP Protection",
          description: "We ensure your cultural heritage is represented accurately and respectfully, with full audit trails.",
          metric: "100% attribution"
        },
        {
          icon: LineChart,
          title: "Engagement Analytics",
          description: "Understand how global audiences interact with your heritage through detailed analytics dashboards.",
          metric: "Real-time insights"
        }
      ],
      partnerJourney: [
        { step: "1", title: "Discovery", duration: "Week 1", description: "We assess your cultural assets and discuss partnership scope." },
        { step: "2", title: "Digitization", duration: "Week 2-4", description: "Our team digitizes and structures your heritage data." },
        { step: "3", title: "AI Training", duration: "Week 5-8", description: "Custom AI model trained on your verified knowledge base." },
        { step: "4", title: "Launch", duration: "Week 9", description: "Your cultural AI agent goes live on the platform." },
        { step: "5", title: "Growth", duration: "Ongoing", description: "Continuous improvement, marketing support, and revenue sharing." }
      ],
      
      // Target Cultural IPs
      targetTitle: "Target Cultural Heritage Portfolio",
      targetSubtitle: "Strategic IP acquisition roadmap across civilizations.",
      targetRegions: [
        {
          region: "East Asia",
          timeline: "2026-2027",
          ips: ["Chinese Classics & Philosophy", "Japanese Edo Period", "Korean Joseon Dynasty", "Vietnamese Imperial History"]
        },
        {
          region: "South & Southeast Asia",
          timeline: "2027-2028",
          ips: ["Indian Vedic Traditions", "Thai Royal Heritage", "Indonesian Archipelago Cultures", "Khmer Empire History"]
        },
        {
          region: "Middle East & Africa",
          timeline: "2028",
          ips: ["Islamic Golden Age", "Ancient Egyptian Heritage", "Persian Empire", "Sub-Saharan Kingdoms"]
        },
        {
          region: "Europe & Americas",
          timeline: "2028-2029",
          ips: ["Renaissance Masters", "Greek & Roman Classics", "Indigenous American Heritage", "Medieval European History"]
        }
      ],
      
      // CTA
      ctaTitle: "Join the Cultural AI Revolution",
      ctaSubtitle: "Whether you're an investor seeking the next platform opportunity, a cultural institution ready to digitize, or a partner wanting to shape the future of heritage—the time to act is now.",
      ctaButton1: "Investor Relations",
      ctaButton2: "Partnership Inquiry",
      ctaButton3: "Download Pitch Deck"
    },
    zh: {
      // Hero
      badge: "战略路线图 2026-2030",
      heroTitle1: "构建",
      heroTitle2: "文化AI标准",
      heroSubtitle: "五年战略愿景，将文化方舟打造为全球文化遗产数字化、AI部署和商业化的基础设施。每个阶段都为投资者、文化机构和终端用户创造指数级价值。",
      
      // Market Opportunity
      marketTitle: "500亿美元的文化AI机遇",
      marketSubtitle: "我们处于三大融合趋势的交汇点。",
      marketStats: [
        { value: "$500亿", label: "2030年文化遗产科技市场规模", icon: DollarSign },
        { value: "85%", label: "计划数字化转型的博物馆", icon: Percent },
        { value: "32亿", label: "全球年度文化旅游游客", icon: Users },
        { value: "12%", label: "年度市场增长率", icon: TrendingUp }
      ],
      marketTrends: [
        {
          title: "AI革命",
          description: "大语言模型首次使文化知识能够大规模普及。",
          growth: "+340% 同比"
        },
        {
          title: "文化数字化浪潮",
          description: "后疫情时代，机构竞相数字化藏品并创建虚拟体验。",
          growth: "+180% 同比"
        },
        {
          title: "体验经济",
          description: "消费者越来越重视真实、教育性的体验，而非被动消费。",
          growth: "+95% 同比"
        }
      ],
      
      // Strategic Phases
      phasesTitle: "五年战略路线图",
      phasesSubtitle: "每个阶段都有清晰的里程碑和可衡量的成果。",
      phases: [
        {
          phase: "第一阶段",
          title: "基础建设与概念验证",
          status: "complete",
          timeline: "2026年Q1-Q2",
          investment: "种子轮: $50万",
          description: "建立核心技术平台，用旗舰中华文化IP验证概念。",
          milestones: [
            { text: "核心AI平台架构完成", done: true },
            { text: "首个文化IP合作（中华经典）", done: true },
            { text: "知识库：10,000+验证条目", done: true },
            { text: "多轮对话AI能力", done: true },
            { text: "500+用户Beta测试", done: false }
          ],
          keyMetrics: [
            { label: "知识条目", value: "10,000+" },
            { label: "AI准确率", value: "94%" },
            { label: "用户满意度", value: "4.7/5" }
          ],
          deliverables: "可运行平台、首次收入、验证PMF"
        },
        {
          phase: "第二阶段",
          title: "市场验证与收入",
          status: "current",
          timeline: "2026年Q3-Q4",
          investment: "Pre-A轮: $200万",
          description: "验证收入模型，扩展IP组合，建立中华文化AI市场领导地位。",
          milestones: [
            { text: "公开发布，5,000+活跃用户", done: false },
            { text: "新增3个文化IP合作", done: false },
            { text: "面向企业客户的B2B API发布", done: false },
            { text: "首个教育机构合作", done: false },
            { text: "$10万ARR里程碑", done: false }
          ],
          keyMetrics: [
            { label: "目标用户", value: "5,000" },
            { label: "目标ARR", value: "$10万" },
            { label: "IP合作伙伴", value: "4" }
          ],
          deliverables: "验证的收入模型、企业客户、品类领导地位"
        },
        {
          phase: "第三阶段",
          title: "区域扩展",
          status: "upcoming",
          timeline: "2027年",
          investment: "A轮: $1000万",
          description: "扩展至泛亚洲文化遗产，推出多语言支持，规模化B2B运营。",
          milestones: [
            { text: "日本文化IP合作（江户时代、武士）", done: false },
            { text: "韩国文化IP合作（朝鲜王朝）", done: false },
            { text: "东南亚遗产合作", done: false },
            { text: "多语言支持：中/英/日/韩/泰", done: false },
            { text: "50,000+月活跃用户", done: false },
            { text: "$100万ARR里程碑", done: false }
          ],
          keyMetrics: [
            { label: "目标MAU", value: "50,000" },
            { label: "目标ARR", value: "$100万" },
            { label: "IP合作伙伴", value: "15+" }
          ],
          deliverables: "泛亚洲市场领导地位、企业收入流"
        },
        {
          phase: "第四阶段",
          title: "全球平台",
          status: "upcoming",
          timeline: "2028年",
          investment: "B轮: $3000万",
          description: "扩展至西方文化遗产，推出多模态能力，建立全球市场。",
          milestones: [
            { text: "欧洲文化IP合作（文艺复兴、古典）", done: false },
            { text: "中东遗产合作", done: false },
            { text: "非洲文化遗产合作", done: false },
            { text: "多模态AI：图像/音频/视频生成", done: false },
            { text: "文化AI市场启动", done: false },
            { text: "500,000+月活跃用户", done: false }
          ],
          keyMetrics: [
            { label: "目标MAU", value: "50万" },
            { label: "目标ARR", value: "$1000万" },
            { label: "IP合作伙伴", value: "50+" }
          ],
          deliverables: "全球平台、多模态能力、市场收入"
        },
        {
          phase: "第五阶段",
          title: "平台主导",
          status: "upcoming",
          timeline: "2029-2030年",
          investment: "C轮: $1亿",
          description: "成为全球文化AI的权威基础设施，准备IPO。",
          milestones: [
            { text: "全球200万+月活跃用户", done: false },
            { text: "跨6大洲100+文化IP合作", done: false },
            { text: "文化AI开发者生态系统", done: false },
            { text: "自主文化内容创作", done: false },
            { text: "IPO准备与执行", done: false }
          ],
          keyMetrics: [
            { label: "目标MAU", value: "200万+" },
            { label: "目标ARR", value: "$5000万" },
            { label: "IP合作伙伴", value: "100+" }
          ],
          deliverables: "市场主导、IPO、品类定义"
        }
      ],
      
      // Investment Thesis
      investTitle: "投资论点",
      investSubtitle: "为什么文化方舟是一个引人注目的投资机会。",
      investPoints: [
        {
          icon: Target,
          title: "先发优势",
          description: "没有现有平台能够大规模结合文化IP数字化、AI部署和商业化。我们正在定义这个品类。"
        },
        {
          icon: Shield,
          title: "可防御的护城河",
          description: "独家IP合作、专有训练数据和网络效应创造复合竞争优势。"
        },
        {
          icon: TrendingUp,
          title: "多元收入流",
          description: "B2C订阅、B2B API授权、市场佣金和IP收入分成创造多元化收入。"
        },
        {
          icon: Globe,
          title: "全球可扩展性",
          description: "文化遗产是普遍的。我们的平台可以扩展到任何文化、任何语言、任何市场。"
        }
      ],
      
      // Financial Projections
      financeTitle: "财务预测",
      financeSubtitle: "基于可比平台业务的保守估计。",
      financeYears: [
        { year: "2026", revenue: "$10万", users: "5K", margin: "-40%" },
        { year: "2027", revenue: "$100万", users: "50K", margin: "10%" },
        { year: "2028", revenue: "$1000万", users: "500K", margin: "35%" },
        { year: "2029", revenue: "$3000万", users: "120万", margin: "45%" },
        { year: "2030", revenue: "$5000万+", users: "200万+", margin: "50%+" }
      ],
      
      // Cultural Partner Benefits
      partnerTitle: "文化机构合作",
      partnerSubtitle: "我们如何为遗产组织创造价值。",
      partnerBenefits: [
        {
          icon: Coins,
          title: "新收入来源",
          description: "通过AI互动、授权和周边商品将您的文化IP变现——无需额外人员或基础设施。",
          metric: "70%收入分成"
        },
        {
          icon: Globe,
          title: "全球触达",
          description: "以用户母语触达全球受众。您的遗产，数十亿人可访问。",
          metric: "150+国家"
        },
        {
          icon: Shield,
          title: "IP保护",
          description: "我们确保您的文化遗产得到准确、尊重的呈现，并有完整的审计追踪。",
          metric: "100%归属"
        },
        {
          icon: LineChart,
          title: "参与度分析",
          description: "通过详细的分析仪表板了解全球受众如何与您的遗产互动。",
          metric: "实时洞察"
        }
      ],
      partnerJourney: [
        { step: "1", title: "发现", duration: "第1周", description: "我们评估您的文化资产并讨论合作范围。" },
        { step: "2", title: "数字化", duration: "第2-4周", description: "我们的团队数字化并结构化您的遗产数据。" },
        { step: "3", title: "AI训练", duration: "第5-8周", description: "基于您验证的知识库训练定制AI模型。" },
        { step: "4", title: "启动", duration: "第9周", description: "您的文化AI智能体在平台上线。" },
        { step: "5", title: "增长", duration: "持续", description: "持续改进、营销支持和收入分成。" }
      ],
      
      // Target Cultural IPs
      targetTitle: "目标文化遗产组合",
      targetSubtitle: "跨文明的战略IP获取路线图。",
      targetRegions: [
        {
          region: "东亚",
          timeline: "2026-2027",
          ips: ["中华经典与哲学", "日本江户时代", "韩国朝鲜王朝", "越南皇室历史"]
        },
        {
          region: "南亚与东南亚",
          timeline: "2027-2028",
          ips: ["印度吠陀传统", "泰国皇室遗产", "印尼群岛文化", "高棉帝国历史"]
        },
        {
          region: "中东与非洲",
          timeline: "2028",
          ips: ["伊斯兰黄金时代", "古埃及遗产", "波斯帝国", "撒哈拉以南王国"]
        },
        {
          region: "欧洲与美洲",
          timeline: "2028-2029",
          ips: ["文艺复兴大师", "希腊罗马经典", "美洲原住民遗产", "中世纪欧洲历史"]
        }
      ],
      
      // CTA
      ctaTitle: "加入文化AI革命",
      ctaSubtitle: "无论您是寻求下一个平台机会的投资者、准备数字化的文化机构，还是想要塑造遗产未来的合作伙伴——行动的时机就是现在。",
      ctaButton1: "投资者关系",
      ctaButton2: "合作咨询",
      ctaButton3: "下载商业计划书"
    }
  };

  const t = content[language];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete": return "bg-green-500/20 text-green-500 border-green-500/30";
      case "current": return "bg-chart-1/20 text-chart-1 border-chart-1/30";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete": return <CheckCircle2 className="w-5 h-5" />;
      case "current": return <Zap className="w-5 h-5" />;
      default: return <Circle className="w-5 h-5" />;
    }
  };

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

      {/* Market Opportunity */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.marketTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.marketSubtitle}</p>
          </motion.div>
          
          {/* Market Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {t.marketStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-sm bg-card border border-border text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Market Trends */}
          <div className="grid md:grid-cols-3 gap-6">
            {t.marketTrends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-sm bg-card border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-heading font-bold text-foreground">{trend.title}</h3>
                  <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">{trend.growth}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{trend.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Phases */}
      <section className="py-24 md:py-32">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.phasesTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.phasesSubtitle}</p>
          </motion.div>
          
          <div className="space-y-8">
            {t.phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-sm border ${phase.status === 'current' ? 'border-chart-1 bg-chart-1/5' : 'border-border bg-card'}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Phase Header */}
                  <div className="lg:w-64 shrink-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`p-2 rounded-full border ${getStatusColor(phase.status)}`}>
                        {getStatusIcon(phase.status)}
                      </span>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">{phase.phase}</div>
                        <div className="text-xl font-heading font-bold text-foreground">{phase.title}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {phase.timeline}
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      <DollarSign className="w-4 h-4" />
                      {phase.investment}
                    </div>
                  </div>
                  
                  {/* Phase Content */}
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-6">{phase.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Milestones */}
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">{language === 'zh' ? '里程碑' : 'Milestones'}</h4>
                        <ul className="space-y-2">
                          {phase.milestones.map((milestone, mIndex) => (
                            <li key={mIndex} className="flex items-start gap-2 text-sm">
                              {milestone.done ? (
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                              ) : (
                                <Circle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                              )}
                              <span className={milestone.done ? 'text-foreground' : 'text-muted-foreground'}>{milestone.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Key Metrics */}
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">{language === 'zh' ? '关键指标' : 'Key Metrics'}</h4>
                        <div className="grid grid-cols-3 gap-3">
                          {phase.keyMetrics.map((metric, mIndex) => (
                            <div key={mIndex} className="p-3 rounded-sm bg-muted/50 text-center">
                              <div className="text-lg font-bold text-primary">{metric.value}</div>
                              <div className="text-xs text-muted-foreground">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 p-3 rounded-sm bg-primary/5 border border-primary/20">
                          <div className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{language === 'zh' ? '交付成果' : 'Deliverables'}</div>
                          <div className="text-sm text-foreground">{phase.deliverables}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.investTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.investSubtitle}</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {t.investPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-sm bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-24 md:py-32">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.financeTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.financeSubtitle}</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-heading font-bold text-foreground">{language === 'zh' ? '年份' : 'Year'}</th>
                  <th className="text-right py-4 px-4 font-heading font-bold text-foreground">{language === 'zh' ? '收入' : 'Revenue'}</th>
                  <th className="text-right py-4 px-4 font-heading font-bold text-foreground">{language === 'zh' ? '用户' : 'Users'}</th>
                  <th className="text-right py-4 px-4 font-heading font-bold text-foreground">{language === 'zh' ? '利润率' : 'Margin'}</th>
                </tr>
              </thead>
              <tbody>
                {t.financeYears.map((year, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-border/50"
                  >
                    <td className="py-4 px-4 font-bold text-foreground">{year.year}</td>
                    <td className="py-4 px-4 text-right text-primary font-medium">{year.revenue}</td>
                    <td className="py-4 px-4 text-right text-muted-foreground">{year.users}</td>
                    <td className="py-4 px-4 text-right">
                      <span className={year.margin.startsWith('-') ? 'text-red-500' : 'text-green-500'}>
                        {year.margin}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cultural Partner Benefits */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.partnerTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.partnerSubtitle}</p>
          </motion.div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {t.partnerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-sm bg-card border border-border text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{benefit.description}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
                  {benefit.metric}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Partner Journey */}
          <div className="p-8 rounded-sm bg-card border border-border">
            <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-8">{language === 'zh' ? '合作旅程' : 'Partnership Journey'}</h3>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {t.partnerJourney.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-1 text-center relative"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold">
                    {step.step}
                  </div>
                  <h4 className="font-heading font-bold text-foreground mb-1">{step.title}</h4>
                  <div className="text-xs text-primary mb-2">{step.duration}</div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < t.partnerJourney.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-5 -right-4 w-8 h-8 text-muted-foreground/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Cultural IPs */}
      <section className="py-24 md:py-32">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.targetTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.targetSubtitle}</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {t.targetRegions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-sm bg-card border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-heading font-bold text-foreground">{region.region}</h3>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">{region.timeline}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.ips.map((ip, ipIndex) => (
                    <span key={ipIndex} className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
                      {ip}
                    </span>
                  ))}
                </div>
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
            <Rocket className="w-16 h-16 text-primary mx-auto" />
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
              <Link href="/contact">
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
