export interface DestinasiItem {
  id: number;
  nama: string;
  lokasi: string;
  rating: string;
  harga: string;
  img: string;      // Untuk foto portrait di kartu carousel utama (0.jpg/0.jpeg)
  gallery: string[];// Untuk foto landscape di dalam modal (1-4)
  desc: string;
}

export const destinasiData: DestinasiItem[] = [
  {
    id: 1,
    nama: 'Manta Point',
    lokasi: 'Taman Nasional Komodo',
    rating: '4.9',
    harga: 'IDR 850.000 / orang',
    // Foto utama menggunakan 0.jpg
    img: '/Destinasi/Manta Point/0.jpg',
    // Galeri menggunakan 1.jpg sampai 4.jpg
    gallery: [
      '/Destinasi/Manta Point/1.jpg',
      '/Destinasi/Manta Point/2.jpg',
      '/Destinasi/Manta Point/3.jpg',
      '/Destinasi/Manta Point/4.jpg',
    ],
    desc: 'Lokasi menyelam dan snorkeling terbaik untuk bercengkerama langsung dengan Ikan Pari Manta raksasa yang ramah di habitat aslinya dengan arus air yang jernih.',
  },
  {
    id: 2,
    nama: 'Pulau Rinca',
    lokasi: 'Taman Nasional Komodo',
    rating: '4.8',
    harga: 'IDR 750.000 / orang',
    // KHUSUS PULAU RINCA: Menggunakan ekstensi .jpeg
    img: '/Destinasi/Pulau Rinca/0.jpeg',
    gallery: [
      '/Destinasi/Pulau Rinca/1.jpeg',
      '/Destinasi/Pulau Rinca/2.jpeg',
      '/Destinasi/Pulau Rinca/3.jpeg',
      '/Destinasi/Pulau Rinca/4.jpeg',
    ],
    desc: 'Habitat asli komodo dengan jalur trekking savana yang menantang dan pemandangan perbukitan pesisir yang spektakuler dari puncak pulau.',
  },
  {
    id: 3,
    nama: 'Taka Makasar',
    lokasi: 'Taman Nasional Komodo',
    rating: '4.9',
    harga: 'IDR 600.000 / orang',
    // KHUSUS TAKA MAKASAR: Menggunakan ekstensi .jpeg
    img: '/Destinasi/Taka Makasar/0.jpeg',
    gallery: [
      '/Destinasi/Taka Makasar/1.jpeg',
      '/Destinasi/Taka Makasar/2.jpeg',
      '/Destinasi/Taka Makasar/3.jpg',
      '/Destinasi/Taka Makasar/4.jpg',
    ],
    desc: 'Pulau pasir timbul (sandbank) berukuran kecil yang dikelilingi oleh air laut berwarna pirus jernih dan terumbu karang dangkal yang sangat indah.',
  },
  {
    id: 4,
    nama: 'Pulau Padar',
    lokasi: 'Taman Nasional Komodo',
    rating: '5.0',
    harga: 'IDR 950.000 / orang',
    img: '/Destinasi/Pulau Padar/0.jpg',
    gallery: [
      '/Destinasi/Pulau Padar/1.jpg',
      '/Destinasi/Pulau Padar/2.jpg',
      '/Destinasi/Pulau Padar/3.jpg',
      '/Destinasi/Pulau Padar/4.jpg',
    ],
    desc: 'Ikon utama Labuan Bajo dengan pemandangan legendaris dari puncak bukit yang memperlihatkan tiga lekukan pantai berpasir putih, hitam, dan merah muda sekaligus.',
  },
  {
    id: 5,
    nama: 'Pink Beach',
    lokasi: 'Taman Nasional Komodo',
    rating: '4.9',
    harga: 'IDR 700.000 / orang',
    img: '/Destinasi/Pink Beach/0.jpg',
    gallery: [
      '/Destinasi/Pink Beach/1.jpg',
      '/Destinasi/Pink Beach/2.jpg',
      '/Destinasi/Pink Beach/3.jpg',
      '/Destinasi/Pink Beach/4.jpg',
    ],
    desc: 'Pantai eksotis dengan pasir berwarna merah muda alami yang berasal dari serpihan karang merah hancur, sangat cocok untuk bersantai dan fotografi fotografi bawah air.',
  },
  {
    id: 6,
    nama: 'Pulau Kalong',
    lokasi: 'Taman Nasional Komodo',
    rating: '4.8',
    harga: 'IDR 550.000 / orang',
    img: '/Destinasi/Pulau Kalong/0.jpeg',
    gallery: [
      '/Destinasi/Pulau Kalong/1.jpg',
      '/Destinasi/Pulau Kalong/2.jpg',
      '/Destinasi/Pulau Kalong/3.jpg',
      '/Destinasi/Pulau Kalong/4.jpg',
    ],
    desc: 'Tempat terbaik untuk menyaksikan fenomena ribuan kelelawar raksasa (kalong) yang terbang menghiasi langit senja saat matahari terbenam berlatar hutan bakau.',
  },
  {
    id: 7,
    nama: 'Pulau Kanawa',
    lokasi: 'Taman Nasional Komodo',
    rating: '4.7',
    harga: 'IDR 650.000 / orang',
    img: '/Destinasi/Pulau Kanawa/0.jpg',
    gallery: [
      '/Destinasi/Pulau Kanawa/1.jpg',
      '/Destinasi/Pulau Kanawa/2.jpg',
      '/Destinasi/Pulau Kanawa/3.jpg',
      '/Destinasi/Pulau Kanawa/4.jpg',
    ],
    desc: 'Gerbang surga bawah laut dengan dermaga kayu ikonik, tempat di mana kamu bisa melihat ikan-ikan hias, bintang laut, dan karang tepat dari atas permukaan air jernih.',
  },
  {
    id: 8,
    nama: 'Pulau Kelor',
    lokasi: 'Taman Nasional Komodo',
    rating: '4.8',
    harga: 'IDR 500.000 / orang',
    img: '/Destinasi/Pulau Kelor/0.jpg',
    gallery: [
      '/Destinasi/Pulau Kelor/1.jpg',
      '/Destinasi/Pulau Kelor/2.jpg',
      '/Destinasi/Pulau Kelor/3.jpg',
      '/Destinasi/Pulau Kelor/4.jpg',
    ],
    desc: 'Pulau tenang dengan perbukitan hijau terjal yang menawarkan panorama laut lepas Labuan Bajo dari puncaknya, cocok untuk pendakian singkat dan piknik pantai.',
  },
  {
    id: 9,
    nama: 'Batu Bolong',
    lokasi: 'Taman Nasional Komodo',
    rating: '4.9',
    harga: 'IDR 800.000 / orang',
    img: '/Destinasi/Batu Bolong/0.jpeg',
    gallery: [
      '/Destinasi/Batu Bolong/1.jpg',
      '/Destinasi/Batu Bolong/2.jpg',
      '/Destinasi/Batu Bolong/3.jpeg',
      '/Destinasi/Batu Bolong/4.jpg',
    ],
    desc: 'Situs menyelam kelas dunia berbentuk batu karang berlubang dengan keanekaragaman hayati laut yang luar biasa padat, dari ikan warna-warni hingga penyu laut.',
  },
  {
    id: 10,
    nama: 'Loh Liang',
    lokasi: 'Taman Nasional Komodo',
    rating: '4.8',
    harga: 'IDR 750.000 / orang',
    img: '/Destinasi/Loh Liang/0.jpeg',
    gallery: [
      '/Destinasi/Loh Liang/1.jpg',
      '/Destinasi/Loh Liang/2.jpg',
      '/Destinasi/Loh Liang/3.jpg',
      '/Destinasi/Loh Liang/4.jpg',
    ],
    desc: 'Pintu masuk utama wisata di Pulau Komodo dan pusat observasi terbesar satwa komodo liar dengan berbagai rute trekking yang dipandu oleh ranger berpengalaman.',
  },
];