import React, { useEffect, useState } from 'react';

export const SpaceBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate random stars
  const generateStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      animationDelay: Math.random() * 3,
      animationDuration: Math.random() * 3 + 2,
    }));
  };

  const stars = generateStars(200);

  return (
    <>
      {/* Night Sky Container */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Deep Night Sky Gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at top, #1e3a8a 0%, #0f172a 40%, #020617 100%)',
          }}
        />

        {/* Starfield */}
        <div className="absolute inset-0">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
                animation: `twinkle-star ${star.animationDuration}s ease-in-out ${star.animationDelay}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Shooting Stars */}
        {[0, 1, 2].map((i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 25}%`,
              boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.9)',
              animation: `shooting-star ${2 + i * 0.5}s linear ${i * 4}s infinite`,
            }}
          />
        ))}

        {/* Subtle Milky Way Effect */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(139, 92, 246, 0.1) 50%, rgba(59, 130, 246, 0.15) 60%, transparent 70%)',
            transform: 'rotate(-15deg) scale(1.5)',
          }}
        />

        {/* Bottom Gradient for Depth */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.6), transparent)',
          }}
        />
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes twinkle-star {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes shooting-star {
          0% {
            transform: translate(0, 0) rotate(-45deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translate(300px, 300px) rotate(-45deg);
            opacity: 0;
          }
        }

        /* Light mode - daytime sky */
        .light .fixed.-z-10 > div:first-child {
          background: linear-gradient(to bottom, #87ceeb 0%, #b0d4f1 50%, #e0f2fe 100%) !important;
        }

        .light .fixed.-z-10 .absolute.inset-0 > div {
          opacity: 0.2;
        }

        .light .fixed.-z-10 .bg-white {
          opacity: 0.4;
        }
      `}</style>
    </>
  );
};
