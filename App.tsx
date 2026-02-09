
// Force Re-Compile v2
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import {
  Globe,
  Sparkles,
  Zap,
  Database,
  Share2,
  Layers,
  ChevronDown,
  ChevronUp,
  FileText,
  UserCheck,
  BadgeCheck,
  TrendingUp,
  PieChart,
  Target,
  Shield,
  Search,
  Users,
  ArrowUpRight,
  Activity,
  Lock,
  Cpu,
  Loader2,
  Compass,
  Combine,
  CheckCircle2,
  X as XIcon,
  Terminal,
  Scan,
  ZapOff,
  Crosshair
} from 'lucide-react';

import NetworkBackground from './components/NetworkBackground';
import MobileNav from './components/MobileNav';
import Counter from './components/Counter';
import DashboardMockup from './components/DashboardMockup';
import { TevelLogo } from './components/Logo';
import GlitchText from './components/GlitchText';
import ScrambleText from './components/ScrambleText';
import ScrollProgress from './components/ScrollProgress';
import SideNav from './components/SideNav';
import ComparisonTable from './components/ComparisonTable';

import ChaosContextSlider from './components/ChaosContextSlider';
import TerminalContact from './components/TerminalContact';
import UseCaseCarousel from './components/UseCaseCarousel';
import { content } from './content';

// --- Animation Components ---

const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: false, margin: "-10%" }}
    transition={{ duration: 1.0, delay, ease: [0.25, 0.4, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHeading: React.FC<{ title: string; subtitle: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-12 md:mb-20 ${align === 'center' ? 'text-center' : 'text-left'} max-w-4xl mx-auto px-4`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight text-white">
        {title}
      </h2>
    </motion.div>
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: 80, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={`h-1 bg-emerald-500 mb-6 md:mb-8 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}
    />
    <ScrollReveal delay={0.4}>
      <p className="text-lg md:text-2xl text-slate-400 font-light leading-relaxed">
        {subtitle}
      </p>
    </ScrollReveal>
  </div>
);

// --- Sub-Components ---

const StatItem: React.FC<{ value: number; suffix: string; label: string; delay: number }> = ({ value, suffix, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false }}
    transition={{ delay, duration: 0.6, type: "spring" }}
    className="flex flex-col items-center justify-center p-6 md:p-8 text-center relative z-10 group"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-slate-800/0 to-slate-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="text-5xl md:text-7xl font-black text-white mb-4 font-mono tracking-tighter drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
      <Counter from={0} to={value} suffix={suffix} />
    </div>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 48 }}
      viewport={{ once: false }}
      transition={{ delay: delay + 0.5, duration: 0.8 }}
      className="h-1 bg-emerald-500 rounded-full mb-4 opacity-50 mx-auto"
    ></motion.div>
    <p className="text-slate-400 font-light text-base md:text-lg leading-relaxed max-w-[200px]">{label}</p>
  </motion.div>
);

// --- Typewriter Effect Component for Tooltips ---
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
    }, 15); // Speed of typing
    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}</span>;
};

