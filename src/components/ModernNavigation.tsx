import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import photo from '../assets/p.jpeg';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ModernNavigationProps {
  activeSection: string;
}

export const ModernNavigation: React.FC<ModernNavigationProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
      style={{
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo (photo) */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => setShowPhotoModal(true)}
            className="flex items-center cursor-pointer group"
            aria-label="View profile photo"
          >
            <img
              src={photo}
              alt="Satya Sarthak Manohari"
              className="w-10 h-10 rounded-full object-cover border-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
              style={{ borderColor: 'var(--accent-blue)' }}
            />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.id)}
                className="relative px-5 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span
                  className={`relative z-10 ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-slate-300 group-hover:text-white'
                  }`}
                >
                  {item.label}
                </span>
                
                {/* Hover background */}
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-card hover:neon-glow-cyan transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-cyan-400" />
              ) : (
                <Moon size={20} className="text-purple-400" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg glass-card text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass-card rounded-2xl p-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-lg text-left transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 neon-glow-cyan'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Photo Modal */}
      {showPhotoModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowPhotoModal(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full"
          >
            {/* Close button */}
            <button
              onClick={() => setShowPhotoModal(false)}
              className="absolute -top-12 right-0 p-2 rounded-full text-white hover:bg-white/10 transition-all"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            {/* Photo */}
            <div className="glass-card p-4 rounded-3xl overflow-hidden">
              <img
                src={photo}
                alt="Satya Sarthak Manohari"
                className="w-full h-auto rounded-2xl object-cover"
                style={{
                  maxHeight: '80vh',
                  boxShadow: '0 20px 60px rgba(0, 122, 255, 0.3)',
                }}
              />
              <div className="mt-4 text-center">
                <h3 
                  className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300"
                  style={{ fontWeight: 600, letterSpacing: '-0.028em' }}
                >
                  Satya Sarthak Manohari
                </h3>
                <p 
                  className="text-sm text-slate-600 dark:text-slate-400 mt-1 transition-colors duration-300"
                  style={{ letterSpacing: '-0.01em', color: 'var(--accent-blue)' }}
                >
                  Cybersecurity Enthusiast • DevSecOps
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};
