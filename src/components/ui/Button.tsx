import { cn } from '@/lib/cn';
import type { ButtonProps } from '@/types/components';
import { Loader2 } from 'lucide-react';
import { forwardRef } from 'react';
import { Magnetic } from '@/components/motion/Magnetic';

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'relative overflow-hidden bg-gradient-cta text-white font-semibold tracking-wide shadow-lg shadow-dr-rose/20 border border-white/10 ' +
    'hover:shadow-[0_8px_30px_rgba(255,42,95,0.45)] hover:scale-[1.02] active:scale-[0.97] ' +
    'before:absolute before:inset-0 before:bg-white/10 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300',
  secondary:
    'relative border border-dr-border bg-dr-elevated/60 backdrop-blur-md text-dr-text-primary font-medium ' +
    'hover:border-dr-cyan/50 hover:bg-dr-surface hover:text-dr-text-primary hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] ' +
    '.light:hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] active:scale-[0.97]',
  ghost:
    'text-dr-text-secondary hover:bg-dr-elevated/60 hover:text-dr-text-primary active:scale-[0.97]',
  link:
    'text-dr-cyan underline-offset-4 hover:text-dr-rose hover:underline p-0 h-auto tracking-wide',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-9 px-5 text-xs rounded-full',
  md: 'h-11 px-7 text-sm rounded-full',
  lg: 'h-13 px-9 text-sm rounded-full',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      disabled,
      children,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const isLink = variant === 'link';

    const buttonElement = (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(
          'group inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dr-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-dr-void',
          'disabled:pointer-events-none disabled:opacity-40',
          !isLink && variantStyles[variant],
          !isLink && sizeStyles[size],
          fullWidth && 'w-full',
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="size-4 animate-spin relative z-10" aria-hidden="true" />
        ) : null}
        <span className="relative z-10 flex items-center gap-2">{children}</span>

        {/* Soft glow halo for primary buttons */}
        {variant === 'primary' && (
          <span
            className="absolute inset-0 -z-10 bg-gradient-cta opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-xl rounded-full"
            aria-hidden="true"
          />
        )}
      </button>
    );

    if (!isLink) {
      return <Magnetic>{buttonElement}</Magnetic>;
    }

    return buttonElement;
  },
);

Button.displayName = 'Button';
