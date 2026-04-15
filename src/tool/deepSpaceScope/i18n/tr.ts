import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DeepSpaceScopeUI, DeepSpaceScopeLocaleContent } from '../index';

const slug = 'teleskop-erisileri';
const title = 'Teleskop Menzil Hesaplayıcı';
const description = 'Teleskobunuzun sınır parlaklığını hesaplayın ve gökyüzü koşullarınız altında ekipmanınızla hangi derin uzay nesnelerinin görülebileceğini keşfedin.';

const ui: DeepSpaceScopeUI = {
  toolTitle: 'Teleskop Menzili',
  apertureLabel: 'Açıklık',
  bortleLabel: 'Gökyüzü (Bortle)',
  limitMagLabel: 'Sınır Parlaklık',
  azimuthLabel: 'AZ',
  dragHint: 'Kozmosu keşfetmek için tıklayın ve sürükleyin (360°)',
  dragHintMobile: '360° keşfetmek için sürükleyin',
  planetLabel: 'Gezegenler',
  starLabel: 'Yıldızlar',
  deepSpaceLabel: 'Derin Uzay',
  magnitudeLabel: 'Parlaklık',
  coordinatesLabel: 'Koordinatlar',
  closeLabel: 'Kapat',
  altitudeLabel: 'İrtifa',
  defaultObjDesc: 'Büyüleyici bir derin uzay nesnesi. Parlaklık',
  bortleClassPrefix: 'Sınıf',
  deepSpaceObjects: [
    { name: 'Venüs', type: 'Planet', mag: -4.5, az: 270, alt: 30, icon: 'mdi:circle', color: '#fef08a', desc: 'Gece gökyüzündeki en parlak gezegen. Gün ışığında bile görülebilir.' },
    { name: 'Jüpiter', type: 'Planet', mag: -2.5, az: 180, alt: 40, icon: 'mdi:circle', color: '#fef9c3', desc: 'Güneş sisteminin devi. Dört Galilei uydusu dürbünle görülebilir.' },
    { name: 'Satürn', type: 'Planet', mag: 0.8, az: 220, alt: 35, icon: 'mdi:circle', color: '#fefce8', desc: 'Halkaları 60 mm\'lik bir teleskopla 50x büyütmede görülebilir.' },
    { name: 'Mars', type: 'Planet', mag: 1.5, az: 150, alt: 25, icon: 'mdi:circle', color: '#f87171', desc: 'Kızıl Gezegen. Karşı konumda -2.9, kavuşumda +1.8 kadir arasında değişir.' },
    { name: 'Sirius', type: 'Star', mag: -1.46, az: 145, alt: 50, icon: 'mdi:star-four-points', color: '#bfdbfe', desc: 'Gece gökyüzündeki en parlak yıldız. Sadece 8.6 ışık yılı uzaklıktadır.' },
    { name: 'Canopus', type: 'Star', mag: -0.74, az: 200, alt: 20, icon: 'mdi:star-four-points', color: '#fef9c3', desc: 'Güney Yarımküre\'de navigasyon için kullanılan en parlak ikinci yıldız.' },
    { name: 'Arcturus', type: 'Star', mag: -0.05, az: 60, alt: 55, icon: 'mdi:star-four-points', color: '#fdba74', desc: 'Çoban takımyıldızındaki turuncu dev. Dünya\'dan 36 ışık yılı uzakta.' },
    { name: 'Vega', type: 'Star', mag: 0.03, az: 40, alt: 70, icon: 'mdi:star-four-points', color: '#dbeafe', desc: 'Yaz Üçgeni\'nin bir köşesi. 0 kadir parlaklık için referans yıldız.' },
    { name: 'M42 Orion', type: 'Nebula', mag: 4.0, az: 140, alt: 45, icon: 'mdi:creation', color: '#a5b4fc', desc: 'Büyük Orion Bulutsusu, 1344 ışık yılı uzaklıkta. Genç yıldızlar için bir kreş.' },
    { name: 'M45 Pleiades', type: 'Cluster', mag: 1.6, az: 100, alt: 60, icon: 'mdi:creation', color: '#93c5fd', desc: 'Yedi Kız Kardeş (Ülker). 444 ışık yılı ile gökyüzündeki en ünlü açık küme.' },
    { name: 'M31 Andromeda', type: 'Galaxy', mag: 3.4, az: 30, alt: 50, icon: 'mdi:creation', color: '#d8b4fe', desc: 'En büyük komşu galaksi. 2.5 milyon ışık yılı uzakta, karanlık gökyüzünde çıplak gözle görülebilir.' },
    { name: 'M13 Herkül', type: 'Cluster', mag: 5.8, az: 80, alt: 65, icon: 'mdi:creation', color: '#fde047', desc: 'Herkül\'deki Büyük Küresel Küme. 25.100 ışık yılı uzaklıkta 300.000 yıldız içerir.' },
    { name: 'M57 Halka', type: 'Nebula', mag: 8.8, az: 50, alt: 58, icon: 'mdi:creation', color: '#67e8f9', desc: 'Çalgı (Lyra) takımyıldızındaki gezegenimsi bulutsu. Bir beyaz cüce tarafından atılan gaz halkası.' },
    { name: 'M81 Bode', type: 'Galaxy', mag: 6.9, az: 340, alt: 55, icon: 'mdi:creation', color: '#c4b5fd', desc: 'Büyük Ayı\'daki sarmal galaksi. M82 ile kütleçekimsel olarak etkileşim halindedir.' },
    { name: 'Plüton', type: 'Dwarf Planet', mag: 14.3, az: 195, alt: 22, icon: 'mdi:circle-small', color: '#cbd5e1', desc: 'En ünlü cüce gezegen. 250 mm veya daha büyük bir teleskop ve karanlık gökyüzü gerektirir.' },
  ],
};

