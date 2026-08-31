import type { MeteorShowerObservingPlannerLocaleContent } from '../ui';
import { METEOR_PLANNER_BIBLIOGRAPHY } from '../bibliography';

const slug = 'goktasi-yagmuru-gozlem-planlayici';

export const content: MeteorShowerObservingPlannerLocaleContent = {
  slug,
  title: 'Goktasi Yagmuru Gozlem Zaman Planlayici',
  description: 'Zirve saatlik oran ZHR ve ay isigi etkisini hesaplayarak en iyi meteor gozlem zaman araliklarini belirleyin.',
  ui: {
    title: 'Goktasi Yagmuru Planlayici',
    subtitle: 'En iyi gozlem pencerelerini hesaplayin ve saatlik gorunur orani tahmin edin',
    presetLabel: 'Ana Goktasi Yagmurunu Secin',
    customZhrLabel: 'Ozel Zenit Saatlik Orani ZHR',
    latitudeLabel: 'Gozlemci Enlemi',
    bortleLabel: 'Bortle Gok Yuzu Karanlik Sinifi',
    moonPhaseLabel: 'Ay Aydinlanma Orani',
    sessionHoursLabel: 'Planlanan Gozlem Saatleri',
    presets: {
      perseids: 'Perseid (12 Agos)',
      geminids: 'Geminid (14 Ara)',
      quadrantids: 'Quadrantid (4 Oca)',
      lyrids: 'Lyrid (22 Nis)',
      orionids: 'Orionid (21 Eki)',
      'eta-aquariids': 'Eta Aquarid (6 May)',
      leonids: 'Leonid (17 Kas)',
      custom: 'Ozel Yagmur',
    },
    bortleDescriptions: {
      2: 'Mukemmel Karanlik Gok Yuzu',
      5: 'Kentsel Gok Yuzu',
      8: 'Yoğun Sehir Isik Kirliligi',
    },
    moonPhaseNames: {
      new: 'Minimum Ay Isigi',
      quarter: 'Orta Derece Ay Etkisi',
      full: 'Yüksek Ay Parlakligi',
    },
    resultsTitle: 'Gozlem Oturumu Analizi',
    bestWindowLabel: 'En İyi Gozlem Penceresi',
    maxRateLabel: 'Maksimum Gorunur Oran',
    skyQualityLabel: 'Gok Yuzu Kalite Indeksi',
    hourlyChartTitle: 'Saatlik Tahmin ve Radyant Yuksekligi',
    checklistTitle: 'Gozlem Hazirlik Listesi',
    checklistItems: [
      'Gozlerinizin karanliga uyum saglamasi icin en az 20 dakika bekleyin',
      'Gece gorusunu korumak icin kirmizi filtreli fener kullanin',
      'Ufkun 45 derece uzerine bakacak sekilde katlanir sandalyeye uzanin',
      'Gozlem sirasinda parlak telefon ekranlarina bakmaktan kacinin',
    ],
  },
  seo: [
    {
      type: 'title',
      text: 'Zenit Saatlik Oran ZHR ve Gorunur Meteorlari Anlamak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zenit Saatlik Oran ZHR tek bir gozlemcinin tam karanlik bir gokyuzunde radyant tam tepedeyken gorebilecegi teorik maksimum meteor sayisini ifade eder. Gercek gozlem kosullarinda gorulebilen meteor sayisi isik kirliligi ve yukseklik nedeniyle daha dusuktur. Sehir merkezlerindeki yapay isiklar zayif meteor izlerinin algilanmasini zorlastirir. Bu nedenle dogru konumu secmek her gozlemci icin hayati onem tasir.',
    },
    {
      type: 'paragraph',
      html: 'En iyi gozlem pencerelerini hesaplamak geometrik ve cevresel faktörleri dikkate almayi gerektirir. Radyant ufka yakin oldugunda daha az meteor izlenebilir. Radyant yukseklik acisi ciplak gozle yakalanabilecek meteor oranini dogrudan etkiler. En yuksek konum saatlerini hedeflemek en verimli sonuclari verir.',
    },
    {
      type: 'list',
      items: [
        'Radyant yuksekligi gorunur orani sinus acisiyla orantili olarak azaltir',
        'Bortle skalasindaki isik kirliligi zayif meteor izlerini bastirir',
        'Ay evresi gokyuzunde arka plan parlakligi olusturur',
        'Gozlemcinin görüş alani kapsanan gokyuzu alanini sinirlar',
      ],
    },
    {
      type: 'tip',
      title: 'Karanlik Gok Yuzu Tavsiyesi',
      html: 'Bortle 2 veya 3 sinifi bir konumdan gozlem yapmak gorulebilen zayif meteor sayisini sehir balkonlarina gore onemli olcude artirir.',
    },
    {
      type: 'title',
      text: 'Ay Evresi ve Isik Kirliliginin Etkisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ay isigi meteor yagmurlari sirasinda en buyuk dogal isik kirliligi kaynagidir. Dolunay zayif meteor izlerini kapatir ve gorunur orani yuzde 70 ten fazla dusurur. Kırsal bolgelerdeki karanlik gokyuzunde bile Ay etkisi hissedilir. Yeni ay zamanlari en ideal zaman dilimidir.',
    },
    {
      type: 'paragraph',
      html: 'Ay batimindan sonra veya dogumundan onceki saatleri secmeniz gece gokyuzu ile en yuksek kontrasti saglar. Gece yarisi saatleri en karanlik gokyuzunu sunar.',
    },
    {
      type: 'title',
      text: 'Meteor Gozlem Gecesine Nasil Hazirlanilir',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basarili meteor takibi sabir ve uygun giyim gerektirir. Çiplak gozle gozlem teleskoplara gore cok daha genis bir görüş alani sunar.',
    },
    {
      type: 'list',
      items: [
        'Yaz gecelerinde bile kat kat sicak tutan giysiler giyin',
        'Katlanir sandalye icin uyku tulumu veya battaniye alin',
        'Vucut ısınızı korumak icin sicak icecekler bulundurun',
        'Parlak ates toplarinin saatini ve yönunu not edin',
      ],
    },
    {
      type: 'title',
      text: 'Teknik Hesaplama Metodolojisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu planlayici zirve ZHR degerini yukseklik faktörleri Bortle duzeltmeleri ve Ay parlakligi ile carparak efektif saatlik orani tahmin eder ve gercekci beklentiler sunar.',
    },
  ],
  faq: [
    {
      question: 'Zenit Saatlik Oran ZHR Nedir?',
      answer: 'ZHR karanlik bir gokyuzunde radyant tepedeyken bir saatte gorulebilecek teorik maksimum meteor sayisidir.',
    },
    {
      question: 'Neden ZHR rakamindan daha az meteor goruyorum?',
      answer: 'ZHR rakamlari mukemmel kosullari varsayar. Isik kirliligi dusuk radyant ve Ay isigi gercek sayilari dusurur.',
    },
    {
      question: 'Meteor izlemek icin teleskop gerekli midir?',
      answer: 'Hayir teleskoplar görüş alanini cok fazla daraltir. Çiplak gozle izlemek en iyi yontemdir.',
    },
  ],
  howTo: {
    name: 'Goktasi Yagmuru Planlayicisi Nasil Kullanilir',
    description: 'Adim adim meteor gozlem zamani belirleme rehberi.',
    steps: [
      {
        name: 'Meteor Yagmurunu Secin',
        text: 'Perseid gibi bilinen bir yagmuru secin veya kendi ZHR degerinizi girin.',
      },
      {
        name: 'Enleminizi Ayarlayin',
        text: 'Kaydiriciyi bulundugunuz konumun enlemine getirin.',
      },
      {
        name: 'Karanlik ve Ay Evresini Ayarlayin',
        text: 'Bortle sinifinizi ve Ay parlaklik oranini girin.',
      },
      {
        name: 'Tahmini Inceleyin',
        text: 'En uygun saati bulmak icin grafigi kontrol edin.',
      },
    ],
  },
  bibliography: METEOR_PLANNER_BIBLIOGRAPHY,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Goktasi Yagmuru Gozlem Zaman Planlayici',
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
          name: 'Zenit Saatlik Oran ZHR Nedir?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZHR karanlik bir gokyuzunde radyant tepedeyken bir saatte gorulebilecek teorik maksimum meteor sayisidir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Goktasi Yagmuru Planlayicisi Nasil Kullanilir',
      description: 'Adim adim meteor gozlem zamani belirleme rehberi.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Meteor Yagmurunu Secin',
          text: 'Perseid gibi bilinen bir yagmuru secin veya kendi ZHR degerinizi girin.',
        },
      ],
    },
  ],
};
