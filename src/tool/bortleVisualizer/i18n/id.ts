import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BortleVisualizerUI, BortleVisualizerLocaleContent } from '../index';

const slug = 'simulator-langit-gelap';
const title = 'Simulator Langit Gelap (Skala Bortle)';
const description = 'Visualisasikan secara interaktif 9 level Skala Bortle dan temukan bagaimana polusi cahaya menghapus keindahan langit malam berbintang.';

const ui: BortleVisualizerUI = {
  toolTitle: 'Simulator Langit Gelap',
  sliderLabel: 'Geser untuk menyesuaikan tingkat polusi cahaya',
  classLabel: 'Kelas Bortle',
  nelmLabel: 'NELM',
  sqmLabel: 'SQM',
  classPrefix: 'KELAS',
  bortleData: {
    1: { title: 'Langit Gelap Sempurna', description: 'Surga bagi astronom. Galaksi Bima Sakti mampu membayangkan bayangan. Cahaya zodiak terlihat jelas dan berwarna. M33 terlihat dengan mata telanjang.', nelm: 8.0, sqm: '21.99 - 22.0', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.0 },
    2: { title: 'Benar Benar Gelap', description: 'Lokasi yang sangat gelap. Bima Sakti terlihat sangat terstruktur. Awan hanya terlihat sebagai "lubang hitam" di langit.', nelm: 7.5, sqm: '21.89 - 21.99', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.1 },
    3: { title: 'Langit Pedesaan', description: 'Struktur Bima Sakti yang kompleks. Sedikit polusi cahaya di ufuk. Awan terlihat terang di dekat ufuk tapi gelap di atas kepala.', nelm: 7.0, sqm: '21.69 - 21.89', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.2 },
    4: { title: 'Pedesaan/Pinggiran Kota', description: 'Bima Sakti mulai kehilangan detail tapi tetap terlihat. Kubah cahaya di ufuk. Awan diterangi dari bawah.', nelm: 6.5, sqm: '20.49 - 21.69', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.35 },
    5: { title: 'Langit Pinggiran Kota', description: 'Bima Sakti terlihat sangat redup atau tidak terlihat di dekat ufuk. Cahaya zodiak jarang terlihat. Langit tampak keabu-abuan.', nelm: 6.0, sqm: '19.50 - 20.49', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.5 },
    6: { title: 'Pinggiran Kota Terang', description: 'Bima Sakti tidak terlihat. Langit berwarna abu-abu terang. Awan sangat terang. M31 nyaris tidak terlihat.', nelm: 5.5, sqm: '18.94 - 19.50', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.65 },
    7: { title: 'Pinggiran Kota/Perkotaan', description: 'Langit berwarna abu-abu keputihan. Sumber cahaya kuat dari segala arah. Hanya bintang paling terang yang terlihat.', nelm: 5.0, sqm: '18.38 - 18.94', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.8 },
    8: { title: 'Langit Perkotaan', description: 'Langit berwarna abu-abu keputihan atau oranye. Judul surat kabar bisa dibaca. Hanya rasi bintang utama yang terlihat.', nelm: 4.5, sqm: '< 18.38', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.9 },
    9: { title: 'Pusat Kota', description: 'Langit seterang saat senja. Bulan terlihat tapi rasi bintang tidak. Hanya planet dan Bulan yang terlihat.', nelm: 4.0, sqm: '< 18.00', starsVisible: false, milkyWayVisible: false, cloudsLit: true, skyBrightness: 1.0 },
  },
};

