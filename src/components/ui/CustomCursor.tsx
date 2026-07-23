import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    // Disable on touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Add a couple of trail particles
      if (canvasRef.current) {
        const colors = ['rgba(233, 30, 140, 0.4)', 'rgba(34, 211, 238, 0.4)', 'rgba(245, 158, 11, 0.4)'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 6 + 2,
          alpha: 1.0,
          color: randomColor,
        });

        // Limit maximum particles
        if (particlesRef.current.length > 50) {
          particlesRef.current.shift();
        }
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive-hover') ||
        target.getAttribute('role') === 'button';

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    if (!cursorRef.current) return;
    const xTo = gsap.quickTo(cursorRef.current, 'x', { duration: 0.15, ease: 'power2.out' });
    const yTo = gsap.quickTo(cursorRef.current, 'y', { duration: 0.15, ease: 'power2.out' });

    const tick = () => {
      xTo(mouseRef.current.x);
      yTo(mouseRef.current.y);

      // Render Canvas Particles Trail
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          const particles = particlesRef.current;
          for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.03; // Fade out
            p.size *= 0.96;  // Shrink

            if (p.alpha <= 0 || p.size <= 0.5) {
              particles.splice(i, 1);
              continue;
            }

            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = p.color;
            ctx.fill();
            ctx.restore();
          }
        }
      }

      requestAnimationFrame(tick);
    };

    const animFrame = requestAnimationFrame(tick);

    // Canvas size sync
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9999]"
        style={{ mixBlendMode: 'screen' }}
      />
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-transform duration-300 ease-out will-change-transform ${
          isHovered
            ? 'h-12 w-12 border-dr-rose bg-dr-rose/10 scale-125'
            : 'h-6 w-6 border-dr-cyan bg-dr-cyan/15 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
        }`}
        style={{
          transform: 'translate3d(0px, 0px, 0px)',
          transformOrigin: 'center center',
        }}
      />
    </>
  );
}
