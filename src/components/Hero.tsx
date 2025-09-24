import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/p-removebg-preview-Picsart-AiImageEnhancer.png';

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
    <section id="hero" className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-900">
      <div 
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${profileImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          imageRendering: 'crisp-edges',
          filter: 'brightness(1.1) contrast(1.1) saturate(1.2) hue-rotate(5deg)'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/70 via-gray-200/60 to-gray-300/80 dark:from-gray-900/70 dark:via-gray-800/60 dark:to-black/80"></div>
      
      {/* Subtle glow effect around the image */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-200/30 dark:to-gray-900/30"></div>
      
      <div className="min-h-screen relative z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-screen py-20 lg:py-0">
            
            {/* Empty columns on desktop for spacing */}
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block"></div>
            
            {/* Content - spans full width on mobile, right column on desktop */}
            <div className="col-span-1 text-center lg:text-left">
              <div className="animate-fade-in-up space-y-6 backdrop-blur-sm bg-black/10 rounded-2xl p-6 lg:p-8 border border-white/10">
                <div className="mb-8">
                  <h1 className="relative mb-6">
                    <span className="block text-lg sm:text-xl md:text-2xl text-gray-100 font-light mb-4 text-shadow-lg">
                      Hello, I'm
                    </span>
                    
                    <div className="space-y-3">
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl text-shadow-glow">
                        Satya Sarthak Manohari
                      </div>
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-blue-200 drop-shadow-lg text-shadow-md">
                        Cybersecurity Enthusiast
                      </div>
                    </div>
                    
                    <div className="relative mt-6">
                      <div className="w-20 h-0.5 bg-gradient-to-r from-blue-400 to-white mx-auto lg:mx-0 shadow-lg"></div>
                    </div>
                  </h1>
                </div>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-100 font-medium drop-shadow-lg text-shadow-md">
                  <span className="text-blue-200 font-semibold glow-text">BTech Student</span> • 
                  <span className="text-white font-semibold"> Learner and Performer</span>
                </p>

                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/30 backdrop-blur-md border border-green-400/50 shadow-lg hover:shadow-green-400/25 transition-all duration-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse shadow-sm"></div>
                  <span className="text-xs sm:text-sm font-bold text-green-100 text-shadow-sm">🏆 TryHackMe Top 10%</span>
                </div>
                
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-md mx-auto lg:mx-0 drop-shadow-lg text-shadow-sm">
                  Passionate about cybersecurity and technology innovation. 
                  Exploring advanced penetration testing and network security.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-8">
                  <button
                    onClick={scrollToProjects}
                    className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    View My Work
                    <ArrowDown size={16} />
                  </button>
                  <button 
                    onClick={downloadResume}
                    className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Download Resume
                    <ArrowDown size={16} />
                  </button>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-200 transition-all duration-300 transform hover:scale-110 bg-white/20 backdrop-blur-md rounded-xl p-2 sm:p-3 hover:bg-white/30 hover:shadow-lg hover:shadow-blue-500/25 border border-white/10"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/satya-sarthak-manohari-b2a609297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-200 transition-all duration-300 transform hover:scale-110 bg-white/20 backdrop-blur-md rounded-xl p-2 sm:p-3 hover:bg-white/30 hover:shadow-lg hover:shadow-blue-500/25 border border-white/10"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="mailto:manoharisatyasarthak@gmail.com"
                    className="text-white hover:text-blue-200 transition-all duration-300 transform hover:scale-110 bg-white/20 backdrop-blur-md rounded-xl p-2 sm:p-3 hover:bg-white/30 hover:shadow-lg hover:shadow-blue-500/25 border border-white/10"
                    aria-label="Mail"
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
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
