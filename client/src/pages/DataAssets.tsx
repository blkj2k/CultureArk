import { useI18n } from "@/contexts/I18nContext";
// Layout is now provided by App.tsx
import { Button } from "@/components/ui/button";
import { Database, Shield, TrendingUp, Layers, FileText, Lock } from "lucide-react";
import { Link } from "wouter";

export default function DataAssets() {
  const { language } = useI18n();

  return (
    <>
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-chart-2/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-chart-2/30 bg-chart-2/10 text-chart-2 text-sm font-medium">
                <Database className="w-4 h-4" />
                {language === 'zh' ? '数据资产' : 'Data Assets'}
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                {language === 'zh' ? '文化数据' : 'Cultural Data'}
                <br />
                <span className="text-chart-2">
                  {language === 'zh' ? '资产化与价值释放' : 'Assetization & Value Release'}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {language === 'zh' 
                  ? '我们将非结构化的文化知识转化为结构化的数据资产，通过AI技术释放其商业价值，同时确保版权保护和收益共享。'
                  : 'We transform unstructured cultural knowledge into structured data assets, releasing their commercial value through AI technology while ensuring copyright protection and revenue sharing.'}
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              {language === 'zh' ? '数据资产化流程' : 'Data Assetization Process'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <ProcessStep
                step="01"
                title={language === 'zh' ? '数据采集' : 'Data Collection'}
                description={language === 'zh' 
                  ? '从权威来源收集文献、图像、音频等多模态文化数据。'
                  : 'Collect multimodal cultural data from authoritative sources including documents, images, and audio.'}
              />
              <ProcessStep
                step="02"
                title={language === 'zh' ? '清洗标注' : 'Cleaning & Annotation'}
                description={language === 'zh' 
                  ? '专业团队进行数据清洗、结构化处理和语义标注。'
                  : 'Professional teams perform data cleaning, structuring, and semantic annotation.'}
              />
              <ProcessStep
                step="03"
                title={language === 'zh' ? '向量化存储' : 'Vectorization'}
                description={language === 'zh' 
                  ? '将数据转化为向量嵌入，构建高效的语义检索系统。'
                  : 'Transform data into vector embeddings and build efficient semantic retrieval systems.'}
              />
              <ProcessStep
                step="04"
                title={language === 'zh' ? '价值变现' : 'Monetization'}
                description={language === 'zh' 
                  ? '通过API、授权、订阅等多种方式实现数据价值变现。'
                  : 'Monetize data value through APIs, licensing, subscriptions, and other channels.'}
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  {language === 'zh' ? '数据资产特性' : 'Data Asset Features'}
                </h2>
                <div className="space-y-6">
                  <FeatureItem
                    icon={<Shield className="w-6 h-6" />}
                    title={language === 'zh' ? '版权保护' : 'Copyright Protection'}
                    description={language === 'zh' 
                      ? '区块链技术确保数据来源可追溯，版权归属清晰。'
                      : 'Blockchain technology ensures data provenance is traceable and copyright ownership is clear.'}
                  />
                  <FeatureItem
                    icon={<TrendingUp className="w-6 h-6" />}
                    title={language === 'zh' ? '收益共享' : 'Revenue Sharing'}
                    description={language === 'zh' 
                      ? '透明的收益分配机制，数据贡献者获得50%收益分成。'
                      : 'Transparent revenue distribution mechanism, with data contributors receiving 50% revenue share.'}
                  />
                  <FeatureItem
                    icon={<Layers className="w-6 h-6" />}
                    title={language === 'zh' ? '多模态支持' : 'Multimodal Support'}
                    description={language === 'zh' 
                      ? '支持文本、图像、音频、视频等多种数据格式。'
                      : 'Support for multiple data formats including text, images, audio, and video.'}
                  />
                  <FeatureItem
                    icon={<Lock className="w-6 h-6" />}
                    title={language === 'zh' ? '访问控制' : 'Access Control'}
                    description={language === 'zh' 
                      ? '精细的权限管理，确保数据安全和合规使用。'
                      : 'Fine-grained permission management ensures data security and compliant usage.'}
                  />
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-chart-2/20 to-primary/20 flex items-center justify-center">
                  <Database className="w-32 h-32 text-chart-2/50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Types */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              {language === 'zh' ? '支持的数据类型' : 'Supported Data Types'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <DataTypeCard
                icon={<FileText className="w-8 h-8" />}
                title={language === 'zh' ? '文献典籍' : 'Literature'}
                count="10,000+"
              />
              <DataTypeCard
                icon={<Database className="w-8 h-8" />}
                title={language === 'zh' ? '历史档案' : 'Archives'}
                count="50,000+"
              />
              <DataTypeCard
                icon={<Layers className="w-8 h-8" />}
                title={language === 'zh' ? '文物图像' : 'Artifact Images'}
                count="100,000+"
              />
              <DataTypeCard
                icon={<Shield className="w-8 h-8" />}
                title={language === 'zh' ? '口述历史' : 'Oral History'}
                count="1,000+"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-chart-2/5">
          <div className="container text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              {language === 'zh' ? '成为数据合作伙伴' : 'Become a Data Partner'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {language === 'zh' 
                ? '如果您拥有珍贵的文化数据资源，欢迎与我们合作，共同释放数据价值。'
                : 'If you have valuable cultural data resources, we welcome partnership to jointly release data value.'}
            </p>
            <Link href="/contact">
              <Button size="lg" className="font-heading bg-chart-2 hover:bg-chart-2/90">
                {language === 'zh' ? '联系我们' : 'Contact Us'}
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

function ProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl font-heading font-bold text-chart-2/30 mb-4">{step}</div>
      <h3 className="text-lg font-heading font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="text-chart-2 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-heading font-bold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function DataTypeCard({ icon, title, count }: { icon: React.ReactNode; title: string; count: string }) {
  return (
    <div className="p-6 rounded-lg bg-card border border-border text-center">
      <div className="text-chart-2 mb-4 flex justify-center">{icon}</div>
      <h3 className="font-heading font-bold mb-1">{title}</h3>
      <p className="text-2xl font-bold text-chart-2">{count}</p>
    </div>
  );
}
