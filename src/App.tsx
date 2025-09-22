import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component for suspense fallback
const LoadingSection = () => (
  <div className="flex items-center justify-center py-20 bg-slate-800">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
  </div>
);

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
    <div className="min-h-screen bg-slate-900 font-inter">
      <Navigation activeSection={activeSection} />
      <Hero />
      <Suspense fallback={<LoadingSection />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;