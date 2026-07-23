import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './LogoAnimation.css';

export const LogoAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);
  const tracePathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.inOut' }
      });

      // 1. Reset state
      gsap.set(lineRef.current, { strokeDasharray: 300, strokeDashoffset: 300 });
      gsap.set(sweepRef.current, { left: '-100%' });
      gsap.set(logoRef.current, { opacity: 0, scale: 1.05, filter: 'drop-shadow(0 0 0px rgba(255,255,255,0))' });

      // Prepare vector trace path
      const traceLen = tracePathRef.current?.getTotalLength() || 0;
      gsap.set(tracePathRef.current, {
        strokeDasharray: traceLen,
        strokeDashoffset: traceLen,
        opacity: 1
      });

      // 3. Animation Sequence (Exactly 2.0s total)
      // Draw the bottom gradient line (0 to 0.5s)
      tl.to(lineRef.current, {
        strokeDashoffset: 0,
        duration: 0.5,
        ease: 'power4.inOut'
      })
        // Draw the precise vector pen-trace of the logo (0.3s to 1.3s)
        .to(tracePathRef.current, {
          strokeDashoffset: 0,
          duration: 1.0,
          ease: 'power2.inOut'
        }, '-=0.2')
        // Fade in the final high-fidelity artwork underneath the trace (0.9s to 1.7s)
        .to(logoRef.current, {
          opacity: 1,
          scale: 1,
          filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.15))',
          duration: 0.8,
        }, '-=0.4')
        // Fade out the vector trace lines now that the artwork is fully formed (0.9s to 1.3s)
        .to(tracePathRef.current, {
          opacity: 0,
          duration: 0.4,
        }, '<')
        // The soft light sweep glides across the completed logo (1.2s to 2.0s)
        .to(sweepRef.current, {
          left: '200%',
          duration: 0.8,
          ease: 'power2.inOut'
        }, '-=0.5')
        // Finally, fade out the baseline underline (1.6s to 2.0s)
        .to(lineRef.current, {
          opacity: 0,
          duration: 0.4
        }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="logo-anim-wrapper" ref={containerRef}>
      <div className="logo-anim-content" style={{ position: 'relative' }}>

        {/* The precise vector trace drawn stroke by stroke */}
        <svg
          className="logo-vector-trace"
          viewBox="0 0 100 60"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }}
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            ref={tracePathRef}
            d="M 21.998 3.616 C 21.997 4.102, 25.260 4.500, 29.248 4.500 C 36.317 4.500, 36.500 4.563, 36.500 7 C 36.500 9.207, 35.973 9.570, 32 10.100 C 27.861 10.652, 28.032 10.712, 34.139 10.850 C 39.014 10.960, 41.404 11.506, 43.131 12.905 C 46.036 15.257, 46.222 15.021, 31.590 27.501 C 21.688 35.947, 21.039 36.730, 21.020 40.250 L 21 44 30.532 44 C 41.021 44, 45.670 42.647, 50.250 38.260 L 53 35.626 55.750 38.260 C 59.673 42.017, 65.090 44, 71.433 44 C 75.844 44, 77.134 43.618, 77.965 42.065 C 79.495 39.206, 77.926 36.140, 72.184 30.769 L 67.130 26.041 71.315 24.857 C 76.424 23.411, 77.661 22.344, 78.584 18.586 C 79.142 16.314, 78.991 15.785, 77.900 16.189 C 77.130 16.474, 72.808 17.928, 68.296 19.420 C 57 23.156, 56.387 25.896, 65.168 33.412 C 69.669 37.264, 68.548 38.241, 63.299 35.040 C 59.436 32.685, 57.112 28.470, 56.081 21.948 C 55.356 17.361, 55.488 16.919, 58.454 14.045 C 61.184 11.398, 62.374 10.980, 67.548 10.850 C 73.426 10.701, 73.444 10.692, 69 10.100 C 65.024 9.570, 64.501 9.209, 64.508 7 C 64.516 4.578, 64.783 4.481, 73.008 3.889 C 81.255 3.295, 81.176 3.281, 70.303 3.389 L 59.106 3.500 55.575 6.925 C 52.328 10.074, 51.901 10.225, 50.272 8.795 C 46.018 5.064, 41.417 3.676, 31.750 3.206 C 26.387 2.946, 21.999 3.130, 21.998 3.616 M 22 7 C 22 7.550, 22.450 8, 23 8 C 23.550 8, 24 7.550, 24 7 C 24 6.450, 23.550 6, 23 6 C 22.450 6, 22 6.450, 22 7 M 77 7 C 77 7.550, 77.450 8, 78 8 C 78.550 8, 79 7.550, 79 7 C 79 6.450, 78.550 6, 78 6 C 77.450 6, 77 6.450, 77 7 M 40.582 29.571 L 32.664 36.500 35.876 36.817 C 41.951 37.416, 49.625 30.324, 48.824 24.852 C 48.534 22.872, 47.675 23.363, 40.582 29.571 M 2.667 50.667 C 2.300 51.033, 2 52.195, 2 53.248 C 2 54.860, 2.554 55.088, 5.500 54.691 C 7.425 54.432, 9 54.620, 9 55.110 C 9 56.717, 12.878 56.040, 13.920 54.250 C 14.481 53.288, 14.953 52.994, 14.970 53.598 C 15.020 55.404, 21 55.125, 21 53.316 C 21 52.259, 20.365 51.933, 19 52.290 C 17.900 52.577, 17 52.357, 17 51.799 C 17 51.242, 16.325 51.045, 15.500 51.362 C 14.675 51.678, 13.993 51.389, 13.985 50.719 C 13.974 49.879, 13.741 49.838, 13.235 50.588 C 12.831 51.186, 11.488 51.931, 10.250 52.244 C 8.596 52.662, 7.996 52.374, 7.985 51.156 C 7.973 49.846, 7.790 49.783, 7.110 50.857 C 6.510 51.803, 6.043 51.878, 5.566 51.107 C 4.792 49.855, 3.652 49.682, 2.667 50.667 M 22.195 52.500 C 22.215 54.150, 22.439 54.704, 22.693 53.731 C 22.947 52.758, 22.930 51.408, 22.656 50.731 C 22.382 50.054, 22.175 50.850, 22.195 52.500 M 24 52.488 C 24 54.887, 24.227 54.973, 30.333 54.881 C 35.035 54.811, 36.667 54.427, 36.667 53.393 C 36.667 51.661, 35.342 51.566, 34.662 53.250 C 34.385 53.938, 34.122 53.487, 34.079 52.250 C 34.036 51.013, 33.564 50, 33.031 50 C 32.499 50, 32.300 50.618, 32.589 51.372 C 32.978 52.384, 32.439 52.615, 30.543 52.253 C 29.128 51.983, 27.726 51.365, 27.426 50.881 C 26.263 48.999, 24 50.061, 24 52.488 M 40.667 50.667 C 39.289 52.044, 40.031 55, 41.750 54.985 C 43.260 54.971, 43.294 54.824, 42 53.909 C 40.871 53.110, 40.809 52.722, 41.750 52.341 C 42.438 52.062, 43 51.421, 43 50.917 C 43 49.849, 41.631 49.702, 40.667 50.667 M 58.158 52.500 C 58.158 54.150, 58.402 54.887, 58.700 54.137 C 59.158 52.986, 59.379 52.986, 60.121 54.137 C 60.852 55.271, 61.165 55.248, 61.985 54 C 62.643 52.997, 62.974 52.914, 62.985 53.750 C 62.993 54.438, 63.675 55, 64.500 55 C 65.325 55, 66 54.325, 66 53.500 C 66 52.459, 64.954 52, 62.583 52 C 60.704 52, 58.940 51.438, 58.662 50.750 C 58.385 50.063, 58.158 50.850, 58.158 52.500 M 69.872 50.250 C 69.802 50.388, 69.640 51.477, 69.513 52.672 C 69.304 54.620, 69.728 54.831, 73.640 54.718 C 77.632 54.604, 77.994 54.379, 77.930 52.047 C 77.882 50.312, 77.643 49.978, 77.180 51 C 76.260 53.029, 70.606 53.468, 71.381 51.450 C 71.815 50.318, 70.409 49.199, 69.872 50.250 M 85.015 50.809 C 85.007 51.529, 84.586 51.862, 84.081 51.550 C 83.575 51.237, 82.486 51.657, 81.661 52.482 C 80.526 53.617, 80.039 53.680, 79.659 52.741 C 79.364 52.010, 79.125 52.219, 79.079 53.250 C 79.036 54.212, 79.675 55, 80.500 55 C 81.325 55, 82.007 54.438, 82.015 53.750 C 82.026 52.917, 82.354 53, 83 54 C 83.862 55.333, 83.973 55.333, 84 54 C 84.026 52.713, 84.160 52.704, 84.939 53.936 C 85.729 55.183, 86.079 55.183, 87.616 53.936 C 88.588 53.146, 89.081 53.006, 88.710 53.625 C 88.284 54.337, 88.947 54.750, 90.518 54.750 C 91.883 54.750, 93.007 54.244, 93.015 53.625 C 93.024 53.006, 93.467 53.175, 94 54 C 94.862 55.333, 94.973 55.333, 95 54 C 95.027 52.687, 95.147 52.684, 95.961 53.971 C 96.473 54.780, 97.186 55.148, 97.546 54.788 C 99.100 53.233, 96.533 52.047, 91.844 52.152 C 88.520 52.227, 86.482 51.791, 85.907 50.883 C 85.221 49.801, 85.027 49.785, 85.015 50.809 M 54.731 51.602 C 54.400 51.934, 51.850 52.232, 49.064 52.264 C 45.123 52.311, 44.003 52.676, 44.015 53.912 C 44.028 55.184, 44.202 55.230, 44.890 54.143 C 45.446 53.267, 45.977 53.154, 46.392 53.826 C 47.237 55.192, 53.292 55.021, 54.235 53.605 C 54.745 52.837, 54.974 52.881, 54.985 53.750 C 54.993 54.438, 55.450 55, 56 55 C 56.550 55, 57 54.100, 57 53 C 57 51.048, 55.939 50.394, 54.731 51.602 M 3.500 53 C 3.160 53.550, 3.359 54, 3.941 54 C 4.523 54, 5 53.550, 5 53 C 5 52.450, 4.802 52, 4.559 52 C 4.316 52, 3.840 52.450, 3.500 53"
            stroke="var(--line-edge, rgba(255, 255, 255, 0.4))"
            strokeWidth="0.5"
            fill="transparent"
          />
        </svg>

        {/* The final artwork, hidden initially via GSAP */}
        <div
          className="logo-image-wrapper"
          ref={logoWrapperRef}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <img
            ref={logoRef}
            src="/brand/logo.png"
            alt="Logo"
            className="logo-image"
          />
          <div className="logo-sweep" ref={sweepRef}></div>
        </div>

        <svg className="logo-line-svg" viewBox="0 0 300 2" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="line-grad-edge" />
              <stop offset="50%" className="line-grad-center" />
              <stop offset="100%" className="line-grad-edge" />
            </linearGradient>
          </defs>
          <line
            ref={lineRef}
            x1="0" y1="1" x2="300" y2="1"
            stroke="url(#lineGrad)"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};
