'use client';
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, ChevronUp } from 'lucide-react';

// DESTINASI DATA - 12 destinasi
const destinasiData = [
  {
    id: 1,
    nama: 'Pulau Padar',
    desc: 'Lanskap savana berbukit dengan panorama tiga teluk melengkung yang ikonik.',
    longDesc: 'Pulau Padar menawarkan panorama tiga teluk dengan warna pasir berbeda: putih, hitam, dan merah muda. Pendakian ikonik di sini memberikan pemandangan matahari terbit terbaik di kawasan Komodo.',
    lokasi: 'Taman Nasional Komodo, NTT',
    harga: 'Rp 150.000 / orang',
    rating: 4.9,
  },
  {
    id: 2,
    nama: 'Pink Beach',
    desc: 'Pantai dengan pasir merah muda langka, campuran koral merah dan pasir putih.',
    longDesc: 'Warna pink berasal dari Foraminifera, organisme mikroskopis. Airnya yang jernih sangat cocok untuk snorkeling santai.',
    lokasi: 'Pulau Komodo, TN Komodo',
    harga: 'Rp 50.000 / orang',
    rating: 4.8,
  },
  {
    id: 3,
    nama: 'Loh Liang',
    desc: 'Habitat asli kadal purba raksasa dengan jalur trekking menantang.',
    longDesc: 'Gerbang utama melihat Komodo di alam liar. Dipandu ranger profesional, Anda akan menjelajahi savana dan hutan kering.',
    lokasi: 'Pulau Komodo, TN Komodo',
    harga: 'Rp 250.000 / orang',
    rating: 4.7,
  },
  {
    id: 4,
    nama: 'Manta Point',
    desc: 'Spot snorkeling dan diving terbaik bersama pari manta raksasa.',
    longDesc: 'Lokasi berkumpulnya pari Manta untuk mencari makan. Sensasi berenang bersama satwa anggun ini tidak terlupakan.',
    lokasi: 'Selat Lintah, TN Komodo',
    harga: 'Rp 200.000 / orang',
    rating: 4.9,
  },
  {
    id: 5,
    nama: 'Taka Makassar',
    desc: 'Gundukan pasir timbul berbentuk bulan sabit di tengah lautan jernih.',
    longDesc: 'Pulau pasir mungil di tengah laut biru. Hanya terlihat saat surut, sempurna untuk foto estetik.',
    lokasi: 'Dekat Manta Point, TN Komodo',
    harga: 'Rp 100.000 / orang',
    rating: 4.6,
  },
  {
    id: 6,
    nama: 'Pulau Kelor',
    desc: 'Spot pendakian singkat yang cukup menanjak dengan view lautan.',
    longDesc: 'Destinasi pertama dari Labuan Bajo. Trekkingnya singkat tapi menantang, memberikan view laut yang luar biasa.',
    lokasi: 'Kab. Manggarai Barat, NTT',
    harga: 'Rp 50.000 / orang',
    rating: 4.7,
  },
  {
    id: 7,
    nama: 'Pulau Kalong',
    desc: 'Saksikan ribuan kelelawar terbang menutupi langit senja.',
    longDesc: 'Hutan mangrove rumah bagi ribuan kalong. Saat sunset, mereka terbang berhamburan menciptakan siluet epik.',
    lokasi: 'Taman Nasional Komodo',
    harga: 'Rp 100.000 / orang',
    rating: 4.8,
  },
  {
    id: 8,
    nama: 'Pulau Rinca',
    desc: 'Alternatif utama mengamati Komodo dengan jarak lebih dekat.',
    longDesc: 'Pulau ini memiliki populasi Komodo yang cukup padat di savana terbuka. Sangat mudah dilihat oleh pengunjung.',
    lokasi: 'Taman Nasional Komodo',
    harga: 'Rp 250.000 / orang',
    rating: 4.7,
  },
  {
    id: 9,
    nama: 'Batu Bolong',
    desc: 'Surganya penyelam dengan terumbu karang warna-warni.',
    longDesc: 'Situs diving kelas dunia. Arus yang kuat menopang ekosistem ikan pelagis dan terumbu yang sangat sehat.',
    lokasi: 'Selat Lintah, TN Komodo',
    harga: 'Rp 300.000 / orang',
    rating: 4.9,
  },
  {
    id: 10,
    nama: 'Pulau Kanawa',
    desc: 'Pulau tenang dengan dermaga gayu cantik dan bintang laut.',
    longDesc: 'Perairan jernih, hiu karang kecil, dan bintang laut merah. Sempurna untuk relaksasi total.',
    lokasi: 'Perbatasan TN Komodo',
    harga: 'Rp 100.000 / orang',
    rating: 4.6,
  },
  {
    id: 11,
    nama: 'Gili Laba',
    desc: 'Bukit eksotis dengan pemandangan lautan biru memukau.',
    longDesc: 'Panoramanya sangat fotogenik, terutama saat musim kemarau di mana bukit berubah menjadi warna keemasan.',
    lokasi: 'Utara TN Komodo',
    harga: 'Rp 50.000 / orang',
    rating: 4.8,
  },
  {
    id: 12,
    nama: 'Pulau Sebayur',
    desc: 'Lokasi snorkeling tenang dan basecamp banyak kapal Phinisi.',
    longDesc: 'Tempat pelarian yang sempurna. Arusnya tenang, karang terjaga, dan merupakan lokasi favorit kapal Phinisi untuk bermalam.',
    lokasi: 'Dekat Labuan Bajo',
    harga: 'Rp 75.000 / orang',
    rating: 4.5,
  },
];

