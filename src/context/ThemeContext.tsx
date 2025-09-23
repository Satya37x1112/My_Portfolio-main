import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isHydrated, setIsHydrated] = useState(false);

  // Simple client-side only theme detection
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    let detectedTheme: Theme = 'light';
    
    try {
      // Try to get saved theme
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') {
        detectedTheme = saved;
      } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
        detectedTheme = 'dark';
      }
    } catch (e) {
      // Fallback to light theme if anything fails
      console.warn('Theme detection failed, using light theme');
    }
    
    setTheme(detectedTheme);
    setIsHydrated(true);
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (typeof window === 'undefined' || !isHydrated) return;
    
    try {
      localStorage.setItem('theme', theme);
      
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.warn('Failed to apply theme:', e);
    }
  }, [theme, isHydrated]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};