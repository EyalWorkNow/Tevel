
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Shield, Landmark, BadgeCheck, Truck, UserX, Globe2, 
  Map as MapIcon, Syringe, UserCheck, Binary, Cpu, 
  ArrowUpRight, Lock, Activity, ChevronLeft, ChevronRight,
  Radar, Footprints, Eye
} from 'lucide-react';
import UseCaseModal from './UseCaseModal';

interface UseCaseCarouselProps {
  cases: any[];
  isRtl: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  terror: <Shield className="w-8 h-8" />,
  cyber: <Binary className="w-8 h-8" />,
  finance: <Landmark className="w-8 h-8" />,
  crypto: <Lock className="w-8 h-8" />,
  maritime: <Activity className="w-8 h-8" />,
  audit: <BadgeCheck className="w-8 h-8" />,
  supply: <Truck className="w-8 h-8" />,
  insider: <UserX className="w-8 h-8" />,
  disinfo: <Globe2 className="w-8 h-8" />,
  border: <MapIcon className="w-8 h-8" />,
  narcotics: <Syringe className="w-8 h-8" />,
  vip: <UserCheck className="w-8 h-8" />,
  uav: <Radar className="w-8 h-8" />,
  trafficking: <Footprints className="w-8 h-8" />,
  espionage: <Eye className="w-8 h-8" />
};

interface Card3DProps {
  item: any;
  isRtl: boolean;
  onSelect: (item: any) => void;
}

