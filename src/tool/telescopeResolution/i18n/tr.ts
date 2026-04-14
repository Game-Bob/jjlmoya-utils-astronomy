import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TelescopeResolutionUI, TelescopeResolutionLocaleContent } from '../index';

const slug = 'telescope-resolution-calculator';
const title = 'Teleskop Çözünürlük Hesaplayıcı (Dawes Limiti)';
const description = 'Dawes Limiti ve Rayleigh Kriteri ile teleskobunuzun çözünürlük gücünü hesaplayın. Maksimum kullanışlı büyütmeyi ve atmosferik seeing etkisini keşfedin.';

const ui: TelescopeResolutionUI = {
  toolTitle: 'Teleskop Çözünürlüğü',
  apertureLabel: 'Teleskop Açıklığı (Apertür)',
  unitLabel: 'Birim',
  mmUnit: 'Milimetre (mm)',
  inUnit: 'İnç (in)',
  presetsLabel: 'Yaygın Modeller',
  presetsPlaceholder: '-- Model Seçin --',
  seeingLabel: 'Gökyüzü Kalitesi (Seeing)',
  dawesLabel: 'Kullanışlı Çözünürlük (Dawes)',
  arcsecUnit: 'arksaniye',
  rayleighLabel: 'Rayleigh Limiti',
  maxMagLabel: 'Maks. Kullanışlı Büyütme',
  seeingAlertPrefix: 'Atmosfer sınırlı: Bugünkü seeing',
  seeingAlertSuffix: 'teleskobunuzun tam potansiyelini görmenizi engelleyecektir',
  simLabel: 'Simülasyon: Çift Yıldızlar',
  simExplanation: 'Dawes nokta yıldızları ayırır; Rayleigh gezegen detaylarını tanımlar.',
  presets: [
    { value: '70', label: '70mm (Başlangıç Mercekli)' },
    { value: '114', label: '114mm (4.5") Newtonyen' },
    { value: '150', label: '150mm (6") Dobsonian' },
    { value: '200', label: '200mm (8") Dobsonian' },
    { value: '254', label: '254mm (10") Dobsonian' },
    { value: '304', label: '304mm (12") Profesyonel' },
  ],
};

const faq: TelescopeResolutionLocaleContent['faq'] = [
  {
    question: 'Dawes Limiti nedir?',
    answer: 'Dawes Limiti, bir teleskobun açısal çözünürlüğü için deneysel bir kriterdir ve 116/D (D, mm cinsinden çaptır) olarak hesaplanır. Deneyimli bir gözlemcinin iki ayrı nokta olarak ayırt edebileceği benzer parlaklıktaki iki yıldız arasındaki arksaniye cinsinden minimum mesafeyi temsil eder. 19. yüzyılda İngiliz astronom William Dawes tarafından önerilmiştir.',
  },
  {
    question: 'Dawes ve Rayleigh arasındaki fark nedir?',
    answer: 'Dawes Limiti (116/D) deneyseldir ve çift yıldızlar için insan görüşüne dayanır. Rayleigh Kriteri (138/D) ise ışığın dalga doğasına dayanan fiziksel bir kriterdir. Rayleigh daha katıdır ve gezegen yüzeylerindeki ayrıntılar (Jüpiter\'in kuşakları, ay kraterleri) için daha iyi sonuç verir. Dawes, çift yıldızları ayırmak için daha kullanışlıdır.',
  },
  {
    question: 'Seeing nedir ve beni nasıl etkiler?',
    answer: 'Seeing, havadan geçen ışığı bozan atmosferik türbülansın ölçüsüdür. Ortalama bir gecede, seeing çözünürlüğü 1-2 arksaniye ile sınırlar; bu da ~115 mm\'den büyük teleskopların bu atmosferik sınırı aşamayacağı anlamına gelir. Mükemmel seeing (0.5") nadirdir ve genellikle termal aktivitenin az olduğu yüksek rakımlı yerlerde görülür.',
  },
  {
    question: 'Bir teleskobun maksimum kullanışlı büyütmesi nedir?',
    answer: 'Altın kural, mm cinsinden açıklığın 2 katıdır (veya inç başına 50 kat). 150 mm\'lik bir teleskobun kullanışlı maksimum büyütmesi 300 kattır. Bu sınırı aşmak görüntüyü büyütür ancak daha fazla ayrıntı sunmaz; sadece görüntüyü daha karanlık ve bulanık hale getirir. Sıradan gecelerde seeing bu değeri sık sık 100-150 kat ile sınırlar.',
  },
];

const howTo: TelescopeResolutionLocaleContent['howTo'] = [
  { name: '1. Açıklığı girin', text: 'Teleskobunuzun ana aynasının veya merceğinin çapını yazın. Yaygın modellerden birini de seçebilirsiniz.' },
  { name: '2. Seeing ayarını yapın', text: 'Gözlem gecenizdeki atmosferik türbülansı simüle etmek için seeing kaydırıcısını hareket ettirin.' },
  { name: '3. Sonuçları yorumlayın', text: 'Arksaniye cinsinden Dawes ve Rayleigh limitlerini gözlemleyin. Değer ne kadar düşükse, çözünürlük o kadar yüksektir.' },
  { name: '4. Seeing sınırını kontrol edin', text: 'Seeing uyarısı görünürse, atmosfer o gece teleskobunuzun performansını sınırlıyor demektir.' },
];

