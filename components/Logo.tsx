
import React from 'react';

export const TevelLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path 
        d="M50 15V85M15 50H85M25.25 25.25L74.75 74.75M25.25 74.75L74.75 25.25" 
        stroke="#10b981" 
        strokeWidth="12" 
        strokeLinecap="round" 
      />
    </svg>
  );
};
