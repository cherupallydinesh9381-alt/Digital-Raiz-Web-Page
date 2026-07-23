import { useEffect } from 'react';
import type { SEOProps } from '@/lib/seo';
import { getDefaultSEO } from '@/lib/seo';

export function SEOHead(props: SEOProps) {
  const seo = getDefaultSEO(props);

  useEffect(() => {
    document.title = seo.title;

    const setMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', seo.description);
    setMeta('robots', seo.noIndex ? 'noindex,nofollow' : 'index,follow');
    setMeta('og:title', seo.title, 'property');
    setMeta('og:description', seo.description, 'property');
    setMeta('og:image', seo.image, 'property');
    setMeta('og:url', seo.canonical, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', seo.title);
    setMeta('twitter:description', seo.description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = seo.canonical;
  }, [seo.canonical, seo.description, seo.image, seo.noIndex, seo.title]);

  return null;
}
