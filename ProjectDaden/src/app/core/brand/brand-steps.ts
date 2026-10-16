import { BrandSession } from './brand-session.model';

export interface BrandWizardStep {
  key: string;
  path: string;
}

export const BRAND_WIZARD_STEPS: BrandWizardStep[] = [
  { key: 'brandname-and-tagline', path: '/v1/core-brand-identity/brandname-and-tagline' },
  { key: 'industry-and-values', path: '/v1/core-brand-identity/industry-and-values' },
  { key: 'target-audience', path: '/v1/core-brand-identity/target-audience' },
  { key: 'vision-and-mission', path: '/v1/core-brand-identity/vision-and-mission' },
  { key: 'tone-of-voice', path: '/v1/brand-voice-and-tone/tone-of-voice' },
  { key: 'messaging-tone', path: '/v1/brand-voice-and-tone/messaging-tone' },
  { key: 'copywriting-tone', path: '/v1/brand-voice-and-tone/copywriting-tone' },
  { key: 'color-composer', path: '/v1/visual-identity/color-composer' },
  { key: 'typography-composer', path: '/v1/visual-identity/typography-composer' },
  { key: 'logo-composer', path: '/v1/visual-identity/logo-composer' },
  { key: 'brand-style-guide', path: '/v1/application/brand-style-guide' },
];

export const COMING_SOON_STEPS = [
  'imagery-composer',
  'print-offline-material',
  'socialmedia-styleguide',
  'web-and-guidelines',
] as const;

export const BRAND_START_PATH = BRAND_WIZARD_STEPS[0].path;

export function isComingSoon(key: string): boolean {
  return (COMING_SOON_STEPS as readonly string[]).includes(key);
}

export function wizardStepIndex(url: string): number {
  const path = url.split('?')[0];
  return BRAND_WIZARD_STEPS.findIndex((step) => path === step.path || path.startsWith(`${step.path}/`));
}

export function isStepComplete(key: string, session: BrandSession): boolean {
  return session.completedSteps.includes(key);
}
