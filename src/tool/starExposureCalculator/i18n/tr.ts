import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StarExposureCalculatorUI, StarExposureCalculatorLocaleContent } from '../index';

const slug = '500-rule-calculator';
const title = 'Astrofotoğrafçılık için 500 Kuralı ve NPF Hesaplayıcı';
const description = 'Yıldız izi olmadan astrofotoğrafçılık için maksimum pozlama süresini hesaplayın. Klasik 500 kuralı ve modern sensörler için yüksek hassasiyetli NPF modeli.';

const ui: StarExposureCalculatorUI = {
  toolTitle: '500 Kuralı Hesaplayıcı',
  modeLabel: 'Mod',
  classicMode: 'Klasik (500)',
  npfMode: 'Hassas (NPF)',
  sensorLabel: 'Sensör (Crop Faktörü)',
  focalLabel: 'Odak Uzaklığı (mm)',
  apertureLabel: 'Diyafram (f-değeri)',
  megapixelsLabel: 'Megapiksel (MP)',
  declinationLabel: 'Gök Deklinasyonu',
  equatorLabel: 'Ekvator',
  poleLabel: 'Kutup',
  secondsUnit: 'saniye',
  resultText: 'Nokta yıldızlar için maksimum süre.',
  simLabel: 'Görsel Simülasyon (%200 Yakınlaştırma)',
  simRangeLabel: 'Süre aşımını simüle et',
  pointStars: 'Nokta şeklinde yıldızlar',
  trailStars: 'Görülebilir yıldız izi',
};

const faq: StarExposureCalculatorLocaleContent['faq'] = [
  {
    question: 'Hesaplanan süreyi aşarsam ne olur?',
    answer: 'Maksimum süreyi aşarsanız, yıldızlar keskin noktalar olmak yerine uzamaya başlar. Pozlama çok uzun olursa, estetik bir teknik olmasına rağmen çok daha uzun süreler gerektiren yıldız izleri (star trails) oluşur.',
  },
  {
    question: 'NPF\'yi ne zaman 500 Kuralı yerine kullanmalıyım?',
    answer: 'NPF modeli daha doğrudur ve yüksek çözünürlüklü sensörlere (24MP veya daha fazla) sahip kameralar için önerilir. Klasik 500 Kuralı ile küçük baskılarda görünmeyen ancak 4K monitörde veya büyük baskılarda fark edilen izler oluşabilir. Amacınız maksimum keskinlikse NPF kullanın.',
  },
  {
    question: 'Fotoğraflamak istediğim nesnenin deklinasyonunu nasıl bulurum?',
    answer: 'Stellarium, SkySafari gibi uygulamaları kullanabilir veya yıldız haritalarına bakabilirsiniz. Genel bir kural olarak: Nesne gök kutbuna (Dec 90°) ne kadar yakınsa, o kadar uzun pozlama süresi kullanabilirsiniz.',
  },
  {
    question: 'Bu hesaplayıcı bir yıldız takipçisi (star tracker) ile çalışır mı?',
    answer: 'Takipçi dönüşü telafi ettiği için gökyüzünün kendisi için gerekmez. Ancak, takipçinin yardımcı olmadığı ön plan çekimi için veya beklenmedik izler gördüğünüzde motorun hata yapıp yapmadığını kontrol etmek için hayati önem taşır.',
  },
];

const howTo: StarExposureCalculatorLocaleContent['howTo'] = [
  { name: '1. Hesaplama modunu seçin', text: 'Hızlı bir tahmin için Klasik (500 Kuralı) veya yüksek çözünürlüklü bir sensörünüz varsa ve maksimum keskinlik arıyorsanız NPF modunu seçin.' },
  { name: '2. Ekipmanınızı yapılandırın', text: 'Lensinizin odak uzaklığını girin ve kameranızın crop faktörünü seçin.' },
  { name: '3. Deklinasyonu ayarlayın', text: 'Gök kutbuna yakın fotoğraf çekiyorsanız, iz olmadan daha uzun pozlamalara izin vermek için deklinasyonu artırın.' },
  { name: '4. Süre aşımını simüle et', text: 'Hesaplanan süreyi aşarsanız bir yıldızın nasıl görüneceğini görselleştirmek için simülasyon kaydırıcısını kullanın.' },
];

const bibliography: StarExposureCalculatorLocaleContent['bibliography'] = [
  { name: 'Fransız Astronomi Derneği: NPF Modeli', url: 'https://sahavre.fr/wp/regle-npf-rule/' },
  { name: 'PetaPixel: 500 Kuralı Neden Artık Yeterli Değil', url: 'https://petapixel.com/2015/01/06/avoid-star-trails-following-500-rule/' },
  { name: 'Lonely Speck: Astrofotoğrafçılık Perde Hızı Hesaplayıcı', url: 'https://www.lonelyspeck.com/advanced-astrophotography-shutter-time-calculator/' },
];

