import { motion, type HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { REVEAL_VARIANTS } from '@/lib/motion-config';
import { cn } from '@/lib/cn';

type RevealOnScrollProps = HTMLMotionProps<'div'> & {
  delay?: number;
  once?: boolean;
};

export function RevealOnScroll({
  className,
  children,
  delay = 0,
  once = false,
  ...props
}: RevealOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children as React.ReactNode}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25, margin: '-40px' }}
      variants={{
        hidden: REVEAL_VARIANTS.hidden,
        visible: {
          ...REVEAL_VARIANTS.visible,
          transition: {
            ...REVEAL_VARIANTS.visible.transition,
            delay,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
