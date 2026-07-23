import { useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';
import { createParallaxGlow, killGsapContext } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import gsap from 'gsap';

type ParallaxGlowProps = {
  className?: string;
  intensity?: 'subtle' | 'medium';
};

export function ParallaxGlow({ className, intensity = 'subtle' }: ParallaxGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !glowRef.current) return;

    const context = gsap.context(() => {
      createParallaxGlow(glowRef.current, {
        yPercent: intensity === 'subtle' ? 12 : 24,
        scrub: 1.2,
      });
    });

    return () => killGsapContext(context);
  }, [intensity, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-hero opacity-60',
          className,
        )}
      />
    );
  }

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-hero opacity-80 will-change-transform',
        className,
      )}
    />
  );
}
