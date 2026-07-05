"use client";

import React from 'react';
import { MapPin, ShieldAlert, HeartHandshake, Sparkles, Trash2, CameraOff, Flame, AlertCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

// 1. IMPORT CONTEXT BAHASA DAN DICTIONARY
import { useLanguage } from '@/components/LanguageContext';
import { dict } from '@/data/dictionary';

const mapLocations = [
  { id: 1, name: 'Pulau Padar', desc: 'Pemandangan 3 teluk ikonis.', img: '/Peta/padar.jpg', top: '38%', left: '32%', position: 'bottom' },
  { id: 2, name: 'Pink Beach', desc: 'Pasir merah muda langka.', img: '/Peta/beach.jpg', top: '68%', left: '48%', position: 'top' },
  { id: 3, name: 'Loh Liang', desc: 'Habitat asli Naga Purba.', img: '/Peta/liang.jpg', top: '42%', left: '65%', position: 'bottom' },
  { id: 4, name: 'Manta Point', desc: 'Spot snorkeling pari manta.', img: '/Peta/manta.jpg', top: '58%', left: '38%', position: 'top' },
  { id: 5, name: 'Taka Makassar', desc: 'Gundukan pasir bulan sabit.', img: '/Peta/taka.jpg', top: '48%', left: '52%', position: 'top' },
  { id: 6, name: 'Pulau Kelor', desc: 'Pendakian singkat view laut.', img: '/Peta/kelor.jpg', top: '78%', left: '28%', position: 'top' },
  { id: 7, name: 'Pulau Kalong', desc: 'Ribuan kelelawar senja.', img: '/Peta/kalong.jpg', top: '28%', left: '58%', position: 'bottom' },
  { id: 8, name: 'Pulau Rinca', desc: 'Habitat komodo yang padat.', img: '/Peta/rinca.jpg', top: '55%', left: '76%', position: 'top' },
  { id: 9, name: 'Batu Bolong', desc: 'Surganya para penyelam.', img: '/Peta/bolong.jpg', top: '24%', left: '42%', position: 'bottom' },
  { id: 10, name: 'Pulau Kanawa', desc: 'Dermaga kayu yang tenang.', img: '/Peta/kanawa.jpg', top: '22%', left: '78%', position: 'bottom' },
];

export default function Peta() {
  // 2. PANGGIL STATE BAHASA AKTIF & DICTIONARY
  const { lang } = useLanguage();
  const t = dict[lang].peta;

  return (
    <section id="peta" className="py-24 bg-[#050810] text-white relative overflow-hidden">
      {/* Background Glow Halus */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* HEADER SECTION */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
            <span className="text-emerald-400 font-bold uppercase tracking-[0.25em] text-xs md:text-sm block">
              {t.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              {t.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-300">{t.title2}</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
              {t.desc}
            </p>
          </div>
        </ScrollReveal>

        {/* 2 COLUMNS LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* KOLOM KIRI: PETA INTERAKTIF */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal delay={200}>
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] group/map">
                <div className="absolute inset-0 rounded-3xl overflow-hidden border border-slate-800/80 shadow-[0_0_40px_rgba(0,0,0,0.8)] z-0">
                  <img src="/Peta/peta.jpg" alt="Peta Taman Nasional Komodo" className="w-full h-full object-cover opacity-100 transition-transform duration-1000 ease-out group-hover/map:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/80 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* LAYER PIN & TOOLTIP */}
                <div className="absolute inset-0 z-20">
                  {mapLocations.map((loc) => (
                    <div key={loc.id} className="absolute group z-10 -translate-x-1/2 -translate-y-1/2" style={{ top: loc.top, left: loc.left }}>
                      <div className="relative flex items-center justify-center cursor-pointer">
                        <div className="absolute w-5 h-5 md:w-7 md:h-7 bg-emerald-400/40 rounded-full animate-ping"></div>
                        <div className="relative z-10 bg-emerald-600 border border-white/40 text-white p-1.5 md:p-2 rounded-full shadow-lg group-hover:bg-yellow-500 group-hover:text-slate-950 group-hover:scale-125 transition-all duration-300">
                          <MapPin className="fill-current w-3 h-3 md:w-4 md:h-4" />
                        </div>
                      </div>
                      <div className={`absolute left-1/2 -translate-x-1/2 w-40 md:w-48 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl p-2.5 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50 ${loc.position === 'bottom' ? 'top-full mt-2.5 md:mt-3 origin-top' : 'bottom-full mb-2.5 md:mb-3 origin-bottom'}`}>
                        <img src={loc.img} alt={loc.name} className="w-full h-16 md:h-20 object-cover rounded-xl mb-2 border border-slate-800" />
                        <h4 className="font-serif font-bold text-white text-xs md:text-sm leading-snug">{loc.name}</h4>
                        <p className="text-[9px] md:text-[11px] text-slate-300 leading-normal mt-0.5 font-medium">{loc.desc}</p>
                        <div className={`absolute left-1/2 -translate-x-1/2 border-[5px] md:border-[6px] border-transparent ${loc.position === 'bottom' ? 'bottom-full border-b-slate-900' : 'top-full border-t-slate-900'}`}></div>
                      </div>
                    </div>
                  ))}
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-[10px] md:text-xs text-slate-300 flex items-center gap-2 pointer-events-none">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{t.locations}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* KOLOM KANAN: PERATURAN & AJAKAN */}
          <div className="lg:col-span-5 w-full space-y-6 flex flex-col justify-between h-full mt-4 lg:mt-0">
            <ScrollReveal delay={300}>
              <div className="bg-[#0b1121]/90 border border-slate-800/80 rounded-3xl p-5 md:p-7 shadow-xl space-y-5">
                <div className="flex items-center gap-2.5 border-b border-slate-800 pb-4">
                  <div className="p-2 md:p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400">
                    <ShieldAlert size={20} className="md:w-[22px] md:h-[22px]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base md:text-xl text-white">{t.ruleTitle}</h3>
                    <p className="text-[10px] md:text-xs text-slate-400 mt-0.5">{t.ruleSubtitle}</p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  {t.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-slate-700 transition-colors">
                      <div className="p-1.5 md:p-2 bg-slate-800/80 rounded-xl mt-0.5 shrink-0">
                         {idx === 0 ? <AlertCircle className="text-amber-400" size={20} /> : idx === 1 ? <Trash2 className="text-rose-400" size={20} /> : idx === 2 ? <CameraOff className="text-blue-400" size={20} /> : <Flame className="text-purple-400" size={20} />}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs md:text-sm font-bold text-slate-100">{rule.title}</h4>
                        <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed font-medium">{rule.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="relative bg-gradient-to-br from-emerald-900/40 via-[#0b1121] to-slate-900 border border-emerald-500/30 rounded-3xl p-5 md:p-7 shadow-[0_0_30px_rgba(16,185,129,0.1)] overflow-hidden group">
                <div className="relative z-10 flex items-start gap-3 md:gap-4">
                  <div className="p-2.5 md:p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl text-emerald-400 shrink-0"><HeartHandshake size={24} /></div>
                  <div className="space-y-1.5 md:space-y-2">
                    <div className="flex items-center gap-1.5 text-yellow-400 text-[9px] md:text-xs font-bold uppercase tracking-wider"><Sparkles size={12} /><span>{t.ctaBadge}</span></div>
                    <h3 className="font-serif font-bold text-base md:text-lg text-white leading-snug">{t.ctaTitle}</h3>
                    <p className="text-[10px] md:text-xs text-slate-300 leading-relaxed font-normal">{t.ctaDesc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}