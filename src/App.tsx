import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
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
        <div className="min-h-screen bg-white dark:bg-slate-900 font-inter transition-colors duration-300">
          <Navigation activeSection={activeSection} />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;