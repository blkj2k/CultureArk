import { useI18n } from "@/contexts/I18nContext";
// Layout is now provided by App.tsx

export default function Privacy() {
  const { language } = useI18n();

  return (
    <>
      <div className="flex flex-col w-full">
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              {language === 'zh' ? '隐私政策' : 'Privacy Policy'}
            </h1>
            <p className="text-muted-foreground mb-8">
              {language === 'zh' ? '最后更新：2026年1月' : 'Last Updated: January 2026'}
            </p>

            <div className="prose prose-lg max-w-none">
              {language === 'zh' ? (
                <>
                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">1. 引言</h2>
                  <p className="text-muted-foreground mb-4">
                    CultureArk NZ Limited（以下简称"我们"）致力于保护您的隐私。本隐私政策说明了我们如何收集、使用、披露和保护您的个人信息，符合新西兰2020年隐私法及其他适用法律法规。
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">2. 我们收集的信息</h2>
                  <p className="text-muted-foreground mb-4">我们可能收集以下类型的信息：</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li><strong>账户信息</strong>：姓名、电子邮件地址、用户名</li>
                    <li><strong>使用数据</strong>：与AI智能体的对话记录、搜索历史、偏好设置</li>
                    <li><strong>技术数据</strong>：IP地址、浏览器类型、设备信息、访问时间</li>
                    <li><strong>支付信息</strong>：如适用，通过安全第三方支付处理商处理</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">3. 信息使用目的</h2>
                  <p className="text-muted-foreground mb-4">我们使用收集的信息用于：</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>提供和改进我们的AI文化服务</li>
                    <li>个性化您的用户体验</li>
                    <li>处理交易和发送相关通知</li>
                    <li>响应您的询问和提供客户支持</li>
                    <li>进行研究和分析以改进服务</li>
                    <li>遵守法律义务</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">4. 信息共享</h2>
                  <p className="text-muted-foreground mb-4">
                    我们不会出售您的个人信息。我们可能在以下情况下共享信息：
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>经您同意</li>
                    <li>与帮助我们运营服务的服务提供商</li>
                    <li>遵守法律要求或保护我们的权利</li>
                    <li>在业务转让或合并的情况下</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">5. 数据安全</h2>
                  <p className="text-muted-foreground mb-4">
                    我们采用行业标准的安全措施保护您的信息，包括加密传输、安全存储和访问控制。然而，没有任何互联网传输或电子存储方法是100%安全的。
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">6. 您的权利</h2>
                  <p className="text-muted-foreground mb-4">根据新西兰隐私法，您有权：</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>访问我们持有的关于您的个人信息</li>
                    <li>请求更正不准确的信息</li>
                    <li>在某些情况下请求删除您的信息</li>
                    <li>反对某些类型的处理</li>
                    <li>撤回同意（如适用）</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">7. Cookie政策</h2>
                  <p className="text-muted-foreground mb-4">
                    我们使用Cookie和类似技术来改善用户体验、分析流量和个性化内容。您可以通过浏览器设置管理Cookie偏好。
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">8. 儿童隐私</h2>
                  <p className="text-muted-foreground mb-4">
                    我们的服务不面向16岁以下的儿童。我们不会故意收集儿童的个人信息。
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">9. 政策变更</h2>
                  <p className="text-muted-foreground mb-4">
                    我们可能会不时更新本隐私政策。重大变更将通过网站通知或电子邮件告知您。
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">10. 联系我们</h2>
                  <p className="text-muted-foreground mb-4">
                    如有任何隐私相关问题，请联系我们的数据保护官：
                  </p>
                  <p className="text-muted-foreground">
                    电子邮件：privacy@cultureark.com<br />
                    地址：Level 1, 12 Madden Street, Wynyard Quarter, Auckland 1010, New Zealand
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground mb-4">
                    CultureArk NZ Limited ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in compliance with the New Zealand Privacy Act 2020 and other applicable laws.
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li><strong>Account Information</strong>: Name, email address, username</li>
                    <li><strong>Usage Data</strong>: Conversation history with AI agents, search history, preferences</li>
                    <li><strong>Technical Data</strong>: IP address, browser type, device information, access times</li>
                    <li><strong>Payment Information</strong>: If applicable, processed through secure third-party payment processors</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">We use collected information to:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Provide and improve our AI cultural services</li>
                    <li>Personalize your user experience</li>
                    <li>Process transactions and send related notifications</li>
                    <li>Respond to inquiries and provide customer support</li>
                    <li>Conduct research and analysis to improve services</li>
                    <li>Comply with legal obligations</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">4. Information Sharing</h2>
                  <p className="text-muted-foreground mb-4">
                    We do not sell your personal information. We may share information:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>With your consent</li>
                    <li>With service providers who help us operate our services</li>
                    <li>To comply with legal requirements or protect our rights</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground mb-4">
                    We employ industry-standard security measures to protect your information, including encrypted transmission, secure storage, and access controls. However, no method of internet transmission or electronic storage is 100% secure.
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground mb-4">Under the NZ Privacy Act, you have the right to:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                    <li>Access personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information in certain circumstances</li>
                    <li>Object to certain types of processing</li>
                    <li>Withdraw consent where applicable</li>
                  </ul>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">7. Cookie Policy</h2>
                  <p className="text-muted-foreground mb-4">
                    We use cookies and similar technologies to improve user experience, analyze traffic, and personalize content. You can manage cookie preferences through your browser settings.
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">8. Children's Privacy</h2>
                  <p className="text-muted-foreground mb-4">
                    Our services are not directed to children under 16. We do not knowingly collect personal information from children.
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">9. Policy Changes</h2>
                  <p className="text-muted-foreground mb-4">
                    We may update this Privacy Policy from time to time. Significant changes will be communicated through website notices or email.
                  </p>

                  <h2 className="text-2xl font-heading font-bold mt-8 mb-4">10. Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    For any privacy-related questions, please contact our Data Protection Officer:
                  </p>
                  <p className="text-muted-foreground">
                    Email: privacy@cultureark.com<br />
                    Address: Level 1, 12 Madden Street, Wynyard Quarter, Auckland 1010, New Zealand
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