// --- Solution Engine Components ---

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

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lang, setLang] = useState<'en' | 'he'>('en');
  const [isAccessing, setIsAccessing] = useState(false); // State for button animation
  const marketRef = useRef(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Hero 3D Tilt Logic
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useHeroTilt();

  // Adjusted scroll parallax for the market number
  const { scrollYProgress: marketScroll } = useScroll({ target: marketRef, offset: ["start end", "center center"] });
  const marketScale = useTransform(marketScroll, [0, 1], [0.8, 1]);
  const marketOpacity = useTransform(marketScroll, [0, 0.5], [0, 1]);

  // Safety fallback for translation content
  const t = content[lang] || content['en'];
  const isRtl = lang === 'he';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'he' : 'en');
  };

  const handleRequestAccess = () => {
    if (isAccessing) return;
    setIsAccessing(true);

    // Simulate system initialization
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Reset state after scrolling
      setTimeout(() => {
        setIsAccessing(false);
      }, 1000);
    }, 1200);
  };

  // Icon mapping for audience
  const getAudienceIcon = (index: number) => {
    const icons = [Shield, Lock, Target, Database];
    const Icon = icons[index % icons.length];
    return <Icon size={20} className="group-hover:rotate-90 transition-transform duration-500 ease-in-out" />;
  }

  return (
    <div className={`min-h-screen text-white relative selection:bg-emerald-500/30 ${isRtl ? 'font-hebrew' : ''} overflow-x-hidden bg-[#0F1115]`}>
      <NetworkBackground />

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-px h-full z-0 pointer-events-none hidden md:block opacity-20">
        <ScrollProgress />
      </div>

      {/* Side Nav - Always Visible on Large Screens */}
      <SideNav labels={t.sidenav} isRtl={isRtl} />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-4 md:top-6 left-1/2 z-50 w-[95%] md:w-[90%] max-w-4xl bg-[#0F1115]/80 backdrop-blur-xl rounded-full border border-white/5 shadow-2xl shadow-black/50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center transition-all duration-300"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-900/20 p-2 rounded-full border border-emerald-500/20">
            <TevelLogo className="w-5 h-5 md:w-6 md:h-6 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-black tracking-[0.2em] text-white leading-none">TEVEL</span>
            <span className="text-[8px] md:text-[10px] tracking-widest text-emerald-500 font-bold uppercase mt-1 opacity-80 hidden xs:block">{t.nav.subtitle}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={toggleLanguage}
            className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono border border-white/10 rounded-full px-3 py-1.5 md:px-4 md:py-2 hover:border-emerald-500/50 hover:bg-emerald-500/10 active:scale-95 duration-200"
          >
            <Globe size={14} />
            <span className="font-bold">{lang.toUpperCase()}</span>
          </button>

          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={scrollToTop}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500 text-black flex items-center justify-center hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all"
              >
                <ChevronUp size={18} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section - UPDATED WITH 3D TILT */}
      <header id="hero"
        className="relative pt-24 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden perspective-2000"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Cinematic Background Glows */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-emerald-500/5 rounded-full blur-[80px] md:blur-[120px] -z-10"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0F1115] to-transparent z-0"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto relative z-10 flex flex-col items-center w-full"
        >


          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-8 leading-[0.95] md:leading-[0.9] tracking-tighter w-full" style={{ transform: "translateZ(80px)" }}>
            <ScrollReveal className="block pb-2">
              <ScrambleText
                text={t.hero.titleMain.split(' ')[0]}
                className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
              />
            </ScrollReveal>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative inline-block"
            >
              {/* Fixed gradient text rendering issue by removing conflicting drop-shadow from the clipped element */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-cyan-300">
                {t.hero.titleSub}
              </span>
              {/* Added separate glow layer */}
              <div className="absolute inset-0 bg-emerald-400/20 blur-xl -z-10 opacity-50"></div>
            </motion.div>
          </h1>

          <div style={{ transform: "translateZ(40px)" }}>
            <ScrollReveal delay={0.3}>
              <p className="text-lg md:text-3xl text-slate-300/80 max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed font-light tracking-wide px-2">
                {t.hero.subtitle}
              </p>
            </ScrollReveal>
          </div>

          <div style={{ transform: "translateZ(60px)" }}>
            <ScrollReveal delay={0.5} className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg mx-auto mt-4 md:mt-8">
              <button
                onClick={handleRequestAccess}
                disabled={isAccessing}
                className={`
                        group relative h-14 md:h-20 px-8 md:px-12 rounded-lg 
                        border font-bold text-lg md:text-xl overflow-hidden transition-all duration-300 
                        active:scale-95 flex items-center justify-center gap-4 backdrop-blur-md w-full sm:w-auto
                        ${isAccessing
                    ? 'bg-emerald-500 border-emerald-400 text-black scale-105 shadow-[0_0_50px_rgba(16,185,129,0.6)] cursor-wait'
                    : 'bg-emerald-500/10 border-emerald-500/50 text-white hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:scale-105'
                  }
                    `}
              >
                {/* Shimmer Effect Layer */}
                {!isAccessing && (
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 pointer-events-none" />
                )}

                {/* Pulse Ring when Accessing */}
                {isAccessing && (
                  <span className="absolute inset-0 rounded-lg border-2 border-emerald-400 animate-ping opacity-75"></span>
                )}

                {/* Corner Brackets (Tactical UI) */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                <div className="relative z-20 flex items-center justify-center gap-3">
                  {isAccessing ? (
                    <>
                      <Loader2 size={24} className="animate-spin text-black" />
                      <span className="tracking-[0.1em] uppercase font-mono">INITIALIZING UPLINK...</span>
                    </>
                  ) : (
                    <>
                      <Zap size={20} className="text-emerald-400 transition-transform duration-300 group-hover:fill-emerald-400 md:w-6 md:h-6" />
                      <span className="tracking-[0.1em] uppercase">{t.hero.ctaDemo}</span>
                      <ArrowUpRight size={18} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all md:w-5 md:h-5" />
                    </>
                  )}
                </div>
              </button>
            </ScrollReveal>
          </div>
        </motion.div>

        {/* Mobile Scroll Hint */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 md:hidden text-emerald-500/50 animate-bounce"
        >
          <ChevronDown size={24} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hidden md:block"
        >
          <ChevronDown size={40} strokeWidth={1} />
        </motion.div>
      </header>

      {/* Dashboard Section - Overlapping Hero */}
      <section id="dashboard" className="relative z-20 -mt-20 md:-mt-32 mb-20 md:mb-32 px-2 md:px-4 pointer-events-none md:pointer-events-auto">
        <DashboardMockup t={t.dashboard} isRtl={isRtl} />
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 md:py-40 px-4 md:px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-500/5 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-emerald-500/5 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            title={t.problem.title}
            subtitle={t.problem.description}
          />

          <ScrollReveal delay={0.2} className="my-12 md:my-24">
            <ChaosContextSlider t={t.chaos} isRtl={isRtl} />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 md:mt-32 divide-y md:divide-y-0 md:divide-x divide-white/5 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-sm">
            {t.problem.stats.map((stat: any, idx: number) => (
              <StatItem key={idx} value={stat.value} suffix={stat.suffix} label={stat.label} delay={0.1 * (idx + 1)} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="mt-16 md:mt-24 text-center p-1 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0"
          >
            <p className="text-red-200 font-light tracking-wide text-lg md:text-xl py-4">
              {t.problem.result}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 md:py-40 px-4 md:px-6 bg-[#0a0c10] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20 max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6">{t.comparison.title}</h2>
              <p className="text-emerald-400 font-mono mb-4 md:mb-8 text-base md:text-lg">{t.comparison.subtitle}</p>
              <p className="text-slate-400 text-lg md:text-xl font-light">{t.comparison.description}</p>
            </ScrollReveal>
          </div>

          <ComparisonTable data={t.comparison} isRtl={isRtl} />
        </div>
      </section>

      {/* Solution Architecture Section */}
      <section id="solution" className="py-20 md:py-40 px-4 md:px-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-[#0F1115] to-[#0F1115] -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 relative z-10">
          <div className="relative z-20 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="inline-flex items-center gap-3 bg-white/5 text-emerald-400 px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-bold mb-6 md:mb-8 border border-white/10 mx-auto backdrop-blur-md"
            >
              <Layers size={14} className="md:w-4 md:h-4" />
              <span className="tracking-widest uppercase">{t.solution.badge}</span>
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-10 leading-none">
              <GlitchText text={t.solution.titleGlitch} as="span" className="text-white block mb-2" />
              <ScrollReveal delay={0.2}>
                <span className="text-slate-600 block text-3xl md:text-6xl">{t.solution.titleSub}</span>
              </ScrollReveal>
            </h2>
            <ScrollReveal delay={0.3}>
              <p className="text-lg md:text-xl text-slate-300 mb-8 md:mb-12 font-light max-w-2xl mx-auto px-4">
                {t.solution.description1} <span className="text-emerald-400 font-normal">{t.solution.descriptionHighlight}</span> {t.solution.description2}
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 text-left rtl:text-right">
              {t.solution.cards.map((card: any, i: number) => (
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  key={i}
                  className={`group p-5 md:p-6 bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl border border-white/5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30`}
                >
                  <div className="text-emerald-400 mb-4 bg-emerald-500/10 w-fit p-3 rounded-lg group-hover:scale-110 transition-transform">
                    {i === 0 ? <Database size={24} /> : i === 1 ? <Sparkles size={24} /> : i === 2 ? <UserCheck size={24} /> : <FileText size={24} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">{card.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* New Interactive Orbital Engine with Tooltips */}
          <SolutionEngine t={t} />

        </div>
      </section>

      {/* Use Cases Section - New Infinite Carousel */}
      <section id="usecases" className="py-16 md:py-20 relative">
        <div className="w-full">
          <ScrollReveal>
            <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 text-center">
              <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 text-white tracking-tight">{t.useCases.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                {isRtl ? 'חקור מגוון תרחישי שימוש מבצעיים המתאימים למערכת' : 'Explore diverse operational scenarios suitable for the system'}
              </p>
            </div>
          </ScrollReveal>

          {/* The Infinite Carousel Component */}
          <UseCaseCarousel cases={t.useCases.cases} isRtl={isRtl} />

        </div>
      </section>

      {/* Market / Audience - PHENOMENAL UI REDESIGN (PILL STYLE) */}
      <section id="market" ref={marketRef} className="py-20 md:py-40 px-4 md:px-6 bg-slate-950/50 border-y border-white/5 relative overflow-hidden group/market">

        {/* Animated Globe Background */}
        <div className="absolute top-1/2 -right-1/4 w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] rounded-full -translate-y-1/2 opacity-10 pointer-events-none border border-emerald-500/20">
          <div className="absolute inset-0 rounded-full border border-dashed border-emerald-500/30 animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute inset-10 rounded-full border border-dotted border-white/10 animate-[spin_40s_linear_infinite_reverse]"></div>
          {/* Simple Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:100px_100px] rounded-full mask-image:radial-gradient(circle,black,transparent)"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115] via-[#0F1115]/90 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center">

            {/* Left: The Data Hook */}
            <div className={`lg:col-span-5 text-center lg:text-left ${isRtl ? 'lg:order-2 lg:text-right' : 'lg:order-1'}`}>
              <motion.div
                style={{ scale: marketScale, opacity: marketOpacity }}
                className="relative"
              >
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm">
                  <Globe size={14} className="text-emerald-400" />
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">Total Addressable Market</span>
                </div>

                <div className="relative inline-block">
                  <h2 className="text-[100px] md:text-[160px] font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-600 drop-shadow-2xl font-mono">
                    <Counter from={0} to={23} suffix="B" />
                  </h2>
                  {/* Decorative Lines */}
                  <div className="absolute -top-4 -right-4 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-emerald-500/50"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-emerald-500/50"></div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col gap-1 mt-6"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{t.market.title}</h3>
                  <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                    {t.market.desc}
                  </p>
                </motion.div>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <div className="px-5 py-3 bg-emerald-500 text-black font-bold rounded-lg flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] w-full sm:w-auto justify-center">
                    <TrendingUp size={20} />
                    <span className="font-mono">CAGR 22.4%</span>
                  </div>
                  <div className="px-5 py-3 border border-white/10 rounded-lg text-slate-400 font-mono text-xs flex items-center gap-2 w-full sm:w-auto justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    YEAR 2024-2030
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: The Minimalist PILL Tags */}
            <div className={`lg:col-span-7 flex flex-wrap content-center justify-center gap-3 md:gap-4 ${isRtl ? 'lg:order-1' : 'lg:order-2'}`}>
              {t.market.audiences.map((aud: string, i: number) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 + (i * 0.1), ease: "backOut" }}
                    className={`
                                    group relative flex items-center justify-between gap-4 md:gap-6 pl-6 pr-3 py-2 md:py-3 
                                    bg-[#1a1d24] border border-white/5 rounded-full 
                                    hover:border-emerald-500/50 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]
                                    transition-all duration-300 cursor-default select-none w-full sm:w-auto
                                    ${isRtl ? 'flex-row-reverse pl-3 pr-6' : ''}
                                `}
                  >
                    <span className="text-lg md:text-xl font-bold text-slate-300 group-hover:text-white transition-colors">
                      {aud}
                    </span>

                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all shrink-0">
                      {getAudienceIcon(i)}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 md:py-32 px-4 md:px-6 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center opacity-20 pointer-events-none">
          <div className="w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] border border-emerald-900/40 rounded-full animate-[spin_40s_linear_infinite] border-dashed"></div>
          <div className="absolute w-[400px] md:w-[800px] h-[400px] md:h-[800px] border border-emerald-900/20 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <TevelLogo className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 md:mb-12 text-emerald-500" />

          <ScrollReveal>
            <h2 className="text-3xl md:text-6xl font-black mb-10 md:mb-16 tracking-tight">
              {t.footer.title}
            </h2>
          </ScrollReveal>

          <TerminalContact t={t.footer} isRtl={isRtl} />

          <div className="mt-16 md:mt-24 pt-10 border-t border-white/10 flex flex-col items-center text-slate-500 font-mono text-[10px] md:text-xs tracking-widest uppercase">
            <p>© 2025 TEVEL Context Engine. All Systems Operational.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
