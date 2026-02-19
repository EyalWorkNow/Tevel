
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, Variants, useAnimation } from 'framer-motion';
// Iconsax imports
import {
    CloseSquare, TickCircle, ShieldSecurity, Gps, Folder, Activity,
    DocumentText, ArrowRight2, Flash, CommandSquare, Scan, Cpu,
    Warning2, FingerScan, Code1, Data, Layer, Hierarchy, Profile2User,
    Global, Radar, Bank, Lock1 // Proper single import block
} from 'iconsax-react';

interface UseCaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
    isRtl: boolean;
    icon: React.ReactNode;
}

// --- Digital Decrypt Text Component ---
const DecryptText: React.FC<{ text: string; className?: string; revealDelay?: number }> = ({ text, className, revealDelay = 0 }) => {
    const [display, setDisplay] = useState('');
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

    useEffect(() => {
        let iteration = 0;
        let interval: NodeJS.Timeout;

        const startDecryption = () => {
            interval = setInterval(() => {
                setDisplay(prev =>
                    text.split("").map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        const timer = setTimeout(startDecryption, revealDelay * 1000);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [text, revealDelay]);

    return <span className={className}>{display}</span>;
};


// --- Particle Grid Background ---
const ParticleGrid = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 transform perspective-1000 rotateX(60deg) scale-150 origin-top animate-[grid-move_20s_linear_infinite]"></div>
            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-0"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: 0
                    }}
                    animate={{
                        y: [null, Math.random() * -100],
                        opacity: [0, 0.6, 0]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                />
            ))}
        </div>
    );
};


