import { Target, Eye, ShieldCheck, Heart, Users, Sparkles } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/layout/PageHero';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { StaggerChildren } from '@/components/motion/StaggerChildren';

const DIRECTORS = [
  {
    name: 'Suman Akula',
    role: 'Founder & Managing Director',
    desc: 'Leads engineering divisions and custom software architectural plans.',
    initial: 'SA',
  },
  {
    name: 'Sravani Akula',
    role: 'Co-Founder & Director',
    desc: 'Directs administrative workflows, corporate compliance, and media operations.',
    initial: 'SA',
  },
];

const CORE_VALUES = [
  { title: 'Transparency', desc: 'Honest billing pipelines and periodic progress updates during development.', icon: ShieldCheck, color: 'text-dr-cyan', bg: 'bg-dr-cyan/10 border-dr-cyan/20' },
  { title: 'Client Centricity', desc: 'We structure custom frameworks that align directly with specific workflows.', icon: Users, color: 'text-dr-rose', bg: 'bg-dr-rose/10 border-dr-rose/20' },
  { title: 'Continuous Iteration', desc: 'Always refining products post-launch via active maintenance plans.', icon: Sparkles, color: 'text-dr-amber', bg: 'bg-dr-amber/10 border-dr-amber/20' },
  { title: 'Innovation', desc: 'Deploying advanced technology stacks like React, Flutter, and AI models.', icon: Heart, color: 'text-dr-violet', bg: 'bg-dr-violet/10 border-dr-violet/20' },
];

const CORPORATE_FACTS = [
  { label: 'Established Year', value: '2020' },
  { label: 'Official CIN', value: 'U72900TG2022PTC160541' },
  { label: 'Office Location', value: 'Hyderabad, India' },
  { label: 'Primary Focus', value: 'Software & Marketing' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About DigitalRaiz"
        description="Empowering enterprises through modern software engineering and data-driven marketing since 2020."
      />

      {/* ── Corporate Overview ─────────────────────────────────── */}
      <Section spacing="xl">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <RevealOnScroll className="space-y-6">
            <Badge variant="build">WHO WE ARE</Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary">
              A Premier IT Services Company
            </h2>
            <p className="text-dr-text-secondary leading-relaxed">
              DigitalRaiz Creative Solutions Pvt Ltd is a premier IT services company headquartered in Hyderabad, India. Registered officially under CIN U72900TG2022PTC160541, we operate as a dedicated tech partner for brands aiming to modernize their systems and expand search presence.
            </p>
            <p className="text-dr-text-secondary leading-relaxed">
              From web apps and native Android/iOS mobile solutions to Google AdWords optimization and search engine marketing, we combine software design with conversion marketing strategy.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="relative overflow-hidden rounded-[20px] border border-dr-border bg-dr-elevated/60 p-8 shadow-card hover:border-dr-border-accent hover:shadow-[0_0_30px_rgba(0,242,254,0.08)] transition-all duration-500">
              <div className="absolute -right-8 -top-8 size-40 bg-dr-rose/8 blur-[60px] rounded-full pointer-events-none" />
              <h3 className="font-display text-lg font-bold text-dr-text-primary mb-6">
                Quick Corporate Facts
              </h3>
              <ul className="space-y-3">
                {CORPORATE_FACTS.map(({ label, value }, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between py-3 border-b border-dr-border last:border-0"
                  >
                    <span className="text-sm text-dr-text-secondary">{label}</span>
                    <span className="font-mono text-sm font-semibold text-dr-text-primary">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>

      {/* ── Vision & Mission ──────────────────────────────────────── */}
      <Section spacing="xl" background="surface">
        <Container className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <Badge variant="outline" className="border-dr-rose/30 text-dr-rose bg-dr-rose/5">
              VISION & MISSION
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary">
              Our Purpose &amp; Direction
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="border-dr-border bg-dr-elevated/40 hover:border-dr-rose/40 hover:shadow-[0_0_30px_rgba(255,42,95,0.08)] transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="size-12 rounded-xl bg-dr-rose/10 border border-dr-rose/20 flex items-center justify-center">
                  <Target className="size-6 text-dr-rose" />
                </div>
                <h3 className="font-display text-2xl font-bold text-dr-text-primary">Our Mission</h3>
                <p className="text-sm text-dr-text-secondary leading-relaxed">
                  To build digital applications that solve real operational bottlenecks, drive client engagement, and maximize business conversion targets via robust code architectures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-dr-border bg-dr-elevated/40 hover:border-dr-cyan/40 hover:shadow-[0_0_30px_rgba(0,242,254,0.08)] transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="size-12 rounded-xl bg-dr-cyan/10 border border-dr-cyan/20 flex items-center justify-center">
                  <Eye className="size-6 text-dr-cyan" />
                </div>
                <h3 className="font-display text-2xl font-bold text-dr-text-primary">Our Vision</h3>
                <p className="text-sm text-dr-text-secondary leading-relaxed">
                  To establish DigitalRaiz as a leading global technology agency by consistently refining product speed, embedding advanced AI systems, and structuring transparent client relations.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ── Directors ─────────────────────────────────────────────── */}
      <Section spacing="xl">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="build">LEADERSHIP</Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary sm:text-4xl">
              Board of Directors
            </h2>
            <p className="text-dr-text-secondary">
              The authorized leadership guiding DigitalRaiz's technological and media strategies.
            </p>
          </div>

          <StaggerChildren className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {DIRECTORS.map((dir, idx) => (
              <Card key={idx} className="border-dr-border bg-dr-elevated/40 hover:border-dr-border-strong hover:shadow-card transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="size-14 rounded-full bg-gradient-cta flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {dir.initial}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-dr-text-primary">{dir.name}</h3>
                      <p className="text-xs text-dr-rose font-semibold tracking-wide">{dir.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-dr-text-secondary leading-relaxed">{dir.desc}</p>
                </CardContent>
              </Card>
            ))}
          </StaggerChildren>
        </Container>
      </Section>

      {/* ── Core Values ───────────────────────────────────────────── */}
      <Section spacing="xl" background="surface">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="grow">CORE VALUES</Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary sm:text-4xl">
              What Defines Our Execution
            </h2>
            <p className="text-dr-text-secondary">
              Our core values shape every relationship and deliverable at DigitalRaiz.
            </p>
          </div>

          <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((val, idx) => (
              <Card key={idx} className="border-dr-border bg-dr-elevated/40 hover:border-dr-border-strong hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className={`size-10 rounded-xl border flex items-center justify-center ${val.bg}`}>
                    <val.icon className={`size-5 ${val.color}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-dr-text-primary mb-1">{val.title}</h3>
                    <p className="text-xs text-dr-text-secondary leading-relaxed">{val.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerChildren>
        </Container>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <Section spacing="xl">
        <Container className="text-center max-w-3xl space-y-6">
          <h2 className="font-display text-2xl font-bold sm:text-4xl text-dr-text-primary">
            Want to learn more about our methodologies?
          </h2>
          <p className="text-sm text-dr-text-secondary">
            Read details about our 7-step execution workflow or start a project today.
          </p>
          <div className="pt-4 flex justify-center gap-4 flex-wrap">
            <ButtonLink to="/contact">Let's Talk</ButtonLink>
            <ButtonLink to="/services" variant="secondary">See Services</ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
