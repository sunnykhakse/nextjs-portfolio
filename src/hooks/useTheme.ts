import { useState, useEffect, useCallback } from 'react';

const THEME_STORAGE_KEY = 'portfolio-theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    const shouldUseLight = saved === LIGHT_THEME;

    setIsDark(!shouldUseLight);
    if (shouldUseLight) {
      document.documentElement.setAttribute('data-theme', LIGHT_THEME);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded || typeof window === 'undefined') return;

    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      window.localStorage.setItem(THEME_STORAGE_KEY, DARK_THEME);
    } else {
      document.documentElement.setAttribute('data-theme', LIGHT_THEME);
      window.localStorage.setItem(THEME_STORAGE_KEY, LIGHT_THEME);
    }
  }, [isDark, isLoaded]);

  const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

  return { isDark, toggleTheme, isLoaded } as const;
};
