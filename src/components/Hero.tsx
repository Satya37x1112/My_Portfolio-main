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
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${profileImage})`,
          backgroundPosition: 'center 20%'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70"></div>
      
      <div className="min-h-screen relative z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-screen py-20 lg:py-0">
            
            {/* Empty columns on desktop for spacing */}
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block"></div>
            
            {/* Content - spans full width on mobile, right column on desktop */}
            <div className="col-span-1 text-center lg:text-left">
              <div className="animate-fade-in-up space-y-6">
                <div className="mb-8">
                  <h1 className="relative mb-6">
                    <span className="block text-lg sm:text-xl md:text-2xl text-white font-light mb-4">
                      Hello, I'm
                    </span>
                    
                    <div className="space-y-3">
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
                        Satya Sarthak Manohari
                      </div>
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-blue-300 drop-shadow-lg">
                        Cybersecurity Enthusiast
                      </div>
                    </div>
                    
                    <div className="relative mt-6">
                      <div className="w-20 h-0.5 bg-white mx-auto lg:mx-0"></div>
                    </div>
                  </h1>
                </div>
                
                <p className="text-base sm:text-lg md:text-xl text-white font-medium drop-shadow-lg">
                  <span className="text-blue-200 font-semibold">BTech Student</span> • 
                  <span className="text-white font-semibold"> Learner and Performer</span>
                </p>

                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500 bg-opacity-20 backdrop-blur-sm border border-green-400 border-opacity-30">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-bold text-green-100">🏆 TryHackMe Top 10%</span>
                </div>
                
                <p className="text-sm sm:text-base text-white text-opacity-90 leading-relaxed max-w-md mx-auto lg:mx-0 drop-shadow-lg">
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
                    className="text-white hover:text-blue-200 transition-colors duration-300 transform hover:scale-110 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-2 sm:p-3 hover:bg-opacity-20"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/satya-sarthak-manohari-b2a609297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-200 transition-colors duration-300 transform hover:scale-110 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-2 sm:p-3 hover:bg-opacity-20"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="mailto:manoharisatyasarthak@gmail.com"
                    className="text-white hover:text-blue-200 transition-colors duration-300 transform hover:scale-110 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-2 sm:p-3 hover:bg-opacity-20"
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
