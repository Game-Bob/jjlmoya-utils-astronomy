import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'astronomy',
  title: 'Astronomy Tools',
  description: 'Free calculators and simulators for amateur astronomers. Plan your observation sessions and astrophotography.',
  seo: [
    { type: 'title', text: 'Amateur Astronomy: Tools to Explore the Universe', level: 2 },
    {
      type: 'paragraph',
      html: 'Amateur astronomy is one of the most exciting citizen sciences in the world. With the right equipment and the correct planning tools, anyone can explore galaxies millions of light-years away, contemplate nebulae where new stars are born, or study the surface of planets in our solar system. This suite of <strong>free astronomical calculators</strong> is designed to elevate your experience as an observer.',
    },
    {
      type: 'paragraph',
      html: 'From evaluating sky quality with the Bortle scale to precisely calculating the optical resolution of your telescope, each tool applies formulas validated by the international astronomical community so that every night you spend under the stars is productive and memorable.',
    },
    { type: 'title', text: 'Light Pollution: The Astronomer\'s Number One Enemy', level: 2 },
    {
      type: 'paragraph',
      html: 'We live in an increasingly illuminated world. <strong>Light pollution</strong> grows at a rate of 10% per year and erases the night sky for more than 80% of the world\'s population. The Bortle scale, with its 9 levels, is the international standard for quantifying this loss. Our dark sky simulator lets you interactively visualize how artificial light transforms the firmament, from the absolute black of a remote desert to the oppressive orange of a metropolis.',
    },
    { type: 'title', text: 'Your Telescope: Understanding its Real Capabilities', level: 2 },
    {
      type: 'paragraph',
      html: 'The market is full of telescopes that promise to "see Saturn with its rings" with any aperture. The reality is that the <strong>objective aperture</strong> is the most critical parameter. It determines how much light it collects (limiting magnitude) and how much detail it can resolve (resolving power). The reach and resolution calculators in this section give you concrete numbers: which object catalogs are within your reach and how much detail you can expect on planetary surfaces.',
    },
    {
      type: 'list',
      items: [
        '<strong>Bortle Scale:</strong> Evaluate your sky quality before traveling to an observation site.',
        '<strong>Telescope Reach:</strong> Calculate the limiting magnitude of your equipment based on aperture and sky conditions.',
        '<strong>500 Rule / NPF:</strong> Determine maximum exposure time for astrophotography without star trails.',
        '<strong>Optical Resolution:</strong> Know the Dawes and Rayleigh limit of your telescope.',
      ],
    },
    {
      type: 'tip',
      title: 'The First Step: Know Your Sky',
      html: 'Before investing in a larger telescope, consider traveling to a darker sky. A 150mm telescope under a Bortle 3 sky far outperforms a 300mm instrument under a Bortle 7. Sky darkness multiplies the performance of any equipment.',
    },
    { type: 'title', text: 'Deep Sky Astrophotography: Capture the Cosmos', level: 2 },
    {
      type: 'paragraph',
      html: 'Astrophotography has democratized access to the universe. With a standard DSLR camera and a wide-angle lens, you can capture the Milky Way in its splendor. With a telescope and an equatorial tracker, you can photograph nebulae and galaxies that surpass what the best observatories could see just decades ago. The key is in the <strong>exposure time</strong>: too short and you lose faint details; too long and you get star trails from Earth\'s rotation.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { label: 'Bortle Scale', value: '9 Levels', icon: 'mdi:weather-night' },
        { label: 'Limiting Magnitude', value: 'Calculable', icon: 'mdi:telescope' },
        { label: '500/NPF Rule', value: 'Precision', icon: 'mdi:timer-sand' },
        { label: 'Dawes Power', value: 'Resolution', icon: 'mdi:flare' },
      ],
    },
  ],
};
