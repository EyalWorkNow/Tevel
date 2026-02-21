import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Data, SearchNormal1, Hierarchy, DocumentText, ProfileTick } from 'iconsax-react';

interface MethodologyTimelineProps {
    t: any;
}

const MethodologyTimeline: React.FC<MethodologyTimelineProps> = ({ t }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll progress for the entire timeline section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    // We have 4 steps. We calculate active step by splitting progress 0-1 into 4 chunks
    const glowOpacities = [
        useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 1, 0.3]),      // Step 0
        useTransform(scrollYProgress, [0.15, 0.25, 0.5, 0.75], [0.3, 1, 1, 0.3]), // Step 1
        useTransform(scrollYProgress, [0.4, 0.5, 0.75, 1], [0.3, 1, 1, 0.3]),   // Step 2
        useTransform(scrollYProgress, [0.65, 0.75, 1], [0.3, 1, 1])          // Step 3
    ];

    // Right side Graphic transforms based on progress
    const graphicScale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.8, 0.9, 1, 1.1, 1]);
    const graphicBlur = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], ["8px", "4px", "0px", "0px", "0px"]);

    const steps = t.solution.cards;

    // Detailed icons for the textual steps
    const icons = [
        <SearchNormal1 variant="TwoTone" size={28} />, // The Lead
        <Data variant="TwoTone" size={28} />, // Enrichment
        <Hierarchy variant="TwoTone" size={28} />, // Connection
        <DocumentText variant="TwoTone" size={28} /> // Narrative
    ];

    return (
        <div ref={containerRef} className="relative w-full text-white mx-auto max-w-[1400px]">
            {/* Desktop Grid Layout */}
            <div className="hidden lg:grid grid-cols-2 gap-16 relative items-start">

                {/* Left Side: Scrolling Text Blocks */}
                <div className="py-[30vh] space-y-[40vh] ps-8">
                    {steps.map((step: any, idx: number) => (
                        <motion.div
                            key={idx}
                            style={{ opacity: glowOpacities[idx] }}
                            className="min-h-[20vh] relative z-10 p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-2xl"
                        >
                            <div className="absolute -left-5 top-8 w-10 h-10 rounded-full bg-[#0F1115] border-2 border-emerald-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                <span className="text-emerald-400 font-mono font-bold text-sm">0{idx + 1}</span>
                            </div>

                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 relative">
                                {icons[idx]}
                                <motion.div
                                    className="absolute inset-0 bg-emerald-500/30 rounded-2xl blur-lg"
                                    animate={{
                                        opacity: [0.3, 0.8, 0.3, 0.3],
                                        scale: [1, 1.1, 1, 1]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        times: [0, 0.1, 0.2, 1], // Heartbeat timing mapping
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>

                            <h3 className="text-3xl font-black mb-4 tracking-tight drop-shadow-md">{step.title}</h3>
                            <p className="text-slate-300 text-lg leading-relaxed font-light">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Right Side: Sticky Visual Engine */}
                <div className="sticky top-0 h-screen flex items-center justify-center pe-8 perspective-1000">
                    <motion.div
                        style={{ scale: graphicScale, filter: graphicBlur }}
                        className="w-[500px] h-[500px] rounded-full border border-emerald-500/10 relative flex items-center justify-center transform-style-3d bg-black/40 backdrop-blur-2xl shadow-[inset_0_0_100px_rgba(16,185,129,0.05)]"
                    >
                        {/* Dynamic Background Rings */}
                        <motion.div
                            className="absolute inset-0 rounded-full border border-dashed border-emerald-500/20"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute inset-10 rounded-full border border-dotted border-emerald-400/30"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Step 1: Raw Data/The Lead (Chaotic Dots) */}
                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]) }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-slate-500 rounded-full blur-[1px]"
                                    animate={{
                                        x: [Math.random() * 200 - 100, Math.random() * -200 + 100],
                                        y: [Math.random() * 200 - 100, Math.random() * -200 + 100],
                                    }}
                                    transition={{ duration: 5 + i, repeat: Infinity, repeatType: 'reverse' }}
                                />
                            ))}
                            <motion.div
                                className="p-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                                animate={{
                                    scale: [1, 1.15, 1, 1],
                                    boxShadow: [
                                        "0 0 0px rgba(16,185,129,0)",
                                        "0 0 30px rgba(16,185,129,0.5)",
                                        "0 0 0px rgba(16,185,129,0)",
                                        "0 0 0px rgba(16,185,129,0)"
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    times: [0, 0.1, 0.2, 1]
                                }}
                            >
                                <SearchNormal1 size={40} />
                            </motion.div>
                        </motion.div>

                        {/* Step 2: Enrichment (Structured Data/Classified) */}
                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0.2, 0.4, 0.55], [0, 1, 0]) }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {/* Organized grid-like dots */}
                            <div className="grid grid-cols-4 gap-4 absolute">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className={`w-3 h-3 rounded-sm ${i % 3 === 0 ? 'bg-emerald-400' : 'bg-slate-700'}`}></div>
                                ))}
                            </div>
                            <div className="p-6 rounded-2xl bg-[#0F1115] border border-emerald-500/30 text-emerald-400 z-10 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                                <Data size={40} />
                            </div>
                        </motion.div>

                        {/* Step 3: Connection (Lines drawn between entities) */}
                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0.45, 0.65, 0.8], [0, 1, 0]) }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <svg className="absolute w-full h-full opacity-60">
                                <motion.path
                                    d="M250,150 L350,250 L200,350 L150,250 Z M250,150 L150,250"
                                    fill="transparent"
                                    stroke="#10B981"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                />
                            </svg>
                            {[
                                { x: 0, y: -100 }, { x: 100, y: 0 },
                                { x: -50, y: 100 }, { x: -100, y: 0 }
                            ].map((pos, i) => (
                                <motion.div key={i} className="absolute p-3 rounded-lg bg-black border border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                                    animate={{ y: [pos.y, pos.y - 10, pos.y] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                                    style={{ translateX: pos.x, translateY: pos.y }}
                                >
                                    <ProfileTick size={20} className="text-emerald-400" />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Step 4: Narrative / Glowing Insight */}
                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0.7, 0.9, 1], [0, 1, 1]) }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>

                            <div className="w-[300px] h-[350px] bg-black/80 rounded-2xl border border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.3)] backdrop-blur-3xl overflow-hidden flex flex-col">
                                <div className="bg-emerald-500/10 border-b border-emerald-500/20 p-3 flex justify-between items-center">
                                    <div className="text-[10px] font-mono text-emerald-400 font-bold tracking-widest uppercase">Target Profile</div>
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col gap-4">
                                    {/* Skeleton lines for report */}
                                    <div className="h-4 w-3/4 bg-emerald-500/20 rounded"></div>
                                    <div className="h-3 w-full bg-slate-800 rounded"></div>
                                    <div className="h-3 w-5/6 bg-slate-800 rounded"></div>
                                    <div className="mt-4 flex gap-3">
                                        <div className="h-20 w-20 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-2 w-full bg-slate-800 rounded"></div>
                                            <div className="h-2 w-full bg-slate-800 rounded"></div>
                                            <div className="h-2 w-2/3 bg-slate-800 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-t border-emerald-500/20 bg-emerald-500/5">
                                    <div className="py-2 w-full text-center bg-emerald-500/20 border border-emerald-400 text-emerald-400 rounded text-xs font-bold uppercase tracking-wider hover:bg-emerald-500/40 cursor-pointer transition-colors">
                                        Deploy Countermeasure
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Fallback - Stacked Layout */}
            <div className="lg:hidden flex flex-col gap-8 py-10 px-4">
                {steps.map((step: any, idx: number) => (
                    <div
                        key={`mob-${idx}`}
                        className="relative p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                            {icons[idx]}
                        </div>
                        <h3 className="text-2xl font-black mb-3">{step.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {step.desc}
                        </p>
                    </div>
                ))}

                {/* Static visual representation for mobile */}
                <div className="w-full aspect-square rounded-full border border-emerald-500/20 mt-8 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent)]">
                    <DocumentText size={64} className="text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
                </div>
            </div>
        </div>
    );
};

export default MethodologyTimeline;
