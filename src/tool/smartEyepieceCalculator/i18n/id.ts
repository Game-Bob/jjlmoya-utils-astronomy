import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EyepieceCalculatorLocaleContent } from '../entry';

const title = 'Kalkulator Eyepiece & Simulator Visual';
const description = 'Hitung perbesaran, sudut pandang nyata (TFOV), dan exit pupil untuk setiap eyepiece dengan teleskop Anda. Termasuk simulator visual interaktif.';

const ui = {
  toolTitle: 'Kalkulator Eyepiece Pintar',
  telescopeTitle: 'Teleskop Anda',
  apertureLabel: 'Apertur (mm)',
  focalLabel: 'Panjang Fokus (mm)',
  presetsLabel: 'Model Populer',
  presetsPlaceholder: 'Pilih teleskop...',
  addEyepieceBtn: '+ Tambah Eyepiece',
  eyepiecesTitle: 'Eyepiece Anda',
  eyepieceFocal: 'Fokus (mm)',
  eyepieceAfov: 'Bidang Semu (°)',
  removeEyepiece: 'Hapus',
  magLabel: 'Perbesaran',
  tfovLabel: 'Bidang Nyata',
  pupilLabel: 'Exit Pupil',
  simulatorTitle: 'Simulator Bidang Pandang',
  targetLabel: 'Apa yang ingin Anda lihat?',
  targetMoon: 'Bulan',
  targetSaturn: 'Saturnus',
  targetPleiades: 'Gugus Pleiades',
  targetAndromeda: 'Galaksi Andromeda',
  targetM13: 'Gugus M13',
  statusDangerHighMag: 'Membuang uang: Anda memaksa teleskop melampaui batas fisiknya.',
  statusDangerPupil: 'Cahaya terbuang: Exit pupil melebihi 7mm. Mata Anda tidak dapat memproses cahaya sebanyak itu.',
  statusWarningHighMag: 'Hati-hati: Untuk perbesaran ini, Anda memerlukan langit yang sangat stabil (seeing bagus).',
  statusWarningLowMag: 'Perbesaran rendah: Anda berada di bawah batas minimum yang disarankan. Anda mungkin melihat bayangan cermin sekunder atau kehilangan kontras.',
  statusPerfectDeepSky: 'Kombinasi sempurna! Ideal untuk objek luas dan Deep Sky (gugus, nebula).',
  statusPerfectPlanetary: 'Kombinasi sempurna! Ideal untuk melihat detail planet (cincin Saturnus, pita Jupiter).',
  statusPerfectGeneral: 'Kombinasi serba guna yang luar biasa! Ideal untuk pengamatan umum semua jenis objek.',
  ctaText: 'Berdasarkan peralatan Anda saat ini, kami menyarankan penggunaan eyepiece yang memberikan perbesaran antara {min}x dan {max}x.',
  compareText: 'Bandingkan Eyepiece',
  apertureHelp: 'Diameter tabung, biasanya tertera pada stiker asli atau kotak.',
  focalHelp: 'Panjang fokus teleskop.',
  afovHelp: 'Bidang pandang semu eyepiece. Plössl biasanya 52°, sudut lebar 68° atau lebih.',
};

const faq: EyepieceCalculatorLocaleContent['faq'] = [
  {
    question: 'Bagaimana cara menghitung perbesaran teleskop?',
    answer: 'Rumusnya sederhana: bagi panjang fokus teleskop dengan panjang fokus eyepiece. Misalnya, teleskop 1000mm dengan eyepiece 10mm akan memberi Anda perbesaran 100x.',
  },
  {
    question: 'Apa itu exit pupil dan mengapa itu penting?',
    answer: 'Ini adalah diameter berkas cahaya yang keluar dari eyepiece dan masuk ke mata Anda. Dihitung dengan membagi apertur teleskop dengan perbesaran. Jika lebih dari 7mm, mata Anda tidak dapat menangkap semua cahaya, sehingga menyia-nyiakan kekuatan teleskop Anda.',
  },
  {
    question: 'Bagaimana cara mengetahui bidang pandang nyata eyepiece saya?',
    answer: 'Bidang Pandang Nyata (TFOV) dihitung dengan membagi bidang pandang semu eyepiece (AFOV) dengan perbesaran. Ini memberi tahu Anda berapa derajat langit yang sebenarnya Anda lihat.',
  },
];

const howTo: EyepieceCalculatorLocaleContent['howTo'] = [
  { name: '1. Masukkan data teleskop', text: 'Ketik apertur dan panjang fokus tabung Anda atau pilih model populer dari daftar.' },
  { name: '2. Tambahkan eyepiece Anda', text: 'Masukkan fokus dan bidang semu eyepiece Anda untuk membandingkan performanya.' },
  { name: '3. Simulasikan tampilan', text: 'Pilih objek (Bulan, Saturnus, dll.) dan klik eyepiece Anda untuk melihat perubahan gambar dan apakah Anda berada dalam batas optik.' },
];

