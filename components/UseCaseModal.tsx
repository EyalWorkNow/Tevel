
import React, { useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
// Iconsax imports
import {
    CloseSquare, TickCircle, ShieldSecurity, Gps, Folder, Activity,
    DocumentText, ArrowRight2, Flash, CommandSquare, Scan, Cpu,
    Warning2, FingerScan, Code1, Data, Layer, Hierarchy, Profile2User
} from 'iconsax-react';

interface UseCaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
    isRtl: boolean;
    icon: React.ReactNode;
}

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
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -20, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
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
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-0 md:p-8"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className={`
                                relative w-full md:max-w-6xl h-full md:h-[85vh] flex flex-col md:flex-row 
                                bg-[#030303] md:rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]
                                border border-white/10 ring-1 ring-white/5
                                ${isRtl ? 'text-right' : 'text-left'}
                            `}
                            dir={isRtl ? 'rtl' : 'ltr'}
                        >
                            {/* Cinematic Glow Behind */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className={`absolute top-4 md:top-6 ${isRtl ? 'left-4 md:left-6' : 'right-4 md:right-6'} z-50 p-2 group flex items-center justify-center rounded-full bg-black/40 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md`}
                            >
                                <CloseSquare size={24} variant="Bold" className="text-slate-400 group-hover:text-white transition-colors" />
                            </button>


                            {/* === LEFT COLUMN: THE DOSSIER (Metadata) === */}
                            <div className="w-full md:w-[320px] lg:w-[380px] bg-[#050505]/80 backdrop-blur-xl border-b md:border-b-0 md:border-r border-white/5 relative flex flex-col shrink-0 z-20">

                                {/* Header / Identity */}
                                <div className="p-6 md:p-10 pb-0 md:pb-6 relative">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>

                                    <div className="mb-6 md:mb-10 relative group">
                                        <div className="absolute -inset-4 bg-emerald-500/10 blur-2xl rounded-full opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Scanner Ring Animation */}
                                        <div className="absolute -inset-[2px] rounded-2xl border border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-[scan_2s_linear_infinite]"></div>
                                        </div>

                                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-emerald-950/50 to-black border border-emerald-500/30 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500">
                                            <div className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:text-emerald-300 transition-colors">
                                                {React.cloneElement(icon as React.ReactElement<any>, { size: 32, variant: 'Bulk' })}
                                            </div>
                                            {/* Corner Accents */}
                                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500/50"></div>
                                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500/50"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 w-fit uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                            {isRtl ? 'סיווג: שמור' : 'RESTRICTED ACCESS'}
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight uppercase tracking-tight">
                                            {data.title}
                                        </h2>
                                        <div className="flex items-center gap-3 font-mono text-xs text-slate-500 pt-2">
                                            <span className="text-emerald-500/60">ID://</span>
                                            <span>{data.id.toUpperCase()}_REV_04</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Meta Grid */}
                                <div className="p-6 md:p-10 space-y-6 md:mt-auto">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 transition-colors group">
                                            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                                <Hierarchy size={10} className="text-emerald-500/50" />
                                                {isRtl ? 'פרוטוקול' : 'PROTOCOL'}
                                            </div>
                                            <div className="font-mono text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">
                                                {data.protocol || 'STD-88'}
                                            </div>
                                        </div>
                                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 transition-colors group">
                                            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                                <Activity size={10} className="text-emerald-500/50" />
                                                {isRtl ? 'סטטוס' : 'STATUS'}
                                            </div>
                                            <div className="font-mono text-sm text-emerald-400 font-bold flex items-center gap-2">
                                                {isRtl ? 'פעיל' : 'ACTIVE'}
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse box-content border border-emerald-500/20 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 transition-colors group col-span-2">
                                            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                                <ShieldSecurity size={10} className="text-emerald-500/50" />
                                                {isRtl ? 'רמת הצפנה' : 'SECURITY LEVEL'}
                                            </div>
                                            <div className="font-mono text-sm text-slate-200 group-hover:text-white transition-colors">
                                                TS/SCI // NOFORN
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* === RIGHT COLUMN: CONTENT === */}
                            <div className="flex-1 relative overflow-y-auto custom-scrollbar bg-gradient-to-b from-[#080808] to-[#030303]">
                                {/* Grid Background */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50"></div>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="p-6 md:p-12 space-y-8 md:space-y-12 relative z-10"
                                >

                                    {/* 1. Mission Brief */}
                                    <motion.div variants={itemVariants} className="max-w-3xl">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="h-px w-8 bg-emerald-500/50"></div>
                                            <h3 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.2em]">
                                                {isRtl ? 'תקציר מנהלים' : 'MISSION BRIEF'}
                                            </h3>
                                        </div>
                                        <p className="text-lg md:text-2xl text-slate-200 font-light leading-relaxed">
                                            "{data.desc}"
                                        </p>
                                    </motion.div>

                                    <div className="h-px w-full bg-gradient-to-r from-white/5 to-transparent"></div>

                                    {/* 2. Intelligence Data (Terminal) */}
                                    <motion.div variants={itemVariants}>
                                        <div className="flex items-center gap-2 mb-4 text-slate-400">
                                            <CommandSquare size={16} />
                                            <h3 className="text-xs font-bold uppercase tracking-[0.2em]">
                                                {isRtl ? 'נתוני מודיעין' : 'INTELLIGENCE DATA'}
                                            </h3>
                                        </div>
                                        <div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-5 md:p-6 font-mono text-sm text-slate-300 shadow-inner group relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-emerald-500/50 transition-all duration-700"></div>
                                            <div className="flex gap-3 relative z-10">
                                                <div className="flex flex-col gap-1 text-slate-600 text-[10px] pt-1 select-none">
                                                    <span>01</span>
                                                    <span>02</span>
                                                    <span>03</span>
                                                </div>
                                                <div className="flex-1 space-y-1">
                                                    <div className="text-slate-500">
                                                        <span className="text-purple-400">const</span> <span className="text-blue-400">intelData</span> = <span className="text-yellow-300">{'{'}</span>
                                                    </div>
                                                    <div className="pl-4">
                                                        <span className="text-slate-400">source:</span> <span className="text-green-400">"CLASSIFIED_FEED"</span>,
                                                    </div>
                                                    <div className="pl-4 text-slate-200">
                                                        {data.details?.fullDesc}
                                                    </div>
                                                    <div className="text-yellow-300">{'}'}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* 3. Capabilities Cards - Enhanced */}
                                    <motion.div variants={itemVariants}>
                                        <div className="flex items-center gap-2 mb-4 text-slate-400">
                                            <Cpu size={16} />
                                            <h3 className="text-xs font-bold uppercase tracking-[0.2em]">
                                                {isRtl ? 'יכולות ליבה' : 'CORE CAPABILITIES'}
                                            </h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {data.details?.capabilities?.map((cap: string, i: number) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
                                                    className="group p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden cursor-default"
                                                >
                                                    <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 translate-x-2">
                                                        <ArrowRight2 size={14} className="text-emerald-500" />
                                                    </div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <div className="w-6 h-6 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                                                            <Flash size={12} variant="Bold" />
                                                        </div>
                                                        <div className="text-[10px] font-mono text-slate-500">0{i + 1} // MOD</div>
                                                    </div>
                                                    <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors pr-6">
                                                        {cap}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* 4. Related Entities (New Section) */}
                                    <motion.div variants={itemVariants} className="pt-2">
                                        <div className="flex items-center gap-2 mb-4 text-slate-400">
                                            <Profile2User size={16} />
                                            <h3 className="text-xs font-bold uppercase tracking-[0.2em]">
                                                {isRtl ? 'ישויות מקושרות' : 'RELATED ENTITIES'}
                                            </h3>
                                        </div>
                                        <div className="flex gap-4 overflow-x-auto pb-2">
                                            {[1, 2, 3].map((_, i) => (
                                                <div key={i} className="flex items-center gap-3 p-2 pr-4 rounded-lg border border-white/5 bg-white/[0.02] min-w-[180px]">
                                                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-mono text-slate-400">
                                                        EN-0{i + 1}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-xs text-slate-300">Target Alpha</span>
                                                        <span className="text-[9px] text-emerald-500 font-mono">98% MATCH</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* 5. Impact (Bottom Highlight) */}
                                    <motion.div variants={itemVariants} className="pt-4">
                                        <div className="relative rounded-2xl overflow-hidden p-[1px] bg-gradient-to-r from-emerald-500/20 via-white/5 to-transparent group hover:from-emerald-500/40 transition-all duration-500">
                                            <div className="bg-[#050505] rounded-2xl p-6 md:p-8 relative">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-500"></div>

                                                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                                                    <Flash size={16} variant="Bold" className="text-emerald-500" />
                                                    {isRtl ? 'אימפקט אסטרטגי' : 'STRATEGIC IMPACT'}
                                                </h4>
                                                <p className="text-slate-300 leading-relaxed max-w-2xl font-light group-hover:text-white transition-colors duration-300">
                                                    {data.details?.impact}
                                                </p>
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
