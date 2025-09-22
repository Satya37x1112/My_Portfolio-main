import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import profileImage from '../assets/p.jpeg';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: "Cybersecurity",
      description: "TryHackMe Top 10% | Ex-Intern at NISER Bhubaneswar | Penetration Testing & Network Defense"
    },
    {
      icon: <Palette className="text-blue-400" size={32} />,
      title: "Problem Solving",
      description: "LeetCode enthusiast | Strategic Chess player | Complex security puzzle solver"
    },
    {
      icon: <Zap className="text-blue-400" size={32} />,
      title: "Technology",
      description: "Robotics enthusiast | BTech at Sri Sri University | Innovation-driven engineering"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        </div>

        {/* Profile Image Section - Moved to top */}
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
                <img 
                  src={profileImage} 
                  alt="Satya Sarthak Manohari - BTech Student and Cybersecurity Enthusiast at Sri Sri University"
                  className="w-full h-full rounded-full object-cover bg-slate-700"
                  loading="eager"
                  decoding="async"
                  width="320"
                  height="320"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 rounded-full p-4">
                <Code className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <div className="space-y-6 text-gray-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
              BTech Student & Cybersecurity Enthusiast
            </h3>
            <p className="text-lg leading-relaxed">
              Hello! I am Satya Sarthak Manohari, a BTech student at Sri Sri University. Passionate about technology and innovation, I am eager to explore the world of engineering and contribute to cutting-edge advancements. With a strong foundation in problem-solving, a keen interest in robotics, and a budding enthusiasm for cybersecurity, I am driven to learn and grow in these dynamic fields.
              I thrive on solving complex security puzzles, dissecting threats, and safeguarding digital landscapes. Whether its penetration testing, network defense, or risk assessment, I’m in my element. Connect with Me: Let’s chat about threat vectors, zero-day exploits, or the latest cybersecurity trends. Connect with me—I’m always up for a cyber conversation!
            </p>
            <p className="text-lg leading-relaxed">
              I thrive on solving complex security puzzles, dissecting threats, and safeguarding digital landscapes. Whether it's penetration testing, network defense, or risk assessment, I'm in my element. As a TryHackMe Top 10% performer and ex-intern at NISER Bhubaneswar, I bring practical experience to cybersecurity challenges. When I'm not securing systems, you'll find me strategizing over chess or tackling algorithms on LeetCode.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center p-4">
                  <div className="flex justify-center mb-3">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-400">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Images Placeholder */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white text-center mb-4">Gallery</h4>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="aspect-square bg-slate-700 border-2 border-dashed border-slate-600 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-slate-500 mb-2 text-2xl">📸</div>
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