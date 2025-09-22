import React from 'react';
import { Shield, Code, Database, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: <Shield className="text-blue-400" size={32} />,
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
      icon: <Code className="text-blue-400" size={32} />,
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
      icon: <Database className="text-blue-400" size={32} />,
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
      icon: <Settings className="text-blue-400" size={32} />,
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
    <section id="skills" className="py-20 bg-slate-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-blue-500/50 transition-colors duration-300">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
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