// EXTENDED KNOWLEDGE BASE
const botKnowledge: any = {
  umum: [
    // Greetings
    { k: ['halo', 'hai', 'pagi', 'siang', 'malam', 'hola', 'apa kabar'], a: 'Halo! 👋 Saya EcoKomodo Bot, asisten digital siap membantu Anda. Ada yang ingin Anda tanyakan tentang Taman Nasional Komodo? 😊' },
    
    // Tentang Website
    { k: ['web ini', 'website ini', 'tentang website', 'siapa kalian', 'apa ini', 'ecokomodo apa'], a: `🌐 **Tentang EcoKomodo**\n\nEcoKomodo adalah platform wisata digital untuk menjelajahi keindahan Taman Nasional Komodo. Kami menyediakan:\n\n✨ Informasi lengkap 12 destinasi wisata\n✨ Paket tour yang menarik & terjangkau\n✨ Tips & panduan traveling profesional\n✨ Layanan booking mudah & cepat\n✨ Koneksi langsung dengan guide berpengalaman\n✨ Dukungan pelanggan 24/7\n\nMisi kami adalah membuat wisatawan dapat menjelajahi Komodo dengan nyaman, aman, dan berkesan!` },
    
    // Sejarah Komodo
    { k: ['sejarah komodo', 'komodo history', 'asal komodo', 'dari mana komodo', 'evolusi komodo', 'kapan komodo ada'], a: `🦎 **Sejarah Komodo - Kadal Purba Raksasa**\n\n📚 **Asal Mula:**\nKomodo adalah spesies kadal terbesar di dunia yang hidup di Pulau Komodo, Rinca, dan Flores. Mereka diduga berasal dari Australia melalui migrasi ribuan tahun lalu.\n\n🌍 **Evolusi:**\nKomodo merupakan sisa-sisa Megalania (kadal raksasa purba) yang punah. Mereka beradaptasi dengan ekosistem unik kepulauan Nusa Tenggara selama jutaan tahun.\n\n📏 **Ukuran:**\n• Rata-rata panjang: 2.5-3 meter\n• Berat: 70-90 kg\n• Rekor terbesar: 3.6 meter, 166 kg!\n\n🐚 **Usia & Reproduksi:**\n• Hidup hingga 50 tahun di alam liar\n• Dewasa pada 8-9 tahun\n• Reproduksi lambat (ancaman kepunahan)\n\n🏛️ **Perlindungan:**\n• Taman Nasional Komodo didirikan 1980\n• UNESCO World Heritage Site 1991\n• Populasi sekarang: ~3.000 ekor\n• Status: Vulnerable (Rentan Punah)` },
    
    // Destinasi Umum
    { k: ['destinasi', 'tempat wisata', 'tempat menarik', 'ke mana', 'pilihan destinasi'], a: `🏝️ **12 Destinasi Populer:**\n\n1. 🏔️ Pulau Padar - Panorama 3 teluk (⭐4.9) - Rp 150.000\n2. 🌸 Pink Beach - Pasir pink unik (⭐4.8) - Rp 50.000\n3. 🦎 Loh Liang - Habitat Komodo (⭐4.7) - Rp 250.000\n4. 🌊 Manta Point - Diving Pari Manta (⭐4.9) - Rp 200.000\n5. ✨ Taka Makassar - Pulau pasir (⭐4.6) - Rp 100.000\n6. 🦇 Pulau Kalong - Kelelawar senja (⭐4.8) - Rp 100.000\n7. 🦎 Pulau Rinca - Komodo mudah dilihat (⭐4.7) - Rp 250.000\n8. ⛰️ Batu Bolong - Diving kelas dunia (⭐4.9) - Rp 300.000\n9. 🌅 Pulau Kelor - Trekking pendek (⭐4.7) - Rp 50.000\n10. 🌴 Gili Laba - Bukit eksotis (⭐4.8) - Rp 50.000\n11. 🤿 Pulau Kanawa - Snorkeling tenang (⭐4.6) - Rp 100.000\n12. 🏖️ Pulau Sebayur - Relaksasi sempurna (⭐4.5) - Rp 75.000\n\nKetik nama destinasi untuk info detail!` },
    
    // Harga
    { k: ['harga', 'berapa harga', 'biaya', 'tarif', 'berapa'], a: `💰 **Daftar Harga Destinasi**\n\n🏔️ Pulau Padar: Rp 150.000/orang (⭐4.9)\n🌸 Pink Beach: Rp 50.000/orang (⭐4.8)\n🦎 Loh Liang: Rp 250.000/orang (⭐4.7)\n🌊 Manta Point: Rp 200.000/orang (⭐4.9)\n✨ Taka Makassar: Rp 100.000/orang (⭐4.6)\n🦇 Pulau Kalong: Rp 100.000/orang (⭐4.8)\n🦎 Pulau Rinca: Rp 250.000/orang (⭐4.7)\n⛰️ Batu Bolong: Rp 300.000/orang (⭐4.9)\n🌅 Pulau Kelor: Rp 50.000/orang (⭐4.7)\n🌴 Gili Laba: Rp 50.000/orang (⭐4.8)\n🤿 Pulau Kanawa: Rp 100.000/orang (⭐4.6)\n🏖️ Pulau Sebayur: Rp 75.000/orang (⭐4.5)\n\n📝 Catatan:\n• Harga per orang, minimal 2 orang\n• Include guide & asuransi\n• Group >10 orang dapat diskon!` },
    
    // Booking
    { k: ['booking', 'pesan', 'reservasi', 'order', 'ingin booking'], a: `📅 **Proses Booking**\n\n✅ Langkah-langkah:\n1. Pilih destinasi & tanggal\n2. Tentukan jumlah peserta\n3. Isi data pribadi Anda\n4. Pilih paket yang sesuai\n5. Konfirmasi pembayaran\n6. Terima e-ticket & detail jadwal\n\n💳 Metode Pembayaran:\n• Transfer Bank\n• E-wallet (GoPay, OVO, Dana)\n• Kartu Kredit\n\n📞 Hubungi kami untuk detail lebih lanjut!` },
    
    // Cuaca & Musim
    { k: ['cuaca', 'kapan terbaik', 'musim', 'waktu terbaik', 'iklim'], a: `🌤️ **Musim & Cuaca Komodo**\n\n☀️ **Musim Kemarau (Apr-Nov):**\n✓ Cuaca cerah & stabil\n✓ Visibilitas air optimal\n✓ Ideal untuk semua aktivitas\n✓ Peak season (booking lebih sulit)\n\n🌧️ **Musim Hujan (Des-Mar):**\n⚠️ Cuaca tak menentu\n⚠️ Visibilitas air menurun\n⚠️ Beberapa tour mungkin batal\n✓ Harga lebih murah\n\n🎯 **Waktu TERBAIK:**\n👑 Juli - September:\n• Cuaca paling stabil\n• Visibilitas air terbaik\n• Manta ray paling banyak\n• Already termasuk high season` },
    
    // Packing
    { k: ['barang bawaan', 'harus bawa', 'perlengkapan', 'packing', 'apa bawa apa'], a: `🎒 **Packing Checklist Essentials**\n\n👕 Pakaian:\n✓ T-shirt/kaos (breathable)\n✓ Long pants & shorts\n✓ Jaket ringan\n✓ Sandal & sepatu trekking\n\n☀️ Perlengkapan:\n✓ Sunscreen SPF 50+\n✓ Topi/cap & sunglasses UV\n✓ Handuk kecil\n\n💧 Kesehatan:\n✓ Air minum (2-3 liter)\n✓ Snack/energy bar\n✓ Obat pribadi\n✓ Plester & first aid\n\n📸 Elektronik:\n✓ Kamera waterproof\n✓ Power bank\n✓ Ponsel + charger\n\n⚠️ Jangan lupa:\n✓ ID/Passport\n✓ Travel insurance\n✓ Cash cadangan` },
    
    // Keselamatan
    { k: ['keselamatan', 'aman', 'tips', 'etika', 'larangan', 'aturan', 'bahaya'], a: `🛡️ **Tips Keselamatan & Aturan**\n\n🦎 Menghadapi Komodo:\n⚠️ JANGAN: Pukul, manjat, atau dekati\n✅ LAKUKAN: Ikuti instruksi ranger\n✅ Jarak aman: Minimal 3-4 meter\n✅ Bergerak perlahan & tenang\n\n🌊 Aktivitas Air:\n✓ Gunakan life jacket\n✓ Jangan berenang sendirian\n✓ Dengarkan instruksi guide\n\n🏔️ Trekking:\n✓ Pakai sepatu trekking\n✓ Bawa air cukup\n✓ Jangan terpisah dari grup\n\n☀️ Cuaca:\n✓ Perlindung dari sinar matahari\n✓ Hindari dehidrasi\n✓ Istirahat jika kelelahan\n\n🚨 Darurat:\n📞 Hotline 24/7 kami siap membantu!` },
    
    // Diving & Snorkeling
    { k: ['diving', 'snorkeling', 'selam', 'kualitas air', 'ikan'], a: `🤿 **Diving & Snorkeling di Komodo**\n\n✨ Spot Terbaik:\n🌊 Manta Point - Diving kelas dunia\n⛰️ Batu Bolong - Terumbu karang indah\n🐠 Taka Makassar - Ikan pelagis\n🏝️ Pulau Kanawa - Relaksasi\n\n📊 Level Kesulitan:\n• Beginner: Taka Makassar, Kanawa\n• Intermediate: Manta Point\n• Advanced: Batu Bolong\n\n🐠 Fauna Laut:\n• Pari Manta Raksasa (musiman)\n• Ikan Paus (jarang)\n• Hiu karang & Terumbu karang sehat\n• Nudibranch warna-warni\n\n⏱️ Durasi: 1-2 jam per session\n👥 Rasio Guide: 1:4 (max)\n\n💡 Tips: Belajar di tempat aman dulu!` },
    
    // Fotografi
    { k: ['foto', 'fotografi', 'kamera', 'tips foto', 'hasil terbaik'], a: `📸 **Tips Fotografi di Komodo**\n\n🌅 Best Time:\n• Sunrise: 5:30-7:00 pagi\n• Golden hour: 16:00-18:00 sore\n• Moonrise: Malam cerah\n\n🎯 Subject Favorit:\n📷 Padar: Panorama 3 teluk\n🌊 Manta Point: Underwater shots\n🌸 Pink Beach: Pasir pink\n🌅 Kalong: Ribuan kelelawar\n\n📱 Gear:\n✓ DSLR/Mirrorless (optional)\n✓ Ponsel flagship (cukup bagus!)\n✓ Underwater case\n✓ ND filter (optional)\n\n🎨 Editing Tips:\n• Tingkatkan saturation warna\n• Kuatkan contrast\n• Reduce haze untuk air jernih\n• Brightness sesuaikan\n\n✅ Permission:\n• Tanyakan sebelum foto\n• Respect privacy pengunjung\n• Jangan ganggu satwa liar` },
    
    // Kontak
    { k: ['kontak', 'hubungi', 'nomor', 'telepon', 'whatsapp', 'email', 'alamat'], a: `📞 **Hubungi Kami**\n\n☎️ Customer Service:\n📱 WhatsApp: +62-xxx-xxxx-xxxx\n📞 Telepon: +62-xxx-xxxx-xxxx\n📧 Email: info@ecokomodo.com\n🕐 Jam: 08:00-22:00 (setiap hari)\n\n🗺️ Kantor:\nLabuan Bajo, Manggarai Barat\nNusa Tenggara Timur, Indonesia\n\n💬 Chat Support:\n✓ Tersedia di website 24/7\n✓ Response time: <5 menit\n✓ Bahasa: Indonesia & English\n\n✉️ Kirimkan pertanyaan via email untuk:\n• Grup besar (>20 orang)\n• Corporate events\n• Custom itinerary\n\n🔔 Follow Media Sosial:\nInstagram: @ecokomodo\nFacebook: EcoKomodo Official` },
    
    // Default fallback
    { k: [], a: '🤔 Maaf, saya kurang paham pertanyaan Anda. Coba tanya tentang:\n• "destinasi" - lihat semua tempat wisata\n• "harga" - daftar lengkap biaya\n• "booking" - cara pesan tour\n• "sejarah komodo" - info kadal\n• "keselamatan" - tips aman\n• "kontak" - hubungi kami\n\nAda yang lain? Ketik pertanyaanmu!' }
  ]
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: string, text: string}[]>([
    { role: 'ai', text: '👋 Halo! Saya asisten AI EcoKomodo. Saya siap membantu Anda merencanakan petualangan impian ke Taman Nasional Komodo. Ada yang bisa saya bantu?' }
  ]);
  const [step, setStep] = useState<'idle' | 'booking'>('idle');
  const [bookingData, setBookingData] = useState<any>({});
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages]);

  const quickActions = [
    { label: '📅 Booking', action: 'booking' },
    { label: '💰 Harga', action: 'harga destinasi' },
    { label: '🎒 Packing', action: 'packing list' },
    { label: '🛡️ Keselamatan', action: 'keselamatan' },
    { label: '🦎 Komodo', action: 'sejarah komodo' },
    { label: '🤿 Diving', action: 'diving snorkeling' },
    { label: '📸 Foto', action: 'fotografi' },
    { label: '📞 Kontak', action: 'hubungi kami' }
  ];

  const findAnswer = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase().trim();
    
    // Cari di knowledge base
    for (const item of botKnowledge.umum) {
      if (item.k.some((k: string) => lowerInput.includes(k))) {
        return item.a;
      }
    }
    
    // Cek apakah ada destinasi yang cocok
    for (const destinasi of destinasiData) {
      const namaLower = destinasi.nama.toLowerCase();
      if (lowerInput.includes(namaLower) || lowerInput.includes(namaLower.split(' ')[0])) {
        return `🏝️ **${destinasi.nama}**\n\n${destinasi.longDesc}\n\n📍 Lokasi: ${destinasi.lokasi}\n💰 Harga: ${destinasi.harga}\n⭐ Rating: ${destinasi.rating}/5\n\n✨ Sempurna untuk fotografi, trekking, dan petualangan!\n\nIngin booking? Ketik "booking" 📅`;
      }
    }
    
    return botKnowledge.umum[botKnowledge.umum.length - 1].a;
  };

  const handleBooking = (text: string) => {
    let reply = "";

    if (!bookingData.nama) {
      setBookingData({ ...bookingData, nama: text });
      reply = `Senang bertemu, ${text}! 😊\n\nPulau mana yang ingin Anda kunjungi?\n\n1. 🏔️ Padar\n2. 🌸 Pink Beach\n3. 🦎 Loh Liang\n4. 🌊 Manta Point\n5. ✨ Taka Makassar\n6. 🦇 Kalong\n7. 🦎 Rinca\n8. ⛰️ Batu Bolong\n9. 🌅 Kelor\n10. 🌴 Gili Laba\n11. 🤿 Kanawa\n12. 🏖️ Sebayur`;
    } else if (!bookingData.destinasi) {
      setBookingData({ ...bookingData, destinasi: text });
      reply = `Bagus! ${text} adalah pilihan excellent! 🏝️\n\nUntuk berapa orang?`;
    } else if (!bookingData.orang) {
      setBookingData({ ...bookingData, orang: text });
      reply = `Oke, untuk ${text} orang. 👥\n\nTanggal berapa? (format: DD/MM/YYYY)`;
    } else {
      const bookingCode = `EKO-${Math.floor(Math.random()*100000)}`;
      reply = `✅ **KONFIRMASI BOOKING**\n\n📋 Detail Booking:\n• Nama: ${bookingData.nama}\n• Destinasi: ${bookingData.destinasi}\n• Jumlah: ${bookingData.orang} orang\n• Tanggal: ${text}\n\n🎫 Kode Booking: ${bookingCode}\n\n📧 Cek email untuk detail lebih lanjut!\n☎️ Hubungi: hello@ecokomodo.id\n\nTerima kasih telah memilih EcoKomodo! 🙏`;
      setStep('idle');
      setBookingData({});
    }
    return reply;
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      
      if (userMsg.toLowerCase().includes('booking')) {
        setStep('booking');
        reply = "📅 Baik! Mari kita mulai proses booking. Siapa nama Anda?";
      } else if (step === 'booking') {
        reply = handleBooking(userMsg);
      } else {
        reply = findAnswer(userMsg);
      }
      
      setMessages(prev => [...prev, { role: 'ai', text: reply }]);
      setIsTyping(false);
    }, 600);
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-96 h-[650px] bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 p-4 flex justify-between items-center text-white font-bold shadow-lg">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold">EcoKomodo Bot</p>
                <p className="text-xs opacity-80">Always online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/20 p-2 rounded-full transition"
            >
              <X size={20}/>
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                <div className={`max-w-xs px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words ${
                  m.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-br-none shadow-md' 
                    : 'bg-slate-800 text-slate-100 rounded-bl-none shadow-md border border-slate-700'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-emerald-400">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
                <span className="text-xs">Sedang mengetik...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions dengan Minimize */}
          {showQuickActions && (
            <div className="bg-slate-900/50 border-t border-slate-700 p-3 max-h-48 overflow-y-auto">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs text-slate-400 font-semibold">💡 Quick Actions</p>
                <button
                  onClick={() => setShowQuickActions(false)}
                  className="text-slate-400 hover:text-white transition p-1"
                  title="Minimize"
                >
                  <ChevronUp size={16} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((btn) => (
                  <button 
                    key={btn.label}
                    onClick={() => handleQuickAction(btn.action)} 
                    className="bg-slate-800 hover:bg-emerald-600 text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 border border-slate-700 hover:border-emerald-500"
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Minimize Button */}
          {!showQuickActions && (
            <div className="bg-slate-900/50 border-t border-slate-700 p-2 flex justify-between">
              <p className="text-xs text-slate-400">Quick Actions Minimized</p>
              <button
                onClick={() => setShowQuickActions(true)}
                className="text-slate-400 hover:text-white transition p-1"
                title="Show"
              >
                ▼
              </button>
            </div>
          )}
          
          {/* Input */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex gap-2">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                  sendMessage();
                }
              }} 
              className="flex-1 bg-slate-800 hover:bg-slate-700 focus:bg-slate-700 px-4 py-3 rounded-full text-sm outline-none text-white placeholder-slate-500 transition border border-slate-700 focus:border-emerald-500" 
              placeholder="Ketik pertanyaan..." 
            />
            <button 
              onClick={sendMessage} 
              className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 p-3 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
            >
              <Send size={18}/>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)} 
          className="bg-gradient-to-br from-emerald-600 to-teal-500 p-5 rounded-full shadow-2xl hover:shadow-emerald-500/50 animate-pulse hover:animate-none transition-all duration-300 hover:scale-110"
        >
          <MessageSquare size={28} className="text-white" />
        </button>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.5);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.8);
        }
      `}</style>
    </div>
  );
}
