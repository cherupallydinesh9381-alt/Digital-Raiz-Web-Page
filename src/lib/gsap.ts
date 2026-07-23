import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let isRegistered = false;

export function registerGsapPlugins() {
  if (isRegistered || typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  isRegistered = true;
}

export function createParallaxGlow(
  element: HTMLElement | null,
  options: { yPercent?: number; scrub?: number } = {},
) {
  if (!element) return undefined;

  registerGsapPlugins();

  return gsap.to(element, {
    yPercent: options.yPercent ?? 20,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: options.scrub ?? 1,
    },
  });
}

export function killGsapContext(context: gsap.Context | undefined) {
  context?.revert();
}
