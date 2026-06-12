import { motion } from "framer-motion";
import { Database, Cpu, Lock, Layers, Zap, Globe, Brain, Shield, Network, Workflow, GitBranch, Server } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export default function Technology() {
  const { language } = useI18n();

  const content = {
    en: {
      title: "Core Technology",
      subtitle: "A robust, scalable, and secure infrastructure designed for the unique requirements of cultural AI.",
      cards: [
        {
          icon: "database",
          title: "Data Pipeline",
          items: [
            "Automated cleaning of unstructured cultural texts",
            "Entity extraction and knowledge graph construction",
            "Vector embedding generation for semantic search"
          ]
        },
        {
          icon: "cpu",
          title: "Model Fine-Tuning",
          items: [
            "Custom LoRA adapters for specific cultural styles",
            "RLHF (Reinforcement Learning from Human Feedback) with cultural experts",
            "Hybrid retrieval-augmented generation (RAG) architecture"
          ]
        },
        {
          icon: "lock",
          title: "Security & Compliance",
          items: [
            "End-to-end encryption for all user data",
            "Compliance with NZ Privacy Act 2020",
            "Granular access control and audit logging"
          ]
        },
        {
          icon: "layers",
          title: "Scalable Architecture",
          items: [
            "Cloud-agnostic containerized microservices",
            "Auto-scaling inference clusters with GPU optimization",
            "Multi-region deployment with edge computing"
          ]
        }
      ],
      roadmapTitle: "Technical Evolution Roadmap",
      roadmapSubtitle: "Our vision for advancing cultural AI infrastructure",
      phases: [
        {
          phase: "Phase 1",
          title: "Foundation Layer",
          status: "current",
          items: [
            "RAG-based knowledge retrieval system",
            "Single-region deployment architecture",
            "Basic vector database integration",
            "REST API gateway"
          ]
        },
        {
          phase: "Phase 2",
          title: "Intelligence Enhancement",
          status: "upcoming",
          items: [
            "Multi-agent orchestration framework",
            "Real-time knowledge graph updates",
            "Streaming response optimization",
            "Advanced prompt engineering pipeline"
          ]
        },
        {
          phase: "Phase 3",
          title: "Scale & Performance",
          status: "planned",
          items: [
            "Distributed inference with model sharding",
            "Edge computing for global low-latency",
            "Hybrid cloud multi-region architecture",
            "Intelligent caching with semantic awareness"
          ]
        },
        {
          phase: "Phase 4",
          title: "Next-Gen Capabilities",
          status: "vision",
          items: [
            "Autonomous agent ecosystem",
            "Federated learning for privacy-preserving training",
            "Multimodal fusion (text, image, audio, 3D)",
            "Self-evolving knowledge base with human oversight"
          ]
        }
      ],
      advancedTitle: "Advanced Technical Capabilities",
      advancedSubtitle: "Cutting-edge technologies powering our platform",
      advanced: [
        {
          icon: "brain",
          title: "Cognitive Architecture",
          description: "Multi-layer reasoning system combining symbolic AI with neural networks for deep cultural understanding."
        },
        {
          icon: "network",
          title: "Knowledge Graph Engine",
          description: "Dynamic graph database with real-time entity linking and relationship inference across cultural domains."
        },
        {
          icon: "workflow",
          title: "Agent Orchestration",
          description: "Intelligent routing and coordination of specialized AI agents for complex multi-step cultural queries."
        },
        {
          icon: "shield",
          title: "Trust & Safety Layer",
          description: "Multi-stage content validation ensuring cultural accuracy and preventing misinformation."
        },
        {
          icon: "gitbranch",
          title: "Version Control for Knowledge",
          description: "Git-like versioning system for cultural data with full provenance tracking and rollback capabilities."
        },
        {
          icon: "server",
          title: "Adaptive Infrastructure",
          description: "Self-optimizing resource allocation based on query patterns and cultural domain complexity."
        }
      ]
    },
    zh: {
      title: "核心技术",
      subtitle: "为文化AI的独特需求设计的强大、可扩展且安全的基础设施。",
      cards: [
        {
          icon: "database",
          title: "数据管道",
          items: [
            "非结构化文化文本的自动清洗",
            "实体提取和知识图谱构建",
            "语义搜索的向量嵌入生成"
          ]
        },
        {
          icon: "cpu",
          title: "模型微调",
          items: [
            "针对特定文化风格的自定义LoRA适配器",
            "与文化专家进行RLHF（人类反馈强化学习）",
            "混合检索增强生成（RAG）架构"
          ]
        },
        {
          icon: "lock",
          title: "安全与合规",
          items: [
            "所有用户数据的端到端加密",
            "符合新西兰2020年隐私法",
            "细粒度访问控制和审计日志"
          ]
        },
        {
          icon: "layers",
          title: "可扩展架构",
          items: [
            "云平台无关的容器化微服务",
            "GPU优化的自动扩展推理集群",
            "多区域部署与边缘计算"
          ]
        }
      ],
      roadmapTitle: "技术演进路线图",
      roadmapSubtitle: "我们推进文化AI基础设施的愿景",
      phases: [
        {
          phase: "第一阶段",
          title: "基础层",
          status: "current",
          items: [
            "基于RAG的知识检索系统",
            "单区域部署架构",
            "基础向量数据库集成",
            "REST API网关"
          ]
        },
        {
          phase: "第二阶段",
          title: "智能增强",
          status: "upcoming",
          items: [
            "多智能体编排框架",
            "实时知识图谱更新",
            "流式响应优化",
            "高级提示工程管道"
          ]
        },
        {
          phase: "第三阶段",
          title: "规模与性能",
          status: "planned",
          items: [
            "模型分片的分布式推理",
            "全球低延迟边缘计算",
            "混合云多区域架构",
            "语义感知的智能缓存"
          ]
        },
        {
          phase: "第四阶段",
          title: "下一代能力",
          status: "vision",
          items: [
            "自主智能体生态系统",
            "隐私保护的联邦学习",
            "多模态融合（文本、图像、音频、3D）",
            "人机协同的自进化知识库"
          ]
        }
      ],
      advancedTitle: "高级技术能力",
      advancedSubtitle: "驱动我们平台的前沿技术",
      advanced: [
        {
          icon: "brain",
          title: "认知架构",
          description: "结合符号AI与神经网络的多层推理系统，实现深度文化理解。"
        },
        {
          icon: "network",
          title: "知识图谱引擎",
          description: "支持实时实体链接和跨文化领域关系推理的动态图数据库。"
        },
        {
          icon: "workflow",
          title: "智能体编排",
          description: "为复杂多步骤文化查询提供专业AI智能体的智能路由和协调。"
        },
        {
          icon: "shield",
          title: "信任与安全层",
          description: "多阶段内容验证，确保文化准确性并防止错误信息传播。"
        },
        {
          icon: "gitbranch",
          title: "知识版本控制",
          description: "类Git的文化数据版本管理系统，支持完整溯源追踪和回滚能力。"
        },
        {
          icon: "server",
          title: "自适应基础设施",
          description: "基于查询模式和文化领域复杂度的自优化资源分配。"
        }
      ]
    }
  };

  const t = content[language];

  const iconMap: Record<string, React.ReactNode> = {
    database: <Database className="w-8 h-8" />,
    cpu: <Cpu className="w-8 h-8" />,
    lock: <Lock className="w-8 h-8" />,
    layers: <Layers className="w-8 h-8" />,
    brain: <Brain className="w-6 h-6" />,
    network: <Network className="w-6 h-6" />,
    workflow: <Workflow className="w-6 h-6" />,
    shield: <Shield className="w-6 h-6" />,
    gitbranch: <GitBranch className="w-6 h-6" />,
    server: <Server className="w-6 h-6" />
  };

  const statusColors: Record<string, string> = {
    current: "bg-chart-1 text-white",
    upcoming: "bg-chart-2 text-white",
    planned: "bg-chart-3 text-white",
    vision: "bg-chart-4 text-white"
  };

  const statusLabels: Record<string, Record<string, string>> = {
    en: {
      current: "Current",
      upcoming: "Q2 2025",
      planned: "Q4 2025",
      vision: "2026+"
    },
    zh: {
      current: "当前",
      upcoming: "2025年Q2",
      planned: "2025年Q4",
      vision: "2026+"
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground">{t.title}</h1>
          <p className="text-xl text-muted-foreground">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Core Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.cards.map((card, index) => (
            <TechCard 
              key={index}
              icon={iconMap[card.icon]}
              title={card.title}
              items={card.items}
            />
          ))}
        </div>

        {/* Technical Evolution Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t.roadmapTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.roadmapSubtitle}</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
            
            <div className="space-y-8 lg:space-y-0">
              {t.phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className={`p-6 rounded-sm bg-card border border-border hover:border-primary/50 transition-colors ${index % 2 === 0 ? 'lg:ml-auto' : ''} max-w-lg`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[phase.status]}`}>
                          {statusLabels[language][phase.status]}
                        </span>
                        <span className="text-sm text-muted-foreground">{phase.phase}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-4 text-foreground">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Zap className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex items-center justify-center w-4 h-4 rounded-full bg-primary border-4 border-background absolute left-1/2 -translate-x-1/2" style={{ top: `${index * 25 + 12.5}%` }} />
                  
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Advanced Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t.advancedTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.advancedSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.advanced.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-sm bg-card/50 border border-border hover:border-primary/30 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-lg font-heading font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TechCard({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-8 rounded-sm bg-card border border-border hover:border-primary/50 transition-colors group"
    >
      <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
