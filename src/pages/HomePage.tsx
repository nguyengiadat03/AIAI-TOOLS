import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { LogoCarousel } from '@/components/ui/LogoCarousel';
import { Zap, Rocket, ShieldCheck, Bot, MapPin, Phone, Mail } from 'lucide-react';
import { PricingCard } from '@/components/ui/PricingCard';
import { ContactForm } from '@/components/ContactForm';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { BlogPostCard } from '@/components/ui/BlogPostCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from '@/hooks/useLanguage';
import { SolutionDetailModal } from '@/components/SolutionDetailModal';
import { BlogDetailModal } from '@/components/BlogDetailModal';
import { solutionsData, pricingPlans, caseStudies, blogPosts, faqs } from '@/lib/data';
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, delay: i * 0.1 }
  })
};
export function HomePage() {
  const { t } = useLanguage();
  const [selectedSolution, setSelectedSolution] = useState<any>(null);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  return (
    <div className="overflow-x-hidden bg-background text-foreground">
      <section id="home" className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center particle-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight">
              {t.hero.title}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-neon-green">
                {t.hero.subtitle}
              </span>
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              {t.hero.description}
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact">
                <Button size="lg" className="bg-tech-blue hover:bg-tech-blue/90 text-white font-semibold px-8 py-6 text-lg shadow-glow transition-all duration-300 hover:scale-105">
                  {t.hero.ctaPrimary}
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                  {t.hero.ctaSecondary}
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center">{t.whyUs.title}</h2>
            <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">{t.whyUs.description}</p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0}>
              <Zap className="w-12 h-12 text-tech-blue mb-4" />
              <h3 className="text-xl font-bold">{t.whyUs.cards[0].title}</h3>
              <p className="text-muted-foreground mt-2">{t.whyUs.cards[0].description}</p>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <Rocket className="w-12 h-12 text-tech-blue mb-4" />
              <h3 className="text-xl font-bold">{t.whyUs.cards[1].title}</h3>
              <p className="text-muted-foreground mt-2">{t.whyUs.cards[1].description}</p>
            </AnimatedCard>
            <AnimatedCard delay={0.4}>
              <ShieldCheck className="w-12 h-12 text-tech-blue mb-4" />
              <h3 className="text-xl font-bold">{t.whyUs.cards[2].title}</h3>
              <p className="text-muted-foreground mt-2">{t.whyUs.cards[2].description}</p>
            </AnimatedCard>
          </div>
        </div>
      </section>
      <section id="solutions" className="py-16 md:py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center">{t.solutions.title}</h2>
            <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">{t.solutions.description}</p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((solution, index) => {
              const Icon = solution.Icon || Bot;
              return (
                <div key={solution.slug} onClick={() => setSelectedSolution(solution)} className="cursor-pointer">
                  <AnimatedCard delay={index * 0.1}>
                    <Icon className="w-10 h-10 text-neon-green mb-4" />
                    <h3 className="text-xl font-bold flex-grow">{solution.title}</h3>
                    <p className="text-muted-foreground mt-2">{solution.description}</p>
                  </AnimatedCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center">{t.timeline.title}</h2>
            <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">{t.timeline.description}</p>
          </motion.div>
          <div className="mt-16 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            {t.timeline.steps.map((step, index) =>
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className={`flex md:items-center mb-8 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="hidden md:flex w-1/2"></div>
                <div className="hidden md:flex justify-center w-12">
                  <div className="z-10 w-8 h-8 bg-tech-blue rounded-full flex items-center justify-center text-white font-bold">{index + 1}</div>
                </div>
                <div className="w-full md:w-1/2 bg-secondary/50 p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground mt-2">{step.description}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      <section id="pricing" className="py-16 md:py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Bảng giá & Gói dịch vụ</h2>
            <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">Chọn gói phù hợp nhất với quy mô và nhu cầu của doanh nghiệp bạn.</p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) =>
              <PricingCard key={plan.name} plan={plan} delay={index * 0.1} />
            )}
          </div>
        </div>
      </section>
      <section id="for-business" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Giải pháp cho từng ngành</h2>
            <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">Xem cách chúng tôi áp dụng AI để giải quyết các thách thức đặc thù trong ngành của bạn.</p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CaseStudyCard caseStudy={caseStudies['real-estate']} delay={0} />
            <CaseStudyCard caseStudy={caseStudies['education']} delay={0.1} />
            <CaseStudyCard caseStudy={caseStudies['ecommerce']} delay={0.2} />
            <CaseStudyCard caseStudy={caseStudies['finance']} delay={0.3} />
          </div>
        </div>
      </section>
      <section id="blog" className="py-16 md:py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Blog & Tin tức AI</h2>
            <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">Cập nhật những xu h��ớng, kiến thức và câu chuyện thành công mới nhất về AI trong kinh doanh.</p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) =>
              <BlogPostCard key={post.slug} post={post} delay={index * 0.1} onClick={() => setSelectedPost(post)} />
            )}
          </div>
        </div>
      </section>
      <section id="faq" className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Câu hỏi thường gặp</h2>
            <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">Tìm câu trả lời cho các câu hỏi phổ biến nhất về dịch vụ và giải pháp của chúng tôi.</p>
          </motion.div>
          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) =>
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>
      </section>
      <section id="contact" className="py-16 md:py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Liên hệ với chúng tôi</h2>
            <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">Sẵn sàng để bắt đầu? Điền vào biểu mẫu bên dưới hoặc liên hệ trực tiếp với chúng tôi.</p>
          </motion.div>
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h3 className="text-2xl font-bold mb-4">Thông tin liên hệ</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3"><MapPin className="w-6 h-6 text-tech-blue mt-1" /><span>Tầng 5, Tòa BMC, 379 Minh Khai, HBT, Hà Nội</span></li>
                <li className="flex items-center gap-3"><Mail className="w-6 h-6 text-tech-blue" /><a href="mailto:contact@aiai.vn" className="hover:text-foreground">contact@aiai.vn</a></li>
                <li className="flex items-center gap-3"><Phone className="w-6 h-6 text-tech-blue" /><span>Hotline / Zalo OA</span></li>
              </ul>
            </motion.div>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">{t.clients.title}</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto text-muted-foreground">{t.clients.description}</p>
          <div className="mt-12">
            <LogoCarousel />
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">
              {t.finalCta.title}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">{t.finalCta.description}</p>
            <div className="mt-10">
              <a href="#contact">
                <Button size="lg" className="bg-tech-blue hover:bg-tech-blue/90 text-white font-semibold px-10 py-6 text-xl shadow-glow transition-all duration-300 hover:scale-105">
                  {t.finalCta.cta}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <SolutionDetailModal
        isOpen={!!selectedSolution}
        onClose={() => setSelectedSolution(null)}
        solution={selectedSolution}
      />
      <BlogDetailModal
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
        post={selectedPost}
      />
    </div>
  );
}