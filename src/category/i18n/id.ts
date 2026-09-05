import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomi-amatir',
  title: 'Alat Astronomi',
  description: 'Kalkulator dan simulator gratis untuk astronom amatir. Rencanakan sesi observasi dan astrofotografi Anda.',
  seo: [
    { type: 'title', text: 'Astronomi amatir: panduan untuk setiap malam pengamatan', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Langit berubah setiap malam, begitu juga cara Anda mengamatinya. Kumpulan <strong>alat astronomi gratis</strong> ini menemani Anda dari pertanyaan pertama hingga penyesuaian kecil yang membuat sesi pengamatan atau malam astrofotografi lebih menarik.</p>',
    },
    {
      type: 'paragraph',
      html: '<p>Mulailah dari tahap Anda sekarang. Pemula mendapat panduan yang jelas, pengamat berpengalaman dapat membandingkan pembesaran, resolusi, dan jangkauan, sementara peralatan yang lebih menuntut mendapat angka untuk merencanakan sesi dan membandingkannya dengan kondisi lapangan.</p>',
    },
    { type: 'title', text: 'Untuk pemula: memahami langit tanpa tersesat', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Anda tidak perlu menghafal rumus. Bandingkan langit terang dan gelap dengan skala Bortle, lihat perubahan pembesaran dan bidang pandang saat memilih eyepiece, lalu perkirakan sasaran yang sesuai dengan teleskop Anda. Anda juga dapat memilih waktu yang baik untuk mengamati hujan meteor.</p>',
    },
    { type: 'title', text: 'Untuk pengamat berpengalaman: memilih apa yang akan diamati', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Saat Anda mengenal peralatan sendiri, pertanyaannya adalah kapan dan bagaimana mendapatkan hasil terbaik. Hubungkan bukaan, panjang fokus, eyepiece, dan pupil keluar, bandingkan batas Dawes dan Rayleigh dengan jarak bintang ganda, lalu pilih waktu pengamatan yang sesuai.</p>',
    },
    {
      type: 'list',
      items: [
        '<strong>Membaca langit:</strong> Bandingkan langit terang dan gelap sebelum memilih lokasi pengamatan.',
        '<strong>Mengenal peralatan:</strong> Gunakan bukaan, magnitudo batas, resolusi, dan batas optik untuk sasaran yang masuk akal.',
        '<strong>Menyusun bidang pandang:</strong> Bandingkan pembesaran, pupil keluar, dan bidang pandang sebelum mengganti eyepiece.',
        '<strong>Memilih waktu:</strong> Rencanakan hujan meteor dan durasi pengamatan sesuai kondisi yang penting.',
        '<strong>Menyiapkan gambar:</strong> Perkirakan eksposur awal dan atur frame yang akan ditumpuk.',
      ],
    },
    {
      type: 'tip',
      title: 'Instrumen terbaik tetap langit di atas Anda',
      html: '<p>Anggap setiap hasil sebagai kompas, bukan janji. Atmosfer, fokus, kejernihan, dan pengalaman mengubah apa yang terlihat. Catatan lapangan membantu menemukan cara yang cocok untuk peralatan dan langit Anda.</p>',
    },
    { type: 'title', text: 'Untuk profesional: hitung, bandingkan, dan sesuaikan', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Untuk peralatan canggih, kegiatan bersama, atau gambar yang ingin diulang dengan tujuan jelas, acuan ini membantu menyelaraskan variabel. Gunakan aturan 500 dan NPF sebagai awal, rencanakan frame dan waktu stacking, lalu periksa sudut gambar, histogram, dan kondisi nyata.</p>',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Skala Bortle', value: '9 tingkat', icon: 'mdi:weather-night' },
        { label: 'Magnitudo batas', value: 'Dapat dihitung', icon: 'mdi:telescope' },
        { label: 'Acuan 500/NPF', value: 'Titik awal', icon: 'mdi:timer-sand' },
        { label: 'Kriteria Dawes', value: 'Resolusi', icon: 'mdi:flare' },
      ],
    },
  ],
};
