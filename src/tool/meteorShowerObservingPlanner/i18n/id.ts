import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'perencana-pengamatan-hujan-meteor';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Perencana Jendela Pengamatan Hujan Meteor',
  description: 'Rencanakan sesi pengamatan hujan meteor optimal dengan menghitung tingkat jam zenith efektif dan gangguan cahaya Bulan.',
  ui: {
    title: 'Perencana Hujan Meteor',
    subtitle: 'Hitung jendela pengamatan terbaik dan prakiraan tingkat meteor terlihat per jam',
    presetLabel: 'Pilih Hujan Meteor Utama',
    customZhrLabel: 'Tingkat Jam Zenith Kustom ZHR',
    latitudeLabel: 'Lintang Pengamat',
    bortleLabel: 'Kelas Skala Bortle Langit Gelap',
    moonPhaseLabel: 'Iluminasi Bulan',
    sessionHoursLabel: 'Jam Sesi Yang Direncanakan',
    toLabel: 'hingga',
    classLabel: 'Kelas',
    radiantTelemetryLabel: 'TELEMETRI RADIANT',
    belowHorizonLabel: 'Di bawah horison',
    altLabel: 'Alt',
    moonLabel: 'Bulan',
    hrUnit: '/ jam',
    presets: {
      perseids: 'Perseid (12 Agt)',
      geminids: 'Geminid (14 Des)',
      quadrantids: 'Quadrantid (4 Jan)',
      lyrids: 'Lyrid (22 Apr)',
      orionids: 'Orionid (21 Okt)',
      'eta-aquariids': 'Eta Aquariid (6 Mei)',
      leonids: 'Leonid (17 Nov)',
      custom: 'Hujan Meteor Kustom',
    },
    constellations: {
      Perseus: 'Perseus',
      Gemini: 'Gemini',
      Bootes: 'Bootes',
      Lyra: 'Lyra',
      Orion: 'Orion',
      Aquarius: 'Aquarius',
      Leo: 'Leo',
      Zenith: 'Zenith',
    },
    badgeLabels: {
      darkSky: 'Langit Gelap Sempurna',
      lightPollution: 'Polusi Cahaya Tinggi',
      favorableMoon: 'Bulan Menguntungkan',
      moonWashout: 'Risiko Silau Bulan',
      primeWindow: 'Jendela Aktivitas Puncak',
    },
    bortleDescriptions: {
      2: 'Langit gelap sempurna',
      5: 'Langit pinggiran kota',
      8: 'Polusi cahaya perkotaan',
    },
    moonPhaseNames: {
      new: 'Dampak Bulan minimal',
      quarter: 'Gangguan Bulan sedang',
      full: 'Silau Bulan parah',
    },
    resultsTitle: 'Analisis Sesi Pengamatan',
    bestWindowLabel: 'Jendela Pengamatan Terbaik',
    maxRateLabel: 'Tingkat Maksimum Terlihat',
    skyQualityLabel: 'Indeks Kualitas Langit',
    hourlyChartTitle: 'Prakiraan Jam & Ketinggian Radiant',
    checklistTitle: 'Persiapan Sesi Pengamatan',
    checklistItems: [
      'Beri waktu minimal 20 menit bagi mata untuk beradaptasi dengan kegelapan',
      'Gunakan senter lampu merah untuk menjaga penglihatan malam',
      'Bersandarlah di kursi santai sambil melihat 45 derajat di atas horison',
      'Hindari melihat layar ponsel yang terang selama pengamatan',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Memahami Tingkat Jam Zenith ZHR dan Meteor Terlihat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tingkat Jam Zenith ZHR menunjukkan jumlah maksimum teoritis meteor yang dapat dilihat seorang pengamat dalam kondisi langit gelap sempurna dengan radiant tepat di zenith. Dalam pengamatan nyata jumlah yang terlihat jauh lebih rendah karena polusi cahaya dan ketinggian radiant.',
    },
    {
      type: 'paragraph',
      html: 'Perencanaan sesi memerlukan pertimbangan faktor geometris. Saat ketinggian radiant rendah lebih sedikit meteor yang terlihat karena jalurnya berada di luar sudut pandang pengamat.',
    },
    {
      type: 'list',
      items: [
        'Ketinggian radiant mengurangi tingkat meteor yang terlihat secara signifikan',
        'Polusi cahaya skala Bortle menyembunyikan jejak redup meteor',
        'Fase Bulan menciptakan latar belakang cahaya yang menyilaukan',
        'Bidang pandang membatasi area langit yang dapat diawasi',
      ],
    },
    {
      type: 'tip',
      title: 'Rekomendasi Langit Gelap',
      html: 'Pengamatan dari lokasi Bortle 2 atau 3 meningkatkan meteor redup yang terlihat secara drastis dibandingkan halaman rumah kota.',
    },
    {
      type: 'title',
      text: 'Dampak Fase Bulan dan Polusi Cahaya Perkotaan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cahaya Bulan adalah sumber polusi alami utama selama puncak hujan meteor. Bulan purnama menyilaukan jejak meteor dan mengurangi tingkat terlihat lebih dari 70 persen bahkan di lokasi pedesaan yang gelap.',
    },
    {
      type: 'paragraph',
      html: 'Memilih jam setelah Bulan terbenam atau sebelum Bulan terbit memberikan kontras terbaik antara jejak meteor dan latar langit malam. Jendela pengamatan di sekitar tengah malam astronomi memberikan kegelapan optimal.',
    },
    {
      type: 'title',
      text: 'Persiapan Malam Pengamatan Meteor yang Sukses',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Melihat meteor membutuhkan kesabaran dan pakaian hangat yang sesuai. Pengamatan dengan mata telanjang menawarkan bidang pandang jauh lebih luas dibanding teleskop atau teropong binokular.',
    },
    {
      type: 'list',
      items: [
        'Gunakan pakaian hangat berlapis bahkan saat malam musim panas',
        'Bawa kantong tidur atau selimut untuk kursi santai',
        'Siapkan minuman hangat untuk menjaga suhu tubuh',
        'Catat waktu dan arah bola api terang untuk laporan ilmiah',
      ],
    },
    {
      type: 'title',
      text: 'Metodologi Perhitungan Teknis dan Estimasi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alat perencana ini mengestimasi tingkat efektif dengan menggabungkan puncak ZHR faktor ketinggian skala Bortle dan gangguan Bulan untuk memberikan ekspektasi yang realistis bagi para astronom amatir di seluruh dunia.',
    },
    {
      type: 'paragraph',
      html: 'Dengan memperhitungkan faktor sudut elevasi dan kerapatan atmosferik kalkulator ini menyajikan estimasi visual yang akurat bagi pengamat di berbagai belahan bumi.',
    },
  ],
  faq: [
    {
      question: 'Apa itu Tingkat Jam Zenith ZHR',
      answer: 'ZHR adalah jumlah maksimum teoritis meteor per jam saat langit sangat gelap dan radiant di zenith.',
    },
    {
      question: 'Mengapa saya melihat lebih sedikit meteor dibanding angka ZHR',
      answer: 'ZHR mengasumsikan kondisi ideal. Polusi cahaya radiant rendah dan Bulan mengurangi angka nyata.',
    },
    {
      question: 'Apakah saya butuh teleskop untuk melihat meteor',
      answer: 'Tidak teleskop menyempitkan bidang pandang. Mata telanjang adalah yang terbaik.',
    },
  ],
  howTo: [
    {
      name: 'Pilih hujan meteor',
      text: 'Pilih hujan meteor seperti Perseid atau masukkan nilai ZHR.',
    },
    {
      name: 'Atur lintang',
      text: 'Sesuaikan slider dengan lokasi Anda.',
    },
    {
      name: 'Atur kegelapan dan Bulan',
      text: 'Masukkan kelas Bortle dan persentase cahaya Bulan.',
    },
    {
      name: 'Tinjau prakiraan',
      text: 'Periksa grafik jam untuk menemukan jendela optimal.',
    },
  ],
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Perencana Jendela Pengamatan Hujan Meteor',
      operatingSystem: 'Any',
      applicationCategory: 'EducationalApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Apa itu Tingkat Jam Zenith ZHR',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZHR adalah jumlah maksimum teoritis meteor per jam saat langit sangat gelap dan radiant di zenith.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara Menggunakan Perencana Hujan Meteor',
      description: 'Langkah menemukan waktu pengamatan hujan meteor terbaik.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Pilih hujan meteor',
          text: 'Pilih hujan meteor seperti Perseid atau masukkan nilai ZHR.',
        },
      ],
    },
  ],
};
