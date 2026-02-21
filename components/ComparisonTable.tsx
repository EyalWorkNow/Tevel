// Force Update v3
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertTriangle, Minus, ChevronRight, ChevronLeft } from 'lucide-react';

interface ComparisonTableProps {
  data: any;
  isRtl: boolean;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data, isRtl }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Safety check if data structure hasn't propagated yet or is mismatched
  if (!data?.tables) {
    // If we still get the old data structure (columns/rows), we can try to render it or return null.
    // Given the crash "Cannot read properties of undefined (reading 'map')", data.columns was likely undefined too if passed incorrectly,
    // but here we expect data.tables.
    return null;
  }

  const currentTable = data.tables[activeTab];

  const getStatusIcon = (text: any, columnIndex: number) => {
    if (text === null || text === undefined) return <Minus className="text-slate-700 w-3 h-3 md:w-4 md:h-4" />;

    // Convert to string safely
    const strText = String(text);

    // Checkmarks and Xs direct mapping
    if (strText === "✓" || strText === "V") return <Check className="text-emerald-400 w-4 h-4 md:w-5 md:h-5" />;
    if (strText === "✗" || strText === "X") return <X className="text-red-500/50 w-4 h-4 md:w-5 md:h-5" />;

    // Fallback for older text-based data
    const lowerText = strText.toLowerCase();
    const negatives = ["no", "none", "manual", "complex", "expensive", "months", "high effort", "אין", "ידני", "מורכב", "יקר", "חודשים"];
    if (negatives.some(neg => lowerText.includes(neg))) {
      return <X className="text-red-500/50 w-4 h-4 md:w-5 md:h-5" />;
    }
    return <Check className="text-blue-500/50 w-4 h-4 md:w-5 md:h-5" />;
  };

  const tableContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: isRtl ? 30 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 }
    },
    exit: { opacity: 0, x: isRtl ? -30 : 30 }
  };

  return (
    <div className="w-full flex flex-col items-center pb-8 pt-4 px-0 md:px-4">

      {/* Tab Switcher */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 w-full max-w-4xl px-4">
        {data.tables.map((table: any, idx: number) => (
          <button
            key={table.id}
            onClick={() => setActiveTab(idx)}
            className={`
              relative px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300
              ${activeTab === idx
                ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105'
                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'}
            `}
          >
            {table.label}
            {activeTab === idx && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 border-2 border-emerald-400 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Table Container */}
      <div
        className="w-full max-w-7xl overflow-x-auto md:overflow-visible pb-4 px-2 md:px-0 relative"
        onScroll={() => !hasScrolled && setHasScrolled(true)}
      >
        {/* Mobile Swipe Hint */}
        {!hasScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`md:hidden absolute top-1/2 -translate-y-1/2 z-30 pointer-events-none flex items-center justify-center p-3 rounded-full bg-black/60 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] ${isRtl ? 'left-4' : 'right-4'}`}
          >
            {isRtl ? <ChevronLeft className="w-5 h-5 animate-pulse" /> : <ChevronRight className="w-5 h-5 animate-pulse" />}
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tableContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="min-w-[800px] md:min-w-0 w-full bg-white/[0.02] rounded-3xl border border-white/5 backdrop-blur-md overflow-hidden shadow-2xl shadow-black/50 relative group"
          >
            {/* Header */}
            <div
              className="bg-black/40 border-b border-white/5 relative z-10 grid"
              style={{ gridTemplateColumns: `250px repeat(${currentTable.columns.length - 1}, minmax(100px, 1fr))` }}
            >
              {currentTable.columns.map((col: string, i: number) => (
                <div
                  key={i}
                  className={`p-3 md:p-6 font-bold text-[10px] md:text-sm uppercase tracking-widest flex items-center justify-center text-center break-words
                        ${col.includes('TEVEL') || col.includes('טבל') ? 'text-emerald-400 bg-emerald-500/5' : 'text-slate-400'}
                        ${i === 0 ? `sticky ${isRtl ? 'right-0' : 'left-0'} z-20 bg-[#0a0c10] border-${isRtl ? 'l' : 'r'} border-white/10 shadow-[${isRtl ? '-8px' : '8px'}_0_15px_rgba(0,0,0,0.6)] justify-start ltr:text-left rtl:text-right px-4 md:px-8 text-slate-200 lg:shadow-none` : ''}
                    `}
                >
                  {col}
                </div>
              ))}
            </div>

            {/* Rows */}
            {currentTable.rows.map((row: any, idx: number) => {
              const isTevelRow = row.feature.includes('TEVEL') || row.feature.includes('טבל') || row.feature.includes('The Standard');

              return (
                <motion.div
                  key={`${activeTab}-${idx}`}
                  variants={rowVariants}
                  className={`
                    transition-colors border-b border-white/5 last:border-0 group relative z-10 grid items-stretch
                    ${isTevelRow ? 'bg-emerald-500/10 hover:bg-emerald-500/20' : 'hover:bg-white/[0.05]'}
                  `}
                  style={{ gridTemplateColumns: `250px repeat(${currentTable.columns.length - 1}, minmax(100px, 1fr))` }}
                >
                  {/* Feature Name - Sticky Column */}
                  <div className={`
                    sticky ${isRtl ? 'right-0' : 'left-0'} z-20 border-${isRtl ? 'l' : 'r'} border-white/10 shadow-[${isRtl ? '-8px' : '8px'}_0_15px_rgba(0,0,0,0.6)] lg:shadow-none p-3 md:p-5 flex items-center text-[11px] md:text-sm ltr:text-left rtl:text-right px-4 md:px-8 transition-colors
                    ${isTevelRow ? 'bg-[#0F1115] text-emerald-400 font-bold' : 'bg-[#0a0c10] font-medium text-slate-300 group-hover:text-white'}
                  `}>
                    {row.feature}
                    {isTevelRow && (
                      <div className={`absolute ${isRtl ? 'right-0' : 'left-0'} top-0 bottom-0 w-1 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]`} />
                    )}
                  </div>

                  {/* Render values from the 'values' array */}
                  {row.values?.map((val: any, colIdx: number) => {
                    // Check if this column is a "Tevel" column based on header
                    const headerCol = currentTable.columns[colIdx + 1]; // +1 because index 0 is Feature
                    const isTevelCol = headerCol?.includes('TEVEL') || headerCol?.includes('טבל');

                    return (
                      <div key={colIdx} className={`p-3 md:p-5 flex items-center justify-center text-center text-sm border-r border-white/5 last:border-0 relative
                          ${isTevelCol ? 'bg-emerald-500/[0.03]' : ''}
                          ${(isTevelRow || isTevelCol || (val === '✓' || val === 'V')) && (val === '✓' || val === 'V') ? 'text-emerald-100' : 'text-slate-500'}
                      `}>
                        {isTevelCol && <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />}
                        {getStatusIcon(val, colIdx + 1)}
                      </div>
                    );
                  })}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ComparisonTable;
