import React from 'react';
import { Shield, Code, Database, Settings } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();
  const { containerRef: skillsRef, visibleItems } = useStaggeredAnimation(4, 200);

  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: <Shield className="text-navy-700" size={32} style={{color: '#1e3a8a'}} />,
      skills: [
        { name: "Penetration Testing", level: 90 },
        { name: "Network Defense", level: 85 },
        { name: "Risk Assessment", level: 88 },
        { name: "TryHackMe", level: 95 },
        { name: "Threat Analysis", level: 82 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="text-navy-700" size={32} style={{color: '#1e3a8a'}} />,
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C++", level: 75 },
        { name: "Java", level: 78 },
        { name: "Bash/Shell", level: 82 }
      ]
    },
    {
      title: "Technical Skills",
      icon: <Database className="text-navy-700" size={32} style={{color: '#1e3a8a'}} />,
      skills: [
        { name: "Problem Solving", level: 92 },
        { name: "LeetCode", level: 85 },
        { name: "Robotics", level: 80 },
        { name: "Engineering", level: 88 },
        { name: "Chess Strategy", level: 85 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="text-navy-700" size={32} style={{color: '#1e3a8a'}} />,
      skills: [
        { name: "Git", level: 88 },
        { name: "Linux", level: 85 },
        { name: "Security Tools", level: 87 },
        { name: "Research", level: 90 },
        { name: "Documentation", level: 82 }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6" style={{color: '#1e3a8a'}}>Technical Skills</h2>
          <div className="w-24 h-1 bg-navy-700 mx-auto mb-8" style={{backgroundColor: '#1e3a8a'}}></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg p-8 border-2 border-slate-200 hover:border-navy-300 shadow-lg hover:shadow-xl transition-all duration-300 ${
                visibleItems.includes(index) ? 'animate-scale-in' : 'opacity-0 scale-75'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div style={{ animationDelay: `${index * 100}ms` }}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 ml-3" style={{color: '#1e3a8a'}}>{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-navy-700 text-sm font-semibold" style={{color: '#1e3a8a'}}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-navy-700 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          backgroundColor: '#1e3a8a',
                          width: visibleItems.includes(index) ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;