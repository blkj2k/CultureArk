import { useI18n } from "@/contexts/I18nContext";
// Layout is now provided by App.tsx
import { Shield, Scale, FileCheck, Globe, Lock, Eye } from "lucide-react";

export default function Compliance() {
  const { language } = useI18n();

  return (
    <>
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-chart-3/5 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-chart-3/30 bg-chart-3/10 text-chart-3 text-sm font-medium">
                <Shield className="w-4 h-4" />
                {language === 'zh' ? '合规体系' : 'Compliance System'}
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                {language === 'zh' ? '合规与安全' : 'Compliance & Security'}
                <br />
                <span className="text-chart-3">
                  {language === 'zh' ? '构建信任基石' : 'Building Trust Foundation'}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {language === 'zh' 
                  ? 'CultureArk严格遵守新西兰及国际数据保护法规，确保用户数据安全和隐私保护，建立透明可信的AI文化服务平台。'
                  : 'CultureArk strictly complies with New Zealand and international data protection regulations, ensuring user data security and privacy protection, building a transparent and trustworthy AI cultural service platform.'}
              </p>
            </div>
          </div>
        </section>

        {/* Compliance Framework */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              {language === 'zh' ? '合规框架' : 'Compliance Framework'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ComplianceCard
                icon={<Scale className="w-10 h-10" />}
                title={language === 'zh' ? '新西兰隐私法2020' : 'NZ Privacy Act 2020'}
                description={language === 'zh' 
                  ? '完全符合新西兰隐私法2020的所有要求，包括信息隐私原则(IPPs)的全部13条规定。'
                  : 'Fully compliant with all requirements of the NZ Privacy Act 2020, including all 13 Information Privacy Principles (IPPs).'}
                items={language === 'zh' 
                  ? ['数据收集透明', '使用目的明确', '存储安全可靠', '访问权利保障']
                  : ['Transparent data collection', 'Clear purpose of use', 'Secure storage', 'Access rights guaranteed']}
              />
              <ComplianceCard
                icon={<Globe className="w-10 h-10" />}
                title={language === 'zh' ? 'GDPR合规' : 'GDPR Compliance'}
                description={language === 'zh' 
                  ? '符合欧盟通用数据保护条例(GDPR)标准，为全球用户提供一致的隐私保护。'
                  : 'Compliant with EU General Data Protection Regulation (GDPR) standards, providing consistent privacy protection for global users.'}
                items={language === 'zh' 
                  ? ['数据最小化原则', '用户同意机制', '数据可携带权', '被遗忘权']
                  : ['Data minimization', 'User consent mechanism', 'Data portability', 'Right to be forgotten']}
              />
              <ComplianceCard
                icon={<FileCheck className="w-10 h-10" />}
                title={language === 'zh' ? 'AI伦理准则' : 'AI Ethics Guidelines'}
                description={language === 'zh' 
                  ? '遵循负责任AI开发原则，确保AI系统的公平性、透明性和可解释性。'
                  : 'Following responsible AI development principles, ensuring fairness, transparency, and explainability of AI systems.'}
                items={language === 'zh' 
                  ? ['算法透明度', '偏见检测与消除', '人类监督机制', '可解释性要求']
                  : ['Algorithm transparency', 'Bias detection & elimination', 'Human oversight', 'Explainability requirements']}
              />
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  {language === 'zh' ? '安全措施' : 'Security Measures'}
                </h2>
                <div className="space-y-6">
                  <SecurityItem
                    icon={<Lock className="w-6 h-6" />}
                    title={language === 'zh' ? '端到端加密' : 'End-to-End Encryption'}
                    description={language === 'zh' 
                      ? '所有数据传输和存储均采用AES-256加密标准。'
                      : 'All data transmission and storage uses AES-256 encryption standard.'}
                  />
                  <SecurityItem
                    icon={<Shield className="w-6 h-6" />}
                    title={language === 'zh' ? '访问控制' : 'Access Control'}
                    description={language === 'zh' 
                      ? '基于角色的访问控制(RBAC)，确保最小权限原则。'
                      : 'Role-based access control (RBAC) ensuring principle of least privilege.'}
                  />
                  <SecurityItem
                    icon={<Eye className="w-6 h-6" />}
                    title={language === 'zh' ? '审计日志' : 'Audit Logging'}
                    description={language === 'zh' 
                      ? '完整的操作审计日志，支持合规审查和安全调查。'
                      : 'Complete operation audit logs supporting compliance review and security investigation.'}
                  />
                  <SecurityItem
                    icon={<Globe className="w-6 h-6" />}
                    title={language === 'zh' ? '数据本地化' : 'Data Localization'}
                    description={language === 'zh' 
                      ? '支持数据本地化存储，满足不同地区的合规要求。'
                      : 'Support for data localization to meet compliance requirements of different regions.'}
                  />
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-chart-3/20 to-primary/20 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-chart-3/50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              {language === 'zh' ? '认证与承诺' : 'Certifications & Commitments'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <CertCard title="ISO 27001" subtitle={language === 'zh' ? '信息安全管理' : 'Information Security'} />
              <CertCard title="SOC 2" subtitle={language === 'zh' ? '服务组织控制' : 'Service Organization Control'} />
              <CertCard title="GDPR" subtitle={language === 'zh' ? '欧盟数据保护' : 'EU Data Protection'} />
              <CertCard title="NZ Privacy" subtitle={language === 'zh' ? '新西兰隐私法' : 'NZ Privacy Act'} />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-chart-3/5">
          <div className="container text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              {language === 'zh' ? '合规咨询' : 'Compliance Inquiries'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {language === 'zh' 
                ? '如有任何合规相关问题，请联系我们的数据保护官。'
                : 'For any compliance-related questions, please contact our Data Protection Officer.'}
            </p>
            <p className="text-lg font-medium">
              compliance@cultureark.com
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

function ComplianceCard({ icon, title, description, items }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  items: string[];
}) {
  return (
    <div className="p-6 rounded-lg bg-card border border-border">
      <div className="text-chart-3 mb-4">{icon}</div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-chart-3" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SecurityItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="text-chart-3 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-heading font-bold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function CertCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="p-6 rounded-lg bg-card border border-border text-center">
      <h3 className="text-2xl font-heading font-bold text-chart-3 mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}
