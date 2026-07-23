import type { RouteMeta } from '@/types/content';
import { routeMeta } from '@/content/navigation';

const serviceDescription = (service: string) =>
  `${service} services by DigitalRaiz Creative Solutions in Hyderabad.`;

export const ROUTES = {
  home: routeMeta.home,
  services: routeMeta.services,
  work: routeMeta.work,
  process: routeMeta.process,
  insights: routeMeta.insights,
  about: routeMeta.about,
  contact: routeMeta.contact,
  aiSolutions: routeMeta.aiSolutions,
  industries: routeMeta.industries,


  build: {
    title: 'Build',
    description: 'Web, mobile, UI/UX, and custom software development.',
    path: '/services/build',
  },
  grow: {
    title: 'Grow',
    description: 'SEO, social media, paid media, and email marketing.',
    path: '/services/grow',
  },
  advise: {
    title: 'Advise',
    description: 'AI, SAP Cloud, IoT, and IT consulting services.',
    path: '/services/advise',
  },

  webDevelopment: {
    title: 'Web Development',
    description: serviceDescription('Custom web development'),
    path: '/services/build/web-development',
  },
  mobileApps: {
    title: 'Mobile Apps',
    description: serviceDescription('Flutter mobile app development'),
    path: '/services/build/mobile-apps',
  },
  uiUxDesign: {
    title: 'UI/UX Design',
    description: serviceDescription('UI/UX design'),
    path: '/services/build/ui-ux-design',
  },
  customSoftware: {
    title: 'Custom Software',
    description: serviceDescription('Custom software'),
    path: '/services/build/custom-software',
  },

  seo: {
    title: 'SEO',
    description: serviceDescription('Search engine optimization'),
    path: '/services/grow/seo',
  },
  socialMedia: {
    title: 'Social Media',
    description: serviceDescription('Social media marketing'),
    path: '/services/grow/social-media',
  },
  semPpc: {
    title: 'SEM & PPC',
    description: serviceDescription('Search engine marketing'),
    path: '/services/grow/sem-ppc',
  },
  emailMarketing: {
    title: 'Email Marketing',
    description: serviceDescription('Email marketing'),
    path: '/services/grow/email-marketing',
  },
  influencerMarketing: {
    title: 'Influencer Marketing',
    description: serviceDescription('Influencer marketing'),
    path: '/services/grow/influencer-marketing',
  },

  aiMl: {
    title: 'AI & ML',
    description: serviceDescription('Artificial intelligence and machine learning'),
    path: '/services/advise/ai-ml',
  },
  sapCloud: {
    title: 'SAP Cloud',
    description: serviceDescription('SAP Cloud'),
    path: '/services/advise/sap-cloud',
  },
  iot: {
    title: 'IoT',
    description: serviceDescription('Internet of Things'),
    path: '/services/advise/iot',
  },
  itConsulting: {
    title: 'IT Consulting',
    description: serviceDescription('IT consulting'),
    path: '/services/advise/it-consulting',
  },
  techSupport: {
    title: 'Tech Support',
    description: serviceDescription('Technical support'),
    path: '/services/advise/tech-support',
  },

  privacy: {
    title: 'Privacy Policy',
    description: 'How DigitalRaiz handles your data and privacy.',
    path: '/privacy',
  },
  terms: {
    title: 'Terms of Service',
    description: 'Terms and conditions for using DigitalRaiz services.',
    path: '/terms',
  },
  notFound: {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
    path: '/404',
    noIndex: true,
  },
} as const satisfies Record<string, RouteMeta & { noIndex?: boolean }>;

export type RouteKey = keyof typeof ROUTES;

export function getRouteMeta(key: RouteKey) {
  return ROUTES[key];
}
