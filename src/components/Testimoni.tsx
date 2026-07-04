"use client";

import React from 'react';

// Menggunakan Pravatar agar gambar tidak error/hilang
const testimoni = [
  { id: 1, nama: 'Budi S', teks: 'Luar biasa!', avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: 2, nama: 'Sarah W', teks: 'Ekowisata nyata.', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 3, nama: 'Michael D', teks: 'Sunrise terbaik.', avatar: 'https://i.pravatar.cc/150?img=8' },
  { id: 4, nama: 'Andi P', teks: 'Sangat mengedukasi.', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 5, nama: 'Dewi R', teks: 'Habitat terjaga.', avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: 6, nama: 'Rizky M', teks: 'Konten edukasi.', avatar: 'https://i.pravatar.cc/150?img=15' },
  { id: 7, nama: 'Fajar A', teks: 'Pengalaman unik.', avatar: 'https://i.pravatar.cc/150?img=33' },
  { id: 8, nama: 'Siska L', teks: 'Wajib dikunjungi.', avatar: 'https://i.pravatar.cc/150?img=47' },
  { id: 9, nama: 'Bagus K', teks: 'Ramah lingkungan.', avatar: 'https://i.pravatar.cc/150?img=59' },
  { id: 10, nama: 'Putri Y', teks: 'Sangat berkesan.', avatar: 'https://i.pravatar.cc/150?img=20' }
];

export default function Testimoni() {
  const row1 = [...testimoni.slice(0, 5), ...testimoni.slice(0, 5)];
  const row2 = [...testimoni.slice(5, 10), ...testimoni.slice(5, 10)];

  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes slideLeft {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @keyframes gasp {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }

        .animate-slideRight {
          animation: slideRight 40s linear infinite;
          will-change: transform;
        }

        .animate-slideLeft {
          animation: slideLeft 40s linear infinite;
          will-change: transform;
        }

        .testimoni-card {
          transition: all 0.3s ease;
        }

        .testimoni-card:hover {
          animation: gasp 0.6s cubic-bezier(0.36, 0, 0.66, -0.56);
          box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
          border-color: rgba(16, 185, 129, 0.6);
        }
      `}</style>

      <h2 className="text-4xl font-bold mb-16 text-center text-white">
        Jejak <span className="text-emerald-500">Kebaikan</span>
      </h2>
      
      {/* Ditambahkan w-max agar hitungan 50% untuk slide akurat sempurna */}
      <div className="flex animate-slideRight mb-8 w-max">
        {row1.map((t, i) => (
          <div key={i} className="testimoni-card mr-6 min-w-[320px] bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 cursor-pointer">
            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/30 flex-shrink-0">
                <img src={t.avatar} alt={t.nama} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">{t.nama}</h4>
                <p className="text-emerald-400 text-xs">Pengunjung</p>
              </div>
            </div>
            <p className="text-slate-300 italic text-base leading-relaxed">"{t.teks}"</p>
          </div>
        ))}
      </div>

      {/* Ditambahkan w-max di sini juga */}
      <div className="flex animate-slideLeft w-max">
        {row2.map((t, i) => (
          <div key={i} className="testimoni-card mr-6 min-w-[320px] bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 cursor-pointer">
            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/30 flex-shrink-0">
                <img src={t.avatar} alt={t.nama} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">{t.nama}</h4>
                <p className="text-emerald-400 text-xs">Pengunjung</p>
              </div>
            </div>
            <p className="text-slate-300 italic text-base leading-relaxed">"{t.teks}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}