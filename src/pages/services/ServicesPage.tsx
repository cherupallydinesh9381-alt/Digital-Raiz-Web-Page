import { Code, TrendingUp, Brain, Server, Shield, Sparkles, Smartphone, Lightbulb, Search, MessageSquare, ArrowRight } from 'lucide-react';

import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/layout/PageHero';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Card, CardContent } from '@/components/ui/Card';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { StaggerChildren } from '@/components/motion/StaggerChildren';

const SERVICES_LIST = [
  {
    lane: 'Build',
    themeColor: 'text-dr-cyan border-dr-cyan/30',
    laneDesc: 'Modern product engineering covering frontend designs, application backends, and responsive database integrations.',
    subServices: [
      { name: 'Web Development', desc: 'Custom portals, React apps, e-commerce storefronts, and landing pipelines.', icon: Code },
      { name: 'Mobile Application', desc: 'Native-speed Android and iOS apps designed using the Flutter framework.', icon: Smartphone },
      { name: 'UI/UX Styling', desc: 'Figma prototypes, customer journey wireframing, and interactive brand design.', icon: Lightbulb },
      { name: 'Custom Software', desc: 'Tailored administrative interfaces, CRM portals, and dashboard systems.', icon: Server },
    ]
  },
  {
    lane: 'Grow',
    themeColor: 'text-dr-amber border-dr-amber/30',
    laneDesc: 'Comprehensive online expansion systems focused on lead acquisition, search indexing, and audience monetization.',
    subServices: [
      { name: 'Search Engine Optimization', desc: 'Keyword mapping, local maps listing, backlink indexing, and speed audits.', icon: Search },
      { name: 'Social Media Management', desc: 'Image creations, platform posts, review monitoring, and audience response.', icon: MessageSquare },
      { name: 'Google Ads & PPC', desc: 'Pay-per-click setups, targeted display banners, and retargeting triggers.', icon: TrendingUp },
      { name: 'Email Campaigns', desc: 'Newsletter styling, subscriber list setups, and automated drip sequences.', icon: Sparkles },
    ]
  },
  {
    lane: 'Advise',
    themeColor: 'text-dr-violet border-dr-violet/30',
    laneDesc: 'Strategic consultancies aimed at modernizing enterprise architectures, integrating clouds, and security workflows.',
    subServices: [
      { name: 'AI & ML Tuning', desc: 'Custom LLM models, intelligent chat agents, and automated data pipelines.', icon: Brain },
      { name: 'SAP Cloud Systems', desc: 'ERP integrations, database setups, and cloud migration consultancies.', icon: Server },
      { name: 'Internet of Things (IoT)', desc: 'Sensor arrays, device tracking, and hardware integration software.', icon: Smartphone },
      { name: 'IT Infrastructure Consulting', desc: 'Hardware assessments, database migrations, and security compliance audits.', icon: Shield },
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="End-to-end digital solutions spanning custom engineering, online marketing strategies, and strategic IT advice."
      />

      {/* Services Lanes */}
      <Section spacing="xl">
        <Container className="space-y-20">
          {SERVICES_LIST.map((srv, idx) => (
            <div key={idx} className="space-y-8">
              <RevealOnScroll className="max-w-3xl space-y-3">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-dr-surface border ${srv.themeColor}`}>
                  {srv.lane} Track
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary">
                  {srv.lane} Services
                </h2>
                <p className="text-sm text-dr-text-secondary leading-relaxed">
                  {srv.laneDesc}
                </p>
              </RevealOnScroll>

              <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {srv.subServices.map((sub, subIdx) => (
                  <Card key={subIdx} className="border-dr-border bg-dr-surface/30 hover:bg-dr-surface hover:border-dr-border-strong transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="size-10 rounded-dr-md bg-dr-elevated flex items-center justify-center text-dr-rose">
                        <sub.icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold mb-1 text-dr-text-primary">{sub.name}</h3>
                        <p className="text-xs text-dr-text-secondary leading-relaxed">{sub.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </StaggerChildren>
            </div>
          ))}
        </Container>
      </Section>

      {/* Strategic Plan Section */}
      <Section spacing="xl" background="surface">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <RevealOnScroll className="space-y-6">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Our Development & Integration Approach
            </h2>
            <p className="text-dr-text-secondary leading-relaxed">
              We apply a proven development methodology to ensure your product launches on schedule, within defined budgets, and performs reliably under scale.
            </p>
            <p className="text-dr-text-secondary leading-relaxed">
              Our team operates with absolute transparency — using sprint-based reviews, Figma wireframes, staging deployments, and automated testing suites.
            </p>
            <div className="pt-2">
              <ButtonLink to="/contact" className="group">
                Start Discovery Roadmap <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className="space-y-4">
            <div className="rounded-dr-md border border-dr-border bg-dr-void p-5 flex gap-4">
              <div className="size-10 rounded-full bg-dr-rose/10 flex items-center justify-center text-dr-rose shrink-0 font-bold">1</div>
              <div>
                <h4 className="text-sm font-bold text-dr-text-primary">Requirement Gathering</h4>
                <p className="text-xs text-dr-text-secondary">Extracting core features and defining business objectives.</p>
              </div>
            </div>
            <div className="rounded-dr-md border border-dr-border bg-dr-void p-5 flex gap-4">
              <div className="size-10 rounded-full bg-dr-cyan/10 flex items-center justify-center text-dr-cyan shrink-0 font-bold">2</div>
              <div>
                <h4 className="text-sm font-bold text-dr-text-primary">UX & Core Development</h4>
                <p className="text-xs text-dr-text-secondary">Crafting responsive interfaces and writing clean backend modules.</p>
              </div>
            </div>
            <div className="rounded-dr-md border border-dr-border bg-dr-void p-5 flex gap-4">
              <div className="size-10 rounded-full bg-dr-amber/10 flex items-center justify-center text-dr-amber shrink-0 font-bold">3</div>
              <div>
                <h4 className="text-sm font-bold text-dr-text-primary">QA & Deployment</h4>
                <p className="text-xs text-dr-text-secondary">Performing testing protocols and setting up domain hosts.</p>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>
    </>
  );
}
