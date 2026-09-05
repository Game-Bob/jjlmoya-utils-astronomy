import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomi',
  title: 'Astronomi Araçları',
  description: 'Amatör astronomlar için ücretsiz hesaplayıcılar ve simülatörler. Gözlem seanslarınızı ve astrofotografi çalışmalarınızı planlayın.',
  seo: [
    { type: 'title', text: 'Amatör astronomi: her gözlem gecesi için bir rehber', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Gökyüzü her gece değişir ve onu gözlemleme biçiminiz de buna uyum sağlar. Bu <strong>ücretsiz astronomi araçları</strong> koleksiyonu, ilk sorudan bir gözlem seansını veya astrofotografi gecesini daha ilginç kılan küçük ayarlara kadar size eşlik eder.</p>',
    },
    {
      type: 'paragraph',
      html: '<p>Bulunduğunuz seviyeden başlayın. Yeni başlayanlar açık referanslar bulur, deneyimli gözlemciler büyütme, çözünürlük ve erişimi karşılaştırabilir, daha hassas ekipman kullananlar ise planlama ve saha koşullarıyla karşılaştırma için yararlı sayılara ulaşır.</p>',
    },
    { type: 'title', text: 'Yeni başlayanlar için: gökyüzünü kaybolmadan anlamak', level: 2 },
    {
      type: 'paragraph',
      html: '<p>İlk geceniz için formülleri ezberlemeniz gerekmez. Bortle ölçeğiyle aydınlık ve karanlık gökyüzünü karşılaştırın, okülerle büyütmenin ve görüş alanının nasıl değiştiğini görün ve teleskobunuza uygun hedefleri değerlendirin. Meteor yağmurunu izlemek için iyi bir zaman da seçebilirsiniz.</p>',
    },
    { type: 'title', text: 'Deneyimli gözlemciler için: bu gece ne arayacağını seçmek', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Ekipmanınızı tanıdığınızda doğru zaman ve yöntem önem kazanır. Açıklık, odak uzaklığı, oküler ve çıkış göz bebeğini birlikte değerlendirin, Dawes ve Rayleigh sınırlarını bir çift yıldızla karşılaştırın ve geceye uygun gözlem penceresini seçin.</p>',
    },
    {
      type: 'list',
      items: [
        '<strong>Gökyüzünü okuyun:</strong> Gözlem yerini seçmeden önce aydınlık ve karanlık gökyüzünü karşılaştırın.',
        '<strong>Ekipmanı tanıyın:</strong> Gerçekçi hedefler için açıklık, sınır kadiri, çözünürlük ve optik sınırları kullanın.',
        '<strong>Görüş alanını kurun:</strong> Oküleri değiştirmeden önce büyütmeyi, çıkış göz bebeğini ve görüş alanını karşılaştırın.',
        '<strong>Zamanı seçin:</strong> Meteor yağmurlarını ve gözlem süresini önemli koşullara göre planlayın.',
        '<strong>Görüntüyü hazırlayın:</strong> Başlangıç pozunu tahmin edin ve birleştirilecek kareleri düzenleyin.',
      ],
    },
    {
      type: 'tip',
      title: 'En iyi araç hâlâ başınızın üzerindeki gökyüzüdür',
      html: '<p>Her sonucu bir söz değil, yön gösteren bir pusula olarak görün. Atmosfer, odak, şeffaflık ve deneyim gördüklerinizi değiştirir. Saha notları ekipmanınıza uygun yöntemi anlamanıza yardım eder.</p>',
    },
    { type: 'title', text: 'Profesyoneller için: hesaplayın, karşılaştırın ve ayarlayın', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Gelişmiş ekipman, ortak bir gözlem veya tekrarlanacak bir görüntü için bu referanslar değişkenleri düzenler. 500 ve NPF\'yi başlangıç noktası alın, kareleri ve toplam stacking süresini planlayın, sonra köşeleri, histogramı ve gerçek koşulları kontrol edin.</p>',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Bortle Ölçeği', value: '9 seviye', icon: 'mdi:weather-night' },
        { label: 'Sınır kadiri', value: 'Hesaplanabilir', icon: 'mdi:telescope' },
        { label: '500/NPF referansı', value: 'Başlangıç noktası', icon: 'mdi:timer-sand' },
        { label: 'Dawes ölçütü', value: 'Çözünürlük', icon: 'mdi:flare' },
      ],
    },
  ],
};
