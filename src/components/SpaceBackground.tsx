import React, { useEffect, useState } from 'react';

export const SpaceBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Main Space Container */}
      <div className="space-background">
        {/* Nebula Layer */}
        <div className="nebula" />
        
        {/* Star Layers */}
        <div className="stars" />
        
        {/* Cosmic Dust */}
        <div className="cosmic-dust" />
        
        {/* Shooting Stars */}
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
        
        {/* Floating Orb/Planet */}
        <div className="space-orb" />
        
        {/* Additional Animated Elements */}
        <div 
          style={{
            position: 'absolute',
            top: '60%',
            left: '15%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.2), rgba(219, 39, 119, 0.05))',
            filter: 'blur(40px)',
            animation: 'orbFloat 25s ease-in-out infinite',
            animationDelay: '5s',
            opacity: 0.5,
          }}
        />
        
        <div 
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '20%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, rgba(147, 51, 234, 0.2), rgba(126, 34, 206, 0.05))',
            filter: 'blur(40px)',
            animation: 'orbFloat 30s ease-in-out infinite',
            animationDelay: '10s',
            opacity: 0.5,
          }}
        />

        {/* Gradient Overlay for depth */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Additional CSS for dynamic stars */}
      <style>{`
        @keyframes pulse-star {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .dynamic-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 3px 1px rgba(255, 255, 255, 0.5);
          animation: pulse-star 2s infinite;
        }

        /* Add more star variety */
        .space-background::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(1px 1px at 10% 20%, white, transparent),
            radial-gradient(1px 1px at 30% 40%, white, transparent),
            radial-gradient(1px 1px at 50% 60%, white, transparent),
            radial-gradient(1px 1px at 70% 30%, white, transparent),
            radial-gradient(1px 1px at 90% 50%, white, transparent),
            radial-gradient(2px 2px at 15% 70%, rgba(100, 200, 255, 0.8), transparent),
            radial-gradient(2px 2px at 45% 15%, rgba(200, 150, 255, 0.8), transparent),
            radial-gradient(2px 2px at 85% 80%, rgba(255, 150, 200, 0.8), transparent);
          background-size: 300px 300px, 250px 250px, 400px 400px, 350px 350px,
                           300px 300px, 500px 500px, 450px 450px, 400px 400px;
          background-position: 0 0, 50px 50px, 100px 100px, 150px 150px,
                               200px 200px, 250px 250px, 300px 300px, 350px 350px;
          animation: starfield-move 120s linear infinite;
          opacity: 0.6;
        }

        @keyframes starfield-move {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100px);
          }
        }

        /* Light mode adjustments */
        .light .space-background {
          background: radial-gradient(ellipse at top, #e0f2fe 0%, #dbeafe 50%, #bfdbfe 100%);
        }

        .light .space-background::after {
          opacity: 0.3;
        }

        .light .stars,
        .light .nebula {
          opacity: 0.4;
        }

        .light .shooting-star {
          opacity: 0.5;
        }
      `}</style>
    </>
  );
};
