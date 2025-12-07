import React, { useEffect, useState } from 'react';

export const SpaceBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        {/* Base gradient - macOS inspired */}
        <div
          className="absolute inset-0 transition-colors duration-500"
          style={{
            background: 'radial-gradient(ellipse at top left, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-tertiary) 100%)',
          }}
        />

        {/* Animated gradient orbs - professional & subtle */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute w-[600px] h-[600px] rounded-full blur-3xl animate-float-slow"
            style={{
              top: '10%',
              left: '10%',
              background: 'radial-gradient(circle, rgba(0, 122, 255, 0.15) 0%, transparent 70%)',
              animationDelay: '0s',
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl animate-float-slow"
            style={{
              top: '60%',
              right: '15%',
              background: 'radial-gradient(circle, rgba(191, 90, 242, 0.12) 0%, transparent 70%)',
              animationDelay: '2s',
            }}
          />
          <div
            className="absolute w-[450px] h-[450px] rounded-full blur-3xl animate-float-slow"
            style={{
              bottom: '20%',
              left: '50%',
              background: 'radial-gradient(circle, rgba(255, 45, 85, 0.08) 0%, transparent 70%)',
              animationDelay: '4s',
            }}
          />
        </div>

        {/* Mesh grid pattern - subtle */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Noise texture for depth */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          }}
        />

        {/* Geometric accent lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.12]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-pink)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Curved lines */}
          <path
            d="M 0 200 Q 400 100 800 250 T 1600 300"
            stroke="url(#lineGradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-line"
          />
          <path
            d="M 0 400 Q 500 300 1000 450 T 2000 400"
            stroke="url(#lineGradient2)"
            strokeWidth="1.5"
            fill="none"
            className="animate-draw-line"
            style={{ animationDelay: '1s' }}
          />
          
          {/* Circular accent */}
          <circle
            cx="85%"
            cy="30%"
            r="150"
            stroke="var(--accent-blue)"
            strokeWidth="1"
            fill="none"
            opacity="0.15"
            className="animate-pulse-slow"
          />
        </svg>

        {/* Subtle particles */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                background: i % 3 === 0 
                  ? 'var(--accent-blue)' 
                  : i % 3 === 1 
                  ? 'var(--accent-purple)' 
                  : 'var(--accent-pink)',
                opacity: Math.random() * 0.4 + 0.1,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 15}s`,
              }}
            />
          ))}
        </div>

        {/* Top to bottom fade for content readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.02) 100%)',
          }}
        />
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }

        @keyframes float-particle {
          0%, 100% { 
            transform: translate(0, 0); 
            opacity: 0.2;
          }
          50% { 
            transform: translate(var(--float-x, 20px), var(--float-y, -30px)); 
            opacity: 0.6;
          }
        }

        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.1; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.2; 
            transform: scale(1.05);
          }
        }

        @keyframes draw-line {
          0% { 
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          100% { 
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 15s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-draw-line {
          animation: draw-line 3s ease-out forwards;
        }

        /* Dark mode enhancements */
        .dark .fixed.-z-10 {
          background: radial-gradient(ellipse at top, #1c1c1e 0%, #0a0a0c 100%);
        }
      `}</style>
    </>
  );
};
