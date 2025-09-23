import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import profileImage from '../assets/p.jpeg';

const Hero: React.FC = () => {
  const { theme } = useTheme();
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
    <section id="hero" className="min-h-screen pt-24 md:pt-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 flex items-center justify-center relative overflow-hidden scroll-mt-20 transition-colors duration-300">
      {/* Premium Navy Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%231e3a8a%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234338ca%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      {/* Circular Profile Photo - Top Right Corner */}
      <div className="absolute top-8 right-8 z-20">
        <div className="relative">
          {/* Circular Photo Container */}
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 p-1 shadow-2xl">
            <div className="w-full h-full bg-white dark:bg-slate-800 rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt="Satya Sarthak Manohari"
                className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500"
                loading="eager"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
                onLoad={() => console.log('Image loaded successfully')}
              />
            </div>
          </div>
          
          {/* Online Status Indicator */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-slate-800 animate-pulse"></div>
        </div>
      </div>
      
      {/* Navy geometric accents */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-blue-200 dark:border-blue-800 opacity-20 rounded-lg rotate-12"></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-blue-300 dark:border-slate-700 opacity-15 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Content Layout */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          
          {/* Main Content */}
          <div className="animate-fade-in-up">
            {/* Premium Navy Header */}
            <div className="mb-8">
              <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-6 font-medium tracking-wide">
                Cybersecurity Professional & Developer
              </div>
              
              {/* Premium Navy Blue Name */}
              <h1 className="relative mb-6">
                <span className="block text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-light mb-4">
                  Hello, I'm
                </span>
                
                {/* Premium Navy Name Design */}
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-white leading-tight" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>
                    Satya Sarthak Manohari
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-700 dark:text-blue-400 mb-4" style={theme === 'light' ? {color: '#3730a3'} : {}}>
                    Cybersecurity Enthusiast
                  </div>
                </div>
                
                {/* Premium Navy accent line */}
                <div className="relative mt-6">
                  <div className="w-24 h-0.5 bg-blue-600 dark:bg-blue-400 mx-auto" style={theme === 'light' ? {backgroundColor: '#1e3a8a'} : {}}></div>
                </div>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-6 font-medium">
              <span className="text-blue-700 dark:text-blue-400 font-semibold" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>BTech Student</span> • 
              <span className="text-slate-700 dark:text-slate-300 font-semibold"> Cybersecurity Professional</span> • 
              <span className="text-slate-700 dark:text-slate-300 font-semibold"> Problem Solver</span>
            </p>
            
            {/* TryHackMe Achievement Badge - Moved here */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 mb-8">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-bold text-green-700 dark:text-green-400">🏆 TryHackMe Top 10%</span>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Passionate about cybersecurity and technology innovation. 
              Currently exploring advanced penetration testing, network security, and cutting-edge cybersecurity solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={scrollToProjects}
              className="bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-500/25 flex items-center gap-3"
              style={theme === 'light' ? {backgroundColor: '#1e3a8a'} : {}}
            >
              View My Work
              <ArrowDown size={20} />
            </button>
            <button 
              onClick={downloadResume}
              className="border-2 border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-400 hover:bg-blue-700 dark:hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              style={theme === 'light' ? {borderColor: '#1e3a8a', color: '#1e3a8a'} : {}}
            >
              Download Resume
              <Download size={20} />
            </button>
          </div>

          {/* Premium Navy Social Links */}
          <div className="flex items-center justify-center gap-6 py-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-400"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/satya-sarthak-manohari-b2a609297"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:manoharisatyasarthak@gmail.com"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-400"
              aria-label="Mail"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="text-slate-400 dark:text-slate-500 animate-bounce" size={24} />
      </div>
    </section>
  );
};

export default Hero;