import React from 'react';
import { Code, Coffee, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 scroll-mt-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className={`glass-card p-12 hover:neon-glow-cyan transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}>
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-cyan-500/20">
                  <Code className="text-cyan-400" size={48} />
                </div>
                <div className="p-4 rounded-full bg-purple-500/20">
                  <Coffee className="text-purple-400" size={48} />
                </div>
                <div className="p-4 rounded-full bg-pink-500/20">
                  <Clock className="text-pink-400" size={48} />
                </div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6">
              🔧 Projects Loading... 
            </h3>
            
            <p className="text-xl text-cyan-300 mb-6 leading-relaxed">
              My projects are currently in stealth mode! 🕵️‍♂️🔒
            </p>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              While I'm busy securing the digital world and solving complex cybersecurity challenges, 
              my coding projects are brewing in the background. Think of it as the calm before the 
              coding storm! ⚡🌪️ Currently focusing on DevSecOps and system design projects.
            </p>
            
            <div className="glass-card p-6 border border-cyan-500/30 mb-6">
              <p className="text-white font-semibold mb-2">
                🚀 Coming Soon:
              </p>
              <p className="text-slate-300">
                Cybersecurity tools, penetration testing frameworks, DevSecOps automation, 
                and innovative system design solutions that would make even the most secure systems say "Hello World!" 🌍
              </p>
            </div>
            
            <div className="mt-8 text-cyan-300">
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
