import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const yOffset = -80; // Account for fixed navbar height
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
  <section id="hero" className="min-h-screen pt-24 md:pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center relative overflow-hidden scroll-mt-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234338ca%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-10 animate-float animate-delay-200"></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-pink-500 rounded-full opacity-10 animate-float animate-delay-400"></div>
      
      {/* Modern geometric shapes */}
      <div className="absolute top-32 right-1/4 w-24 h-24 border-2 border-blue-400 opacity-20 animate-rotate-in animate-delay-300 rotate-45"></div>
      <div className="absolute bottom-40 right-16 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 opacity-15 animate-float animate-delay-500 clip-path-triangle"></div>
      <div className="absolute top-1/3 left-16 w-20 h-20 border-2 border-cyan-400 opacity-25 animate-pulse rounded-lg rotate-12"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-transparent to-purple-500 animate-pulse"></div>
      </div>
      
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Ultra Modern Name Section */}
          <div className="mb-8 ultra-modern-name">
            <div className="text-lg md:text-xl text-gray-400 mb-4 font-mono tracking-wider animate-fade-in-up cyber-glow">
              &lt;/&gt; <span className="gradient-text-cyber">WELCOME_TO_MY_WORLD</span> &lt;/&gt;
            </div>
            
            {/* Main Name with Multiple Effects */}
            <h1 className="relative mb-6">
              <span className="block text-3xl md:text-4xl text-gray-300 font-light mb-2 animate-fade-in-left">
                <span className="text-blue-400 font-mono">&gt;</span> Hello, I'm
              </span>
              
              {/* The Name - Ultra Modern */}
              <span className="block relative overflow-hidden">
                <span 
                  className="name-first text-3xl md:text-5xl lg:text-6xl font-black leading-none gradient-text-cyber text-glow holographic glitch animate-scale-in"
                  data-text="CYBER SECURITY"
                  style={{ 
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase'
                  }}
                >
                  CYBER SECURITY
                </span>
                <br />
                <span 
                  className="name-middle text-4xl md:text-6xl lg:text-7xl font-bold gradient-text-modern neon-text animate-fade-in-right animate-delay-300"
                  style={{ 
                    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                    letterSpacing: '0.1em',
                    fontWeight: '800'
                  }}
                >
                  ENTHUSIAST
                </span>
                <br />
                <span 
                  className="name-last text-3xl md:text-5xl lg:text-6xl font-light text-3d animate-slide-in-bottom animate-delay-500"
                  style={{ 
                    background: 'linear-gradient(45deg, #00d4ff, #090979, #ff0080)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: "'Outfit', 'Poppins', sans-serif",
                    letterSpacing: '0.05em'
                  }}
                >
                  SATYA SARTHAK MANOHARI
                </span>
                
                {/* Code-style brackets */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-blue-400 text-4xl font-mono opacity-30 animate-pulse">
                  &#123;
                </div>
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-blue-400 text-4xl font-mono opacity-30 animate-pulse animate-delay-200">
                  &#125;
                </div>
              </span>
              
              {/* Animated underline with pulse effect */}
              <div className="relative mt-4">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-scale-in animate-delay-600 rounded-full"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse rounded-full opacity-50"></div>
              </div>
            </h1>
            
            {/* Floating code elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 left-1/4 text-blue-400 text-xs font-mono opacity-20 animate-float">
                const dev = "cybersec"
              </div>
              <div className="absolute top-1/3 right-1/4 text-purple-400 text-xs font-mono opacity-15 animate-float animate-delay-300">
                &lt;skills/&gt;
              </div>
              <div className="absolute bottom-1/4 left-1/3 text-pink-400 text-xs font-mono opacity-25 animate-float animate-delay-500">
                function() &#123;&#125;
              </div>
              <div className="absolute top-1/2 right-1/3 text-cyan-400 text-xs font-mono opacity-30 animate-float animate-delay-700">
                #innovation
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up animate-delay-200 font-medium">
            <span className="gradient-text-modern font-semibold">BTech Student</span> | 
            <span className="gradient-text-cyber font-semibold"> Cybersecurity Professional</span> | 
            <span className="gradient-text font-semibold"> Problem Solver</span>
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-300">
            I'm passionate about cybersecurity and technology innovation. 
            Currently Exploring advanced penetration testing, network security, and cutting-edge cybersecurity solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button
            onClick={scrollToProjects}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-3 animate-slide-in-bottom animate-delay-400 hover-lift"
          >
            View My Work
            <ArrowDown size={20} className="animate-bounce" />
          </button>
          <button 
            onClick={downloadResume}
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 animate-slide-in-bottom animate-delay-500 hover-glow"
          >
            Download Resume
            <Download size={20} className="group-hover:animate-bounce" />
          </button>
        </div>

        {/* Social Links */}
  <div className="flex items-center justify-center gap-8 py-8 animate-fade-in-up animate-delay-600">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-125 bg-slate-800 rounded-full p-4 shadow-md mx-2 hover-lift hover-rotate"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/satya-sarthak-manohari-b2a609297"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-125 bg-slate-800 rounded-full p-4 shadow-md mx-2 hover-lift hover-rotate animate-delay-100"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:manoharisatyasarthak@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-125 bg-slate-800 rounded-full p-4 shadow-md mx-2 hover-lift hover-rotate animate-delay-200"
            aria-label="Mail"
          >
            <Mail size={32} />
          </a>
        </div>
        {/* Smooth Roller Animation */}
        <div className="flex justify-center mt-4 mb-8">
          <div className="w-64 h-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full animate-roller" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;