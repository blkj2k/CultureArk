import { useI18n } from "@/contexts/I18nContext";
// Layout is now provided by App.tsx

export default function Terms() {
  const { language } = useI18n();

  return (
    <>
      <div className="flex flex-col w-full">
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              {language === 'zh' ? '服务条款' : 'Terms of Service'}
            </h1>
            <p className="text-muted-foreground mb-8">
              {language === 'zh' ? '最后更新：2026年1月' : 'Last Updated: January 2026'}
            </p>

            <div className="prose prose-lg max-w-none">
              {language === 'zh' ? (
                <>
                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">1. 服务接受</h2>
                  <p className="text-muted-foreground mb-4">
                    欢迎使用CultureArk平台。通过访问或使用我们的服务，您同意受这些服务条款的约束。如果您不同意这些条款，请勿使用我们的服务。
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">2. 服务描述</h2>
                  <p className="text-muted-foreground mb-4">
                    CultureArk提供基于人工智能的文化知识服务，包括但不限于：
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>AI文化智能体对话服务</li>
                    <li>文化知识库访问</li>
                    <li>API接口服务</li>
                    <li>数据资产化服务</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">3. 用户账户</h2>
                  <p className="text-muted-foreground mb-4">
                    使用某些服务可能需要创建账户。您有责任：
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>提供准确、完整的注册信息</li>
                    <li>维护账户安全和密码保密</li>
                    <li>对账户下的所有活动负责</li>
                    <li>及时通知我们任何未授权使用</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">4. 使用限制</h2>
                  <p className="text-muted-foreground mb-4">您同意不会：</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>违反任何适用法律或法规</li>
                    <li>侵犯他人的知识产权或其他权利</li>
                    <li>传播恶意软件或进行网络攻击</li>
                    <li>试图未经授权访问我们的系统</li>
                    <li>滥用API或超出使用限制</li>
                    <li>使用服务进行任何非法或有害活动</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">5. 知识产权</h2>
                  <p className="text-muted-foreground mb-4">
                    CultureArk平台及其内容（包括但不限于文本、图像、软件、AI模型）受知识产权法保护。除非明确授权，您不得复制、修改、分发或创建衍生作品。
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">6. 用户内容</h2>
                  <p className="text-muted-foreground mb-4">
                    您保留您提交内容的所有权。通过提交内容，您授予我们非独占、全球性、免版税的许可，以使用、存储和处理该内容以提供服务。
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">7. 付费服务</h2>
                  <p className="text-muted-foreground mb-4">
                    某些服务可能需要付费。费用将在购买前明确显示。除非法律要求，已支付的费用不予退还。
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">8. 免责声明</h2>
                  <p className="text-muted-foreground mb-4">
                    服务按"现状"提供。我们不保证服务不会中断或无错误。AI生成的内容仅供参考，不构成专业建议。
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">9. 责任限制</h2>
                  <p className="text-muted-foreground mb-4">
                    在法律允许的最大范围内，CultureArk不对任何间接、附带、特殊或后果性损害承担责任。
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">10. 终止</h2>
                  <p className="text-muted-foreground mb-4">
                    我们保留在任何时候因任何原因暂停或终止您访问服务的权利，包括违反这些条款。
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">11. 适用法律</h2>
                  <p className="text-muted-foreground mb-4">
                    这些条款受新西兰法律管辖。任何争议将提交新西兰法院管辖。
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">12. 条款变更</h2>
                  <p className="text-muted-foreground mb-4">
                    我们保留随时修改这些条款的权利。继续使用服务即表示接受修改后的条款。
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">13. 联系方式</h2>
                  <p className="text-muted-foreground">
                    如有任何问题，请联系：legal@cultureark.com
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground mb-4">
                    Welcome to the CultureArk platform. By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">2. Service Description</h2>
                  <p className="text-muted-foreground mb-4">
                    CultureArk provides AI-based cultural knowledge services, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>AI cultural agent conversation services</li>
                    <li>Cultural knowledge base access</li>
                    <li>API interface services</li>
                    <li>Data assetization services</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">3. User Accounts</h2>
                  <p className="text-muted-foreground mb-4">
                    Using certain services may require creating an account. You are responsible for:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Providing accurate and complete registration information</li>
                    <li>Maintaining account security and password confidentiality</li>
                    <li>All activities under your account</li>
                    <li>Promptly notifying us of any unauthorized use</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">4. Usage Restrictions</h2>
                  <p className="text-muted-foreground mb-4">You agree not to:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on others' intellectual property or other rights</li>
                    <li>Distribute malware or conduct cyber attacks</li>
                    <li>Attempt unauthorized access to our systems</li>
                    <li>Abuse APIs or exceed usage limits</li>
                    <li>Use services for any illegal or harmful activities</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">5. Intellectual Property</h2>
                  <p className="text-muted-foreground mb-4">
                    The CultureArk platform and its content (including but not limited to text, images, software, AI models) are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without explicit authorization.
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">6. User Content</h2>
                  <p className="text-muted-foreground mb-4">
                    You retain ownership of content you submit. By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, store, and process that content to provide services.
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">7. Paid Services</h2>
                  <p className="text-muted-foreground mb-4">
                    Some services may require payment. Fees will be clearly displayed before purchase. Unless required by law, paid fees are non-refundable.
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">8. Disclaimer</h2>
                  <p className="text-muted-foreground mb-4">
                    Services are provided "as is." We do not guarantee that services will be uninterrupted or error-free. AI-generated content is for reference only and does not constitute professional advice.
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">9. Limitation of Liability</h2>
                  <p className="text-muted-foreground mb-4">
                    To the maximum extent permitted by law, CultureArk shall not be liable for any indirect, incidental, special, or consequential damages.
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">10. Termination</h2>
                  <p className="text-muted-foreground mb-4">
                    We reserve the right to suspend or terminate your access to services at any time for any reason, including violation of these terms.
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">11. Governing Law</h2>
                  <p className="text-muted-foreground mb-4">
                    These terms are governed by New Zealand law. Any disputes shall be submitted to the jurisdiction of New Zealand courts.
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">12. Changes to Terms</h2>
                  <p className="text-muted-foreground mb-4">
                    We reserve the right to modify these terms at any time. Continued use of services constitutes acceptance of modified terms.
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">13. Contact</h2>
                  <p className="text-muted-foreground">
                    For any questions, please contact: legal@cultureark.com
                  </p>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
