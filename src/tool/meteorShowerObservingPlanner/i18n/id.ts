import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'perencana-pengamatan-hujan-meteor';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Perencana Jendela Pengamatan Hujan Meteor',
  description: 'Rencanakan sesi pengamatan hujan meteor dengan menghitung tingkat jam zenithal efektif kegelapan langit dan gangguan bulan.',
  ui: {
    title: 'Perencana Hujan Meteor',
    subtitle: 'Hitung jendela pengamatan terbaik dan perkiraan tingkat meteor per jam',
    presetLabel: 'Pilih Hujan Meteor Utama',
    customZhrLabel: 'Tingkat Jam Zenithal Kustom ZHR',
    latitudeLabel: 'Lintang Pengamat',
    bortleLabel: 'Skala Kegelapan Langit Bortle',
    moonPhaseLabel: 'Iluminasi Bulan',
    sessionHoursLabel: 'Rencana Jam Pengamatan',
    presets: {
      perseids: 'Perseid (12 Agt)',
      geminids: 'Geminid (14 Des)',
      quadrantids: 'Quadrantid (4 Jan)',
      lyrids: 'Lyrid (22 Apr)',
      orionids: 'Orionid (21 Okt)',
      'eta-aquariids': 'Eta Aquarid (6 Mei)',
      leonids: 'Leonid (17 Nov)',
      custom: 'Hujan Meteor Kustom',
    },
    bortleDescriptions: {
      2: 'Langit Gelap Sangat Gelap',
      5: 'Langit Pinggiran Kota',
      8: 'Polusi Cahaya Perkotaan',
    },
    moonPhaseNames: {
      new: 'Cahaya Bulan Minimal',
      quarter: 'Gangguan Bulan Sedang',
      full: 'Polusi Cahaya Bulan Kuat',
    },
    resultsTitle: 'Analisis Sesi Pengamatan',
    bestWindowLabel: 'Jendela Pengamatan Terbaik',
    maxRateLabel: 'Tingkat Maksimal Terlihat',
    skyQualityLabel: 'Indeks Kualitas Langit',
    hourlyChartTitle: 'Prakiraan Jam dan Ketinggian Radiant',
    checklistTitle: 'Persiapan Pengamatan',
    checklistItems: [
      'Berikan waktu minimal 20 menit bagi mata untuk beradaptasi dengan kegelapan',
      'Gunakan senter dengan filter merah untuk menjaga penglihatan malam',
      'Duduk di kursi lipat santai menghadap 45 derajat di atas horison',
      'Hindari melihat layar ponsel yang terang selama pengamatan',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Memahami Zenithal Hourly Rate ZHR dan Meteor Terlihat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zenithal Hourly Rate ZHR menunjukkan jumlah maksimum teoritis meteor yang dapat dilihat oleh pengamat tunggal di bawah langit gelap sempurna dengan radiant berada tepat di zenith. Dalam kondisi nyata jumlah meteor terlihat lebih rendah karena polusi cahaya dan ketinggian radiant. Cahaya lampu perkotaan turut menyamarkan jejak meteor redup di malam hari sehingga lokasi pengamatan sangat menentukan hasil.',
    },
    {
      type: 'paragraph',
      html: 'Menghitung waktu pengamatan ideal memerlukan pertimbangan faktor geometris dan lingkungan. Ketika posisi radiant berada dekat dengan horison lebih sedikit meteor yang terlihat. Sudut ketinggian radiant menentukan proporsi jejak meteor yang dapat ditangkap mata secara langsung.',
    },
    {
      type: 'list',
      items: [
        'Ketinggian radiant mengurangi jumlah meteor sebanding dengan sinus sudutnya',
        'Polusi cahaya skala Bortle meredupkan jejak meteor yang lemah',
        'Fase Bulan menciptakan cahaya latar belakang langit',
        'Bidang pandang pengamat membatasi cakupan wilayah langit',
      ],
    },
    {
      type: 'tip',
      title: 'Rekomendasi Langit Gelap',
      html: 'Mengamati dari lokasi skala Bortle 2 atau 3 meningkatkan jumlah meteor redup yang terlihat secara signifikan dibandingkan dari balkon kota.',
    },
    {
      type: 'title',
      text: 'Dampak Fase Bulan dan Polusi Cahaya',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cahaya Bulan merupakan sumber utama polusi cahaya alami saat puncak hujan meteor. Bulan purnama meredupkan jejak meteor redup dan mengurangi tingkat efektif lebih dari 70 persen bahkan di pedesaan. Malam tanpa bulan adalah saat terbaik untuk mengamati bintang jatuh.',
    },
    {
      type: 'paragraph',
      html: 'Memilih jam pengamatan setelah Bulan terbenam atau sebelum Bulan terbit memberikan kontras terbaik dengan langit malam. Jam di sekitar tengah malam astronomis menawarkan kegelapan maksimum.',
    },
    {
      type: 'title',
      text: 'Cara Mempersiapkan Malam Pengamatan Meteor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pengamatan meteor yang sukses membutuhkan kesabaran dan pakaian hangat. Pengamatan dengan mata telanjang memberikan bidang pandang yang jauh lebih luas daripada teleskop atau teropong.',
    },
    {
      type: 'list',
      items: [
        'Gunakan pakaian hangat berlapis bahkan pada malam musim panas',
        'Bawa kantong tidur atau selimut hangat untuk kursi santai',
        'Siapkan minuman hangat untuk menjaga suhu tubuh',
        'Catat waktu dan arah lintasan bola api yang sangat terang',
      ],
    },
    {
      type: 'title',
      text: 'Metodologi Perhitungan Teknis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alat ini mengestimasi tingkat jam efektif dengan mengalikan ZHR puncak dengan faktor ketinggian koreksi Bortle dan penyesuaian kecerahan Bulan untuk memberikan ekspektasi yang realistis bagi pengamat.',
    },
  ],
  faq: [
    {
      question: 'Apa itu Zenithal Hourly Rate ZHR?',
      answer: 'ZHR adalah jumlah maksimum teoritis meteor per jam yang terlihat di bawah langit gelap sempurna dengan radiant berada di zenith.',
    },
    {
      question: 'Mengapa saya melihat lebih sedikit meteor dari nilai ZHR?',
      answer: 'Nilai ZHR mengasumsikan kondisi ideal. Polusi cahaya posisi radiant yang rendah dan cahaya Bulan mengurangi jumlah sebenarnya.',
    },
    {
      question: 'Apakah saya memerlukan teleskop untuk melihat meteor?',
      answer: 'Tidak teleskop mempersempit bidang pandang terlalu banyak. Pengamatan dengan mata telanjang adalah metode terbaik.',
    },
  ],
  howTo: {
    name: 'Cara Menggunakan Perencana Hujan Meteor',
    description: 'Langkah mudah menemukan waktu terbaik untuk melihat meteor.',
    steps: [
      {
        name: 'Pilih Hujan Meteor',
        text: 'Pilih hujan meteor terkenal seperti Perseid atau masukkan nilai ZHR kustom.',
      },
      {
        name: 'Atur Lintang Lokasi',
        text: 'Geser pengatur sesuai lokasi geografis Anda.',
      },
      {
        name: 'Konfigurasi Kegelapan dan Bulan',
        text: 'Masukkan kelas Bortle dan persentase cahaya Bulan.',
      },
      {
        name: 'Tinjau Prakiraan',
        text: 'Periksa grafik untuk menemukan jam terbaik.',
      },
    ],
  },
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
          name: 'Apa itu Zenithal Hourly Rate ZHR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZHR adalah jumlah maksimum teoritis meteor per jam yang terlihat di bawah langit gelap sempurna dengan radiant berada di zenith.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara Menggunakan Perencana Hujan Meteor',
      description: 'Langkah mudah menemukan waktu terbaik untuk melihat meteor.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Pilih Hujan Meteor',
          text: 'Pilih hujan meteor terkenal seperti Perseid atau masukkan nilai ZHR kustom.',
        },
      ],
    },
  ],
};
