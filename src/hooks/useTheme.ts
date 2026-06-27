import { useState, useEffect } from 'react';

const THEME_STORAGE_KEY = 'portfolio-theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === LIGHT_THEME) {
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', LIGHT_THEME);
    } else {
      setIsDark(true);
      document.documentElement.removeAttribute('data-theme');
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem(THEME_STORAGE_KEY, DARK_THEME);
    } else {
      document.documentElement.setAttribute('data-theme', LIGHT_THEME);
      localStorage.setItem(THEME_STORAGE_KEY, LIGHT_THEME);
    }
  }, [isDark, isLoaded]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return { isDark, toggleTheme, isLoaded } as const;
};
