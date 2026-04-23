import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StarExposureCalculatorUI, StarExposureCalculatorLocaleContent } from '../index';

const slug = 'kalkulator-aturan-500';
const title = 'Kalkulator Aturan 500 dan NPF untuk Astrofotografi';
const description = 'Hitung waktu eksposur maksimum untuk astrofotografi tanpa jejak bintang. Aturan klasik 500 dan model NPF presisi tinggi untuk sensor modern.';

const ui: StarExposureCalculatorUI = {
  toolTitle: 'Kalkulator Aturan 500',
  modeLabel: 'Mode',
  classicMode: 'Klasik (500)',
  npfMode: 'Presisi (NPF)',
  sensorLabel: 'Sensor (Crop Factor)',
  focalLabel: 'Panjang Fokus (mm)',
  apertureLabel: 'Apertur (f/stop)',
  megapixelsLabel: 'Megapiksel (MP)',
  declinationLabel: 'Deklinasi Surgawi',
  equatorLabel: 'Ekuator',
  poleLabel: 'Kutub',
  secondsUnit: 'detik',
  resultText: 'Waktu maksimum untuk bintang titik.',
  simLabel: 'Simulasi Visual (Zoom 200%)',
  simRangeLabel: 'Simulasikan kelebihan waktu',
  pointStars: 'Bintang sebagai titik',
  trailStars: 'Jejak bintang terlihat',
};

const faq: StarExposureCalculatorLocaleContent['faq'] = [
  {
    question: 'Apa yang terjadi jika saya melebihi waktu yang dihitung?',
    answer: 'Jika Anda melebihi waktu maksimum, bintang akan mulai memanjang alih-alih menjadi titik yang tajam. Jika eksposur sangat lama, Anda akan mendapatkan jejak bintang (star trails), teknik artistik yang valid tetapi membutuhkan waktu yang jauh lebih lama agar terlihat estetis.',
  },
  {
    question: 'Kapan saya harus menggunakan NPF alih-alih Aturan 500?',
    answer: 'Model NPF lebih akurat dan direkomendasikan untuk kamera dengan sensor beresolusi tinggi (24MP atau lebih). Dengan Aturan klasik 500, Anda mungkin mendapatkan jejak yang tidak terlihat pada cetakan 4x6 tetapi terlihat saat mencetak besar atau dilihat di monitor 4K. Jika tujuan Anda adalah ketajaman maksimum, gunakan NPF.',
  },
  {
    question: 'Bagaimana cara menemukan deklinasi objek yang ingin saya foto?',
    answer: 'Anda dapat menggunakan aplikasi seperti Stellarium, SkySafari, atau memeriksa peta bintang. Sebagai aturan umum: semakin dekat objek ke kutub langit (Dec 90°), semakin banyak waktu eksposur yang dapat Anda gunakan.',
  },
  {
    question: 'Apakah kalkulator ini berfungsi dengan pelacak bintang (star tracker)?',
    answer: 'Tidak untuk langit itu sendiri, karena pelacak mengompensasi rotasi. Namun, ini sangat penting untuk menghitung bidikan latar depan di mana pelacak tidak membantu, atau untuk memverifikasi apakah motor gagal saat Anda melihat jejak yang tidak terduga.',
  },
];

const howTo: StarExposureCalculatorLocaleContent['howTo'] = [
  { name: '1. Pilih mode perhitungan', text: 'Pilih Klasik (Aturan 500) untuk estimasi cepat atau NPF jika Anda memiliki sensor beresolusi tinggi dan mencari ketajaman maksimum.' },
  { name: '2. Konfigurasikan peralatan Anda', text: 'Masukkan panjang fokus lensa Anda dan pilih faktor crop kamera Anda.' },
  { name: '3. Sesuaikan deklinasi', text: 'Jika memotret di dekat kutub langit, tingkatkan deklinasi untuk memungkinkan eksposur yang lebih lama tanpa jejak.' },
  { name: '4. Simulasikan kelebihan waktu', text: 'Gunakan slider simulasi untuk memvisualisasikan bagaimana bintang akan terlihat jika Anda melebihi waktu yang dihitung.' },
];

