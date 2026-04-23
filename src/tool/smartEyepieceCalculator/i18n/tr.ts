import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EyepieceCalculatorLocaleContent } from '../entry';

const title = 'Oküler Hesaplayıcı ve Görsel Simülatör';
const description = 'Teleskobunuz için herhangi bir okülerle büyütme, gerçek görüş alanı (TFOV) ve çıkış açıklığını hesaplayın. Etkileşimli görsel simülatör içerir.';

const ui = {
  toolTitle: 'Akıllı Oküler Hesaplayıcı',
  telescopeTitle: 'Teleskobunuz',
  apertureLabel: 'Açıklık (mm)',
  focalLabel: 'Odak Uzaklığı (mm)',
  presetsLabel: 'Popüler Modeller',
  presetsPlaceholder: 'Bir teleskop seçin...',
  addEyepieceBtn: '+ Oküler Ekle',
  eyepiecesTitle: 'Okülerleriniz',
  eyepieceFocal: 'Odak G. (mm)',
  eyepieceAfov: 'Görünür Alan (°)',
  removeEyepiece: 'Kaldır',
  magLabel: 'Büyütme',
  tfovLabel: 'Gerçek Alan',
  pupilLabel: 'Çıkış Açıklığı',
  simulatorTitle: 'Görüş Alanı Simülatörü',
  targetLabel: 'Ne görmek istersiniz?',
  targetMoon: 'Ay',
  targetSaturn: 'Satürn',
  targetPleiades: 'Ülker (Pleiades) Kümesi',
  targetAndromeda: 'Andromeda Galaksisi',
  targetM13: 'M13 Kümesi',
  statusDangerHighMag: 'Boşa harcanan para: Teleskobunuzu fiziksel sınırlarının ötesine zorluyorsunuz.',
  statusDangerPupil: 'Boşa harcanan ışık: Çıkış açıklığı 7 mm\'yi aşıyor. Gözünüz bu kadar çok ışığı işleyemez.',
  statusWarningHighMag: 'Dikkat: Bu büyütme için olağanüstü kararlı bir gökyüzüne (iyi seeing) ihtiyacınız olacak.',
  statusWarningLowMag: 'Düşük büyütme: Önerilen minimumun altındasınız. İkincil ayna gölgesini görebilir veya kontrast kaybedebilirsiniz.',
  statusPerfectDeepSky: 'Mükemmel kombinasyon! Geniş nesneler ve Derin Uzay (kümeler, nebulalar) için ideal.',
  statusPerfectPlanetary: 'Mükemmel kombinasyon! Gezegen detaylarını (Satürn halkaları, Jüpiter bantları) görmek için ideal.',
  statusPerfectGeneral: 'Harika çok yönlü kombinasyon! Her tür nesnenin genel gözlemi için ideal.',
  ctaText: 'Mevcut ekipmanınıza bağlı olarak, size {min}x ile {max}x arasında büyütme sağlayan okülerler kullanmanızı öneririz.',
  compareText: 'Okülerleri Karşılaştır',
  apertureHelp: 'Tüpün çapı, genellikle orijinal çıkartmada veya kutuda yazar.',
  focalHelp: 'Teleskobun odak uzaklığı.',
  afovHelp: 'Okülerin görünür görüş alanı. Plössl genellikle 52°, geniş açı 68° veya daha fazladır.',
};

const faq: EyepieceCalculatorLocaleContent['faq'] = [
  {
    question: 'Teleskop büyütmesi nasıl hesaplanır?',
    answer: 'Formül basittir: Teleskop odak uzaklığını oküler odak uzaklığına bölün. Örneğin, 10mm okülerli 1000mm bir teleskop size 100 kat büyütme (100x) sağlar.',
  },
  {
    question: 'Çıkış açıklığı nedir ve neden önemlidir?',
    answer: 'Okülerden çıkıp gözünüze giren ışık huzmesinin çapıdır. Teleskop açıklığının büyütmeye bölünmesiyle hesaplanır. 7 mm\'yi aşarsa, gözünüz tüm ışığı yakalayamaz ve teleskobunuzun gücünü boşa harcamış olursunuz.',
  },
  {
    question: 'Okülerimin gerçek görüş alanını nasıl anlarım?',
    answer: 'Gerçek Görüş Alanı (TFOV), okülerin görünür görüş alanının (AFOV) büyütmeye bölünmesiyle hesaplanır. Bu size gökyüzünün kaç derecesini gerçekten gördüğünüzü söyler.',
  },
];

const howTo: EyepieceCalculatorLocaleContent['howTo'] = [
  { name: '1. Teleskop verilerini girin', text: 'Tüpünüzün açıklığını ve odak uzaklığını yazın veya listeden popüler bir model seçin.' },
  { name: '2. Okülerlerinizi ekleyin', text: 'Performanslarını karşılaştırmak için okülerlerinizin odak uzaklığını ve görünür alanını girin.' },
  { name: '3. Görünümü simüle edin', text: 'Bir nesne (Ay, Satürn vb.) seçin ve görüntünün nasıl değiştiğini ve optik sınırlar içinde olup olmadığınızı görmek için okülerlerinize tıklayın.' },
];

