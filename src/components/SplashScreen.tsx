import React, { useEffect, useState } from 'react';
import { LogoAnimation } from './LogoAnimation';
import { useSplash } from './SplashContext';

export const SplashScreen: React.FC = () => {
  const { isSplashFinished, setSplashFinished } = useSplash();
  const [isVisible, setIsVisible] = useState(!isSplashFinished);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // If already finished (e.g. from session storage), don't show at all
    if (isSplashFinished) {
      setIsVisible(false);
      return;
    }
    // The logo animation takes exactly 2.0s total.
    // Hold for 0.5 seconds, then smoothly fade out over 0.5 seconds.
    const totalAnimationTime = 2000;
    const holdTime = 500;
    
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      // Trigger the main UI animations right as we start fading out
      setSplashFinished(true);
    }, totalAnimationTime + holdTime);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, totalAnimationTime + holdTime + 500); // 500ms fade transition

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-1000 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ willChange: 'opacity' }}
    >
      {/* 1. Base luxury gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8f9fa] to-[#e9ecef] dark:from-[#080808] dark:via-[#050505] dark:to-[#0a0a0a] transition-colors duration-1000" />
      
      {/* 2. Ambient radial lighting and elegant glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-normal">
        {/* Top center soft glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-zinc-400/[0.05] dark:bg-white/[0.03] blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
        {/* Bottom soft glow */}
        <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[90vw] h-[60vw] rounded-full bg-zinc-500/[0.04] dark:bg-white/[0.02] blur-[150px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      {/* 3. Subtle noise texture overlay for premium matte finish */}
      <div 
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* 4. Glassmorphism overlay for depth integration */}
      <div className="absolute inset-0 backdrop-blur-[80px] pointer-events-none" />

      {/* 5. Subtle vignette for cinematic focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.03)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

      {/* 6. Logo Container occupying ~30-35% of viewport width on desktop, perfectly centered */}
      <div className="relative z-10 w-[55vw] md:w-[40vw] lg:w-[35vw] xl:w-[30vw] min-w-[200px] max-w-[500px]">
        <LogoAnimation />
      </div>
    </div>
  );
};