const UseCaseModal: React.FC<UseCaseModalProps> = ({ isOpen, onClose, data, isRtl, icon }) => {

    // Handle ESC key press
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!data) return null;

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const panelVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: { duration: 0.5, ease: "circOut" }
        },
        exit: { opacity: 0, scale: 0.95, filter: 'blur(10px)', transition: { duration: 0.3 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-0 md:p-6"
                    >
                        {/* Holographic Container */}
                        <motion.div
                            variants={panelVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            className={`
                                relative w-full md:max-w-7xl h-full md:h-[90vh] flex flex-col md:flex-row 
                                bg-[#020202]/80 backdrop-blur-3xl overflow-hidden rounded-none md:rounded-2xl
                                border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.15)]
                                ${isRtl ? 'text-right' : 'text-left'}
                            `}
                            dir={isRtl ? 'rtl' : 'ltr'}
                        >
                            <ParticleGrid />

                            {/* Scanning Border Effect */}
                            <div className="absolute inset-0 pointer-events-none z-50 rounded-2xl border border-emerald-500/10"></div>
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-[scan-fast_3s_linear_infinite] shadow-[0_0_15px_rgba(16,185,129,0.8)] z-50 pointer-events-none"></div>

                            {/* Close Button (Floating) */}
                            <button
                                onClick={onClose}
                                className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} z-[60] p-2 group flex items-center justify-center rounded-sm border border-emerald-500/30 bg-black/40 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300 backdrop-blur-md`}
                            >
                                <CloseSquare size={20} variant="Bold" className="text-emerald-500/70 group-hover:text-emerald-400 transition-colors" />
                            </button>


                            {/* === LEFT COLUMN: HOLOGRAPHIC IDENTITY === */}
                            <div className="w-full md:w-[400px] border-b md:border-b-0 md:border-r border-emerald-500/20 relative flex flex-col shrink-0 z-20 bg-gradient-to-b from-emerald-950/10 to-transparent overflow-y-auto overflow-x-hidden custom-scrollbar">

                                {/* Header */}
                                <div className="p-8 pb-0 relative">
                                    <div className="mb-8 relative group perspective-1000">
                                        <div className="absolute -inset-10 bg-emerald-500/20 blur-[60px] rounded-full opacity-60 animate-pulse"></div>

                                        {/* 3D Floating Icon Container */}
                                        <motion.div
                                            initial={{ rotateX: 0, rotateY: 0 }}
                                            whileHover={{ rotateX: 10, rotateY: 10 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className="relative w-24 h-24 rounded-xl bg-black/40 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)] backdrop-blur-md"
                                        >
                                            {/* Corner Brackets */}
                                            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-400"></div>
                                            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-400"></div>
                                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-400"></div>
                                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-400"></div>

                                            <div className="text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">
                                                {React.cloneElement(icon as React.ReactElement<any>, { size: 40, variant: 'Bulk' })}
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 w-fit uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                            <Radar size={12} className="animate-spin-slow" />
                                            {isRtl ? 'סיווג: שמור' : 'RESTRICTED ACCESS'}
                                        </div>

                                        <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-400 leading-tight uppercase tracking-tight shadow-emerald-500/20 drop-shadow-lg">
                                            <DecryptText text={data.title} revealDelay={0.2} />
                                        </h2>

                                        <div className="flex flex-col gap-1 font-mono text-xs text-emerald-500/60 pt-4 border-t border-emerald-500/20 w-full">
                                            <span>ID://</span>
                                            <span className="text-emerald-400 break-all leading-relaxed bg-emerald-500/5 p-2 rounded border border-emerald-500/10"><DecryptText text={`${data.id.toUpperCase()}_REV_04`} revealDelay={0.8} /></span>
                                        </div>
                                    </div>
                                </div>

                                {/* Meta Stats - HUD Style */}
                                <div className="p-8 space-y-6 mt-auto">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center group">
                                            <div className="text-[10px] text-emerald-500/60 uppercase tracking-widest flex items-center gap-2">
                                                <Hierarchy size={10} />
                                                {isRtl ? 'פרוטוקול' : 'PROTOCOL'}
                                            </div>
                                            <div className="font-mono text-sm text-white group-hover:text-emerald-300 transition-colors shadow-emerald-500/20 break-all text-right pl-4">
                                                <DecryptText text={data.protocol || 'STD-88'} revealDelay={1} />
                                            </div>
                                        </div>
                                        <div className="h-px bg-emerald-500/10 w-full"></div>

                                        <div className="flex justify-between items-center group">
                                            <div className="text-[10px] text-emerald-500/60 uppercase tracking-widest flex items-center gap-2">
                                                <Activity size={10} />
                                                {isRtl ? 'סטטוס' : 'STATUS'}
                                            </div>
                                            <div className="font-mono text-sm text-emerald-400 font-bold flex items-center gap-2">
                                                {isRtl ? 'פעיל' : 'ACTIVE'}
                                                <div className="flex space-x-0.5">
                                                    <span className="w-1 h-3 bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite]"></span>
                                                    <span className="w-1 h-3 bg-emerald-500 animate-[pulse_1s_ease-in-out_0.2s_infinite]"></span>
                                                    <span className="w-1 h-3 bg-emerald-500 animate-[pulse_1s_ease-in-out_0.4s_infinite]"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-px bg-emerald-500/10 w-full"></div>

                                        <div className="flex justify-between items-center group">
                                            <div className="text-[10px] text-emerald-500/60 uppercase tracking-widest flex items-center gap-2">
                                                <ShieldSecurity size={10} />
                                                {isRtl ? 'הצפנה' : 'ENCRYPTION'}
                                            </div>
                                            <div className="font-mono text-sm text-emerald-200">
                                                AES-256-GCM
                                            </div>
                                        </div>
                                        {/* Spacer for bottom scroll */}
                                        <div className="h-4"></div>
                                    </div>
                                </div>
                            </div>


                            {/* === RIGHT COLUMN: DATA STREAM === */}
                            <div className="flex-1 relative overflow-y-auto custom-scrollbar">
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="p-8 md:p-16 space-y-12 relative z-10"
                                >

                                    {/* 1. Mission Brief */}
                                    <motion.div variants={itemVariants} className="max-w-4xl">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="h-px w-12 bg-emerald-500"></div>
                                            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.3em] shadow-emerald-500/50 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">
                                                {isRtl ? 'תקציר מנהלים' : 'MISSION BRIEF'}
                                            </h3>
                                        </div>
                                        <p className="text-xl md:text-3xl text-emerald-50 font-extralight leading-relaxed" style={{ textShadow: '0 0 10px rgba(16,185,129,0.2)' }}>
                                            "{data.desc}"
                                        </p>
                                    </motion.div>


                                    {/* 2. Intelligence Data (Holographic Terminal - CLEAN READABILITY) */}
                                    <motion.div variants={itemVariants}>
                                        <div className="flex items-center gap-2 mb-4 text-emerald-500/50">
                                            <CommandSquare size={16} />
                                            <h3 className="text-xs font-bold uppercase tracking-[0.2em]">
                                                {isRtl ? 'נתוני מודיעין' : 'RAW INTELLIGENCE'}
                                            </h3>
                                        </div>
                                        <div className="bg-[#050505] rounded-lg border border-white/10 p-6 font-mono text-xs md:text-sm relative overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500 shadow-inner">
                                            <div className="absolute top-0 right-0 p-3 flex gap-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                                <span className="text-[9px] text-emerald-500/60 font-bold tracking-widest">LIVE FEED</span>
                                            </div>

                                            {/* Data Lines - Table Style */}
                                            <div className="space-y-3 relative z-10">
                                                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4 items-baseline border-b border-white/5 pb-2">
                                                    <span className="text-slate-500 uppercase text-[10px] tracking-widest">Source_Type</span>
                                                    <span className="text-emerald-300">SIGINT_COLLECTION</span>
                                                </div>
                                                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4 items-baseline border-b border-white/5 pb-2">
                                                    <span className="text-slate-500 uppercase text-[10px] tracking-widest">Payload</span>
                                                    <span className="text-slate-300 leading-relaxed">"{data.details?.fullDesc?.substring(0, 120)}..."</span>
                                                </div>
                                                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4 items-baseline border-b border-white/5 pb-2">
                                                    <span className="text-slate-500 uppercase text-[10px] tracking-widest">Confidence</span>
                                                    <div className="flex items-center gap-2">
                                                        <div className="h-1.5 w-24 bg-slate-800 rounded-full overflow-hidden">
                                                            <div className="h-full bg-emerald-500 w-[98%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                                                        </div>
                                                        <span className="text-emerald-400 font-bold">98.9%</span>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4 items-baseline">
                                                    <span className="text-slate-500 uppercase text-[10px] tracking-widest">Encryption</span>
                                                    <span className="text-emerald-500/70 flex items-center gap-2">
                                                        <ShieldSecurity size={12} />
                                                        AES-256-GCM (VERIFIED)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* 3. Capabilities Cards - Glass Panels (Redesigned) */}
                                    <motion.div variants={itemVariants}>
                                        <div className="flex items-center gap-2 mb-6 text-emerald-500/50">
                                            <Cpu size={16} />
                                            <h3 className="text-xs font-bold uppercase tracking-[0.2em]">
                                                {isRtl ? 'יכולות ליבה' : 'CORE CAPABILITIES'}
                                            </h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {data.details?.capabilities?.map((cap: string, i: number) => {
                                                // Dynamic colors for variety
                                                const colors = [
                                                    'from-emerald-500/10 to-transparent border-emerald-500/20 hover:border-emerald-400',
                                                    'from-blue-500/10 to-transparent border-blue-500/20 hover:border-blue-400',
                                                    'from-purple-500/10 to-transparent border-purple-500/20 hover:border-purple-400',
                                                    'from-amber-500/10 to-transparent border-amber-500/20 hover:border-amber-400',
                                                    'from-cyan-500/10 to-transparent border-cyan-500/20 hover:border-cyan-400',
                                                    'from-rose-500/10 to-transparent border-rose-500/20 hover:border-rose-400'
                                                ];
                                                const colorClass = colors[i % colors.length];
                                                const iconColor = colorClass.split(' ')[0].replace('from-', 'text-').replace('/10', '');

                                                return (
                                                    <motion.div
                                                        key={i}
                                                        whileHover={{ y: -2, scale: 1.01 }}
                                                        className={`group relative p-5 rounded-xl bg-gradient-to-br ${colorClass} border transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[100px]`}
                                                    >
                                                        <div className="flex justify-between items-start mb-2 relative z-10">
                                                            <div className={`p-2 rounded-lg bg-black/40 border border-white/5 ${iconColor}`}>
                                                                <Flash size={18} variant="Bulk" />
                                                            </div>
                                                            <span className="text-[9px] font-mono text-slate-500 opacity-50">0{i + 1}</span>
                                                        </div>

                                                        <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors relative z-10 leading-tight">
                                                            {cap}
                                                        </h4>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </motion.div>

                                    {/* 4. Related Entities (Vertical Network List) */}
                                    <motion.div variants={itemVariants} className="pt-8 mb-8">
                                        <div className="flex items-center gap-2 mb-6 text-emerald-400">
                                            <Profile2User size={20} variant="Bold" />
                                            <h3 className="text-sm font-black uppercase tracking-[0.2em]">
                                                {isRtl ? 'ישויות מקושרות' : 'RELATED ENTITIES'}
                                            </h3>
                                        </div>

                                        <div className="relative pl-6 md:pl-8 border-l-2 border-emerald-500/20 space-y-4 md:space-y-6">
                                            {/* Root Node Mockup */}
                                            <div className="absolute -left-[9px] -top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-black box-content shadow-[0_0_15px_rgba(16,185,129,0.5)] z-20"></div>

                                            {['Finance_Dept', 'Offshore_LLC', 'Crypto_Wallet_X'].map((entity, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="relative group"
                                                >
                                                    {/* Connector Line */}
                                                    <div className="absolute -left-[34px] md:-left-[42px] top-1/2 w-6 md:w-8 h-[2px] bg-emerald-500/20 group-hover:bg-emerald-500 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-300"></div>
                                                    <div className="absolute -left-[36px] md:-left-[44px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black border-2 border-emerald-500/50 group-hover:border-emerald-400 group-hover:bg-emerald-500 transition-colors z-10"></div>

                                                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-emerald-500/30 transition-all cursor-pointer flex items-center gap-4 md:gap-5 group-hover:translate-x-1 duration-300">
                                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 text-slate-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30">
                                                            {i === 0 ? <Global size={20} variant="Bulk" /> : i === 1 ? <Bank size={20} variant="Bulk" /> : <Lock1 size={20} variant="Bulk" />}
                                                        </div>

                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="text-base md:text-lg font-bold text-slate-200 group-hover:text-white truncate transition-colors mb-0.5">
                                                                {entity}
                                                            </h4>
                                                            <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-mono text-slate-500 group-hover:text-emerald-400/80 transition-colors">
                                                                <span className="uppercase tracking-wider">Type: {i === 0 ? 'ORG' : i === 1 ? 'BANK' : 'ASSET'}</span>
                                                                <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                                                <span className="flex items-center gap-1">
                                                                    LINK: {98 - (i * 12)}%
                                                                    <div className="w-8 md:w-12 h-1 bg-slate-700 rounded-full overflow-hidden">
                                                                        <div className="h-full bg-emerald-500" style={{ width: `${98 - (i * 12)}%` }}></div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <ArrowRight2 size={18} className="text-slate-600 group-hover:text-emerald-400 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* 5. Impact (Holographic Stamp) */}
                                    <motion.div variants={itemVariants} className="pt-8 pb-12">
                                        <div className="relative rounded-xl overflow-hidden p-[1px] bg-gradient-to-r from-emerald-500/40 via-emerald-900/10 to-transparent group">
                                            <div className="bg-[#030303]/90 rounded-xl p-8 md:p-10 relative overflow-hidden">
                                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-700"></div>

                                                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
                                                    <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                                        <Flash size={24} variant="Bold" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-2">
                                                            {isRtl ? 'אימפקט אסטרטגי' : 'STRATEGIC IMPACT'}
                                                        </h4>
                                                        <p className="text-emerald-100/80 leading-relaxed font-light text-lg">
                                                            {data.details?.impact}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                </motion.div>
                            </div>

                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default UseCaseModal;