const seo: EyepieceCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'İdeal okülerinizi seçmek için temel faktörler',
    items: [
      'Gerçek Maksimum Büyütme: mm cinsinden açıklığın 2 katı (ancak gökyüzü koşulları nedeniyle 200-250 kat ile sınırlıdır).',
      'Minimum Yararlı Büyütme: Açıklığın 7\'ye bölünmesi (insan göz bebeği sınırı).',
      'Optimal Aralık: 0,5 mm ile 7 mm çıkış açıklığı arası.',
    ],
  },
  { type: 'title', text: 'Teleskobunuz İçin Oküler Nasıl Seçilir: Pratik Rehber', level: 2 },
  {
    type: 'paragraph',
    html: 'Okülerleri sezgisel olarak satın almayın. İyi bir gözlemin anahtarı, teleskobunuzun çözünürlüğü ile gözünüzün biyolojik kapasitesini dengelemekte yatar. Yanlış seçilmiş bir oküler, dünyanın en iyi teleskobunun bile görüntüsünü bulanık veya çok karanlık yapabilir.',
  },
  { type: 'title', text: '1. Büyütme Hesabı (M)', level: 3 },
  {
    type: 'paragraph',
    html: 'Formül basittir: Teleskop odak uzaklığını oküler odak uzaklığına bölün. <br/><strong>Formül:</strong> Teleskop Odak / Oküler Odak = Büyütme. <br/>Örnek: 10mm okülerli 1000mm bir teleskop size 100 kat büyütme (100x) sağlar.',
  },
  { type: 'title', text: '2. Maksimum Büyütme Efsanesi', level: 3 },
  {
    type: 'paragraph',
    html: 'Gerçek sınır oküler tarafından değil, tüpünüzün açıklığı (çapı) tarafından belirlenir. <br/>- <strong>Teorik sınır:</strong> mm cinsinden Açıklık × 2. <br/>- <strong>Gerçek sınır (Ortalama Seeing):</strong> Teleskobunuz ne olursa olsun, atmosferik türbülans nedeniyle nadiren 200x - 250x\'i aşarsınız. Daha fazlasını zorlamak sadece büyütülmüş bulanık bir leke verecektir.',
  },
  { type: 'title', text: '3. Çıkış Açıklığı: Parlaklık Faktörü', level: 3 },
  {
    type: 'paragraph',
    html: 'Çıkış açıklığı, okülerden gözünüze doğru çıkan ışık silindiridir. <br/>- <strong>7 mm\'den büyükse:</strong> Gözünüz o kadar açılamaz; ışık kaybedersiniz ve kelimenin tam anlamıyla paranızı çöpe atarsınız. <br/>- <strong>0,5 mm\'den küçükse:</strong> Görüntü o kadar karanlık olur ki detayları zar zor görürsünüz ve kendi gözünüzdeki "uçuşan cisimleri" (floaters) görmeye başlarsınız.',
  },
  {
    type: 'table',
    headers: ['Gözlemlenecek Nesne', 'Önerilen Büyütme', 'İdeal Açıklık', 'Görsel Deneyim'],
    rows: [
      ['Galaksiler ve Nebulalar', 'Düşük (25x - 50x)', '5 mm - 7 mm', 'Parlak görüntü, maksimum görüş alanı.'],
      ['Yıldız Kümeleri', 'Orta (80x - 120x)', '2 mm', 'Noktasal yıldızlar ve koyu gökyüzü arka planı.'],
      ['Gezegenler ve Ay', 'Yüksek (150x veya daha fazla)', '0,7 mm - 1 mm', 'Maksimum detay, daha küçük ve sönük görüntü.'],
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Görsel Gözlem mi Astrofotografi mi?',
    icon: 'mdi:camera-off',
    badge: 'Teknik Not',
    html: 'Bu hesaplamaların özel olarak <strong>görsel gözlem</strong> için olduğunu netleştirmek hayati önem taşır. Birçok yeni başlayan bu büyütmeleri astro-kameralara uygulamaya çalışır ve hüsrana uğrar; fotoğrafçılıkta hesaplama okülere değil, piksel boyutuna ve yay-saniyesi başına çözünürlüğe bağlıdır.',
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Atmosferik Kararlılığın (Seeing) Etkisi',
    icon: 'mdi:weather-windy',
    badge: 'Gözlem İpucu',
    html: 'En iyi okülerlere sahip olsanız bile, yıldızların şiddetle göz kırptığı geceler yüksek büyütme için uygun değildir. Bunun nedeni, ışığı dağıtan atmosferik türbülanstır (seeing). Gezegenleri gözlemlerken, düşük bir büyütme ile başlamanız ve görüntünün kararlılığını izlemeniz önerilir; eğer görüntü su altındaymış gibi görünüyorsa, daha fazla detay görmek için büyütmeyi azaltın. Çoğu kentsel alanda, 150x veya 200x pratik üst sınırdır.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: EyepieceCalculatorLocaleContent = {
  slug: 'okuler-hesaplayici',
  title,
  description,
  ui,
  faq,
  howTo,
  seo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};
