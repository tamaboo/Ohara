# 🌿 ORAHA Ecotourism Web

Selamat datang di repositori resmi **ORAHA Ecotourism**!

Website ini merupakan platform ekowisata dan pariwisata berkelanjutan yang dikembangkan secara khusus untuk mempromosikan dan mendukung kelestarian Taman Nasional Komodo. ORAHA menyediakan informasi destinasi wisata yang mendalam, paket perjalanan eksklusif, peta interaktif, serta sistem pemesanan tiket yang modern dan terintegrasi.

---

## ✨ Fitur Utama

- 🌍 **Multi-language Support**: Terintegrasi penuh dengan dua bahasa (Indonesia & Inggris) menggunakan Context API tanpa memuat ulang halaman.
- 🗺️ **Interactive Destination Map**: Peta interaktif area kepulauan dengan animasi titik pin presisi yang pas di atas pulau serta _tooltip_ detail destinasi yang interaktif.
- 💳 **Tour Booking System**: Sistem formulir pemesanan paket wisata dengan UI/UX modern, dilengkapi simulasi alur pembayaran via Virtual Account (BCA), E-Wallet (GoPay/OVO/DANA), dan QRIS.
- 📱 **100% Responsive Design**: Tata letak dan penataan gambar latar belakang (_background_) yang dioptimalkan secara sempurna untuk segala ukuran layar (Mobile, Tablet, Desktop) tanpa terpotong.
- ⚡ **High Performance & Animations**: Performa memuat halaman yang sangat cepat berkat SSR Next.js, dibalut dengan animasi transisi yang mulus menggunakan GSAP (GreenSock) dan CSS modern.
- 🤖 **AI-Powered Travel Assistant**: Chatbot pintar yang terintegrasi secara real-time untuk menjawab pertanyaan seputar panduan wisata, aturan konservasi, hingga rekomendasi rute perjalanan secara personal, tersedia 24/7 untuk memastikan kenyamanan pengunjung

---

## 🛠️ Teknologi & Library (Tech Stack)

Proyek ini dibangun menggunakan teknologi web modern. Berikut adalah daftar library utama yang digunakan:

