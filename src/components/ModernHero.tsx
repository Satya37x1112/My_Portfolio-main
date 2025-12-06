import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Terminal, Shield, Lock } from 'lucide-react';

const TypewriterText: React.FC<{ texts: string[]; delay?: number }> = ({ texts, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [currentIndex, textIndex, isDeleting, texts]);

  return <span className="terminal">{displayText}</span>;
};

const FloatingIcon: React.FC<{ icon: React.ReactNode; delay: number }> = ({ icon, delay }) => {
  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="text-cyan-400/30 backdrop-blur-sm p-3 rounded-full border border-cyan-400/20">
        {icon}
      </div>
    </motion.div>
  );
};

export const ModernHero: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
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
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Floating 3D Icons */}
      <div className="hidden lg:block">
        <FloatingIcon icon={<Shield size={40} />} delay={0} />
        <div style={{ position: 'absolute', top: '20%', right: '15%' }}>
          <FloatingIcon icon={<Lock size={35} />} delay={0.5} />
        </div>
        <div style={{ position: 'absolute', bottom: '30%', left: '10%' }}>
          <FloatingIcon icon={<Terminal size={38} />} delay={1} />
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen relative z-10 flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Terminal-Style Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-block glass-card px-6 py-3 text-left">
                <p className="text-cyan-600 dark:text-cyan-400 text-sm md:text-base font-mono transition-colors duration-300">
                  $ whoami
                </p>
                {showContent && (
                  <p className="text-cyan-700 dark:text-cyan-300 text-sm md:text-base font-mono mt-1 transition-colors duration-300">
                    <TypewriterText texts={[
                      "cybersecurity_enthusiast",
                      "aspiring_devsecops_engineer",
                      "system_design_architect",
                      "penetration_tester"
                    ]} />
                  </p>
                )}
              </div>
            </motion.div>

            {/* Name - Clean and Simple */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="text-slate-900 dark:text-white transition-colors duration-300">
                Satya Sarthak
              </span>
              <br />
              <span className="text-slate-900 dark:text-white transition-colors duration-300">
                Manohari
              </span>
            </motion.h1>

            {/* Role with Animated Underline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-cyan-600 dark:text-cyan-300 font-semibold mb-2 transition-colors duration-300">
                Cybersecurity Enthusiast
              </h2>
              <div className="flex justify-center">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"
                />
              </div>
            </motion.div>

            {/* Info Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              <div className="glass-card p-6 hover:scale-105 transition-transform">
                <div className="text-4xl mb-2"></div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white transition-colors duration-300">BTech Student</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">Sri Sri University, Odisha</p>
              </div>

              <div className="glass-card p-6 hover:scale-105 transition-transform neon-glow-cyan">
                <div className="text-4xl mb-2"></div>
                <p className="text-lg font-semibold text-cyan-600 dark:text-cyan-300 transition-colors duration-300">Top 10%</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">TryHackMe Platform</p>
              </div>

              <div className="glass-card p-6 hover:scale-105 transition-transform">
                <div className="text-4xl mb-2"></div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white transition-colors duration-300">Award Winner</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">Creaper 2.0 Competition</p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
            >
              Passionate about <span className="text-cyan-600 dark:text-cyan-400 font-semibold transition-colors duration-300">cybersecurity</span> and technology innovation. 
              Exploring advanced <span className="text-purple-600 dark:text-purple-400 font-semibold transition-colors duration-300">penetration testing</span> and{' '}
              <span className="text-pink-600 dark:text-pink-400 font-semibold transition-colors duration-300">network security</span>.
              Aspiring for <span className="text-cyan-600 dark:text-cyan-400 font-semibold transition-colors duration-300">DevSecOps</span> and{' '}
              <span className="text-purple-600 dark:text-purple-400 font-semibold transition-colors duration-300">system design</span> roles.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="magnetic-btn glass-card px-8 py-4 rounded-full font-semibold text-slate-900 dark:text-white hover:neon-glow-cyan transition-all group"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={downloadResume}
                className="magnetic-btn bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full font-semibold text-white hover:shadow-2xl transition-all hover:scale-105"
              >
                Download Resume
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex justify-center gap-6"
            >
              {[
                { icon: Github, url: 'https://github.com/Satya37x1112', label: 'GitHub', external: true },
                { icon: Linkedin, url: 'https://www.linkedin.com/in/satya-sarthak-manohari-b2a609297', label: 'LinkedIn', external: true },
                { icon: Mail, url: '#contact', label: 'Email', external: false },
              ].map(({ icon: Icon, url, label, external }) => (
                <a
                  key={label}
                  href={url}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  onClick={(e) => {
                    if (!external) {
                      e.preventDefault();
                      const element = document.getElementById('contact');
                      if (element) {
                        const yOffset = -80;
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }
                  }}
                  className="glass-card p-4 rounded-full hover:neon-glow-purple transition-all hover:scale-110 group"
                  aria-label={label}
                >
                  <Icon className="text-slate-600 dark:text-slate-300 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300" size={24} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 2.5 }, y: { duration: 1.5, repeat: Infinity } }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-cyan-400" size={32} />
      </motion.div>
    </section>
  );
};
