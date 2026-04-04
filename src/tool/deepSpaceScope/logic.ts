export interface DeepSpaceObject {
  name: string;
  type: string;
  mag: number;
  az: number;
  alt: number;
  icon: string;
  color: string;
  desc?: string;
}

export function calculateLimitingMagnitude(apertureSlider: number, bortle: number): number {
  const mm = 50 + (apertureSlider / 100) * 350;
  const nakedEyeMag = 7.9 - bortle * 0.5;
  const gainMag = 5 * Math.log10(mm / 6);
  let limit = nakedEyeMag + gainMag;
  if (bortle > 4) limit -= (bortle - 4) * 0.3;
  return Math.max(0, Math.min(limit, 16.5));
}

export function apertureSliderToMm(sliderValue: number): number {
  return Math.round(50 + (sliderValue / 100) * 350);
}

export const DEEP_SPACE_OBJECTS: DeepSpaceObject[] = [
  { name: 'Venus', type: 'Planeta', mag: -4.5, az: 270, alt: 30, icon: 'mdi:circle', color: 'text-yellow-200', desc: 'El planeta más brillante del cielo nocturno. Visible a plena luz del día.' },
  { name: 'Júpiter', type: 'Planeta', mag: -2.5, az: 180, alt: 40, icon: 'mdi:circle', color: 'text-yellow-100', desc: 'El gigante del sistema solar. Con binoculares se pueden ver sus cuatro lunas galileanas.' },
  { name: 'Saturno', type: 'Planeta', mag: 0.8, az: 220, alt: 35, icon: 'mdi:circle', color: 'text-yellow-50', desc: 'Sus anillos son visibles con un telescopio de 60mm a 50 aumentos.' },
  { name: 'Marte', type: 'Planeta', mag: 1.5, az: 150, alt: 25, icon: 'mdi:circle', color: 'text-red-400', desc: 'El planeta rojo. Varía de magnitud -2.9 en oposición a +1.8 en conjunción.' },
  { name: 'Sirio', type: 'Estrella', mag: -1.46, az: 145, alt: 50, icon: 'mdi:star-four-points', color: 'text-blue-200', desc: 'La estrella más brillante del cielo nocturno. Está a solo 8.6 años-luz.' },
  { name: 'Canopus', type: 'Estrella', mag: -0.74, az: 200, alt: 20, icon: 'mdi:star-four-points', color: 'text-yellow-100', desc: 'La segunda estrella más brillante, usada para navegar en el hemisferio sur.' },
  { name: 'Arcturus', type: 'Estrella', mag: -0.05, az: 60, alt: 55, icon: 'mdi:star-four-points', color: 'text-orange-300', desc: 'Gigante naranja en la constelación del Boyero. A 36 años-luz de la Tierra.' },
  { name: 'Vega', type: 'Estrella', mag: 0.03, az: 40, alt: 70, icon: 'mdi:star-four-points', color: 'text-blue-100', desc: 'Vértice del Triángulo de Verano. La estrella de referencia para magnitud 0.' },
  { name: 'M42 Orión', type: 'Nebulosa', mag: 4.0, az: 140, alt: 45, icon: 'mdi:creation', color: 'text-indigo-300', desc: 'La gran nebulosa de Orión, a 1344 años-luz. Vivero de estrellas jóvenes.' },
  { name: 'M45 Pléyades', type: 'Cúmulo', mag: 1.6, az: 100, alt: 60, icon: 'mdi:creation', color: 'text-blue-300', desc: 'Las Siete Hermanas. A 444 años-luz, el cúmulo abierto más famoso del cielo.' },
  { name: 'M31 Andrómeda', type: 'Galaxia', mag: 3.4, az: 30, alt: 50, icon: 'mdi:creation', color: 'text-purple-300', desc: 'La galaxia vecina más grande. A 2.5 millones de años-luz, visible a simple vista en cielos oscuros.' },
  { name: 'M13 Hércules', type: 'Cúmulo', mag: 5.8, az: 80, alt: 65, icon: 'mdi:creation', color: 'text-yellow-300', desc: 'El gran cúmulo globular de Hércules. Contiene 300.000 estrellas a 25.100 años-luz.' },
  { name: 'M57 Anillo', type: 'Nebulosa', mag: 8.8, az: 50, alt: 58, icon: 'mdi:creation', color: 'text-cyan-300', desc: 'Nebulosa planetaria en Lyra. Anillo de gas expulsado por una enana blanca.' },
  { name: 'M81 Bode', type: 'Galaxia', mag: 6.9, az: 340, alt: 55, icon: 'mdi:creation', color: 'text-violet-300', desc: 'Galaxia espiral en la Osa Mayor. Interactuando gravitatoriamente con M82.' },
  { name: 'Plutón', type: 'Planeta Enano', mag: 14.3, az: 195, alt: 22, icon: 'mdi:circle-small', color: 'text-slate-300', desc: 'El planeta enano más famoso. Requiere un telescopio de 250mm o más y cielos oscuros.' },
];