const seo: EyepieceCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Faktor kunci dalam memilih eyepiece ideal Anda',
    items: [
      'Perbesaran Maksimum Nyata: 2x apertur dalam mm (tetapi dibatasi oleh kondisi langit hingga 200-250x).',
      'Perbesaran Minimum Berguna: Apertur dibagi 7 (batas pupil manusia).',
      'Rentang Optimal: Antara 0,5mm dan 7mm exit pupil.',
    ],
  },
  { type: 'title', text: 'Cara Memilih Eyepiece untuk Teleskop Anda: Panduan Praktis', level: 2 },
  {
    type: 'paragraph',
    html: 'Jangan membeli eyepiece hanya berdasarkan intuisi. Kunci pengamatan yang baik terletak pada keseimbangan antara resolusi teleskop dan kapasitas biologis mata Anda. Eyepiece yang salah pilih dapat membuat teleskop terbaik sekalipun terlihat buram atau terlalu gelap.',
  },
  { type: 'title', text: '1. Menghitung Perbesaran (M)', level: 3 },
  {
    type: 'paragraph',
    html: 'Rumusnya sederhana: bagi fokus teleskop dengan fokus eyepiece. <br/><strong>Rumus:</strong> Fokus Teleskop / Fokus Eyepiece = Perbesaran. <br/>Contoh: Teleskop 1000mm dengan eyepiece 10mm memberikan perbesaran 100x.',
  },
  { type: 'title', text: '2. Mitos Perbesaran Maksimum', level: 3 },
  {
    type: 'paragraph',
    html: 'Batas sebenarnya bukan ditentukan oleh eyepiece, melainkan oleh apertur (diameter) tabung Anda. <br/>- <strong>Batas teoretis:</strong> 2 × Apertur dalam mm. <br/>- <strong>Batas nyata (Seeing rata-rata):</strong> Anda jarang bisa melebihi 200x - 250x karena turbulensi atmosfer, apa pun teleskopnya. Memaksa lebih hanya akan memberikan noda buram yang diperbesar.',
  },
  { type: 'title', text: '3. Exit Pupil: Faktor Kecerahan', level: 3 },
  {
    type: 'paragraph',
    html: 'Exit pupil adalah silinder cahaya yang keluar dari eyepiece menuju mata Anda. <br/>- <strong>Jika lebih besar dari 7mm:</strong> Mata Anda tidak dapat terbuka selebar itu; Anda kehilangan cahaya dan membuang uang. <br/>- <strong>Jika lebih kecil dari 0,5mm:</strong> Gambar akan sangat gelap sehingga Anda nyaris tidak melihat detail dan mulai melihat "floaters" di mata Anda sendiri.',
  },
  {
    type: 'table',
    headers: ['Objek untuk Diamati', 'Perbesaran Disarankan', 'Pupil Ideal', 'Pengalaman Visual'],
    rows: [
      ['Galaksi dan Nebula', 'Rendah (25x - 50x)', '5mm - 7mm', 'Gambar cerah, bidang pandang maksimal.'],
      ['Gugus Bintang', 'Sedang (80x - 120x)', '2mm', 'Bintang titik dan latar langit gelap.'],
      ['Planet dan Bulan', 'Tinggi (150x atau lebih)', '0,7mm - 1mm', 'Detail maksimal, gambar lebih kecil dan redup.'],
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Penggunaan Visual atau Astrofotografi?',
    icon: 'mdi:camera-off',
    badge: 'Catatan Teknis',
    html: 'Penting untuk memperjelas bahwa perhitungan ini eksklusif untuk <strong>pengamatan visual</strong>. Banyak pemula mencoba menerapkan perbesaran ini pada kamera astro dan merasa frustrasi; dalam fotografi, perhitungan bergantung pada ukuran piksel dan resolusi per detik busur, bukan pada eyepiece.',
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Pengaruh Stabilitas Atmosfer (Seeing)',
    icon: 'mdi:weather-windy',
    badge: 'Tips Pengamatan',
    html: 'Bahkan dengan eyepiece terbaik, malam di mana bintang-bintang berkelip sangat kuat tidak cocok untuk perbesaran tinggi. Hal ini disebabkan oleh turbulensi atmosfer (seeing) yang membiaskan cahaya. Saat mengamati planet, disarankan untuk mulai dengan perbesaran rendah dan perhatikan stabilitas gambar; jika gambar tampak seperti di bawah air, kurangi perbesaran untuk melihat lebih banyak detail. Di sebagian besar wilayah perkotaan, 150x atau 200x adalah batas praktis.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
};

export const content: EyepieceCalculatorLocaleContent = {
  slug: 'kalkulator-eyepiece',
  title,
  description,
  ui,
  faq,
  howTo,
  seo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
