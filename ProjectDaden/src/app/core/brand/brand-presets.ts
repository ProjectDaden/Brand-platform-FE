import { BrandSession } from './brand-session.model';

export interface FontPair {
  heading: string[];
  body: string[];
}

const FONT_PAIRS: Record<string, FontPair> = {
  Jester: {
    heading: ['Bangers', 'Fredoka One', 'Luckiest Guy'],
    body: ['Comic Neue', 'Roboto', 'Open Sans'],
  },
  Creator: {
    heading: ['Montserrat', 'Playfair Display', 'Raleway'],
    body: ['Lato', 'Source Sans 3', 'Poppins'],
  },
  Hero: {
    heading: ['Oswald', 'Anton', 'Impact'],
    body: ['Roboto', 'Arial', 'Helvetica'],
  },
  Caregiver: {
    heading: ['Lora', 'Merriweather', 'Georgia'],
    body: ['Open Sans', 'Poppins', 'Source Sans 3'],
  },
  Explorer: {
    heading: ['Fjalla One', 'Patua One', 'Cabin'],
    body: ['Lato', 'Roboto', 'Montserrat'],
  },
  Innocent: {
    heading: ['Pacifico', 'Lobster', 'Dancing Script'],
    body: ['Open Sans', 'Lora', 'Comic Neue'],
  },
  Sage: {
    heading: ['Libre Baskerville', 'Garamond', 'Playfair Display'],
    body: ['Georgia', 'Merriweather', 'Source Sans 3'],
  },
  Magician: {
    heading: ['Cinzel', 'Alegreya', 'Playfair Display'],
    body: ['Lato', 'Roboto', 'Poppins'],
  },
  Rebel: {
    heading: ['Bebas Neue', 'Staatliches', 'Oswald'],
    body: ['Arial', 'Helvetica', 'Roboto'],
  },
  Ruler: {
    heading: ['Playfair Display', 'Cormorant Garamond', 'Old Standard TT'],
    body: ['Georgia', 'Lora', 'Libre Baskerville'],
  },
  Everyman: {
    heading: ['Inter', 'Roboto Slab', 'Bitter'],
    body: ['Inter', 'Open Sans', 'Lato'],
  },
  Lover: {
    heading: ['Great Vibes', 'Sacramento', 'Parisienne'],
    body: ['Lora', 'Merriweather', 'Open Sans'],
  },
};

export interface TypeScale {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  body: string;
  small: string;
  detail: string;
}

export const TYPE_SCALES: { name: string; value: TypeScale }[] = [
  {
    name: '1.067 - Minor Second',
    value: { h1: '1.29rem', h2: '1.21rem', h3: '1.14rem', h4: '1.07rem', h5: '1rem', h6: '0.94rem', body: '1rem', small: '0.94rem', detail: '0.88rem' },
  },
  {
    name: '1.125 - Major Second',
    value: { h1: '1.60rem', h2: '1.42rem', h3: '1.27rem', h4: '1.13rem', h5: '1rem', h6: '0.89rem', body: '1rem', small: '0.89rem', detail: '0.79rem' },
  },
  {
    name: '1.2 - Minor Third',
    value: { h1: '2.07rem', h2: '1.73rem', h3: '1.44rem', h4: '1.20rem', h5: '1rem', h6: '0.83rem', body: '1rem', small: '0.83rem', detail: '0.69rem' },
  },
  {
    name: '1.25 - Major Third',
    value: { h1: '2.44rem', h2: '1.95rem', h3: '1.56rem', h4: '1.25rem', h5: '1rem', h6: '0.80rem', body: '1rem', small: '0.80rem', detail: '0.64rem' },
  },
  {
    name: '1.33 - Perfect Fourth',
    value: { h1: '3.14rem', h2: '2.36rem', h3: '1.77rem', h4: '1.33rem', h5: '1rem', h6: '0.75rem', body: '1rem', small: '0.75rem', detail: '0.56rem' },
  },
  {
    name: '1.414 - Augmented Fourth',
    value: { h1: '4.00rem', h2: '2.83rem', h3: '2.00rem', h4: '1.41rem', h5: '1rem', h6: '0.71rem', body: '1rem', small: '0.71rem', detail: '0.50rem' },
  },
  {
    name: '1.5 - Perfect Fifth',
    value: { h1: '5.06rem', h2: '3.38rem', h3: '2.25rem', h4: '1.50rem', h5: '1rem', h6: '0.67rem', body: '1rem', small: '0.67rem', detail: '0.44rem' },
  },
  {
    name: '1.618 - Golden Ratio',
    value: { h1: '6.85rem', h2: '4.24rem', h3: '2.62rem', h4: '1.62rem', h5: '1rem', h6: '0.62rem', body: '1rem', small: '0.62rem', detail: '0.38rem' },
  },
  {
    name: '1.66 - Major Sixth',
    value: { h1: '7.60rem', h2: '4.58rem', h3: '2.76rem', h4: '1.66rem', h5: '1.00rem', h6: '0.60rem', body: '1rem', small: '0.60rem', detail: '0.36rem' },
  },
  {
    name: '4px Grid - Linear',
    value: { h1: '3rem', h2: '2.5rem', h3: '2rem', h4: '1.75rem', h5: '1.5rem', h6: '1.25rem', body: '1rem', small: '0.875rem', detail: '0.75rem' },
  },
  {
    name: '8px Grid - Standard',
    value: { h1: '4rem', h2: '3.5rem', h3: '3rem', h4: '2.5rem', h5: '2rem', h6: '1.5rem', body: '1rem', small: '0.875rem', detail: '0.75rem' },
  },
  {
    name: '4px Grid - Exponential',
    value: { h1: '4rem', h2: '3rem', h3: '2.25rem', h4: '1.75rem', h5: '1.5rem', h6: '1.25rem', body: '1rem', small: '0.875rem', detail: '0.75rem' },
  },
];

