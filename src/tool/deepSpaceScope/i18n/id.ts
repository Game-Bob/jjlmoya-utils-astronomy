import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DeepSpaceScopeUI, DeepSpaceScopeLocaleContent } from '../index';

const slug = 'jangkauan-teleskop';
const title = 'Kalkulator Jangkauan Teleskop';
const description = 'Hitung magnitudo pembatas teleskop Anda dan temukan objek langit dalam mana yang terlihat dengan pelat peralatan Anda di bawah kondisi langit Anda.';

const ui: DeepSpaceScopeUI = {
  toolTitle: 'Jangkauan Teleskop',
  apertureLabel: 'Apertur (Bukaan)',
  bortleLabel: 'Langit (Bortle)',
  limitMagLabel: 'Magnitudo Pembatas',
  azimuthLabel: 'AZ',
  dragHint: 'Klik dan geser untuk menjelajahi kosmos (360°)',
  dragHintMobile: 'Geser untuk menjelajah 360°',
  planetLabel: 'Planet',
  starLabel: 'Bintang',
  deepSpaceLabel: 'Langit Dalam',
  magnitudeLabel: 'Magnitudo',
  coordinatesLabel: 'Koordinat',
  closeLabel: 'Tutup',
  altitudeLabel: 'Ketinggian',
  defaultObjDesc: 'Objek langit dalam yang mempesona. Magnitudo',
  bortleClassPrefix: 'Kelas',
  deepSpaceObjects: [
    { name: 'Venus', type: 'Planet', mag: -4.5, az: 270, alt: 30, icon: 'mdi:circle', color: '#fef08a', desc: 'Planet paling terang di langit malam. Terlihat di siang bolong.' },
    { name: 'Jupiter', type: 'Planet', mag: -2.5, az: 180, alt: 40, icon: 'mdi:circle', color: '#fef9c3', desc: 'Raksasa tata surya. Empat bulan Galilea-nya dapat dilihat dengan teropong.' },
    { name: 'Saturnus', type: 'Planet', mag: 0.8, az: 220, alt: 35, icon: 'mdi:circle', color: '#fefce8', desc: 'Cincinnya terlihat dengan teleskop 60mm pada perbesaran 50x.' },
    { name: 'Mars', type: 'Planet', mag: 1.5, az: 150, alt: 25, icon: 'mdi:circle', color: '#f87171', desc: 'Planet Merah. Bervariasi dari magnitudo -2,9 saat oposisi hingga +1,8 saat konjungsi.' },
    { name: 'Sirius', type: 'Star', mag: -1.46, az: 145, alt: 50, icon: 'mdi:star-four-points', color: '#bfdbfe', desc: 'Bintang paling terang di langit malam. Berjarak hanya 8,6 tahun cahaya.' },
    { name: 'Canopus', type: 'Star', mag: -0.74, az: 200, alt: 20, icon: 'mdi:star-four-points', color: '#fef9c3', desc: 'Bintang paling terang kedua, digunakan untuk navigasi di Belahan Bumi Selatan.' },
    { name: 'Arcturus', type: 'Star', mag: -0.05, az: 60, alt: 55, icon: 'mdi:star-four-points', color: '#fdba74', desc: 'Raksasa oranye di rasi bintang Boötes. Berjarak 36 tahun cahaya dari Bumi.' },
    { name: 'Vega', type: 'Star', mag: 0.03, az: 40, alt: 70, icon: 'mdi:star-four-points', color: '#dbeafe', desc: 'Titik sudut Segitiga Musim Panas. Bintang referensi untuk magnitudo 0.' },
    { name: 'M42 Orion', type: 'Nebula', mag: 4.0, az: 140, alt: 45, icon: 'mdi:creation', color: '#a5b4fc', desc: 'Nebula Orion Besar, berjarak 1344 tahun cahaya. Tempat lahir bagi bintang-bintang muda.' },
    { name: 'M45 Pleiades', type: 'Cluster', mag: 1.6, az: 100, alt: 60, icon: 'mdi:creation', color: '#93c5fd', desc: 'Tujuh Bersaudara. Pada jarak 444 tahun cahaya, gugus terbuka paling terkenal di langit.' },
    { name: 'M31 Andromeda', type: 'Galaxy', mag: 3.4, az: 30, alt: 50, icon: 'mdi:creation', color: '#d8b4fe', desc: 'Galaksi tetangga terbesar. Berjarak 2,5 juta tahun cahaya, terlihat dengan mata telanjang di langit gelap.' },
    { name: 'M13 Hercules', type: 'Cluster', mag: 5.8, az: 80, alt: 65, icon: 'mdi:creation', color: '#fde047', desc: 'Gugus Bola Besar di Hercules. Berisi 300.000 bintang pada jarak 25.100 tahun cahaya.' },
    { name: 'M57 Ring', type: 'Nebula', mag: 8.8, az: 50, alt: 58, icon: 'mdi:creation', color: '#67e8f9', desc: 'Nebula planet di Lyra. Cincin gas yang dihembuskan oleh katai putih.' },
    { name: 'M81 Bode', type: 'Galaxy', mag: 6.9, az: 340, alt: 55, icon: 'mdi:creation', color: '#c4b5fd', desc: 'Galaksi spiral di Ursa Major. Berinteraksi secara gravitasi dengan M82.' },
    { name: 'Pluto', type: 'Dwarf Planet', mag: 14.3, az: 195, alt: 22, icon: 'mdi:circle-small', color: '#cbd5e1', desc: 'Planet kerdil paling terkenal. Membutuhkan teleskop 250mm atau lebih besar dan langit gelap.' },
  ],
};

