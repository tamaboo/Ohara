"use client";

import React, { useEffect, useState } from 'react';
import { X, MapPin, Star, Sparkles, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

// 1. IMPORT CONTEXT BAHASA DAN DICTIONARY
import { useLanguage } from '@/components/LanguageContext';
import { dict } from '@/data/dictionary';

interface DetailDestinasiModalProps {
  dest: any | null;
  onClose: () => void;
}

export default function DetailDestinasiModal({ dest, onClose }: DetailDestinasiModalProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // 2. PANGGIL STATE BAHASA AKTIF
  const { lang } = useLanguage();
  
  // Ambil teks UI statis dari dictionary (kita bisa tambahkan di dictionary.ts nanti)
  // Untuk saat ini kita pakai string langsung atau bisa ditambahkan ke dictionary
  const ui = {
      guide: lang === 'id' ? "Panduan Petualang" : "Explorer's Guide",
      photo: lang === 'id' ? "Foto" : "Photo",
      of: lang === 'id' ? "dari" : "of",
      verified: lang === 'id' ? "Terverifikasi oleh" : "Verified by",
      about: lang === 'id' ? "Sekilas Tentang" : "About",
      special: lang === 'id' ? "Mengapa Tempat Ini Spesial?" : "Why This Place is Special?",
      activities: lang === 'id' ? "Aktivitas Rekomendasi" : "Recommended Activities",
      price: lang === 'id' ? "Estimasi Tiket Masuk / Trip" : "Estimated Entry Ticket / Trip",
      footerText: lang === 'id' ? "Ingin mengunjungi" : "Want to visit",
      footerText2: lang === 'id' ? "Masukan ke dalam daftar paket petualanganmu!" : "Add it to your adventure package list!",
      btnLabel: lang === 'id' ? "Tutup & Lihat Trip" : "Close & View Trip"
    };

  useEffect(() => {
    setActiveImgIndex(0);
  }, [dest]);

  if (!dest) return null;

  const galleryPhotos = dest.gallery && dest.gallery.length > 0 
    ? dest.gallery 
    : [dest.img];

  const activities = dest.activities || [
    "Trekking & Scenic Hiking",
    "Snorkeling & Marine Life",
    "Photography & Sunset View",
    "Guided Wildlife Tour"
  ];

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 bg-[#050810]/95 backdrop-blur-md animate-in fade-in duration-300">
      
      <div className="bg-[#0b1121] rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-300">
        
        {/* HEADER MODAL */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800/80 bg-slate-900/50">
          <div className="flex items-center gap-2 text-emerald-400">
            <Compass className="animate-spin-slow" size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">{ui.guide}</span>
          </div>
          
          <button 
            onClick={onClose} 
            className="bg-slate-800 hover:bg-rose-500/20 hover:text-rose-400 text-slate-400 p-2 rounded-full transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* BODY MODAL */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 hide-scrollbar">
          
          {/* GALERI FOTO */}
          <div className="space-y-4">
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 group">
              <img 
                src={galleryPhotos[activeImgIndex]} 
                alt={`${dest.nama} preview`} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
              />
              <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300 font-medium">
                {ui.photo} {activeImgIndex + 1} {ui.of} {galleryPhotos.length}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {galleryPhotos.map((photo: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveImgIndex(index)}
                  className={`relative h-16 sm:h-24 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                    activeImgIndex === index ? 'border-emerald-500 scale-95 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={photo} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* JUDUL & INFO */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <MapPin size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">{dest.lokasi}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-wide">
                {dest.nama}
              </h2>
            </div>

            <div className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 px-4 py-3 rounded-2xl w-max">
              <div className="flex items-center gap-1.5 text-yellow-500">
                <Star size={18} fill="currentColor" />
                <span className="text-lg font-bold text-white">{dest.rating}</span>
              </div>
              <div className="h-4 w-[1px] bg-slate-700"></div>
              <span className="text-xs text-slate-400">{ui.verified} <strong className="text-slate-200">280+</strong></span>
            </div>
          </div>

          {/* PENJELASAN */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6 text-slate-300 leading-relaxed">
              <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900/50 border-l-4 border-emerald-500 p-5 rounded-r-2xl">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                  <Sparkles size={16} />
                  <span>{ui.about} {dest.nama}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 font-medium italic">
                  {/* PANGGIL DESKRIPSI SESUAI BAHASA */}
                  "{lang === 'id' ? dest.desc_id : dest.desc_en}"
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base">
                <h4 className="text-white font-bold text-lg border-b border-slate-800 pb-2">{ui.special}</h4>
                <p>
                  {dest.longDesc || `${dest.nama} ${lang === 'id' ? 'adalah salah satu surga tersembunyi di kawasan Taman Nasional Komodo. Tempat ini menawarkan perpaduan sempurna antara keindahan lanskap alam yang dramatis, perairan biru kristal yang kaya akan biodiversitas maritim.' : 'is one of the hidden paradises in the Komodo National Park area. This place offers a perfect blend of dramatic natural landscape beauty, crystal blue waters rich in marine biodiversity.'}`}
                </p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl h-max space-y-6">
              <div>
                <h5 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  {ui.activities}
                </h5>
                <ul className="space-y-2.5">
                  {activities.map((act: string, i: number) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-center gap-2.5 bg-slate-800/50 px-3 py-2 rounded-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      {act}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">{ui.price}</span>
                <span className="text-emerald-400 font-bold text-lg">{dest.harga}</span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER MODAL */}
        <div className="p-6 border-t border-slate-800/80 bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            {ui.footerText} <strong className="text-white">{dest.nama}</strong>? {ui.footerText2}
          </p>
          <button 
            onClick={() => {
              onClose();
              setTimeout(() => {
                const element = document.getElementById('paketwisata');
                if (element) {
                  const y = element.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }, 150);
            }}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:scale-105"
          >
            {ui.btnLabel} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}