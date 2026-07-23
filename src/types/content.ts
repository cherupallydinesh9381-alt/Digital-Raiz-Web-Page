export type ServiceLane = 'build' | 'grow' | 'advise';

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  lane?: ServiceLane;
  children?: NavItem[];
};

export type SiteConfig = {
  name: string;
  tagline: string;
  phones: string[];
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  social: {
    linkedin: string;
    facebook: string;
    instagram: string;
    twitter: string;
  };
  established: number;
  cin: string;
};

export type RouteMeta = {
  title: string;
  description: string;
  path: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  url?: string;
  featured?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category?: string;
};
