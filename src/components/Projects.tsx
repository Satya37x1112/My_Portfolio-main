import React from 'react';
import { Code, Coffee, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-slate-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 animate-scale-in"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className={`bg-slate-900 rounded-lg p-12 border border-slate-700 hover-glow transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}>
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                <Code className="text-blue-400 animate-float" size={48} />
                <Coffee className="text-yellow-400 animate-float animate-delay-200" size={48} />
                <Clock className="text-green-400 animate-float animate-delay-400" size={48} />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6 animate-fade-in-up animate-delay-300">
              ???? Projects Loading... 
            </h3>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed animate-fade-in-up animate-delay-400">
              My projects are currently in stealth mode! ????????????????
            </p>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              While I'm busy securing the digital world and solving complex cybersecurity challenges, 
              my coding projects are brewing in the background. Think of it as the calm before the 
              coding storm! ??????????
            </p>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-blue-400/30">
              <p className="text-blue-400 font-semibold mb-2">
                ???? Coming Soon:
              </p>
              <p className="text-gray-300">
                Cybersecurity tools, penetration testing frameworks, and innovative solutions 
                that would make even the most secure systems say "Hello World!" ????
              </p>
            </div>
            
            <div className="mt-8 text-gray-500">
              <p className="italic">
                "The best projects are worth the wait... and a few cups of coffee ???"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