const faq: BortleVisualizerLocaleContent['faq'] = [
  {
    question: 'Apa itu Skala Bortle?',
    answer: 'Ini adalah skala numerik 9 poin yang mengukur kecerahan langit malam di lokasi tertentu. Skala ini dibuat oleh astronom amatir John E. Bortle pada tahun 2001 dan diterbitkan di Sky & Telescope. Level 1 mewakili langit tergelap yang mungkin (gurun terpencil) dan Level 9 yang paling terpolusi cahaya (pusat kota).',
  },
  {
    question: 'Berapa level Bortle minimum untuk melihat Bima Sakti?',
    answer: 'Bima Sakti mulai terlihat jelas dari Bortle 4 (zona pedesaan/pinggiran kota). Pada level 1 dan 2, Bima Sakti terlihat spektakuler dengan detail struktur yang bahkan mampu menghasilkan bayangan redup. Dari Bortle 6 ke atas, Bima Sakti praktis tidak terlihat oleh mata telanjang.',
  },
  {
    question: 'Apa arti NELM dan SQM?',
    answer: 'NELM (Naked Eye Limiting Magnitude) adalah magnitudo bintang paling redup yang terlihat oleh mata telanjang dalam kondisi tersebut. SQM (Sky Quality Meter) mengukur kecerahan langit dalam magnitudo per detik busur persegi, yang merupakan standar ilmiah objektif.',
  },
  {
    question: 'Bagaimana cara menemukan langit yang lebih gelap di dekat saya?',
    answer: 'Gunakan peta polusi cahaya seperti lightpollutionmap.info untuk menemukan zona Bortle 3 atau lebih gelap dalam beberapa jam berkendara. Taman nasional, area pegunungan tinggi, dan cagar langit gelap yang ditunjuk menawarkan kondisi terbaik.',
  },
];

const howTo: BortleVisualizerLocaleContent['howTo'] = [
  { name: '1. Sesuaikan level Bortle', text: 'Geser slider untuk mensimulasikan bagaimana polusi cahaya meningkat dari level 1 (gurun) ke level 9 (pusat kota).' },
  { name: '2. Amati efek visualnya', text: 'Perhatikan bagaimana bintang-bintang redup menghilang, galaksi Bima Sakti memudar, dan langit berubah warna menjadi oranye atau abu-abu di setiap level.' },
  { name: '3. Identifikasi level Anda saat ini', text: 'Bandingkan apa yang Anda lihat dari tempat pengamatan biasa dengan simulasi kami untuk menentukan level Bortle lokal Anda.' },
];

