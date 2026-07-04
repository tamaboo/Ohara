"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

// Data FAQ disesuaikan dengan tema Ekowisata
const faqData = [
  {
    question: "Kapan waktu terbaik untuk mengunjungi Taman Nasional Komodo?",
    answer: "Waktu terbaik adalah saat musim kemarau, yaitu antara bulan Mei hingga Oktober. Cuacanya cerah, ombak lebih tenang, dan pemandangan perbukitan savana sedang berubah warna menjadi keemasan yang sangat eksotis."
  },
  {
    question: "Apakah aman berinteraksi langsung dengan Komodo?",
    answer: "Sangat aman selama Anda mematuhi aturan. Pengunjung wajib didampingi oleh Ranger (pemandu lokal) profesional saat melakukan trekking. Dilarang berjalan sendirian, membuat gerakan tiba-tiba, atau mendekati komodo tanpa instruksi Ranger."
  },
  {
    question: "Bagaimana cara menjadi turis yang ramah lingkungan (Eco-Friendly) di sini?",
    answer: "Bawa botol minum Anda sendiri (tumbler) untuk mengurangi sampah plastik. Gunakan tabir surya (sunscreen) yang berlabel 'Reef Safe' agar tidak merusak terumbu karang saat snorkeling. Dan yang terpenting, jangan tinggalkan sampah apapun di pulau maupun di laut."
  },
  {
    question: "Apakah anak-anak dan lansia bisa ikut tur ini?",
    answer: "Tentu bisa! Namun, kami menyarankan untuk memilih rute trekking pendek di Pulau Rinca atau sekadar menikmati keindahan Pink Beach dan Pulau Kanawa. Rute trekking panjang di Pulau Komodo dan Pulau Padar mungkin cukup melelahkan bagi lansia atau balita."
  },
  {
    question: "Apakah harga paket destinasi sudah termasuk tiket masuk Taman Nasional?",
    answer: "Harga yang tertera pada aplikasi EcoKomodo adalah estimasi biaya per orang untuk aktivitas tersebut. Tiket masuk resmi Taman Nasional (PNBP) dan retribusi daerah biasanya dibayarkan terpisah saat Anda tiba di gerbang masuk pelabuhan."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default pertanyaan pertama terbuka

  const toggleAccordion = (index: number) => {
    // Jika di-klik pertanyaan yang sama, tutup. Jika berbeda, buka yang baru.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-950 container mx-auto px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pertanyaan <span className="text-emerald-500">Seputar Tour</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Temukan jawaban cepat untuk perjalanan Anda bersama EcoKomodo.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div 
                  className={`border border-slate-800 rounded-2xl overflow-hidden transition-colors duration-300 ${
                    isOpen ? 'bg-slate-900 border-emerald-500/50' : 'bg-slate-950 hover:bg-slate-900/50'
                  }`}
                >
                  {/* Tombol Pertanyaan */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg pr-4 transition-colors duration-300 ${isOpen ? 'text-emerald-400' : 'text-slate-200'}`}>
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180 text-emerald-400' : 'rotate-0'}`} 
                      size={24} 
                    />
                  </button>

                  {/* Jawaban dengan Animasi CSS Grid Height (Sangat Mulus & Ringan) */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-slate-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}