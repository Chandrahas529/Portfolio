import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,           // Scroll duration in seconds
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      direction: 'vertical',    // 'vertical' or 'horizontal'
      gestureDirection: 'vertical',
      smoothWheel: true,        // Smooth mouse wheel scrolling
      smoothTouch: false,       // Smooth touch scrolling
      touchMultiplier: 2,       // Touch scroll multiplier
    });

    // Animation loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);
};
