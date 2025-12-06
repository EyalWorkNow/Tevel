
import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map the spring value (0 to 1) to a percentage for the head position
  const topPos = useTransform(scaleY, (v) => `${v * 100}%`);

  return (
    <div className="fixed top-0 left-6 md:left-1/2 md:-translate-x-1/2 w-px h-full z-0 pointer-events-none hidden md:block">
      {/* Background Track */}
      <div className="absolute inset-0 bg-slate-800/30 w-full h-full"></div>
      
      {/* Lit Path - The growing green line */}
      <motion.div 
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-500 via-teal-400 to-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.6)]"
        style={{ height: "100%", scaleY, transformOrigin: "top" }}
      />
      
      {/* Moving Head/Spark - Follows the tip */}
      <motion.div 
        className="absolute w-1.5 h-16 bg-gradient-to-b from-white via-white to-transparent blur-[2px] rounded-full -left-[1px]"
        style={{ 
          top: topPos, 
          y: "-100%", // Anchors the bottom of the glow to the tip
        }} 
      />
      
      {/* Intense Dot at the tip */}
      <motion.div 
        className="absolute w-3 h-3 bg-white blur-sm rounded-full -left-[5px]"
        style={{ 
          top: topPos, 
          y: "-50%", // Centers the dot on the tip
        }} 
      />
    </div>
  );
};

export default ScrollProgress;
