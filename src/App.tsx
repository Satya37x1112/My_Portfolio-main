import { useState, useEffect, lazy, Suspense } from 'react';
import { ModernNavigation } from './components/ModernNavigation';
import { ModernHero } from './components/ModernHero';
import { ModernAbout } from './components/ModernAbout';
import { ModernSkills } from './components/ModernSkills';
import { SpaceBackground } from './components/SpaceBackground';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { LoadingScreen } from './components/LoadingScreen';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load components that aren't visible on initial load
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

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
        <div className="min-h-screen relative overflow-hidden">
          {/* Loading Screen */}
          <LoadingScreen />
          
          {/* Space Background */}
          <SpaceBackground />
          
          {/* Custom Cursor */}
          <CustomCursor />
          
          {/* Scroll Progress */}
          <ScrollProgress />
          
          {/* Navigation */}
          <ModernNavigation activeSection={activeSection} />
          
          {/* Content - Critical above the fold */}
          <ModernHero />
          <ModernAbout />
          <ModernSkills />
          
          {/* Lazy loaded below-the-fold content */}
          <Suspense fallback={<div className="h-screen" />}>
            <Experience />
            <Projects />
            <Contact />
          </Suspense>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;