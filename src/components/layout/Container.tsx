import { cn } from '@/lib/cn';
import type { ContainerProps } from '@/types/components';

const sizeStyles = {
  default: 'max-w-[var(--container-max)]',
  narrow: 'max-w-3xl',
  wide: 'max-w-[1440px]',
};

export function Container({
  className,
  size = 'default',
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn('container-dr w-full', sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
