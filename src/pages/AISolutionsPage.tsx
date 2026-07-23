import { Brain, Cpu, MessageSquare, Zap, ArrowRight, Shield, Lock, Server } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/layout/PageHero';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { StaggerChildren } from '@/components/motion/StaggerChildren';

const AI_OFFERINGS = [
  {
    title: 'Conversational Agents & Chatbots',
    desc: 'Intelligent, context-aware chatbot support systems trained directly on your company policies and client documents.',
    icon: MessageSquare,
    color: 'text-dr-rose',
    iconBg: 'bg-dr-rose/10 border-dr-rose/20',
    techs: ['OpenAI API', 'RAG Databases', 'LangChain'],
  },
  {
    title: 'Workflow Automation',
    desc: 'Remove manual data entries. We design pipelines that link your CRM, emails, and inventory databases using smart agent triggers.',
    icon: Zap,
    color: 'text-dr-amber',
    iconBg: 'bg-dr-amber/10 border-dr-amber/20',
    techs: ['Make.com', 'n8n', 'Python scripts'],
  },
  {
    title: 'Fine-Tuning & Custom LLMs',
    desc: 'Adapt open-source models (like Llama or Mistral) to operate inside secure networks without leaking private details.',
    icon: Brain,
    color: 'text-dr-violet',
    iconBg: 'bg-dr-violet/10 border-dr-violet/20',
    techs: ['Hugging Face', 'PyTorch', 'Vector Databases'],
  },
  {
    title: 'Predictive Data Analytics',
    desc: 'Audit your historical transactions to forecast demand, spot seasonal anomalies, and suggest dynamic pricing.',
    icon: Cpu,
    color: 'text-dr-cyan',
    iconBg: 'bg-dr-cyan/10 border-dr-cyan/20',
    techs: ['Pandas', 'Scikit-Learn', 'TensorFlow'],
  },
];

const SECURITY_FEATURES = [
  { icon: Shield, color: 'text-dr-rose', text: 'Zero Retention Data Policies on third-party APIs.' },
  { icon: Server, color: 'text-dr-cyan', text: 'Isolated self-hosted LLM instances on your private cloud.' },
  { icon: Lock, color: 'text-dr-amber', text: 'Role-based access lists protecting intellectual data.' },
];

export default function AISolutionsPage() {
  return (
    <>
      <PageHero
        title="AI Solutions"
        description="Harness artificial intelligence and workflow automations to reduce overheads and accelerate operations."
      />

      {/* ── AI Services Grid ── */}
      <Section spacing="xl">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="advise">AI & ML CAPABILITIES</Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary sm:text-4xl">
              Artificial Intelligence Tailored For Business
            </h2>
            <p className="text-dr-text-secondary leading-relaxed">
              We design, evaluate, and integrate smart models that enhance performance without complexity.
            </p>
          </div>

          <StaggerChildren className="grid gap-6 md:grid-cols-2">
            {AI_OFFERINGS.map((item, idx) => (
              <Card
                key={idx}
                className="border-dr-border bg-dr-elevated/40 hover:border-dr-border-strong hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className={`size-12 rounded-xl border flex items-center justify-center shrink-0 ${item.iconBg}`}>
                      <item.icon className={`size-6 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-dr-text-primary mb-2">{item.title}</h3>
                      <p className="text-sm text-dr-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dr-border">
                    {item.techs.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-[10px] font-bold text-dr-cyan uppercase tracking-wider bg-dr-cyan/8 border border-dr-cyan/15 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerChildren>
        </Container>
      </Section>

      {/* ── Security & CTA ── */}
      <Section spacing="xl" background="surface">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <RevealOnScroll className="space-y-6">
            <Badge variant="build">SECURITY & RELIABILITY</Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary">
              Enterprise-Grade Privacy &amp; Security
            </h2>
            <p className="text-dr-text-secondary leading-relaxed">
              We understand that corporate security is non-negotiable. That's why we structure all AI integrations with strict permission scopes, data isolation, and API encryption.
            </p>
            <ul className="space-y-4">
              {SECURITY_FEATURES.map(({ icon: Icon, color, text }, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className={`mt-0.5 size-6 rounded-full flex items-center justify-center shrink-0 ${color === 'text-dr-rose' ? 'bg-dr-rose/10 border border-dr-rose/20' : color === 'text-dr-cyan' ? 'bg-dr-cyan/10 border border-dr-cyan/20' : 'bg-dr-amber/10 border border-dr-amber/20'}`}>
                    <Icon className={`size-3.5 ${color}`} />
                  </div>
                  <span className="text-sm text-dr-text-secondary leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="relative overflow-hidden rounded-[20px] border border-dr-border bg-dr-elevated/60 p-8 shadow-card hover:border-dr-cyan/30 hover:shadow-[0_0_30px_rgba(0,242,254,0.08)] transition-all duration-500">
              <div className="absolute -right-8 -top-8 size-48 bg-dr-cyan/8 blur-[60px] rounded-full pointer-events-none" />
              <div className="relative z-10 space-y-5">
                <div className="size-12 rounded-xl bg-dr-cyan/10 border border-dr-cyan/20 flex items-center justify-center">
                  <Brain className="size-6 text-dr-cyan" />
                </div>
                <h3 className="font-display text-2xl font-bold text-dr-text-primary">
                  Integrate AI Today
                </h3>
                <p className="text-sm text-dr-text-secondary leading-relaxed">
                  Whether you need to automate your customer support desks or build complex classification models, our engineers are ready to build a proof-of-concept.
                </p>
                <div className="pt-2">
                  <ButtonLink to="/contact" fullWidth>
                    Schedule an AI Consultation
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </ButtonLink>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>
    </>
  );
}
