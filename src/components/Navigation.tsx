import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Account for fixed navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: theme === 'light' 
          ? 'rgba(255, 255, 255, 0.7)' 
          : 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: theme === 'light' 
          ? '1px solid rgba(226, 232, 240, 0.5)' 
          : '1px solid rgba(51, 65, 85, 0.5)',
        boxShadow: theme === 'light'
          ? '0 8px 32px 0 rgba(31, 38, 135, 0.07)'
          : '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-navy-900 dark:text-white" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.id
                      ? 'text-navy-700 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-navy-700 dark:hover:text-white'
                  }`}
                  style={
                    activeSection === item.id 
                      ? {
                          color: theme === 'light' ? '#1e3a8a' : '#60a5fa',
                          background: theme === 'light' 
                            ? 'rgba(30, 58, 138, 0.1)' 
                            : 'rgba(96, 165, 250, 0.1)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          boxShadow: theme === 'light'
                            ? '0 4px 15px 0 rgba(30, 58, 138, 0.1)'
                            : '0 4px 15px 0 rgba(96, 165, 250, 0.1)',
                        }
                      : {}
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-navy-700 dark:hover:text-white transition-all duration-300"
              style={{
                background: theme === 'light' 
                  ? 'rgba(241, 245, 249, 0.6)' 
                  : 'rgba(51, 65, 85, 0.6)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                boxShadow: theme === 'light'
                  ? '0 4px 15px 0 rgba(31, 38, 135, 0.1)'
                  : '0 4px 15px 0 rgba(0, 0, 0, 0.3)',
              }}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-navy-700 dark:hover:text-white transition-all duration-300"
              style={{
                background: theme === 'light' 
                  ? 'rgba(241, 245, 249, 0.6)' 
                  : 'rgba(51, 65, 85, 0.6)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                boxShadow: theme === 'light'
                  ? '0 4px 15px 0 rgba(31, 38, 135, 0.1)'
                  : '0 4px 15px 0 rgba(0, 0, 0, 0.3)',
              }}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-navy-700 dark:hover:text-white p-2"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="md:hidden"
            style={{
              background: theme === 'light' 
                ? 'rgba(255, 255, 255, 0.85)' 
                : 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              borderTop: theme === 'light' 
                ? '1px solid rgba(226, 232, 240, 0.5)' 
                : '1px solid rgba(51, 65, 85, 0.5)',
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 rounded-lg ${
                    activeSection === item.id
                      ? 'text-navy-700 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-navy-700 dark:hover:text-white'
                  }`}
                  style={
                    activeSection === item.id 
                      ? {
                          color: theme === 'light' ? '#1e3a8a' : '#60a5fa',
                          background: theme === 'light' 
                            ? 'rgba(30, 58, 138, 0.1)' 
                            : 'rgba(96, 165, 250, 0.1)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                        }
                      : {}
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;