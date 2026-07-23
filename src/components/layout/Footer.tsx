import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowRight, Send } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Container } from '@/components/layout/Container';
import { footerNav } from '@/content/navigation';
import { siteConfig } from '@/content/site-config';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Magnetic } from '@/components/motion/Magnetic';

const socialLinks = [
  { href: siteConfig.social.linkedin, label: 'LinkedIn', icon: FaLinkedin },
  { href: siteConfig.social.facebook, label: 'Facebook', icon: FaFacebook },
  { href: siteConfig.social.instagram, label: 'Instagram', icon: FaInstagram },
  { href: siteConfig.social.twitter, label: 'Twitter / X', icon: FaXTwitter },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative mt-auto border-t border-dr-border bg-dr-void overflow-hidden">
      {/* Ambient glow accents */}
      <div className="absolute bottom-0 left-1/4 w-96 h-64 rounded-full bg-dr-rose/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-80 h-48 rounded-full bg-dr-cyan/5 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        {/* ── Newsletter Strip ── */}
        <div className="grid gap-8 py-14 lg:grid-cols-12 lg:items-center border-b border-dr-border">
          <div className="lg:col-span-6 space-y-2">
            <h3 className="font-display text-xl font-bold text-dr-text-primary uppercase tracking-wider">
              Stay Connected
            </h3>
            <p className="text-sm text-dr-text-secondary max-w-md leading-relaxed">
              Receive strategic updates on emerging AI, web technologies, and digital optimization trends.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 bg-dr-cyan/10 border border-dr-cyan/20 rounded-xl text-sm text-dr-cyan font-semibold">
                ✓ You're subscribed. Welcome aboard!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your business email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-dr-elevated/80 border-dr-border hover:border-dr-border-strong"
                />
              <Button 
  type="submit" 
  variant="primary" 
  size="md" 
  className="group/btn shrink-0 gap-1.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
>
  Subscribe 
  <Send 
    className="
      size-4 
      /* 🚀 MICRO-ANIMATION HOVER TRANSLATIONS */
      transition-transform 
      duration-300 
      ease-out 
      group-hover/btn:translate-x-3.5 
      group-hover/btn:-translate-y-2.5 
      group-hover/btn:scale-110
    " 
  />
</Button>

              </form>
            )}
          </div>
        </div>

        {/* ── Links & Brand Grid ── */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link
              to="/"
              className="inline-block font-display text-xl font-black text-dr-text-primary tracking-wider uppercase hover:opacity-80 transition-opacity"
            >
              Digital<span className="text-transparent bg-clip-text bg-gradient-cta">Raiz</span>
            </Link>
            <p className="text-sm text-dr-text-secondary leading-relaxed">{siteConfig.tagline}</p>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Magnetic key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={[
                      'inline-flex size-10 items-center justify-center rounded-full',
                      'border border-dr-border bg-dr-elevated/60 text-dr-text-secondary',
                      'transition-all duration-300',
                      'hover:border-dr-cyan/50 hover:text-dr-cyan hover:bg-dr-elevated',
                      'hover:shadow-[0_0_15px_rgba(0,242,254,0.2)]',
                    ].join(' ')}
                  >
                    <Icon className="size-4" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          <FooterColumn title="Services" links={footerNav.services} />
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Resources" links={footerNav.resources} />
        </div>

        {/* ── Contact Info Row ── */}
        <div className="grid gap-4 pb-10 md:grid-cols-3 border-t border-dr-border pt-8">
          
          <div className="group border border-transparent rounded-xl transition-all duration-300 hover:border-dr-rose/80 hover:shadow-[0_0_15px_rgba(219,39,119,0.15)] bg-dr-elevated/10">
  <ContactItem
    icon={Phone}
    label="Phone"
    value={siteConfig.phones[0]}
    href={`tel:${siteConfig.phones[0].replace(/\s/g, '')}`}
    accent="rose"
  />
</div>

<div className="group border border-transparent rounded-xl transition-all duration-300 hover:border-dr-cyan/80 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] bg-dr-elevated/10">
  <ContactItem
    icon={Mail}
    label="Email"
    value={siteConfig.email}
    href={`mailto:${siteConfig.email}`}
    accent="cyan"
  />
</div>

<div className="group border border-transparent rounded-xl transition-all duration-300 hover:border-dr-amber/80 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] bg-dr-elevated/10">
  <ContactItem
    icon={MapPin}
    label="Office"
    value={`${siteConfig.address.city}, ${siteConfig.address.state}`}
    accent="amber"
  />
</div>

        </div>

        {/* ── Copyright Strip ── */}
        <div className="flex flex-col gap-2 border-t border-dr-border py-6 text-xs text-dr-text-muted md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="font-mono">CIN: {siteConfig.cin} · Est. {siteConfig.established}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2 className="mb-5 text-xs font-bold uppercase tracking-widest text-dr-text-muted">
        {title}
      </h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="group flex items-center gap-1.5 text-sm text-dr-text-secondary transition-all duration-300 hover:text-dr-text-primary"
            >
              <ArrowRight className="size-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-dr-cyan" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  accent = 'cyan',
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  accent?: 'cyan' | 'rose' | 'amber';
}) {
  const accentClass = {
    cyan:  'text-dr-cyan bg-dr-cyan/10 border-dr-cyan/20',
    rose:  'text-dr-rose bg-dr-rose/10 border-dr-rose/20',
    amber: 'text-dr-amber bg-dr-amber/10 border-dr-amber/20',
  }[accent];

  const content = (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-dr-elevated/50 border border-dr-border hover:border-dr-border-strong transition-all duration-300 group-hover:bg-dr-elevated">
      <span className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl border ${accentClass}`}>
        <Icon className="size-4" />
      </span>
      <div>
        <p className="text-xs text-dr-text-muted uppercase tracking-wider font-semibold">{label}</p>
        <p className="text-sm text-dr-text-primary font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="group block hover:opacity-90 transition-opacity">
        {content}
      </a>
    );
  }

  return <div className="group">{content}</div>;
}
