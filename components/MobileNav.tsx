
import React, { useState, useEffect } from 'react';
import { Home, Activity, Layers, Mail, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'System', icon: Activity },
    { id: 'usecases', label: 'Cases', icon: Layers },
    { id: 'contact', label: 'Contact', icon: Mail },
];

interface MobileNavProps {
    isRtl: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ isRtl }) => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Show nav when scrolling up or at bottom, hide when scrolling down
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px" }
        );

        navItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-4 left-4 right-4 z-50 md:hidden pb-safe" // added pb-safe for iOS home bar
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-[#0a0c10]/85 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex items-center justify-between p-2 px-4 sm:px-8"
                    >
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;

                            return (
                                <motion.button
                                    key={item.id}
                                    variants={itemVariants}
                                    onClick={() => scrollToSection(item.id)}
                                    whileTap={{ scale: 0.9 }}
                                    className={`relative flex flex-col items-center justify-center p-3 rounded-xl min-w-[64px] transition-all duration-300 ${isActive ? 'text-emerald-400 bg-white/5' : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="navParams"
                                            className="absolute -top-2 w-8 h-1 bg-emerald-500 rounded-full shadow-[0_2px_10px_rgba(16,185,129,0.5)]"
                                        />
                                    )}

                                    <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                    <span className="text-[10px] font-medium mt-1">{item.label}</span>

                                    {isActive && (
                                        <div className="absolute inset-0 bg-emerald-500/10 rounded-xl blur-md -z-10" />
                                    )}
                                </motion.button>
                            );
                        })}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileNav;
