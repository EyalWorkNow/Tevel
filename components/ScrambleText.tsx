
import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
}

const CYBER_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
const HEBREW_CHARS = 'אבגדהוזחטיכלמנסעפצקרשת0123456789!@#$%^&*';

const ScrambleText: React.FC<ScrambleTextProps> = ({ 
  text, 
  className = "",
  scrambleSpeed = 30
}) => {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Determine character pool based on input language
    const isHebrew = /[\u0590-\u05FF]/.test(text);
    const pool = isHebrew ? HEBREW_CHARS : CYBER_CHARS;

    let interval: any;
    let iteration = 0;
    
    const startScramble = () => {
        clearInterval(interval);
        iteration = 0;
        
        interval = setInterval(() => {
          setDisplayText(
            text
              .split("")
              .map((char, index) => {
                if (index < iteration) {
                  return text[index];
                }
                // Random character from pool
                return pool[Math.floor(Math.random() * pool.length)];
              })
              .join("")
          );
          
          if (iteration >= text.length) { 
            clearInterval(interval);
          }
          
          iteration += 1 / 3; // Controls how fast the real text is revealed
        }, scrambleSpeed);
    };

    if (isInView || isHovered) {
        startScramble();
    }

    return () => clearInterval(interval);
  }, [text, isInView, isHovered, scrambleSpeed]);

  return (
    <span 
        ref={ref} 
        className={`${className} cursor-default`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
