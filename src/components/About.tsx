import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import profileImage from '../assets/p.jpeg';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation();
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

        {/* Profile Image Section - Premium */}
        <div ref={imageRef} className="text-center mb-12">
          <div className="flex justify-center">
            <div className={`relative transition-all duration-1000 ${imageVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}>
              <div className="w-80 h-80 rounded-full bg-white p-1 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="BTech Student and Cybersecurity Enthusiast at Sri Sri University"
                  className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  decoding="async"
                  width="320"
                  height="320"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-navy-900 dark:bg-slate-800 dark:text-blue-400 rounded-full p-4 shadow-lg" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>
                <Code size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <div className={`space-y-6 text-white transition-all duration-1000 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-white mb-4">
              BTech Student & Cybersecurity Professional
            </h3>
            <p className="text-lg leading-relaxed text-blue-100 dark:text-slate-300">
              Hi, I'm a BTech student at Sri Sri University with a strong interest in robotics, innovation, and cybersecurity. I enjoy tackling security challenges, from penetration testing to network defense, and aim to contribute to building safer digital systems. Beyond academics, I thrive on problem-solving, exploring emerging technologies, and turning ideas into impactful projects. My goal is to grow as a researcher and engineer while contributing to the future of secure, intelligent technology.
            </p>
            <p className="text-lg leading-relaxed text-blue-100 dark:text-slate-300">
              I thrive on solving complex security puzzles, dissecting threats, and safeguarding digital landscapes. Whether it's penetration testing, network defense, or risk assessment, I'm in my element. As a TryHackMe Top 10% performer and ex-intern at NISER Bhubaneswar, I bring practical experience to cybersecurity challenges. When I'm not securing systems, you'll find me strategizing over chess or tackling algorithms on LeetCode.
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

          {/* Additional Images Placeholder */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'}`}>
            <h4 className="text-xl font-semibold text-white text-center mb-4 animate-fade-in-up animate-delay-600">Gallery</h4>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div 
                  key={num} 
                  className={`aspect-square bg-slate-700 border-2 border-dashed border-slate-600 rounded-lg flex items-center justify-center hover-lift transition-all duration-300 animate-scale-in`}
                  style={{ animationDelay: `${(num + 6) * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="text-slate-500 mb-2 text-2xl animate-bounce" style={{ animationDelay: `${num * 200}ms` }}>📸</div>
                    <p className="text-slate-500 text-sm">Image {num}</p>
                    <p className="text-slate-600 text-xs">(To be added)</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Image Placeholders Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">More About Me</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['University Life', 'Cybersecurity Journey', 'Achievements'].map((category, index) => (
              <div key={index} className="bg-slate-900 rounded-lg p-6 border border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-4 text-center">{category}</h4>
                <div className="space-y-3">
                  {[1, 2].map((imgNum) => (
                    <div key={imgNum} className="w-full h-32 bg-slate-700 border-2 border-dashed border-slate-600 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-slate-500 mb-1">🖼️</div>
                        <p className="text-slate-500 text-xs">{category} Photo {imgNum}</p>
                        <p className="text-slate-600 text-xs">(Coming Soon)</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;