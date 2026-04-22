import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeResolutionUI, TelescopeResolutionLocaleContent } from '../index';

const slug = 'kalkulator-resolusi-teleskop';
const title = 'Kalkulator Resolusi Teleskop (Batas Dawes)';
const description = 'Hitung daya urai teleskop Anda dengan Batas Dawes dan Kriteria Rayleigh. Temukan pembesaran maksimum yang berguna dan dampak visual atmosfer (seeing).';

const ui: TelescopeResolutionUI = {
  toolTitle: 'Resolusi Teleskop',
  apertureLabel: 'Apertur Teleskop',
  unitLabel: 'Unit',
  mmUnit: 'Milimeter (mm)',
  inUnit: 'Inci (in)',
  presetsLabel: 'Model Umum',
  presetsPlaceholder: '-- Pilih Preset --',
  seeingLabel: 'Kualitas Langit (Seeing)',
  dawesLabel: 'Resolusi Berguna (Dawes)',
  arcsecUnit: 'detik busur',
  rayleighLabel: 'Batas Rayleigh',
  maxMagLabel: 'Pembesaran Maks. Berguna',
  seeingAlertPrefix: 'Atmosfer terbatas: Seeing hari ini',
  seeingAlertSuffix: 'akan menghalangi Anda melihat potensi penuh teleskop Anda',
  simLabel: 'Simulasi: Bintang Ganda',
  simExplanation: 'Dawes memisahkan bintang titik; Rayleigh mendefinisikan detail planet.',
  presets: [
    { value: '70', label: '70mm (Refraktor Pemula)' },
    { value: '114', label: '114mm (4.5") Newtonian' },
    { value: '150', label: '150mm (6") Dobsonian' },
    { value: '200', label: '200mm (8") Dobsonian' },
    { value: '254', label: '254mm (10") Dobsonian' },
    { value: '304', label: '304mm (12") Profesional' },
  ],
};

const faq: TelescopeResolutionLocaleContent['faq'] = [
  {
    question: 'Apa itu Batas Dawes?',
    answer: 'Batas Dawes adalah kriteria empiris untuk resolusi sudut teleskop, dihitung sebagai 116/D (di mana D adalah diameter dalam mm). Ini mewakili pemisahan minimum dalam detik busur antara dua bintang dengan magnitudo serupa yang dapat dibedakan oleh pengamat berpengalaman sebagai dua titik terpisah. Ini diusulkan oleh astronom Inggris William Dawes pada abad ke-19.',
  },
  {
    question: 'Apa perbedaan antara Dawes dan Rayleigh?',
    answer: 'Batas Dawes (116/D) bersifat empiris dan didasarkan pada penglihatan manusia untuk bintang ganda. Kriteria Rayleigh (138/D) bersifat fisik, didasarkan pada sifat gelombang cahaya. Rayleigh lebih ketat dan lebih baik diterapkan pada detail pada permukaan planet (pita Jupiter, kawah bulan). Dawes lebih berguna untuk memisahkan bintang biner.',
  },
  {
    question: 'Apa itu seeing dan bagaimana pengaruhnya terhadap saya?',
    answer: 'Seeing adalah ukuran turbulensi atmosfer yang membiaskan cahaya saat melewati udara. Pada malam rata-rata, seeing membatasi resolusi hingga 1-2 detik busur, yang berarti teleskop yang lebih besar dari ~115mm tidak dapat melampaui batas atmosfer ini. Seeing yang sangat baik (0,5") jarang terjadi dan terjadi di lokasi dataran tinggi dengan aktivitas termal yang sedikit.',
  },
  {
    question: 'Berapa pembesaran maksimum yang berguna dari sebuah teleskop?',
    answer: 'Aturan emasnya adalah 2x apertur dalam mm (atau 50x per inci). Teleskop 150mm memiliki pembesaran maksimum yang berguna sebesar 300x. Melebihi batas ini membuat gambar lebih besar tetapi tanpa detail lebih lanjut, hanya menjadi lebih gelap dan lebih buram. Seeing sering membatasi nilai ini menjadi 100-150x pada malam rata-rata.',
  },
];

const howTo: TelescopeResolutionLocaleContent['howTo'] = [
  { name: '1. Masukkan apertur', text: 'Ketik diameter cermin utama atau lensa teleskop Anda. Anda dapat memilih preset dari model umum.' },
  { name: '2. Sesuaikan seeing', text: 'Gerakkan slider seeing untuk mensimulasikan turbulensi atmosfer pada malam pengamatan Anda.' },
  { name: '3. Interpretasikan hasil', text: 'Amati batas Dawes dan Rayleigh dalam detik busur. Semakin rendah nilainya, semakin tinggi resolusinya.' },
  { name: '4. Periksa apakah seeing membatasi Anda', text: 'Jika peringatan seeing muncul, atmosfer membatasi kinerja teleskop Anda malam itu.' },
];

