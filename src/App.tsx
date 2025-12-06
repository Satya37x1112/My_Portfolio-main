import { useState, useEffect } from 'react';
import { ModernNavigation } from './components/ModernNavigation';
import { ModernHero } from './components/ModernHero';
import { ModernAbout } from './components/ModernAbout';
import { ModernSkills } from './components/ModernSkills';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { LoadingScreen } from './components/LoadingScreen';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
          const scrollPosition = window.scrollY + 100;

          for (let i = sections.length - 1; i >= 0; i--) {
            const element = document.getElementById(sections[i]);
            if (element && scrollPosition >= element.offsetTop) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
          {/* Loading Screen */}
          <LoadingScreen />
          
          {/* Custom Cursor */}
          <CustomCursor />
          
          {/* Scroll Progress */}
          <ScrollProgress />
          
          {/* 3D Particle Background */}
          <ParticleBackground />
          
          {/* Navigation */}
          <ModernNavigation activeSection={activeSection} />
          
          {/* Content */}
          <ModernHero />
          <ModernAbout />
          <ModernSkills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;