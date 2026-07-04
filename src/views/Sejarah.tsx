"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, ShieldCheck, Landmark, Leaf } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Sejarah() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);
  
  // Ref untuk Timeline Kanan (Teks intro tengah sudah dihapus)
  const timelineRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3500",
          scrub: 1,         
          pin: true,        
        }
      });

      // SCENE 0: Tahan sejenak tampilan awal (Gambar 3 & TIMELINE KANAN)
      tl.to({}, { duration: 0.8 })

      // SCENE 1: TIMELINE HILANG, Gambar 3 berganti Gambar 1 & Teks 1 (KIRI)
        .to(timelineRef.current, { opacity: 0, x: 50, duration: 1 }) // Timeline geser kanan & pudar
        .to(img3Ref.current, { opacity: 0, scale: 0.85, duration: 1 }, "<")
        .to(img1Ref.current, { opacity: 1, scale: 1, duration: 1 }, "<")
        .to(text1Ref.current, { opacity: 1, y: 0, duration: 1 }, "<")
        
        .to({}, { duration: 0.8 }) 

      // SCENE 2: Gambar 1 & Teks 1 hilang, Gambar 2 & Teks 2 Muncul (KANAN BAWAH)
        .to(text1Ref.current, { opacity: 0, y: -20, duration: 1 }) 
        .to(img1Ref.current, { opacity: 0, scale: 0.9, duration: 1 }, "<")
        .to(img2Ref.current, { opacity: 1, scale: 1, duration: 1 }, "<")
        .to(text2Ref.current, { opacity: 1, y: 0, duration: 1 }, "<")
        
        .to({}, { duration: 0.8 }); 
        
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <section ref={sectionRef} className="relative h-screen w-full bg-[#050810] flex items-center justify-center overflow-hidden">
        
        {/* ========================================== */}
        {/* BACKGROUND IMAGE                           */}
        {/* ========================================== */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/sejarah/bg.png" 
            alt="Background Sejarah" 
            className="w-full h-full object-cover object-center opacity-90 transition-transform duration-1000 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/60 via-transparent to-[#050810]/80 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#050810]/80 via-[#050810]/30 to-transparent pointer-events-none"></div>
        </div>

        {/* ========================================== */}
        {/* GAMBAR UTAMA GSAP SCROLL                   */}
        {/* ========================================== */}
        <div className="relative w-full max-w-2xl h-[40vh] md:h-[60vh] z-10 flex items-center justify-center">
          {/* Gambar 3: Tampak Atas (Muncul Pertama Bersama Timeline) */}
          <img ref={img3Ref} src="/Home/3.png" alt="Komodo Dorsal View" className="absolute inset-0 w-full h-full object-contain opacity-100 drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]" />
          {/* Gambar 1: Tampak Samping */}
          <img ref={img1Ref} src="/Home/1.png" alt="Komodo Side View" className="absolute inset-0 w-full h-full object-contain opacity-0 scale-95 drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]" />
          {/* Gambar 2: Tampak Agresif/Berjalan */}
          <img ref={img2Ref} src="/Home/2.png" alt="Komodo Active View" className="absolute inset-0 w-full h-full object-contain opacity-0 scale-95 drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]" />
        </div>

        {/* ========================================== */}
        {/* KONTAINER TEKS & TIMELINE ANIMASI GSAP     */}
        {/* ========================================== */}
        <div className="absolute inset-0 container mx-auto px-6 z-20 pointer-events-none flex flex-col justify-between py-12 md:py-16">
          
          {/* 1. TIMELINE -> POSISI: KANAN TENGAH (Diturunkan ke top-[50%]) */}
          <div 
            ref={timelineRef} 
            // Tambahkan pointer-events-auto di akhir className ini:
            className="absolute top-[50%] right-6 md:right-12 -translate-y-1/2 w-64 md:w-80 opacity-100 transition-all hidden sm:block pointer-events-auto select-text"
          >
            <div className="relative pl-8 space-y-6">
              {/* Garis Vertikal Hijau Panjang di Kiri */}
              <div className="absolute left-4 top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-emerald-500 via-emerald-600/60 to-transparent"></div>

              {/* Item 1: 1910 */}
              <div className="relative group">
                <div className="absolute -left-8 top-0 w-8 h-8 rounded-full border border-emerald-500 bg-[#050810]/90 backdrop-blur-md flex items-center justify-center text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                  <Search size={14} />
                </div>
                <div>
                  <h4 className="text-yellow-400 font-bold text-sm md:text-base leading-none mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">1910</h4>
                  <p className="text-white text-xs md:text-sm font-medium leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">First discovered by the modern world.</p>
                </div>
              </div>

              {/* Item 2: 1980 */}
              <div className="relative group">
                <div className="absolute -left-8 top-0 w-8 h-8 rounded-full border border-emerald-500 bg-[#050810]/90 backdrop-blur-md flex items-center justify-center text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                  <ShieldCheck size={14} />
                </div>
                <div>
                  <h4 className="text-yellow-400 font-bold text-sm md:text-base leading-none mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">1980</h4>
                  <p className="text-white text-xs md:text-sm font-medium leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">The Komodo dragon has been designated as a protected species.</p>
                </div>
              </div>

              {/* Item 3: 1991 */}
              <div className="relative group">
                <div className="absolute -left-8 top-0 w-8 h-8 rounded-full border border-emerald-500 bg-[#050810]/90 backdrop-blur-md flex items-center justify-center text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                  <Landmark size={14} />
                </div>
                <div>
                  <h4 className="text-yellow-400 font-bold text-sm md:text-base leading-none mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">1991</h4>
                  <p className="text-white text-xs md:text-sm font-medium leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">Komodo National Park was designated by UNESCO.</p>
                </div>
              </div>

              {/* Item 4: 2026/Now */}
              <div className="relative group">
                <div className="absolute -left-8 top-0 w-8 h-8 rounded-full border border-emerald-500 bg-[#050810]/90 backdrop-blur-md flex items-center justify-center text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                  <Leaf size={14} />
                </div>
                <div>
                  <h4 className="text-yellow-400 font-bold text-sm md:text-base leading-none mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">2026</h4>
                  <p className="text-white text-xs md:text-sm font-medium leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">Digitalization of the ecotourism portal and strengthening of community-based habitat protection.</p>
                </div>
              </div>

            </div>
          </div>

          {/* 2. TEKS 1 (GAMBAR 1) -> POSISI: ATAS KIRI */}
          <div 
            ref={text1Ref} 
            // Tambahkan pointer-events-auto di akhir className ini:
            className="absolute top-12 left-6 right-6 md:top-28 md:left-12 md:right-auto md:w-5/12 opacity-0 -translate-y-12 text-center md:text-left pointer-events-auto select-text"
          >
            <span className="text-emerald-400 font-bold uppercase tracking-[0.25em] text-xs mb-2 block drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              1910 — FIRST DISCOVERY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              THE LAST DRAGON
            </h2>
            <p className="text-sm md:text-lg text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-normal border-l-2 border-emerald-500 pl-4 bg-black/20 backdrop-blur-xs py-1">
              First documented by the modern scientific world in 1910, the Komodo dragon is an ancient relic that successfully survived mass extinction events across evolutionary millennia.
            </p>
          </div>

          {/* 3. TEKS 2 (GAMBAR 2) -> POSISI: KANAN BAWAH */}
          <div 
              ref={text2Ref} 
              // Tambahkan pointer-events-auto di akhir className ini:
              className="absolute bottom-12 left-6 right-6 md:bottom-20 md:right-12 md:left-auto md:w-5/12 opacity-0 translate-y-12 text-center md:text-right pointer-events-auto select-text"
            >
            <span className="text-yellow-400 font-bold uppercase tracking-[0.25em] text-xs mb-2 block drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              ENDEMIC SANCTUARY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              EXCLUSIVE HABITAT
            </h2>
            <p className="text-sm md:text-lg text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-normal border-r-2 md:border-r-2 md:border-l-0 border-l-2 border-yellow-500 md:pr-4 md:pl-0 pl-4 bg-black/20 backdrop-blur-xs py-1">
              They are found nowhere else on Earth. Only five rugged islands in East Nusa Tenggara serve as the wild kingdom for these solitary, formidable hunters.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}