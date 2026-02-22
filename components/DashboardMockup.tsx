import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import {
    Network, Activity, ShieldAlert, Cpu, Globe, Lock, Target, AlertTriangle, FileJson, CheckCircle2, ChevronRight, Share2, ScanLine
} from 'lucide-react';

interface DashboardMockupProps {
    t: any;
    isRtl: boolean;
}

const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
};

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const pulseGlowVariants = {
    initial: { opacity: 0.4, scale: 0.95 },
    animate: {
        opacity: [0.4, 0.8, 0.4],
        scale: [0.95, 1.05, 0.95],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
};

const DashboardMockup: React.FC<DashboardMockupProps> = ({ t, isRtl }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // --- 3D Interactions ---
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 90%", "center 40%"]
    });

    // Make the initial tilt more dramatic, settling into a flat view
    const scrollRotateX = useTransform(scrollYProgress, [0, 1], [35, 0]);
    const scrollRotateZ = useTransform(scrollYProgress, [0, 1], [-5, 0]);
    const scrollScale = useTransform(scrollYProgress, [0, 1], [0.85, 1.02]);
    const scrollOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth, heavy springs for premium feel
    const mouseXSpring = useSpring(x, { stiffness: 40, damping: 25, mass: 1.5 });
    const mouseYSpring = useSpring(y, { stiffness: 40, damping: 25, mass: 1.5 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    // Parallax elements
    const parallaxX = useTransform(mouseXSpring, [-0.5, 0.5], [-25, 25]);
    const parallaxY = useTransform(mouseYSpring, [-0.5, 0.5], [-25, 25]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current || window.innerWidth < 768) return;
        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set((mouseX / width) - 0.5);
        y.set((mouseY / height) - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // --- State for Animations ---
    const [networkLoad, setNetworkLoad] = useState(45);
    const [cpuLoad, setCpuLoad] = useState(32);
    const [lines, setLines] = useState<any[]>([
        { type: 'intercept', src: 'SAT_UPLINK_04', status: 'DECRYPTING', color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
        { type: 'log', src: 'DB_ACCESS_ROOT', status: 'AUTHORIZED', color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
        { type: 'scan', src: 'PORT_443_HTTPS', status: 'SECURE', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
        { type: 'alert', src: 'IP_BLACKLIST_MATCH', status: 'BLOCKED', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/30' },
        { type: 'data', src: 'PACKET_DUMP_88', status: 'PARSED', color: 'text-slate-400', bg: 'bg-white/5', border: 'border-white/10' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setNetworkLoad(prev => Math.max(10, Math.min(95, prev + (Math.random() * 20 - 10))));
            setCpuLoad(prev => Math.max(15, Math.min(80, prev + (Math.random() * 10 - 5))));

            // Randomly update the first line to simulate live data
            if (Math.random() > 0.7) {
                setLines(prev => {
                    const newLines = [...prev];
                    const types = ['intercept', 'scan', 'data', 'log'];
                    const statuses = ['DECRYPT', 'ANALYZING', 'LINKED', 'ACTIVE'];
                    const colors = ['text-emerald-500', 'text-blue-500', 'text-amber-500', 'text-fuchsia-500'];
                    const bgs = ['bg-emerald-500/10', 'bg-blue-500/10', 'bg-amber-500/10', 'bg-fuchsia-500/10'];
                    const borders = ['border-emerald-500/30', 'border-blue-500/30', 'border-amber-500/30', 'border-fuchsia-500/30'];

                    const randIdx = Math.floor(Math.random() * types.length);
                    newLines[0] = {
                        type: types[randIdx],
                        src: `NODE_${Math.floor(Math.random() * 9999)}`,
                        status: statuses[randIdx],
                        color: colors[randIdx],
                        bg: bgs[randIdx],
                        border: borders[randIdx]
                    };
                    return newLines;
                });
            }
        }, 1500);
        return () => clearInterval(interval);
    }, []);
    // --- Stagger Grid Variants ---
    const gridContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4
            }
        }
    };

    const gridItemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    // --- Render ---
    return (
        <div
            ref={containerRef}
            className="relative perspective-container w-full max-w-[1600px] mx-auto px-4 lg:px-12 py-12 md:py-24"
            style={{ perspective: '3000px' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            dir={isRtl ? 'rtl' : 'ltr'}
        >
            <motion.div
                style={{
                    rotateX: scrollRotateX,
                    rotateZ: scrollRotateZ,
                    scale: scrollScale,
                    opacity: scrollOpacity,
                    transformStyle: "preserve-3d"
                }}
                className="relative transform-gpu flex justify-center"
            >
                <motion.div
                    style={{
                        rotateX: rotateX,
                        rotateY: rotateY,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative w-full bg-[#030406]/80 backdrop-blur-3xl rounded-[2rem] md:rounded-[2.5rem] overflow-hidden 
                               shadow-[0_0_100px_rgba(16,185,129,0.1),inset_0_0_80px_rgba(0,0,0,0.8)] 
                               border border-white/10 ring-1 ring-emerald-500/10 aspect-[3/4] md:aspect-[21/9] transform-gpu flex flex-col"
                >
                    {/* HOLOGRAPHIC CHASSIS LAYER */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        {/* High-res Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                        {/* Deep Vignette */}
                        <div className="absolute inset-0 bg-radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.95)_100%)"></div>
                        {/* Premium Cinematic Glass Glare */}
                        <div className="absolute top-0 left-0 w-[150%] h-[150%] -rotate-45 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
                        {/* Dynamic Green Glow from Bottom */}
                        <motion.div variants={pulseGlowVariants} initial="initial" animate="animate" className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-emerald-500/15 blur-[120px] rounded-[100%] pointer-events-none"></motion.div>
                    </div>

                    {/* --- FLOATING TOP HUD BAR --- */}
                    <div className="relative z-50 h-14 md:h-16 mx-4 md:mx-6 mt-4 md:mt-6 mb-2 rounded-2xl bg-[#0a0c10]/60 border border-white/10 backdrop-blur-xl flex items-center justify-between px-4 md:px-8 shadow-2xl">
                        {/* System Status - Left */}
                        <div className="flex items-center gap-4 md:gap-8">
                            <div className="flex items-center gap-3">
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute w-3 h-3 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
                                    <div className="relative w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
                                </div>
                                <span className="text-[10px] md:text-xs font-mono font-bold text-emerald-400 tracking-[0.2em] uppercase">SYS.ONLINE</span>
                            </div>

                            <div className="hidden lg:flex items-center gap-6 text-[10px] font-mono text-slate-400">
                                <div className="flex items-center gap-2 group cursor-default">
                                    <Cpu size={14} className="text-emerald-500/60 group-hover:text-emerald-400 transition-colors" />
                                    <span>CPU: {cpuLoad.toFixed(0)}%</span>
                                    <div className="w-16 h-1.5 bg-black/60 rounded-full overflow-hidden shadow-inner border border-white/5">
                                        <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-500" style={{ width: `${cpuLoad}%` }}></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 group cursor-default">
                                    <Network size={14} className="text-blue-500/60 group-hover:text-blue-400 transition-colors" />
                                    <span>NET: {networkLoad.toFixed(0)} I/O</span>
                                    <div className="w-16 h-1.5 bg-black/60 rounded-full overflow-hidden shadow-inner border border-white/5">
                                        <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500" style={{ width: `${networkLoad}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center Logo/Title Shield */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-3 px-6 py-2 rounded-xl bg-black/40 border border-emerald-500/20 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                            <ShieldAlert size={16} className="text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,1)]" />
                            <span className="text-[11px] font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-[0.25em] uppercase">TEVEL KERNEL 4.0</span>
                        </div>

                        {/* Right Controls */}
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 shadow-[inset_0_0_10px_rgba(239,68,68,0.2)]">
                                <Lock size={12} className="animate-pulse" />
                                <span className="text-[9px] font-bold uppercase tracking-widest">ENCRYPTED</span>
                            </div>
                            <div className="text-[11px] font-mono font-medium text-slate-300 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5">
                                {new Date().toLocaleTimeString([], { hour12: false })}
                            </div>
                        </div>
                    </div>


                    {/* --- MAIN DASHBOARD GRID --- */}
                    <motion.div
                        variants={gridContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative z-40 flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-6 pb-4 md:pb-6 pt-2"
                    >

                        {/* 1. LEFT PANEL: SIGINT FEED */}
                        <motion.div variants={gridItemVariants} className="md:col-span-3 flex flex-col gap-4 group/panel">
                            <div className="flex-1 bg-black/40 border border-white/5 rounded-2xl backdrop-blur-md p-5 flex flex-col relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover/panel:-translate-y-1 transition-transform duration-500">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        <Activity size={16} className="text-emerald-400" />
                                        <h3 className="text-[11px] font-bold text-white tracking-[0.2em] uppercase">Live Stream</h3>
                                    </div>
                                    <div className="px-2 py-0.5 rounded text-[8px] font-bold font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">REC</div>
                                </div>

                                {/* Animated Data Stream */}
                                <motion.div
                                    variants={listContainerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex-1 space-y-2.5 font-mono"
                                >
                                    {lines.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            variants={listItemVariants}
                                            className="relative p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2 hover:bg-white/[0.04] hover:border-white/10 hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer group/item"
                                        >
                                            <div className="flex justify-between items-center w-full">
                                                <div className="flex items-center gap-1.5 text-[9px] text-slate-500 uppercase">
                                                    <ChevronRight size={10} className="text-emerald-500/50 group-hover/item:text-emerald-400 transition-colors" />
                                                    {item.type}
                                                </div>
                                                <span className={`text-[8px] px-1.5 py-0.5 rounded-sm font-bold ${item.color} ${item.bg} ${item.border} border`}>
                                                    {item.status}
                                                </span>
                                            </div>
                                            <div className="text-[10px] text-slate-300 group-hover/item:text-white transition-colors pl-4 border-l border-white/10 ml-1">
                                                {item.src}
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* 2. CENTER PANEL: ENTITY FUSION CORE */}
                        <motion.div variants={gridItemVariants} className="md:col-span-6 bg-black/60 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden group/center hover:-translate-y-1 transition-transform duration-500">

                            {/* Deep Map & Topographic Grid */}
                            <div className="absolute inset-0 bg-[#020202]"></div>
                            <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen saturate-0 contrast-150"></div>

                            {/* Animated Scanner Plane */}
                            <div className="absolute inset-0 z-10 perspective-[800px] overflow-hidden">
                                <motion.div
                                    className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"
                                    style={{ rotateX: "60deg", translateY: parallaxY, translateX: parallaxX }}
                                    animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                />
                            </div>

                            {/* Radial Fog */}
                            <div className="absolute inset-0 bg-radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_90%) z-20 pointer-events-none"></div>

                            {/* Center Target Hologram */}
                            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                                <motion.div
                                    style={{ x: parallaxX, y: parallaxY }}
                                    className="relative flex items-center justify-center w-full h-full"
                                >
                                    {/* Concentric Rotation Rings */}
                                    <div className="absolute w-80 h-80 rounded-full border border-emerald-500/10 border-t-emerald-500/30 animate-[spin_12s_linear_infinite]" />
                                    <div className="absolute w-64 h-64 rounded-full border border-emerald-500/10 border-b-emerald-500/40 animate-[spin_8s_linear_reverse_infinite]" />
                                    <div className="absolute w-48 h-48 rounded-full border border-dashed border-emerald-500/20 animate-[spin_20s_linear_infinite]" />

                                    {/* Target Node */}
                                    <div className="relative w-20 h-20 bg-black/80 backdrop-blur-xl rounded-2xl border border-emerald-500/40 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.4)] pointer-events-auto cursor-crosshair group/node overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover/node:opacity-100 transition-opacity"></div>
                                        <Target size={24} className="text-emerald-400 group-hover/node:scale-110 transition-transform duration-300" />
                                        <div className="absolute bottom-1 w-full text-center text-[7px] font-mono font-bold text-emerald-500 tracking-widest border-t border-emerald-500/20 bg-black/50 pt-0.5">SUBJECT_01</div>
                                    </div>

                                    {/* Data Connectors */}
                                    <svg className="absolute w-full h-full inset-0 z-[-1] overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <motion.path
                                            d="M 50 50 L 20 30"
                                            stroke="url(#gradient-line)"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeDasharray="4 4"
                                            animate={{ strokeDashoffset: [0, -20] }}
                                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                            vectorEffect="non-scaling-stroke"
                                        />
                                        <motion.path
                                            d="M 50 50 L 80 40"
                                            stroke="url(#gradient-line)"
                                            strokeWidth="2"
                                            fill="none"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                        <motion.path
                                            d="M 50 50 L 35 80"
                                            stroke="url(#gradient-line)"
                                            strokeWidth="1.5"
                                            fill="none"
                                            vectorEffect="non-scaling-stroke"
                                        />

                                        <defs>
                                            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                                                <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    {/* Connected Floating Entities */}
                                    <div className="absolute top-[30%] left-[20%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                        <div className="bg-[#050505]/90 border border-emerald-500/30 rounded-lg p-2.5 shadow-xl backdrop-blur-md flex flex-col gap-1 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer">
                                            <div className="flex items-center gap-1.5 text-emerald-400 border-b border-emerald-500/20 pb-1">
                                                <Globe size={10} />
                                                <span className="text-[9px] font-bold tracking-widest uppercase">Alias Node</span>
                                            </div>
                                            <span className="text-[8px] font-mono text-slate-300">TRK_ID: 9942</span>
                                        </div>
                                    </div>

                                    <div className="absolute top-[40%] right-[20%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                        <div className="bg-[#050505]/90 border border-blue-500/30 rounded-lg p-2.5 shadow-xl backdrop-blur-md flex flex-col gap-1 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all cursor-pointer">
                                            <div className="flex items-center gap-1.5 text-blue-400 border-b border-blue-500/20 pb-1">
                                                <Share2 size={10} />
                                                <span className="text-[9px] font-bold tracking-widest uppercase">Financial</span>
                                            </div>
                                            <span className="text-[8px] font-mono text-slate-300">ACCT_*7221</span>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-[20%] left-[35%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                        <div className="bg-[#050505]/90 border border-amber-500/30 rounded-lg p-2.5 shadow-xl backdrop-blur-md flex flex-col gap-1 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all cursor-pointer">
                                            <div className="flex items-center gap-1.5 text-amber-400 border-b border-amber-500/20 pb-1">
                                                <ScanLine size={10} />
                                                <span className="text-[9px] font-bold tracking-widest uppercase">Device</span>
                                            </div>
                                            <span className="text-[8px] font-mono text-slate-300">MAC: A2-B8-**</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Map Overlay Stats */}
                            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end z-40 pointer-events-none">
                                <div className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-3 shadow-lg">
                                    <div className="text-[9px] font-mono text-emerald-500 uppercase tracking-[0.2em] mb-1">Active Coordinates</div>
                                    <div className="text-sm font-bold text-white tracking-wider">32.0853° N, 34.7818° E</div>
                                </div>
                                <div className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-3 shadow-lg text-right">
                                    <div className="text-[9px] font-mono text-emerald-500 uppercase tracking-[0.2em] mb-1">Match Confidence</div>
                                    <div className="text-2xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">98.4%</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. RIGHT PANEL: TACTICAL LOG */}
                        <motion.div variants={gridItemVariants} className="md:col-span-3 flex flex-col gap-4 group/right">
                            <div className="flex-1 bg-black/40 border border-white/5 rounded-2xl backdrop-blur-md p-5 flex flex-col relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover/right:-translate-y-1 transition-transform duration-500">
                                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        <FileJson size={16} className="text-slate-300" />
                                        <h3 className="text-[11px] font-bold text-white tracking-[0.2em] uppercase">Tactical Log</h3>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></div>
                                </div>

                                <motion.div
                                    variants={listContainerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex-1 space-y-3"
                                >
                                    {[
                                        { title: 'Anomaly Detected', desc: 'Behavioral deviance > 2.4σ', time: '10:48', type: 'critical' },
                                        { title: 'Transaction Sync', desc: 'Offshore ledger updated.', time: '10:45', type: 'success' },
                                        { title: 'New Network MAC', desc: 'Guest subnet connection.', time: '10:42', type: 'info' }
                                    ].map((log, i) => (
                                        <motion.div
                                            key={i}
                                            variants={listItemVariants}
                                            className={`p-3 rounded-xl border relative overflow-hidden group cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ${log.type === 'critical' ? 'bg-red-500/10 border-red-500/20 hover:border-red-500/50 hover:shadow-[0_5px_15px_rgba(239,68,68,0.15)]' :
                                                log.type === 'success' ? 'bg-emerald-500/5 border-emerald-500/10 hover:border-emerald-500/30 hover:shadow-[0_5px_15px_rgba(16,185,129,0.1)]' :
                                                    'bg-white/[0.02] border-white/5 hover:border-white/20 hover:shadow-[0_5px_15px_rgba(255,255,255,0.05)]'
                                                }`}
                                        >
                                            <div className="flex justify-between items-start mb-1.5">
                                                <span className={`text-[9px] font-mono font-bold uppercase tracking-widest ${log.type === 'critical' ? 'text-red-400' : log.type === 'success' ? 'text-emerald-400' : 'text-blue-400'
                                                    }`}>{log.type}</span>
                                                <span className="text-[9px] font-mono text-slate-500">{log.time}</span>
                                            </div>
                                            <div className="text-xs font-bold text-white mb-0.5">{log.title}</div>
                                            <div className="text-[10px] text-slate-400 line-clamp-1">{log.desc}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Bottom Execute Button */}
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full h-12 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 rounded-xl flex items-center gap-3 px-2 transition-all group shadow-lg"
                                    >
                                        <div className="h-8 w-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:w-full transition-all duration-500 ease-out">
                                            <CheckCircle2 size={16} className="text-black" />
                                        </div>
                                        <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] pr-4 group-hover:opacity-0 transition-opacity">
                                            {isRtl ? 'הפעלת פרוטוקול נגד' : 'EXECUTE COUNTERMEASURE'}
                                        </span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>
                </motion.div>

                {/* Advanced Floor Reflection */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-emerald-500/10 blur-[100px] rounded-[100%] pointer-events-none opacity-50 mix-blend-screen transform-gpu" style={{ transform: "rotateX(70deg)" }}></div>
            </motion.div>
        </div>
    );
};

export default DashboardMockup;
