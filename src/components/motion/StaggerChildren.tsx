import { motion, type HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { REVEAL_VARIANTS, STAGGER_CONTAINER } from '@/lib/motion-config';
import { cn } from '@/lib/cn';

type StaggerChildrenProps = HTMLMotionProps<'div'>;

export function StaggerChildren({ className, children, ...props }: StaggerChildrenProps) {
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
      viewport={{ once: false, amount: 0.15 }}
      variants={STAGGER_CONTAINER}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ className, children, ...props }: HTMLMotionProps<'div'>) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children as React.ReactNode}</div>;
  }

  return (
    <motion.div className={cn(className)} variants={REVEAL_VARIANTS} {...props}>
      {children}
    </motion.div>
  );
}
