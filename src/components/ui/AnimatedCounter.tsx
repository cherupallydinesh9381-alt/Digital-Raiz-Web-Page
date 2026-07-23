import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useTransform, animate } from 'framer-motion';

type AnimatedCounterProps = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
};

export function AnimatedCounter({ value, duration = 1.5, prefix = '', suffix = '' }: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration, ease: [0.25, 1, 0.5, 1] });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [isInView, count, value, duration]);

  useEffect(() => {
    return rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest}${suffix}`;
      }
    });
  }, [rounded, prefix, suffix]);

  return <span ref={ref} className="font-mono font-bold tracking-tight">{prefix}0{suffix}</span>;
}
