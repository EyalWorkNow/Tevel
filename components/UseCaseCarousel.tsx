import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
// Iconsax imports
import {
    ShieldSecurity, Bank, Verify, TruckFast, UserRemove, Global,
    Map, I3Dcube, UserTick, Code1, Cpu,
    ExportSquare, Lock1, Activity, ArrowLeft2, ArrowRight2,
    Radar, Profile2User, Eye, Flash, Judge, Briefcase,
    Wifi, Anchor, Airplane, Danger, Warning2, Gps
} from 'iconsax-react';
import UseCaseModal from './UseCaseModal';

interface UseCaseCarouselProps {
    cases: any[];
    isRtl: boolean;
}

// Domain-Specific Themes
const themeMap: Record<string, { color: string, bg: string, border: string, glow: string, accent: string }> = {
    terror_finance: { color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', glow: 'shadow-red-500/20', accent: 'bg-red-500' },
    cyber_threat_intel: { color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', glow: 'shadow-cyan-500/20', accent: 'bg-cyan-500' },
    critical_infrastructure: { color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', glow: 'shadow-amber-500/20', accent: 'bg-amber-500' },
    defense_intelligence_fusion: { color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', glow: 'shadow-emerald-500/20', accent: 'bg-emerald-500' },
    legal_regulatory_investigations: { color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', glow: 'shadow-indigo-500/20', accent: 'bg-indigo-500' },
    supply_chain_procurement: { color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', glow: 'shadow-purple-500/20', accent: 'bg-purple-500' },
    // New Cases
    esg_csrd_audit: { color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', glow: 'shadow-emerald-500/20', accent: 'bg-emerald-500' },
    systematic_reviews: { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', glow: 'shadow-blue-500/20', accent: 'bg-blue-500' },
    construction_claims: { color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', glow: 'shadow-amber-500/20', accent: 'bg-amber-500' },
    workplace_investigations: { color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', glow: 'shadow-purple-500/20', accent: 'bg-purple-500' },
    brand_crisis_intel: { color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', glow: 'shadow-red-500/20', accent: 'bg-red-500' },
    oncology_target_biomarker_to_trial: { color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20', glow: 'shadow-pink-500/20', accent: 'bg-pink-500' },
};

// Iconsax Mapping
const iconMap: Record<string, React.ReactNode> = {
    terror_finance: <Danger variant="TwoTone" size={32} />,
    cyber_threat_intel: <Code1 variant="TwoTone" size={32} />,
    critical_infrastructure: <Flash variant="TwoTone" size={32} />,
    defense_intelligence_fusion: <Radar variant="TwoTone" size={32} />,
    legal_regulatory_investigations: <Judge variant="TwoTone" size={32} />,
    supply_chain_procurement: <TruckFast variant="TwoTone" size={32} />,
    // New Cases
    esg_csrd_audit: <Verify variant="TwoTone" size={32} />,
    systematic_reviews: <Radar variant="TwoTone" size={32} />,
    construction_claims: <Briefcase variant="TwoTone" size={32} />,
    workplace_investigations: <Profile2User variant="TwoTone" size={32} />,
    brand_crisis_intel: <Warning2 variant="TwoTone" size={32} />,
    oncology_target_biomarker_to_trial: <Activity variant="TwoTone" size={32} />,
    // Fallbacks
    terror: <ShieldSecurity variant="TwoTone" size={32} />,
    cyber: <Code1 variant="TwoTone" size={32} />,
    finance: <Bank variant="TwoTone" size={32} />,
    crypto: <Lock1 variant="TwoTone" size={32} />,
    maritime: <Activity variant="TwoTone" size={32} />,
    audit: <Verify variant="TwoTone" size={32} />,
    supply: <TruckFast variant="TwoTone" size={32} />,
    insider: <UserRemove variant="TwoTone" size={32} />,
    disinfo: <Global variant="TwoTone" size={32} />,
    border: <Map variant="TwoTone" size={32} />,
    narcotics: <I3Dcube variant="TwoTone" size={32} />,
    vip: <UserTick variant="TwoTone" size={32} />,
    uav: <Radar variant="TwoTone" size={32} />,
    trafficking: <Profile2User variant="TwoTone" size={32} />,
    espionage: <Eye variant="TwoTone" size={32} />
};

interface Card3DProps {
    item: any;
    isRtl: boolean;
    onSelect: (item: any) => void;
}

const Card3D: React.FC<Card3DProps> = ({ item, isRtl, onSelect }) => {
    const ref = useRef<HTMLDivElement>(null);
    const theme = themeMap[item.id] || themeMap['defense_intelligence_fusion']; // Default to emerald

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    // Parallax displacements
    const iconX = useTransform(mouseXSpring, [-0.5, 0.5], ["-20px", "20px"]);
    const iconY = useTransform(mouseYSpring, [-0.5, 0.5], ["-20px", "20px"]);

    // Glare
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (window.innerWidth < 768) return;
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
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

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => onSelect(item)}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                rotateX: window.innerWidth >= 768 ? rotateX : 0,
                rotateY: window.innerWidth >= 768 ? rotateY : 0,
                transformStyle: "preserve-3d",
                perspective: "1200px"
            }}
            className="relative w-[85vw] max-w-[320px] md:max-w-[360px] h-[380px] md:h-[440px] mx-4 flex-shrink-0 cursor-pointer group py-6 z-10"
        >
            {/* Ambient Glow */}
            <div
                className={`hidden md:block absolute inset-10 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10 ${theme.accent.replace('bg-', 'bg-')}`}
                style={{ transform: "translateZ(-80px)" }}
            />

            {/* Main Card Chassis */}
            <div
                className={`absolute inset-0 bg-[#0a0d12]/98 md:bg-[#080a0e]/95 backdrop-blur-xl rounded-[24px] md:rounded-[32px] border border-white/10 md:border-white/5 overflow-hidden transition-all duration-300 group-hover:${theme.border} md:group-hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]`}
                style={{ transform: "translateZ(0)" }}
            >
                {/* Texture Overlay */}
                <div className="hidden md:block absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay pointer-events-none"></div>

                {/* Dynamic Glare */}
                <motion.div
                    className="hidden md:block absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-soft-light"
                    style={{
                        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15), transparent 50%)`
                    }}
                />

                {/* Content Container (Preserve 3D) */}
                <div className="relative z-30 h-full flex flex-col p-5 md:p-8" style={{ transformStyle: "preserve-3d" }}>

                    {/* Floating Icon Header */}
                    <div className="flex justify-between items-start mb-5 md:mb-6" style={{ transform: "translateZ(40px)" }}>
                        <motion.div
                            style={{ x: iconX, y: iconY }}
                            className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${theme.bg} border ${theme.border} flex items-center justify-center ${theme.color} shadow-md md:shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}
                        >
                            {iconMap[item.id] || <Cpu variant="TwoTone" size={28} />}
                        </motion.div>

                        <div className={`px-2 md:px-2.5 py-0.5 md:py-1 rounded-md md:rounded-lg border border-white/10 md:border-white/5 bg-black/70 md:bg-black/60 backdrop-blur text-[9px] md:text-[10px] font-mono text-slate-400 md:text-slate-500 tracking-widest uppercase flex items-center gap-1.5 md:gap-2 shadow-none md:shadow-inner group-hover:text-white transition-colors`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${theme.accent} animate-pulse`}></span>
                            {item.id.split('_')[0]}
                        </div>
                    </div>

                    {/* Text Content */}
                    <div style={{ transform: "translateZ(25px)" }} className="flex-1">
                        <h3 className={`text-lg md:text-2xl font-black text-white mb-2.5 md:mb-3 leading-tight group-hover:${theme.color} transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                            {item.title}
                        </h3>
                        {/* Decorative Line */}
                        <div className={`w-8 md:w-10 h-0.5 md:h-1 rounded-full bg-white/20 md:bg-white/10 mb-3 md:mb-4 group-hover:w-16 md:group-hover:w-20 group-hover:${theme.accent} transition-all duration-500`}></div>

                        <p className={`text-sm md:text-sm text-slate-300 md:text-slate-400 font-light leading-relaxed line-clamp-3 group-hover:text-slate-200 md:group-hover:text-slate-300 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                            {item.desc}
                        </p>
                    </div>

                    {/* Footer / Action */}
                    <div className="mt-auto pt-4 md:pt-6 border-t border-white/10 md:border-white/5 flex items-center justify-between" style={{ transform: "translateZ(50px)" }}>
                        <div className="flex flex-col">
                            <span className="text-[9px] text-slate-500 md:text-slate-600 font-mono tracking-widest uppercase">
                                {isRtl ? 'מזהה' : 'ID'}
                            </span>
                            <span className={`text-[10px] md:text-xs font-mono ${theme.color} opacity-90 md:opacity-80`}>
                                {item.id.substring(0, 4).toUpperCase()}_04
                            </span>
                        </div>

                        <button className={`w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 md:bg-white/5 border border-white/10 md:border-white/5 flex items-center justify-center text-slate-300 md:text-slate-400 group-hover:${theme.bg} group-hover:${theme.color} group-hover:${theme.border} transition-all duration-300 group-hover:scale-110 shadow-md md:shadow-lg`}>
                            <ExportSquare variant="TwoTone" size={18} />
                        </button>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

const UseCaseCarousel: React.FC<UseCaseCarouselProps> = ({ cases, isRtl }) => {
    const [selectedCase, setSelectedCase] = useState<any>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Continuous Auto-Scroll Effect
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;
        let animationId: number;
        // Slower speed for premium feel
        const speed = 0.4;

        const animate = () => {
            if (!isPaused && container) {
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                } else {
                    container.scrollLeft += speed;
                }
            }
            animationId = requestAnimationFrame(animate);
        };
        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 400;
            current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    const items = [...cases, ...cases];

    return (
        <div className="relative group/carousel">

            <UseCaseModal
                isOpen={!!selectedCase}
                onClose={() => setSelectedCase(null)}
                data={selectedCase}
                isRtl={isRtl}
                icon={selectedCase ? (iconMap[selectedCase.id] || <Cpu variant="TwoTone" size={32} />) : null}
            />

            <div className="w-full relative py-8 md:py-20 px-0" dir="ltr">
                {/* Gradient Masks - Lighter on mobile for better readability */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-[#0F1115] via-[#0F1115]/60 md:via-[#0F1115]/90 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-[#0F1115] via-[#0F1115]/60 md:via-[#0F1115]/90 to-transparent z-20 pointer-events-none"></div>

                {/* Navigation Controls */}
                <div className="max-w-[1400px] mx-auto relative pointer-events-none h-0 z-30 hidden md:block">
                    <button
                        onClick={() => scroll('left')}
                        className="pointer-events-auto absolute left-8 md:left-12 top-0 transform translate-y-[210px] w-14 h-14 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500/50 transition-all active:scale-95 shadow-2xl opacity-0 group-hover/carousel:opacity-100 duration-300 hover:shadow-emerald-500/20"
                    >
                        <ArrowLeft2 variant="TwoTone" size={24} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="pointer-events-auto absolute right-8 md:right-12 top-0 transform translate-y-[210px] w-14 h-14 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500/50 transition-all active:scale-95 shadow-2xl opacity-0 group-hover/carousel:opacity-100 duration-300 hover:shadow-emerald-500/20"
                    >
                        <ArrowRight2 variant="TwoTone" size={24} />
                    </button>
                </div>

                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-0 py-8 md:py-16 scrollbar-hide select-none touch-pan-x"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    {items.map((item, idx) => (
                        <Card3D
                            key={`${item.id}-${idx}`}
                            item={item}
                            isRtl={isRtl}
                            onSelect={setSelectedCase}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UseCaseCarousel;
