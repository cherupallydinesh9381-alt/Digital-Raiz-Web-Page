import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/cn';

export type PageHeroProps = {
  overline?: string;
  title: string;
  /** Alias: description */
  subtitle?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({ overline, title, description, subtitle, className, children }: PageHeroProps) {
  const body = description ?? subtitle;
  return (
    <section className={cn('border-b border-dr-border bg-dr-void bg-gradient-hero pt-28 pb-16 md:pt-32 md:pb-20', className)}>
      <Container>
        <div className="max-w-3xl space-y-6">
          {overline ? <p className="text-overline text-dr-rose">{overline}</p> : null}
          <h1 className="text-display-lg text-dr-text-primary">{title}</h1>
          {body ? <p className="text-body-lg text-dr-text-secondary">{body}</p> : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
