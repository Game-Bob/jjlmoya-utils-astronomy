import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'amateur-astronomie',
  title: 'Astronomie instrumenten',
  description: 'Gratis rekenmachines en simulators voor amateurasronomen. Plan uw observatiesessies en astrofotografie.',
  seo: [
    { type: 'title', text: 'Amateurastronomie: Instrumenten om het Universum te Verkennen', level: 2 },
    {
      type: 'paragraph',
      html: 'Amateurastronomie is een van de meest opwindende burgerwetenschappen ter wereld. Met de juiste uitrusting en de juiste planningstools kan iedereen sterrenstelsels op miljoenen lichtjaren afstand verkennen, nevels aanschouwen waar nieuwe sterren worden geboren, of het oppervlak van planeten in ons zonnestelsel bestuderen. Deze suite van <strong>gratis astronomische rekenmachines</strong> is ontworpen om uw ervaring als waarnemer te verbeteren.',
    },
    {
      type: 'paragraph',
      html: 'Van het evalueren van de hemelkwaliteit met de Bortle-schaal tot het nauwkeurig berekenen van de optische resolutie van uw telescoop, elk instrument past formules toe die zijn gevalideerd door de internationale astronomische gemeenschap, zodat elke nacht die u onder de sterren doorbrengt productief en gedenkwaardig is.',
    },
    { type: 'title', text: 'Lichtvervuiling: De Nummer Eén Vijand van de Astronoom', level: 2 },
    {
      type: 'paragraph',
      html: 'We leven in een steeds meer verlichte wereld. <strong>Lichtvervuiling</strong> groeit met een snelheid van 10% per jaar en wist de nachtelijke hemel uit voor meer dan 80% van de wereldbevolking. De Bortle-schaal, met zijn 9 niveaus, is de internationale standaard voor het kwantificeren van dit verlies. Onze donkere hemel-simulator laat u interactief visualiseren hoe kunstlicht het firmament transformeert, van het absolute zwart van een afgelegen woestijn tot het drukkende oranje van een metropool.',
    },
    { type: 'title', text: 'Uw Telescoop: De Echte Mogelijkheden Begrijpen', level: 2 },
    {
      type: 'paragraph',
      html: 'De markt is vol telescopen die beloven "Saturnus met zijn ringen" te zien met elke opening. De realiteit is dat de <strong>objectiefopening</strong> de meest kritische parameter is. Het bepaalt hoeveel licht er wordt verzameld (grensmagnitude) and hoeveel detail er kan worden gescheiden (scheidend vermogen). De rekenmachines voor bereik en resolutie in deze sectie geven u concrete cijfers: welke objectcatalogi binnen uw bereik liggen en hoeveel detail u kunt verwachten op planetaire oppervlakken.',
    },
    {
      type: 'list',
      items: [
        '<strong>Bortle-schaal:</strong> Evalueer uw hemelkwaliteit voordat u naar een observatielocatie reist.',
        '<strong>Telescoopbereik:</strong> Bereken de grensmagnitude van uw uitrusting op basis van opening en hemelomstandigheden.',
        '<strong>500-regel / NPF:</strong> Bepaal de maximale belichtingstijd voor astrofotografie zonder sterrensporen.',
        '<strong>Optische Resolutie:</strong> Ken de Dawes- en Rayleigh-limiet van uw telescoop.',
      ],
    },
    {
      type: 'tip',
      title: 'De Eerste Stap: Ken uw Hemel',
      html: 'Voordat u investeert in een grotere telescoop, overweeg om naar een donkerdere hemel te reizen. Een 150mm telescoop onder een Bortle 3 hemel presteert veel beter dan een 300mm instrument onder een Bortle 7. De donkerte van de hemel vermenigvuldigt de prestaties van elke uitrusting.',
    },
    { type: 'title', text: 'Deep Sky Astrofotografie: De Kosmos Vastleggen', level: 2 },
    {
      type: 'paragraph',
      html: 'Astrofotografie heeft de toegang tot het universum gedemocratiseerd. Met een standaard DSLR-camera en een groothoeklens kunt u de Melkweg in al zijn pracht vastleggen. Met een telescoop en een equatoriale montering kunt u nevels en sterrenstelsels fotograferen die overtreffen wat de beste observatoria decennia geleden konden zien. De sleutel ligt in de <strong>belichtingstijd</strong>: te kort en u verliest zwakke details; te lang en u krijgt sterrensporen door de roratie van de aarde.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Bortle-schaal', value: '9 Niveaus', icon: 'mdi:weather-night' },
        { label: 'Grensmagnitude', value: 'Berekenbaar', icon: 'mdi:telescope' },
        { label: '500/NPF-regel', value: 'Precisie', icon: 'mdi:timer-sand' },
        { label: 'Dawes Vermogen', value: 'Resolutie', icon: 'mdi:flare' },
      ],
    },
  ],
};
