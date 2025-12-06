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
      // Smooth interpolation
      const ease = 0.15;
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
      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          scale: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
          },
        }}
      >
        <div className="w-3 h-3 bg-cyan-400 rounded-full" />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] border-2 border-purple-400 rounded-full mix-blend-difference"
        style={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          width: '40px',
          height: '40px',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          scale: {
            type: 'spring',
            stiffness: 200,
            damping: 20,
          },
        }}
      />

      {/* Spotlight effect */}
      <div
        className="fixed pointer-events-none z-[9997] opacity-30 transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 70%)',
        }}
      />
    </>
  );
};
