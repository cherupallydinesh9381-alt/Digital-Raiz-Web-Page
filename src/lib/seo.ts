export type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

const SITE_NAME = 'DigitalRaiz Creative Solutions';
const DEFAULT_DESCRIPTION =
  'Premier web, mobile, and digital marketing agency in Hyderabad. Custom software, SEO, and growth strategies.';
const BASE_URL = 'https://digitalraiz.com';

export function buildPageTitle(title?: string) {
  if (!title) return SITE_NAME;
  return `${title} | ${SITE_NAME}`;
}

export function buildCanonicalUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${normalized}`;
}

export function getDefaultSEO(overrides: SEOProps = {}) {
  return {
    title: buildPageTitle(overrides.title),
    description: overrides.description ?? DEFAULT_DESCRIPTION,
    canonical: buildCanonicalUrl(overrides.path),
    image: overrides.image ?? `${BASE_URL}/og-image.jpg`,
    noIndex: overrides.noIndex ?? false,
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.svg`,
    email: 'info@digitalraiz.com',
    telephone: '+91-9494613601',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '#616, 6th floor, Manjeera Majestic Commercial, JNTU KPHB',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500072',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.linkedin.com/company/digital-raiz/',
      'https://www.facebook.com/digitalraiz/',
      'https://www.instagram.com/digital_raiz/',
      'https://x.com/digital_raiz',
    ],
  };
}
