
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, ChevronRight, Activity, Terminal } from 'lucide-react';

interface TerminalContactProps {
  t: any;
  isRtl: boolean;
}

const TerminalContact: React.FC<TerminalContactProps> = ({ t, isRtl }) => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', org: '' });

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative perspective-1000">
        
        {/* Glow effect behind */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/20 via-blue-600/10 to-emerald-600/20 rounded-xl blur-xl opacity-50"></div>

        <div className="relative bg-[#050608] border border-white/10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-sm group">
            
            {/* Tactical Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0A0C10] border-b border-white/5 select-none">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono text-emerald-500">
                        <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </div>
                        <span className="tracking-widest font-bold">
                            {isRtl ? 'חיבור_פעיל' : 'UPLINK_ESTABLISHED'}
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-slate-600">
                        <Lock size={10} />
                        <span>TLS 1.3 // AES-256-GCM</span>
                    </div>
                </div>
                <div className="text-[10px] font-mono text-slate-600 tracking-widest">
                    SESSION_ID: <span className="text-slate-400">0x{Math.floor(Math.random()*100000).toString(16).toUpperCase()}</span>
                </div>
            </div>

            <div className="p-6 md:p-12 relative">
                 {/* Subtle Grid Overlay */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

                 <div className="relative z-10 flex flex-col gap-8">
                     
                     {/* Header Text */}
                     <div className="text-center space-y-2">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] md:text-xs font-mono tracking-widest uppercase mb-2">
                             <Terminal size={12} />
                             {isRtl ? 'אתחול ערוץ מאובטח' : 'SECURE CHANNEL INITIALIZATION'}
                         </div>
                         <h3 className="text-xl md:text-2xl font-light text-white">{t.subtitle}</h3>
                     </div>

                     {/* Form Grid */}
                     <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
                         
                         {/* Name Input */}
                         <div className="relative group/input">
                             <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-mono text-[10px] md:text-xs tracking-widest uppercase z-10
                                ${focusedField === 'name' || formState.name ? '-top-2.5 bg-[#050608] px-2 text-emerald-400' : 'top-4 text-slate-500'}
                                ${isRtl ? 'right-4 left-auto' : ''}
                             `}>
                                 {t.inputName}
                             </label>
                             <input 
                                type="text"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                onFocus={() => handleFocus('name')}
                                onBlur={handleBlur}
                                className={`w-full bg-[#0F1115]/50 border rounded-lg px-4 py-3.5 text-white outline-none transition-all font-mono text-sm
                                    ${focusedField === 'name' ? 'border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.1)] bg-[#0F1115]' : 'border-white/10 hover:border-white/20'}
                                `}
                             />
                             {/* Corner Brackets */}
                             <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500 transition-opacity duration-300 ${focusedField === 'name' ? 'opacity-100' : 'opacity-0'}`}></div>
                             <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500 transition-opacity duration-300 ${focusedField === 'name' ? 'opacity-100' : 'opacity-0'}`}></div>
                             <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-500 transition-opacity duration-300 ${focusedField === 'name' ? 'opacity-100' : 'opacity-0'}`}></div>
                             <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-500 transition-opacity duration-300 ${focusedField === 'name' ? 'opacity-100' : 'opacity-0'}`}></div>
                         </div>

                         {/* Org Input */}
                         <div className="relative group/input">
                             <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-mono text-[10px] md:text-xs tracking-widest uppercase z-10
                                ${focusedField === 'org' || formState.org ? '-top-2.5 bg-[#050608] px-2 text-emerald-400' : 'top-4 text-slate-500'}
                                ${isRtl ? 'right-4 left-auto' : ''}
                             `}>
                                 {t.inputOrg}
                             </label>
                             <input 
                                type="text"
                                name="org"
                                value={formState.org}
                                onChange={handleChange}
                                onFocus={() => handleFocus('org')}
                                onBlur={handleBlur}
                                className={`w-full bg-[#0F1115]/50 border rounded-lg px-4 py-3.5 text-white outline-none transition-all font-mono text-sm
                                    ${focusedField === 'org' ? 'border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.1)] bg-[#0F1115]' : 'border-white/10 hover:border-white/20'}
                                `}
                             />
                             {/* Corner Brackets */}
                             <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500 transition-opacity duration-300 ${focusedField === 'org' ? 'opacity-100' : 'opacity-0'}`}></div>
                             <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500 transition-opacity duration-300 ${focusedField === 'org' ? 'opacity-100' : 'opacity-0'}`}></div>
                              <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-500 transition-opacity duration-300 ${focusedField === 'org' ? 'opacity-100' : 'opacity-0'}`}></div>
                             <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-500 transition-opacity duration-300 ${focusedField === 'org' ? 'opacity-100' : 'opacity-0'}`}></div>
                         </div>

                         {/* Email Input (Full Width) */}
                         <div className="relative group/input md:col-span-2">
                             <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-mono text-[10px] md:text-xs tracking-widest uppercase z-10
                                ${focusedField === 'email' || formState.email ? '-top-2.5 bg-[#050608] px-2 text-emerald-400' : 'top-4 text-slate-500'}
                                ${isRtl ? 'right-4 left-auto' : ''}
                             `}>
                                 {t.inputEmail}
                             </label>
                             <div className="relative">
                                <input 
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('email')}
                                    onBlur={handleBlur}
                                    className={`w-full bg-[#0F1115]/50 border rounded-lg px-4 py-3.5 text-white outline-none transition-all font-mono text-sm
                                        ${focusedField === 'email' ? 'border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.1)] bg-[#0F1115]' : 'border-white/10 hover:border-white/20'}
                                        ${isRtl ? 'pl-4 pr-4' : 'pl-4 pr-12'}
                                    `}
                                />
                                <div className={`absolute top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none transition-colors duration-300
                                    ${isRtl ? 'left-4' : 'right-4'}
                                    ${focusedField === 'email' ? 'text-emerald-500' : ''}
                                `}>
                                    <Lock size={16} />
                                </div>
                             </div>
                             {/* Corner Brackets */}
                             <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500 transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : 'opacity-0'}`}></div>
                             <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500 transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : 'opacity-0'}`}></div>
                              <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-500 transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : 'opacity-0'}`}></div>
                             <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-500 transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : 'opacity-0'}`}></div>
                         </div>
                     </div>

                     {/* Submit Button */}
                     <button className="relative group w-full mt-6 overflow-hidden rounded-lg outline-none focus:ring-2 focus:ring-emerald-500/50">
                         {/* Button Background & Hover Fill */}
                         <div className="absolute inset-0 bg-[#0F1115] border border-emerald-500/30 group-hover:border-emerald-500/80 transition-colors"></div>
                         <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                         
                         {/* Content */}
                         <div className="relative py-4 px-6 flex items-center justify-center gap-3">
                             <Activity size={18} className="text-emerald-500 group-hover:text-black transition-colors" />
                             <span className="font-mono font-bold tracking-[0.2em] text-emerald-400 group-hover:text-black transition-colors uppercase">
                                 {t.btn}
                             </span>
                             <ChevronRight className={`w-5 h-5 text-emerald-500 group-hover:text-black transition-all group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0' : ''}`} />
                         </div>

                         {/* Scanline overlay on hover */}
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-0 group-hover:opacity-10 mix-blend-overlay pointer-events-none"></div>
                     </button>
                     
                     <div className="text-center">
                         <p className="text-[9px] text-slate-600 font-mono uppercase tracking-wider">
                            {isRtl ? 'גישה מורשית בלבד // נדרש סיווג רמה 4' : 'Authorized Personnel Only // Level 4 Clearance Required'}
                         </p>
                     </div>

                 </div>
            </div>

            {/* Bottom Tech Bar */}
             <div className="h-1.5 w-full bg-[#050608] border-t border-white/5 flex">
                <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"
                />
            </div>
        </div>
    </div>
  );
};

export default TerminalContact;