const faq: DeepSpaceScopeLocaleContent['faq'] = [
  {
    question: 'Apa itu magnitudo pembatas teleskop?',
    answer: 'Ini adalah magnitudo objek paling redup yang dapat dideteksi teleskop di bawah kondisi langit tertentu. Ini tergantung pada diameter apertur (apertur lebih besar = lebih banyak cahaya yang ditangkap) dan kualitas langit (Bortle). Mata manusia dalam kondisi optimal mencapai magnitudo 6,5; teleskop 200mm dapat mencapai magnitudo 13-14.',
  },
  {
    question: 'Bagaimana skala Bortle memengaruhi apa yang bisa saya lihat?',
    answer: 'Setiap level Bortle mengurangi sekitar 0,5 magnitudo dari apa yang bisa Anda lihat. Teleskop 200mm di bawah Bortle 2 dapat mencapai magnitudo 14,5, tetapi di bawah Bortle 7 apertur yang sama hanya akan mencapai magnitudo 11-12. Langit gelap melipatgandakan kemampuan instrumen apa pun.',
  },
  {
    question: 'Objek apa yang terlihat dari kota?',
    answer: 'Dari langit Bortle 7-8 (perkotaan), dengan teleskop 150mm Anda dapat melihat planet-planet terang dengan detail luar biasa, Bulan, gugus terbuka yang terang (M45, M44), gugus bola (M13), dan beberapa galaksi terang seperti M31 dan M81, meskipun tanpa banyak detail. Nebula redup membutuhkan langit yang lebih gelap atau filter khusus.',
  },
  {
    question: 'Berapa apertur yang saya butuhkan untuk melihat warna pada nebula?',
    answer: 'Mata manusia kehilangan sensitivitas warna pada cahaya rendah. Untuk melihat warna pada nebula emisi seperti M42, Anda membutuhkan setidaknya apertur 200-250mm dan langit Bortle 3-4. Dengan apertur yang lebih kecil, nebula tampak keabu-abuan, meskipun dengan astrofotografi bahkan teleskop kecil pun dapat menangkap warna-warna spektakuler.',
  },
];

const howTo: DeepSpaceScopeLocaleContent['howTo'] = [
  { name: '1. Atur apertur Anda', text: 'Geser slider apertur untuk mensimulasikan teleskop Anda. Rentangnya mulai dari 50mm (teropong) hingga 400mm (teleskop canggih).' },
  { name: '2. Sesuaikan kualitas langit', text: 'Atur level Bortle dari lokasi pengamatan biasa Anda untuk melihat magnitudo pembatas yang sebenarnya.' },
  { name: '3. Jelajahi peta bintang', text: 'Geser bidang untuk menjelajahi seluruh 360° langit dan temukan objek mana yang terlihat dengan peralatan Anda.' },
  { name: '4. Klik pada objek', text: 'Ketuk objek langit mana pun untuk melihat informasi detailnya: tipe, magnitudo, dan deskripsi.' },
];

const bibliography: DeepSpaceScopeLocaleContent['bibliography'] = [
  { name: 'Katalog Messier Lengkap', url: 'https://www.skyatnightmagazine.com/space-science/messier-catalogue' },
  { name: 'Stellarium Web - Peta Bintang Interaktif', url: 'https://stellarium-web.org/' },
];