export const TYPE_SCALE_NAMES = TYPE_SCALES.map((scale) => scale.name);

export function typeScaleFor(name: string): TypeScale {
  return TYPE_SCALES.find((scale) => scale.name === name)?.value ?? TYPE_SCALES[2].value;
}

const ARCHETYPE_HUES: Record<string, number> = {
  ruler: 315,
  creator: 340,
  innocent: 75,
  sage: 220,
  explorer: 105,
  rebel: 345,
  magician: 280,
  hero: 35,
  lover: 345,
  jester: 70,
  everyman: 130,
  caregiver: 160,
};

const TONE_PRESETS: Record<string, Pick<BrandSession, 'formality' | 'playfulness' | 'respect' | 'emotion'>> = {
  Jester: { formality: 20, playfulness: 80, respect: 40, emotion: 60 },
  Sage: { formality: 80, playfulness: 20, respect: 90, emotion: 40 },
  Creator: { formality: 50, playfulness: 60, respect: 70, emotion: 70 },
  Hero: { formality: 60, playfulness: 40, respect: 70, emotion: 75 },
  Caregiver: { formality: 55, playfulness: 40, respect: 85, emotion: 65 },
  Explorer: { formality: 35, playfulness: 55, respect: 60, emotion: 70 },
  Innocent: { formality: 40, playfulness: 70, respect: 80, emotion: 60 },
  Magician: { formality: 55, playfulness: 45, respect: 60, emotion: 70 },
  Rebel: { formality: 25, playfulness: 65, respect: 20, emotion: 70 },
  Ruler: { formality: 85, playfulness: 20, respect: 75, emotion: 40 },
  Everyman: { formality: 45, playfulness: 45, respect: 70, emotion: 50 },
  Lover: { formality: 40, playfulness: 55, respect: 80, emotion: 75 },
};

export function titleCaseArchetype(value: string): string {
  const cleaned = value.trim();
  if (!cleaned) {
    return '';
  }
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
}

export function fontsForArchetype(archetype: string): FontPair {
  const key = titleCaseArchetype(archetype);
  return FONT_PAIRS[key] ?? FONT_PAIRS['Everyman'];
}

export function toneForArchetype(archetype: string): Pick<BrandSession, 'formality' | 'playfulness' | 'respect' | 'emotion'> {
  const key = titleCaseArchetype(archetype);
  return TONE_PRESETS[key] ?? { formality: 50, playfulness: 50, respect: 50, emotion: 50 };
}

export type ToneAxisKey = 'formality' | 'playfulness' | 'respect' | 'emotion';

export interface ToneAxis {
  key: ToneAxisKey;
  label: string;
  left: string;
  right: string;
  samples: [string, string, string];
}

export const TONE_AXES: ToneAxis[] = [
  {
    key: 'formality',
    label: 'Formality',
    left: 'Casual',
    right: 'Professional',
    samples: [
      "Hey, we're super chill and laid-back.",
      "We're glad you're here with us.",
      'We are delighted to present our professional services.',
    ],
  },
  {
    key: 'playfulness',
    label: 'Playfulness',
    left: 'Serious',
    right: 'Playful',
    samples: [
      "Let's get straight to the point.",
      "Let's dive in and see what's up!",
      'Ready for some fun and wacky adventures?',
    ],
  },
  {
    key: 'respect',
    label: 'Respect',
    left: 'Irreverent',
    right: 'Respectful',
    samples: [
      "Rules? Who needs 'em!",
      "We're cool with you, no worries.",
      'We honor your presence with the utmost respect.',
    ],
  },
  {
    key: 'emotion',
    label: 'Emotion',
    left: 'Matter-of-fact',
    right: 'Enthusiastic',
    samples: [
      "Here's the info you need.",
      "We're happy to share this with you!",
      "We're SO excited to meet you!",
    ],
  },
];

