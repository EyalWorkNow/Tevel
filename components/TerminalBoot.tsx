import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { TevelLogo } from './Logo';

interface TerminalBootProps {
    onComplete: () => void;
}

const BOOT_SEQUENCE = [
    { text: "INITIALIZING TEVEL KERNEL v2.5.0...", delay: 0 },
    { text: "LOADING CRYPTOGRAPHIC MODULES [OK]", delay: 200 },
    { text: "ESTABLISHING SECURE UPLINK...", delay: 400 },
    { text: "UPLINK_ESTABLISHED [192.168.1.10]", delay: 700 },
    { text: "VERIFYING AGENT CLEARANCE...", delay: 900 },
    { text: "ACCESS GRANTED. LEVEL 4 AUTHORIZATION.", delay: 1200 },
    { text: "MOUNTING CONTEXT ENGINE GRAPH DB...", delay: 1400 },
    { text: "SYSTEM READY.", delay: 1800 }
];

const TerminalBoot: React.FC<TerminalBootProps> = ({ onComplete }) => {
    const [lines, setLines] = useState<string[]>([]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let timeouts: NodeJS.Timeout[] = [];

        // Schedule each line to appear
        BOOT_SEQUENCE.forEach(({ text, delay }) => {
            const timeout = setTimeout(() => {
                setLines(prev => [...prev, text]);
            }, delay);
            timeouts.push(timeout);
        });

        // Trigger completion after the last line + short delay
        const finishTimeout = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800); // 800ms for exit animation
        }, 2200);
        timeouts.push(finishTimeout);

        return () => timeouts.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="terminal-boot"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        filter: "blur(20px)",
                        scale: 1.1,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[100] bg-[#0A0C10] flex flex-col items-center justify-center p-6 text-emerald-500 font-mono"
                >
                    <div className="w-full max-w-2xl flex flex-col gap-6 relative">
                        {/* Tevel Logo Glitching In */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <TevelLogo className="w-12 h-12 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-black tracking-widest text-white">TEVEL</span>
                                <span className="text-xs tracking-widest text-emerald-500/80">CONTEXT ENGINE</span>
                            </div>
                        </motion.div>

                        {/* Terminal Window */}
                        <div className="bg-black/50 border border-emerald-500/20 rounded-lg p-6 min-h-[300px] w-full shadow-[0_0_50px_rgba(16,185,129,0.05)] relative overflow-hidden">
                            {/* Scanning line effect */}
                            <motion.div
                                animate={{ top: ["0%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-1 bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-0"
                            />

                            <div className="flex items-center gap-2 mb-4 text-emerald-500/50 border-b border-emerald-500/20 pb-2 relative z-10">
                                <Terminal size={14} />
                                <span className="text-xs tracking-widest">BOOT_SEQ_INIT</span>
                            </div>

                            <div className="flex flex-col gap-2 text-sm relative z-10">
                                {lines.map((text, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="text-slate-600 opacity-50 select-none">{'>'}</span>
                                        <span className={text.includes('[OK]') || text.includes('GRANTED') ? 'text-emerald-300 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]' : text.includes('READY') ? 'text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' : ''}>
                                            {text}
                                        </span>
                                    </motion.div>
                                ))}
                                {/* Blinking cursor on the last line */}
                                {lines.length < BOOT_SEQUENCE.length && (
                                    <motion.div
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="w-3 h-5 bg-emerald-500 mt-2 ml-4"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TerminalBoot;
