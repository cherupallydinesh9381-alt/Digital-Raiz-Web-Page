import { cn } from '@/lib/cn';

type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: 'horizontal' | 'vertical';
  gradient?: boolean;
};

export function Divider({
  className,
  orientation = 'horizontal',
  gradient = false,
  ...props
}: DividerProps) {
  return (
    <div
      role="separator"
      className={cn(
        gradient
          ? 'bg-gradient-to-r from-transparent via-dr-border to-transparent'
          : 'bg-dr-border',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
      {...props}
    />
  );
}
