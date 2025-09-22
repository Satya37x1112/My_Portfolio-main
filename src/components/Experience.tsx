import React from 'react';
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology (BTech)",
      institution: "Sri Sri University",
      location: "India",
      period: "Present",
      description: "Satya Sarthak Manohari is pursuing BTech at Sri Sri University with focus on engineering fundamentals, technology innovation, and cutting-edge advancements in robotics and cybersecurity.",
      icon: <GraduationCap className="text-blue-400" size={24} />
    }
  ];

  const experience = [
    {
      role: "Research Intern",
      company: "NISER Bhubaneswar",
      location: "Bhubaneswar, India",
      period: "Previous",
      description: "Satya Sarthak Manohari gained hands-on research experience at NISER Bhubaneswar, contributing to cutting-edge projects in technology and innovation.",
      icon: <Briefcase className="text-blue-400" size={24} />
    }
  ];

  const achievements = [
    {
      title: "🏆 Creaper 2.0 - 1st Prize",
      description: "Won 1st prize in corporate games at CyberDojo event, March 2025. Demonstrated exceptional cybersecurity skills and strategic thinking.",
      icon: <Award className="text-yellow-400" size={24} />,
      date: "March 2025",
      organization: "CyberDojo • Sri Sri University"
    },
    {
      title: "🌱 Sustainable Development Week",
      description: "Participated in Sustainable Development Week initiative at Sri Sri University, focusing on technology solutions for sustainability.",
      icon: <Award className="text-green-400" size={24} />,
      date: "March 2025", 
      organization: "Sri Sri University"
    },
    {
      title: "🔒 TryHackMe Top 10%",
      description: "Ranked in the top 10% of users on TryHackMe platform, demonstrating exceptional cybersecurity skills and knowledge.",
      icon: <Award className="text-blue-400" size={24} />,
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
    <section id="experience" className="py-20 bg-slate-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Satya Sarthak Manohari - Experience & Education</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Satya Sarthak Manohari's academic journey and professional experiences that have shaped expertise in cybersecurity and technology innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-400" size={28} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {edu.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                      <div className="flex items-center gap-2 text-blue-400 mb-2">
                        <MapPin size={16} />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <p className="text-gray-400 mb-3">{edu.location} • {edu.period}</p>
                      <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-400" size={28} />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {exp.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-white mb-2">{exp.role}</h4>
                      <div className="flex items-center gap-2 text-blue-400 mb-2">
                        <MapPin size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <p className="text-gray-400 mb-3">{exp.location} • {exp.period}</p>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <Award className="text-blue-400" size={28} />
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-semibold text-white mb-2">{achievement.title}</h4>
                    <p className="text-blue-400 font-medium mb-2">{achievement.organization}</p>
                    <p className="text-gray-400 text-sm mb-3">{achievement.date}</p>
                    <p className="text-gray-300 leading-relaxed mb-4">{achievement.description}</p>
                    
                    {/* Placeholder for achievement image */}
                    <div className="w-full h-32 bg-slate-700 border-2 border-dashed border-slate-600 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-slate-500 mb-2">🖼️</div>
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