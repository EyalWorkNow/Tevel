import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', key: 'hero' },
  { id: 'dashboard', key: 'dashboard' },
  { id: 'problem', key: 'problem' },
  { id: 'comparison', key: 'comparison' },
  { id: 'solution', key: 'solution' },
  { id: 'usecases', key: 'usecases' },
  { id: 'market', key: 'market' },
  { id: 'contact', key: 'contact' },
];

interface SideNavProps {
  labels: Record<string, string>;
  isRtl: boolean;
}

const SideNav: React.FC<SideNavProps> = ({ labels, isRtl }) => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // Focus on center of screen
        threshold: 0
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: isRtl ? -20 : 20 },
    visible: {
      opacity: 1, x: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6 ${isRtl ? 'left-8' : 'right-8'}`}
    >
      {sections.map((section, index) => {
        const isActive = activeSection === section.id;
        const isLast = index === sections.length - 1;

        return (
          <motion.button
            key={section.id}
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
            onClick={() => scrollToSection(section.id)}
            className={`group flex items-center gap-4 relative transition-all duration-300 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}
            aria-label={`Scroll to ${section.key}`}
          >
            {/* Label - Only visible on hover or if it's the specific "Execute" style requested */}
            <span
              className={`
                font-mono text-sm tracking-widest transition-all duration-300 absolute whitespace-nowrap
                ${isRtl ? 'left-8 origin-left' : 'right-8 origin-right'}
                ${isLast && isActive
                  ? 'opacity-100 translate-x-0 text-emerald-400 font-bold'
                  : 'opacity-0 scale-90 text-slate-500 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0'
                }
                ${isActive && !isLast ? 'text-emerald-400' : ''}
              `}
            >
              {isLast ? (isRtl ? 'ביצוע' : 'Execute') : (labels[section.key] || section.key)}
            </span>

            {/* The Dot Indicator */}
            <div
              className={`
                transition-all duration-500 rounded-full border border-slate-700
                ${isActive
                  ? 'bg-emerald-500 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]'
                  : 'bg-transparent hover:border-emerald-500/50 hover:bg-emerald-500/20'
                }
                ${isLast && isActive ? 'w-4 h-4' : 'w-3 h-3'}
              `}
            />
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default SideNav;