const seo: BortleVisualizerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Poin Kunci Skala Bortle',
    items: [
      'Bortle 1-2: Referensi langit gelap, Bima Sakti menghasilkan bayangan, NELM > 7.5.',
      'Bortle 3-4: Langit pedesaan optimal, Bima Sakti terlihat detail tapi ufuk tercemar cahaya.',
      'Bortle 5-6: Pinggiran kota, Bima Sakti redup atau tidak terlihat, baik untuk planet dan bulan.',
      'Bortle 7-9: Langit perkotaan, hanya objek terang yang terlihat oleh mata telanjang.',
    ],
  },
  { type: 'title', text: 'Skala Bortle: Mengukur Kegelapan Langit', level: 2 },
  {
    type: 'paragraph',
    html: '<strong>Skala Bortle</strong> adalah sistem standar internasional yang digunakan oleh astronom amatir di seluruh dunia untuk mengukur kualitas langit malam. Dibuat oleh John E. Bortle, pengamat veteran komet dan objek langit dalam dari New York, skala ini diterbitkan pada tahun 2001 di majalah Sky & Telescope dengan tujuan menyediakan skala objektif dan dapat direproduksi untuk mengomunikasikan kondisi pengamatan.',
  },
  {
    type: 'paragraph',
    html: 'Skala ini berkisar dari <strong>level 1</strong> (langit tergelap yang mungkin, hanya ditemukan di gurun terpencil dan pegunungan tinggi jauh dari peradaban apa pun) hingga <strong>level 9</strong> (pusat kota besar, di mana langit bercahaya dengan kecerahan oranye atau keputihan permanen dan hanya Bulan serta planet paling terang yang terlihat). Setiap level memiliki deskriptor khusus yang memungkinkan identifikasi tanpa instrumen.',
  },
  { type: 'title', text: 'Polusi Cahaya: Krisis Global yang Sunyi', level: 2 },
  {
    type: 'paragraph',
    html: 'Pertumbuhan polusi cahaya adalah salah satu masalah lingkungan yang paling jarang dibahas namun paling meluas. Menurut studi terbaru, lebih dari <strong>80% populasi dunia</strong> hidup di bawah langit yang terpolusi cahaya, dan di Eropa serta Amerika Utara persentasenya melebihi 99%. Konsekuensinya melampaui astronomi: cahaya buatan di malam hari mengganggu ritme sirkadian manusia dan hewan, membingungkan burung yang bermigrasi, memengaruhi reproduksi penyu, dan menekan produksi melatonin pada mamalia.',
  },
  {
    type: 'table',
    headers: ['Kelas Bortle', 'NELM', 'SQM (mag/arcsec²)', 'Bima Sakti', 'Fitur Utama'],
    rows: [
      ['1 - Sempurna', '8.0', '21.99 - 22.0', 'Membayangkan bayangan', 'M33 terlihat mata telanjang'],
      ['2 - Gelap Tipikal', '7.5', '21.89 - 21.99', 'Sangat terstruktur', 'Awan = lubang hitam'],
      ['3 - Pedesaan', '7.0', '21.69 - 21.89', 'Kompleks', 'Sedikit pendaran ufuk'],
      ['4 - Pedesaan/Pinggir', '6.5', '20.49 - 21.69', 'Terlihat', 'Kubah cahaya di ufuk'],
      ['5 - Pinggiran Kota', '6.0', '19.50 - 20.49', 'Redup', 'Langit keabu-abuan'],
      ['6 - Pinggir Terang', '5.5', '18.94 - 19.50', 'Tidak terlihat', 'M31 nyaris tak terlihat'],
      ['7 - Pinggir/Kota', '5.0', '18.38 - 18.94', 'Absen', 'Langit abu-abu terang'],
      ['8 - Kota', '4.5', '< 18.38', 'Absen', 'Hanya rasi bintang utama'],
      ['9 - Pusat Kota', '4.0', '< 18.00', 'Absen', 'Hanya Bulan dan planet'],
    ],
  },
  {
    type: 'tip',
    title: 'Pengukuran Objektif: Sky Quality Meter',
    html: 'Untuk pengukuran yang presisi dan dapat direproduksi, astronom menggunakan <strong>Sky Quality Meter (SQM)</strong>, perangkat yang mengukur luminans langit dalam magnitudo per detik busur persegi (mag/arcsec²). SQM 22.0 setara dengan langit Bortle 1 yang sempurna, sementara nilai 18.0 menunjukkan langit Bortle 8-9. Anda dapat memeriksa pengukuran real-time di jaringan Globe at Night.',
  },
  { type: 'title', text: 'Menemukan Tempat Langit Gelap di Dekat Anda', level: 2 },
  {
    type: 'paragraph',
    html: 'Meskipun polusi cahaya meluas, tempat perlindungan langit gelap masih ada. Taman nasional, cagar langit gelap yang ditunjuk, dan area dataran tinggi terpencil menawarkan kondisi Bortle 2-4 yang dapat diakses dalam beberapa jam dari sebagian besar kota besar. IDA (International Dark-Sky Association) mengelola pendaftaran global tempat-tempat langit gelap bersertifikat, dari taman kecil hingga seluruh cagar pulau. Merencanakan perjalanan malam ke lokasi yang lebih gelap akan mengubah pengalaman astronomi Anda lebih dari sekadar peningkatan peralatan.',
  },
  {
    type: 'diagnostic',
    variant: 'success',
    title: 'Alat Perencanaan',
    icon: 'mdi:map-marker-star',
    badge: 'Tips Pro',
    html: 'Sebelum melakukan pengamatan, periksa peta polusi cahaya di lightpollutionmap.info untuk mengidentifikasi zona Bortle 3 atau lebih gelap dalam radius 1-2 jam. Gabungkan ini dengan prakiraan cuaca astronomi dari Clear Outside atau Meteoblue Astro untuk memilih malam yang sempurna.',
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


export const content: BortleVisualizerLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  bortleData: ui.bortleData,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
