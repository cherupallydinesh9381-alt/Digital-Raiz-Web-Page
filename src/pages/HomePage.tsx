import { useState, useRef, useEffect } from 'react';
import {
  ArrowRight, Code, TrendingUp, Brain, Shield, Users,
  Cpu, Zap, Globe, Sparkles, ChevronDown, Award, CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { RevealOnScroll } from '@/components/motion/RevealOnScroll';
import { StaggerChildren } from '@/components/motion/StaggerChildren';
import { MaskReveal } from '@/components/motion/MaskReveal';
import { useSplash } from '@/components/SplashContext';
import { SEOHead } from '@/components/meta/SEOHead';
import { getRouteMeta } from '@/content/route-registry';

const CLIENTS = [
  { name: 'Microcare ENT', icon: Shield },
  { name: 'DRNCC', icon: Award },
  { name: 'Icreate College', icon: Brain },
  { name: 'ChitBoss', icon: Shield },
  { name: 'Carnival Castle', icon: Sparkles },
  { name: 'Balaji Solar', icon: Zap },
  { name: 'Sai Ram Neuro', icon: Shield },
  { name: 'Kubera Infra', icon: Globe },
  { name: 'Urban Interior', icon: Cpu },
  { name: 'Solar Sales', icon: TrendingUp },
];

const SERVICES = [
  {
    title: 'Build',
    description: 'We design and construct high-performance digital products that scale.',
    icon: Code,
    color: 'text-dr-cyan',
    iconBg: 'bg-dr-cyan/10 border border-dr-cyan/20',
    accent: '#00f2fe',
    items: ['Web Development', 'Mobile Apps (Flutter)', 'UI/UX Design', 'Custom Software'],
    to: '/services/build',
  },
  {
    title: 'Grow',
    description: 'Maximize your digital presence and scale your audience acquisition.',
    icon: TrendingUp,
    color: 'text-dr-amber',
    iconBg: 'bg-dr-amber/10 border border-dr-amber/20',
    accent: '#ffb800',
    items: ['Search Engine Optimization (SEO)', 'Social Media Marketing (SMM)', 'Google PPC Ads', 'Email Marketing'],
    to: '/services/grow',
  },
  {
    title: 'Advise',
    description: 'Consultative tech partnerships that steer your enterprise strategy.',
    icon: Brain,
    color: 'text-dr-violet',
    iconBg: 'bg-dr-violet/10 border border-dr-violet/20',
    accent: '#7c3aed',
    items: ['AI & ML Integrations', 'SAP Cloud Solutions', 'IoT Implementations', 'IT Consulting Services'],
    to: '/services/advise',
  },
];

const TECHS = [
  { name: 'React / Next.js', category: 'Frontend' },
  { name: 'Flutter / Dart', category: 'Mobile' },
  { name: 'Node.js / Express', category: 'Backend' },
  { name: 'Python / PyTorch', category: 'AI & Data' },
  { name: 'SAP Cloud', category: 'Enterprise' },
  { name: 'AWS / Cloud', category: 'DevOps' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'TypeScript', category: 'Languages' },
];

const INDUSTRIES = [
  { name: 'Healthcare & Neuro', desc: 'Patient management portals, websites, and mobile apps for specialized clinics like Sai Ram Neuro and Microcare ENT.', icon: Shield },
  { name: 'Higher Education', desc: 'Custom education management software and SEO setups for colleges like Icreate and DRNCC.', icon: Users },
  { name: 'Real Estate & Infra', desc: 'Lead generation and digital mapping sites for developers like Kubera Infra.', icon: Globe },
  { name: 'Enterprise SaaS', desc: 'B2B workflows, fintech platforms, and custom administration engines.', icon: Cpu },
  { name: 'Clean Energy & Solar', desc: 'Web presence and CRM pipelines for industrial solar developers.', icon: Zap },
  { name: 'Retail & E-Commerce', desc: 'Modern storefronts with integrated payments, logistics, and inventories.', icon: Sparkles },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Brainstorm & Plan', desc: 'Stakeholder interviews, define features, and perform SWOT analysis.' },
  { step: '02', title: 'Idea Selection', desc: 'Narrowing down core concepts and choosing optimal tech stacks.' },
  { step: '03', title: 'Business Analysis', desc: 'Mapping user journeys, wireframes, and budgeting pipelines.' },
  { step: '04', title: 'UX & Core Dev', desc: 'High-fidelity UI designing and agile system architecture engineering.' },
  { step: '05', title: 'Testing & QA', desc: 'Automated, manual, security, and performance optimizations.' },
  { step: '06', title: 'Launch', desc: 'Domain, cloud hosting, App Store submissions, and live monitoring.' },
  { step: '07', title: 'Maintenance', desc: 'Technology updates, periodic backups, bug patches, and support.' },
];

const CASE_STUDIES = [
  {
    title: 'Microcare ENT Hospital Redesign',
    client: 'Microcare ENT',
    tags: ['SEO', 'Web Development', 'Healthcare'],
    desc: 'Ranked hospital on Google Page 1 for local search, driving 150% more digital appointments.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'ChitBoss Management Suite',
    client: 'ChitBoss',
    tags: ['Web Application', 'Fintech', 'Design'],
    desc: 'Created an intuitive dashboard and secure backend logic for chit fund management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Solar Sales Guru Portal',
    client: 'Solar Sales Guru',
    tags: ['Mobile Marketing', 'Lead Generation', 'Solar'],
    desc: 'Engineered high-converting landing funnels for commercial solar leads.',
    image: 'https://media.istockphoto.com/id/503435375/photo/happy-3d-small-person-and-solar-battery.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZZO00-n-DXAoV-9_dDAFyBQa9oDcGZs_z0FjH1pqBo4='
  },
];

const FAQS = [
  { q: 'What services does DigitalRaiz offer?', a: 'DigitalRaiz offers custom Web Development, Mobile App Development (using frameworks like Flutter), Digital Marketing (SEO, SMO, PPC, SMM), and Consultative IT services including AI/ML integrations and SAP Cloud.' },
  { q: 'Where is DigitalRaiz located?', a: 'We are located at #616, 6th Floor, Manjeera Majestic Commercial, JNTU Hitech City Road, KPHB, Hyderabad, Telangana, 500072.' },
  { q: 'How does your software development process work?', a: 'We follow a strategic 7-step process: Brainstorming & Planning, Idea Selection, Business Analysis, UX & Core Development, Testing & QA, Launch, and Maintenance.' },
  { q: 'Can you help integrate AI into our existing system?', a: 'Yes! We advise and build custom AI/ML applications, automated workflows, intelligent chatbots, and predictive data pipelines tailored to your business operations.' },
];

export default function HomePage() {
  const meta = getRouteMeta('home');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { isSplashFinished } = useSplash();

  const handleHeroMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    heroRef.current.style.setProperty('--mx', x.toString());
    heroRef.current.style.setProperty('--my', y.toString());
  };

  useEffect(() => {
    if (!isSplashFinished) return;

    const ctx = gsap.context(() => {
      // 1. Main Hero Timeline (Background, Headings, Text, Image, Logos, and Widget Cards)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 95%",
          end: "bottom 10%",
          toggleActions: "play none none none", // Hero stays fixed and unchanged after playing once
        },
        defaults: { ease: "power2.out" }
      });

      tl.to(".gsap-hero-bg", { opacity: 1, duration: 2.0, ease: "power3.inOut" }, 0.1);
      tl.fromTo(".gsap-hero-badge", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2 }, 0.2);
      tl.fromTo(".gsap-hero-h1", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }, 0.3);
      tl.fromTo(".gsap-hero-p", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2 }, 0.5);
      tl.fromTo(".gsap-hero-cta", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.0 }, 0.7);
      tl.fromTo(".gsap-hero-stats", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2 }, 0.9);
      tl.fromTo(".gsap-hero-img", { opacity: 0, scale: 0.9, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power4.out" }, 0.5);
      tl.fromTo(".gsap-trusted-title", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.0 }, 0.9);
      tl.fromTo(".gsap-trusted-logo", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.0, stagger: 0.05 }, 1.1);

      // Widget cards slide in as part of the fixed hero animation
      tl.fromTo(".gsap-hero-widget1", { opacity: 0, x: -40, y: 30 }, { opacity: 1, x: 0, y: 0, duration: 1.2 }, 0.8);
      tl.fromTo(".gsap-hero-widget2", { opacity: 0, x: 40, y: 30 }, { opacity: 1, x: 0, y: 0, duration: 1.2 }, 1.0);

      // 2. Widget 1 (AI Analytics) Metrics Timeline - Triggers every time it enters
      const tlW1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsap-widget1-wrapper",
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "restart reset restart reset", // Plays forward on enter/enterBack, snaps to 0 on leave/leaveBack
        },
        defaults: { ease: "power3.out" }
      });
      // 0.5s delay creates a cinematic pause when scrolling back into view before filling starts
      tlW1.fromTo(".gsap-w1-bar", { width: "0%" }, { width: "85%", duration: 1.8, ease: "power3.inOut", delay: 0.5 });
      tlW1.fromTo(".gsap-w1-num", { innerHTML: 0 }, { innerHTML: 94.2, duration: 1.8, snap: { innerHTML: 0.1 }, ease: "power2.out" }, "<");

      // 3. Widget 2 (Growth Metrics) Metrics Timeline - Triggers every time it enters
      const tlW2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsap-widget2-wrapper",
          start: "top 95%",
          end: "bottom 5%",
          toggleActions: "restart reset restart reset",
        },
        defaults: { ease: "power3.out" }
      });
      tlW2.fromTo(".gsap-w2-num", { innerHTML: 0 }, { innerHTML: 150, duration: 1.8, snap: { innerHTML: 1 }, ease: "power2.out", delay: 0.5 });
      tlW2.fromTo(".gsap-w2-chart-bar",
        { height: "0%" },
        { height: (_, el) => el.getAttribute("data-h") + "%", duration: 1.5, stagger: 0.1, ease: "power3.out" },
        "<"
      );

      // 4. Gentle floating animations (independent of scroll position, added to inner float element)
      gsap.to(".gsap-w1-float", { y: -10, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 });
      gsap.to(".gsap-w2-float", { y: 10, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.7 });

    }, heroRef);

    return () => ctx.revert();
  }, [isSplashFinished]);

  const handleHeroMouseLeave = () => {
    if (!heroRef.current) return;
    heroRef.current.style.setProperty('--mx', '0');
    heroRef.current.style.setProperty('--my', '0');
  };

  return (
    <>
      <SEOHead title={meta.title} description={meta.description} path={meta.path} />

      {/* ── 1. Hero Section ────────────────────────────────────────── */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden py-20 lg:py-32"
      >
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none z-0 gsap-hero-bg opacity-0">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute top-1/4 right-[10%] w-[35vw] h-[35vw] rounded-full bg-dr-cyan/10 blur-[130px]" />
          <div className="absolute bottom-1/4 left-[8%] w-[40vw] h-[40vw] rounded-full bg-dr-rose/8 blur-[140px]" />
          <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] rounded-full bg-dr-violet/5 blur-[100px]" />
        </div>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            {/* ── Left Column ── */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-block gsap-hero-badge opacity-0">
                <Badge variant="outline" className="border-dr-cyan/50 text-dr-cyan bg-dr-cyan/5 hover:bg-dr-cyan/10 hover:border-dr-cyan/50 cursor-default transition-all duration-300">
                  <Sparkles className="size-3.5 text-dr-cyan animate-pulse" />
                  Intelligent Agency 2026
                </Badge>
              </div>

              <div className="space-y-5">
                <div className="overflow-hidden pb-2">
                  <h1 className="font-sans text-5xl font-semibold tracking-[-0.025em] text-dr-text-primary leading-[1.15] xm:text-5xl md:text-6xl gsap-hero-h1 opacity-0">
                    Empowering{' '}
                    <span className="font-sans text-4xl font-semibold tracking-[-0.025em] text-dr-text-primary leading-[1.15] sm:text-5xl md:text-6xl">
                      Enterprises via{' '}
                    </span>
                    <span className="block sm:inline text-gradient-brand animate-gradient-text font-bold">
                      Next-Gen Tech
                    </span>
                  </h1>

                </div>
                <p className="max-w-xl text-lg text-dr-text-secondary leading-relaxed gsap-hero-p opacity-0">
                  DigitalRaiz engineering labs develop premium custom web ecosystems, native mobile frameworks, and AI workflows that scale operations and brand value.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2 gsap-hero-cta opacity-0">
                <ButtonLink to="/contact" size="lg">
                  Start Project <ArrowRight className="ml-1 size-4 group-hover:translate-x-1 transition-transform" />
                </ButtonLink>
                <ButtonLink to="/services" variant="secondary" size="lg">
                  Explore Services
                </ButtonLink>
              </div>

              {/* ── Stats Row ── */}
              <div className="gsap-hero-stats opacity-0">
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-dr-border">
                  <div className="space-y-1">
                    <p className="font-display text-2xl md:text-3xl font-extrabold text-dr-cyan">
                      <AnimatedCounter value={150} suffix="+" />
                    </p>
                    <p className="text-[11px] text-dr-text-unmuted uppercase tracking-widest font-semibold">
                      Projects Done
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-display text-2xl md:text-3xl font-extrabold text-dr-amber">
                      <AnimatedCounter value={98} suffix="%" />
                    </p>
                    <p className="text-[11px] text-dr-text-unmuted uppercase tracking-widest font-semibold">
                      Client Success
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-display text-2xl md:text-3xl font-extrabold text-dr-rose">
                      <AnimatedCounter value={6} suffix="+" />
                    </p>
                    <p className="text-[11px] text-dr-text-unmuted uppercase tracking-widest font-semibold">
                      Core AI Tools
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column: Parallax Image & Floating widgets ── */}
            <div className="hidden lg:block lg:col-span-5 relative h-[550px] w-full">
              {/* Central glow orb */}
              <motion.div
                className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-gradient-to-tr from-dr-rose/30 to-dr-violet/30 blur-[70px]"
                animate={{ scale: [1, 1.12, 0.92, 1], rotate: [0, 90, 180, 360] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />
              {/* Widget 1: AI Analytics */}
              <div
                className="gsap-widget1-wrapper absolute top-[5%] -left-[15%] w-60 rounded-2xl z-20"
                style={{ transform: 'translate3d(calc(var(--mx, 0) * -25px), calc(var(--my, 0) * -25px), 0)' }}
              >
                <div className="gsap-hero-widget1 opacity-0">
                  <div className="gsap-w1-float p-5 rounded-2xl glass shadow-elevated">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-dr-cyan animate-ping" />
                        <span className="text-[10px] uppercase font-bold tracking-widest text-dr-cyan">AI Core Engine</span>
                      </div>
                      <Cpu className="size-4 text-dr-cyan" />
                    </div>
                    <h4 className="text-sm font-bold text-dr-text-primary mb-1">Optimizing Pipelines</h4>
                    <p className="text-xs text-dr-text-secondary">Throughput raised to <span className="gsap-w1-num font-mono">0</span>%</p>
                    <div className="mt-1 h-1.5 w-full bg-dr-border rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-dr-cyan to-dr-rose rounded-full gsap-w1-bar w-0" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Widget 2: Growth metrics */}
              <div
                className="gsap-widget2-wrapper absolute -bottom-[5%] -right-[5%] w-64 rounded-2xl z-20"
                style={{ transform: 'translate3d(calc(var(--mx, 0) * 35px), calc(var(--my, 0) * 35px), 0)' }}
              >
                <div className="gsap-hero-widget2 opacity-0">
                  <div className="gsap-w2-float p-6 rounded-2xl glass shadow-elevated">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-dr-rose">Client Acquisition</span>
                      <TrendingUp className="size-4 text-dr-rose" />
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-black text-dr-text-primary">+<span className="gsap-w2-num">0</span>%</span>
                      <span className="text-xs text-dr-cyan font-semibold">ROI Growth</span>
                    </div>
                    {/* Chart container track */}
                    <div className="flex gap-1 items-end h-12">
                      {[30, 45, 35, 60, 50, 75, 90].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-dr-rose/70 to-dr-cyan/70 rounded-t-sm gsap-w2-chart-bar"
                          style={{ height: '0%' }}
                          data-h={h}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent orb */}
              <div
                className="absolute top-1/3 right-1/4 w-14 h-14 rounded-full bg-gradient-to-br from-dr-amber to-dr-rose blur-sm opacity-50"
                style={{ transform: 'translate3d(calc(var(--mx, 0) * 15px), calc(var(--my, 0) * -15px), 0)' }}
              />
            </div>
          </div>
          {/* Scroll indicator */}
          <div className="absolute -bottom-[100px] left-1/2 -translate-x-2 flex flex-col items-center gap-2 pointer-events-none select-none">
            <span className="text-[11px] font-bold uppercase tracking-widest text-dr-text-unmuted">
              Scroll to Explore
            </span>
            <ChevronDown className="size-5 text-dr-cyan animate-bounce" />
          </div>
        </Container>
      </section>

      {/* ── 2. Trusted Clients Grid ─────────────────────────────── */}
      <section className="border-y border-dr-border bg-dr-surface/40 py-10 overflow-hidden">
        <Container>
          
          <p className="text-center text-xm font-semibold uppercase tracking-widest text-slate-300 dark:text-zinc-500 mb-6 transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-dr-cyan hover:via-dr-rose hover:to-dr-amber hover:drop-shadow-[0_0_12px_rgba(0,242,254,0.6)] cursor-default">
            Trusted by dynamic enterprises and institutions
          </p>

          {/* TWO-LINE MARQUEE CONTAINER WRAPPER WITH INCREASED SPACING AND REDUCED EDGE SHADOWS */}
          <div className="relative w-full max-w-5xl mx-auto flex flex-col gap-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">

            {/* ROW 1: Moves Left */}
            <div className="flex w-max gap-12 animate-marquee-left hover:[animation-play-state:paused]">
              {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="gsap-trusted-logo opacity-0 group flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default shrink-0"
                >
                  <client.icon className="size-5 text-dr-text-secondary group-hover:text-dr-cyan transition-colors duration-300" />
                  <span className="font-sans text-sm font-semibold tracking-tight text-dr-text-secondary group-hover:text-dr-text-primary transition-colors duration-300">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>

            {/* ROW 2: Moves Right */}
            <div className="flex w-max gap-12 animate-marquee-right hover:[animation-play-state:paused]">
              {[...CLIENTS, ...CLIENTS].reverse().map((client, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="gsap-trusted-logo opacity-0 group flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default shrink-0"
                >
                  <client.icon className="size-5 text-dr-text-secondary group-hover:text-dr-rose transition-colors duration-300" />
                  <span className="font-sans text-sm font-semibold tracking-tight text-dr-text-secondary group-hover:text-dr-text-primary transition-colors duration-300">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>


      {/* ── 3. Company Overview ───────────────────────────────────── */}
      <Section spacing="xl" background="surface">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <RevealOnScroll className="space-y-6">
            <Badge variant="build" className="text-dr-cyan border-dr-cyan/35 bg-transparent mb-4">
              ESTABLISHED IN 2020
            </Badge>


            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary sm:text-4xl">
              Engineering Value. Driving Performance.{' '}
              <span className="text-gradient-brand bg-[length:200%_200%]">Shaping Brand Identity.</span>
            </h2>


            <p className="text-dr-text-secondary leading-relaxed mt-6">
              At DigitalRaiz, we harness the power of diverse technologies to build high-performance web products, interactive native apps, and hyper-targeted digital marketing strategies.
            </p>
            <p className="text-dr-text-secondary leading-relaxed">
              We collaborate with clients across medical fields, higher education boards, retail chains, and corporate finance industries to transform their operational bottlenecks into competitive edges.
            </p>
            <div className="pt-2">
              <ButtonLink to="/about" variant="ghost" className="group p-0 gap-2 text-dr-text-secondary hover:text-dr-text-primary">
                Read our story
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-5 text-dr-cyan" />
              </ButtonLink>
            </div>
          </RevealOnScroll>


          <RevealOnScroll delay={0.2}>

            <div className="relative aspect-video rounded-[20px]  bg-dr-elevated/60 overflow-hidden flex items-center justify-center p-8 group transition-all duration-500 hover:border-dr-border-accent hover:shadow-[0_20px_60px_-15px_rgba(0,242,254,0.12)]">

              {/* THE MIXED COLOR GRADIENT BORDER STROKE */}
              <div
                className="absolute inset-0 rounded-xl p-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0 bg-gradient-to-r from-dr-rose via-fuchsia-500 to-dr-cyan"
                style={{
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className="text-center space-y-4 relative z-10">
                {/* Icon with gradient border on hover */}
                <div className="relative p-0.5 rounded-2xl mx-auto w-fit bg-dr-border group-hover:bg-gradient-brand transition-all duration-500">
                  <div className="p-4 bg-dr-elevated rounded-[14px]">
                    <Award className="size-10 text-dr-text-secondary group-hover:text-dr-amber transition-colors duration-500" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(244,63,94,0.6)] cursor-default group">
                  <span className="transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-dr-cyan group-hover:via-dr-rose group-hover:to-dr-amber">
                    Award-Winning Quality
                  </span>
                </h3>


                <p className="text-sm text-dr-text-secondary max-w-xs leading-relaxed">
                  Certified quality management systems delivering enterprise-grade mobile, web, and cloud platforms.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>

      {/* ── 4. Services Section ───────────────────────────────────── */}
      <Section spacing="xl">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <RevealOnScroll>
              <Badge variant="outline" className="border-dr-rose/70 text-rose bg-dr-rose/50">
                OUR EXPERTISE
              </Badge>
            </RevealOnScroll>
            <MaskReveal delay={0.1}>
              <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary sm:text-4xl">
                End-to-End Digital Transformation
              </h2>
            </MaskReveal>
            <RevealOnScroll delay={0.2}>
              <p className="text-dr-text-secondary">
                We operate across three strategic avenues — Build, Grow, and Advise — to cover every stage of your digital lifespan.
              </p>
            </RevealOnScroll>
          </div>
          <StaggerChildren className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((srv, idx) => (
              <Card
                key={idx}
                className="group relative overflow-hidden border-dr-border bg-dr-elevated/40 hover:bg-dr-elevated/90 hover:border-dr-border-strong transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated"
              >
                {/* Light border accent at top */}
                <div
                  className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${srv.accent}, transparent)` }}
                />

                {/* Light border accent at bottom */}
                <div
                  className="absolute bottom-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${srv.accent}, transparent)` }}
                />

                <CardContent className="p-8 space-y-6">
                  {/* Animated Icon Wrapper */}
                  <div className={`size-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${srv.iconBg}`}>
                    <srv.icon className="size-6 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="space-y-2">
                    {/* Increased text size on hover */}
                    <h3 className="font-display text-xl font-bold text-dr-text-primary transition-all duration-500 group-hover:text-2xl">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-dr-text-secondary">{srv.description}</p>
                  </div>
                  <ul className="space-y-2.5 pt-2 border-t border-dr-border">
                    {srv.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center text-sm text-dr-text-primary gap-2.5">
                        <CheckCircle2 className={`size-4 ${srv.color} shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Link Wrapper */}
                  {/* Bottom Link Wrapper */}
                  <ButtonLink
                    to={srv.to}
                    variant="ghost"
                    className="group/btn p-0 text-dr-text-secondary transition-colors duration-300 hover:text-dr-text-primary gap-1.5 text-xs font-semibold uppercase tracking-wider"
                    /* Pass the hex color code dynamically into a CSS custom property */
                    style={{ '--hover-accent': srv.accent } as React.CSSProperties}
                  >
                    Learn more
                    {/* The arrow reads the variable instantly when the button is hovered */}
                    <ArrowRight
                      className="w-6 h-6 transition-all duration-300 group-hover/btn:translate-x-3.5 group-hover/btn:text-[var(--hover-accent)]"
                    />
                  </ButtonLink>

                </CardContent>
              </Card>
            ))}
          </StaggerChildren>


        </Container>
      </Section>

      {/* ── 5. AI Solutions Section ───────────────────────────────── */}
      <Section spacing="xl" background="surface" className="relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-dr-rose/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-dr-violet/5 blur-[100px] rounded-full pointer-events-none" />

        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <RevealOnScroll className="relative aspect-square rounded-[20px] border border-dr-border bg-dr-void/80 overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-dr-violet/75 via-transparent to-dr-cyan/75   pointer-events-none" />
            <div className="grid grid-cols-2 gap-4 w-full h-full max-h-[320px] max-w-[320px] relative z-10">
              {[
                { icon: Brain, label: 'Cognitive Agents', color: 'text-dr-rose', borderHover: 'hover:scale-110 hover:border-dr-rose/60' },
                { icon: Cpu, label: 'Workflow Automations', color: 'text-dr-cyan', borderHover: 'hover:scale-110 hover:border-dr-cyan/60' },
                { icon: Sparkles, label: 'LLM Tuning', color: 'text-dr-amber', borderHover: 'hover:scale-110 hover:border-dr-amber/60' },
                { icon: Globe, label: 'Predictive Analytics', color: 'text-dr-violet', borderHover: 'hover:scale-110  hover:iconwrap-180deg hover:border-dr-violet/60' },
              ].map(({ icon: Icon, label, color, borderHover }) => (
                <div
                  key={label}
                  className={`rounded-xl bg-dr-elevated/90 border border-dr-border p-5 flex flex-col justify-between ${borderHover} transition-all duration-300 hover:bg-dr-elevated cursor-default`}
                >

                  <Icon className={`size-8 ${color}`} />
                  <span className="text-xs font-semibold text-dr-text-primary">{label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="space-y-6">
            <Badge variant="grow" className="bg-amber-500/10 text-amber-500 border border-amber-500/20">
        FUTURE READY TECHNOLOGY
       </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary sm:text-4xl">
              Leverage Advanced AI &amp; ML Integrations
            </h2>
            <p className="text-dr-text-secondary leading-relaxed">
              Accelerate decision-making and automate routine data exchanges. We build custom language models, conversational chatbots, and advanced predictive analytics architectures to embed intelligence within your workflows.
            </p>
            <div className="pt-2">
              <ButtonLink to="/ai-solutions">
                Explore AI Solutions <ArrowRight className="ml-1 size-4 group-hover:translate-x-6 transition-transform" />
              </ButtonLink>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>

      {/* ── 6. Technologies Section ───────────────────────────────── */}
      <Section spacing="xl">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="build">OUR FRAMEWORKS</Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary sm:text-4xl">
              Modern Enterprise Tech Stack
            </h2>
            <p className="text-dr-text-secondary">
              We leverage reliable and cutting-edge software suites to build scalable infrastructures.
            </p>
          </div>

          <RevealOnScroll>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {TECHS.map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-6 rounded-xl border border-dr-border bg-dr-elevated/40 hover:bg-gradient-to-br hover:from-purple-600/25 hover:via-amber-500/15 hover:to-cyan-500/25 hover:border-purple-500/90 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] transition-all duration-300 cursor-default hover:scale-105"
                >
                  {/* Card content here */}

                  <span className="text-xm font-bold text-dr-text-primary mb-1 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:via-fuchsia-400 group-hover:to-cyan-500">
                    {tech.name}
                  </span>
                  <span className="mt-1 text-sm text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:via-fuchsia-400 group-hover:to-cyan-300">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </Section>


      {/* ── 7. Why Choose Us ──────────────────────────────────────── */}
      <Section spacing="xl" background="surface">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <RevealOnScroll className="space-y-6">
            <Badge variant="grow">OUR STRENGTHS</Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary sm:text-4xl">
              Why Dynamic Brands Choose DigitalRaiz
            </h2>
            <p className="text-dr-text-secondary leading-relaxed">
              We are not just a service provider; we serve as an extended tech branch for your business, ensuring software works efficiently to generate visible ROI.
            </p>
            <ul className="space-y-5 pt-2">
              <li className="flex gap-4">
                <div className="mt-0.5 size-6 rounded-full bg-dr-rose/10 border border-dr-rose/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-3 .5 text-dr-rose" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dr-text-primary mb-0.5">Custom-Tailored Solutions</h4>
                  <p className="text-xs text-dr-text-secondary leading-relaxed">We build bespoke systems that match your exact operational processes rather than force generic layouts.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-0.5 size-6 rounded-full bg-dr-cyan/10 border border-dr-cyan/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-3.5 text-dr-cyan" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dr-text-primary mb-0.5">Performance and SEO Focus</h4>
                  <p className="text-xs text-dr-text-secondary leading-relaxed">All products are built with modern SEO guidelines ensuring top ranking visibility on search engines.</p>
                </div>
              </li>
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="relative overflow-hidden rounded-[20px] justify-center p-6 rounded-xl border border-dr-border bg-dr-elevated/40 hover:bg-gradient-to-br hover:from-purple-500/20 hover:via-amber-500/10 hover:to-cyan-500/20 hover:border-purple-500/90 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] transition-all duration-300 cursor-default hover:scale-105">
              <div className="absolute -right-10 -top-10 size-48 bg-dr-cyan/8 blur-[60px] rounded-full pointer-events-none" />
              <div className="relative z-10 space-y-5">
                <h3 className="font-display text-xl font-bold text-dr-text-primary">Core Mission</h3>
                <blockquote className="text-sm text-dr-text-secondary leading-relaxed italic border-l-2 border-dr-cyan/40 pl-4">
                  "To deliver high-impact digital experiences that maximize conversion metrics, promote organic search visibility, and streamline workflow operations via elegant custom software solutions."
                </blockquote>
                <div className="flex gap-4 items-center pt-2">
                  <div className="size-10 rounded-full bg-gradient-cta flex items-center justify-center text-white font-bold text-sm shrink-0">
                    DR
                  </div>
                  <div>
                    <p className="text-xs font-bold text-dr-text-primary">DigitalRaiz Board</p>
                    <p className="text-[10px] text-dr-text-unmuted">Executive leadership team</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>

      {/* ── 8. Industries We Serve ────────────────────────────────── */}
      <Section spacing="xl">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="border-dr-rose/80 text-dr-rose bg-dr-rose/5">
              DOMAINS WE SERVE
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary sm:text-4xl">
              Built for Diverse Industries
            </h2>
            <p className="text-dr-text-secondary">
              We leverage specialized domain insights to address industry-specific challenges.
            </p>
          </div>

          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch max-w-5xl mx-auto">
            {INDUSTRIES.map((ind, idx) => (
              <Card key={idx} className="border-dr-border bg-dr-elevated/40 hover:bg-dr-elevated hover:border-dr-border-strong hover:shadow-card transition-all duration-300">
                {/* FULL CARD BACKGROUND EFFECT */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-dr-rose/[0.08] via-fuchsia-500/[0.06] to-purple-500/[0.06]" />

                {/* Top Border Glow Line */}
                <div className="absolute htop:[-10] left-0 right-0 h-px z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-transparent via-dr-rose to-transparent" />

                {/* Bottom Border Glow Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-transparent via-dr-rose to-transparent" />

                {/* Card Content Wrapper */}
                <CardContent className="relative z-10 p-5 flex flex-col justify-between h-full flex-1">
                  <div className="space-y-4">
                    {/* Icon Wrapper */}
                    <div className="size-10 rounded-lg flex items-center justify-center bg-dr-rose/10 border border-dr-rose/20 transition-all duration-500 group-hover:bg-dr-rose/20 group-hover:shadow-[0_0_15px_rgba(219,39,119,0.3)]">
                      <ind.icon className="size-4.5 text-dr-rose transition-all duration-500 group-hover:scale-110" />
                    </div>

                    <div>
                      {/* Title styling element */}
                      <h3 className="font-display text-base font-bold mb-1.5 text-unmuted-100 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-dr-rose group-hover:via-fuchsia-400 group-hover:to-purple-400">
                        {ind.name}
                      </h3>
                      {/* Description details context layout */}
                      <p className="text-xs font-medium leading-relaxed text-zinc-400">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerChildren>

        </Container>
      </Section>

      {/* ── 9. Process Section ────────────────────────────────────── */}
      <Section spacing="xl" background="surface">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="build">OUR METHODOLOGY</Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary sm:text-4xl">
              Our Strategic 7-Step Process
            </h2>
            <p className="text-dr-text-secondary">
              From raw concept definitions to post-launch software maintenance pipelines.
            </p>
          </div>

          <RevealOnScroll>
            <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-7">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col p-5 rounded-xl border border-dr-border bg-transparent transition-all duration-300 cursor-default hover:scale-[1.03] overflow-hidden hover:border-transparent"
                >
                  {/* THE MIXED COLOR GRADIENT BORDER STROKE */}
                  <div
                    className="absolute inset-0 rounded-xl p-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0 bg-gradient-to-r from-dr-rose via-fuchsia-500 to-dr-cyan"
                    style={{
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />

                  {/* THE CARD CONTENT LAYER */}
                  <div className="relative z-10 flex flex-col h-full w-full">
                    <span className="text-xl font-bold font-mono text-dr-cyan mb-3 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-dr-rose group-hover:to-dr-cyan">
                      {step.step}
                    </span>
                    <h4 className="text-xs font-bold text-dr-text-primary mb-1 transition-colors duration-300 group-hover:text-unzinc-100">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-dr-text-secondary leading-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>



        </Container>
      </Section>

      {/* ── 10. Portfolio / Case Studies ──────────────────────────── */}
      <Section spacing="xl">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="border-dr-rose/90 text-dr-rose bg-dr-rose/90">
              SELECTED CASE STUDIES
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary sm:text-4xl">
              Proven Digital Impact
            </h2>
            <p className="text-dr-text-secondary">
              Real outcomes generated for our enterprise associates.
            </p>
          </div>

<StaggerChildren className="grid gap-6 md:grid-cols-3">
  {CASE_STUDIES.map((project, idx) => (
    <Card
      key={idx}
      className="group relative overflow-hidden flex flex-col h-full rounded-5xl border border-dr-border bg-dr-elevated/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-dr-rose/80 hover:shadow-[0_20px_50px_rgba(219,39,119,0.15)]"
    >
      {/* Top Banner Image Section */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-dr-elevated via-dr-elevated/10 to-transparent z-0.5  " />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content Section - FIXED: added 'flex-1' to drive bottom-pinning alignment correctly */}
      <CardContent className="p-8 pt-4 space-y-4 flex flex-col justify-between flex-1 relative z-20">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="text-[10px] font-bold text-dr-cyan uppercase tracking-wider bg-dr-cyan/8 border border-dr-cyan/15 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-display text-lg font-bold text-dr-text-primary">{project.title}</h3>
          <p className="text-xs text-dr-text-secondary leading-relaxed">{project.desc}</p>
        </div>

        {/* Footer Container - Pinned cleanly to the absolute bottom edge of the grid item */}
        <div className="pt-4 border-t border-dr-border flex items-center justify-between mt-auto">
          <span className="text-xs text-dr-text-unmuted">Client: {project.client}</span>
          
          {/* Action Link Link Wrapper */}
          <ButtonLink 
            to="/work" 
            variant="ghost" 
            size="sm" 
            className="p-0 text-dr-rose text-m font-semibold gap-1 group/btn transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-dr-rose hover:via-fuchsia-500 hover:to-dr-cyan"
          >
            View details
            {/* 👇 EDITED: Made arrow color inherit the gradient wrapper properties dynamically */}
            <ArrowRight className="size-4.5 text-dr-rose group-hover/btn:text-dr-cyan group-hover/btn:translate-x-1.5 transition-all duration-300" />
          </ButtonLink>
        </div>
      </CardContent>
    </Card>
  ))}
</StaggerChildren>


        </Container>
      </Section>

      {/* ── 11. Statistics Section ────────────────────────────────── */}
      <Section spacing="xl" className="relative overflow-hidden bg-dr-void">
        <div className="absolute inset-0 bg-gradient-cta opacity-[0.06] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-dr-rose/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-dr-cyan/8 blur-[80px] rounded-full pointer-events-none" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <Container>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-4 text-center">
            {[
              { value: 20, suffix: '+', label: 'Valued Associates', color: 'text-dr-rose' },
              { value: 100, suffix: '+', label: 'Projects Delivered', color: 'text-dr-cyan' },
              { value: 5, suffix: '+', label: 'Years of Service', color: 'text-dr-amber' },
              { value: 99, suffix: '%', label: 'Client Retention', color: 'text-dr-violet' },
            ].map(({ value, suffix, label, color }, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.5} className="space-y-2">
                <p className={`text-4xl md:text-5xl font-mono font-bold ${color}`}>
                  <AnimatedCounter value={value} suffix={suffix} />
                </p>
                <p className="text-[11px] text-dr-text-unmuted uppercase tracking-widest font-semibold">{label}</p>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 12. Testimonials ──────────────────────────────────────── */}
      <Section spacing="xl">
        <Container className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="border-dr-rose/80 text-dr-rose bg-dr-rose/30">
              PARTNER VOICES
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="text-dr-text-secondary">
              Discover how we help brands scale online visibility and streamline management tasks.
            </p>
          </div>

          <StaggerChildren className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote: '"DigitalRaiz helped Microcare ENT Hospital secure key local ranking search terms. Our web queries grew significantly within 4 months of their SEO strategy."',
                author: 'Microcare ENT Hospital',
                role: 'Marketing Director',
                initial: 'M',
                color: 'text-dr-rose bg-dr-rose/10 border-dr-rose/20 transition-all duration-500 group-hover:scale-120 ',
              },
              {
                quote: '"Their custom software portal for our colleges simplified administrative tasks. The development cycle was fast and transparent."',
                author: 'Dr Narayana College (DRNCC)',
                role: 'Academic Board',
                initial: 'D',
                color: 'text-dr-cyan bg-dr-cyan/10 border-dr-cyan/20 transition-all duration-500 group-hover:scale-120',
              },
              {
                quote: '"DigitalRaiz understood our fintech portal requirements immediately. The backend systems are highly secure and operate flawlessly."',
                author: 'ChitBoss Software',
                role: 'Managing Director',
                initial: 'C',
                color: 'text-dr-amber bg-dr-amber/10 border-dr-amber/20 transition-all duration-500 group-hover:scale-120',
              },
            ].map(({ quote, author, role, initial, color }, idx) => (
              <Card key={idx} className="border-dr-border bg-dr-elevated/40 hover:border-dr-border-strong hover:shadow-card transition-all duration-500">
                <CardContent className="p-6 space-y-4 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-dr-amber text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-dr-text-secondary italic leading-relaxed flex-1">{quote}</p>
                  <div className="flex items-center gap-3 pt-2 border-t border-dr-border">
                    <div className={`size-9 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 ${color}`}>
                      {initial}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-dr-text-primary">{author}</h4>
                      <p className="text-[10px] text-dr-text-muted">{role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerChildren>
        </Container>
      </Section>

      {/* ── 13. FAQ Section ───────────────────────────────────────── */}
      <Section spacing="xl" background="surface">
        <Container className="max-w-4xl space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="build">COMMON QUESTIONS</Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-dr-text-secondary">
              Everything you need to know about our workflow, technology, and timelines.
            </p>
          </div>

          <RevealOnScroll className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border bg-dr-elevated/40 overflow-hidden transition-all duration-300 ${isOpen
                    ? 'border-dr-cyan/50 shadow-[0_0_20px_rgba(0,242,254,0.06)]'
                    : 'border-dr-border hover:border-dr-border-strong'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-dr-text-primary hover:text-dr-text-primary transition-colors duration-200"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`size-4 text-dr-text-muted transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-dr-cyan' : ''
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-dr-border p-5 text-sm text-dr-text-secondary leading-relaxed bg-dr-surface/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </RevealOnScroll>
        </Container>
      </Section>

      {/* ── 14. Final CTA ─────────────────────────────────────────── */}
      <Section spacing="xl" className="relative overflow-hidden bg-dr-void">
        {/* Background mesh */}
        <div className="absolute inset-0 bg-gradient-cta opacity-[0.06] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-dr-rose/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-dr-cyan/8 blur-[80px] rounded-full pointer-events-none" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <Container className="relative z-10 text-center max-w-4xl space-y-6">
          <Badge variant="outline" className="border-dr-cyan/80 text-dr-cyan bg-dr-cyan/5 mx-auto">
            START YOUR PROJECT
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dr-text-primary sm:text-5xl">
            Let's Build Something{' '}
            <span className="text-gradient-brand bg-[length:200%_200%]">Amazing Together</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-dr-text-secondary leading-relaxed">
            Get in touch with our Hyderabad development and marketing teams today. We will set up a discovery roadmap to audit your business goals.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink to="/contact" size="lg">
              Start Project Proposal
            </ButtonLink>
            <ButtonLink to="/services" variant="secondary" size="lg">
              Explore Services
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