const Card3D: React.FC<Card3DProps> = ({ item, isRtl, onSelect }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for mouse position relative to card center (0.5 to -0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth physics for the tilt - "Heavy" feel for premium effect
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25, mass: 1 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25, mass: 1 });

  // Rotate based on mouse position
  // Invert X rotation so it tilts "towards" the mouse vertically
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  
  // Dynamic Glare / Spot light effect positioning
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable tilt on mobile
    if (window.innerWidth < 768) return;

    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize to -0.5 to 0.5 range
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Reset to center smoothly
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(item)}
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ 
        rotateX: window.innerWidth >= 768 ? rotateX : 0, 
        rotateY: window.innerWidth >= 768 ? rotateY : 0, 
        transformStyle: "preserve-3d",
        perspective: "1000px" 
      }}
      className="relative w-[85vw] max-w-[300px] md:max-w-[340px] h-[320px] md:h-[380px] mx-3 md:mx-6 flex-shrink-0 cursor-pointer group py-4"
    >
        {/* Animated Glow Behind - Desktop Only */}
        <div 
            className="hidden md:block absolute inset-4 rounded-[30px] bg-emerald-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
            style={{ transform: "translateZ(-50px)" }} 
        />

        {/* Card Chassis */}
        <div 
          className="absolute inset-0 bg-[#080a0e] rounded-[24px] md:rounded-[32px] border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-emerald-500/50 shadow-2xl"
          style={{ transform: "translateZ(0)" }}
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay pointer-events-none"></div>
            
            {/* Dynamic Glare Effect - Desktop Only */}
            <motion.div 
                className="hidden md:block absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-soft-light"
                style={{ 
                    background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.2), transparent 60%)` 
                }}
            />

            {/* Content Container with Parallax Depth */}
            <div className="relative z-20 h-full flex flex-col p-6" style={{ transformStyle: "preserve-3d" }}>
                
                {/* Header: Icon & Tag */}
                <div 
                    className="flex justify-between items-start mb-4 md:mb-6"
                    style={{ transform: "translateZ(40px)" }} // Pops out
                >
                    {/* Icon Container */}
                    <div className="relative">
                         <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/40 group-hover:scale-110 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                             {iconMap[item.id] || <Cpu className="w-6 h-6 md:w-8 md:h-8" />}
                         </div>
                    </div>

                    {/* Badge */}
                    <div className="px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 backdrop-blur-md flex items-center gap-1.5 md:gap-2 group-hover:border-emerald-500/50 transition-colors">
                         <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                         <span className="text-[9px] md:text-[10px] font-mono text-emerald-400/80 tracking-widest uppercase font-bold">
                             {isRtl ? 'פעיל' : 'Active'}
                         </span>
                    </div>
                </div>

                {/* Body Text */}
                <div 
                    className="flex-1 flex flex-col justify-start relative"
                    style={{ transform: "translateZ(20px)" }} // Pops out slightly less
                >
                    <h3 className={`text-2xl md:text-3xl font-black text-white mb-2 md:mb-3 leading-[1.1] tracking-tight group-hover:text-emerald-50 transition-colors duration-300 ${isRtl ? 'text-right' : 'text-left'}`}>
                        {item.title}
                    </h3>
                    
                    <div className={`w-8 md:w-12 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full mb-3 md:mb-4 group-hover:w-24 transition-all duration-500 ${isRtl ? 'ml-auto bg-gradient-to-l' : 'mr-auto'}`}></div>
                    
                    <p className={`text-slate-400 text-xs md:text-sm leading-relaxed font-light line-clamp-3 group-hover:text-slate-300 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                        {item.desc}
                    </p>
                </div>

                {/* Footer Action */}
                <div 
                    className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between group-hover:border-emerald-500/30 transition-colors"
                    style={{ transform: "translateZ(30px)" }} // Footer pops out too
                >
                    <div className="flex flex-col">
                        <span className="text-[8px] md:text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-0.5">
                            {isRtl ? 'מזהה פרוטוקול' : 'Protocol ID'}
                        </span>
                        <span className="text-[10px] md:text-xs font-mono text-emerald-500/80">{item.id.toUpperCase()}_04</span>
                    </div>
                    
                    <button className={`w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 transition-all duration-300 group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:text-black group-hover:scale-110 shadow-lg ${isRtl ? 'rotate-90 group-hover:-rotate-90' : 'group-hover:rotate-45'}`}>
                         <ArrowUpRight size={18} strokeWidth={2.5} className="md:w-5 md:h-5" />
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
        // Adjust speed here (pixels per frame)
        const speed = 0.5; 

        const animate = () => {
            if (!isPaused && container) {
                // If we have scrolled past the end of the first set of items
                // (assuming 2 duplicate sets, scrollWidth/2 is the reset point)
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

    // Manual Scroll
    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            // Scroll by one card width approx
            const scrollAmount = 300; 
            current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    // Duplicate items to ensure infinite loop seamlessly
    const items = [...cases, ...cases];

    return (
      <div className="relative group/carousel">
        
        <UseCaseModal 
            isOpen={!!selectedCase} 
            onClose={() => setSelectedCase(null)} 
            data={selectedCase} 
            isRtl={isRtl}
            icon={selectedCase ? (iconMap[selectedCase.id] || <Cpu />) : null}
        />

        <div className="w-full relative py-8 md:py-12 px-0" dir="ltr">
            {/* Side Fade Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0F1115] via-[#0F1115]/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0F1115] via-[#0F1115]/80 to-transparent z-20 pointer-events-none"></div>

            {/* Floating Navigation Buttons - Hidden on Mobile */}
            <div className="max-w-[1400px] mx-auto relative pointer-events-none h-0 z-30 hidden md:block">
               <button 
                  onClick={() => scroll('left')}
                  className="pointer-events-auto absolute left-4 md:left-8 top-0 transform translate-y-[150px] md:translate-y-[190px] w-14 h-14 rounded-full bg-black/50 border border-white/10 backdrop-blur-xl flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-900/20 transition-all active:scale-95 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover/carousel:opacity-100 opacity-0 transition-opacity duration-300"
               >
                  <ChevronLeft size={28} />
               </button>
               
               <button 
                  onClick={() => scroll('right')}
                  className="pointer-events-auto absolute right-4 md:right-8 top-0 transform translate-y-[150px] md:translate-y-[190px] w-14 h-14 rounded-full bg-black/50 border border-white/10 backdrop-blur-xl flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-900/20 transition-all active:scale-95 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover/carousel:opacity-100 opacity-0 transition-opacity duration-300"
               >
                  <ChevronRight size={28} />
               </button>
            </div>

            {/* Scroll Container */}
            <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-0 py-8 md:py-12 scrollbar-hide select-none touch-pan-x"
                style={{ 
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none'
                }}
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
