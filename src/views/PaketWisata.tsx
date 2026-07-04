"use client";

import React, { useState, useRef } from 'react';
import { ArrowRight, ArrowLeft, X, Calendar, CreditCard, Wallet, QrCode, Building2, ChevronLeft, CheckCircle2, Copy } from 'lucide-react';

// Data Trip
const trips = [
  { id: 1, title: '1 Day Trip', route: 'Labuan Bajo - Rinca - Padar - Pink Beach', price: 750000, type: 'normal' },
  { id: 2, title: '2 Day 1 Night', route: 'Komodo - Manta Point - Taka Makassar - Padar', price: 1650000, type: 'normal' },
  { id: 3, title: '3 Day 2 Night', route: 'Komodo - Rinca - Padar - Manta Point - Pink Beach', price: 2750000, type: 'popular' },
  { id: 4, title: '4 Day 3 Night', route: 'Full Explorer + Sunset BBQ & Snorkeling Plus', price: 3999000, promoPrice: 2999000, type: 'promo' },
  { id: 5, title: 'Private Trip', route: 'Custom Trip Sesuai Keinginan Anda', price: 0, type: 'custom' },
];

export default function PaketWisata() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedTrip, setSelectedTrip] = useState<any>(null);
  const [pax, setPax] = useState(1);
  const [bookingDate, setBookingDate] = useState<string>('');
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1); 
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Format Rupiah
  const formatRp = (angka: number) => {
    if (angka === 0) return 'Hubungi Kami';
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  // Fungsi Geser Kartu
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; 
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Reset Modal saat ditutup
  const closeModal = () => {
    setSelectedTrip(null);
    setPax(1);
    setBookingDate('');
    setStep(1);
    setPaymentMethod('');
    setCopied(false);
  };

  // Salin ke Clipboard
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Hitung Total
  const totalPembayaran = selectedTrip ? (selectedTrip.promoPrice || selectedTrip.price) * pax : 0;

  return (
    <>
      <section className="relative w-full py-24 bg-[#050810] overflow-hidden">
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        <div className="container mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-stretch">
            
            {/* Bagian Kiri: Judul */}
            <div className="w-full xl:w-[320px] flex flex-col justify-center text-center xl:text-left z-10">
              <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-3 block">
                Paket Wisata
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                Pilih<br className="hidden xl:block"/> Petualanganmu
              </h2>
              <p className="text-slate-400 text-sm mb-4 hidden xl:block">
                Temukan pengalaman tak terlupakan menjelajahi keindahan alam liar Komodo dan sekitarnya.
              </p>
            </div>

            {/* Bagian Kanan: Carousel & Panah */}
            <div className="relative w-full flex-1 min-w-0 group">
              
              {/* Tombol Kiri */}
              <button 
                onClick={() => scroll('left')} 
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-20 w-12 h-12 bg-slate-800 rounded-full border border-slate-600 hidden md:flex items-center justify-center text-white hover:bg-emerald-600 hover:border-emerald-500 shadow-xl transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <ArrowLeft size={20} />
              </button>

              <div 
                ref={scrollContainerRef} 
                className="flex flex-nowrap items-stretch gap-6 overflow-x-auto py-8 px-4 hide-scrollbar snap-x"
              >
                {trips.map((trip) => (
                  <div 
                    key={trip.id} 
                    className={`flex-none w-[280px] snap-start relative flex flex-col bg-[#0b1121] rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 border ${
                      trip.type === 'popular' ? 'border-emerald-500 shadow-[0_10px_30px_rgba(16,185,129,0.15)]' 
                      : trip.type === 'promo' ? 'border-rose-500 shadow-[0_10px_30px_rgba(244,63,94,0.15)]'
                      : 'border-slate-800'
                    }`}
                  >
                    {/* BADGES */}
                    {trip.type === 'popular' && (
                      <div className="absolute -top-4 left-6 bg-emerald-500 text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-emerald-500/40">
                        Populer
                      </div>
                    )}
                    {trip.type === 'promo' && (
                      <div className="absolute -top-4 left-6 bg-rose-500 text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-rose-500/40 animate-pulse">
                        Spesial Promo
                      </div>
                    )}

                    <div className="flex-1 mt-4">
                      <h3 className="text-2xl font-bold text-white mb-3">{trip.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {trip.route}
                      </p>
                    </div>

                    <div className="mt-auto border-t border-slate-800/60 pt-5">
                      {trip.type === 'promo' ? (
                        <div className="mb-4">
                          <p className="text-slate-500 text-xs line-through mb-1">{formatRp(trip.price)}</p>
                          <p className="text-white font-bold text-xl">
                            {formatRp(trip.promoPrice!)} <span className="text-xs text-slate-400 font-normal">/ org</span>
                          </p>
                        </div>
                      ) : (
                        <div className="mb-4">
                          <p className="text-white font-bold text-xl">
                            {formatRp(trip.price)} {trip.price > 0 && <span className="text-xs text-slate-400 font-normal">/ org</span>}
                          </p>
                        </div>
                      )}

                      <button 
                        onClick={() => setSelectedTrip(trip)}
                        className="flex items-center justify-between text-sm text-white bg-slate-800/50 border border-slate-700 px-5 py-3 rounded-xl hover:bg-emerald-600 hover:border-emerald-600 transition-all w-full group/btn cursor-pointer"
                      >
                        Lihat Detail 
                        <ArrowRight size={16} className="text-slate-400 group-hover/btn:text-white transition-colors" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tombol Kanan */}
              <button 
                onClick={() => scroll('right')} 
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-20 w-12 h-12 bg-slate-800 rounded-full border border-slate-600 hidden md:flex items-center justify-center text-white hover:bg-emerald-600 hover:border-emerald-500 shadow-xl transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <ArrowRight size={20} />
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* MODAL PEMBAYARAN & BOOKING */}
      {selectedTrip && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-[#050810]/95 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0b1121] rounded-3xl p-6 md:p-8 max-w-md w-full relative border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] scale-in-center max-h-[90vh] overflow-y-auto hide-scrollbar">
            
            <button 
              onClick={closeModal} 
              className="absolute top-5 right-5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full p-2 transition-colors z-10 cursor-pointer"
            >
              <X size={20}/>
            </button>

            {/* STEP 1: FORM BOOKING */}
            {step === 1 && (
              <>
                <h3 className="text-2xl font-bold text-white mb-1">Detail Booking</h3>
                <p className="text-slate-400 text-sm mb-6 pb-4 border-b border-slate-800">
                  {selectedTrip.title} • {selectedTrip.type === 'custom' ? 'Custom Route' : 'Reguler Trip'}
                </p>

                <div className="space-y-5 mb-8">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Pilih Tanggal <span className="text-rose-500">*</span></label>
                    <div className="relative">
                      <input 
                        type="date" 
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full bg-[#1e293b]/50 border border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-3.5 text-white outline-none transition-colors cursor-pointer" 
                      />
                      <Calendar size={18} className="absolute right-4 top-4 text-slate-400 pointer-events-none" />
                    </div>
                    {!bookingDate && <p className="text-rose-400 text-xs mt-1.5">* Wajib memilih tanggal keberangkatan terlebih dahulu</p>}
                  </div>

                  {selectedTrip.price > 0 && (
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Jumlah Penumpang</label>
                      <div className="relative flex items-center bg-[#1e293b]/50 border border-slate-700 rounded-xl overflow-hidden">
                        <button onClick={() => setPax(Math.max(1, pax - 1))} className="px-5 py-3.5 hover:bg-slate-700 text-white font-bold text-lg cursor-pointer">-</button>
                        <input type="text" readOnly value={`${pax} Orang`} className="w-full bg-transparent text-center text-white font-bold outline-none" />
                        <button onClick={() => setPax(pax + 1)} className="px-5 py-3.5 hover:bg-slate-700 text-white font-bold text-lg cursor-pointer">+</button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-400 text-sm">Harga per orang</span>
                    <span className="text-white font-medium">
                      {selectedTrip.price > 0 ? formatRp(selectedTrip.promoPrice || selectedTrip.price) : '-'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-800">
                    <span className="text-emerald-500 font-bold">Total Pembayaran</span>
                    <span className="text-emerald-500 font-bold text-xl">
                      {selectedTrip.price > 0 ? formatRp(totalPembayaran) : 'Sesuai Kesepakatan'}
                    </span>
                  </div>
                </div>

                <button 
                  disabled={selectedTrip.price > 0 && !bookingDate}
                  onClick={() => selectedTrip.price > 0 ? setStep(2) : alert('Membuka WhatsApp...')}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 disabled:border disabled:border-slate-700 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-all shadow-lg shadow-emerald-900/20 cursor-pointer disabled:cursor-not-allowed"
                >
                  {selectedTrip.price > 0 ? 'Lanjut ke Pembayaran' : 'Hubungi WhatsApp'}
                  {selectedTrip.price > 0 && <ArrowRight size={18} />}
                </button>
              </>
            )}

            {/* STEP 2: METODE PEMBAYARAN */}
            {step === 2 && (
              <div className="animate-in slide-in-from-right-4 duration-300">
                <button 
                  onClick={() => setStep(1)} 
                  className="flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={16} /> Kembali
                </button>

                <h3 className="text-xl font-bold text-white mb-2">Metode Pembayaran</h3>
                <p className="text-slate-400 text-sm mb-6">Selesaikan pembayaran untuk mengamankan tiket Anda.</p>

                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex justify-between items-center mb-6">
                  <span className="text-slate-300">Total Tagihan</span>
                  <span className="text-white font-bold text-lg">{formatRp(totalPembayaran)}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {/* Option: Virtual Account */}
                  <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'va' ? 'border-emerald-500 bg-emerald-500/10' : 'border-slate-700 bg-[#1e293b]/50 hover:border-slate-500'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400"><Building2 size={16}/></div>
                      <span className="text-white font-medium">BCA Virtual Account</span>
                    </div>
                    <input type="radio" name="payment" className="w-4 h-4 accent-emerald-500" checked={paymentMethod === 'va'} onChange={() => setPaymentMethod('va')} />
                  </label>

                  {/* Option: E-Wallet */}
                  <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'gopay' ? 'border-emerald-500 bg-emerald-500/10' : 'border-slate-700 bg-[#1e293b]/50 hover:border-slate-500'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400"><Wallet size={16}/></div>
                      <span className="text-white font-medium">GoPay / e-Wallet</span>
                    </div>
                    <input type="radio" name="payment" className="w-4 h-4 accent-emerald-500" checked={paymentMethod === 'gopay'} onChange={() => setPaymentMethod('gopay')} />
                  </label>

                  {/* Option: QRIS */}
                  <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'qris' ? 'border-emerald-500 bg-emerald-500/10' : 'border-slate-700 bg-[#1e293b]/50 hover:border-slate-500'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400"><QrCode size={16}/></div>
                      <span className="text-white font-medium">QRIS (All Payment)</span>
                    </div>
                    <input type="radio" name="payment" className="w-4 h-4 accent-emerald-500" checked={paymentMethod === 'qris'} onChange={() => setPaymentMethod('qris')} />
                  </label>
                </div>

                <button 
                  disabled={!paymentMethod}
                  onClick={() => setStep(3)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 disabled:text-slate-500 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                  <CreditCard size={20} /> Bayar Sekarang
                </button>
              </div>
            )}

            {/* STEP 3: INSTRUKSI PEMBAYARAN DUMMY (VA & QRIS) */}
            {step === 3 && (
              <div className="animate-in slide-in-from-right-4 duration-300">
                <button 
                  onClick={() => setStep(2)} 
                  className="flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={16} /> Ganti Metode Pembayaran
                </button>

                <h3 className="text-xl font-bold text-white mb-1">Selesaikan Pembayaran</h3>
                <p className="text-slate-400 text-xs mb-6">Batas waktu pembayaran: <span className="text-rose-400 font-bold">23 jam 59 menit</span></p>

                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 mb-6 space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                    <span className="text-slate-400 text-sm">Metode</span>
                    <span className="text-white font-bold uppercase">{paymentMethod === 'va' ? 'BCA Virtual Account' : paymentMethod === 'gopay' ? 'GoPay / E-Wallet' : 'QRIS'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Total Tagihan</span>
                    <span className="text-emerald-400 font-bold text-lg">{formatRp(totalPembayaran)}</span>
                  </div>
                </div>

                {/* INSTRUKSI BCA VIRTUAL ACCOUNT */}
                {paymentMethod === 'va' && (
                  <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700 mb-6 text-center">
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">Nomor Virtual Account BCA</p>
                    <div className="flex items-center justify-center gap-3 bg-slate-900 py-3 px-4 rounded-xl border border-slate-800 mb-3">
                      <span className="text-xl md:text-2xl font-mono font-bold text-white tracking-wider">8077 7012 3456 7890</span>
                      <button 
                        onClick={() => handleCopy('8077701234567890')} 
                        className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer p-1"
                        title="Salin Nomor VA"
                      >
                        <Copy size={18} />
                      </button>
                    </div>
                    {copied && <p className="text-emerald-400 text-xs font-medium">Nomor berhasil disalin!</p>}
                    <p className="text-slate-400 text-xs mt-3">Gunakan m-BCA, KlikBCA, atau ATM BCA untuk melakukan transfer ke nomor Virtual Account di atas.</p>
                  </div>
                )}

                {/* INSTRUKSI GOPAY / E-WALLET */}
                {paymentMethod === 'gopay' && (
                  <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700 mb-6 text-center">
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">Nomor E-Wallet (GoPay/OVO/DANA)</p>
                    <div className="flex items-center justify-center gap-3 bg-slate-900 py-3 px-4 rounded-xl border border-slate-800 mb-3">
                      <span className="text-xl md:text-2xl font-mono font-bold text-white tracking-wider">0812 3456 7890</span>
                      <button 
                        onClick={() => handleCopy('081234567890')} 
                        className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer p-1"
                        title="Salin Nomor HP"
                      >
                        <Copy size={18} />
                      </button>
                    </div>
                    {copied && <p className="text-emerald-400 text-xs font-medium">Nomor berhasil disalin!</p>}
                    <p className="text-slate-400 text-xs mt-3">Lakukan transfer ke nomor atas nama <strong className="text-white">ORAHA ECOTOURISM</strong>.</p>
                  </div>
                )}

                {/* INSTRUKSI QRIS */}
                {paymentMethod === 'qris' && (
                  <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700 mb-6 flex flex-col items-center text-center">
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">Scan QRIS Di Bawah Ini</p>
                    <div className="bg-white p-4 rounded-2xl shadow-lg mb-3">
                      {/* Placeholder QR Code Dummy SVG */}
                      <svg className="w-48 h-48 text-slate-900" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M0,0 v30 h30 v-30 z M5,5 h20 v20 h-20 z M10,10 v10 h10 v-10 z" />
                        <path d="M70,0 v30 h30 v-30 z M75,5 h20 v20 h-20 z M80,10 v10 h10 v-10 z" />
                        <path d="M0,70 v30 h30 v-30 z M5,75 h20 v20 h-20 z M10,80 v10 h10 v-10 z" />
                        <rect x="35" y="5" width="10" height="10" /><rect x="50" y="5" width="10" height="10" />
                        <rect x="35" y="20" width="10" height="10" /><rect x="55" y="20" width="10" height="10" />
                        <rect x="5" y="35" width="10" height="10" /><rect x="20" y="35" width="10" height="10" />
                        <rect x="35" y="35" width="30" height="30" />
                        <rect x="70" y="35" width="10" height="10" /><rect x="85" y="35" width="10" height="10" />
                        <rect x="5" y="50" width="10" height="10" /><rect x="20" y="50" width="10" height="10" />
                        <rect x="70" y="50" width="10" height="10" /><rect x="85" y="50" width="10" height="10" />
                        <rect x="35" y="70" width="10" height="10" /><rect x="50" y="70" width="10" height="10" />
                        <rect x="70" y="70" width="30" height="30" />
                      </svg>
                    </div>
                    <p className="text-slate-400 text-xs">Mendukung GoPay, OVO, DANA, ShopeePay, dan Mobile Banking.</p>
                  </div>
                )}

                <button 
                  onClick={() => setStep(4)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-all shadow-lg shadow-emerald-900/30 cursor-pointer"
                >
                  Saya Sudah Bayar
                </button>
              </div>
            )}

            {/* STEP 4: MODAL KONFIRMASI SUKSES */}
            {step === 4 && (
              <div className="py-6 text-center animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 size={48} className="animate-bounce" />
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-2">Pembayaran Berhasil!</h3>
                <p className="text-slate-400 text-sm mb-6 max-w-xs mx-auto">
                  Terima kasih telah memesan petualangan bersama ORAHA. E-Ticket dan detail perjalanan telah dikirim ke sistem.
                </p>

                <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800 text-left mb-6 space-y-2 text-xs">
                  <div className="flex justify-between"><span className="text-slate-400">Paket Trip:</span><span className="text-white font-bold">{selectedTrip.title}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Tanggal:</span><span className="text-white font-bold">{bookingDate}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Penumpang:</span><span className="text-white font-bold">{pax} Orang</span></div>
                  <div className="flex justify-between border-t border-slate-800 pt-2"><span className="text-slate-400">Total Dibayar:</span><span className="text-emerald-400 font-bold text-sm">{formatRp(totalPembayaran)}</span></div>
                </div>

                <button 
                  onClick={closeModal}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 rounded-xl transition-all cursor-pointer"
                >
                  Selesai & Tutup
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}