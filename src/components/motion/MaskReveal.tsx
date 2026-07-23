import { motion, type HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';
import { useSplash } from '@/components/SplashContext';

type MaskRevealProps = HTMLMotionProps<'div'> & {
  delay?: number;
  once?: boolean;
};

export function MaskReveal({
  className,
  children,
  delay = 0,
  once = false,
  ...props
}: MaskRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const { isSplashFinished } = useSplash();

  if (prefersReducedMotion) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children as React.ReactNode}
      </div>
    );
  }

  // We wait for splash finished if we want to tie it to initial load,
  // but for on-scroll we just rely on whileInView. 
  // However, if the element is above the fold, we need to ensure 
  // it doesn't trigger before the splash screen is done.
  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        initial="hidden"
        whileInView={isSplashFinished ? "visible" : "hidden"}
        viewport={{ once, amount: 0.25, margin: '-40px' }}
        variants={{
          hidden: { y: '100%', opacity: 0 }, // Adding slight opacity fade for softer edge
          visible: {
            y: '0%',
            opacity: 1,
            transition: {
              duration: 1.0,
              ease: [0.25, 1, 0.5, 1], // easeOutQuart
              delay,
            },
          },
        }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}
