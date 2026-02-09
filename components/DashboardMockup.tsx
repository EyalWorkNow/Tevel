
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Network, ScanLine, AlertCircle, Share2, Activity, Terminal, ShieldAlert, Wifi } from 'lucide-react';

interface DashboardMockupProps {
    t: any;
    isRtl: boolean;
}

const DashboardMockup: React.FC<DashboardMockupProps> = ({ t, isRtl }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // --- Scroll Reveal Animation ---
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 95%", "center 40%"]
    });

    // Toned down scroll effects for mobile
    const scrollRotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scrollScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const scrollOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const scrollY = useTransform(scrollYProgress, [0, 1], [100, 0]);

    // --- Mouse 3D Tilt Interaction ---
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 120, damping: 25 });
    const mouseYSpring = useSpring(y, { stiffness: 120, damping: 25 });

    const mouseRotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]); // Reduced angle
    const mouseRotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

    const contentX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10px", "10px"]);
    const contentY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10px", "10px"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        // Disable heavy tilt on touch devices essentially by window width check or simple heuristic
        if (window.innerWidth < 768) return;

        if (!containerRef.current) return;
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
    };

    // --- Simulated Live Logs ---
    const [logs, setLogs] = useState<string[]>([]);

    // Update logs when language changes
    useEffect(() => {
        setLogs([]); // Reset logs on language change to restart animation cleanly
    }, [t.logs]);

    useEffect(() => {
        const logPool = t.logs || [
            "Analyzing node #882...",
            "Connection est. [192.168.1.10]",
            "Metadata parsed: 4kb",
            "Entity resolved: TARGET_ALPHA",
            "Cross-ref DB: NSA_LEAKS",
            "Pattern match: 98%",
            "Updating graph topology...",
            "Sentiment analysis: HOSTILE"
        ];

        const interval = setInterval(() => {
            setLogs(prev => {
                const newLog = logPool[Math.floor(Math.random() * logPool.length)];
                const updated = [...prev, `[${new Date().toLocaleTimeString()}] ${newLog}`];
                if (updated.length > 6) return updated.slice(1);
                return updated;
            });
        }, 1500);
        return () => clearInterval(interval);
    }, [t.logs]);


    return (
        <div
            ref={containerRef}
            className="perspective-container w-full max-w-[1400px] mx-auto px-0 lg:px-0 py-4 md:py-10"
            style={{ perspective: '2000px' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{
                    rotateX: scrollRotateX,
                    scale: scrollScale,
                    opacity: scrollOpacity,
                    y: scrollY,
                    transformStyle: "preserve-3d"
                }}
                className="relative transform-gpu will-change-transform"
            >
                <motion.div
                    style={{
                        rotateX: mouseRotateX,
                        rotateY: mouseRotateY,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative bg-[#050505] rounded-xl md:rounded-2xl shadow-[0_20px_100px_rgba(0,0,0,0.8)] overflow-hidden aspect-[9/14] md:aspect-[21/9] ring-1 ring-white/10 backdrop-blur-3xl transform-gpu will-change-transform"
                >
                    {/* Top Bar (Browser/App Header) */}
                    <div className="h-8 md:h-12 border-b border-white/5 flex items-center justify-between px-4 md:px-6 bg-[#0a0c10] select-none z-30 relative">
                        <div className="flex gap-1.5 md:gap-2 opacity-50">
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-500"></div>
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-500"></div>
                        </div>
                        <div className="bg-black/50 border border-white/5 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[8px] md:text-[10px] text-emerald-500 font-mono tracking-widest uppercase flex items-center gap-2 md:gap-3 shadow-inner">
                            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                            {t.version}
                        </div>
                        <div className="flex items-center gap-2 md:gap-4 text-slate-500">
                            <Wifi size={12} className="md:w-3.5 md:h-3.5" />
                            <div className="w-8 md:w-10 h-1 bg-slate-800 rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-emerald-500/50"></div>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Grid Content */}
                    <motion.div
                        className="grid grid-cols-12 h-[calc(100%-2rem)] md:h-[calc(100%-3rem)] bg-[#050505] overflow-y-auto md:overflow-hidden"
                        style={{ x: contentX, y: contentY }}
                    >

                        {/* Mobile Ticker - Visible only on mobile */}
                        <div className="col-span-12 md:hidden bg-[#080a0e] border-b border-white/5 py-2 px-4 flex items-center gap-3 overflow-hidden">
                            <Activity size={10} className="text-emerald-500 animate-pulse flex-shrink-0" />
                            <div className="flex-1 overflow-hidden relative h-4">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={logs[logs.length - 1]} // Only show latest log
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-[9px] font-mono text-emerald-500/80 truncate absolute w-full"
                                    >
                                        {logs[logs.length - 1] || "Initializing system..."}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Left Sidebar / Data Feed - Hidden on Mobile */}
                        <div className="col-span-3 border-r border-white/5 p-6 hidden md:flex flex-col gap-6 bg-[#080a0e] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-scan-slow"></div>

                            <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    {isRtl ? 'זרם מודיעין חי' : 'Live Intel'}
                                </span>
                                <Activity size={14} className="text-emerald-500 animate-pulse" />
                            </div>

                            {/* Live Logs */}
                            <div className={`flex-1 font-mono text-[10px] text-emerald-500/70 space-y-2 overflow-hidden flex flex-col justify-end ${isRtl ? 'text-right' : 'text-left'}`} dir="ltr">
                                <AnimatePresence>
                                    {logs.map((log, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className={`truncate border-l-2 border-emerald-500/20 pl-2 ${isRtl ? 'border-r-2 border-l-0 pr-2 pl-0 text-right' : ''}`}
                                        >
                                            {log}
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-white/5">
                                {[1, 2].map((i) => (
                                    <div key={i} className="p-3 bg-white/[0.02] rounded border border-white/5 flex gap-3 items-center">
                                        <div className="w-8 h-8 rounded bg-slate-800/50 flex items-center justify-center">
                                            <ShieldAlert size={14} className="text-amber-500" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="h-1.5 w-16 bg-slate-700 rounded mb-1.5"></div>
                                            <div className="h-1.5 w-10 bg-slate-800 rounded"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Main Visual - Context Graph & Map Analysis */}
                        <div className="col-span-12 md:col-span-6 relative group overflow-hidden border-b md:border-b-0 md:border-r border-white/5 bg-black h-[50vh] md:h-auto">
                            {/* Background Map Effect */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale mix-blend-screen pointer-events-none"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none"></div>

                            {/* Scanning Line Animation */}
                            <motion.div
                                animate={{ top: ['0%', '100%'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-[1px] bg-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.5)] z-10 pointer-events-none"
                            />

                            {/* Grid Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

                            {/* Graph Nodes Overlay */}
                            <div className="absolute inset-0 z-20 p-8 flex items-center justify-center">
                                <div className="relative w-full h-full max-h-[250px] md:max-h-[350px]">
                                    {/* Central Entity - Floating */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: false }}
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{
                                            scale: { duration: 0.5 },
                                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                                    >
                                        <div className="relative group/center cursor-pointer">
                                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-emerald-500/30 bg-emerald-900/10 flex items-center justify-center backdrop-blur-sm group-hover/center:bg-emerald-900/20 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                                                <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping-slow"></div>
                                                <ScanLine size={32} className="text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)] md:w-10 md:h-10" />
                                            </div>
                                            <div className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/90 text-emerald-400 font-mono text-[8px] md:text-[10px] px-2 py-1 md:px-3 rounded-full tracking-wider shadow-lg border border-emerald-500/30">
                                                {t.targetAcquired}
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Satellite Nodes */}
                                    {[
                                        { top: '10%', left: '10%', icon: Share2, label: "Social", delay: 0.2 },
                                        { top: '10%', right: '10%', icon: Network, label: "Network", delay: 0.4 },
                                        { bottom: '10%', left: '15%', icon: AlertCircle, label: "Intel", delay: 0.6 }
                                    ].map((node, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: node.delay }}
                                            className="absolute flex flex-col items-center group/node cursor-pointer"
                                            style={{ top: node.top, left: node.left, right: node.right, bottom: node.bottom }}
                                        >
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/80 border border-white/10 flex items-center justify-center mb-2 z-10 group-hover/node:border-emerald-500/50 group-hover/node:scale-110 transition-all duration-300 group-hover/node:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                                                <node.icon size={16} className="text-slate-400 group-hover/node:text-emerald-400 transition-colors md:w-5 md:h-5" />
                                            </div>
                                            {/* Animated Connector Lines */}
                                            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] pointer-events-none -z-10 opacity-40">
                                                <line
                                                    x1="50%"
                                                    y1="50%"
                                                    x2={node.left ? "0%" : "100%"}
                                                    y2={node.top ? "0%" : "100%"}
                                                    stroke="#10b981"
                                                    strokeWidth="1"
                                                    strokeDasharray="4 4"
                                                />
                                            </svg>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Overlay Status */}
                            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex justify-between items-end">
                                <div className={`text-left ${isRtl ? 'text-right' : ''}`}>
                                    <div className="text-[8px] md:text-[10px] text-slate-500 mb-1 tracking-widest font-mono">
                                        {isRtl ? 'מזהה אירוע:' : 'EVENT ID:'} <span className="text-white">#EV-992-AX</span>
                                    </div>
                                    <h3 className="text-lg md:text-2xl font-bold text-white flex items-center gap-2">
                                        {t.eventAnalysis}
                                    </h3>
                                </div>
                                <div className="flex gap-2">
                                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-[10px] md:text-xs font-bold animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                        {t.anomaly}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Stats Panel - Stacks on Mobile */}
                        <div className="col-span-12 md:col-span-3 p-4 md:p-6 bg-[#080a0e] flex flex-col gap-4 md:gap-8 h-auto">
                            <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-white/5 pb-2 md:pb-4">
                                {t.entityAnalysis}
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
                                {[
                                    { label: t.origin, val: t.vals.iran, color: "text-emerald-400" },
                                    { label: t.class, val: t.vals.military, color: "text-amber-400" },
                                    { label: t.threat, val: t.vals.critical, color: "text-red-500 font-black tracking-widest" },
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/[0.02] p-3 md:p-4 rounded-lg border border-white/5 hover:bg-white/[0.04] transition-colors hover:border-emerald-500/20 cursor-default">
                                        <div className="text-slate-500 text-[8px] md:text-[9px] uppercase tracking-wider mb-1 md:mb-2">{item.label}</div>
                                        <div className={`text-xs md:text-sm font-bold ${item.color} truncate`}>{item.val}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Confidence Meter */}
                            <div className="mt-auto pt-4 md:pt-0">
                                <div className="flex justify-between text-xs mb-2 md:mb-3">
                                    <span className="text-slate-400 uppercase tracking-wider text-[10px] md:text-xs">{t.certainty}</span>
                                    <span className="text-emerald-400 font-mono font-bold">98.4%</span>
                                </div>
                                <div className="h-1.5 md:h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '98.4%' }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] relative"
                                    >
                                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Floor Reflection */}
            <motion.div
                style={{ scale: scrollScale, opacity: scrollOpacity }}
                className="w-[85%] mx-auto h-20 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl rounded-[100%] -mt-10 opacity-60 transform scale-y-50 hidden md:block"
            ></motion.div>
        </div>
    );
};

export default DashboardMockup;