const seo: DeepSpaceScopeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Poin Kunci Jangkauan Teleskopik',
    items: [
      'Apertur adalah faktor penentu: diameter yang lebih besar berarti lebih banyak cahaya dan magnitudo pembatas yang lebih tinggi.',
      'Langit gelap (Bortle rendah) dapat menambah 2-3 magnitudo dibandingkan dengan langit perkotaan.',
      'Teleskop 200mm mencapai mag 13-14 pada Bortle 3, dan hanya mag 11 pada Bortle 7.',
      'Planet terang dan Bulan tidak membutuhkan langit gelap - terlihat dari kota.',
    ],
  },
  { type: 'title', text: 'Fisika Pengamatan Astronomi: Apertur dan Magnitudo', level: 2 },
  {
    type: 'paragraph',
    html: 'Fungsi utama teleskop bukanlah untuk memperbesar gambar, melainkan untuk <strong>mengumpulkan cahaya</strong>. Mata manusia memiliki pupil yang melebar hingga sekitar 6-7mm dalam kegelapan total. Teleskop 200mm memiliki permukaan pengumpul seluas 31.416mm², lebih dari <strong>800 kali lebih besar</strong> daripada pupil manusia, memungkinkan Anda melihat objek ratusan kali lebih redup.',
  },
  {
    type: 'paragraph',
    html: 'Rumus untuk penguatan magnitudo adalah: <code>Keuntungan = 5 × log₁₀(Apertur_mm / 6)</code>. Untuk apertur 200mm: 5 × log₁₀(200/6) = 5 × 1,52 = 7,6 magnitudo tambahan di atas mata telanjang. Menambahkan 6,5 magnitudo yang terlihat oleh mata telanjang (di bawah langit gelap), kita mencapai magnitudo pembatas 14,1.',
  },
  { type: 'title', text: 'Efek Polusi Cahaya pada Jangkauan', level: 2 },
  {
    type: 'paragraph',
    html: 'Bahkan dengan teleskop terbesar di dunia, Anda tidak dapat melihat galaksi redup dari pusat kota. Kecerahan latar belakang langit "menghapus" kontras yang diperlukan. <strong>Skala Bortle</strong> mengukur efek ini: setiap level Bortle tambahan mengurangi sekitar 0,5 magnitudo dari jangkauan teleskop.',
  },
  {
    type: 'table',
    headers: ['Apertur', 'Bortle 2 (Gelap)', 'Bortle 4 (Pedesaan)', 'Bortle 6 (Pinggiran)', 'Bortle 8 (Kota)'],
    rows: [
      ['70mm', 'Mag 12.0', 'Mag 10.8', 'Mag 9.5', 'Mag 8.3'],
      ['100mm', 'Mag 12.8', 'Mag 11.6', 'Mag 10.3', 'Mag 9.1'],
      ['150mm', 'Mag 13.6', 'Mag 12.4', 'Mag 11.1', 'Mag 9.9'],
      ['200mm', 'Mag 14.2', 'Mag 13.0', 'Mag 11.7', 'Mag 10.5'],
      ['300mm', 'Mag 15.0', 'Mag 13.8', 'Mag 12.5', 'Mag 11.3'],
    ],
  },
  {
    type: 'tip',
    title: 'Katalog Messier: Daftar Objek Anda',
    html: 'Charles Messier menyusun katalog terkenal berisi 110 objek pada tahun 1781 untuk menghindari kekeliruan dengan komet. Sekarang, ini menjadi katalog referensi bagi pengamat visual. 110 objek Messier (M1-M110) mencakup nebula, gugus, dan galaksi, semuanya dapat diakses dengan teleskop di bawah 150mm dari langit Bortle 4-5.',
  },
  { type: 'title', text: 'Objek Unggulan menurut Tipe dan Kesulitan', level: 2 },
  {
    type: 'paragraph',
    html: 'Untuk pengamat pemula, <strong>planet</strong> adalah target yang paling memuaskan: mereka tidak memerlukan langit gelap dan menawarkan detail yang mengejutkan bahkan dengan teleskop kecil (cincin Saturnus pada 40x, pita Jupiter pada 80x, tudung kutub Mars). <strong>Nebula</strong> dan <strong>galaksi</strong> memerlukan apertur lebih besar dan langit yang lebih gelap, namun memberikan pemandangan dengan keindahan yang tiada tara.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Mata Manusia (7mm)', value: 'Mag 6.5', icon: 'mdi:eye' },
      { label: 'Refraktor 70mm', value: 'Mag 12', icon: 'mdi:telescope' },
      { label: 'Dobsonian 200mm', value: 'Mag 14+', icon: 'mdi:telescope' },
      { label: 'HST Ruang Angkasa', value: 'Mag 31', icon: 'mdi:satellite-variant' },
    ],
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

export const content: DeepSpaceScopeLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliography,
  bibliographyTitle: 'Referensi Bibliografi',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
