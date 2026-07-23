import { cn } from '@/lib/cn';

type ChipProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export function Chip({ className, active = false, type = 'button', ...props }: ChipProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center rounded-dr-full border px-4 py-2 text-sm font-medium transition-all duration-250',
        active
          ? 'border-dr-rose bg-dr-rose/10 text-dr-rose'
          : 'border-dr-border bg-dr-elevated text-dr-text-secondary hover:border-dr-border-strong hover:text-dr-text-primary',
        className,
      )}
      {...props}
    />
  );
}
