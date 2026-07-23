import { cn } from '@/lib/cn';

type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'text' | 'circular' | 'rectangular';
};

export function Skeleton({ className, variant = 'rectangular', ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-dr-elevated',
        variant === 'text' && 'h-4 w-full rounded-dr-sm',
        variant === 'circular' && 'rounded-full',
        variant === 'rectangular' && 'rounded-dr-md',
        className,
      )}
      aria-hidden="true"
      {...props}
    />
  );
}
