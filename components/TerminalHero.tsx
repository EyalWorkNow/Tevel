
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalHeroProps {
  prefix: string;
}

const TerminalHero: React.FC<TerminalHeroProps> = ({ prefix }) => {
  const [text, setText] = useState('');
  const fullText = prefix;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="font-mono text-emerald-500 text-lg md:text-xl bg-black/80 border border-emerald-900/50 p-4 rounded-lg inline-block shadow-[0_0_20px_rgba(16,185,129,0.2)] mb-8">
      <span className="mr-2 text-slate-500">{'>'}</span>
      {text}
      <motion.span 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2.5 h-5 bg-emerald-500 ml-1 align-middle"
      />
    </div>
  );
};

export default TerminalHero;