export function toneBand(value: number): 0 | 1 | 2 {
  if (value <= 30) {
    return 0;
  }
  if (value <= 70) {
    return 1;
  }
  return 2;
}

export function toneSample(key: ToneAxisKey, value: number): string {
  const axis = TONE_AXES.find((item) => item.key === key);
  return axis?.samples[toneBand(value)] ?? '';
}

export function combinedToneSample(session: Pick<BrandSession, ToneAxisKey>): string {
  return TONE_AXES.map((axis) => toneSample(axis.key, session[axis.key])).join(' ');
}

export interface ToneUi {
  radius: string;
  padX: string;
  padY: string;
  weight: number;
  hoverScale: number;
  hoverRotate: string;
  letterSpacing: string;
}

export function toneUi(session: Pick<BrandSession, ToneAxisKey>): ToneUi {
  const formality = session.formality / 100;
  const playfulness = session.playfulness / 100;
  const respect = session.respect / 100;
  const emotion = session.emotion / 100;
  const radius = Math.max(4, 24 - formality * 18 + playfulness * 18);
  const padX = 12 + (1 - formality) * 10 + playfulness * 4;
  const padY = 8 + (1 - formality) * 6 + emotion * 4;
  const weight = Math.round(300 + formality * 300 + emotion * 200);
  const hoverScale = 1 + playfulness * 0.04 + emotion * 0.08;
  const hoverRotate = `${(playfulness * 3 - (1 - respect) * 2).toFixed(1)}deg`;
  const letterSpacing = `${(formality * 0.02 + respect * 0.01).toFixed(3)}em`;

  return {
    radius: `${Math.round(radius)}px`,
    padX: `${Math.round(padX)}px`,
    padY: `${Math.round(padY)}px`,
    weight,
    hoverScale: Number(hoverScale.toFixed(3)),
    hoverRotate,
    letterSpacing,
  };
}

export function hueForArchetype(archetype: string): number {
  return ARCHETYPE_HUES[archetype.trim().toLowerCase()] ?? 220;
}

export function normalizeHue(hue: number): number {
  return ((hue % 360) + 360) % 360;
}

