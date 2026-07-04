"use client";

import React from 'react';
import { MapPin, ShieldAlert, HeartHandshake, Sparkles, Trash2, CameraOff, Flame, AlertCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

// Titik koordinat disesuaikan secara presisi dengan posisi pulau pada gambar peta.jpg
const mapLocations = [
  { id: 1, name: 'Pulau Padar', desc: 'Pemandangan 3 teluk ikonis.', img: '/Peta/padar.jpg', top: '38%', left: '32%' },
  { id: 2, name: 'Pink Beach', desc: 'Pasir merah muda langka.', img: '/Peta/beach.jpg', top: '68%', left: '48%' },
  { id: 3, name: 'Loh Liang', desc: 'Habitat asli Naga Purba.', img: '/Peta/liang.jpg', top: '42%', left: '65%' },
  { id: 4, name: 'Manta Point', desc: 'Spot snorkeling pari manta.', img: '/Peta/manta.jpg', top: '58%', left: '38%' },
  { id: 5, name: 'Taka Makassar', desc: 'Gundukan pasir bulan sabit.', img: '/Peta/taka.jpg', top: '48%', left: '52%' },
  { id: 6, name: 'Pulau Kelor', desc: 'Pendakian singkat view laut.', img: '/Peta/kelor.jpg', top: '78%', left: '28%' },
  { id: 7, name: 'Pulau Kalong', desc: 'Ribuan kelelawar senja.', img: '/Peta/kalong.jpg', top: '28%', left: '58%' },
  { id: 8, name: 'Pulau Rinca', desc: 'Habitat komodo yang padat.', img: '/Peta/rinca.jpg', top: '55%', left: '76%' },
  { id: 9, name: 'Batu Bolong', desc: 'Surganya para penyelam.', img: '/Peta/bolong.jpg', top: '24%', left: '42%' },
  { id: 10, name: 'Pulau Kanawa', desc: 'Dermaga kayu yang tenang.', img: '/Peta/kanawa.jpg', top: '22%', left: '78%' },
];

const ecoRules = [
  {
    icon: <AlertCircle className="text-amber-400" size={20} />,
    title: "Jaga Jarak Aman & Patuhi Ranger",
    desc: "Komodo adalah predator liar yang agresif. Selalu berjalan bersama pemandu resmi dan jaga jarak minimal 5 meter dari satwa."
  },
  {
    icon: <Trash2 className="text-rose-400" size={20} />,
    title: "Bawa Pulang Sampahmu (Zero Waste)",
    desc: "Dilarang membuang sampah plastik di laut atau jalur trekking. Ekosistem laut Komodo sangat rentan terhadap pencemaran."
  },
  {
    icon: <CameraOff className="text-blue-400" size={20} />,
    title: "Matikan Flash Saat Memotret",
    desc: "Cahaya kilat mendadak dapat mengejutkan dan memicu keagresifan komodo serta mengganggu aktivitas alami satwa malam."
  },
  {
    icon: <Flame className="text-purple-400" size={20} />,
    title: "Dilarang Menyulut Api / Merokok",
    desc: "Savana kering di Padar dan Rinca sangat rawan kebakaran. Hindari membawa atau menyalakan sumber api di area konservasi."
  }
];

export default function Peta() {
  return (
    <section id="peta" className="py-24 bg-[#050810] text-white relative overflow-hidden">
      {/* Background Glow Halus */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* HEADER SECTION */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-emerald-400 font-bold uppercase tracking-[0.25em] text-xs md:text-sm block">
              Explorer's Directory
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Peta & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-300">Panduan Wisata</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
              Arahkan kursor pada peta untuk menjelajahi titik destinasi, dan pahami aturan penting di bawah untuk menjaga kelestarian alam Komodo.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 COLUMNS LAYOUT: KIRI (PETA) & KANAN (ATURAN/AJAKAN) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ========================================== */}
          {/* KOLOM KIRI: PETA INTERAKTIF (7 KOLOM)     */}
          {/* ========================================== */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal delay={200}>
              <div className="relative w-full aspect-[4/3] bg-slate-900 rounded-3xl border border-slate-800/80 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden group/map">
                
                {/* Gambar Peta Asli dengan Kecerahan Penuh */}
                <img 
                  src="/Peta/peta.jpg" 
                  alt="Peta Taman Nasional Komodo" 
                  className="w-full h-full object-cover opacity-100 transition-transform duration-1000 ease-out group-hover/map:scale-[1.02]"
                />
                
                {/* Gradient Shadow di sudut agar tampilan elegan */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Titik-Titik Lokasi Pin */}
                {mapLocations.map((loc) => (
                  <div 
                    key={loc.id}
                    className="absolute group z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ top: loc.top, left: loc.left }}
                  >
                    {/* Pin Lokasi Beranimasi */}
                    <div className="relative flex items-center justify-center cursor-pointer">
                      <div className="absolute w-7 h-7 bg-emerald-400/40 rounded-full animate-ping"></div>
                      <div className="relative z-10 bg-emerald-600 border border-white/40 text-white p-2 rounded-full shadow-lg group-hover:bg-yellow-500 group-hover:text-slate-950 group-hover:scale-125 transition-all duration-300">
                        <MapPin size={16} className="fill-current" />
                      </div>
                    </div>

                    {/* Tooltip Pop-up */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl p-2.5 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-bottom pointer-events-none z-50">
                      <img src={loc.img} alt={loc.name} className="w-full h-20 object-cover rounded-xl mb-2 border border-slate-800" />
                      <h4 className="font-serif font-bold text-white text-sm leading-snug">{loc.name}</h4>
                      <p className="text-[11px] text-slate-300 leading-normal mt-0.5 font-medium">{loc.desc}</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-900"></div>
                    </div>
                  </div>
                ))}

                {/* Label Informasi di Pojok Peta */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-xs text-slate-300 flex items-center gap-2 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>10 Titik Destinasi Favorit</span>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* ========================================== */}
          {/* KOLOM KANAN: PERATURAN & AJAKAN (5 KOLOM)  */}
          {/* ========================================== */}
          <div className="lg:col-span-5 w-full space-y-6 flex flex-col justify-between h-full">
            
            <ScrollReveal delay={300}>
              <div className="bg-[#0b1121]/90 border border-slate-800/80 rounded-3xl p-6 sm:p-7 shadow-xl space-y-5">
                
                <div className="flex items-center gap-2.5 border-b border-slate-800 pb-4">
                  <div className="p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400">
                    <ShieldAlert size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                      Aturan Wajib Pengunjung
                    </h3>
                    <p className="text-xs text-slate-400">Demi keselamatan & konservasi alam</p>
                  </div>
                </div>

                {/* Daftar Aturan */}
                <div className="space-y-4">
                  {ecoRules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-slate-700 transition-colors">
                      <div className="p-2 bg-slate-800/80 rounded-xl mt-0.5 shrink-0">
                        {rule.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-100">{rule.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed font-medium">{rule.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </ScrollReveal>

            {/* KARTU AJAKAN PELESTARIAN (CALL TO ACTION) */}
            <ScrollReveal delay={400}>
              <div className="relative bg-gradient-to-br from-emerald-900/40 via-[#0b1121] to-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-7 shadow-[0_0_30px_rgba(16,185,129,0.1)] overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl text-emerald-400 shrink-0">
                    <HeartHandshake size={28} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                      <Sparkles size={14} />
                      <span>Ekowisata Berkelanjutan</span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-white leading-snug">
                      Jadilah Wisatawan yang Bijak
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      Taman Nasional Komodo adalah warisan dunia UNESCO. Setiap langkah dan tindakan kita di pulau ini sangat menentukan kelangsungan hidup satwa purba untuk generasi masa depan.
                    </p>
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