import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/p.jpeg';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/satya_sarthak_manohari_resume.pdf';
    link.download = 'Satya_Sarthak_Manohari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${profileImage})`,
        }}
      ></div>
      
      <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60"></div>
      
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <h1 className="relative mb-6">
                  <span className="block text-2xl md:text-3xl text-white font-light mb-4">
                    Hello, I'm
                  </span>
                  
                  <div className="space-y-2">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
                      Satya Sarthak Manohari
                    </div>
                    <div className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-300 mb-4 drop-shadow-lg">
                      Cybersecurity Enthusiast
                    </div>
                  </div>
                  
                  <div className="relative mt-6">
                    <div className="w-24 h-0.5 bg-white mx-auto"></div>
                  </div>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white mb-6 font-medium drop-shadow-lg">
                <span className="text-blue-200 font-semibold">BTech Student</span> • 
                <span className="text-white font-semibold"> Cybersecurity Professional</span> • 
                <span className="text-white font-semibold"> Problem Solver</span>
              </p>

              <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500 bg-opacity-20 backdrop-blur-sm border border-green-400 border-opacity-30 mb-8">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold text-green-100">🏆 TryHackMe Top 10%</span>
              </div>
              
              <p className="text-lg text-white text-opacity-90 mb-12 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
                Passionate about cybersecurity and technology innovation. 
                Currently exploring advanced penetration testing, network security, and cutting-edge cybersecurity solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <button
                onClick={scrollToProjects}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3"
              >
                View My Work
                <ArrowDown size={20} />
              </button>
              <button 
                onClick={downloadResume}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                Download Resume
                <Download size={20} />
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 py-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors duration-300 transform hover:scale-110 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-20"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/satya-sarthak-manohari-b2a609297"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors duration-300 transform hover:scale-110 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-20"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:manoharisatyasarthak@gmail.com"
                className="text-white hover:text-blue-200 transition-colors duration-300 transform hover:scale-110 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-20"
                aria-label="Mail"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ArrowDown className="text-white text-opacity-70 animate-bounce" size={24} />
      </div>
    </section>
  );
};

export default Hero;
