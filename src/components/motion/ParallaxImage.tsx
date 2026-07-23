import { useRef } from 'react';
import { motion, useScroll, useTransform, type HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';
import { useSplash } from '@/components/SplashContext';

interface ParallaxImageProps extends HTMLMotionProps<'div'> {
  src: string;
  alt?: string;
  imageClassName?: string;
  parallaxAmount?: number; // Distance it moves, default 50
}

export function ParallaxImage({
  src,
  alt = '',
  className,
  imageClassName,
  parallaxAmount = 50,
  ...props
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { isSplashFinished } = useSplash();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-parallaxAmount, parallaxAmount]);

  if (prefersReducedMotion) {
    return (
      <div className={cn('relative overflow-hidden', className)} {...(props as any)}>
        <img src={src} alt={alt} className={cn('w-full h-full object-cover', imageClassName)} />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      {...(props as any)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={isSplashFinished ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          style={{ y } as any}
          className={cn(
            'w-full h-[120%] -top-[10%] absolute object-cover will-change-transform',
            imageClassName
          )}
        />
      </motion.div>
    </div>
  );
}