const bibliography: TelescopeResolutionLocaleContent['bibliography'] = [
  { name: 'Sky & Telescope - Teleskop Çözünürlüğü Açıklaması', url: 'https://skyandtelescope.org/stargazing-and-observing/celestial-objects-to-watch/telescope-calculator/' },
  { name: 'British Astronomical Association - Seeing Ölçeği', url: 'https://www.britastro.org/' },
  { name: 'Astronomik Seeing (Vikipedi)', url: 'https://tr.wikipedia.org/wiki/Astronomik_g%C3%B6r%C3%BCnt%C3%BC' },
];

const seo: TelescopeResolutionLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Teleskopik Çözünürlüğün Önemli Noktaları',
    items: [
      'Dawes Limiti (116/D mm), ayrıştırılabilir çift yıldızlar arasındaki minimum mesafeyi belirler.',
      'Rayleigh Kriteri (138/D mm), gezegen yüzeylerindeki görülebilir en küçük ayrıntıyı tanımlar.',
      'Atmosferik seeing (tipik 1-2"), genellikle 115 mm\'den büyük teleskopların teorik sınırını aşar.',
      'Maksimum kullanışlı büyütme, mm cinsinden açıklığın 2 katıdır; bunu aşmak görüntüyü sadece karartır.',
    ],
  },
  { type: 'title', text: 'Astronomik Çözünürlük: Dawes Limiti ve Rayleigh Rehberi', level: 2 },
  {
    type: 'paragraph',
    html: 'Bir teleskobun gücü bir görüntüyü ne kadar büyütebildiğiyle değil, ne kadar ayrıntıyı çözebildiğiyle ölçülür. <strong>Çözünürlük gücü</strong> olarak bilinen bu yetenek, neredeyse tamamen açıklığının çapına bağlıdır. Ayna veya ana mercek ne kadar büyükse, ayırabildiği ayrıntılar o kadar küçük olur.',
  },
  {
    type: 'paragraph',
    html: 'Bu çözünürlüğü nicelleştirmek için iki ana kriter vardır. <strong>Dawes Limiti</strong> (116/D arksaniye) deneyseldir ve astronom William Dawes tarafından çift yıldız gözlemlerine dayanarak tanımlanmıştır. <strong>Rayleigh Kriteri</strong> (138/D arksaniye) ise ışık kırınımının dalga fiziğinden türetilen teorik bir kriterdir. Her ikisi de açıklığın belirleyici faktör olduğu konusunda hemfikirdir.',
  },
  { type: 'title', text: 'Seeing: Atmosferik Bariyer', level: 2 },
  {
    type: 'paragraph',
    html: 'Dünyanın en büyük teleskobuna sahip olabilirsiniz, ancak atmosfer kararsızsa ince ayrıntıları göremezsiniz. <strong>Seeing</strong>, atmosferik türbülansın ölçüsüdür. Ortalama bir gecede atmosfer, çözünürlüğü yaklaşık 1-1,5 arksaniye ile sınırlar. 115 mm\'den büyük teleskoplar için darboğaz optik değil, seeing\'dir.',
  },
  {
    type: 'table',
    headers: ['Açıklık', 'Dawes (")', 'Rayleigh (")', 'Maks. Büy.', 'Gereken Seeing'],
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
    title: 'Termal Alıştırma: Detayların Sırrı',
    html: 'Çözünürlüğün en büyük düşmanı dış seeing değil, teleskop tüpünün içindeki <strong>yerel seeing</strong>\'dir. Teleskobu dışarı çıkardığınızda içinde kalan sıcak hava, detayı yok eden konveksiyon akımları oluşturur. Yüksek büyütmede gözlem yapmadan önce teleskobunuzun dış sıcaklığa alışması için en az 30-60 dakika bekleyin.',
  },
  { type: 'title', text: 'Kolimasyon: Potansiyeli Açığa Çıkaran Hizalama', level: 2 },
  {
    type: 'paragraph',
    html: 'Kötü kolime edilmiş bir teleskop (aynaları hizzalanmamış), açıklığı ne olursa olsun asla Dawes limitinde performans göstermez. <strong>Kolimasyon</strong>, ikincil ve birincil aynaların odaklayıcı ile mükemmel şekilde hizalanması sürecidir. Yansıtıcı teleskoplar (Newtonyen, Dobsonian) için kolimasyon temel bir periyodik görevdir. Kontrol etmek için parlak bir yıldız üzerinde "yıldız testi" yapın.',
  },
  { type: 'title', text: 'Çözünürlüğü Maksimuma Çıkarmak İçin Pratik İpuçları', level: 2 },
  {
    type: 'paragraph',
    html: 'Her zaman cihazın termal dengeye ulaşmasını bekleyin. Isı yayan çatılar veya asfalt üzerinden gözlem yapmaktan kaçının. Daha stabil hava için soğuk cephe geçişlerinden sonraki geceleri seçin. Görüntünün sabit kaldığı en yüksek büyütmeyi kullanın. <strong>Karanlığa alışmayı</strong> unutmayın: gezegenlerdeki renk ayrıntılarına duyarlılığı artırmak için gözlerinize 20 dakika tam karanlık süre tanıyın.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'Dawes 150mm', value: '0.77"', icon: 'mdi:flare' },
      { label: 'Dawes 300mm', value: '0.39"', icon: 'mdi:flare' },
      { label: 'İyi Seeing', value: '0.5 - 1.0"', icon: 'mdi:weather-windy' },
      { label: 'Orta Seeing', value: '1.0 - 2.0"', icon: 'mdi:weather-cloudy' },
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
  inLanguage: 'tr',
};

export const content: TelescopeResolutionLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliography,
  bibliographyTitle: 'Bibliyografik Referanslar',
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