const faq: DeepSpaceScopeLocaleContent['faq'] = [
  {
    question: 'Teleskobun sınır parlaklığı nedir?',
    answer: 'Teleskobun belirli gökyüzü koşulları altında tespit edebileceği en sönük nesnenin parlaklığıdır. Açıklık çapına (daha büyük açıklık = daha fazla ışık toplama) ve gökyüzü kalitesine (Bortle) bağlıdır. İnsan gözü en iyi koşullarda 6.5 kadire ulaşırken; 200 mm\'lik bir teleskop 13-14 kadire ulaşabilir.',
  },
  {
    question: 'Bortle ölçeği görebileceklerimi nasıl etkiler?',
    answer: 'Her Bortle seviyesi, görebileceğiniz parlaklığı yaklaşık 0.5 kadir azaltır. Bortle 2 altındaki 200 mm\'lik bir teleskop 14.5 kadire ulaşabilirken, Bortle 7 altında aynı açıklık sadece 11-12 kadire ulaşacaktır. Karanlık gökyüzü herhangi bir enstrümanın kapasitesini katlar.',
  },
  {
    question: 'Şehirden hangi nesneler görülebilir?',
    answer: 'Bortle 7-8 bir gökyüzünden (şehir içi), 150 mm\'lik bir teleskopla parlak gezegenleri büyük detaylarla, Ay\'ı, parlak açık kümeleri (M45, M44), küresel kümeleri (M13) ve M31 ile M81 gibi bazı parlak galaksileri çok detaylı olmasa da görebilirsiniz. Sönük bulutsular daha karanlık gökyüzü veya özel filtreler gerektirir.',
  },
  {
    question: 'Bulutsularda renk görmek için ne kadar açıklığa ihtiyacım var?',
    answer: 'İnsan gözü düşük ışıkta renk hassasiyetini kaybeder. M42 gibi salma bulutsularında renk görmek için en az 200-250 mm açıklığa ve Bortle 3-4 bir gökyüzüne ihtiyacınız vardır. Daha az açıklıkla bulutsular grimsi görünür, ancak astrofotoğrafçılıkla küçük teleskoplar bile muhteşem renkleri yakalar.',
  },
];

const howTo: DeepSpaceScopeLocaleContent['howTo'] = [
  { name: '1. Açıklığı ayarlayın', text: 'Teleskobunuzu simüle etmek için açıklık kaydırıcısını hareket ettirin. Menzil 50 mm\'den (dürbün) 400 mm\'ye (gelişmiş teleskop) kadar uzanır.' },
  { name: '2. Gökyüzü kalitesini ayarlayın', text: 'Gerçek sınır parlaklığı görmek için her zamanki gözlem yerinizin Bortle seviyesini ayarlayın.' },
  { name: '3. Yıldız haritasını keşfedin', text: 'Gökyüzünün tüm 360°\'sini keşfetmek ve ekipmanınızla hangi nesnelerin görülebildiğini keşfetmek için alanı sürükleyin.' },
  { name: '4. Nesnelere tıklayın', text: 'Ayrıntılı bilgilerini (tür, parlaklık ve açıklama) görmek için herhangi bir gökyüzü nesnesine dokunun.' },
];

const bibliography: DeepSpaceScopeLocaleContent['bibliography'] = [
  { name: 'Tam Messier Kataloğu', url: 'https://www.skyatnightmagazine.com/space-science/messier-catalogue' },
  { name: 'Stellarium Web - Etkileşimli Yıldız Haritası', url: 'https://stellarium-web.org/' },
];

