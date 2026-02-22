
// Force Update v2
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    FileText, Database, Share2, AlertTriangle, Target, MapPin,
    Binary, ScanLine, XCircle, AlertOctagon, ShieldAlert, Cpu,
    WifiOff, FileWarning, SearchX, ArrowRight, Brain, Network,
    Lightbulb, TextSearch, Layers
} from 'lucide-react';

// --- 3D Tilt Wrapper Component ---
const TiltCard = ({ children, className, style }: any) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 40, damping: 25, mass: 1.5 });
    const mouseYSpring = useSpring(y, { stiffness: 40, damping: 25, mass: 1.5 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
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

    return (
        <motion.div
            style={{ ...style, x: "-50%", y: "-50%", rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className.replace('-translate-x-1/2', '').replace('-translate-y-1/2', '')}
        >
            <div style={{ transform: "translateZ(30px)" }} className="w-full h-full flex flex-col justify-between">
                {children}
            </div>
        </motion.div>
    );
};

interface ChaosContextSliderProps {
    t: { before: string; after: string };
    isRtl: boolean;
}

const ChaosContextSlider: React.FC<ChaosContextSliderProps> = ({ t, isRtl }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    // Generate static random data for the Chaos side to avoid re-renders causing jitter
    const [chaosItems] = useState(() => {
        const items = [];
        for (let i = 0; i < 35; i++) {
            items.push({
                id: i,
                top: Math.random() * 90,
                left: Math.random() * 90,
                rotate: Math.random() * 60 - 30,
                scale: 0.5 + Math.random() * 0.8,
                type: Math.random() > 0.7 ? 'icon' : Math.random() > 0.4 ? 'hex' : 'error'
            });
        }
        return items;
    });

    const handleMove = (clientX: number) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const percent = (x / rect.width) * 100;
            setSliderPosition(percent);
        }
    };

    const handleMouseDown = () => { isDragging.current = true; };
    const handleMouseUp = () => { isDragging.current = false; };
    const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
    const handleTouchMove = (e: React.TouchEvent) => { handleMove(e.touches[0].clientX); };

    useEffect(() => {
        const handleGlobalMouseUp = () => { isDragging.current = false; };
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, []);

    const randomHex = () => Array.from({ length: 6 }, () => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
    const errorCodes = ["ERR_TIMEOUT", "404_NOT_FOUND", "CORRUPT_DATA", "ACCESS_DENIED", "PACKET_LOSS", "NULL_PTR"];

    // Data Nodes Configuration - Aligned with Tevel Methodology
    const contextNodes = [
        {
            id: 1,
            icon: Database,
            source: isRtl ? "קליטת מידע גולמי" : "RAW DATA INGESTION",
            action: isRtl ? "מחלץ ישויות..." : "Extracting Entities...",
            top: "22%",
            left: "24%",
            color: "text-blue-400",
            delay: 0
        },
        {
            id: 2,
            icon: Layers,
            source: isRtl ? "היתוך חוצה-ארגון" : "CROSS-SILO FUSION",
            action: isRtl ? "בניית פרופיל 360..." : "Resolving Identity...",
            top: "22%",
            left: "76%",
            color: "text-purple-400",
            delay: 0.5
        },
        {
            id: 3,
            icon: Network,
            source: isRtl ? "גילוי זיקות סמויות" : "HIDDEN LINK DISCOVERY",
            action: isRtl ? "מיפוי רשת קשרים..." : "Mapping Graph...",
            top: "78%",
            left: "24%",
            color: "text-amber-400",
            delay: 1
        },
        {
            id: 4,
            icon: FileText,
            source: isRtl ? "הרכבת סיפור המעשה" : "NARRATIVE BUILDING",
            action: isRtl ? "שחזור ציר זמן..." : "Generating Timeline...",
            top: "78%",
            left: "76%",
            color: "text-emerald-400",
            delay: 1.5
        },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto my-8 md:my-16 relative select-none">
            {/* Outer Glow Container */}
            <div className="p-1 md:p-2 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-red-900/20 via-slate-800/50 to-emerald-900/20 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div
                    ref={containerRef}
                    className="relative h-[400px] md:h-[600px] w-full rounded-[1.3rem] md:rounded-[1.8rem] overflow-hidden bg-[#050505] cursor-ew-resize group shadow-2xl touch-none"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                >
                    {/* ================= RIGHT SIDE: CONTEXT (Tevel) ================= */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#030405]">
                        <div className="absolute top-4 md:top-8 right-2 md:right-8 text-emerald-400 font-bold tracking-[0.2em] bg-emerald-950/40 px-3 md:px-6 py-1.5 md:py-2 rounded-full border border-emerald-500/30 z-20 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)] flex items-center gap-1.5 md:gap-2 text-[9px] sm:text-[10px] md:text-sm">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full animate-pulse shrink-0"></span>
                            <span className="truncate">{t.after}</span>
                        </div>

                        {/* Structured Graph Visualization */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Deep Background Depth */}
                            <div className="absolute inset-0 bg-[#020304]"></div>

                            {/* Clean Grid Base */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:40px_40px] opacity-40 md:opacity-60"></div>

                            {/* --- INTELLIGENCE FUSION CORE BACKGROUND --- */}
                            <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none">
                                {/* Core Pulsing Radial Glow */}
                                <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(16,185,129,0.2)_0%,rgba(16,185,129,0.05)_40%,transparent_80%) animate-[pulse_4s_ease-in-out_infinite]"></div>

                                {/* Radar Sweep Container */}
                                <div className="absolute w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] opacity-30 animate-[spin_8s_linear_infinite]">
                                    <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(16, 185, 129, 0.4) 100%)' }}></div>
                                </div>

                                {/* Concentric Data Rings (Processing Tracks) */}
                                <div className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] border border-dashed border-emerald-500/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
                                <div className="absolute w-[300px] h-[300px] md:w-[550px] md:h-[550px] border border-emerald-500/10 rounded-full"></div>
                                <div className="absolute w-[300px] h-[300px] md:w-[550px] md:h-[550px] border-l border-t border-emerald-500/30 rounded-full animate-[spin_20s_linear_reverse_infinite]"></div>
                                <div className="absolute w-[450px] h-[450px] md:w-[800px] md:h-[800px] border border-dashed border-emerald-500/10 rounded-full animate-[spin_40s_linear_infinite]"></div>

                                {/* Influx Data Particles (Simulating chaotic data flowing IN to the center) */}
                                <svg className="absolute inset-0 w-full h-full opacity-40">
                                    <defs>
                                        <radialGradient id="particle-glow" cx="50%" cy="50%" r="50%">
                                            <stop offset="0%" stopColor="#34d399" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>
                                    {[
                                        { x1: "0%", y1: "20%", dur: "3s" },
                                        { x1: "100%", y1: "30%", dur: "4s" },
                                        { x1: "15%", y1: "0%", dur: "3.5s" },
                                        { x1: "85%", y1: "100%", dur: "4.5s" },
                                        { x1: "0%", y1: "80%", dur: "3.2s" },
                                        { x1: "100%", y1: "70%", dur: "3.8s" },
                                    ].map((particle, idx) => (
                                        <motion.circle key={`p-${idx}`} r="1.5" fill="url(#particle-glow)">
                                            <animateMotion
                                                repeatCount="indefinite"
                                                dur={particle.dur}
                                                keyPoints="0;1"
                                                keyTimes="0;1"
                                                calcMode="linear"
                                                path={`M ${particle.x1} ${particle.y1} L 50% 50%`}
                                            />
                                            <animate attributeName="opacity" values="0;1;0" dur={particle.dur} repeatCount="indefinite" />
                                        </motion.circle>
                                    ))}
                                </svg>
                            </div>

                            {/* Connecting Lines with Data Flow Animation */}
                            <div className="absolute inset-0 pointer-events-none">
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    {/* Draw lines to center */}
                                    {contextNodes.map((node, i) => (
                                        <motion.path
                                            key={`line-${i}`}
                                            d={`M 50 50 L ${parseFloat(node.left)} ${parseFloat(node.top)}`}
                                            stroke="#10b981"
                                            strokeWidth="0.5"
                                            className="opacity-30"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                    ))}
                                </svg>

                                {/* Moving Packets (Perfect circles using HTML) */}
                                {contextNodes.map((node, i) => (
                                    <motion.div
                                        key={`packet-${i}`}
                                        className="absolute w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,1)] z-20"
                                        style={{ transform: 'translate(-50%, -50%)' }}
                                        animate={{
                                            top: [node.top, "50%"],
                                            left: [node.left, "50%"],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />
                                ))}

                                {/* Pulse Rings (Perfect circles using HTML) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-56 md:h-56 border border-emerald-500 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20 pointer-events-none"></div>
                            </div>

                            {/* Center Node */}
                            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="z-10 bg-[#0a0c10]/90 backdrop-blur-xl p-4 md:p-6 rounded-full border border-emerald-500 shadow-[0_0_60px_rgba(16,185,129,0.5),inset_0_0_20px_rgba(16,185,129,0.2)] flex flex-col items-center relative group">
                                <div className="absolute inset-0 rounded-full border-2 border-emerald-500/40 animate-ping opacity-50"></div>
                                <Lightbulb size={32} className="text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,1)] md:w-12 md:h-12" />
                                <div className="absolute -bottom-10 md:-bottom-12 bg-[#020304]/90 text-emerald-400 text-[10px] md:text-xs font-mono px-3 md:px-5 py-2 rounded-lg border border-emerald-500/50 whitespace-nowrap tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.2)] flex items-center gap-2 backdrop-blur-md">
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]"></span>
                                    {isRtl ? 'תובנה אופרטיבית' : 'ACTIONABLE_INSIGHT'}
                                </div>
                            </motion.div>

                            {/* Detailed Data Nodes */}
                            {contextNodes.map((node, i) => (
                                <TiltCard
                                    key={i}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 w-[110px] sm:w-[124px] md:w-48 bg-[#0a0c10]/95 rounded-lg border border-white/10 shadow-xl backdrop-blur-md flex flex-col overflow-hidden group hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-colors duration-300 z-30"
                                    style={{ top: node.top, left: node.left }}
                                >
                                    {/* Node Header */}
                                    <div className="bg-white/5 p-2 flex items-center justify-between border-b border-white/5 relative z-10 gap-1">
                                        <div className={`flex items-center gap-1.5 ${node.color} flex-1 overflow-hidden`}>
                                            <node.icon size={12} className="shrink-0 md:w-4 md:h-4" />
                                            <span className="text-[8px] sm:text-[9.5px] md:text-sm font-bold tracking-wider leading-tight w-full break-words">{node.source}</span>
                                        </div>
                                        <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1"></div>
                                    </div>

                                    {/* Node Body */}
                                    <div className="p-2 md:p-3 relative z-10">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="text-[7.5px] md:text-[9px] text-slate-500 uppercase tracking-wide">
                                                {isRtl ? 'בתהליך עיבוד' : 'Processing'}
                                            </div>
                                        </div>
                                        <div className="text-[8px] sm:text-[9px] md:text-xs font-mono text-emerald-100 flex flex-wrap items-center gap-1.5 break-words">
                                            <ArrowRight size={8} className="text-emerald-500 shrink-0 md:w-3 md:h-3" />
                                            <span className="flex-1 leading-tight">{node.action}</span>
                                        </div>
                                    </div>

                                    {/* Decorative Corner */}
                                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500/50"></div>
                                </TiltCard>
                            ))}
                        </div>
                    </div>

                    {/* ================= LEFT SIDE: CHAOS (Problem) ================= */}
                    <div
                        className="absolute inset-0 bg-[#080202] overflow-hidden border-r border-red-500/50 shadow-[5px_0_100px_rgba(220,38,38,0.2)]"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <div className="absolute top-4 md:top-8 left-2 md:left-8 text-red-500 font-bold tracking-[0.2em] bg-red-950/40 px-3 md:px-6 py-1.5 md:py-2 rounded-full border border-red-500/30 z-20 backdrop-blur-md flex items-center gap-1.5 md:gap-2 shadow-[0_0_20px_rgba(220,38,38,0.2)] text-[9px] sm:text-[10px] md:text-sm">
                            <AlertTriangle size={12} className="animate-pulse md:w-4 md:h-4 shrink-0" />
                            <span className="truncate">{t.before}</span>
                        </div>

                        {/* Noisy Background */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(220,38,38,0.15)_0%,transparent_60%)] animate-pulse"></div>

                        {/* Random Chaos Elements */}
                        {chaosItems.map((item, i) => (
                            <div
                                key={i}
                                className="absolute pointer-events-none opacity-60"
                                style={{
                                    top: `${item.top}%`,
                                    left: `${item.left}%`,
                                    transform: `rotate(${item.rotate}deg) scale(${item.scale})`,
                                }}
                            >
                                {item.type === 'hex' && (
                                    <div className="font-mono text-[8px] md:text-[10px] text-red-500/40 whitespace-nowrap blur-[0.5px]">
                                        {`0x${randomHex()} :: ${randomHex()}`}
                                    </div>
                                )}
                                {item.type === 'error' && (
                                    <div className="flex items-center gap-1 bg-red-950/50 border border-red-500/30 px-2 py-0.5 rounded text-[8px] md:text-[9px] text-red-400 font-mono tracking-tighter shadow-lg">
                                        <XCircle size={10} />
                                        {errorCodes[i % errorCodes.length]}
                                    </div>
                                )}
                                {item.type === 'icon' && (
                                    <div className="text-red-600/30 animate-pulse">
                                        {i % 5 === 0 ? <Binary size={24} className="md:w-10 md:h-10" /> :
                                            i % 5 === 1 ? <FileWarning size={20} className="md:w-8 md:h-8" /> :
                                                i % 5 === 2 ? <WifiOff size={16} className="md:w-7 md:h-7" /> :
                                                    i % 5 === 3 ? <SearchX size={22} className="md:w-9 md:h-9" /> :
                                                        <AlertOctagon size={16} className="md:w-6 md:h-6" />}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Glitch Overlay Text */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay opacity-30">
                            <div className="relative">
                                <h3 className="text-[60px] md:text-[120px] font-black text-red-600 tracking-tighter blur-[4px] opacity-50 absolute top-0 left-0 animate-pulse">CHAOS</h3>
                                <h3 className="text-[60px] md:text-[120px] font-black text-red-500 tracking-tighter blur-[1px] translate-x-1 translate-y-1">CHAOS</h3>
                            </div>
                        </div>
                    </div>

                    {/* ================= SLIDER HANDLE ================= */}
                    <div
                        className="absolute top-0 bottom-0 w-2 md:w-1 cursor-ew-resize z-30 group-active:scale-105 transition-transform"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        {/* Vertical Beam */}
                        <div className="absolute inset-0 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-white to-emerald-500 opacity-80 blur-sm"></div>

                        {/* Handle UI - Enlarged for Mobile */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-16 md:w-12 md:h-20 bg-[#0F1115] border border-white/20 rounded-xl flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.3)] backdrop-blur-xl">
                            <div className="flex gap-1 items-center">
                                <div className="w-0.5 h-8 bg-gradient-to-b from-red-500/50 to-transparent rounded-full"></div>
                                <div className="w-1 h-10 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"></div>
                                <div className="w-0.5 h-8 bg-gradient-to-b from-transparent to-emerald-500/50 rounded-full"></div>
                            </div>
                            {/* Arrows */}
                            <motion.div
                                animate={{ x: [-2, 0, -2] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                className="absolute -left-5 md:-left-6 top-1/2 -translate-y-1/2 text-white/80 text-[10px] md:text-xs font-bold"
                            >◄</motion.div>
                            <motion.div
                                animate={{ x: [2, 0, 2] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                className="absolute -right-5 md:-right-6 top-1/2 -translate-y-1/2 text-white/80 text-[10px] md:text-xs font-bold"
                            >►</motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Explicit Drag Hint */}
            <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center justify-center gap-3 mt-4 md:mt-8"
            >
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-slate-500/50" />
                <p className="text-center text-slate-400 text-[10px] md:text-xs font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase">
                    {isRtl ? 'גרור לחשיפת ההקשר' : 'DRAG TO REVEAL CONTEXT'}
                </p>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-slate-500/50" />
            </motion.div>
        </div>
    );
};

export default ChaosContextSlider;
