import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomi',
  title: 'Alat Astronomi',
  description: 'Kalkulator dan simulator gratis untuk astronom amatir. Rencanakan sesi observasi dan astrofotografi Anda.',
  seo: [
    { type: 'title', text: 'Astronomi Amatir: Alat untuk Menjelajahi Alam Semesta', level: 2 },
    {
      type: 'paragraph',
      html: 'Astronomi amatir adalah salah satu sains warga yang paling menarik di dunia. Dengan peralatan yang tepat dan alat perencanaan yang benar, siapa pun dapat menjelajahi galaksi yang jaraknya jutaan tahun cahaya, memandangi nebula tempat bintang-bintang baru lahir, atau mempelajari permukaan planet di tata surya kita. Rangkaian <strong>kalkulator astronomi gratis</strong> ini dirancang untuk meningkatkan pengalaman Anda sebagai pengamat.',
    },
    {
      type: 'paragraph',
      html: 'Dari mengevaluasi kualitas langit dengan skala Bortle hingga menghitung resolusi optik teleskop Anda secara tepat, setiap alat menerapkan formula yang divalidasi oleh komunitas astronomi internasional sehingga setiap malam yang Anda habiskan di bawah bintang-bintang menjadi produktif dan berkesan.',
    },
    { type: 'title', text: 'Polusi Cahaya: Musuh Nomor Satu Astronom', level: 2 },
    {
      type: 'paragraph',
      html: 'Kita hidup di dunia yang semakin terang. <strong>Polusi cahaya</strong> tumbuh sebesar 10% per tahun dan menghapus langit malam bagi lebih dari 80% populasi dunia. Skala Bortle, dengan 9 tingkatannya, adalah standar internasional untuk mengukur kehilangan ini. Simulator langit gelap kami memungkinkan Anda memvisualisasikan secara interaktif bagaimana cahaya buatan mengubah cakrawala, dari hitam pekat gurun terpencil hingga warna oranye kota metropolitan yang menyesakkan.',
    },
    { type: 'title', text: 'Teleskop Anda: Memahami Kemampuan Sebenarnya', level: 2 },
    {
      type: 'paragraph',
      html: 'Pasar penuh dengan teleskop yang menjanjikan bisa "melihat Saturnus dengan cincinnya" dengan bukaan apa pun. Kenyataannya adalah <strong>bukaan objektif</strong> adalah parameter yang paling kritis. Bukaan ini menentukan seberapa banyak cahaya yang dikumpulkan (magnitudo batas) dan seberapa banyak detail yang dapat dipisahkan (daya urai). Kalkulator jangkauan dan resolusi di bagian ini memberi Anda angka konkret: katalog objek mana yang berada dalam jangkauan Anda dan seberapa banyak detail yang dapat Anda harapkan pada permukaan planet.',
    },
    {
      type: 'list',
      items: [
        '<strong>Skala Bortle:</strong> Evaluasi kualitas langit Anda sebelum pergi ke lokasi observasi.',
        '<strong>Jangkauan Teleskop:</strong> Hitung magnitudo batas peralatan Anda berdasarkan bukaan dan kondisi langit.',
        '<strong>Aturan 500 / NPF:</strong> Tentukan waktu eksposur maksimal untuk astrofotografi tanpa jejak bintang.',
        '<strong>Resolusi Optik:</strong> Ketahui batas Dawes dan Rayleigh teleskop Anda.',
      ],
    },
    {
      type: 'tip',
      title: 'Langkah Pertama: Kenali Langit Anda',
      html: 'Sebelum berinvestasi pada teleskop yang lebih besar, pertimbangkan untuk pergi ke langit yang lebih gelap. Teleskop 150mm di bawah langit Bortle 3 jauh mengungguli instrumen 300mm di bawah Bortle 7. Kegelapan langit melipatgandakan performa peralatan apa pun.',
    },
    { type: 'title', text: 'Astrofotografi Deep Sky: Menangkap Kosmos', level: 2 },
    {
      type: 'paragraph',
      html: 'Astrofotografi telah mendemokratisasi akses ke alam semesta. Dengan kamera DSLR standar dan lensa sudut lebar, Anda dapat menangkap Bimasakti dalam segala kemegahannya. Dengan teleskop dan tracker khatulistiwa, Anda dapat memotret nebula dan galaksi yang melampaui apa yang bisa dilihat oleh observatorium terbaik beberapa dekade lalu. Kuncinya ada pada <strong>waktu eksposur</strong>: terlalu pendek dan Anda kehilangan detail redup; terlalu lama dan Anda mendapatkan jejak bintang karena rotasi Bumi.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Skala Bortle', value: '9 Tingkat', icon: 'mdi:weather-night' },
        { label: 'Magnitudo Batas', value: 'Dapat Dihitung', icon: 'mdi:telescope' },
        { label: 'Aturan 500/NPF', value: 'Presisi', icon: 'mdi:timer-sand' },
        { label: 'Daya Dawes', value: 'Resolusi', icon: 'mdi:flare' },
      ],
    },
  ],
};
