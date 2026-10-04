import { useState, useEffect } from 'react';

const SCROLL_THRESHOLD = 50;

export const useScrolled = (): boolean => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        setScrolled(window.scrollY > SCROLL_THRESHOLD);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ticking = false;
    };
  }, []);

  return scrolled;
};
