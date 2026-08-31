import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'goktasi-yagmuru-gozlem-planlayici';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Göktaşı Yağmuru Gözlem Zamanı Planlayıcı',
  description: 'Zirve saatlik oran ışık kirliliği ve Ay etkisi hesaplamalarıyla ideal göktaşı gözlem seanslarını planlayın.',
  ui: {
    title: 'Göktaşı Yağmuru Planlayıcı',
    subtitle: 'En iyi gözlem penceresini hesaplayın ve saatlik görünür oranı tahmin edin',
    presetLabel: 'Ana Göktaşı Yağmurunu Seçin',
    customZhrLabel: 'Özel Başucu Saatlik Oranı ZHR',
    latitudeLabel: 'Gözlemci Enlemi',
    bortleLabel: 'Bortle Karanlık Gökyüzü Sınıfı',
    moonPhaseLabel: 'Ay Aydınlanma Oranı',
    sessionHoursLabel: 'Planlanan Gözlem Saatleri',
    toLabel: 'kadar',
    classLabel: 'Sınıf',
    radiantTelemetryLabel: 'RADYANT TELEMETRİSİ',
    belowHorizonLabel: 'Ufkun altında',
    altLabel: 'Yük',
    moonLabel: 'Ay',
    hrUnit: '/ saat',
    presets: {
      perseids: 'Perseid (12 Ağu)',
      geminids: 'Geminid (14 Ara)',
      quadrantids: 'Quadrantid (4 Oca)',
      lyrids: 'Lyrid (22 Nis)',
      orionids: 'Orionid (21 Eki)',
      'eta-aquariids': 'Eta Aquarid (6 May)',
      leonids: 'Leonid (17 Kas)',
      custom: 'Özel Yağmur',
    },
    constellations: {
      Perseus: 'Perseus',
      Gemini: 'Gemini',
      Bootes: 'Bootes',
      Lyra: 'Lyra',
      Orion: 'Orion',
      Aquarius: 'Aquarius',
      Leo: 'Leo',
      Zenith: 'Zenit',
    },
    badgeLabels: {
      darkSky: 'Mükemmel Karanlık Gökyüzü',
      lightPollution: 'Yüksek Işık Kirliliği',
      favorableMoon: 'Uygun Ay Evresi',
      moonWashout: 'Ay Işığı Parlama Riski',
      primeWindow: 'Zirve Aktivite Penceresi',
    },
    bortleDescriptions: {
      2: 'Mükemmel karanlık gökyüzü',
      5: 'Kırsal şehir gökyüzü',
      8: 'Şehir içi ışık kirliliği',
    },
    moonPhaseNames: {
      new: 'Minimum Ay etkisi',
      quarter: 'Orta seviye Ay etkisi',
      full: 'Ciddi Ay parlaması',
    },
    resultsTitle: 'Gözlem Seansı Analizi',
    bestWindowLabel: 'En İyi Gözlem Zamanı',
    maxRateLabel: 'Maksimum Görünür Oran',
    skyQualityLabel: 'Gökyüzü Kalite İndeksi',
    hourlyChartTitle: 'Saatlik Tahmin ve Radyant Yüksekliği',
    checklistTitle: 'Gözlem Hazırlığı',
    checklistItems: [
      'Sayıma başlamadan önce gözlerinizin karanlığa alışması için en az 20 dakika bekleyin',
      'Gece görüşünüzü korumak için kırmızı filtreli fener kullanın',
      'Ufkun 45 derece üstüne bakacak şekilde rahat bir kamp sandalyesine uzanın',
      'Gözlem sırasında parlak telefon ekranlarına bakmaktan kaçının',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Başucu Saatlik Oranı ZHR ve Görünür Göktaşları',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Başucu Saatlik Oranı ZHR tam karanlık bir gökyüzünde radyant başucundayken tek bir gözlemcinin görebileceği teorik maksimum göktaşı sayısıdır. Gerçek şartlarda ışık kirliliği ve radyant yüksekliği nedeniyle görülen sayı daha düşüktür.',
    },
    {
      type: 'paragraph',
      html: 'Gözlem planlamasında geometrik faktörler önemlidir. Radyant ufka yaklaştıkça meteor izleri görüş alanı dışında kaldığından daha az göktaşı fark edilir.',
    },
    {
      type: 'list',
      items: [
        'Radyant yüksekliği görünür oranı yüksekliğin sinüsüne orantılı olarak düşürür',
        'Bortle skalasına göre ışık kirliliği zayıf meteor izlerini gizler',
        'Ay evresi gökyüzü arka planını aydınlatarak kontrastı azaltır',
        'Görüş alanı toplam kapsama alanını sınırlar',
      ],
    },
    {
      type: 'tip',
      title: 'Karanlık Gökyüzü Tavsiyesi',
      html: 'Bortle 2 veya 3 sınıfı bir noktada gözlem yapmak şehir içi bahçelere kıyasla görünen göktaşı sayısını katkat artırır.',
    },
    {
      type: 'title',
      text: 'Ay Evresi ve Şehir Işık Kirliliğinin Etkisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ay ışığı en büyük doğal kirlilik kaynağıdır. Dolunay sönük izleri silerek görünür oranı yüzde 70 ten fazla düşürür hatta karanlık kırsal bölgelerde bile etkilidir.',
    },
    {
      type: 'paragraph',
      html: 'Ay batımından sonraki veya doğumundan önceki saatleri seçmek gökyüzünde en yüksek kontrastı sağlar. Astronomik gece yarısı civarı saatler en yüksek karanlığı sunar.',
    },
    {
      type: 'title',
      text: 'Göktaşı Gözlem Gecesine Hazırlık ve Tavsiyeler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Göktaşı izlemek sabır ve sıcak giysiler gerektirir. Çıplak gözle gözlem yapmak teleskoplara kıyasla çok daha geniş bir görüş alanı sunar.',
    },
    {
      type: 'list',
      items: [
        'Yaz gecelerinde bile katkat sıcak giyinin',
        'Sandalye için uyku tulumu veya battaniye alın',
        'Vücut ısınızı korumak için sıcak içecekler bulundurun',
        'Parlak ateş toplarının saatini ve yönünü not edin',
      ],
    },
    {
      type: 'title',
      text: 'Teknik Hesaplama Yöntemi ve Tahmin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu araç zirve ZHR değerini radyant yüksekliği Bortle skalası ve Ay parlaklığı faktörleriyle birleştirerek gerçekçi oranlar sunar.',
    },
    {
      type: 'paragraph',
      html: 'Atmosferik sönümleme ve ışınım açısını hesaba katan hesaplayıcı amatör astronomlar için güvenilir sonuçlar üretir. Bu sayede hem yeni başlayanlar hem de deneyimli gözlemciler en verimli zaman dilimlerini kolayca belirleyebilirler. Önceden yapılan doğru bir gözlem planı gece boyunca en çok meteor izini yakalamanıza yardımcı olur. Gökyüzünü keyifle seyretmek için karanlık bir mekan seçin ve harika bir gece geçirin. Işık kirliliğinden uzak durmak gözlem kalitesini kat kat artıran en önemli faktördür.',
    },
  ],
  faq: [
    {
      question: 'Başucu Saatlik Oranı ZHR nedir',
      answer: 'ZHR zifiri karanlık gökyüzünde radyant başucundayken saatte görülebilecek teorik maksimum göktaşı sayısıdır.',
    },
    {
      question: 'Neden ZHR değerinden daha az göktaşı görüyorum',
      answer: 'ZHR mükemmel şartları varsayar. Işık kirliliği alçak radyant ve Ay ışığı gerçek sayıları azaltır.',
    },
    {
      question: 'Göktaşı izlemek için teleskop gerekli mi',
      answer: 'Hayır teleskoplar görüş alanını çok daraltır. En iyisi çıplak gözle gözlem yapmaktır.',
    },
  ],
  howTo: [
    {
      name: 'Yağmuru seçin',
      text: 'Perseid gibi bilinen bir yağmuru seçin veya ZHR değeri girin.',
    },
    {
      name: 'Enlemi ayarlayın',
      text: 'Kaydırıcıyı konumunuza göre ayarlayın.',
    },
    {
      name: 'Karanlık ve Ay durumunu ayarlayın',
      text: 'Bortle sınıfı ve Ay aydınlanmasını girin.',
    },
    {
      name: 'Tahmini inceleyin',
      text: 'En iyi zamanı bulmak için grafiği inceleyin.',
    },
  ],
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Göktaşı Yağmuru Gözlem Zamanı Planlayıcı',
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
          name: 'Başucu Saatlik Oranı ZHR nedir',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZHR zifiri karanlık gökyüzünde radyant başucundayken saatte görülebilecek teorik maksimum göktaşı sayısıdır.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Göktaşı Yağmuru Planlayıcı Nasıl Kullanılır',
      description: 'En iyi gözlem zamanını bulmak için izlenecek adımlar.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Yağmuru seçin',
          text: 'Perseid gibi bilinen bir yağmuru seçin veya ZHR değeri girin.',
        },
      ],
    },
  ],
};
