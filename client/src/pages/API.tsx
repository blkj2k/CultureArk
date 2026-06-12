import { useI18n } from "@/contexts/I18nContext";
// Layout is now provided by App.tsx
import { Button } from "@/components/ui/button";
import { Code, Zap, Shield, Globe, BookOpen, Terminal } from "lucide-react";
import { Link } from "wouter";

export default function API() {
  const { language } = useI18n();

  return (
    <>
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-chart-1/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-chart-1/30 bg-chart-1/10 text-chart-1 text-sm font-medium">
                <Code className="w-4 h-4" />
                {language === 'zh' ? 'API接口' : 'API Interface'}
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                {language === 'zh' ? '开发者API' : 'Developer API'}
                <br />
                <span className="text-chart-1">
                  {language === 'zh' ? '构建文化智能应用' : 'Build Cultural AI Applications'}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {language === 'zh' 
                  ? '通过CultureArk API，将深厚的文化知识和AI能力集成到您的应用中，打造独特的文化体验产品。'
                  : 'Integrate deep cultural knowledge and AI capabilities into your applications through the CultureArk API, creating unique cultural experience products.'}
              </p>
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <APIFeatureCard
                icon={<Zap className="w-8 h-8" />}
                title={language === 'zh' ? '高性能' : 'High Performance'}
                description={language === 'zh' 
                  ? '毫秒级响应，99.9%可用性保证，全球CDN加速。'
                  : 'Millisecond response times, 99.9% availability guarantee, global CDN acceleration.'}
              />
              <APIFeatureCard
                icon={<Shield className="w-8 h-8" />}
                title={language === 'zh' ? '安全可靠' : 'Secure & Reliable'}
                description={language === 'zh' 
                  ? 'OAuth 2.0认证，API密钥管理，请求签名验证。'
                  : 'OAuth 2.0 authentication, API key management, request signature verification.'}
              />
              <APIFeatureCard
                icon={<Globe className="w-8 h-8" />}
                title={language === 'zh' ? '多语言SDK' : 'Multi-language SDKs'}
                description={language === 'zh' 
                  ? '提供Python、JavaScript、Java、Go等主流语言SDK。'
                  : 'SDKs available for Python, JavaScript, Java, Go, and other major languages.'}
              />
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              {language === 'zh' ? 'API端点' : 'API Endpoints'}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <EndpointCard
                method="POST"
                endpoint="/v1/chat/completions"
                description={language === 'zh' 
                  ? '与文化AI智能体进行对话，获取专业的文化知识回答。'
                  : 'Converse with cultural AI agents and get professional cultural knowledge responses.'}
              />
              <EndpointCard
                method="GET"
                endpoint="/v1/knowledge/search"
                description={language === 'zh' 
                  ? '搜索文化知识库，获取相关的文献、图像和历史资料。'
                  : 'Search the cultural knowledge base for relevant literature, images, and historical materials.'}
              />
              <EndpointCard
                method="GET"
                endpoint="/v1/knowledge/{id}"
                description={language === 'zh' 
                  ? '获取特定知识条目的详细信息，包括多语言内容。'
                  : 'Get detailed information about a specific knowledge entry, including multilingual content.'}
              />
              <EndpointCard
                method="POST"
                endpoint="/v1/embeddings"
                description={language === 'zh' 
                  ? '将文本转换为向量嵌入，用于语义搜索和相似度计算。'
                  : 'Convert text to vector embeddings for semantic search and similarity computation.'}
              />
              <EndpointCard
                method="GET"
                endpoint="/v1/agents"
                description={language === 'zh' 
                  ? '获取可用的AI智能体列表及其能力描述。'
                  : 'Get the list of available AI agents and their capability descriptions.'}
              />
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  {language === 'zh' ? '快速开始' : 'Quick Start'}
                </h2>
                <p className="text-muted-foreground">
                  {language === 'zh' 
                    ? '只需几行代码，即可将文化AI能力集成到您的应用中。'
                    : 'Integrate cultural AI capabilities into your application with just a few lines of code.'}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-chart-1/20 flex items-center justify-center text-chart-1 font-bold">1</div>
                    <span>{language === 'zh' ? '注册并获取API密钥' : 'Register and get API key'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-chart-1/20 flex items-center justify-center text-chart-1 font-bold">2</div>
                    <span>{language === 'zh' ? '安装SDK或直接调用REST API' : 'Install SDK or call REST API directly'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-chart-1/20 flex items-center justify-center text-chart-1 font-bold">3</div>
                    <span>{language === 'zh' ? '开始构建您的文化应用' : 'Start building your cultural application'}</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#1e1e1e] rounded-lg p-6 font-mono text-sm overflow-x-auto">
                <div className="text-gray-400 mb-2"># Python Example</div>
                <div className="text-green-400">from</div>
                <span className="text-white"> cultureark </span>
                <span className="text-green-400">import</span>
                <span className="text-white"> CultureArk</span>
                <br /><br />
                <span className="text-white">client = CultureArk(api_key=</span>
                <span className="text-yellow-300">"your-api-key"</span>
                <span className="text-white">)</span>
                <br /><br />
                <span className="text-white">response = client.chat.completions.create(</span>
                <br />
                <span className="text-white">    agent=</span>
                <span className="text-yellow-300">"taizong-guardian"</span>
                <span className="text-white">,</span>
                <br />
                <span className="text-white">    messages=[</span>
                <br />
                <span className="text-white">        {"{"}</span>
                <span className="text-yellow-300">"role"</span>
                <span className="text-white">: </span>
                <span className="text-yellow-300">"user"</span>
                <span className="text-white">,</span>
                <br />
                <span className="text-white">         </span>
                <span className="text-yellow-300">"content"</span>
                <span className="text-white">: </span>
                <span className="text-yellow-300">"Tell me about Tang Dynasty"</span>
                <span className="text-white">{"}"}</span>
                <br />
                <span className="text-white">    ]</span>
                <br />
                <span className="text-white">)</span>
                <br /><br />
                <span className="text-green-400">print</span>
                <span className="text-white">(response.message.content)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              {language === 'zh' ? '定价方案' : 'Pricing Plans'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                title={language === 'zh' ? '开发者' : 'Developer'}
                price={language === 'zh' ? '免费' : 'Free'}
                features={language === 'zh' 
                  ? ['1,000次/月 API调用', '基础知识库访问', '社区支持', '开发环境']
                  : ['1,000 API calls/month', 'Basic knowledge access', 'Community support', 'Development environment']}
              />
              <PricingCard
                title={language === 'zh' ? '专业版' : 'Professional'}
                price="$99/mo"
                featured
                features={language === 'zh' 
                  ? ['50,000次/月 API调用', '完整知识库访问', '优先技术支持', '生产环境', '自定义智能体']
                  : ['50,000 API calls/month', 'Full knowledge access', 'Priority support', 'Production environment', 'Custom agents']}
              />
              <PricingCard
                title={language === 'zh' ? '企业版' : 'Enterprise'}
                price={language === 'zh' ? '联系我们' : 'Contact Us'}
                features={language === 'zh' 
                  ? ['无限API调用', '专属知识库', '专属客户经理', 'SLA保障', '私有化部署']
                  : ['Unlimited API calls', 'Dedicated knowledge base', 'Dedicated account manager', 'SLA guarantee', 'Private deployment']}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-chart-1/5">
          <div className="container text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              {language === 'zh' ? '开始构建' : 'Start Building'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {language === 'zh' 
                ? '注册开发者账户，获取API密钥，立即开始构建您的文化智能应用。'
                : 'Register a developer account, get your API key, and start building your cultural AI application today.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="font-heading bg-chart-1 hover:bg-chart-1/90">
                  {language === 'zh' ? '申请API访问' : 'Request API Access'}
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="font-heading">
                <BookOpen className="w-4 h-4 mr-2" />
                {language === 'zh' ? '查看文档' : 'View Documentation'}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function APIFeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-card border border-border hover:border-chart-1/50 transition-all duration-300">
      <div className="text-chart-1 mb-4">{icon}</div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function EndpointCard({ method, endpoint, description }: { method: string; endpoint: string; description: string }) {
  const methodColor = method === 'GET' ? 'bg-green-500' : method === 'POST' ? 'bg-blue-500' : 'bg-yellow-500';
  
  return (
    <div className="p-4 rounded-lg bg-card border border-border flex items-start gap-4">
      <span className={`${methodColor} text-white text-xs font-bold px-2 py-1 rounded`}>{method}</span>
      <div className="flex-1">
        <code className="text-sm font-mono text-chart-1">{endpoint}</code>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({ title, price, features, featured }: { 
  title: string; 
  price: string; 
  features: string[];
  featured?: boolean;
}) {
  return (
    <div className={`p-6 rounded-lg border ${featured ? 'bg-chart-1/5 border-chart-1' : 'bg-card border-border'}`}>
      <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
      <div className="text-3xl font-bold text-chart-1 mb-6">{price}</div>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-chart-1" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
