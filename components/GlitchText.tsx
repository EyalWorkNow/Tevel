
import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div';
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Tag = 'span' }) => {
  return (
    <Tag className={`glitch-wrapper ${className}`}>
      <span className="glitch relative z-10 block" data-text={text}>
        {text}
      </span>
    </Tag>
  );
};

export default GlitchText;
