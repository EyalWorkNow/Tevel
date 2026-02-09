
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

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
                >
                    <div className="bg-[#0a0c10]/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-between p-2 px-6">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative flex flex-col items-center justify-center p-2 transition-all duration-300 ${isActive ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'
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
                                        <div className="absolute inset-0 bg-emerald-500/10 rounded-xl blur-lg -z-10" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileNav;
