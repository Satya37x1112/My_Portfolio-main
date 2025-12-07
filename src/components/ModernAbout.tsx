import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Code, Shield, Trophy, Target, Rocket } from 'lucide-react';

const CounterAnimation: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ 
  end, 
  duration = 2, 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const ModernAbout: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const stats = [
    { icon: Trophy, value: 10, suffix: '+', label: 'Projects Completed', color: 'cyan' },
    { icon: Shield, value: 100, suffix: '+', label: 'Security Tests', color: 'purple' },
    { icon: Code, value: 5, suffix: '+', label: 'Languages', color: 'pink' },
    { icon: Rocket, value: 12, suffix: '+', label: 'Certifications', color: 'green' },
  ];

  const highlights = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Focused on securing digital infrastructure and building resilient systems.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'Always exploring cutting-edge technologies and security methodologies.',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 circuit-pattern opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Left: Bio Card */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 h-full">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
                  Cybersecurity Enthusiast & Developer
                </h3>
                <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                  <p>
                    I'm <span className="text-cyan-600 dark:text-cyan-400 font-semibold transition-colors duration-300">Satya Sarthak Manohari</span>, 
                    a passionate BTech student at <span className="text-purple-600 dark:text-purple-400 font-semibold transition-colors duration-300">Sri Sri University, Odisha</span>, 
                    specializing in cybersecurity and software development.
                  </p>
                  <p>
                    With a strong foundation in <span className="text-cyan-600 dark:text-cyan-400 font-semibold transition-colors duration-300">penetration testing</span> and{' '}
                    <span className="text-purple-600 dark:text-purple-400 font-semibold transition-colors duration-300">network security</span>, I've earned a spot in the{' '}
                    <span className="text-pink-600 dark:text-pink-400 font-semibold transition-colors duration-300">top 10% on TryHackMe</span> and won the{' '}
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold transition-colors duration-300">Creaper 2.0 competition</span>.
                  </p>
                  <p>
                    I'm deeply interested in <span className="text-purple-600 dark:text-purple-400 font-semibold transition-colors duration-300">DevSecOps</span> practices 
                    and <span className="text-cyan-600 dark:text-cyan-400 font-semibold transition-colors duration-300">system design</span>, always striving to build 
                    secure, scalable, and efficient solutions.
                  </p>
                  <p>
                    My experience includes an internship at{' '}
                    <span className="text-pink-600 dark:text-pink-400 font-semibold transition-colors duration-300">NISER Bhubaneswar</span>, where I worked on 
                    cutting-edge security research and implementations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Stats Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-4 h-full">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`glass-card p-6 text-center hover:neon-glow-${stat.color} transition-all`}
                  >
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 rounded-full bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/20`}>
                        <stat.icon className={`text-${stat.color}-600 dark:text-${stat.color}-400 transition-colors duration-300`} size={32} />
                      </div>
                    </div>
                    <div className={`text-4xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-2 transition-colors duration-300`}>
                      <CounterAnimation end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Highlights Section */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-8 relative overflow-hidden group"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${highlight.gradient} mr-4`}>
                        <highlight.icon className="text-white" size={28} />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">{highlight.title}</h4>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Badge */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-4 glass-card px-8 py-4 rounded-full">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm border-2 border-slate-900">
                  TH
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm border-2 border-slate-900">
                  C2
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-white font-bold text-sm border-2 border-slate-900">
                  NB
                </div>
              </div>
              <span className="text-slate-700 dark:text-slate-300 transition-colors duration-300">
                TryHackMe Top 10% • Creaper 2.0 Winner • NISER Intern
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
