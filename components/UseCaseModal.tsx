
import React, { useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, CheckCircle2, Shield, Target, Database, Activity, FileText, ChevronRight, Zap, Terminal, ScanLine, Cpu, AlertTriangle, Fingerprint } from 'lucide-react';

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
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    visible: { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)',
        transition: { duration: 0.5, ease: "easeOut" }
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
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-0 md:p-6"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} 
              className={`
                relative w-full md:max-w-5xl h-full md:h-auto md:max-h-[90vh] flex flex-col md:flex-row 
                bg-[#020202] md:rounded-2xl overflow-hidden shadow-[0_0_120px_rgba(16,185,129,0.2)]
                border-x md:border border-emerald-500/20
                ${isRtl ? 'text-right' : 'text-left'}
              `}
              dir={isRtl ? 'rtl' : 'ltr'}
            >
               {/* Scanning Line Animation - Top Border */}
               <motion.div 
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 0.8, ease: "easeInOut" }}
                 className="absolute top-0 left-0 h-1 bg-gradient-to-r from-emerald-900 via-emerald-400 to-emerald-900 z-50 shadow-[0_0_20px_rgba(16,185,129,0.8)]"
               />

               {/* Close Button */}
               <button 
                   onClick={onClose} 
                   className={`absolute top-3 md:top-4 ${isRtl ? 'left-3 md:left-4' : 'right-3 md:right-4'} z-50 p-2 group flex items-center justify-center rounded-full bg-black/60 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 backdrop-blur-md`}
               >
                   <X size={18} className="text-slate-400 group-hover:text-red-400 transition-colors md:w-5 md:h-5" />
               </button>

               {/* === LEFT COLUMN: IDENTITY (Header on Mobile) === */}
               <div className="w-full md:w-[340px] bg-[#030303] relative flex flex-col border-b md:border-b-0 md:border-r border-white/5 shrink-0">
                   {/* Background Effects */}
                   <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                   <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-transparent to-black pointer-events-none"></div>
                   
                   {/* Animated Grid Background */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                   <div className="p-4 md:p-8 flex flex-col h-full relative z-10">
                       
                       {/* Classification Header - Compact on mobile */}
                       <div className="flex items-center justify-between mb-4 md:mb-12">
                           <div className="px-2 py-0.5 md:px-3 md:py-1 rounded bg-emerald-950/30 border border-emerald-500/30 text-[9px] font-mono text-emerald-500 tracking-widest uppercase flex items-center gap-2 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[pulse_2s_infinite]"></span>
                               {isRtl ? 'סיווג: שמור' : 'RESTRICTED ACCESS'}
                           </div>
                           {/* Spacer to avoid overlap with close button on mobile */}
                           <div className="w-8 md:hidden"></div>
                       </div>

                       {/* Main Icon Display - Desktop Only */}
                       <div className="hidden md:block mb-8 relative group perspective-1000">
                           <div className="absolute inset-0 bg-emerald-500/20 blur-[50px] rounded-full opacity-20 group-hover:opacity-50 transition-opacity duration-700"></div>
                           
                           {/* Rotating Ring */}
                           <div className="absolute inset-[-10px] border border-dashed border-emerald-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                           
                           <motion.div 
                                whileHover={{ rotateY: 10, rotateX: 10 }}
                                className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#0A0C10] border border-emerald-500/30 flex items-center justify-center shadow-2xl backdrop-blur-xl group-hover:border-emerald-400/60 transition-all duration-300"
                           >
                                <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]">
                                    {React.cloneElement(icon as React.ReactElement<any>, { size: 40, strokeWidth: 1.5 })}
                                </div>
                                
                                {/* Tactical Corners */}
                                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-500 opacity-60"></div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-500 opacity-60"></div>
                           </motion.div>
                       </div>

                       {/* Title Section - Responsive Layout */}
                       <div className="flex items-center gap-4 mb-2 md:mb-6">
                           {/* Mobile Icon (Small) */}
                           <div className="md:hidden flex-shrink-0 w-12 h-12 bg-[#0A0C10] border border-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-400 shadow-lg">
                                {React.cloneElement(icon as React.ReactElement<any>, { size: 24, strokeWidth: 1.5 })}
                           </div>

                           <div className="flex-1 min-w-0">
                               <motion.h2 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-lg md:text-4xl font-black text-white leading-tight tracking-tight mb-1 md:mb-3 uppercase truncate"
                               >
                                   {data.title}
                               </motion.h2>
                               <div className="flex items-center gap-2 md:gap-3 font-mono text-[10px] md:text-xs text-slate-500 md:border-t md:border-white/5 md:pt-3 w-fit">
                                   <Fingerprint size={12} className="text-emerald-500/60 md:w-3.5 md:h-3.5" />
                                   <span className="tracking-widest">ID:</span>
                                   <span className="text-emerald-400">{data.id.toUpperCase()}_04</span>
                               </div>
                           </div>
                       </div>

                       {/* Status Info - Compact Horizontal on Mobile, Vertical on Desktop */}
                       <div className="mt-2 md:mt-auto pt-2 md:pt-6 border-t border-white/5 md:border-none flex flex-row md:flex-col gap-2 md:gap-4 overflow-x-auto md:overflow-visible">
                           <div className="flex-1 p-2 md:p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2 md:justify-between min-w-[100px] group hover:bg-white/[0.05] transition-colors">
                               <Terminal size={12} className="text-slate-600 md:hidden" />
                               <div className="flex flex-col">
                                   <span className="text-[8px] md:text-[9px] text-slate-500 uppercase tracking-widest mb-0.5">{isRtl ? 'פרוטוקול' : 'PROTOCOL'}</span>
                                   <span className="font-mono text-[10px] md:text-xs text-white group-hover:text-emerald-300 transition-colors truncate">{data.protocol || 'STD-01'}</span>
                               </div>
                               <Terminal size={14} className="text-slate-600 group-hover:text-emerald-500 transition-colors hidden md:block" />
                           </div>
                           
                           <div className="flex-1 p-2 md:p-3 rounded-lg bg-emerald-900/10 border border-emerald-500/20 flex items-center gap-2 md:justify-between min-w-[100px]">
                               <Activity size={12} className="text-emerald-500 md:hidden" />
                               <div className="flex flex-col">
                                   <span className="text-[8px] md:text-[9px] text-emerald-600 uppercase tracking-widest mb-0.5">{isRtl ? 'סטטוס' : 'STATUS'}</span>
                                   <span className="font-mono text-[10px] md:text-xs text-emerald-400 font-bold flex items-center gap-2">
                                       {isRtl ? 'פעיל' : 'ONLINE'}
                                       <span className="flex h-1.5 w-1.5 relative">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                        </span>
                                   </span>
                               </div>
                               <Activity size={14} className="text-emerald-500 animate-pulse hidden md:block" />
                           </div>
                       </div>
                   </div>
               </div>

               {/* === RIGHT COLUMN: CONTENT === */}
               <div className="flex-1 bg-[#050608] relative overflow-y-auto custom-scrollbar md:h-auto">
                   {/* Cyber Grid Overlay */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-40"></div>
                   
                   <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="p-5 md:p-10 space-y-6 md:space-y-8 relative z-10 pb-10"
                   >
                       
                       {/* 1. Mission Brief - Alert Box Style */}
                       <motion.div variants={itemVariants}>
                           <div className="flex items-center gap-3 mb-3">
                                <div className="p-1.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    <AlertTriangle size={14} />
                                </div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                                    {isRtl ? 'תקציר האירוע' : 'MISSION BRIEF'}
                                </h3>
                           </div>
                           <div className="relative p-4 md:p-6 bg-gradient-to-r from-blue-900/10 to-transparent border-l-4 border-blue-500 rounded-r-xl">
                               <p className="text-base md:text-xl text-white/90 font-light leading-relaxed font-sans">
                                   "{data.desc}"
                               </p>
                           </div>
                       </motion.div>

                       {/* 2. Operational Data - Enhanced Terminal */}
                       <motion.div variants={itemVariants}>
                           <div className="flex items-center gap-3 mb-3">
                                <div className="p-1.5 rounded bg-slate-800 text-slate-400 border border-white/10">
                                    <Terminal size={14} />
                                </div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                                    {isRtl ? 'נתוני מודיעין' : 'OPERATIONAL DATA'}
                                </h3>
                           </div>
                           <div className="bg-[#020202] border border-white/10 rounded-lg p-4 md:p-5 font-mono text-xs md:text-sm text-slate-300 leading-relaxed shadow-inner relative overflow-hidden group">
                               {/* Scan line inside terminal */}
                               <div className="absolute top-0 left-0 w-full h-1 bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.2)] animate-[scan_3s_linear_infinite] opacity-30 pointer-events-none"></div>
                               
                               <div className="flex gap-2">
                                   <span className="text-emerald-500 flex-shrink-0">{'>'}</span>
                                   <span>{data.details?.fullDesc}</span>
                                   <span className="w-1.5 h-3 md:w-2 md:h-4 bg-emerald-500 animate-pulse ml-1 inline-block align-middle"></span>
                               </div>
                           </div>
                       </motion.div>

                       {/* 3. Capabilities - Module Cards */}
                       <motion.div variants={itemVariants}>
                           <div className="flex items-center gap-3 mb-4">
                                <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    <Cpu size={14} />
                                </div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                                    {isRtl ? 'מודולים פעילים' : 'ACTIVE MODULES'}
                                </h3>
                           </div>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                               {data.details?.capabilities?.map((cap: string, i: number) => (
                                   <div key={i} className="group relative bg-[#0A0C10] p-3 md:p-4 rounded-xl border border-white/5 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] overflow-hidden">
                                       {/* Hover Highlight */}
                                       <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                       
                                       <div className="flex items-center gap-3 relative z-10">
                                           <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-500 group-hover:scale-110 transition-transform shrink-0">
                                                <Zap size={14} fill="currentColor" className="opacity-80" />
                                           </div>
                                           <div className="flex flex-col">
                                                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider group-hover:text-emerald-400/80 transition-colors">SYS_MOD_0{i+1}</span>
                                                <span className="text-xs md:text-sm text-slate-200 font-medium group-hover:text-white transition-colors leading-tight">{cap}</span>
                                           </div>
                                       </div>
                                       
                                       {/* Status indicator */}
                                       <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-900 group-hover:bg-emerald-400 transition-colors"></div>
                                   </div>
                               ))}
                           </div>
                       </motion.div>

                       {/* 4. Strategic Impact - Gradient Highlight */}
                       <motion.div variants={itemVariants} className="pt-2 md:pt-4">
                           <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-900/30 to-[#020202] border border-emerald-500/30 p-1 group">
                               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                               <div className="relative bg-[#050608]/80 backdrop-blur-sm rounded-lg p-4 md:p-5 flex items-start gap-4 md:gap-5">
                                   
                                   <div className="p-2 md:p-3 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] shrink-0 group-hover:scale-110 transition-transform duration-500">
                                       <Target size={16} className="md:w-5 md:h-5" />
                                   </div>
                                   
                                   <div>
                                       <h4 className="text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                                           {isRtl ? 'תוצאה אסטרטגית' : 'STRATEGIC OUTCOME'}
                                           <span className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></span>
                                       </h4>
                                       <p className="text-sm md:text-base text-slate-200 leading-relaxed font-light">
                                           {data.details?.impact}
                                       </p>
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
