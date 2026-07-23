import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { PAGE_TRANSITION } from '@/lib/motion-config';

type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div key={location.pathname}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={PAGE_TRANSITION.initial}
        animate={PAGE_TRANSITION.animate}
        exit={PAGE_TRANSITION.exit}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
