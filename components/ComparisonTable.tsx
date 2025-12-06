
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertTriangle, Minus } from 'lucide-react';

interface ComparisonTableProps {
  data: any;
  isRtl: boolean;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data, isRtl }) => {
  const getStatusIcon = (text: string, columnIndex: number) => {
    if (!text) return <Minus className="text-slate-700 w-3 h-3 md:w-4 md:h-4" />;
    
    // Column 1 is ALWAYS Tevel (Positive)
    if (columnIndex === 1) {
        return <Check className="text-emerald-400 w-4 h-4 md:w-5 md:h-5" />; 
    }

    const lowerText = text.toLowerCase();
    
    // Negative Indicators
    const negatives = ["no", "none", "manual", "complex", "expensive", "months", "high effort", "אין", "ידני", "מורכב", "יקר", "חודשים"];
    if (negatives.some(neg => lowerText.includes(neg))) {
        return <X className="text-red-500/50 w-4 h-4 md:w-5 md:h-5" />;
    }
    
    // Warning Indicators
    const warnings = ["partial", "roadmap", "vision", "visual only", "on demand", "configured", "limited", "חלקי", "ויזואלי בלבד", "לפי דרישה"];
    if (warnings.some(warn => lowerText.includes(warn))) {
         return <AlertTriangle className="text-amber-500/50 w-4 h-4 md:w-5 md:h-5" />;
    }

    // Default positive (e.g. "Instant", "Automated")
    return <Check className="text-blue-500/50 w-4 h-4 md:w-5 md:h-5" />;
  };

  return (
    <div className="w-full flex justify-center pb-8 pt-4 px-0 md:px-4">
      {/* Container allows scrolling only on mobile, fits on desktop */}
      <div className="w-full max-w-7xl overflow-x-auto md:overflow-visible">
        
        <div className="min-w-[700px] md:min-w-0 w-full bg-white/[0.02] rounded-3xl border border-white/5 backdrop-blur-md overflow-hidden shadow-2xl shadow-black/50 relative group">
            
            {/* Scanning Light Beam */}
            <motion.div 
                initial={{ left: "-100%" }}
                whileInView={{ left: "200%" }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-0 pointer-events-none"
            />

            {/* Header */}
            <div className="grid grid-cols-5 bg-black/40 border-b border-white/5 relative z-10">
            {data.columns.map((col: string, i: number) => (
                <div 
                key={i} 
                className={`p-3 md:p-6 font-bold text-[10px] md:text-sm uppercase tracking-widest flex items-center justify-center text-center break-words
                    ${i === 1 ? 'text-emerald-400 bg-emerald-500/5' : 'text-slate-400'}
                    ${i === 0 ? 'justify-start ltr:text-left rtl:text-right px-4 md:px-8 text-slate-200' : ''}
                `}
                >
                {col}
                </div>
            ))}
            </div>

            {/* Rows */}
            {data.rows.map((row: any, idx: number) => (
            <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className={`grid grid-cols-5 hover:bg-white/[0.03] transition-colors border-b border-white/5 last:border-0 group relative z-10`}
            >
                {/* Feature Name */}
                <div className="p-3 md:p-5 flex items-center font-medium text-slate-300 text-[10px] md:text-sm ltr:text-left rtl:text-right px-4 md:px-8 group-hover:text-white transition-colors">
                {row.feature}
                </div>

                {/* TEVEL (Our) Column */}
                <div className="p-3 md:p-5 flex items-center justify-center text-center text-sm font-bold text-emerald-100 bg-emerald-500/[0.02] border-x border-emerald-500/10 relative group-hover:bg-emerald-500/[0.05] transition-colors">
                <div className="flex flex-col gap-1 md:gap-2 items-center">
                    <div className="p-1 md:p-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                        <Check className="text-emerald-400 w-3 h-3 md:w-4 md:h-4" />
                    </div>
                    <span className="text-[9px] md:text-xs text-emerald-300/80 leading-tight">{row.tevel}</span>
                </div>
                </div>

                {/* Palantir */}
                <div className="p-3 md:p-5 flex flex-col items-center justify-center text-center text-sm text-slate-500 gap-1 md:gap-2 border-r border-white/5">
                {getStatusIcon(row.palantir, 2)}
                <span className="text-[9px] md:text-[10px] opacity-70 leading-tight">{row.palantir}</span>
                </div>

                {/* Maltego */}
                <div className="p-3 md:p-5 flex flex-col items-center justify-center text-center text-sm text-slate-500 gap-1 md:gap-2 border-r border-white/5">
                {getStatusIcon(row.maltego, 3)}
                <span className="text-[9px] md:text-[10px] opacity-70 leading-tight">{row.maltego}</span>
                </div>

                {/* Recorded Future */}
                <div className="p-3 md:p-5 flex flex-col items-center justify-center text-center text-sm text-slate-500 gap-1 md:gap-2">
                {getStatusIcon(row.rf, 4)}
                <span className="text-[9px] md:text-[10px] opacity-70 leading-tight">{row.rf}</span>
                </div>

            </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
