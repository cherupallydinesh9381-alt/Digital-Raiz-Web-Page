import type { RouteMeta } from '@/types/content';
import { SEOHead } from '@/components/meta/SEOHead';

type PageStubProps = {
  meta: RouteMeta;
};

export function PageStub({ meta }: PageStubProps) {
  return (
    <>
      <SEOHead title={meta.title} description={meta.description} path={meta.path} />
      <div data-page={meta.path} aria-label={meta.title} />
    </>
  );
}

export function createPageStub(meta: RouteMeta) {
  return function GeneratedPageStub() {
    return <PageStub meta={meta} />;
  };
}
