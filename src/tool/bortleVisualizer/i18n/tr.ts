import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BortleVisualizerUI, BortleVisualizerLocaleContent } from '../index';

const slug = 'karanlik-gok-simulatoru';
const title = 'Karanlık Gökyüzü Simülatörü (Bortle Ölçeği)';
const description = 'Bortle Ölçeği\'nin 9 seviyesini etkileşimli olarak görselleştirin ve ışık kirliliğinin yıldızlı gece gökyüzünü nasıl sildiğini keşfedin.';

const ui: BortleVisualizerUI = {
  toolTitle: 'Karanlık Gökyüzü Simülatörü',
  sliderLabel: 'Işık kirliliği seviyesini ayarlamak için kaydırın',
  classLabel: 'Bortle Sınıfı',
  nelmLabel: 'NELM',
  sqmLabel: 'SQM',
  classPrefix: 'SINIF',
  bortleData: {
    1: { title: 'Mükemmel Karanlık Gökyüzü', description: 'Gökbilimcilerin cenneti. Samanyolu gölge düşürür. Zodyak ışığı görünür ve renklidir. M33 çıplak gözle görülebilir.', nelm: 8.0, sqm: '21.99 - 22.0', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.0 },
    2: { title: 'Gerçekten Karanlık', description: 'Gerçekten karanlık alanlar. Samanyolu oldukça yapısaldır. Bulutlar gökyüzünde sadece siyah delikler olarak görünür.', nelm: 7.5, sqm: '21.89 - 21.99', starsVisible: true, milkyWayVisible: true, cloudsLit: false, skyBrightness: 0.1 },
    3: { title: 'Kırsal Gökyüzü', description: 'Karmaşık Samanyolu. Ufukta biraz ışık kirliliği. Bulutlar ufka yakın aydınlık ancak tepede karanlıktır.', nelm: 7.0, sqm: '21.69 - 21.89', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.2 },
    4: { title: 'Kırsal/Banliyö', description: 'Samanyolu detay kaybeder ancak görünürdür. Ufukta ışık kubbeleri. Bulutlar aşağıdan aydınlanmıştır.', nelm: 6.5, sqm: '20.49 - 21.69', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.35 },
    5: { title: 'Banliyö Gökyüzü', description: 'Samanyolu ufka yakın çok sönük veya görünmezdir. Zodyak ışığı nadiren görünür. Gökyüzü grimsi görünür.', nelm: 6.0, sqm: '19.50 - 20.49', starsVisible: true, milkyWayVisible: true, cloudsLit: true, skyBrightness: 0.5 },
    6: { title: 'Parlak Banliyö', description: 'Samanyolu görünmez. Gökyüzü parlak gridir. Bulutlar çok parlaktır. M31 zar zor görünür.', nelm: 5.5, sqm: '18.94 - 19.50', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.65 },
    7: { title: 'Banliyö/Şehir', description: 'Gökyüzü grimsi beyazdır. Her yönde güçlü ışık kaynakları. Sadece en parlak yıldızlar görünür.', nelm: 5.0, sqm: '18.38 - 18.94', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.8 },
    8: { title: 'Şehir Gökyüzü', description: 'Gökyüzü grimsi beyaz veya turuncudur. Gazete manşetleri okunabilir. Sadece ana takımyıldızlar görünür.', nelm: 4.5, sqm: '< 18.38', starsVisible: true, milkyWayVisible: false, cloudsLit: true, skyBrightness: 0.9 },
    9: { title: 'Şehir Merkezi', description: 'Gökyüzü alacakaranlık kadar parlaktır. Ay görünür ancak takımyıldızlar görünmez. Sadece gezegenler ve Ay görünür.', nelm: 4.0, sqm: '< 18.00', starsVisible: false, milkyWayVisible: false, cloudsLit: true, skyBrightness: 1.0 },
  },
};

