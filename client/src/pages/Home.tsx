import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Globe, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const { t } = useI18n();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="CultureArk Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </div>

        <div className="container relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase mb-6 backdrop-blur-sm">
                {t('hero.badge')}
              </span>
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight text-foreground text-glow">
                {t('hero.title1')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-1 to-chart-2">
                  {t('hero.title2')}
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link href="/product">
                <Button size="lg" className="h-14 px-8 text-lg rounded-sm bg-primary hover:bg-primary/90 text-primary-foreground font-heading tracking-wide shadow-lg shadow-primary/20">
                  {t('hero.cta1')}
                </Button>
              </Link>
              <Link href="/roadmap">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-sm border-primary/30 hover:bg-primary/5 backdrop-blur-sm font-heading tracking-wide">
                  {t('hero.cta2')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">{t('hero.scroll')}</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 md:py-32 relative bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <FeatureCard 
              icon={<Brain className="w-10 h-10 text-chart-1" />}
              title={t('feature.ai.title')}
              description={t('feature.ai.desc')}
            />
            <FeatureCard 
              icon={<Globe className="w-10 h-10 text-chart-2" />}
              title={t('feature.global.title')}
              description={t('feature.global.desc')}
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-10 h-10 text-chart-3" />}
              title={t('feature.revenue.title')}
              description={t('feature.revenue.desc')}
            />
          </div>
        </div>
      </section>

      {/* Feature Highlight: Data Assetization */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-chart-1/20 to-chart-2/20 blur-3xl rounded-full opacity-50" />
            <img 
              src="/images/feature-data.jpg" 
              alt="Data Assetization" 
              className="relative rounded-sm shadow-2xl border border-white/10 w-full"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              {t('data.title1')} <br />
              <span className="text-primary">{t('data.title2')}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('data.desc')}
            </p>
            <ul className="space-y-4">
              {[
                t('data.item1'),
                t('data.item2'),
                t('data.item3')
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80">
                  <Sparkles className="w-5 h-5 text-chart-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/technology">
              <Button variant="link" className="p-0 h-auto text-primary font-heading text-lg group">
                {t('data.link')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlight: Global Reach */}
      <section className="py-24 bg-background relative">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              {t('global.title1')} <br />
              <span className="text-chart-1">{t('global.title2')}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('global.desc')}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-sm bg-card border border-border">
                <h4 className="text-3xl font-bold text-primary mb-2">{t('global.stat1.value')}</h4>
                <p className="text-sm text-muted-foreground">{t('global.stat1.label')}</p>
              </div>
              <div className="p-6 rounded-sm bg-card border border-border">
                <h4 className="text-3xl font-bold text-primary mb-2">{t('global.stat2.value')}</h4>
                <p className="text-sm text-muted-foreground">{t('global.stat2.label')}</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-l from-chart-1/20 to-chart-3/20 blur-3xl rounded-full opacity-50" />
            <img 
              src="/images/feature-global.jpg" 
              alt="Global Reach" 
              className="relative rounded-sm shadow-2xl border border-white/10 w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="h-14 px-10 text-lg rounded-sm bg-foreground text-background hover:bg-foreground/90 font-heading tracking-wide">
              {t('cta.button1')}
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-sm border-foreground/20 hover:bg-foreground/5 font-heading tracking-wide">
              {t('cta.button2')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group p-8 rounded-sm bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
      <div className="mb-6 relative z-10">{icon}</div>
      <h3 className="text-xl font-heading font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed relative z-10">{description}</p>
    </div>
  );
}
