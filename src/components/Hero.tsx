import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234338ca%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-blue-400">Satya Sarthak Manohari</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            BTech Student | Cybersecurity Enthusiast | Problem Solver
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about technology and innovation at Sri Sri University. Exploring cybersecurity, 
            robotics, and cutting-edge engineering solutions that make a difference.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button
            onClick={scrollToProjects}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-3"
          >
            View My Work
            <ArrowDown size={20} />
          </button>
          <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
            Download Resume
            <Download size={20} />
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/satya-sarthak-manohari-b2a609297"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:manoharisatyasarthak@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
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