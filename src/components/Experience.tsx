import React from 'react';
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();
  const { containerRef: achievementsRef, visibleItems } = useStaggeredAnimation(4, 150);

  const education = [
    {
      degree: "Bachelor of Technology (BTech)",
      institution: "Sri Sri University",
      location: "India",
      period: "Present",
      description: "I am pursuing BTech at Sri Sri University with focus on engineering fundamentals, technology innovation, and cutting-edge advancements in robotics and cybersecurity.",
      icon: <GraduationCap className="text-white" size={24} />
    }
  ];

  const experience = [
    {
      role: "Research Intern",
      company: "NISER Bhubaneswar",
      location: "Bhubaneswar, India",
      period: "Previous",
      description: "I gained hands-on research experience at NISER Bhubaneswar, contributing to cutting-edge projects in technology and innovation.",
      icon: <Briefcase className="text-white" size={24} />
    }
  ];

  const achievements = [
    {
      title: "🏆 Creaper 2.0 - 1st Prize",
      description: "Won 1st prize in corporate games at CyberDojo event, March 2025. Demonstrated exceptional cybersecurity skills and strategic thinking.",
      icon: <Award className="text-yellow-300" size={24} />,
      date: "March 2025",
      organization: "CyberDojo • Sri Sri University"
    },
    {
      title: "🌱 Sustainable Development Week",
      description: "Participated in Sustainable Development Week initiative at Sri Sri University, focusing on technology solutions for sustainability.",
      icon: <Award className="text-green-300" size={24} />,
      date: "March 2025", 
      organization: "Sri Sri University"
    },
    {
      title: "🔒 TryHackMe Top 10%",
      description: "Ranked in the top 10% of users on TryHackMe platform, demonstrating exceptional cybersecurity skills and knowledge.",
      icon: <Award className="text-blue-300" size={24} />,
      date: "Ongoing",
      organization: "TryHackMe Platform"
    },
    {
      title: "♟️ Strategic Problem Solver",
      description: "Active on LeetCode and passionate chess player, developing strategic thinking and algorithmic problem-solving skills.",
      icon: <Award className="text-purple-400" size={24} />,
      date: "Ongoing",
      organization: "LeetCode • Chess Community"
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-white dark:bg-navy-900 scroll-mt-20" style={theme === 'light' ? {} : {backgroundColor: '#1e3a8a'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>My Experience & Education</h2>
          <div className="w-24 h-1 bg-navy-700 dark:bg-white mx-auto mb-8" style={theme === 'light' ? {backgroundColor: '#1e3a8a'} : {}}></div>
          <p className="text-xl text-slate-600 dark:text-blue-100 max-w-3xl mx-auto">
            My academic journey and professional experiences that have shaped my expertise in cybersecurity and technology innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-8 flex items-center gap-3" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>
              <GraduationCap className="text-navy-700 dark:text-white" style={theme === 'light' ? {color: '#1e3a8a'} : {}} size={28} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-navy-300 dark:hover:border-blue-400 transition-colors duration-300 hover-lift animate-scale-in animate-delay-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 animate-rotate-in animate-delay-300">
                      {edu.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-navy-900 dark:text-white mb-2" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>{edu.degree}</h4>
                      <div className="flex items-center gap-2 text-navy-700 dark:text-blue-400 mb-2" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>
                        <MapPin size={16} className="animate-pulse" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400 mb-3">{edu.location} • {edu.period}</p>
                      <p className="text-slate-700 dark:text-gray-300 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-8 flex items-center gap-3" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>
              <Briefcase className="text-navy-700 dark:text-blue-400 animate-float animate-delay-100" style={theme === 'light' ? {color: '#1e3a8a'} : {}} size={28} />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-navy-300 dark:hover:border-blue-400 transition-colors duration-300 hover-lift animate-scale-in animate-delay-400">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 animate-rotate-in animate-delay-500">
                      {exp.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-navy-900 dark:text-white mb-2" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>{exp.role}</h4>
                      <div className="flex items-center gap-2 text-navy-700 dark:text-blue-400 mb-2" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>
                        <MapPin size={16} className="animate-pulse" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <p className="text-slate-600 dark:text-gray-400 mb-3">{exp.location} • {exp.period}</p>
                      <p className="text-slate-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3 animate-fade-in-up animate-delay-600" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>
            <Award className="text-navy-700 dark:text-blue-400 animate-float animate-delay-200" style={theme === 'light' ? {color: '#1e3a8a'} : {}} size={28} />
            Key Achievements
          </h3>
          <div ref={achievementsRef} className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-navy-300 dark:hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 hover-lift hover-glow ${
                  visibleItems.includes(index) ? 'animate-scale-in' : 'opacity-0 scale-75'
                }`}
                style={{ animationDelay: `${(index + 8) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 animate-rotate-in" style={{ animationDelay: `${(index + 10) * 100}ms` }}>
                    {achievement.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-semibold text-navy-900 dark:text-white mb-2" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>{achievement.title}</h4>
                    <p className="text-navy-700 dark:text-blue-400 font-medium mb-2" style={theme === 'light' ? {color: '#1e3a8a'} : {}}>{achievement.organization}</p>
                    <p className="text-slate-600 dark:text-gray-400 text-sm mb-3">{achievement.date}</p>
                    <p className="text-slate-700 dark:text-gray-300 leading-relaxed mb-4">{achievement.description}</p>
                    
                    {/* Placeholder for achievement image */}
                    <div className="w-full h-32 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg flex items-center justify-center hover-lift">
                      <div className="text-center">
                        <div className="text-slate-500 mb-2 animate-bounce" style={{ animationDelay: `${index * 300}ms` }}>🖼️</div>
                        <p className="text-slate-500 text-sm">Certificate Image</p>
                        <p className="text-slate-600 text-xs">(To be added)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;