- **Framework Utama**: [Next.js](https://nextjs.org/) (React 18)
- **Bahasa Pemrograman**: [TypeScript](https://www.typescriptlang.org/)
- **Styling & UI**: [Tailwind CSS](https://tailwindcss.com/)
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Animasi Kompleks**: [GSAP (GreenSock)](https://gsap.com/) & ScrollTrigger
- **Aset Visual (Bendera)**: `react-country-flag`
- **State Management**: React Hooks & Context API

---

## ⚙️ Persyaratan Sistem (Prerequisites)

Sebelum melakukan instalasi, pastikan komputer/laptop Anda sudah terpasang perangkat lunak berikut:

1. **Node.js** (Versi 18.0.0 atau yang lebih baru disarankan) - [Download di sini](https://nodejs.org/)
2. **npm** (Package manager bawaan Node.js) atau **yarn** / **pnpm**.
3. **Git** (Untuk meng-clone repositori) - [Download di sini](https://git-scm.com/)

---

## 🚀 Panduan Instalasi & Menjalankan Proyek

Ikuti langkah-langkah di bawah ini untuk menjalankan website ORAHA di komputer lokal Anda:

### 1. Clone Repositori

Buka terminal/Command Prompt Anda, lalu jalankan perintah berikut untuk mengunduh kode sumber:

```bash
git clone [https://github.com/username-anda/oraha-ecotourism.git](https://github.com/username-anda/oraha-ecotourism.git)
cd oraha-ecotourism
```

### 2. Instalasi Dependencies

Jalankan perintah berikut untuk menginstal semua dependencies yang diperlukan:

```bash
npm install
```
(Penting: Untuk memastikan fitur animasi dan ikon UI berjalan sempurna, jalankan juga perintah instalasi tambahan berikut):
    - npm install gsap aos lucide-react
    - npm install --save-dev @types/aos

### 3. Konfigurasi Environment Variables

Buat file `.env` di dalam folder `src` dan tambahkan kunci dan nilai environment variables Anda. Misalnya:

```env
npm run dev
```

### 4. Buka di Browser

Buka browser favorit Anda (Chrome, Safari, Edge, Firefox) dan kunjungi tautan berikut:
http://localhost:3000

### 📂 Struktur Folder Proyek

Untuk memudahkan navigasi dalam pengembangan, berikut adalah struktur folder utama dari proyek ORAHA:

Oraha/
├── public/                 # 📂 Folder untuk aset statis (gambar, ikon, logo, video)
│   ├── Destinasi/          # Kumpulan gambar destinasi (pastikan penamaan kebab-case, misal: loh-liang)
│   ├── Faq/                # Aset gambar untuk komponen FAQ
│   ├── Home/               # Aset halaman utama, logo, dan video intro
│   ├── Paket/              # Gambar cover untuk kartu penawaran paket wisata
│   └── Peta/               # Gambar latar belakang untuk peta interaktif
│
├── src/
│   ├── app/                # ⚙️ App Router Next.js (Konfigurasi & Rute Utama)
│   │   ├── api/            # Route handlers untuk backend/API internal (misal: endpoint chatbot)
│   │   ├── favicon.ico     # Ikon tab browser
│   │   ├── globals.css     # Styling global dan inisialisasi Tailwind CSS
│   │   ├── layout.tsx      # Layout utama pembungkus aplikasi (termasuk Metadata SEO)
│   │   └── page.tsx        # Halaman entry-point utama (menggabungkan semua views)
│   │
│   ├── components/         # 🧩 Komponen UI Reusable & Fungsional
│   │   ├── Chatbot.tsx              # Asisten virtual pintar berbasis AI
│   │   ├── CustomCursor.tsx         # Animasi kursor kustom interaktif
│   │   ├── DetailDestinasiModal.tsx # Pop-up modal untuk detail lengkap wisata
│   │   ├── Faq.tsx                  # Komponen akordeon tanya jawab
│   │   ├── Footer.tsx               # Bagian penutup navigasi bawah
│   │   ├── LanguageContext.tsx      # Provider Context API untuk fitur dwibahasa (ID/EN)
│   │   ├── MusicPlayer.tsx          # Pemutar audio latar belakang
│   │   ├── Navbar.tsx               # Menu navigasi atas responsif
│   │   ├── Peta.tsx                 # Peta interaktif dengan titik pin animasi
│   │   ├── ScrollReveal.tsx         # Komponen wrapper untuk animasi transisi scroll
│   │   ├── SplashScreen.tsx         # Layar pemuatan (loading) awal aplikasi
│   │   └── Testimoni.tsx            # Carousel ulasan pengunjung
│   │
│   ├── data/               # 🗄️ Penyimpanan Data Statis & Tekstual
│   │   ├── destinasi.ts    # Database objek destinasi wisata (galeri, deskripsi, dll)
│   │   └── dictionary.ts   # Kumpulan teks terjemahan lengkap (ID & EN)
│   │
│   └── views/              # 🖼️ Komponen Halaman Utuh (Section Layouts)
│       ├── Destinasi.tsx   # Tampilan bagian kartu grid destinasi
│       ├── Home.tsx        # Tampilan Hero section utama
│       ├── PaketWisata.tsx # Tampilan penawaran tur dan simulasi pembayaran
│       └── Sejarah.tsx     # Tampilan interaktif GSAP untuk sejarah Komodo
│
├── package.json            # 📦 Daftar konfigurasi dependencies npm dan script eksekusi
├── tailwind.config.ts      # 🎨 Kustomisasi tema, utility, dan animasi Tailwind CSS
└── README.md               # 📖 Dokumentasi proyek

### 📜 Lisensi

Hak Cipta © 2026 ORAHA Ecotourism.
Proyek ini dibuat untuk tujuan edukasi, pengembangan pariwisata berkelanjutan, dan perlindungan berbasis komunitas di kawasan Taman Nasional Komodo. Semua aset visual yang digunakan merupakan hak milik dari masing-masing kreator aslinya.