export function hslToHex(hue: number, saturation: number, lightness: number): string {
  const h = normalizeHue(hue);
  const s = saturation / 100;
  const l = lightness / 100;
  const a = s * Math.min(l, 1 - l);
  const channel = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)));
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${channel(0)}${channel(8)}${channel(4)}`;
}

export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const raw = hex.replace('#', '').trim();
  const normalized = raw.length === 3 ? raw.split('').map((char) => char + char).join('') : raw;
  const value = Number.parseInt(normalized, 16);
  const red = ((value >> 16) & 255) / 255;
  const green = ((value >> 8) & 255) / 255;
  const blue = (value & 255) / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;
  const delta = max - min;
  let hue = 0;
  let saturation = 0;

  if (delta !== 0) {
    saturation = delta / (1 - Math.abs(2 * lightness - 1));
    if (max === red) {
      hue = ((green - blue) / delta) % 6;
    } else if (max === green) {
      hue = (blue - red) / delta + 2;
    } else {
      hue = (red - green) / delta + 4;
    }
    hue *= 60;
    if (hue < 0) {
      hue += 360;
    }
  }

  return {
    h: Math.round(hue),
    s: Math.round(saturation * 100),
    l: Math.round(lightness * 100),
  };
}

export function hexToRgb(hex: string): string {
  const raw = hex.replace('#', '').trim();
  const normalized = raw.length === 3 ? raw.split('').map((char) => char + char).join('') : raw;
  const value = Number.parseInt(normalized, 16);
  if (Number.isNaN(value)) {
    return '0, 0, 0';
  }
  return `${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}`;
}

export function colorAtLightness(hex: string, lightness: number): string {
  const { h, s } = hexToHsl(hex);
  return hslToHex(h, s, lightness);
}

export function paletteForTheory(theory: string, hue: number): { primary: string; secondary: string; tertiary: string } {
  const h = normalizeHue(hue);
  switch (theory) {
    case 'Simple':
      return {
        primary: hslToHex(h, 70, 48),
        secondary: hslToHex(h, 45, 70),
        tertiary: hslToHex(h, 18, 92),
      };
    case 'Tints':
      return {
        primary: hslToHex(h, 70, 50),
        secondary: hslToHex(h, 70, 68),
        tertiary: hslToHex(h, 70, 84),
      };
    case 'Shades':
      return {
        primary: hslToHex(h, 70, 46),
        secondary: hslToHex(h, 70, 34),
        tertiary: hslToHex(h, 70, 22),
      };
    case 'Tones':
      return {
        primary: hslToHex(h, 70, 46),
        secondary: hslToHex(h, 36, 46),
        tertiary: hslToHex(h, 12, 46),
      };
    case 'Complementary':
      return {
        primary: hslToHex(h, 70, 48),
        secondary: hslToHex(h + 180, 65, 46),
        tertiary: hslToHex(h, 25, 92),
      };
    case 'Triad':
      return {
        primary: hslToHex(h, 70, 48),
        secondary: hslToHex(h + 120, 65, 46),
        tertiary: hslToHex(h + 240, 65, 48),
      };
    case 'Analogous':
    default:
      return {
        primary: hslToHex(h, 70, 48),
        secondary: hslToHex(h + 30, 65, 48),
        tertiary: hslToHex(h + 55, 55, 62),
      };
  }
}

function relativeLuminance(hex: string): number {
  const raw = hex.replace('#', '').trim();
  const normalized = raw.length === 3 ? raw.split('').map((char) => char + char).join('') : raw;
  const value = Number.parseInt(normalized, 16);
  const channels = [((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255];
  const linear = channels.map((channel) => (channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4));
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

export function contrastRatio(hex: string, against: string): number {
  const first = relativeLuminance(hex);
  const second = relativeLuminance(against);
  const lighter = Math.max(first, second);
  const darker = Math.min(first, second);
  return (lighter + 0.05) / (darker + 0.05);
}

export function generatedCopy(session: BrandSession): Pick<BrandSession, 'aboutUs' | 'productDescription' | 'cta'> {
  const name = session.brandname.trim() || 'Your brand';
  const tagline = session.useTagline && session.tagline.trim() ? session.tagline.trim() : '';
  const problem = session.problem.trim() || 'everyday friction';
  const solution = session.solution.trim() || 'a clearer way forward';
  const benefit = session.benefit.trim() || 'a result people can feel';
  const formal = session.formality > 70;
  const casual = session.formality < 30;
  const playful = session.playfulness > 70;
  const enthusiastic = session.emotion > 70;

  let aboutUs = formal
    ? `${name} exists to take on ${problem}. `
    : casual
      ? `Hey, we're ${name}. We were tired of ${problem}. `
      : `${name} started because ${problem} deserved a better answer. `;

  if (tagline) {
    aboutUs += `${tagline}. `;
  }

  aboutUs += playful
    ? `We bring a lighter touch to ${solution}.`
    : `We do that through ${solution}.`;

  const productDescription = `${playful ? 'Here is the good part. ' : ''}${solution.charAt(0).toUpperCase()}${solution.slice(1)}. It is built around ${benefit}${enthusiastic ? ', and we are glad to put it in your hands.' : '.'}`;

  const cta = enthusiastic ? `Start with ${name}` : formal ? `Talk with ${name}` : `Try ${name}`;

  return { aboutUs, productDescription, cta };
}

export function brandStory(session: BrandSession): string {
  const name = session.brandname.trim() || 'This brand';
  const industry = session.industry.trim() || 'its field';
  const who = session.audience.trim() || (session.ageRange.trim() ? `${session.ageRange.trim()} year-olds` : 'the people it serves');
  const where = session.location.trim() ? ` in ${session.location.trim().toLowerCase()} places` : '';
  const purpose = session.purpose.trim() ? ` We exist to ${session.purpose.trim()} for ${who}.` : '';
  const offer = session.problem.trim()
    ? ` We solve ${session.problem.trim()} with ${session.solution.trim() || 'a clear offer'}${session.benefit.trim() ? `, delivering ${session.benefit.trim()}` : ''}.`
    : '';
  const tagline = session.useTagline && session.tagline.trim() ? ` ${session.tagline.trim()}` : '';
  const archetype = session.archetype.trim() ? ` The personality leans ${session.archetype.trim()}.` : '';
  return `${name} is a ${industry} brand for ${who}${where}.${purpose}${archetype}${offer}${tagline}`.replace(/\s+/g, ' ').trim();
}

export function loadGoogleFonts(fonts: string[], id = 'daden-google-fonts'): void {
  if (typeof document === 'undefined') {
    return;
  }

  const unique = [...new Set(fonts.map((font) => font.trim()).filter((font) => font.length > 0))];
  if (!unique.length) {
    return;
  }

  const signature = unique.join('|');
  let link = document.getElementById(id) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  if (link.dataset['fonts'] === signature) {
    return;
  }

  link.dataset['fonts'] = signature;
  const families = unique.map((font) => `family=${encodeURIComponent(font)}:wght@400;600;700`).join('&');
  link.href = `https://fonts.googleapis.com/css2?${families}&display=swap`;
}
