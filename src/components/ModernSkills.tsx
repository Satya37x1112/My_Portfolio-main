import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Shield, Lock, Terminal, Code, Database, Network, 
  Cloud, GitBranch, Binary, Server, FileCode 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: number;
  category: string;
  color: string;
  delay: number;
}

const TiltCard: React.FC<SkillCardProps> = ({ icon: Icon, name, level, category, color, delay }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div className="glass-card p-6 hover:neon-glow-cyan transition-all duration-300">
        {/* Icon */}
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-${color}-500/20 to-${color}-600/20 mb-4`}>
          <Icon className={`text-${color}-600 dark:text-${color}-400 transition-colors duration-300`} size={32} />
        </div>

        {/* Name & Category */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">{name}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 transition-colors duration-300">{category}</p>

        {/* Progress Bar */}
        <div className="relative h-2 bg-slate-300 dark:bg-slate-800 rounded-full overflow-hidden transition-colors duration-300">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + 0.2 }}
            className={`absolute inset-y-0 left-0 bg-gradient-to-r from-${color}-500 to-${color}-600 rounded-full`}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-slate-500 dark:text-slate-500 transition-colors duration-300">Proficiency</span>
          <span className={`text-xs font-semibold text-${color}-600 dark:text-${color}-400 transition-colors duration-300`}>{level}%</span>
        </div>

        {/* Glow Effect */}
        <div 
          className={`absolute -inset-0.5 bg-gradient-to-r from-${color}-500 to-${color}-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}
          style={{ zIndex: -1 }}
        />
      </div>
    </motion.div>
  );
};

export const ModernSkills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Cybersecurity',
      skills: [
        { icon: Shield, name: 'Penetration Testing', level: 90, category: 'Security', color: 'cyan' },
        { icon: Lock, name: 'Network Security', level: 85, category: 'Security', color: 'blue' },
        { icon: Binary, name: 'Cryptography', level: 80, category: 'Security', color: 'purple' },
        { icon: Terminal, name: 'Ethical Hacking', level: 88, category: 'Security', color: 'pink' },
      ],
    },
    {
      title: 'Development',
      skills: [
        { icon: Code, name: 'Python', level: 92, category: 'Programming', color: 'cyan' },
        { icon: FileCode, name: 'JavaScript', level: 85, category: 'Programming', color: 'purple' },
        { icon: Terminal, name: 'Bash/Shell', level: 88, category: 'Scripting', color: 'blue' },
        { icon: Database, name: 'SQL/NoSQL', level: 80, category: 'Databases', color: 'pink' },
      ],
    },
    {
      title: 'DevSecOps & Cloud',
      skills: [
        { icon: Cloud, name: 'Cloud Security', level: 82, category: 'Cloud', color: 'cyan' },
        { icon: GitBranch, name: 'CI/CD Pipelines', level: 85, category: 'DevOps', color: 'purple' },
        { icon: Server, name: 'Linux/Unix', level: 90, category: 'Systems', color: 'blue' },
        { icon: Network, name: 'Network Protocols', level: 87, category: 'Networking', color: 'pink' },
      ],
    },
  ];

  return (
    <section 
      id="skills" 
      ref={ref}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="absolute inset-0 circuit-pattern opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300">
            A comprehensive arsenal of technical skills across security, development, and infrastructure
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center transition-colors duration-300"
              >
                <span className="gradient-text">{category.title}</span>
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent ml-6" />
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <TiltCard
                    key={index}
                    {...skill}
                    delay={categoryIndex * 0.1 + index * 0.1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 inline-block">
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300" style={{ fontWeight: 600, letterSpacing: '-0.028em' }}>Tools & Technologies</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap',
                'Docker', 'Kubernetes', 'Git', 'AWS', 'Azure',
                'Jenkins', 'Terraform', 'Ansible', 'React', 'Node.js'
              ].map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all cursor-default"
                  style={{
                    backgroundColor: 'var(--glass-bg)',
                    border: '0.5px solid var(--glass-border)',
                    color: 'var(--accent-blue)',
                    fontWeight: 510,
                    letterSpacing: '-0.01em',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
