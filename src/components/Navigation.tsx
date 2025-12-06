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
        backgroundColor: theme === 'light' ? 'rgba(250, 250, 250, 0.72)' : 'rgba(28, 28, 30, 0.72)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: theme === 'light' ? '0.5px solid rgba(0, 0, 0, 0.08)' : '0.5px solid rgba(255, 255, 255, 0.08)',
        boxShadow: theme === 'light' 
          ? '0 1px 3px rgba(0, 0, 0, 0.08)' 
          : '0 1px 3px rgba(0, 0, 0, 0.3)',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
        <div className="flex items-center justify-between h-14">
          <div 
            className="text-lg font-semibold transition-colors duration-300" 
            style={{ 
              fontSize: '1.125rem',
              fontWeight: 590,
              letterSpacing: '-0.022em',
              color: theme === 'light' ? '#1d1d1f' : '#f5f5f7'
            }}
          >
            Portfolio
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="liquid-glass flex items-center space-x-1 px-2 py-1" role="menubar" aria-label="Primary navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-300"
                  style={{
                    color: activeSection === item.id 
                      ? (theme === 'light' ? '#1d1d1f' : '#f5f5f7')
                      : (theme === 'light' ? '#86868b' : '#8e8e93'),
                    backgroundColor: activeSection === item.id 
                      ? (theme === 'light' ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.12)')
                      : 'transparent',
                    fontWeight: activeSection === item.id ? 510 : 400,
                    letterSpacing: '-0.022em',
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.color = theme === 'light' ? '#424245' : '#aeaeb2';
                      e.currentTarget.style.backgroundColor = theme === 'light' 
                        ? 'rgba(0, 0, 0, 0.03)' 
                        : 'rgba(255, 255, 255, 0.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.color = theme === 'light' ? '#86868b' : '#8e8e93';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                  role="menuitem"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Theme Toggle Button - macOS Style */}
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-lg transition-all duration-300"
              style={{
                color: theme === 'light' ? '#86868b' : '#8e8e93',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme === 'light' ? '#1d1d1f' : '#f5f5f7';
                e.currentTarget.style.backgroundColor = theme === 'light' 
                  ? 'rgba(0, 0, 0, 0.06)' 
                  : 'rgba(255, 255, 255, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme === 'light' ? '#86868b' : '#8e8e93';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-300"
              style={{
                color: theme === 'light' ? '#86868b' : '#8e8e93',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme === 'light' ? '#1d1d1f' : '#f5f5f7';
                e.currentTarget.style.backgroundColor = theme === 'light' 
                  ? 'rgba(0, 0, 0, 0.06)' 
                  : 'rgba(255, 255, 255, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme === 'light' ? '#86868b' : '#8e8e93';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 transition-all duration-300"
              style={{
                color: theme === 'light' ? '#86868b' : '#8e8e93',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme === 'light' ? '#1d1d1f' : '#f5f5f7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme === 'light' ? '#86868b' : '#8e8e93';
              }}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden"
            style={{
              backgroundColor: theme === 'light' 
                ? 'rgba(250, 250, 250, 0.9)' 
                : 'rgba(28, 28, 30, 0.9)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              borderTop: theme === 'light' 
                ? '0.5px solid rgba(0, 0, 0, 0.08)' 
                : '0.5px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div className="px-3 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-sm font-medium w-full text-left rounded-lg transition-all duration-300"
                  style={{
                    color: activeSection === item.id
                      ? (theme === 'light' ? '#1d1d1f' : '#f5f5f7')
                      : (theme === 'light' ? '#86868b' : '#8e8e93'),
                    backgroundColor: activeSection === item.id
                      ? (theme === 'light' ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.12)')
                      : 'transparent',
                    fontWeight: activeSection === item.id ? 510 : 400,
                    letterSpacing: '-0.022em',
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.backgroundColor = theme === 'light' 
                        ? 'rgba(0, 0, 0, 0.03)' 
                        : 'rgba(255, 255, 255, 0.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
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