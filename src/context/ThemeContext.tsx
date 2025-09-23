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

  console.log('🎨 ThemeProvider rendered, current theme:', theme, 'hydrated:', isHydrated);

  // Simple client-side only theme detection
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    let detectedTheme: Theme = 'light'; // Always default to light
    
    try {
      // Only use saved theme if explicitly set by user
      const saved = localStorage.getItem('theme');
      console.log('💾 Saved theme from localStorage:', saved);
      if (saved === 'dark' || saved === 'light') {
        detectedTheme = saved;
      }
      // Remove system preference detection to avoid unexpected dark mode
      // } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      //   detectedTheme = 'dark';
      // }
    } catch (e) {
      // Fallback to light theme if anything fails
      console.warn('Theme detection failed, using light theme');
    }
    
    console.log('🔧 Setting detected theme to:', detectedTheme);
    setTheme(detectedTheme);
    setIsHydrated(true);
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (typeof window === 'undefined' || !isHydrated) return;
    
    console.log('🎯 Applying theme:', theme, 'to document');
    
    try {
      localStorage.setItem('theme', theme);
      
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        console.log('🌙 Added dark class to html');
      } else {
        document.documentElement.classList.remove('dark');
        console.log('☀️ Removed dark class from html');
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