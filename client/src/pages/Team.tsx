import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { 
  Linkedin, 
  Twitter, 
  Mail,
  GraduationCap,
  Briefcase,
  Award,
  Users,
  Target,
  Heart,
  Globe,
  Lightbulb,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Team() {
  const { language } = useI18n();

  const content = {
    en: {
      // Hero
      badge: "Our Team",
      heroTitle1: "The Minds Behind",
      heroTitle2: "CultureArk",
      heroSubtitle: "A world-class team combining deep expertise in AI, cultural heritage, and business scaling. United by a shared mission to preserve and democratize human cultural wisdom.",
      
      // Leadership
      leadershipTitle: "Leadership Team",
      leadershipSubtitle: "Experienced founders and executives driving our vision forward.",
      leaders: [
        {
          name: "Dr. Wei Chen",
          role: "Co-Founder & CEO",
          image: "/images/team/ceo.jpg",
          bio: "Former Head of AI Research at Tencent. PhD in Machine Learning from Stanford. 15+ years building AI products at scale. Passionate about using technology to preserve cultural heritage.",
          credentials: [
            "PhD Machine Learning, Stanford University",
            "Former Head of AI Research, Tencent",
            "50+ published papers in top AI conferences",
            "Forbes 30 Under 30 Asia"
          ],
          linkedin: "#",
          twitter: "#"
        },
        {
          name: "Prof. Li Ming",
          role: "Co-Founder & Chief Cultural Officer",
          image: "/images/team/cco.jpg",
          bio: "Distinguished Professor of Chinese Studies at Peking University. Author of 12 books on Chinese philosophy and history. Advisor to UNESCO on intangible cultural heritage.",
          credentials: [
            "Distinguished Professor, Peking University",
            "UNESCO Cultural Heritage Advisor",
            "Author of 12 books on Chinese culture",
            "National Cultural Preservation Award"
          ],
          linkedin: "#",
          twitter: "#"
        },
        {
          name: "Sarah Zhang",
          role: "Co-Founder & COO",
          image: "/images/team/coo.jpg",
          bio: "Former VP of Operations at ByteDance. MBA from Harvard Business School. Expert in scaling consumer products across global markets.",
          credentials: [
            "MBA, Harvard Business School",
            "Former VP Operations, ByteDance",
            "Scaled products to 100M+ users",
            "10+ years in tech operations"
          ],
          linkedin: "#",
          twitter: "#"
        },
        {
          name: "Dr. James Liu",
          role: "CTO",
          image: "/images/team/cto.jpg",
          bio: "Former Principal Engineer at Google Brain. PhD in NLP from MIT. Pioneer in large language model development and cultural AI applications.",
          credentials: [
            "PhD NLP, MIT",
            "Former Principal Engineer, Google Brain",
            "20+ patents in AI technology",
            "ACM Distinguished Scientist"
          ],
          linkedin: "#",
          twitter: "#"
        }
      ],
      
      // Advisors
      advisorsTitle: "Advisory Board",
      advisorsSubtitle: "World-renowned experts guiding our strategic direction.",
      advisors: [
        {
          name: "Dr. Michael Porter",
          role: "Strategic Advisor",
          affiliation: "Harvard Business School",
          expertise: "Competitive Strategy"
        },
        {
          name: "Prof. Fei-Fei Li",
          role: "AI Advisor",
          affiliation: "Stanford University",
          expertise: "Computer Vision & AI Ethics"
        },
        {
          name: "Dr. Wang Wei",
          role: "Cultural Advisor",
          affiliation: "Palace Museum Beijing",
          expertise: "Chinese Art History"
        },
        {
          name: "Jennifer Chen",
          role: "Business Advisor",
          affiliation: "Sequoia Capital",
          expertise: "Venture Capital & Scaling"
        }
      ],
      
      // Team Stats
      statsTitle: "Team at a Glance",
      stats: [
        { value: "45+", label: "Team Members", icon: Users },
        { value: "12", label: "Countries Represented", icon: Globe },
        { value: "8", label: "PhDs on Staff", icon: GraduationCap },
        { value: "200+", label: "Combined Years Experience", icon: Briefcase }
      ],
      
      // Culture & Values
      valuesTitle: "Our Values",
      valuesSubtitle: "The principles that guide everything we do.",
      values: [
        {
          icon: Heart,
          title: "Cultural Respect",
          description: "We approach every culture with deep respect and authenticity. Our AI is trained to preserve nuance, not flatten it."
        },
        {
          icon: Lightbulb,
          title: "Innovation with Purpose",
          description: "We build cutting-edge technology not for its own sake, but to solve real problems in cultural preservation."
        },
        {
          icon: Target,
          title: "Excellence in Execution",
          description: "We hold ourselves to the highest standards. Every feature, every interaction must meet our quality bar."
        },
        {
          icon: Users,
          title: "Collaborative Spirit",
          description: "We believe the best work happens when diverse perspectives come together. Our team is our greatest asset."
        }
      ],
      
      // Hiring
      hiringTitle: "Join Our Mission",
      hiringSubtitle: "We're always looking for exceptional talent who share our passion for cultural preservation and AI innovation.",
      hiringRoles: [
        "Senior AI/ML Engineers",
        "Cultural Content Specialists",
        "Product Managers",
        "Business Development"
      ],
      hiringButton: "View Open Positions",
      
      // CTA
      ctaTitle: "Want to Learn More?",
      ctaSubtitle: "Connect with our team to discuss partnership opportunities, investment inquiries, or just to learn more about our mission.",
      ctaButton: "Contact Us"
    },
    zh: {
      // Hero
      badge: "我们的团队",
      heroTitle1: "文化方舟",
      heroTitle2: "背后的智囊",
      heroSubtitle: "一支世界级团队，融合AI、文化遗产和商业扩展的深厚专业知识。因共同的使命而团结：保护和普及人类文化智慧。",
      
      // Leadership
      leadershipTitle: "领导团队",
      leadershipSubtitle: "经验丰富的创始人和高管推动我们的愿景前进。",
      leaders: [
        {
          name: "陈伟博士",
          role: "联合创始人 & CEO",
          image: "/images/team/ceo.jpg",
          bio: "前腾讯AI研究院负责人。斯坦福大学机器学习博士。15年以上大规模AI产品开发经验。致力于用技术保护文化遗产。",
          credentials: [
            "斯坦福大学机器学习博士",
            "前腾讯AI研究院负责人",
            "顶级AI会议发表50+论文",
            "福布斯亚洲30位30岁以下精英"
          ],
          linkedin: "#",
          twitter: "#"
        },
        {
          name: "李明教授",
          role: "联合创始人 & 首席文化官",
          image: "/images/team/cco.jpg",
          bio: "北京大学中国学杰出教授。著有12本中国哲学和历史著作。联合国教科文组织非物质文化遗产顾问。",
          credentials: [
            "北京大学杰出教授",
            "联合国教科文组织文化遗产顾问",
            "著有12本中国文化著作",
            "国家文化保护奖获得者"
          ],
          linkedin: "#",
          twitter: "#"
        },
        {
          name: "张莎拉",
          role: "联合创始人 & COO",
          image: "/images/team/coo.jpg",
          bio: "前字节跳动运营副总裁。哈佛商学院MBA。全球市场消费产品扩展专家。",
          credentials: [
            "哈佛商学院MBA",
            "前字节跳动运营副总裁",
            "产品用户规模扩展至1亿+",
            "10年以上科技运营经验"
          ],
          linkedin: "#",
          twitter: "#"
        },
        {
          name: "刘杰博士",
          role: "CTO",
          image: "/images/team/cto.jpg",
          bio: "前谷歌大脑首席工程师。麻省理工学院NLP博士。大语言模型开发和文化AI应用先驱。",
          credentials: [
            "麻省理工学院NLP博士",
            "前谷歌大脑首席工程师",
            "20+项AI技术专利",
            "ACM杰出科学家"
          ],
          linkedin: "#",
          twitter: "#"
        }
      ],
      
      // Advisors
      advisorsTitle: "顾问委员会",
      advisorsSubtitle: "世界知名专家指导我们的战略方向。",
      advisors: [
        {
          name: "迈克尔·波特博士",
          role: "战略顾问",
          affiliation: "哈佛商学院",
          expertise: "竞争战略"
        },
        {
          name: "李飞飞教授",
          role: "AI顾问",
          affiliation: "斯坦福大学",
          expertise: "计算机视觉与AI伦理"
        },
        {
          name: "王伟博士",
          role: "文化顾问",
          affiliation: "北京故宫博物院",
          expertise: "中国艺术史"
        },
        {
          name: "陈珍妮",
          role: "商业顾问",
          affiliation: "红杉资本",
          expertise: "风险投资与扩展"
        }
      ],
      
      // Team Stats
      statsTitle: "团队概览",
      stats: [
        { value: "45+", label: "团队成员", icon: Users },
        { value: "12", label: "代表国家", icon: Globe },
        { value: "8", label: "博士成员", icon: GraduationCap },
        { value: "200+", label: "累计经验年数", icon: Briefcase }
      ],
      
      // Culture & Values
      valuesTitle: "我们的价值观",
      valuesSubtitle: "指导我们一切行动的原则。",
      values: [
        {
          icon: Heart,
          title: "文化尊重",
          description: "我们以深切的尊重和真实性对待每一种文化。我们的AI经过训练以保留细微差别，而非将其抹平。"
        },
        {
          icon: Lightbulb,
          title: "有目的的创新",
          description: "我们构建尖端技术不是为了技术本身，而是为了解决文化保护中的实际问题。"
        },
        {
          icon: Target,
          title: "卓越执行",
          description: "我们对自己要求最高标准。每个功能、每次交互都必须达到我们的质量标准。"
        },
        {
          icon: Users,
          title: "协作精神",
          description: "我们相信最好的工作来自多元视角的汇聚。我们的团队是我们最大的资产。"
        }
      ],
      
      // Hiring
      hiringTitle: "加入我们的使命",
      hiringSubtitle: "我们一直在寻找对文化保护和AI创新充满热情的杰出人才。",
      hiringRoles: [
        "高级AI/ML工程师",
        "文化内容专家",
        "产品经理",
        "商务拓展"
      ],
      hiringButton: "查看开放职位",
      
      // CTA
      ctaTitle: "想了解更多？",
      ctaSubtitle: "联系我们的团队，讨论合作机会、投资咨询，或只是了解更多关于我们使命的信息。",
      ctaButton: "联系我们"
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

      {/* Team Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.map((stat, index) => (
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
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 md:py-32">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.leadershipTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.leadershipSubtitle}</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {t.leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-sm bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center shrink-0 mx-auto md:mx-0">
                    <span className="text-3xl md:text-4xl font-heading font-bold text-primary">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-1">{leader.name}</h3>
                    <div className="text-primary font-medium mb-3">{leader.role}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{leader.bio}</p>
                    
                    {/* Credentials */}
                    <div className="space-y-1 mb-4">
                      {leader.credentials.slice(0, 2).map((cred, cIndex) => (
                        <div key={cIndex} className="flex items-center gap-2 text-xs text-muted-foreground justify-center md:justify-start">
                          <Award className="w-3 h-3 text-chart-1" />
                          {cred}
                        </div>
                      ))}
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <a href={leader.linkedin} className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors">
                        <Linkedin className="w-4 h-4 text-muted-foreground" />
                      </a>
                      <a href={leader.twitter} className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors">
                        <Twitter className="w-4 h-4 text-muted-foreground" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.advisorsTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.advisorsSubtitle}</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.advisors.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-sm bg-card border border-border text-center"
              >
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-heading font-bold text-primary">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">{advisor.name}</h3>
                <div className="text-sm text-primary mb-2">{advisor.role}</div>
                <div className="text-xs text-muted-foreground mb-1">{advisor.affiliation}</div>
                <div className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                  {advisor.expertise}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.valuesTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.valuesSubtitle}</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-sm bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Rocket className="w-16 h-16 text-primary mx-auto" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">{t.hiringTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t.hiringSubtitle}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              {t.hiringRoles.map((role, index) => (
                <span key={index} className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground">
                  {role}
                </span>
              ))}
            </div>
            
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg rounded-sm bg-primary hover:bg-primary/90 text-primary-foreground font-heading tracking-wide shadow-lg shadow-primary/20">
                {t.hiringButton}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
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
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-sm border-primary/30 hover:bg-primary/5 font-heading tracking-wide">
                <Mail className="w-5 h-5 mr-2" />
                {t.ctaButton}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
