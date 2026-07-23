import { cn } from '@/lib/cn';
import type { BadgeVariant } from '@/types/components';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantStyles: Record<BadgeVariant, string> = {
  default:
    'bg-dr-elevated text-dr-text-secondary border-dr-border',
  build:
    'bg-dr-cyan/10 text-dr-cyan border-dr-cyan/25 shadow-[0_0_12px_rgba(0,242,254,0.1)]',
  grow:
    'bg-dr-amber/10 text-dr-amber border-dr-amber/25 shadow-[0_0_12px_rgba(255,184,0,0.1)]',
  advise:
    'bg-dr-violet/10 text-dr-violet border-dr-violet/25 shadow-[0_0_12px_rgba(124,58,237,0.1)]',
  outline:
    'bg-transparent text-dr-text-secondary border-dr-border hover:border-dr-border-strong transition-colors duration-300',
};

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-[11px] font-semibold tracking-widest uppercase',
        'transition-all duration-300',
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
