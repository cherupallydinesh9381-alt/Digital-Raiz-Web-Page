import type { NavItem } from '@/types/content';

export const primaryNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Build',
        href: '/services/build',
        description: 'Web, mobile, UI/UX, and custom software',
        lane: 'build',
        children: [
          { label: 'Web Development', href: '/services/build/web-development', lane: 'build' },
          { label: 'Mobile Apps', href: '/services/build/mobile-apps', lane: 'build' },
          { label: 'UI/UX Design', href: '/services/build/ui-ux-design', lane: 'build' },
          { label: 'Custom Software', href: '/services/build/custom-software', lane: 'build' },
        ],
      },
      {
        label: 'Grow',
        href: '/services/grow',
        description: 'SEO, social, paid media, and email',
        lane: 'grow',
        children: [
          { label: 'SEO', href: '/services/grow/seo', lane: 'grow' },
          { label: 'Social Media', href: '/services/grow/social-media', lane: 'grow' },
          { label: 'SEM & PPC', href: '/services/grow/sem-ppc', lane: 'grow' },
          { label: 'Email Marketing', href: '/services/grow/email-marketing', lane: 'grow' },
          {
            label: 'Influencer Marketing',
            href: '/services/grow/influencer-marketing',
            lane: 'grow',
          },
        ],
      },
      {
        label: 'Advise',
        href: '/services/advise',
        description: 'AI, SAP Cloud, IoT, and IT consulting',
        lane: 'advise',
        children: [
          { label: 'AI & ML', href: '/services/advise/ai-ml', lane: 'advise' },
          { label: 'SAP Cloud', href: '/services/advise/sap-cloud', lane: 'advise' },
          { label: 'IoT', href: '/services/advise/iot', lane: 'advise' },
          { label: 'IT Consulting', href: '/services/advise/it-consulting', lane: 'advise' },
          { label: 'Tech Support', href: '/services/advise/tech-support', lane: 'advise' },
        ],
      },
    ],
  },
  { label: 'AI Solutions', href: '/ai-solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Work', href: '/work' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];


export const footerNav = {
  services: [
    { label: 'Web Development', href: '/services/build/web-development' },
    { label: 'Mobile Apps', href: '/services/build/mobile-apps' },
    { label: 'Digital Marketing', href: '/services/grow' },
    { label: 'UI/UX Design', href: '/services/build/ui-ux-design' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Case Studies', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Blog', href: '/insights' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;

export const routeMeta = {
  home: {
    title: 'Home',
    description:
      'DigitalRaiz Creative Solutions — premier web, mobile, and digital marketing agency in Hyderabad.',
    path: '/',
  },
  services: {
    title: 'Services',
    description: 'End-to-end digital services: build, grow, and advise.',
    path: '/services',
  },
  work: {
    title: 'Work',
    description: 'Selected projects across healthcare, education, real estate, and more.',
    path: '/work',
  },
  process: {
    title: 'Process',
    description: 'Our strategic 7-step approach from discovery to launch.',
    path: '/process',
  },
  insights: {
    title: 'Insights',
    description: 'Latest news and guides on web, mobile, and digital marketing.',
    path: '/insights',
  },
  about: {
    title: 'About',
    description: 'Learn about DigitalRaiz Creative Solutions Pvt Ltd.',
    path: '/about',
  },
  contact: {
    title: 'Contact',
    description: 'Get in touch with our Hyderabad team.',
    path: '/contact',
  },
  aiSolutions: {
    title: 'AI Solutions',
    description: 'Enterprise AI solutions, chatbots, custom LLMs, and workflow automations.',
    path: '/ai-solutions',
  },
  industries: {
    title: 'Industries',
    description: 'Industry-tailored digital solutions for healthcare, education, retail, and more.',
    path: '/industries',
  },
} as const;

