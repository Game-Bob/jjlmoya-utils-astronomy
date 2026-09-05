import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'amatorastronomi',
  title: 'Astronomiverktyg',
  description: 'Gratis kalkylatorer och simulatorer för amatörastronomer. Planera dina observationspass och astrofotografering.',
  seo: [
    { type: 'title', text: 'Amatörastronomi: en guide för varje observationsnatt', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Himlen förändras varje natt, och ditt sätt att observera följer med. Den här samlingen <strong>gratis astronomiverktyg</strong> följer dig från den första frågan till de små justeringar som gör en observationssession eller en natt med astrofotografering mer intressant.</p>',
    },
    {
      type: 'paragraph',
      html: '<p>Börja där du befinner dig. Nybörjare får tydliga hållpunkter, erfarna observatörer kan jämföra förstoring, upplösning och räckvidd, och den som arbetar med krävande utrustning får siffror för planering och jämförelse med förhållandena på plats.</p>',
    },
    { type: 'title', text: 'För nybörjare: förstå himlen utan att gå vilse', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Du behöver inte lära dig formler utantill. Jämför ljusa och mörka himlar med Bortle-skalan, se hur förstoring och synfält ändras med okularet och bedöm vilka mål som passar ditt teleskop. Du kan också välja en bra tid för ett meteorregn.</p>',
    },
    { type: 'title', text: 'För erfarna observatörer: välj vad du vill se', level: 2 },
    {
      type: 'paragraph',
      html: '<p>När du känner din utrustning handlar det om rätt tid och rätt metod. Sätt öppning, brännvidd, okular och utgångspupill i relation till varandra, jämför Dawes och Rayleigh med en dubbelstjärna och välj ett observationsfönster som passar natten.</p>',
    },
    {
      type: 'list',
      items: [
        '<strong>Läs himlen:</strong> Jämför ljusa och mörka himlar innan du väljer observationsplats.',
        '<strong>Lär känna utrustningen:</strong> Använd öppning, gränsmagnitud, upplösning och optiska gränser för realistiska mål.',
        '<strong>Forma synfältet:</strong> Jämför förstoring, utgångspupill och synfält innan du byter okular.',
        '<strong>Välj rätt tid:</strong> Planera meteorregn och observationstid efter de förhållanden som spelar roll.',
        '<strong>Förbered bilden:</strong> Uppskatta en första exponering och ordna bilderna som ska staplas.',
      ],
    },
    {
      type: 'tip',
      title: 'Det bästa instrumentet är fortfarande himlen ovanför dig',
      html: '<p>Se varje resultat som en kompass, inte som ett löfte. Atmosfär, fokus, transparens och erfarenhet påverkar det du ser. Dina fältanteckningar visar vad som fungerar för din utrustning och din himmel.</p>',
    },
    { type: 'title', text: 'För yrkesobservatörer: beräkna, jämför och justera', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Med avancerad utrustning, en utflykt för flera personer eller en bild som ska upprepas hjälper riktlinjerna dig att samordna variablerna. Använd 500 och NPF som startpunkt, planera bilder och stackingtid, och kontrollera sedan hörn, histogram och verkliga förhållanden.</p>',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Bortle-skalan', value: '9 nivåer', icon: 'mdi:weather-night' },
        { label: 'Gränsmagnitud', value: 'Beräkningsbar', icon: 'mdi:telescope' },
        { label: '500/NPF-riktmärke', value: 'Startpunkt', icon: 'mdi:timer-sand' },
        { label: 'Dawes-kriterium', value: 'Upplösning', icon: 'mdi:flare' },
      ],
    },
  ],
};
