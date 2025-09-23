import React from 'react';
import { Code, Coffee, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-slate-50 dark:bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-navy-900 mb-6" style={{color: '#1e3a8a'}}>Projects</h2>
          <div className="w-24 h-1 bg-navy-700 dark:bg-navy-700 mx-auto mb-8" style={{backgroundColor: '#1e3a8a'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className={`bg-navy-900 dark:bg-navy-900 rounded-lg p-12 border border-navy-700 dark:border-navy-700 shadow-xl transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`} style={{backgroundColor: '#1e3a8a'}}>
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                <Code className="text-white" size={48} />
                <Coffee className="text-yellow-300" size={48} />
                <Clock className="text-green-300" size={48} />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6">
              🔧 Projects Loading... 
            </h3>
            
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              My projects are currently in stealth mode! 🕵️‍♂️🔒
            </p>
            
            <p className="text-lg text-blue-200 mb-8 leading-relaxed">
              While I'm busy securing the digital world and solving complex cybersecurity challenges, 
              my coding projects are brewing in the background. Think of it as the calm before the 
              coding storm! ⚡🌪️
            </p>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <p className="text-white font-semibold mb-2">
                🚀 Coming Soon:
              </p>
              <p className="text-blue-100">
                Cybersecurity tools, penetration testing frameworks, and innovative solutions 
                that would make even the most secure systems say "Hello World!" 🌍
              </p>
            </div>
            
            <div className="mt-8 text-blue-200">
              <p className="italic">
                "The best projects are worth the wait... and a few cups of coffee ☕"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