const seo: StarExposureCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Poin Utama Aturan 500 dan NPF',
    items: [
      'Aturan 500 adalah perkiraan yang valid untuk sensor beresolusi rendah dan tampilan format kecil.',
      'Model NPF lebih akurat untuk sensor modern dengan kepadatan piksel tinggi.',
      'Deklinasi surgawi memungkinkan waktu eksposur lebih lama di dekat kutub (Dec 90°).',
      'Faktor crop sensor Anda melipatgandakan panjang fokus efektif dan mengurangi waktu maksimum.',
    ],
  },
  { type: 'title', text: 'Menguasai Astrofotografi: Aturan 500 dan Model NPF', level: 2 },
  {
    type: 'paragraph',
    html: 'Menangkap luasnya langit malam adalah salah satu tantangan paling memuaskan bagi fotografer mana pun. Namun, hambatan pertama adalah rotasi Bumi. Jika kita membiarkan rana terbuka terlalu lama, titik-titik cahaya yang sempurna itu menjadi jejak yang tidak sedap dipandang. Untuk mendapatkan bintang yang tajam seperti titik, kita perlu menghitung <strong>waktu eksposur maksimum</strong> menggunakan Aturan 500 atau Model NPF.',
  },
  { type: 'title', text: 'Apa itu Aturan 500?', level: 2 },
  {
    type: 'paragraph',
    html: '<strong>Aturan 500</strong> adalah formula empiris sederhana yang telah menjadi standar dalam astrofotografi lanskap selama beberapa dekade. Formulanya adalah: <code>Waktu = 500 / (Panjang Fokus × Faktor Crop)</code>. Ini cepat, dapat dihitung di luar kepala, dan cukup akurat untuk sensor beresolusi rendah dan tampilan format kecil.',
  },
  { type: 'title', text: 'Faktor Crop dan Dampaknya', level: 2 },
  {
    type: 'paragraph',
    html: 'Banyak pemula lupa bahwa Aturan 500 didasarkan pada standar 35mm (Full Frame). Jika kamera Anda memiliki sensor yang lebih kecil, bidang pandang lebih sempit dan pergerakan bintang diperbesar. Lensa 14mm pada APS-C (crop 1,5x) berperilaku seperti setara 21mm, mengurangi waktu maksimum dari 35,7 detik menjadi hanya 23,8 detik.',
  },
  {
    type: 'table',
    headers: ['Sensor', 'Crop', '14mm', '24mm', '50mm', '85mm'],
    rows: [
      ['Full Frame', 'x1.0', '35.7s', '20.8s', '10.0s', '5.9s'],
      ['APS-C Nikon/Sony', 'x1.5', '23.8s', '13.9s', '6.7s', '3.9s'],
      ['APS-C Canon', 'x1.6', '22.3s', '13.0s', '6.3s', '3.7s'],
      ['Micro 4/3', 'x2.0', '17.9s', '10.4s', '5.0s', '2.9s'],
    ],
  },
  { type: 'title', text: 'Model NPF: Presisi untuk Sensor Modern', level: 2 },
  {
    type: 'paragraph',
    html: 'Aturan 500 lahir di era film. Saat ini, dengan sensor 24-60MP, piksel sangat kecil sehingga jejak dirasakan jauh lebih awal. <strong>Model NPF</strong>, yang dikembangkan oleh Masyarakat Astronomi Prancis, menambahkan bukaan dan kepadatan piksel ke dalam perhitungan: <code>t = (35×f + 30×p) / F</code>, di mana f adalah bukaan, p adalah pitch piksel dan F adalah panjang fokus.',
  },
  {
    type: 'tip',
    title: 'Deklinasi: Rahasia Fotografer Tingkat Lanjut',
    html: 'Bintang-bintang di dekat <strong>kutub langit</strong> (Polaris di belahan bumi utara) menelusuri lingkaran yang sangat kecil di langit. Ini berarti mereka bergerak sangat lambat melintasi sensor Anda, memungkinkan eksposur yang jauh lebih lama. Jika memotret area di sekitar Polaris, Anda dapat menggunakan dua atau tiga kali waktu yang dihitung tanpa jejak yang terlihat. Deklinasi memberi tahu Anda seberapa dekat target Anda dengan kutub langit.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Aturan 500 - 14mm FF', value: '35.7s', icon: 'mdi:timer' },
      { label: 'NPF - 14mm f/2.8 24MP', value: '~12s', icon: 'mdi:timer-sand' },
      { label: 'Koreksi Dec 60°', value: 'x2.0', icon: 'mdi:compass' },
      { label: 'Koreksi Dec 80°', value: 'x5.8', icon: 'mdi:compass' },
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

export const content: StarExposureCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
