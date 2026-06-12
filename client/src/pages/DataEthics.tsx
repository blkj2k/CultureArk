import { useI18n } from "@/contexts/I18nContext";
// Layout is now provided by App.tsx
import { Heart, Shield, Users, Eye, Scale, Sparkles } from "lucide-react";

export default function DataEthics() {
  const { language } = useI18n();

  return (
    <>
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                <Heart className="w-4 h-4" />
                {language === 'zh' ? '数据伦理' : 'Data Ethics'}
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                {language === 'zh' ? '负责任的AI' : 'Responsible AI'}
                <br />
                <span className="text-primary">
                  {language === 'zh' ? '数据伦理承诺' : 'Data Ethics Commitment'}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {language === 'zh' 
                  ? '我们相信技术应该服务于人类福祉。CultureArk致力于以负责任、透明和公平的方式开发和部署AI技术。'
                  : 'We believe technology should serve human well-being. CultureArk is committed to developing and deploying AI technology in a responsible, transparent, and fair manner.'}
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              {language === 'zh' ? '核心伦理原则' : 'Core Ethical Principles'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PrincipleCard
                icon={<Eye className="w-8 h-8" />}
                title={language === 'zh' ? '透明度' : 'Transparency'}
                description={language === 'zh' 
                  ? '我们公开我们的AI系统如何工作，数据如何被收集和使用，以及决策是如何做出的。'
                  : 'We are open about how our AI systems work, how data is collected and used, and how decisions are made.'}
              />
              <PrincipleCard
                icon={<Scale className="w-8 h-8" />}
                title={language === 'zh' ? '公平性' : 'Fairness'}
                description={language === 'zh' 
                  ? '我们积极识别和消除AI系统中的偏见，确保所有用户都能获得公平的服务。'
                  : 'We actively identify and eliminate bias in AI systems, ensuring all users receive fair service.'}
              />
              <PrincipleCard
                icon={<Shield className="w-8 h-8" />}
                title={language === 'zh' ? '隐私保护' : 'Privacy Protection'}
                description={language === 'zh' 
                  ? '我们将用户隐私放在首位，采用数据最小化原则，只收集必要的信息。'
                  : 'We prioritize user privacy, adopting data minimization principles, collecting only necessary information.'}
              />
              <PrincipleCard
                icon={<Users className="w-8 h-8" />}
                title={language === 'zh' ? '人类监督' : 'Human Oversight'}
                description={language === 'zh' 
                  ? '我们确保AI系统始终在人类监督下运行，重要决策由人类做出最终判断。'
                  : 'We ensure AI systems always operate under human oversight, with humans making final judgments on important decisions.'}
              />
              <PrincipleCard
                icon={<Heart className="w-8 h-8" />}
                title={language === 'zh' ? '文化尊重' : 'Cultural Respect'}
                description={language === 'zh' 
                  ? '我们尊重文化多样性，确保AI系统不会歪曲或贬低任何文化传统。'
                  : 'We respect cultural diversity, ensuring AI systems do not distort or demean any cultural traditions.'}
              />
              <PrincipleCard
                icon={<Sparkles className="w-8 h-8" />}
                title={language === 'zh' ? '持续改进' : 'Continuous Improvement'}
                description={language === 'zh' 
                  ? '我们持续监控和改进我们的AI系统，以应对新出现的伦理挑战。'
                  : 'We continuously monitor and improve our AI systems to address emerging ethical challenges.'}
              />
            </div>
          </div>
        </section>

        {/* Cultural Data Ethics */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  {language === 'zh' ? '文化数据伦理' : 'Cultural Data Ethics'}
                </h2>
                <p className="text-muted-foreground">
                  {language === 'zh' 
                    ? '处理文化数据需要特别的敬畏和责任感。我们遵循以下特定原则：'
                    : 'Handling cultural data requires special reverence and responsibility. We follow these specific principles:'}
                </p>
                <div className="space-y-4">
                  <EthicsItem
                    title={language === 'zh' ? '来源尊重' : 'Source Respect'}
                    description={language === 'zh' 
                      ? '我们尊重文化数据的原始来源，确保适当的归属和认可。'
                      : 'We respect the original sources of cultural data, ensuring proper attribution and recognition.'}
                  />
                  <EthicsItem
                    title={language === 'zh' ? '准确性承诺' : 'Accuracy Commitment'}
                    description={language === 'zh' 
                      ? '我们努力确保文化信息的准确性，避免传播错误或误导性内容。'
                      : 'We strive to ensure accuracy of cultural information, avoiding the spread of incorrect or misleading content.'}
                  />
                  <EthicsItem
                    title={language === 'zh' ? '敏感性意识' : 'Sensitivity Awareness'}
                    description={language === 'zh' 
                      ? '我们对文化敏感话题保持警觉，避免冒犯或不当表述。'
                      : 'We remain alert to culturally sensitive topics, avoiding offensive or inappropriate representations.'}
                  />
                  <EthicsItem
                    title={language === 'zh' ? '利益共享' : 'Benefit Sharing'}
                    description={language === 'zh' 
                      ? '我们确保文化数据贡献者获得公平的收益分成。'
                      : 'We ensure cultural data contributors receive fair revenue sharing.'}
                  />
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                  <Heart className="w-32 h-32 text-primary/50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Governance */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              {language === 'zh' ? 'AI治理框架' : 'AI Governance Framework'}
            </h2>
            <div className="space-y-8">
              <GovernanceItem
                number="01"
                title={language === 'zh' ? '伦理审查委员会' : 'Ethics Review Board'}
                description={language === 'zh' 
                  ? '我们设立了独立的伦理审查委员会，负责审查AI系统的开发和部署，确保符合伦理标准。'
                  : 'We have established an independent ethics review board responsible for reviewing AI system development and deployment to ensure ethical compliance.'}
              />
              <GovernanceItem
                number="02"
                title={language === 'zh' ? '影响评估' : 'Impact Assessment'}
                description={language === 'zh' 
                  ? '在推出新功能或模型之前，我们进行全面的社会和文化影响评估。'
                  : 'Before launching new features or models, we conduct comprehensive social and cultural impact assessments.'}
              />
              <GovernanceItem
                number="03"
                title={language === 'zh' ? '用户反馈机制' : 'User Feedback Mechanism'}
                description={language === 'zh' 
                  ? '我们建立了便捷的反馈渠道，让用户可以报告AI系统的问题或担忧。'
                  : 'We have established convenient feedback channels for users to report issues or concerns about AI systems.'}
              />
              <GovernanceItem
                number="04"
                title={language === 'zh' ? '定期审计' : 'Regular Audits'}
                description={language === 'zh' 
                  ? '我们定期对AI系统进行内部和外部审计，以识别和解决潜在的伦理问题。'
                  : 'We regularly conduct internal and external audits of AI systems to identify and address potential ethical issues.'}
              />
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-20 bg-primary/5">
          <div className="container text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6">
              {language === 'zh' ? '我们的承诺' : 'Our Commitment'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'zh' 
                ? '我们承诺持续改进我们的伦理实践，倾听社区反馈，并与行业伙伴合作推动负责任AI的发展。如果您对我们的数据伦理实践有任何问题或建议，请联系我们。'
                : 'We commit to continuously improving our ethical practices, listening to community feedback, and collaborating with industry partners to advance responsible AI. If you have any questions or suggestions about our data ethics practices, please contact us.'}
            </p>
            <p className="text-lg font-medium">
              ethics@cultureark.com
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

function PrincipleCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function EthicsItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
      <div>
        <h4 className="font-heading font-bold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function GovernanceItem({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="text-4xl font-heading font-bold text-primary/30">{number}</div>
      <div>
        <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
