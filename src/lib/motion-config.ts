export const MOTION = {
  ease: {
    outExpo: [0.16, 1, 0.3, 1] as const,
    outQuart: [0.25, 1, 0.5, 1] as const,
    inOutCubic: [0.65, 0, 0.35, 1] as const,
    inOut: [0.65, 0, 0.35, 1] as const,
  },
  duration: {
    fast: 0.25,
    base: 0.6,
    slow: 0.8,
    slower: 1.2,
  },
  stagger: {
    fast: 0.08,
    base: 0.15,
    slow: 0.2,
  },
} as const;

export const REVEAL_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: MOTION.duration.slow,
      ease: MOTION.ease.outQuart,
    },
  },
} as const;

export const FADE_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: MOTION.duration.base },
  },
  exit: {
    opacity: 0,
    transition: { duration: MOTION.duration.fast },
  },
} as const;

export const PAGE_TRANSITION = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION.duration.slow,
      ease: MOTION.ease.outExpo,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: MOTION.duration.fast },
  },
} as const;

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: MOTION.stagger.base,
      delayChildren: 0.15,
    },
  },
} as const;

export const GSAP_DEFAULTS = {
  ease: 'power3.out',
  duration: 0.8,
} as const;
