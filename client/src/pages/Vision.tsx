import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { 
  Globe, 
  Sparkles, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap,
  Target,
  Award,
  Building2,
  Landmark,
  BookOpen,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Vision() {
  const { language } = useI18n();

  const content = {
    en: {
      // Hero
      badge: "Our Vision",
      heroTitle1: "Building the Digital Ark",
      heroTitle2: "for Human Civilization",
      heroSubtitle: "In an era where AI is reshaping everything, we are creating the infrastructure that ensures humanity's cultural heritage not only survives but thrives and evolves.",
      
      // Mission Statement
      missionTitle: "Our Mission",
      missionContent: "To become the world's leading platform for Cultural AI, empowering every civilization's wisdom to transcend time and space, creating sustainable value for cultural custodians while making heritage accessible to all of humanity.",
      
      // The Opportunity
      opportunityTitle: "A Trillion-Dollar Opportunity",
      opportunitySubtitle: "The convergence of AI and cultural heritage represents one of the most significant untapped markets of our generation.",
      opportunityStats: [
        { value: "$2.1T", label: "Global Cultural & Creative Industry", icon: Globe },
        { value: "78%", label: "Cultural Assets Still Undigitized", icon: BookOpen },
        { value: "5.2B", label: "Potential Users Seeking Cultural Content", icon: Users },
        { value: "340%", label: "YoY Growth in AI Cultural Applications", icon: TrendingUp }
      ],
      
      // Why Now
      whyNowTitle: "Why Now?",
      whyNowItems: [
        {
          icon: Zap,
          title: "AI Inflection Point",
          content: "Large Language Models have reached the capability threshold where nuanced cultural understanding becomes possible. The next 3 years will determine who owns the cultural AI infrastructure."
        },
        {
          icon: Shield,
          title: "Cultural Urgency",
          content: "Generic AI models are already misrepresenting cultural heritage. Without dedicated cultural AI, we risk a homogenized digital future where authentic traditions are lost."
        },
        {
          icon: Target,
          title: "Market Readiness",
          content: "Cultural institutions, IP holders, and governments are actively seeking solutions. The demand exists—what's missing is the platform."
        }
      ],
      
      // Value Proposition
      valueTitle: "Our Unique Value",
      valueSubtitle: "We're not just building technology—we're creating an ecosystem.",
      valueItems: [
        {
          icon: Building2,
          title: "For Cultural Institutions",
          points: [
            "Transform static archives into living, interactive experiences",
            "Generate new revenue streams from existing assets",
            "Reach global audiences without physical constraints",
            "Preserve authenticity while enabling innovation"
          ]
        },
        {
          icon: Users,
          title: "For Users & Learners",
          points: [
            "Access expert-level cultural knowledge instantly",
            "Experience personalized cultural education",
            "Connect with heritage in your native language",
            "Discover hidden stories and perspectives"
          ]
        },
        {
          icon: Landmark,
          title: "For Investors",
          points: [
            "First-mover advantage in Cultural AI infrastructure",
            "Recurring revenue from AI-as-a-Service model",
            "Network effects from growing cultural partnerships",
            "ESG alignment with cultural preservation mission"
          ]
        }
      ],
      
      // Competitive Moat
      moatTitle: "Our Competitive Moat",
      moatItems: [
        { title: "Exclusive Data Partnerships", content: "Long-term agreements with cultural institutions provide proprietary training data that cannot be replicated." },
        { title: "Domain-Specific Architecture", content: "Our AI models are purpose-built for cultural nuance, not retrofitted general models." },
        { title: "Compliance Framework", content: "Built-in respect for cultural sensitivities, IP rights, and ethical AI principles." },
        { title: "Network Effects", content: "Each new cultural partner enriches the platform, attracting more users and partners." }
      ],
      
      // Team Vision
      teamTitle: "Built by Believers",
      teamContent: "Our founding team combines deep expertise in AI/ML, cultural heritage preservation, and platform business models. We're not just building a company—we're on a mission to ensure that as humanity enters the AI age, we bring our collective wisdom with us.",
      
      // Call to Action
      ctaTitle: "Join the Movement",
      ctaSubtitle: "Whether you're a cultural institution seeking to digitize your heritage, an investor looking for meaningful impact, or a partner wanting to shape the future of cultural AI—we want to hear from you.",
      ctaButton1: "Partner With Us",
      ctaButton2: "Investor Deck",
      
      // Footer Quote
      quote: "\"The measure of a civilization is not just what it creates, but what it preserves for future generations.\"",
      quoteAuthor: "— CultureArk Founding Principle"
    },
    zh: {
      // Hero
      badge: "我们的愿景",
      heroTitle1: "构建人类文明的",
      heroTitle2: "数字方舟",
      heroSubtitle: "在AI重塑一切的时代，我们正在创建确保人类文化遗产不仅得以存续，更能蓬勃发展、持续演进的基础设施。",
      
      // Mission Statement
      missionTitle: "我们的使命",
      missionContent: "成为全球领先的文化AI平台，让每一种文明的智慧超越时空界限，为文化守护者创造可持续价值，同时让全人类都能触及文化遗产。",
      
      // The Opportunity
      opportunityTitle: "万亿级市场机遇",
      opportunitySubtitle: "AI与文化遗产的融合，代表着我们这一代人最重要的未开发市场之一。",
      opportunityStats: [
        { value: "2.1万亿", label: "全球文化创意产业规模", icon: Globe },
        { value: "78%", label: "文化资产尚未数字化", icon: BookOpen },
        { value: "52亿", label: "潜在文化内容用户", icon: Users },
        { value: "340%", label: "AI文化应用年增长率", icon: TrendingUp }
      ],
      
      // Why Now
      whyNowTitle: "为什么是现在？",
      whyNowItems: [
        {
          icon: Zap,
          title: "AI临界点",
          content: "大语言模型已达到能够实现细腻文化理解的能力阈值。未来3年将决定谁拥有文化AI基础设施。"
        },
        {
          icon: Shield,
          title: "文化紧迫性",
          content: "通用AI模型已经在误解文化遗产。没有专门的文化AI，我们将面临一个同质化的数字未来，真正的传统将会消失。"
        },
        {
          icon: Target,
          title: "市场成熟度",
          content: "文化机构、IP持有者和政府正在积极寻求解决方案。需求已经存在——缺少的是平台。"
        }
      ],
      
      // Value Proposition
      valueTitle: "我们的独特价值",
      valueSubtitle: "我们不仅仅是在构建技术——我们在创建一个生态系统。",
      valueItems: [
        {
          icon: Building2,
          title: "对于文化机构",
          points: [
            "将静态档案转化为活的、互动的体验",
            "从现有资产中创造新的收入来源",
            "突破物理限制触达全球受众",
            "在保持真实性的同时实现创新"
          ]
        },
        {
          icon: Users,
          title: "对于用户与学习者",
          points: [
            "即时获取专家级文化知识",
            "体验个性化文化教育",
            "用母语连接文化遗产",
            "发现隐藏的故事和视角"
          ]
        },
        {
          icon: Landmark,
          title: "对于投资者",
          points: [
            "文化AI基础设施的先发优势",
            "AI即服务模式的经常性收入",
            "不断增长的文化合作伙伴带来的网络效应",
            "与文化保护使命的ESG一致性"
          ]
        }
      ],
      
      // Competitive Moat
      moatTitle: "我们的竞争护城河",
      moatItems: [
        { title: "独家数据合作", content: "与文化机构的长期协议提供无法复制的专有训练数据。" },
        { title: "领域专用架构", content: "我们的AI模型是为文化细微差别专门构建的，而非改装的通用模型。" },
        { title: "合规框架", content: "内置对文化敏感性、知识产权和AI伦理原则的尊重。" },
        { title: "网络效应", content: "每一个新的文化合作伙伴都会丰富平台，吸引更多用户和合作伙伴。" }
      ],
      
      // Team Vision
      teamTitle: "由信仰者构建",
      teamContent: "我们的创始团队结合了AI/ML、文化遗产保护和平台商业模式方面的深厚专业知识。我们不仅仅是在建立一家公司——我们肩负使命，确保人类在进入AI时代时，能够带上我们的集体智慧。",
      
      // Call to Action
      ctaTitle: "加入这场运动",
      ctaSubtitle: "无论您是希望将遗产数字化的文化机构、寻求有意义影响的投资者，还是想要塑造文化AI未来的合作伙伴——我们都期待与您交流。",
      ctaButton1: "成为合作伙伴",
      ctaButton2: "投资者资料",
      
      // Footer Quote
      quote: "\"衡量一个文明的标准，不仅在于它创造了什么，更在于它为后代保存了什么。\"",
      quoteAuthor: "— 文化方舟创始原则"
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

      {/* Mission Statement */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Heart className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t.missionTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t.missionContent}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 md:py-32">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.opportunityTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.opportunitySubtitle}</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.opportunityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-sm bg-card border border-border text-center hover:border-primary/50 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">{t.whyNowTitle}</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.whyNowItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-sm bg-card border border-border relative overflow-hidden group hover:border-primary/50 transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
                <item.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 md:py-32">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.valueTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.valueSubtitle}</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.valueItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-sm bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">{item.title}</h3>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <Sparkles className="w-4 h-4 text-chart-2 mt-1 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Moat */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">{t.moatTitle}</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {t.moatItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-sm bg-card border border-border relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-chart-1 to-chart-2" />
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Vision */}
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Award className="w-16 h-16 text-primary mx-auto" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">{t.teamTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t.teamContent}
            </p>
          </motion.div>
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
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-sm border-primary/30 hover:bg-primary/5 font-heading tracking-wide">
                  {t.ctaButton2}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl font-heading italic text-foreground/80">
              {t.quote}
            </p>
            <p className="text-sm text-muted-foreground">{t.quoteAuthor}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