const seo: DeepSpaceScopeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Teleskop Menzilinin Önemli Noktaları',
    items: [
      'Açıklık belirleyici faktördür: daha büyük çap, daha fazla ışık ve daha yüksek sınır parlaklık anlamına gelir.',
      'Karanlık gökyüzü (düşük Bortle), şehir gökyüzüne kıyasla 2-3 kadir kazandırabilir.',
      '200 mm\'lik bir teleskop Bortle 3\'te 13-14 kadire ulaşırken, Bortle 7\'de sadece 11 kadire ulaşır.',
      'Parlak gezegenler ve Ay karanlık gökyüzü gerektirmez - şehirden görülebilirler.',
    ],
  },
  { type: 'title', text: 'Astronomik Gözlem Fiziği: Açıklık ve Parlaklık', level: 2 },
  {
    type: 'paragraph',
    html: 'Bir teleskobun birincil görevi görüntüyü büyütmek değil, <strong>ışık toplamaktır</strong>. İnsan gözü tam karanlıkta yaklaşık 6-7 mm\'ye kadar genişleyen bir gözbebeğine sahiptir. 200 mm\'lik bir teleskop, 31.416 mm²\'lik bir toplama yüzeyine sahiptir; bu da insan gözbebeğinden <strong>800 kattan daha fazladır</strong> ve yüzlerce kat daha sönük nesneleri görmenizi sağlar.',
  },
  {
    type: 'paragraph',
    html: 'Parlaklık kazancı formülü: <code>Kazanç = 5 × log₁₀(Açıklık_mm / 6)</code>. 200 mm açıklık için: 5 × log₁₀(200/6) = 5 × 1.52 = 7.6 çıplak gözün üzerindeki ek kadir. Çıplak gözle (karanlık gökyüzü altında) görülebilen 6.5 kadiri eklediğimizde, 14.1 sınır parlaklığa ulaşırız.',
  },
  { type: 'title', text: 'Işık Kirliliğinin Menzil Üzerindeki Etkisi', level: 2 },
  {
    type: 'paragraph',
    html: 'Dünyanın en büyük teleskobuyla bile bir şehir merkezinden sönük galaksileri göremezsiniz. Gökyüzü arka planının parlaklığı gerekli kontrastı "siler". <strong>Bortle Ölçeği</strong> bu etkiyi miktarlandırır: her ek Bortle seviyesi, teleskop menzilinden yaklaşık 0.5 kadir çıkarır.',
  },
  {
    type: 'table',
    headers: ['Açıklık', 'Bortle 2 (Karanlık)', 'Bortle 4 (Kırsal)', 'Bortle 6 (Banliyö)', 'Bortle 8 (Şehir)'],
    rows: [
      ['70mm', 'Mag 12.0', 'Mag 10.8', 'Mag 9.5', 'Mag 8.3'],
      ['100mm', 'Mag 12.8', 'Mag 11.6', 'Mag 10.3', 'Mag 9.1'],
      ['150mm', 'Mag 13.6', 'Mag 12.4', 'Mag 11.1', 'Mag 9.9'],
      ['200mm', 'Mag 14.2', 'Mag 13.0', 'Mag 11.7', 'Mag 10.5'],
      ['300mm', 'Mag 15.0', 'Mag 13.8', 'Mag 12.5', 'Mag 11.3'],
    ],
  },
  {
    type: 'tip',
    title: 'Messier Kataloğu: Nesne Listeniz',
    html: 'Charles Messier, ünlü 110 nesnelik kataloğunu 1781 yılında kuyruklu yıldızlarla karıştırmamak için derledi. Bugün görsel gözlemciler için referans kataloğudur. 110 Messier nesnesi (M1-M110); Bortle 4-5 gökyüzünde 150 mm altındaki teleskoplarla erişilebilen bulutsuları, kümeleri ve galaksileri içerir.',
  },
  { type: 'title', text: 'Türe ve Zorluğa Göre Öne Çıkan Nesneler', level: 2 },
  {
    type: 'paragraph',
    html: 'Yeni başlayan gözlemciler için <strong>gezegenler</strong> en tatmin edici hedeftir: karanlık gökyüzü gerektirmezler ve küçük teleskoplarla bile şaşırtıcı detaylar sunarlar (40x\'te Satürn\'ün halkaları, 80x\'te Jüpiter\'in kuşakları, Mars\'ın kutup buzulları). <strong>Bulutsular</strong> ve <strong>galaksiler</strong> daha fazla açıklık ve daha karanlık gökyüzü gerektirir, ancak eşsiz güzellikteki manzaralarla ödüllendirirler.',
  },
  {
    type: 'stats',
    columns: 2,
    items: [
      { label: 'İnsan Gözü (7mm)', value: 'Mag 6.5', icon: 'mdi:eye' },
      { label: '70mm Refraktör', value: 'Mag 12', icon: 'mdi:telescope' },
      { label: '200mm Dobsonyen', value: 'Mag 14+', icon: 'mdi:telescope' },
      { label: 'HST Uzay', value: 'Mag 31', icon: 'mdi:satellite-variant' },
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

export const content: DeepSpaceScopeLocaleContent = {
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
