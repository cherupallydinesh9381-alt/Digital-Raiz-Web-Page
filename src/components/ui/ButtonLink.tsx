import { Link, type LinkProps } from 'react-router-dom';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import type { ButtonProps } from '@/types/components';
import { Magnetic } from '@/components/motion/Magnetic';

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'relative overflow-hidden bg-gradient-cta text-white font-semibold tracking-wide shadow-lg shadow-dr-rose/20 border border-white/10 ' +
    'hover:shadow-[0_8px_30px_rgba(255,42,95,0.45)] ' +
    'before:absolute before:inset-0 before:bg-white/10 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300',
  secondary:
    'relative border border-dr-border bg-dr-elevated/60 backdrop-blur-md text-dr-text-primary font-medium ' +
    'hover:border-dr-cyan/50 hover:bg-dr-surface hover:shadow-[0_0_20px_rgba(0,242,254,0.15)]',
  ghost:
    'text-dr-text-secondary hover:bg-dr-elevated/60 hover:text-dr-text-primary',
  link:
    'text-dr-cyan underline-offset-4 hover:text-dr-rose hover:underline p-0 h-auto tracking-wide',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-9 px-5 text-xs rounded-full',
  md: 'h-11 px-7 text-sm rounded-full',
  lg: 'h-13 px-9 text-sm rounded-full',
};

export const buttonStyles = {
  base: 'group inline-flex items-center justify-center gap-2 font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dr-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-dr-void',
  variant: variantStyles,
  size: sizeStyles,
};

type ButtonLinkProps = LinkProps &
  Pick<ButtonProps, 'variant' | 'size' | 'fullWidth' | 'className'>;

const MotionLink = motion.create(Link);

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, children, ...props }, ref) => {
    const isLink = variant === 'link';

    const linkElement = (
      <MotionLink
        ref={ref}
        whileHover={!isLink ? { scale: 1.02 } : {}}
        whileTap={!isLink ? { scale: 0.97 } : {}}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={cn(
          buttonStyles.base,
          !isLink && variantStyles[variant],
          !isLink && sizeStyles[size],
          fullWidth && 'w-full',
          className,
        )}
        {...(props as any)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>

        {/* Soft glow halo for primary link-buttons */}
        {variant === 'primary' && (
          <span
            className="absolute inset-0 -z-10 bg-gradient-cta opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-xl rounded-full"
            aria-hidden="true"
          />
        )}
      </MotionLink>
    );

    if (!isLink) {
      return <Magnetic>{linkElement}</Magnetic>;
    }

    return linkElement;
  },
);

ButtonLink.displayName = 'ButtonLink';
