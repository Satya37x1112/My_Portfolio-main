import React from 'react';
import { Code, Coffee, Clock } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-900 rounded-lg p-12 border border-slate-700">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                <Code className="text-blue-400" size={48} />
                <Coffee className="text-yellow-400" size={48} />
                <Clock className="text-green-400" size={48} />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6">
              ???? Projects Loading... 
            </h3>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
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