const seo: StarExposureCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '500 Kuralı ve NPF\'nin Önemli Noktaları',
    items: [
      '500 Kuralı, düşük çözünürlüklü sensörler ve küçük format görüntüleme için geçerli bir yaklaşımdır.',
      'NPF modeli, yüksek piksel yoğunluğuna sahip modern sensörler için daha doğrudur.',
      'Gök deklinasyonu, kutuplara yakın bölgelerde (Dec 90°) daha uzun pozlama süresine izin verir.',
      'Sensörünüzün crop faktörü, etkili odak uzaklığını çarpar ve maksimum süreyi azaltır.',
    ],
  },
  { type: 'title', text: 'Astrofotoğrafçılıkta Uzmanlaşmak: 500 Kuralı ve NPF Modeli', level: 2 },
  {
    type: 'paragraph',
    html: 'Gece gökyüzünün enginliğini yakalamak, her fotoğrafçı için en tatmin edici zorluklardan biridir. Ancak ilk engel Dünyanın dönüşüdür. Deklanşörü çok uzun süre açık bırakırsak, o mükemmel ışık noktaları çirkin izlere dönüşür. Keskin, nokta benzeri yıldızlar elde etmek için 500 Kuralı veya NPF Modelini kullanarak <strong>maksimum pozlama süresini</strong> hesaplamamız gerekir.',
  },
  { type: 'title', text: '500 Kuralı Nedir?', level: 2 },
  {
    type: 'paragraph',
    html: '<strong>500 Kuralı</strong>, onlarca yıldır manzara astrofotoğrafçılığında standart olan basitleştirilmiş deneysel bir formüldür. Formülü şöyledir: <code>Süre = 500 / (Odak Uzaklığı × Crop Faktörü)</code>. Hızlıdır, zihinden hesaplanabilir ve düşük çözünürlüklü sensörler için yeterince doğrudur.',
  },
  { type: 'title', text: 'Crop Faktörü ve Etkisi', level: 2 },
  {
    type: 'paragraph',
    html: 'Birçok yeni başlayan, 500 Kuralı\'nın 35 mm (Full Frame) standardına dayandığını unutur. Kameranızın daha küçük bir sensörü varsa, görüş alanı daha dardır ve yıldız hareketi büyütülür. APS-C (1.5x crop) üzerindeki 14 mm\'lik bir lens, 21 mm eşdeğeri gibi davranarak maksimum süreyi 35.7 saniyeden sadece 23.8 saniyeye düşürür.',
  },
  {
    type: 'table',
    headers: ['Sensör', 'Crop', '14mm', '24mm', '50mm', '85mm'],
    rows: [
      ['Full Frame', 'x1.0', '35.7s', '20.8s', '10.0s', '5.9s'],
      ['APS-C Nikon/Sony', 'x1.5', '23.8s', '13.9s', '6.7s', '3.9s'],
      ['APS-C Canon', 'x1.6', '22.3s', '13.0s', '6.3s', '3.7s'],
      ['Micro 4/3', 'x2.0', '17.9s', '10.4s', '5.0s', '2.9s'],
    ],
  },
  { type: 'title', text: 'NPF Modeli: Modern Sensörler İçin Hassasiyet', level: 2 },
  {
    type: 'paragraph',
    html: '500 Kuralı film çağında doğdu. Bugün 24-60MP sensörlerle pikseller o kadar küçüktür ki izler çok daha erken fark edilir. Fransız Astronomi Derneği tarafından geliştirilen <strong>NPF Modeli</strong>, hesaplamaya diyaframı ve piksel yoğunluğunu ekler: <code>t = (35×f + 30×p) / F</code>; burada f diyafram, p piksel aralığı ve F odak uzaklığıdır.',
  },
  {
    type: 'tip',
    title: 'Deklinasyon: Gelişmiş Fotoğrafçının Sırrı',
    html: '<strong>Gök kutbuna</strong> (kuzey yarımkürede Polaris) yakın yıldızlar gökyüzünde çok küçük daireler çizer. Bu, sensörünüz boyunca çok yavaş hareket ettikleri anlamına gelir ve çok daha uzun pozlamalara izin verir. Polaris etrafındaki alanı fotoğraflıyorsanız, iz görünmeden hesaplanan sürenin iki veya üç katını kullanabilirsiniz. Deklinasyon, hedefinizin gök kutbuna ne kadar yakın olduğunu gösterir.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: '500 Kuralı - 14mm FF', value: '35.7s', icon: 'mdi:timer' },
      { label: 'NPF - 14mm f/2.8 24MP', value: '~12s', icon: 'mdi:timer-sand' },
      { label: 'Dec 60° Düzeltme', value: 'x2.0', icon: 'mdi:compass' },
      { label: 'Dec 80° Düzeltme', value: 'x5.8', icon: 'mdi:compass' },
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

export const content: StarExposureCalculatorLocaleContent = {
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
