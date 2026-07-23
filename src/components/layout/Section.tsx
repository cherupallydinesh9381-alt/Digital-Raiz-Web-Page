import { cn } from '@/lib/cn';
import type { SectionProps } from '@/types/components';

const spacingStyles = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-28',
  xl: 'py-24 md:py-32',
};

const backgroundStyles = {
  default: 'bg-dr-void',
  surface: 'bg-dr-surface',
  elevated: 'bg-dr-elevated',
  gradient: 'bg-dr-void bg-gradient-hero',
};

export function Section({
  className,
  spacing = 'md',
  background = 'default',
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(spacingStyles[spacing], backgroundStyles[background], className)}
      {...props}
    >
      {children}
    </section>
  );
}
