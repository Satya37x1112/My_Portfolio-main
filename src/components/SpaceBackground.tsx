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

        {/* Simplified animated gradient orbs - reduced for performance */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl animate-float-slow"
            style={{
              top: '10%',
              left: '10%',
              background: 'radial-gradient(circle, rgba(0, 122, 255, 0.15) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-3xl animate-float-slow"
            style={{
              top: '60%',
              right: '15%',
              background: 'radial-gradient(circle, rgba(191, 90, 242, 0.1) 0%, transparent 70%)',
              animationDelay: '3s',
            }}
          />
        </div>

        {/* Simplified mesh grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

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
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }

        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};
