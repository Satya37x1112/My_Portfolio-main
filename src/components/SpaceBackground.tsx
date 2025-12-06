import React, { useEffect, useState } from 'react';

export const SpaceBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate random stars (subtle, lightweight)
  const generateStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 0.6,
      animationDelay: Math.random() * 4,
      animationDuration: Math.random() * 4 + 2,
    }));
  };

  const stars = generateStars(220);

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        {/* Background image (user-supplied) with gradient fallback */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/space-screenshot.png'), radial-gradient(ellipse at top, #0b1630 0%, #071026 40%, #02040a 100%)",
            backgroundSize: 'cover, cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            filter: 'saturate(1.05) contrast(1.02)',
          }}
        />

        {/* Dim overlay to ensure contrast for content */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.2))' }}
        />

        {/* Subtle Milky Way band to add interest (very faint) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 30%, rgba(120, 90, 230, 0.06) 45%, rgba(70, 130, 180, 0.06) 55%, transparent 70%)',
            transform: 'rotate(-12deg) scale(1.3)',
            opacity: 0.9,
          }}
        />

        {/* Stars layer */}
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,0.8)`,
                opacity: 0.9,
                animation: `twinkle-star ${star.animationDuration}s ease-in-out ${star.animationDelay}s infinite`,
                transformOrigin: 'center',
              }}
            />
          ))}
        </div>

        {/* A few randomized shooting stars for elegance */}
        {[0, 1, 2].map((i) => (
          <div
            key={`shoot-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
            style={{
              top: `${8 + i * 26}%`,
              left: `${6 + i * 28}%`,
              boxShadow: '0 0 8px 2px rgba(255,255,255,0.95)',
              animation: `shooting-star ${2.8 + i * 0.6}s linear ${i * 4}s infinite`,
              opacity: 0.95,
            }}
          />
        ))}

        {/* Soft bottom vignette to ground the layout */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
        />
      </div>

      <style>{`
        @keyframes twinkle-star {
          0%,100% { opacity: 0.25; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.25); }
        }

        @keyframes shooting-star {
          0% { transform: translate(0,0) rotate(-45deg); opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate(350px, 350px) rotate(-45deg); opacity: 0; }
        }

        /* Light mode subtle adjustments */
        .light .fixed.-z-10 > div:first-child {
          background-image: url('/space-screenshot.png'), linear-gradient(to bottom, #e0f2fe 0%, #f0f9ff 60%, #ffffff 100%);
          background-blend-mode: overlay;
          filter: brightness(1.1) saturate(0.8);
        }

        .light .fixed.-z-10 .absolute.inset-0 { 
          opacity: 0.15; 
        }

        .light .fixed.-z-10 .bg-white {
          opacity: 0.3;
        }

        /* Ensure light mode has brighter, more visible background */
        .light .fixed.-z-10 > div:nth-child(2) {
          background: linear-gradient(to top, rgba(255,255,255,0.4), rgba(255,255,255,0.1)) !important;
        }

      `}</style>
    </>
  );
};
