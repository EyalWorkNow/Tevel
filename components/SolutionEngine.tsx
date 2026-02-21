import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Database, Share2, FileText, Compass, Combine, CheckCircle2, Activity, Crosshair } from 'lucide-react';
import { TevelLogo } from './Logo';
import GlitchText from './GlitchText';

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    setDisplayedText('');
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 15);
    return () => clearInterval(intervalId);
  }, [text]);
  return <span>{displayedText}</span>;
};


const SolutionEngine: React.FC<{ t: any }> = ({ t }) => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    if (!isMobile) setActiveNode(null);
  };

  const nodes = [
    { id: 0, key: 'rawData', icon: <Database className="w-5 h-5 md:w-6 md:h-6" />, angle: 270 }, // Top
    { id: 1, key: 'enrichment', icon: <Share2 className="w-5 h-5 md:w-6 md:h-6" />, angle: 330 }, // Top Right
    { id: 2, key: 'context', icon: <FileText className="w-5 h-5 md:w-6 md:h-6" />, angle: 30 },  // Bottom Right
    { id: 3, key: 'guidance', icon: <Compass className="w-5 h-5 md:w-6 md:h-6" />, angle: 90 },  // Bottom
    { id: 4, key: 'fusion', icon: <Combine className="w-5 h-5 md:w-6 md:h-6" />, angle: 150 }, // Bottom Left
    { id: 5, key: 'insight', icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />, angle: 210 }  // Top Left
  ];

  // Calculate position based on angle and radius
  const getPosition = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: 50 + radius * Math.cos(radian), // 50% is center
      y: 50 + radius * Math.sin(radian)
    };
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-8 md:my-20 select-none">

      {/* --- RADAR / ENGINE AREA --- */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-[340px] md:max-w-[500px] aspect-square flex-shrink-0 perspective-1000"
      >

        {/* Background Radial Gradients & Rings - Darker aesthetic */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform-style-3d">
          <div className="absolute w-[90%] h-[90%] rounded-full border border-emerald-500/5 bg-[#0a0c10]/50 backdrop-blur-sm"></div>
          <div className="absolute w-[65%] h-[65%] rounded-full border border-dashed border-emerald-500/10 animate-[spin_120s_linear_infinite]"></div>
          <div className="absolute w-[66%] h-[66%] rounded-full border-2 border-transparent border-t-emerald-500/20 border-b-emerald-500/20 animate-[spin_20s_linear_infinite_reverse]"></div>
          {/* Glowing Center Area */}
          <div className="absolute w-[30%] h-[30%] bg-emerald-500/10 blur-[50px] rounded-full"></div>
        </div>

        {/* Central Interactive HUB with 3D Tilt */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none" style={{ perspective: "1000px" }}>
          <motion.div
            style={{
              rotateX: isMobile ? 0 : rotateX,
              rotateY: isMobile ? 0 : rotateY,
              transformStyle: "preserve-3d"
            }}
            className="relative w-36 h-36 md:w-56 md:h-56 flex items-center justify-center cursor-pointer pointer-events-auto"
            animate={{ scale: activeNode !== null ? 1.05 : 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            {/* Core Circle */}
            <div className="absolute inset-0 rounded-full border border-emerald-500/20 bg-[#0F1115] shadow-[0_0_60px_rgba(16,185,129,0.1)] flex items-center justify-center overflow-hidden">
              {/* Inner Grid */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
            </div>

            {/* Active Reactor Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-emerald-500/50"
              animate={{
                opacity: activeNode !== null ? 1 : 0.3,
                rotate: activeNode !== null ? 360 : 0
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* DYNAMIC CENTER CONTENT */}
            <AnimatePresence mode="wait">
              {activeNode === null ? (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center text-center z-30 relative w-full h-full"
                >
                  <TevelLogo className="w-12 h-12 md:w-20 md:h-20 text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] mb-2" />
                  <h3 className="text-xl md:text-3xl font-black tracking-[0.15em] text-white">TEVEL</h3>
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse"></div>
                    <span className="font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-slate-500">
                      STANDBY
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="active"
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center text-center z-30 relative w-full h-full p-2"
                >
                  <div className="text-emerald-400 mb-2 p-2 bg-emerald-500/10 rounded-full border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                    {React.cloneElement(nodes[activeNode].icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                  <h3 className="text-sm md:text-lg font-bold tracking-wider text-white uppercase leading-tight max-w-[90%]">
                    {t.solution.nodes[nodes[activeNode].key].title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[ping_1s_infinite]"></div>
                    <span className="font-mono text-[8px] md:text-[10px] tracking-widest uppercase text-emerald-400">
                      PROCESSING
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>

        {/* Satellite Nodes */}
        <div className="absolute inset-0 w-full h-full" style={{ transformStyle: "preserve-3d" }}>
          {nodes.map((node, i) => {
            const pos = getPosition(node.angle, 42); // Radius distance
            const isActive = activeNode === i;
            const nodeData = t.solution.nodes[node.key];

            return (
              <React.Fragment key={i}>
                {/* Node Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="absolute w-12 h-12 md:w-20 md:h-20 -ml-6 -mt-6 md:-ml-10 md:-mt-10 z-40"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translateZ(20px)" }}
                >
                  {/* Interaction Hit Area */}
                  <div
                    className="absolute inset-[-24px] cursor-pointer z-50 rounded-full"
                    onMouseEnter={() => setActiveNode(i)}
                    // Note: Removed onMouseLeave here to allow the active state to persist slightly longer or be controlled by container leave
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveNode(isActive ? null : i);
                    }}
                  />

                  {/* Connection Beam (The Laser Line) */}
                  <svg className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 -z-20 pointer-events-none overflow-visible">
                    <line
                      x1="50%"
                      y1="50%"
                      x2={50 + (activeNode === i ? 0 : 0) + "%"}
                      y2={50 + (activeNode === i ? 0 : 0) + "%"}
                      transform={`translate(${(50 - pos.x) * 4}, ${(50 - pos.y) * 4})`}
                      className={`transition-all duration-300 ease-out`}
                      stroke={isActive ? '#10b981' : '#1e293b'}
                      strokeWidth={isActive ? 2 : 1}
                      strokeDasharray={isActive ? 'none' : '4 4'}
                      strokeOpacity={isActive ? 0.8 : 0.3}
                    />
                    {/* Animated Particle on Beam */}
                    {isActive && (
                      <circle r="3" fill="#34d399">
                        <animateMotion
                          dur="0.5s"
                          repeatCount="indefinite"
                          path={`M ${250 + (50 - pos.x) * 20} ${250 + (50 - pos.y) * 20} L 250 250`}
                        />
                      </circle>
                    )}
                  </svg>

                  {/* Node Icon Box */}
                  <motion.div
                    animate={isActive ? { scale: 1.15, backgroundColor: "#0f1115", borderColor: "#10b981" } : { scale: 1, backgroundColor: "#0b0d11", borderColor: "rgba(255,255,255,0.1)" }}
                    className={`
                                relative w-full h-full rounded-2xl border transition-all duration-300 flex items-center justify-center pointer-events-none
                                ${isActive ? 'shadow-[0_0_20px_rgba(16,185,129,0.4)]' : ''}
                            `}
                  >
                    <div className={`transition-colors duration-300 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`}>
                      {node.icon}
                    </div>
                  </motion.div>

                  {/* Label Under Node */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap pointer-events-none">
                    <span className={`text-[9px] md:text-[10px] font-bold tracking-widest uppercase transition-all duration-300 px-2 py-0.5 rounded ${isActive ? 'text-black bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]' : 'text-slate-500 bg-black/40'}`}>
                      {nodeData.title}
                    </span>
                  </div>

                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* --- DATA DECK (Right Side Desktop / Bottom Mobile) --- */}
      {/* Fixed height container to prevent layout jumping */}
      <div className="w-full max-w-[400px] h-[180px] md:h-[300px] relative perspective-1000">
        <AnimatePresence mode="wait">
          {activeNode !== null ? (
            <motion.div
              key="active-card"
              initial={{ opacity: 0, rotateX: -10, y: 20 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: 10, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full bg-[#0F1115]/90 border border-emerald-500/30 rounded-2xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden group"
            >
              {/* Holographic Scanning Effect */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.8)] z-10"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-4 border-b border-white/10 pb-4 relative z-20">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    {nodes[activeNode].icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl tracking-tight leading-none mb-1">
                      <GlitchText text={t.solution.nodes[nodes[activeNode].key].title} />
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] uppercase font-mono text-emerald-500/80">
                      <Activity size={10} className="animate-pulse" />
                      <span>Verified Source</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block text-[40px] font-black text-white/5 font-mono select-none">
                  0{activeNode + 1}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-20 text-slate-300 text-sm md:text-base leading-relaxed font-light">
                <TypewriterText text={t.solution.nodes[nodes[activeNode].key].desc} />
              </div>

              {/* Tech Decor */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500/50 rounded-br-lg"></div>
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500/50"></div>

            </motion.div>
          ) : (
            <motion.div
              key="idle-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col items-center justify-center text-center p-6 border border-white/5 rounded-2xl bg-white/[0.02]"
            >
              <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mb-3 animate-pulse">
                <Crosshair className="text-slate-600" />
              </div>
              <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">
                {isMobile ? 'Tap a node to analyze' : 'Hover over a node to analyze'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};


// --- Hero Section 3D Tracking Hook ---
const useHeroTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  // Rotate slightly towards mouse
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
};


// --- Main App ---

export default SolutionEngine;
