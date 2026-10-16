export interface BrandSession {
  brandname: string;
  useTagline: boolean;
  tagline: string;
  industry: string;
  values: string[];
  archetype: string;
  ageRange: string;
  location: string;
  purpose: string;
  audience: string;
  formality: number;
  playfulness: number;
  respect: number;
  emotion: number;
  toneCustomized: boolean;
  problem: string;
  solution: string;
  benefit: string;
  aboutUs: string;
  productDescription: string;
  cta: string;
  copyCustomized: boolean;
  colorTheory: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  colorCustomized: boolean;
  headingFont: string;
  bodyFont: string;
  typeScaleName: string;
  typeCustomized: boolean;
  logoPrimary: string | null;
  logoSecondary: string | null;
  logoIcon: string | null;
  completedSteps: string[];
}

export const BRAND_SESSION_STORAGE_KEY = 'daden-brand-session-v1';

export const initialBrandSession: BrandSession = {
  brandname: '',
  useTagline: false,
  tagline: '',
  industry: '',
  values: [],
  archetype: '',
  ageRange: '',
  location: '',
  purpose: '',
  audience: '',
  formality: 50,
  playfulness: 50,
  respect: 50,
  emotion: 50,
  toneCustomized: false,
  problem: '',
  solution: '',
  benefit: '',
  aboutUs: '',
  productDescription: '',
  cta: '',
  copyCustomized: false,
  colorTheory: 'Analogous',
  primaryColor: '#3b82f6',
  secondaryColor: '#6366f1',
  tertiaryColor: '#22d3ee',
  colorCustomized: false,
  headingFont: 'Inter',
  bodyFont: 'Source Sans 3',
  typeScaleName: '1.2 - Minor Third',
  typeCustomized: false,
  logoPrimary: null,
  logoSecondary: null,
  logoIcon: null,
  completedSteps: [],
};
