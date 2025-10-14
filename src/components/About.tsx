import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();
  const { containerRef: highlightsRef, visibleItems } = useStaggeredAnimation(3, 200);

  const highlights = [
    {
      icon: <Code className="text-white dark:text-blue-400" size={32} />,
      title: "Cybersecurity",
      description: "TryHackMe Top 10% | Ex-Intern at NISER Bhubaneswar | Penetration Testing & Network Defense"
    },
    {
      icon: <Palette className="text-white dark:text-blue-400" size={32} />,
      title: "Problem Solving",
      description: "LeetCode enthusiast | Strategic Chess player | Complex security puzzle solver"
    },
    {
      icon: <Zap className="text-white dark:text-blue-400" size={32} />,
      title: "Technology",
      description: "Robotics enthusiast | BTech at Sri Sri University | Innovation-driven engineering"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-navy-900 dark:bg-slate-900 text-white scroll-mt-20 transition-colors duration-300" style={theme === 'light' ? {backgroundColor: '#1e3a8a'} : {}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* About Content */}
          <div className={`space-y-6 text-white transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'} max-w-4xl mx-auto text-center`}>
            <h3 className="text-2xl font-semibold text-white mb-4">
              BTech Student & Cybersecurity Professional
            </h3>
            <p className="text-lg leading-relaxed text-blue-100 dark:text-slate-300">
              Hi, I'm a BTech student at Sri Sri University with a strong interest in robotics, innovation, and cybersecurity. I enjoy tackling security challenges, from penetration testing to network defense, and aim to contribute to building safer digital systems. Beyond academics, I thrive on problem-solving, exploring emerging technologies, and turning ideas into impactful projects. My goal is to grow as a researcher and engineer while contributing to the future of secure, intelligent technology. I'm particularly aspiring for DevSecOps and system design roles where I can bridge security and development.
            </p>


            <div ref={highlightsRef} className="grid md:grid-cols-3 gap-6 mt-8">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className={`text-center p-6 bg-white bg-opacity-10 dark:bg-slate-800 dark:bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg border border-white border-opacity-20 dark:border-slate-700 transition-all duration-500 hover:shadow-xl hover:bg-opacity-20 dark:hover:bg-opacity-100 ${
                    visibleItems.includes(index) ? 'animate-scale-in' : 'opacity-0 scale-75'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex justify-center mb-3">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{highlight.title}</h4>
                  <p className="text-sm text-blue-100 dark:text-slate-400">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;