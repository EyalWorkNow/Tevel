
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { 
    Network, ScanLine, AlertCircle, Share2, Activity, Terminal, ShieldAlert, Wifi, 
    FileText, Mail, Database, FileJson, AlertTriangle, CheckCircle2 
} from 'lucide-react';

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

                        {/* Left Sidebar / Data Ingestion - Hidden on Mobile */}
                        <div className="col-span-3 border-r border-white/5 p-6 hidden md:flex flex-col gap-6 bg-[#080a0e] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-scan-slow"></div>

                            <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    {isRtl ? 'קליטת מקורות' : 'Data Ingestion'}
                                </span>
                                <Activity size={14} className="text-emerald-500 animate-pulse" />
                            </div>

                            {/* Ingestion Stream */}
                            <div className="flex-1 space-y-3 overflow-hidden flex flex-col justify-end">
                                {[
                                    { icon: FileText, name: "Police_Report_882.pdf", size: "2.4MB", status: "ok" },
                                    { icon: Mail, name: "Email_Chain_Thread.msg", size: "128KB", status: "ok" },
                                    { icon: Database, name: "Transaction_Log_DB.sql", size: "450MB", status: "process" },
                                    { icon: Terminal, name: "Signal_Intercept_Raw.txt", size: "12KB", status: "ok" },
                                ].map((file, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.2 }}
                                        className="p-2 border border-white/5 rounded bg-white/[0.02] flex items-center gap-3"
                                    >
                                        <div className={`p-1.5 rounded ${file.status === 'process' ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                                            <file.icon size={12} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[10px] text-slate-300 truncate font-mono">{file.name}</div>
                                            <div className="flex justify-between items-center mt-0.5">
                                                <span className="text-[8px] text-slate-500">{file.size}</span>
                                                {file.status === 'process' ? (
                                                    <span className="text-[8px] text-amber-500 animate-pulse">PROCESSING...</span>
                                                ) : (
                                                    <span className="text-[8px] text-emerald-500">INGESTED</span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Main Visual - Context Graph & Entity Resolution */}
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

                            {/* Entity Resolution Stage */}
                            <div className="absolute inset-0 z-20 p-8 flex items-center justify-center">
                                <div className="relative w-full h-full max-h-[250px] md:max-h-[350px] flex items-center justify-center">

                                    {/* Central Merging Core */}
                                    <div className="relative">
                                        <motion.div
                                            className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full"
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        />

                                        {/* Resolved Entity */}
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-emerald-500/30 bg-emerald-900/10 flex flex-col items-center justify-center backdrop-blur-sm z-30 relative shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                                        >
                                            <ScanLine size={32} className="text-emerald-400 mb-2" />
                                            <div className="text-[10px] font-mono text-emerald-400 bg-black/80 px-2 py-0.5 rounded border border-emerald-500/30">
                                                RESOLVED
                                            </div>
                                        </motion.div>

                                        {/* Fragments Flying In */}
                                        {[
                                            { label: "J. Doe", x: -80, y: -60, delay: 0 },
                                            { label: "Phone: +972...", x: 80, y: -40, delay: 1 },
                                            { label: "DevID: 88A2", x: 0, y: 80, delay: 2 }
                                        ].map((frag, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ x: frag.x * 2, y: frag.y * 2, opacity: 0 }}
                                                animate={{
                                                    x: [frag.x * 2, 0],
                                                    y: [frag.y * 2, 0],
                                                    opacity: [0, 1, 0],
                                                    scale: [1, 0.5]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    delay: frag.delay,
                                                    ease: "easeInOut"
                                                }}
                                                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 rounded-full border border-slate-600 bg-black/60 flex items-center justify-center text-[8px] text-slate-300 font-mono z-20"
                                            >
                                                {frag.label}
                                            </motion.div>
                                        ))}
                                    </div>
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

                        {/* Right Stats Panel - Research Outcomes */}
                        <div className="col-span-12 md:col-span-3 p-4 md:p-6 bg-[#080a0e] flex flex-col gap-4 h-auto md:border-l border-white/5">
                            <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    {isRtl ? 'תוצרי מחקר' : 'Research Outcomes'}
                                </span>
                                <FileJson size={14} className="text-emerald-500" />
                            </div>

                            {/* Timeline - Verified Events */}
                            <div className="space-y-3">
                                {[
                                    { time: "10:42", event: "Payment Detected", status: "verified" },
                                    { time: "10:45", event: "Location Mismatch", status: "conflict" },
                                    { time: "10:48", event: "Device ID Match", status: "verified" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-3 items-start relative group/item">
                                        {/* Timeline Line */}
                                        {idx !== 2 && <div className="absolute top-2 left-[5px] w-[1px] h-full bg-white/10 group-hover/item:bg-emerald-500/30 transition-colors"></div>}

                                        <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${item.status === 'conflict' ? 'bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.4)]' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]'}`}></div>
                                        <div>
                                            <div className="text-[10px] font-mono text-slate-500">{item.time}</div>
                                            <div className={`text-xs font-bold ${item.status === 'conflict' ? 'text-red-400' : 'text-slate-200'}`}>
                                                {item.event}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Conflict Alert Box */}
                            <div className="mt-auto bg-red-500/5 border border-red-500/20 p-3 rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <AlertTriangle size={12} className="text-red-500" />
                                    <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">Conflict Detected</span>
                                </div>
                                <div className="text-[10px] text-slate-400 leading-tight">
                                    Payment location (CY) contradicts Device GPS (UK).
                                </div>
                            </div>

                            {/* Export Action */}
                            <button className="w-full py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded flex items-center justify-center gap-2 transition-all group/btn">
                                <CheckCircle2 size={14} />
                                <span>{isRtl ? 'ייצוא דוח החלטה' : 'Export Decision Pack'}</span>
                            </button>
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
