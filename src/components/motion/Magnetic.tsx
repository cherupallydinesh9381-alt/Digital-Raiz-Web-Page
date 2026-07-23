import { useRef, useEffect, type ReactElement } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: ReactElement;
  range?: number;
  strength?: number;
}

export function Magnetic({ children, range = 60, strength = 0.35 }: MagneticProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance < range) {
        // Move element toward cursor
        gsap.to(el, {
          x: distanceX * strength,
          y: distanceY * strength,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        // Snap back
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [range, strength]);

  return <div ref={containerRef} className="inline-block">{children}</div>;
}
