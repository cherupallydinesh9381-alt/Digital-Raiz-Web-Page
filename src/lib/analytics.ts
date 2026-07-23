type AnalyticsEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export function trackEvent({ action, category, label, value }: AnalyticsEvent) {
  if (import.meta.env.DEV) {
    console.debug('[analytics]', { action, category, label, value });
  }

  // GA4 integration placeholder — wire when measurement ID is available
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === 'function') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}

export function trackPageView(path: string) {
  trackEvent({
    action: 'page_view',
    category: 'navigation',
    label: path,
  });
}
