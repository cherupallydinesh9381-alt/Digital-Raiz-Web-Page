import { cn } from '@/lib/cn';
import type { CardProps } from '@/types/components';
import { forwardRef, useRef } from 'react';
import gsap from 'gsap';

const variantStyles = {
  default:
    'bg-dr-elevated/60 backdrop-blur-xl border border-dr-border shadow-card',
  elevated:
    'bg-dr-panel/80 backdrop-blur-xl border border-dr-border-strong shadow-elevated',
  outline:
    'bg-transparent border border-dr-border',
};

const paddingStyles = {
  none: '',
  sm: 'p-4 md:p-5',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-10',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      padding = 'md',
      hoverable = true,
      children,
      ...props
    },
    ref,
  ) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!hoverable) return;
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      gsap.to(card, {
        rotateX,
        rotateY,
        scale3d: 1.015,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const handleMouseLeave = () => {
      const card = cardRef.current;
      if (!card) return;

      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale3d: 1,
        duration: 0.7,
        ease: 'elastic.out(1, 0.45)',
        overwrite: 'auto',
      });
    };

    return (
      <div
        ref={(node) => {
          (cardRef as any).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as any).current = node;
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          'relative rounded-[20px] overflow-hidden transition-all duration-500 will-change-transform group',
          variantStyles[variant],
          paddingStyles[padding],
          hoverable && [
            'hover:border-dr-border-strong',
            'hover:shadow-elevated',
            'hover:-translate-y-0.5',
          ],
          className,
        )}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1200px',
        }}
        {...props}
      >
        {/* Mouse-tracking radial spotlight */}
        {hoverable && (
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
            style={{
              background:
                'radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,242,254,0.06) 0%, rgba(255,42,95,0.04) 40%, transparent 70%)',
            }}
          />
        )}

        {/* Glowing border mask that follows cursor */}
        {hoverable && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[inherit] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(180px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 60%, transparent 100%) border-box',
              border: '1px solid transparent',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
        )}

        {/* Inner content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  },
);

Card.displayName = 'Card';

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-6 space-y-2 relative z-10', className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'text-heading-md font-display font-bold tracking-tight text-dr-text-primary group-hover:text-dr-text-primary transition-colors duration-300',
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'text-body-sm text-dr-text-secondary leading-relaxed',
        className,
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('relative z-10', className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-8 flex items-center gap-3 relative z-10', className)} {...props} />;
}