const faq: BortleVisualizerLocaleContent['faq'] = [
  {
    question: 'Bortle Ölçeği Nedir?',
    answer: 'Bir konumdaki gece gökyüzünün parlaklığını ölçen 9 puanlık sayısal bir ölçektir. 2001 yılında amatör gökbilimci John E. Bortle tarafından oluşturulmuş ve Sky & Telescope\'da yayınlanmıştır. Seviye 1, mümkün olan en karanlık gökyüzünü (uzak çöller), Seviye 9 ise en çok ışık kirliliği olan gökyüzünü (şehir merkezleri) temsil eder.',
  },
  {
    question: 'Samanyolu\'nu görmek için gereken minimum Bortle seviyesi nedir?',
    answer: 'Samanyolu, Bortle 4\'ten (kırsal/banliyö bölgesi) itibaren net bir şekilde görünmeye başlar. Seviye 1 ve 2\'de muhteşemdir, sönük gölgeler bile düşürebilecek kadar ayrıntılı bir yapıya sahiptir. Bortle 6\'dan itibaren çıplak gözle pratik olarak görünmez hale gelir.',
  },
  {
    question: 'NELM ve SQM ne anlama gelir?',
    answer: 'NELM (Çıplak Gözle Sınır Parlaklık), o koşullar altında çıplak gözle görülebilen en sönük yıldızın parlaklığıdır. SQM (Gökyüzü Kalite Metresi), gökyüzü parlaklığını her yay saniyesi kare başına kadir cinsinden ölçer ve objektif bilimsel standarttır.',
  },
  {
    question: 'Yakınımdaki karanlık gökyüzü alanlarını nasıl bulabilirim?',
    answer: 'Birkaç saatlik sürüş mesafesindeki Bortle 3 veya daha karanlık bölgeleri bulmak için lightpollutionmap.info gibi ışık kirliliği haritalarını kullanın. Milli parklar, yüksek dağlık alanlar ve belirlenmiş karanlık gökyüzü parkları en iyi koşulları sunar.',
  },
];

const howTo: BortleVisualizerLocaleContent['howTo'] = [
  { name: '1. Bortle seviyesini ayarlayın', text: 'Işık kirliliğinin seviye 1\'den (çöl) seviye 9\'a (şehir merkezi) nasıl arttığını simüle etmek için kaydırıcıyı sürükleyin.' },
  { name: '2. Görsel efektleri gözlemleyin', text: 'Her seviyede sönük yıldızların nasıl kaybolduğuna, Samanyolu\'nun nasıl solduğuna ve gökyüzünün nasıl turuncu veya gri bir ton aldığına dikkat edin.' },
  { name: '3. Mevcut seviyenizi belirleyin', text: 'Yerel Bortle seviyenizi belirlemek için her zamanki gözlem noktanızdan gördüklerinizi simülasyonlarla karşılaştırın.' },
];

const bibliography: BortleVisualizerLocaleContent['bibliography'] = [
  { name: 'Orijinal Bortle Makalesi (Sky & Telescope, 2001)', url: 'https://skyandtelescope.org/astronomy-resources/light-pollution-and-astronomy-the-bortle-dark-sky-scale/' },
  { name: 'Işık Kirliliği Haritası - Dünya Haritası', url: 'https://www.lightpollutionmap.info/' },
  { name: 'Uluslararası Karanlık Gökyüzü Birliği (IDA)', url: 'https://www.darksky.org/' },
  { name: 'Geceleyin Dünya (Globe at Night) - Vatandaş Bilimi', url: 'https://www.globeatnight.org/' },
];

