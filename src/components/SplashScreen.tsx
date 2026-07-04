"use client";

import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressTimer = setTimeout(() => setProgress(100), 100);

    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050810] overflow-hidden transition-opacity duration-500 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* ========================================================================= */}
      {/* BACKGROUND IMAGE                                                          */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img 
          src="/splash screen/bg.png" 
          alt="Background Splash" 
          className="w-full h-full object-cover object-center opacity-70 transition-transform duration-1000 ease-out scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-black/40 to-[#050810]/90"></div>
      </div>

      {/* KONTAINER UTAMA KONTEN */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        
        {/* ========================================================================= */}
        {/* ANIMASI GIF (TANPA BULATAN & UKURAN DIPERBESAR KALI LIPAT)                */}
        {/* ========================================================================= */}
        <div 
          className="relative w-80 h-48 md:w-[450px] md:h-64 -mb-4 flex items-center justify-center pointer-events-none overflow-hidden"
          style={{ mixBlendMode: 'screen' }}
        >
          <img 
            src="/splash screen/GIF.gif" 
            alt="Oraha Loading Animation" 
            // scale-150 dipakai untuk memperbesar tubuh komodo memotong area kosong di fotonya
            className="w-full h-full object-contain scale-150 md:scale-125"
            style={{ 
              mixBlendMode: 'screen',
              filter: 'contrast(1.3) brightness(1.1)' // Memastikan background hitam GIF tembus pandang total
            }}
          />
        </div>

        {/* Teks Logo ORAHA */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-[0.25em] mb-2 flex items-center justify-center drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] z-20">
          ORAH<span className="text-emerald-500">A</span>
        </h1>
        
        {/* Teks Pengantar */}
        <p className="text-slate-300 text-xs md:text-sm tracking-[0.35em] mb-10 uppercase font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] z-20 flex items-center gap-2">
          <span>Gateway to the Last Dragon's Domain</span>
        </p>

        {/* ========================================================================= */}
        {/* PROGRESS BAR DENGAN IKON DAUN BERJALAN                                    */}
        {/* ========================================================================= */}
        <div className="relative w-64 md:w-80 h-2 bg-slate-900/90 rounded-full overflow-visible shadow-inner border border-slate-700/60 backdrop-blur-md z-20">
          
          {/* Bar Hijau Pengisi */}
          <div 
            className="h-full bg-gradient-to-r from-emerald-700 via-emerald-500 to-yellow-400 rounded-full transition-all ease-out shadow-[0_0_15px_rgba(16,185,129,0.8)] relative"
            style={{ 
              width: `${progress}%`,
              transitionDuration: '2400ms'
            }}
          >
            {/* Ikon Daun Berjalan di Ujung Progress Bar */}
            <div className="absolute -right-3 -top-2.5 w-7 h-7 bg-slate-950 border border-emerald-400/80 rounded-full flex items-center justify-center text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,1)]">
              <Leaf size={14} className="animate-spin-slow fill-emerald-500/20" />
            </div>
          </div>

        </div>

        {/* Sub-text Persentase Loading */}
        <span className="text-[10px] font-mono text-emerald-400/80 mt-3 tracking-widest uppercase font-bold">
          {progress === 100 ? "Ready to Explore" : "Loading Ecotourism Portal..."}
        </span>

      </div>
    </div>
  );
}