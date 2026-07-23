import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Clock, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/layout/PageHero';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { siteConfig } from '@/content/site-config';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phones[0],
    sub: siteConfig.phones[1],
    href: `tel:${siteConfig.phones[0].replace(/\s/g, '')}`,
    accent: 'rose' as const,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    accent: 'cyan' as const,
  },
  {
    icon: MapPin,
    label: 'Office',
    value: `${siteConfig.address.line1}, ${siteConfig.address.city}, ${siteConfig.address.state} - ${siteConfig.address.postalCode}`,
    accent: 'amber' as const,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday – Friday: 10:00 AM – 6:30 PM',
    sub: 'Closed on Weekends',
    accent: 'violet' as const,
  },
];

const accentConfig = {
  rose:   { icon: 'text-dr-rose bg-dr-rose/10 border-dr-rose/20', border: 'hover:border-dr-rose/30' },
  cyan:   { icon: 'text-dr-cyan bg-dr-cyan/10 border-dr-cyan/20', border: 'hover:border-dr-cyan/30' },
  amber:  { icon: 'text-dr-amber bg-dr-amber/10 border-dr-amber/20', border: 'hover:border-dr-amber/30' },
  violet: { icon: 'text-dr-violet bg-dr-violet/10 border-dr-violet/20', border: 'hover:border-dr-violet/30' },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact DigitalRaiz"
        subtitle="Let's discuss your custom web platforms, native mobile applications, SEO indexing audit, or enterprise AI roadmap."
      />

      <Section spacing="xl">
        <Container className="grid gap-12 lg:grid-cols-12">
          {/* ── Info Side ── */}
          <RevealOnScroll className="space-y-8 lg:col-span-5">
            <div className="space-y-3">
              <Badge variant="build">GET IN TOUCH</Badge>
              <h2 className="font-display text-2xl font-bold text-dr-text-primary sm:text-3xl">
                Let's Start a Conversation
              </h2>
              <p className="text-sm text-dr-text-secondary leading-relaxed">
                Connect with our Hyderabad engineering and campaign optimization team directly via mail, phone, or stop by our office.
              </p>
            </div>

            <div className="space-y-4">
              {CONTACT_INFO.map(({ icon: Icon, label, value, sub, href, accent }, idx) => {
                const config = accentConfig[accent];
                const content = (
                  <div
                    className={`flex items-start gap-4 p-4 rounded-xl border border-dr-border bg-dr-elevated/50 transition-all duration-300 group hover:bg-dr-elevated hover:shadow-card ${config.border}`}
                  >
                    <span className={`inline-flex size-11 shrink-0 items-center justify-center rounded-xl border ${config.icon}`}>
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] text-dr-text-muted uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                      <p className="text-sm font-semibold text-dr-text-primary break-words">{value}</p>
                      {sub && <p className="text-xs text-dr-text-secondary mt-0.5">{sub}</p>}
                    </div>
                  </div>
                );

                if (href) {
                  return (
                    <a key={idx} href={href} className="block">
                      {content}
                    </a>
                  );
                }
                return <div key={idx}>{content}</div>;
              })}
            </div>

            {/* Quick links */}
            <div className="pt-2 space-y-2">
              <p className="text-xs text-dr-text-muted uppercase tracking-wider font-semibold">Prefer to browse first?</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Services', href: '/services' },
                  { label: 'Portfolio', href: '/work' },
                  { label: 'AI Solutions', href: '/ai-solutions' },
                ].map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-dr-text-secondary hover:text-dr-cyan border border-dr-border hover:border-dr-cyan/30 rounded-full px-3 py-1.5 transition-all duration-300"
                  >
                    {label}
                    <ArrowRight className="size-3" />
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* ── Form Side ── */}
          <RevealOnScroll delay={0.2} className="lg:col-span-7">
            <Card className="border-dr-border bg-dr-elevated/40 shadow-card">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-16 space-y-5">
                    <div className="size-16 rounded-full bg-dr-cyan/10 border border-dr-cyan/30 flex items-center justify-center mx-auto">
                      <Send className="size-7 text-dr-cyan" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold text-dr-text-primary">
                        Message Sent!
                      </h3>
                      <p className="text-sm text-dr-text-secondary max-w-sm mx-auto leading-relaxed">
                        Thank you for contacting DigitalRaiz. Our team will analyze your details and get back to you within 24 business hours.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="mb-6">
                      <h3 className="font-display text-xl font-bold text-dr-text-primary">
                        Send us a Message
                      </h3>
                      <p className="text-sm text-dr-text-muted mt-1">
                        Fill in your project details below
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input
                        label="Your Name"
                        name="name"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <Input
                      label="Subject"
                      name="subject"
                      required
                      placeholder="e.g. Mobile App Development Consultation"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                    <Textarea
                      label="Message Details"
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your project, budget specifications, and timeline expectations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    <Button type="submit" fullWidth className="gap-2 mt-2">
                      Send Message <Send className="size-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </RevealOnScroll>
        </Container>
      </Section>
    </>
  );
}
