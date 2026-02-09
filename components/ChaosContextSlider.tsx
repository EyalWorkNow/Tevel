
// Force Update v2
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FileText, Database, Share2, AlertTriangle, Target, MapPin,
    Binary, ScanLine, XCircle, AlertOctagon, ShieldAlert, Cpu,
    WifiOff, FileWarning, SearchX, ArrowRight
} from 'lucide-react';

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

    // Data Nodes Configuration
    const contextNodes = [
        {
            id: 1,
            icon: Database,
            source: isRtl ? "מאגר סיגינט" : "SIGINT DB",
            action: isRtl ? "חילוץ מזהים..." : "Extracting ID...",
            top: "20%",
            left: "20%",
            color: "text-blue-400",
            delay: 0
        },
        {
            id: 2,
            icon: Share2,
            source: isRtl ? "רשתות חברתיות" : "SOCIAL MEDIA",
            action: isRtl ? "מיפוי גרף..." : "Mapping Graph...",
            top: "20%",
            left: "80%",
            color: "text-purple-400",
            delay: 0.5
        },
        {
            id: 3,
            icon: FileText,
            source: isRtl ? "דוח מודיעין" : "INTEL REPORT",
            action: isRtl ? "ניתוח טקסט..." : "Parsing Text...",
            top: "80%",
            left: "20%",
            color: "text-amber-400",
            delay: 1
        },
        {
            id: 4,
            icon: MapPin,
            source: isRtl ? "גיאו-מרחבי" : "GEO-SPATIAL",
            action: isRtl ? "איכון..." : "Triangulating...",
            top: "80%",
            left: "80%",
            color: "text-rose-400",
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
                        <div className="absolute top-4 md:top-8 right-4 md:right-8 text-emerald-400 font-bold tracking-[0.2em] bg-emerald-950/40 px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-emerald-500/30 z-20 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)] flex items-center gap-2 text-xs md:text-sm">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            {t.after}
                        </div>

                        {/* Structured Graph Visualization */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Clean Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,rgba(16,185,129,0.05)_30%,transparent_70%)] animate-[pulse_4s_ease-in-out_infinite]"></div>

                            {/* Connecting Lines with Data Flow Animation */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                {/* Draw lines to center */}
                                {contextNodes.map((node, i) => (
                                    <React.Fragment key={i}>
                                        <motion.path
                                            d={`M 50 50 L ${parseFloat(node.left)} ${parseFloat(node.top)}`}
                                            stroke="#10b981"
                                            strokeWidth="0.5"
                                            className="opacity-30"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                        {/* Moving Packet - Sped up from 2s to 1.5s */}
                                        <motion.circle r="1" fill="#34d399">
                                            <animateMotion
                                                repeatCount="indefinite"
                                                dur="1.5s"
                                                keyPoints="1;0"
                                                keyTimes="0;1"
                                                path={`M 50 50 L ${parseFloat(node.left)} ${parseFloat(node.top)}`}
                                            />
                                        </motion.circle>
                                    </React.Fragment>
                                ))}

                                {/* Pulse Rings */}
                                <circle cx="50" cy="50" r="18" fill="none" stroke="#10b981" strokeWidth="0.5" className="animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20" vectorEffect="non-scaling-stroke" />
                            </svg>

                            {/* Center Node */}
                            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="z-10 bg-[#0a0c10] p-4 md:p-6 rounded-full border border-emerald-500 shadow-[0_0_60px_rgba(16,185,129,0.3)] backdrop-blur-md flex flex-col items-center relative group">
                                <div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-pulse"></div>
                                <Target size={32} className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] md:w-12 md:h-12" />
                                <div className="absolute -bottom-8 md:-bottom-10 bg-emerald-950/90 text-emerald-400 text-[10px] md:text-xs font-mono px-3 md:px-4 py-1.5 rounded border border-emerald-500/50 whitespace-nowrap tracking-wider shadow-lg flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                                    {isRtl ? 'התאמה מאומתת' : 'MATCH_CONFIRMED'}
                                </div>
                            </motion.div>

                            {/* Detailed Data Nodes */}
                            {contextNodes.map((node, i) => (
                                <div
                                    key={i}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 bg-[#0a0c10]/95 rounded-lg border border-white/10 shadow-xl backdrop-blur-md flex flex-col overflow-hidden group hover:border-emerald-500/50 transition-colors duration-300"
                                    style={{ top: node.top, left: node.left }}
                                >
                                    {/* Node Header */}
                                    <div className="bg-white/5 p-2 flex items-center justify-between border-b border-white/5">
                                        <div className={`flex items-center gap-2 ${node.color}`}>
                                            <node.icon size={12} className="md:w-4 md:h-4" />
                                            <span className="text-[9px] md:text-[10px] font-bold tracking-wider">{node.source}</span>
                                        </div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                    </div>

                                    {/* Node Body */}
                                    <div className="p-2 md:p-3">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="text-[8px] md:text-[9px] text-slate-500 uppercase tracking-wide">
                                                {isRtl ? 'בתהליך עיבוד' : 'Processing'}
                                            </div>
                                        </div>
                                        <div className="text-[10px] md:text-xs font-mono text-emerald-100 flex items-center gap-1.5">
                                            <ArrowRight size={10} className="text-emerald-500" />
                                            {node.action}
                                        </div>
                                    </div>

                                    {/* Decorative Corner */}
                                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500/50"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ================= LEFT SIDE: CHAOS (Problem) ================= */}
                    <div
                        className="absolute inset-0 bg-[#080202] overflow-hidden border-r border-red-500/50 shadow-[5px_0_100px_rgba(220,38,38,0.2)]"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <div className="absolute top-4 md:top-8 left-4 md:left-8 text-red-500 font-bold tracking-[0.2em] bg-red-950/40 px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-red-500/30 z-20 backdrop-blur-md flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.2)] text-xs md:text-sm">
                            <AlertTriangle size={14} className="animate-pulse md:w-4 md:h-4" />
                            {t.before}
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
                        className="absolute top-0 bottom-0 w-1 cursor-ew-resize z-30 group-active:scale-105 transition-transform"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        {/* Vertical Beam */}
                        <div className="absolute inset-0 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-white to-emerald-500 opacity-80 blur-sm"></div>

                        {/* Handle UI */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-12 md:w-12 md:h-20 bg-[#0F1115] border border-white/20 rounded-lg md:rounded-xl flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.3)] backdrop-blur-xl">
                            <div className="flex gap-0.5 md:gap-1 items-center">
                                <div className="w-0.5 h-6 md:h-8 bg-gradient-to-b from-red-500/50 to-transparent rounded-full"></div>
                                <div className="w-0.5 md:w-1 h-8 md:h-10 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"></div>
                                <div className="w-0.5 h-6 md:h-8 bg-gradient-to-b from-transparent to-emerald-500/50 rounded-full"></div>
                            </div>
                            {/* Arrows */}
                            <div className="absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 text-white/50 text-[8px] md:text-[10px] animate-pulse">◄</div>
                            <div className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 text-white/50 text-[8px] md:text-[10px] animate-pulse">►</div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center text-slate-500 text-[10px] md:text-xs mt-4 md:mt-8 font-mono tracking-[0.2em] uppercase opacity-60">
                {isRtl ? '◄ גרור לחשיפת ההקשר ►' : '◄ DRAG TO REVEAL CONTEXT ►'}
            </p>
        </div>
    );
};

export default ChaosContextSlider;
