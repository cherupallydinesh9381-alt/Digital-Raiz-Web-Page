import { ShieldCheck, GraduationCap, Building2, ShoppingBag, Landmark, Sun, ChevronRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/layout/PageHero';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Card, CardContent } from '@/components/ui/Card';
import { StaggerChildren } from '@/components/motion/StaggerChildren';

const INDUSTRIES_DETAILS = [
  {
    name: 'Healthcare & Specialized Clinics',
    desc: 'Setting up patient appointment sites, SEO listings, and HIPAA-friendly databases. We support clinics like Microcare ENT and Sai Ram Neuro in Hyderabad.',
    icon: ShieldCheck,
    solutions: ['Local SEO & Maps Ranking', 'Patient Management Integrations', 'Secure Portals'],
  },
  {
    name: 'Higher Education & Academies',
    desc: 'Providing learning management suites and custom website portals for institutes like DRNCC College and Icreate College to handle student registries.',
    icon: GraduationCap,
    solutions: ['Student Registry Portals', 'Course Inventories', 'Academy Portals'],
  },
  {
    name: 'Real Estate & Infrastructure',
    desc: 'Dynamic maps listing, lead capture pipelines, and landing templates for builders and agents like Kubera Infra and Home Haven Realty.',
    icon: Building2,
    solutions: ['CRM Pipelines', 'Property Maps Integration', 'High-Converting Landing Pages'],
  },
  {
    name: 'E-Commerce & Digital Retail',
    desc: 'Scalable shopping portals, payment gateways (Razorpay, Stripe), automated invoices, and delivery tracking interfaces.',
    icon: ShoppingBag,
    solutions: ['Payment Gateway Setup', 'Inventory Syncing', 'Mobile Shopping Apps'],
  },
  {
    name: 'Clean Energy & Solar Plants',
    desc: 'Connecting solar sales networks, cost estimators, and business portals for renewable contractors like Sri Balaji Solar Energies.',
    icon: Sun,
    solutions: ['Solar Savings Calculators', 'Commercial B2B Funnels', 'Site Audit Portals'],
  },
  {
    name: 'Fintech & Business Management',
    desc: 'Secure dashboard solutions and ledger logic engines designed for specialized management models like ChitBoss fund management.',
    icon: Landmark,
    solutions: ['Fintech Dashboards', 'Ledger Integrity Logs', 'Multi-tenant Support Roles'],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="Specialized domain expertise translating complex software requirements into custom business systems."
      />

      {/* Industries Grid */}
      <Section spacing="xl">
        <Container className="space-y-12">
          <StaggerChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_DETAILS.map((ind, idx) => (
              <Card key={idx} className="border-dr-border bg-dr-surface/30 hover:bg-dr-surface hover:border-dr-border-strong transition-all duration-300">
                <CardContent className="p-8 space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="size-12 rounded-dr-md bg-dr-rose/10 flex items-center justify-center text-dr-rose">
                      <ind.icon className="size-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-dr-text-primary">{ind.name}</h3>
                    <p className="text-xs text-dr-text-secondary leading-relaxed">{ind.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-dr-border mt-6">
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-dr-text-muted mb-2.5">Key Implementations</h4>
                    <ul className="space-y-1.5">
                      {ind.solutions.map((sol, solIdx) => (
                        <li key={solIdx} className="flex items-center text-xs text-dr-text-primary gap-1.5">
                          <ChevronRight className="size-3 text-dr-cyan shrink-0" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerChildren>
        </Container>
      </Section>

      {/* Domain Consultation CTA */}
      <Section spacing="xl" background="surface">
        <Container className="text-center max-w-3xl space-y-6">
          <h2 className="font-display text-2xl font-bold sm:text-4xl">
            Need an Industry-Specific Feature?
          </h2>
          <p className="text-sm text-dr-text-secondary">
            Our engineers will perform a technology assessment of your current tools and compile a customized build outline.
          </p>
          <div className="pt-4">
            <ButtonLink to="/contact">
              Talk to our Domain Experts
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
