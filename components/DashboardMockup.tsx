
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import {
    Network, ScanLine, AlertCircle, Share2, Activity, Terminal, ShieldAlert, Wifi,
    FileText, Mail, Database, FileJson, AlertTriangle, CheckCircle2, Cpu, HardDrive, Zap, Globe, Lock, Search, Target
} from 'lucide-react';

interface DashboardMockupProps {
    t: any;
    isRtl: boolean;
}

const DashboardMockup: React.FC<DashboardMockupProps> = ({ t, isRtl }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // --- 3D Interactions ---
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 95%", "center 40%"]
    });

    const scrollRotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const scrollScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const scrollOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setNetworkLoad(prev => Math.max(10, Math.min(95, prev + (Math.random() * 20 - 10))));
            setCpuLoad(prev => Math.max(15, Math.min(80, prev + (Math.random() * 10 - 5))));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // --- Render ---
    return (
        <div
            ref={containerRef}
            className="perspective-container w-full max-w-[1500px] mx-auto px-0 lg:px-0 py-8 md:py-16"
            style={{ perspective: '2500px' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{
                    rotateX: scrollRotateX,
                    scale: scrollScale,
                    opacity: scrollOpacity,
                    transformStyle: "preserve-3d"
                }}
                className="relative transform-gpu"
            >
                <motion.div
                    style={{
                        rotateX: rotateX,
                        rotateY: rotateY,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative bg-[#030303] rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] 
                               border border-white/5 ring-1 ring-white/5 aspect-[9/16] md:aspect-[21/9] transform-gpu"
                >
                    {/* HOLOGRAPHIC CHASSIS LAYER */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
                        {/* Vignette */}
                        <div className="absolute inset-0 bg-radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)"></div>
                        {/* Glass Reflections */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
                    </div>


                    {/* --- TOP HUD BAR --- */}
                    <div className="relative z-50 h-10 md:h-14 bg-[#050505]/90 border-b border-white/5 backdrop-blur-md flex items-center justify-between px-4 md:px-6">
                        {/* System Status - Left */}
                        <div className="flex items-center gap-4 md:gap-8">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                                <span className="text-[10px] md:text-xs font-mono font-bold text-emerald-500 tracking-widest">SYSTEM_ONLINE</span>
                            </div>
                            <div className="hidden md:flex items-center gap-4 text-[10px] font-mono text-slate-500">
                                <div className="flex items-center gap-1.5">
                                    <Cpu size={12} className="text-emerald-500/50" />
                                    <span>CPU: {cpuLoad.toFixed(0)}%</span>
                                    <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${cpuLoad}%` }}></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Network size={12} className="text-blue-500/50" />
                                    <span>NET: {networkLoad.toFixed(0)} MB/s</span>
                                    <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${networkLoad}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center Logo/Title */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 px-4 py-1 rounded-full bg-white/[0.03] border border-white/5">
                            <ShieldAlert size={14} className="text-emerald-500" />
                            <span className="text-[10px] font-bold text-slate-300 tracking-[0.2em]">TEVEL OS v4.0 // CLASSIFIED</span>
                        </div>

                        {/* Right Controls */}
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="flex items-center gap-2 px-2 py-1 rounded bg-red-500/10 border border-red-500/20">
                                <Lock size={10} className="text-red-500" />
                                <span className="text-[9px] font-bold text-red-500 uppercase tracking-wider">Secure Channel</span>
                            </div>
                            <div className="text-xs font-mono text-slate-500">{new Date().toLocaleTimeString()}</div>
                        </div>
                    </div>


                    {/* --- MAIN DASHBOARD GRID --- */}
                    <div className="relative z-40 grid grid-cols-1 md:grid-cols-4 h-[calc(100%-2.5rem)] md:h-[calc(100%-3.5rem)] divide-y md:divide-y-0 md:divide-x divide-white/5 bg-transparent">

                        {/* 1. SIGINT FEED (Left Panel) */}
                        <div className="p-4 md:p-6 bg-[#030303]/80 backdrop-blur-sm flex flex-col relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent group-hover:via-emerald-400 group-hover:h-[2px] transition-all duration-500"></div>

                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2 text-emerald-500">
                                    <Activity size={16} />
                                    <span className="text-xs font-bold uppercase tracking-widest">SIGINT Feed</span>
                                </div>
                                <span className="text-[9px] font-mono text-slate-500 px-1.5 py-0.5 rounded border border-white/10">LIVE</span>
                            </div>

                            {/* Decoding Text Stream */}
                            <div className="flex-1 overflow-hidden relative space-y-3 font-mono text-xs">
                                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-emerald-500/20 to-transparent"></div>

                                {[
                                    { type: 'intercept', src: 'SAT_UPLINK_04', status: 'DECRYPTING', color: 'text-amber-500' },
                                    { type: 'log', src: 'DB_ACCESS_ROOT', status: 'AUTHORIZED', color: 'text-emerald-500' },
                                    { type: 'scan', src: 'PORT_443_HTTPS', status: 'SECURE', color: 'text-blue-500' },
                                    { type: 'alert', src: 'IP_BLACKLIST_MATCH', status: 'BLOCKED', color: 'text-red-500' },
                                    { type: 'data', src: 'PACKET_DUMP_88', status: 'PARSED', color: 'text-slate-400' },
                                ].map((item, i) => (
                                    <div key={i} className="pl-4 relative flex items-center justify-between group/line hover:bg-white/[0.02] p-1 rounded transition-colors cursor-pointer">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5 flex items-center gap-1">
                                                <span>[{new Date().toLocaleTimeString([], { hour12: false, second: undefined, minute: '2-digit', hour: '2-digit' })}]</span>
                                                <span className="opacity-50"> // </span>
                                                {item.type}
                                            </span>
                                            <span className="text-slate-300 group-hover/line:text-white transition-colors">Source: {item.src}</span>
                                        </div>
                                        <span className={`text-[9px] font-bold ${item.color} px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/5`}>
                                            {item.status}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Bandwidth Graph (Mini) */}
                            <div className="h-16 mt-4 border-t border-white/5 pt-4 flex gap-2 items-end">
                                {[30, 50, 45, 70, 60, 85, 40, 60, 75, 50].map((h, i) => (
                                    <div key={i} className="flex-1 bg-emerald-500/20 hover:bg-emerald-500 transition-colors rounded-sm" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                        </div>


                        {/* 2. ENTITY FUSION CORE (Center - 2 Columns) */}
                        <div className="col-span-1 md:col-span-2 relative bg-black overflow-hidden group">
                            {/* Map Background */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-screen pointer-events-none"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80 pointer-events-none"></div>

                            {/* Overlay Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

                            {/* Scanner Line */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-500/10 to-transparent -translate-y-full animate-[scan_4s_linear_infinite] pointer-events-none z-10"></div>
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.6)] animate-[scan_4s_linear_infinite] pointer-events-none z-10"></div>

                            {/* CENTRAL NODE */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center">
                                <div className="relative w-64 h-64 flex items-center justify-center">
                                    {/* Pulse Rings */}
                                    <div className="absolute w-full h-full border border-emerald-500/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                                    <div className="absolute w-[80%] h-[80%] border border-emerald-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                    <div className="absolute w-[60%] h-[60%] border-2 border-emerald-500/10 rounded-full animate-[spin_15s_linear_reverse_infinite] border-t-emerald-500/50"></div>

                                    {/* Core */}
                                    <div className="relative z-30 w-24 h-24 bg-black/80 backdrop-blur-md rounded-full border border-emerald-500/50 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.4)] group-hover:scale-105 transition-transform duration-500 cursor-crosshair">
                                        <Target size={32} className="text-emerald-400 animate-pulse" />
                                        <div className="mt-1 flex items-center gap-1">
                                            <span className="text-[10px] font-mono text-emerald-500 font-bold">LOCKED</span>
                                        </div>
                                    </div>

                                    {/* Connecting Lines */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
                                        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#10b981" strokeWidth="1" />
                                        <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="#10b981" strokeWidth="1" />
                                        <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="#10b981" strokeWidth="1" />
                                    </svg>

                                    {/* Floating Nodes */}
                                    <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 bg-black/80 p-1.5 rounded border border-emerald-500/30 text-[8px] font-mono text-emerald-400 shadow-lg">Target_Alpha</div>
                                    <div className="absolute top-[30%] right-[20%] -translate-x-1/2 -translate-y-1/2 bg-black/80 p-1.5 rounded border border-emerald-500/30 text-[8px] font-mono text-emerald-400 shadow-lg">+972-52...</div>
                                    <div className="absolute bottom-[20%] left-[30%] -translate-x-1/2 -translate-y-1/2 bg-black/80 p-1.5 rounded border border-emerald-500/30 text-[8px] font-mono text-emerald-400 shadow-lg">IP: 192.168...</div>
                                </div>
                            </div>

                            {/* Bottom Context HUD */}
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-30">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <Globe size={12} className="text-slate-400" />
                                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Geolocation Active</span>
                                    </div>
                                    <div className="text-xl font-bold text-white tracking-tight">Sector 7G // Tel Aviv</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[9px] font-mono text-emerald-500 uppercase tracking-widest mb-1">Confidence Score</div>
                                    <div className="text-2xl font-mono font-bold text-emerald-400">98.4%</div>
                                </div>
                            </div>
                        </div>


                        {/* 3. TACTICAL OUTCOMES (Right Panel) */}
                        <div className="p-4 md:p-6 bg-[#030303]/80 backdrop-blur-sm flex flex-col gap-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>

                            <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                <div className="flex items-center gap-2 text-slate-300">
                                    <FileJson size={16} />
                                    <span className="text-xs font-bold uppercase tracking-widest">Tactical Log</span>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)] animate-pulse"></div>
                            </div>

                            {/* Alerts / Events List */}
                            <div className="space-y-4">
                                <div className="p-3 rounded bg-red-500/10 border border-red-500/30 relative overflow-hidden group cursor-pointer hover:bg-red-500/20 transition-colors">
                                    <div className="absolute left-0 top-0 h-full w-1 bg-red-500"></div>
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-[9px] font-mono text-red-400 font-bold">CRITICAL ALERT</span>
                                        <span className="text-[9px] font-mono text-red-500/70">10:48:22</span>
                                    </div>
                                    <div className="text-xs font-bold text-white mb-1">Location Mismatch</div>
                                    <div className="text-[10px] text-slate-400 leading-tight">Subject device coords contradict payment location data.</div>
                                </div>

                                <div className="p-3 rounded bg-white/[0.03] border border-white/5 relative overflow-hidden group cursor-pointer hover:border-emerald-500/30 transition-colors">
                                    <div className="absolute left-0 top-0 h-full w-1 bg-emerald-500/50"></div>
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-[9px] font-mono text-emerald-500 font-bold">VERIFIED</span>
                                        <span className="text-[9px] font-mono text-slate-600">10:45:10</span>
                                    </div>
                                    <div className="text-xs font-bold text-slate-200 mb-1">Payment Processed</div>
                                    <div className="text-[10px] text-slate-500 leading-tight">Transaction ID #88291 verified via bank API.</div>
                                </div>

                                <div className="p-3 rounded bg-white/[0.03] border border-white/5 relative overflow-hidden group cursor-pointer hover:border-blue-500/30 transition-colors">
                                    <div className="absolute left-0 top-0 h-full w-1 bg-blue-500/50"></div>
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-[9px] font-mono text-blue-500 font-bold">INFO</span>
                                        <span className="text-[9px] font-mono text-slate-600">10:42:05</span>
                                    </div>
                                    <div className="text-xs font-bold text-slate-200 mb-1">New Device Added</div>
                                    <div className="text-[10px] text-slate-500 leading-tight">MAC Address: A2:88:... detected on network.</div>
                                </div>
                            </div>

                            {/* Export / Action Slider */}
                            <div className="mt-auto pt-4 border-t border-white/5">
                                <button className="w-full h-10 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded flex items-center justify-between px-1 transition-all group active:scale-[0.98]">
                                    <div className="h-8 w-10 bg-emerald-500 rounded flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.4)] group-hover:w-full transition-all duration-500 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
                                        <CheckCircle2 size={16} className="text-black" />
                                    </div>
                                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex-1 text-center group-hover:opacity-0 transition-opacity">
                                        {isRtl ? 'ייצוא דוח החלטה' : 'EXECUTE PROTOCOL'}
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>

                </motion.div>

                {/* Floor Reflection Effect */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-emerald-500/20 blur-[80px] rounded-[100%] pointer-events-none opacity-40"></div>
            </motion.div>
        </div>
    );
};

export default DashboardMockup;
