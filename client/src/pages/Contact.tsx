import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Building2, 
  User, 
  MessageSquare, 
  Send,
  CheckCircle,
  Loader2,
  Briefcase,
  Newspaper,
  HelpCircle,
  MapPin,
  Globe,
  Mail
} from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
// Layout is now provided by App.tsx

type ContactType = "investor" | "partner" | "media" | "other";

export default function Contact() {
  const { language } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "" as ContactType | "",
    message: "",
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success(language === 'zh' ? '提交成功！我们会尽快与您联系。' : 'Submitted! We will contact you soon.');
    },
    onError: (error) => {
      toast.error(language === 'zh' ? '提交失败，请重试' : 'Submission failed, please try again');
      console.error(error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.type) {
      toast.error(language === 'zh' ? '请选择咨询类型' : 'Please select inquiry type');
      return;
    }
    submitMutation.mutate({
      name: formData.name,
      email: formData.email,
      company: formData.company || undefined,
      type: formData.type as ContactType,
      message: formData.message,
    });
  };

  const translations = {
    en: {
      title: "Get in Touch",
      subtitle: "We're excited to hear from investors, partners, and collaborators who share our vision for cultural AI.",
      formTitle: "Send us a Message",
      formDesc: "Fill out the form below and we'll get back to you within 24 hours.",
      name: "Full Name",
      namePlaceholder: "Your name",
      email: "Email Address",
      emailPlaceholder: "you@company.com",
      company: "Company (Optional)",
      companyPlaceholder: "Your company name",
      type: "Inquiry Type",
      typePlaceholder: "Select type",
      typeInvestor: "Investment Opportunity",
      typePartner: "Partnership",
      typeMedia: "Media Inquiry",
      typeOther: "Other",
      message: "Message",
      messagePlaceholder: "Tell us about your interest in CultureArk...",
      submit: "Send Message",
      submitting: "Sending...",
      successTitle: "Message Sent!",
      successDesc: "Thank you for reaching out. Our team will review your message and respond within 24 hours.",
      sendAnother: "Send Another Message",
      officeTitle: "Our Office",
      officeAddress: "Auckland, New Zealand",
      globalTitle: "Global Reach",
      globalDesc: "Serving cultural institutions worldwide",
    },
    zh: {
      title: "联系我们",
      subtitle: "我们期待与认同文化AI愿景的投资人、合作伙伴和协作者交流。",
      formTitle: "发送消息",
      formDesc: "填写下方表单，我们将在24小时内回复您。",
      name: "姓名",
      namePlaceholder: "您的姓名",
      email: "电子邮箱",
      emailPlaceholder: "you@company.com",
      company: "公司（选填）",
      companyPlaceholder: "您的公司名称",
      type: "咨询类型",
      typePlaceholder: "请选择",
      typeInvestor: "投资机会",
      typePartner: "合作伙伴",
      typeMedia: "媒体咨询",
      typeOther: "其他",
      message: "留言",
      messagePlaceholder: "请告诉我们您对CultureArk的兴趣...",
      submit: "发送消息",
      submitting: "发送中...",
      successTitle: "消息已发送！",
      successDesc: "感谢您的联系。我们的团队将审阅您的消息并在24小时内回复。",
      sendAnother: "发送另一条消息",
      officeTitle: "办公地址",
      officeAddress: "新西兰 奥克兰",
      globalTitle: "全球服务",
      globalDesc: "服务全球文化机构",
    }
  };

  const text = translations[language];

  const typeIcons: Record<ContactType, React.ReactNode> = {
    investor: <Briefcase className="w-4 h-4" />,
    partner: <Building2 className="w-4 h-4" />,
    media: <Newspaper className="w-4 h-4" />,
    other: <HelpCircle className="w-4 h-4" />,
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-chart-2/5" />
          <div className="container relative">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-heading font-bold mb-4"
              >
                {text.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground"
              >
                {text.subtitle}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info Cards - Only Office and Global Reach */}
              <div className="space-y-4">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold mb-1">{text.officeTitle}</h3>
                        <p className="text-muted-foreground">{text.officeAddress}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center shrink-0">
                        <Globe className="w-6 h-6 text-chart-2" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold mb-1">{text.globalTitle}</h3>
                        <p className="text-muted-foreground">{text.globalDesc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-card/80 backdrop-blur-sm border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      {text.formTitle}
                    </CardTitle>
                    <CardDescription>{text.formDesc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AnimatePresence mode="wait">
                      {submitted ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="text-center py-12"
                        >
                          <div className="w-20 h-20 rounded-full bg-green-500/10 mx-auto mb-6 flex items-center justify-center">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                          </div>
                          <h3 className="text-2xl font-heading font-bold mb-2">{text.successTitle}</h3>
                          <p className="text-muted-foreground mb-6 max-w-md mx-auto">{text.successDesc}</p>
                          <Button 
                            variant="outline" 
                            onClick={() => {
                              setSubmitted(false);
                              setFormData({ name: "", email: "", company: "", type: "", message: "" });
                            }}
                          >
                            {text.sendAnother}
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmit}
                          className="space-y-6"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name" className="flex items-center gap-2">
                                <User className="w-4 h-4 text-muted-foreground" />
                                {text.name}
                              </Label>
                              <Input
                                id="name"
                                placeholder={text.namePlaceholder}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email" className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                {text.email}
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder={text.emailPlaceholder}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="company" className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-muted-foreground" />
                                {text.company}
                              </Label>
                              <Input
                                id="company"
                                placeholder={text.companyPlaceholder}
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-muted-foreground" />
                                {text.type}
                              </Label>
                              <Select
                                value={formData.type}
                                onValueChange={(value) => setFormData({ ...formData, type: value as ContactType })}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder={text.typePlaceholder} />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="investor">
                                    <div className="flex items-center gap-2">
                                      {typeIcons.investor}
                                      {text.typeInvestor}
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="partner">
                                    <div className="flex items-center gap-2">
                                      {typeIcons.partner}
                                      {text.typePartner}
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="media">
                                    <div className="flex items-center gap-2">
                                      {typeIcons.media}
                                      {text.typeMedia}
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="other">
                                    <div className="flex items-center gap-2">
                                      {typeIcons.other}
                                      {text.typeOther}
                                    </div>
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message" className="flex items-center gap-2">
                              <MessageSquare className="w-4 h-4 text-muted-foreground" />
                              {text.message}
                            </Label>
                            <Textarea
                              id="message"
                              placeholder={text.messagePlaceholder}
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              rows={5}
                              required
                            />
                          </div>

                          <Button 
                            type="submit" 
                            className="w-full"
                            disabled={submitMutation.isPending}
                          >
                            {submitMutation.isPending ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                {text.submitting}
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4 mr-2" />
                                {text.submit}
                              </>
                            )}
                          </Button>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
