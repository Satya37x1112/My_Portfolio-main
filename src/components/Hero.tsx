import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

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
      
      {/* Navy geometric accents */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-navy-200 dark:border-blue-800 opacity-20 rounded-lg rotate-12" style={{borderColor: theme === 'light' ? '#1e3a8a33' : undefined}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-navy-300 dark:border-slate-700 opacity-15 rounded-full" style={{borderColor: theme === 'light' ? '#1e3a8a22' : undefined}}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-white leading-tight" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>
                  Satya Sarthak Manohari
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-medium text-navy-700 dark:text-blue-400 mb-4" style={theme === 'light' ? {color: '#3730a3'} : {}}>
                  Cybersecurity Enthusiast
                </div>
              </div>
              
              {/* Premium Navy accent line */}
              <div className="relative mt-6">
                <div className="w-24 h-0.5 bg-navy-600 dark:bg-blue-400 mx-auto" style={theme === 'light' ? {backgroundColor: '#1e3a8a'} : {}}></div>
              </div>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto font-medium">
            <span className="text-navy-700 dark:text-blue-400 font-semibold" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>BTech Student</span> • 
            <span className="text-slate-700 dark:text-slate-300 font-semibold"> Cybersecurity Professional</span> • 
            <span className="text-slate-700 dark:text-slate-300 font-semibold"> Problem Solver</span>
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about cybersecurity and technology innovation. 
            Currently exploring advanced penetration testing, network security, and cutting-edge cybersecurity solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button
            onClick={scrollToProjects}
            className="bg-navy-700 dark:bg-blue-600 hover:bg-navy-800 dark:hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-navy-500/25 dark:hover:shadow-blue-500/25 flex items-center gap-3"
            style={theme === 'light' ? {backgroundColor: '#1e3a8a'} : {}}
          >
            View My Work
            <ArrowDown size={20} />
          </button>
          <button 
            onClick={downloadResume}
            className="border-2 border-navy-700 dark:border-blue-400 text-navy-700 dark:text-blue-400 hover:bg-navy-700 dark:hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
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
            className="text-slate-600 dark:text-slate-400 hover:text-navy-700 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-200 dark:border-slate-700 hover:border-navy-300 dark:hover:border-blue-400"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/satya-sarthak-manohari-b2a609297"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-navy-700 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-200 dark:border-slate-700 hover:border-navy-300 dark:hover:border-blue-400"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:manoharisatyasarthak@gmail.com"
            className="text-slate-600 dark:text-slate-400 hover:text-navy-700 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-200 dark:border-slate-700 hover:border-navy-300 dark:hover:border-blue-400"
            aria-label="Mail"
          >
            <Mail size={28} />
          </a>
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