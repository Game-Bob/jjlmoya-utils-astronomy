import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomi',
  title: 'Astronomi Araçları',
  description: 'Amatör astronomlar için ücretsiz hesaplayıcılar ve simülatörler. Gözlem seanslarınızı ve astrofotografi çalışmalarınızı planlayın.',
  seo: [
    { type: 'title', text: 'Amatör Astronomi: Evreni Keşfetmek İçin Araçlar', level: 2 },
    {
      type: 'paragraph',
      html: 'Amatör astronomi, dünyadaki en heyecan verici vatandaş bilimlerinden biridir. Doğru ekipman ve doğru planlama araçlarıyla herkes milyonlarca ışık yılı uzaklıktaki galaksileri keşfedebilir, yeni yıldızların doğduğu bulutsuları seyredebilir veya güneş sistemimizdeki gezegenlerin yüzeyini inceleyebilir. Bu <strong>ücretsiz astronomi hesaplayıcıları</strong> seti, bir gözlemci olarak deneyiminizi bir üst seviyeye taşımak için tasarlanmıştır.',
    },
    {
      type: 'paragraph',
      html: 'Gökyüzü kalitesini Bortle ölçeği ile değerlendirmekten teleskobunuzun optik çözünürlüğünü hassas bir şekilde hesaplamaya kadar her araç, yıldızların altında geçirdiğiniz her gecenin verimli ve unutulmaz olması için uluslararası astronomi topluluğu tarafından onaylanmış formülleri uygular.',
    },
    { type: 'title', text: 'Işık Kirliliği: Astronomun Bir Numaralı Düşmanı', level: 2 },
    {
      type: 'paragraph',
      html: 'Giderek daha fazla aydınlatılan bir dünyada yaşıyoruz. <strong>Işık kirliliği</strong> yılda %10 oranında artıyor ve dünya nüfusunun %80\'inden fazlası için gece gökyüzünü siliyor. 9 seviyeli Bortle ölçeği, bu kaybı ölçmek için uluslararası standarttır. Karanlık gökyüzü simülatörümüz, yapay ışığın gökyüzünü nasıl dönüştürdüğünü; uzak bir çöldeki mutlak siyahtan bir metropolün boğucu turuncusuna kadar etkileşimli olarak görselleştirmenize olanak tanır.',
    },
    { type: 'title', text: 'Teleskobunuz: Gerçek Yeteneklerini Anlamak', level: 2 },
    {
      type: 'paragraph',
      html: 'Piyasa, her açıklıkla "Satürn\'ü halkalarıyla görmeyi" vaat eden teleskoplarla doludur. Gerçek şu ki, <strong>objektif açıklığı</strong> en kritik parametredir. Ne kadar ışık topladığını (limit kadir) ve ne kadar detay çözebildiğini (çözme gücü) belirler. Bu bölümdeki menzil ve çözünürlük hesaplayıcıları size somut rakamlar verir: hangi gök cismi kataloglarının menzilinizde olduğu ve gezegen yüzeylerinde ne kadar detay bekleyebileceğiniz.',
    },
    {
      type: 'list',
      items: [
        '<strong>Bortle Ölçeği:</strong> Bir gözlem alanına gitmeden önce gökyüzü kalitenizi değerlendirin.',
        '<strong>Teleskop Menzili:</strong> Açıklık ve gökyüzü koşullarına göre ekipmanınızın limit kadirini hesaplayın.',
        '<strong>500 Kuralı / NPF:</strong> Yıldız izi olmadan astrofotografi için maksimum pozlama süresini belirleyin.',
        '<strong>Optik Çözünürlük:</strong> Teleskobunuzun Dawes ve Rayleigh limitini öğrenin.',
      ],
    },
    {
      type: 'tip',
      title: 'İlk Adım: Gökyüzünüzü Tanıyın',
      html: 'Daha büyük bir teleskoba yatırım yapmadan önce, daha karanlık bir gökyüzüne gitmeyi düşünün. Bortle 3 gökyüzü altındaki 150 mm\'lik bir teleskop, Bortle 7 altındaki 300 mm\'lik bir enstrümandan çok daha iyi performans gösterir. Gökyüzü karanlığı, her türlü ekipmanın performansını katlar.',
    },
    { type: 'title', text: 'Derin Uzay Astrofotografisi: Kozmosu Yakalayın', level: 2 },
    {
      type: 'paragraph',
      html: 'Astrofotografi, evrene erişimi demokratikleştirdi. Standart bir DSLR kamera ve geniş açılı bir lensle Samanyolu\'nu tüm ihtişamıyla yakalayabilirsiniz. Bir teleskop ve ekvatoral kundak ile, sadece birkaç on yıl önce en iyi gözlemevlerinin görebildiklerini geride bırakan bulutsuları ve galaksileri fotoğraflayabilirsiniz. Anahtar <strong>pozlama süresi</strong>ndedir: çok kısa olursa sönük detayları kaybedersiniz; çok uzun olursa Dünya\'nın dönüşünden dolayı yıldız izleri oluşur.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Bortle Ölçeği', value: '9 Seviye', icon: 'mdi:weather-night' },
        { label: 'Limit Kadir', value: 'Hesaplanabilir', icon: 'mdi:telescope' },
        { label: '500/NPF Kuralı', value: 'Hassasiyet', icon: 'mdi:timer-sand' },
        { label: 'Dawes Gücü', value: 'Çözünürlük', icon: 'mdi:flare' },
      ],
    },
  ],
};
