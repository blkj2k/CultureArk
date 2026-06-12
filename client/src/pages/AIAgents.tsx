import { useI18n } from "@/contexts/I18nContext";
// Layout is now provided by App.tsx
import { Button } from "@/components/ui/button";
import { Brain, MessageSquare, Sparkles, Users, Zap, Globe } from "lucide-react";
import { Link } from "wouter";

export default function AIAgents() {
  const { t, language } = useI18n();

  return (
    <>
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                <Brain className="w-4 h-4" />
                {language === 'zh' ? 'AI智能体' : 'AI Agents'}
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                {language === 'zh' ? '文化智能体' : 'Cultural AI Agents'}
                <br />
                <span className="text-primary">
                  {language === 'zh' ? '赋予传统智慧以生命' : 'Bringing Wisdom to Life'}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {language === 'zh' 
                  ? '我们的AI智能体基于深度文化知识库训练，能够以专家级别的理解与用户进行自然对话，传递千年智慧。'
                  : 'Our AI agents are trained on deep cultural knowledge bases, enabling natural conversations with expert-level understanding to transmit millennia of wisdom.'}
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<MessageSquare className="w-8 h-8" />}
                title={language === 'zh' ? '自然对话' : 'Natural Dialogue'}
                description={language === 'zh' 
                  ? '支持多轮对话，理解上下文，提供连贯且有深度的文化解读。'
                  : 'Support multi-turn conversations, understand context, and provide coherent, in-depth cultural interpretations.'}
              />
              <FeatureCard
                icon={<Sparkles className="w-8 h-8" />}
                title={language === 'zh' ? '专业知识' : 'Expert Knowledge'}
                description={language === 'zh' 
                  ? '基于权威文献和专家知识构建，确保回答的准确性和权威性。'
                  : 'Built on authoritative literature and expert knowledge to ensure accuracy and authority of responses.'}
              />
              <FeatureCard
                icon={<Globe className="w-8 h-8" />}
                title={language === 'zh' ? '多语言支持' : 'Multilingual Support'}
                description={language === 'zh' 
                  ? '支持中英文等多种语言，让全球用户都能接触深厚的文化内涵。'
                  : 'Support multiple languages including Chinese and English, making deep cultural content accessible globally.'}
              />
              <FeatureCard
                icon={<Users className="w-8 h-8" />}
                title={language === 'zh' ? '个性化体验' : 'Personalized Experience'}
                description={language === 'zh' 
                  ? '根据用户兴趣和历史对话，提供定制化的学习路径和内容推荐。'
                  : 'Provide customized learning paths and content recommendations based on user interests and conversation history.'}
              />
              <FeatureCard
                icon={<Zap className="w-8 h-8" />}
                title={language === 'zh' ? '实时响应' : 'Real-time Response'}
                description={language === 'zh' 
                  ? '毫秒级响应速度，流畅的对话体验，支持语音和文字交互。'
                  : 'Millisecond response times, smooth conversation experience, supporting both voice and text interaction.'}
              />
              <FeatureCard
                icon={<Brain className="w-8 h-8" />}
                title={language === 'zh' ? '持续学习' : 'Continuous Learning'}
                description={language === 'zh' 
                  ? '智能体持续从新数据中学习，不断提升知识深度和对话质量。'
                  : 'Agents continuously learn from new data, constantly improving knowledge depth and conversation quality.'}
              />
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              {language === 'zh' ? '应用场景' : 'Use Cases'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <UseCaseCard
                title={language === 'zh' ? '教育培训' : 'Education & Training'}
                description={language === 'zh' 
                  ? '为学校、培训机构提供智能文化教育助手，让学习更加生动有趣。'
                  : 'Provide intelligent cultural education assistants for schools and training institutions, making learning more engaging.'}
              />
              <UseCaseCard
                title={language === 'zh' ? '文旅体验' : 'Cultural Tourism'}
                description={language === 'zh' 
                  ? '为博物馆、景区提供智能导览服务，讲述文物背后的故事。'
                  : 'Provide intelligent guide services for museums and scenic spots, telling the stories behind artifacts.'}
              />
              <UseCaseCard
                title={language === 'zh' ? '企业服务' : 'Enterprise Services'}
                description={language === 'zh' 
                  ? '为企业提供文化IP授权和定制化AI智能体开发服务。'
                  : 'Provide cultural IP licensing and customized AI agent development services for enterprises.'}
              />
              <UseCaseCard
                title={language === 'zh' ? '个人学习' : 'Personal Learning'}
                description={language === 'zh' 
                  ? '为文化爱好者提供24/7的智能学习伙伴，随时解答疑问。'
                  : 'Provide 24/7 intelligent learning companions for culture enthusiasts, answering questions anytime.'}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary/5">
          <div className="container text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              {language === 'zh' ? '立即体验AI智能体' : 'Experience AI Agents Now'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {language === 'zh' 
                ? '访问我们的产品页面，与国学文化守护者进行对话。'
                : 'Visit our product page to have a conversation with the Guoxue Culture Guardian.'}
            </p>
            <Link href="/product">
              <Button size="lg" className="font-heading">
                {language === 'zh' ? '开始对话' : 'Start Conversation'}
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function UseCaseCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-card border border-border">
      <h3 className="text-lg font-heading font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
