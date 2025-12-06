import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const updateMousePosition = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animateCursor = () => {
      // Faster, smoother interpolation - macOS style
      const ease = 0.25;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      
      setMousePosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    animationFrameId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot - macOS style */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          scale: {
            type: 'spring',
            stiffness: 400,
            damping: 25,
          },
        }}
      >
        <div 
          className="w-2 h-2 rounded-full"
          style={{
            background: 'var(--accent-blue)',
            boxShadow: '0 0 8px var(--accent-blue)',
          }}
        />
      </motion.div>

      {/* Outer ring - subtle */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          width: '32px',
          height: '32px',
          border: '1.5px solid var(--accent-blue)',
          opacity: 0.3,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{
          scale: {
            type: 'spring',
            stiffness: 300,
            damping: 25,
          },
          opacity: {
            duration: 0.2,
          },
        }}
      />

      {/* Subtle glow effect - professional */}
      <div
        className="fixed pointer-events-none z-[9997] transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(0, 122, 255, 0.08) 0%, rgba(0, 122, 255, 0.03) 40%, transparent 70%)',
          opacity: 0.6,
        }}
      />
    </>
  );
};