const seo: BortleVisualizerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Bortle Ölçeği Önemli Noktalar',
    items: [
      'Bortle 1-2: Referans karanlık gökyüzü, Samanyolu gölge düşürür, NELM > 7.5.',
      'Bortle 3-4: En uygun kırsal gökyüzü, Samanyolu ayrıntılı görünür ancak ufuk kirlidir.',
      'Bortle 5-6: Banliyö, sönük veya görünmez Samanyolu, gezegenler ve ay için iyi.',
      'Bortle 7-9: Şehir gökyüzü, çıplak gözle sadece parlak nesneler görünür.',
    ],
  },
  { type: 'title', text: 'Bortle Ölçeği: Gökyüzü Karanlığını Ölçmek', level: 2 },
  {
    type: 'paragraph',
    html: '<strong>Bortle Ölçeği</strong>, amatör gökbilimciler tarafından gece gökyüzünün kalitesini miktarlandırmak için dünya çapında kullanılan uluslararası standart sistemdir. New Yorklu deneyimli bir kuyruklu yıldız ve derin uzay nesnesi gözlemcisi olan John E. Bortle tarafından oluşturulmuş ve gözlem koşullarını iletmek için objektif ve yeniden üretilebilir bir ölçek sağlamak amacıyla 2001 yılında Sky & Telescope dergisinde yayınlanmıştır.',
  },
  {
    type: 'paragraph',
    html: 'Ölçek, <strong>seviye 1</strong>\'den (sadece uzak çöllerde ve medeniyetten uzak yüksek dağlarda bulunan mümkün olan en karanlık gökyüzü) <strong>seviye 9</strong>\'a (gökyüzünün kalıcı bir turuncu veya beyazımsı parlaklıkla parladığı ve sadece Ay ile en parlak gezegenlerin görülebildiği büyük şehirlerin iç kısımları) kadar uzanır. Her seviye, enstrümantasyon olmadan tanımlamaya izin veren spesifik tanımlayıcılara sahiptir.',
  },
  { type: 'title', text: 'Işık Kirliliği: Sessiz Bir Küresel Kriz', level: 2 },
  {
    type: 'paragraph',
    html: 'Işık kirliliğinin artması, en az tartışılan ancak en yaygın çevresel sorunlardan biridir. Son çalışmalara göre, <strong>dünya nüfusunun %80\'inden fazlası</strong> ışık kirliliği olan gökyüzü altında yaşıyor ve Avrupa ile Kuzey Amerika\'da bu oran %99\'u aşıyor. Sonuçlar gökbilimin ötesine geçiyor: Geceleyin yapay ışık, insanların ve hayvanların sirkadiyen ritimlerini bozar, göçmen kuşların yönünü şaşırtır, deniz kaplumbağalarının üremesini etkiler ve memelilerde melatonin üretimini baskılar.',
  },
  {
    type: 'table',
    headers: ['Bortle Sınıfı', 'NELM', 'SQM (mag/arcsec²)', 'Samanyolu', 'Temel Özellik'],
    rows: [
      ['1 - Mükemmel', '8.0', '21.99 - 22.0', 'Gölge düşürür', 'M33 çıplak gözle görünür'],
      ['2 - Tipik Karanlık', '7.5', '21.89 - 21.99', 'Çok yapılı', 'Bulutlar = siyah delikler'],
      ['3 - Kırsal', '7.0', '21.69 - 21.89', 'Karmaşık', 'Biraz ufuk parlaması'],
      ['4 - Kırsal/Banliyö', '6.5', '20.49 - 21.69', 'Görünür', 'Ufukta ışık kubbeleri'],
      ['5 - Banliyö', '6.0', '19.50 - 20.49', 'Sönük', 'Grimsi gökyüzü'],
      ['6 - Parlak Banliyö', '5.5', '18.94 - 19.50', 'Görünmez', 'M31 zar zor görünür'],
      ['7 - Banliyö/Şehir', '5.0', '18.38 - 18.94', 'Yok', 'Açık gri gökyüzü'],
      ['8 - Şehir', '4.5', '< 18.38', 'Yok', 'Sadece ana takımyıldızlar'],
      ['9 - Şehir Merkezi', '4.0', '< 18.00', 'Yok', 'Sadece Ay ve gezegenler'],
    ],
  },
  {
    type: 'tip',
    title: 'Objektif Ölçüm: Gökyüzü Kalite Metresi (SQM)',
    html: 'Hassas ve yeniden üretilebilir ölçümler için gökbilimciler, gökyüzü parlaklığını her yay saniyesi kare başına kadir (mag/arcsec²) cinsinden ölçen bir cihaz olan <strong>Gökyüzü Kalite Metresi (SQM)</strong> kullanırlar. 22.0\'lık bir SQM, mükemmel bir Bortle 1 gökyüzüne karşılık gelirken, 18.0\'lık bir değer Bortle 8-9 gökyüzünü gösterir. Globe at Night ağındaki gerçek zamanlı ölçümleri kontrol edebilirsiniz.',
  },
  { type: 'title', text: 'Yakınınızdaki Karanlık Gökyüzü Sığınaklarını Bulma', level: 2 },
  {
    type: 'paragraph',
    html: 'Yaygın ışık kirliliğine rağmen, karanlık gökyüzü sığınakları hala mevcuttur. Milli parklar, belirlenmiş karanlık gökyüzü rezervleri ve uzak yayla bölgeleri, çoğu büyük şehirden birkaç saat içinde ulaşılabilen Bortle 2-4 koşulları sunar. IDA (Uluslararası Karanlık Gökyüzü Birliği), küçük parklardan tüm ada rezervlerine kadar sertifikalı karanlık gökyüzü mekanlarının küresel bir kaydını tutar. Daha karanlık bir yere gece gezisi planlamak, astronomik deneyiminizi her türlü ekipman yükseltmesinden daha fazla değiştirecektir.',
  },
  {
    type: 'diagnostic',
    variant: 'success',
    title: 'Planlama Aracı',
    icon: 'mdi:map-marker-star',
    badge: 'Pro İpucu',
    html: 'Herhangi bir gözlem gezisinden önce, 1-2 saatlik yarıçap içindeki Bortle 3 veya daha karanlık bölgeleri belirlemek için lightpollutionmap.info adresindeki ışık kirliliği haritasını kontrol edin. Mükemmel geceyi seçmek için bunu Clear Outside veya Meteoblue Astro\'dan gelen astronomik hava tahminleriyle birleştirin.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://context.org',
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


export const content: BortleVisualizerLocaleContent = {
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
  bortleData: ui.bortleData,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