const seo: TelescopeResolutionLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Poin Utama Resolusi Teleskopik',
    items: [
      'Batas Dawes (116/D mm) menentukan pemisahan minimum antara bintang ganda yang dapat diurai.',
      'Kriteria Rayleigh (138/D mm) mendefinisikan detail terkecil yang terlihat pada permukaan planet.',
      'Seeing atmosfer (tipikal 1-2") biasanya melampaui batas teoretis teleskop yang lebih besar dari 115mm.',
      'Pembesaran maksimum yang berguna adalah 2x apertur dalam mm; melebihinya hanya akan menggelapkan gambar.',
    ],
  },
  { type: 'title', text: 'Resolusi Astronomi: Panduan untuk Batas Dawes dan Rayleigh', level: 2 },
  {
    type: 'paragraph',
    html: 'Kekuatan teleskop tidak diukur dari seberapa besar ia dapat memperbesar gambar, tetapi dari seberapa banyak detail yang dapat dikalibrasi. Kemampuan ini, yang dikenal sebagai <strong>daya urai</strong>, hampir seluruhnya bergantung pada diameter apertur. Semakin besar cermin atau lensa utama, semakin kecil detail yang dapat dipisahkannya.',
  },
  {
    type: 'paragraph',
    html: 'Ada dua kriteria utama untuk mengukur resolusi ini. <strong>Batas Dawes</strong> (116/D detik busur) bersifat empiris, didefinisikan oleh astronom William Dawes berdasarkan pengamatan bintang ganda. <strong>Kriteria Rayleigh</strong> (138/D detik busur) bersifat teoretis, diturunkan dari fisika gelombang difraksi cahaya. Keduanya sepakat bahwa apertur adalah faktor penentu.',
  },
  { type: 'title', text: 'Seeing: Penghalang Atmosfer', level: 2 },
  {
    type: 'paragraph',
    html: 'Anda bisa memiliki teleskop terbesar di dunia, tetapi jika atmosfer tidak stabil, Anda tidak akan melihat detail halus. <strong>Seeing</strong> adalah ukuran turbulensi atmosfer. Pada malam rata-rata, atmosfer membatasi resolusi hingga sekitar 1-1,5 detik busur. Untuk teleskop yang lebih besar dari 115mm, seeing adalah hambatannya, bukan optiknya.',
  },
  {
    type: 'table',
    headers: ['Apertur', 'Dawes (")', 'Rayleigh (")', 'Pemb. Maks', 'Seeing yang Diperlukan'],
    rows: [
      ['70mm', '1.66"', '1.97"', '140x', '< 1.7"'],
      ['100mm', '1.16"', '1.38"', '200x', '< 1.2"'],
      ['150mm', '0.77"', '0.92"', '300x', '< 0.8"'],
      ['200mm', '0.58"', '0.69"', '400x', '< 0.6"'],
      ['300mm', '0.39"', '0.46"', '600x', '< 0.4"'],
      ['400mm', '0.29"', '0.35"', '800x', '< 0.3"'],
    ],
  },
  {
    type: 'tip',
    title: 'Aklimatisasi Termal: Rahasia Detail',
    html: 'Musuh terbesar resolusi bukanlah seeing eksternal, melainkan <strong>seeing lokal</strong> di dalam tabung teleskop. Udara hangat yang tersisa di dalam menciptakan arus konveksi yang merusak detail. Biarkan teleskop Anda menyesuaikan diri dengan suhu luar selama setidaknya 30-60 menit sebelum mengamati pada pembesaran tinggi.',
  },
  { type: 'title', text: 'Kolimasi: Penyelarasan yang Membuka Potensi', level: 2 },
  {
    type: 'paragraph',
    html: 'Teleskop yang dikolimasi dengan buruk (dengan cermin yang tidak sejajar) tidak akan pernah bekerja pada batas Dawes. <strong>Kolimasi</strong> adalah proses menyelaraskan cermin sekunder dan primer secara sempurna dengan focuser. Untuk teleskop pemantul (Newtonian, Dobsonian), kolimasi adalah tugas berkala yang penting. Gunakan "star test" untuk memeriksa.',
  },
  { type: 'title', text: 'Tips Praktis untuk Memaksimalkan Resolusi', level: 2 },
  {
    type: 'paragraph',
    html: 'Selalu tunggu instrumen mencapai kesetimbangan termal. Hindari mengamati di atas atap atau aspal. Pilih malam setelah front dingin berlalu untuk udara yang lebih stabil. Gunakan pembesaran tertinggi yang masih memberikan gambar yang stabil. Ingat <strong>adaptasi gelap</strong>: beri mata Anda waktu 20 menit untuk memaksimalkan sensitivitas terhadap detail planet.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Dawes 150mm', value: '0.77"', icon: 'mdi:flare' },
      { label: 'Dawes 300mm', value: '0.39"', icon: 'mdi:flare' },
      { label: 'Seeing Bagus', value: '0.5 - 1.0"', icon: 'mdi:weather-windy' },
      { label: 'Seeing Rata-Rata', value: '1.0 - 2.0"', icon: 'mdi:weather-cloudy' },
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

export const content: TelescopeResolutionLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliography: 'Referensi Bibliografi',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
