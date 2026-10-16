import { computed, effect } from '@angular/core';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import {
  BRAND_SESSION_STORAGE_KEY,
  BrandSession,
  initialBrandSession,
} from '../brand/brand-session.model';
import {
  fontsForArchetype,
  generatedCopy,
  hexToHsl,
  hueForArchetype,
  paletteForTheory,
  toneForArchetype,
} from '../brand/brand-presets';

function asString(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value : fallback;
}

function asBoolean(value: unknown, fallback = false): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

function asNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function asStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

function asNullableString(value: unknown): string | null {
  return typeof value === 'string' && value.length > 0 ? value : null;
}

function readStoredSession(): BrandSession | null {
  if (typeof localStorage === 'undefined') {
    return null;
  }

  try {
    const raw = localStorage.getItem(BRAND_SESSION_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw) as Partial<BrandSession>;
    if (!parsed || typeof parsed !== 'object') {
      return null;
    }

    return {
      brandname: asString(parsed.brandname),
      useTagline: asBoolean(parsed.useTagline),
      tagline: asString(parsed.tagline),
      industry: asString(parsed.industry),
      values: asStringArray(parsed.values),
      archetype: asString(parsed.archetype),
      ageRange: asString(parsed.ageRange),
      location: asString(parsed.location),
      purpose: asString(parsed.purpose),
      audience: asString(parsed.audience),
      formality: asNumber(parsed.formality, 50),
      playfulness: asNumber(parsed.playfulness, 50),
      respect: asNumber(parsed.respect, 50),
      emotion: asNumber(parsed.emotion, 50),
      toneCustomized: asBoolean(parsed.toneCustomized),
      problem: asString(parsed.problem),
      solution: asString(parsed.solution),
      benefit: asString(parsed.benefit),
      aboutUs: asString(parsed.aboutUs),
      productDescription: asString(parsed.productDescription),
      cta: asString(parsed.cta),
      copyCustomized: asBoolean(parsed.copyCustomized),
      colorTheory: asString(parsed.colorTheory, initialBrandSession.colorTheory),
      primaryColor: asString(parsed.primaryColor, initialBrandSession.primaryColor),
      secondaryColor: asString(parsed.secondaryColor, initialBrandSession.secondaryColor),
      tertiaryColor: asString(parsed.tertiaryColor, initialBrandSession.tertiaryColor),
      colorCustomized: asBoolean(parsed.colorCustomized),
      headingFont: asString(parsed.headingFont, initialBrandSession.headingFont),
      bodyFont: asString(parsed.bodyFont, initialBrandSession.bodyFont),
      typeScaleName: asString(parsed.typeScaleName, initialBrandSession.typeScaleName),
      typeCustomized: asBoolean(parsed.typeCustomized),
      logoPrimary: asNullableString(parsed.logoPrimary),
      logoSecondary: asNullableString(parsed.logoSecondary),
      logoIcon: asNullableString(parsed.logoIcon),
      completedSteps: asStringArray(parsed.completedSteps),
    };
  } catch {
    return null;
  }
}

function persistSession(snapshot: BrandSession): void {
  if (typeof localStorage === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(BRAND_SESSION_STORAGE_KEY, JSON.stringify(snapshot));
  } catch {
    const withoutLogos: BrandSession = {
      ...snapshot,
      logoPrimary: null,
      logoSecondary: null,
      logoIcon: null,
    };
    try {
      localStorage.setItem(BRAND_SESSION_STORAGE_KEY, JSON.stringify(withoutLogos));
    } catch {
      // Private mode or a full quota should not block the in-memory session.
    }
  }
}

export const BaseClassGlobalStore = signalStore(
  { providedIn: 'root' },
  withState<BrandSession>(initialBrandSession),
  withComputed((store) => ({
    snapshot: computed<BrandSession>(() => ({
      brandname: store.brandname(),
      useTagline: store.useTagline(),
      tagline: store.tagline(),
      industry: store.industry(),
      values: store.values(),
      archetype: store.archetype(),
      ageRange: store.ageRange(),
      location: store.location(),
      purpose: store.purpose(),
      audience: store.audience(),
      formality: store.formality(),
      playfulness: store.playfulness(),
      respect: store.respect(),
      emotion: store.emotion(),
      toneCustomized: store.toneCustomized(),
      problem: store.problem(),
      solution: store.solution(),
      benefit: store.benefit(),
      aboutUs: store.aboutUs(),
      productDescription: store.productDescription(),
      cta: store.cta(),
      copyCustomized: store.copyCustomized(),
      colorTheory: store.colorTheory(),
      primaryColor: store.primaryColor(),
      secondaryColor: store.secondaryColor(),
      tertiaryColor: store.tertiaryColor(),
      colorCustomized: store.colorCustomized(),
      headingFont: store.headingFont(),
      bodyFont: store.bodyFont(),
      typeScaleName: store.typeScaleName(),
      typeCustomized: store.typeCustomized(),
      logoPrimary: store.logoPrimary(),
      logoSecondary: store.logoSecondary(),
      logoIcon: store.logoIcon(),
      completedSteps: store.completedSteps(),
    })),
  })),
  withMethods((store) => ({
    update(partial: Partial<BrandSession>): void {
      patchState(store, partial);
    },
    markStepComplete(key: string): void {
      const current = store.completedSteps();
      if (!key || current.includes(key)) {
        return;
      }
      patchState(store, { completedSteps: [...current, key] });
    },
    unmarkStep(key: string): void {
      patchState(store, {
        completedSteps: store.completedSteps().filter((step) => step !== key),
      });
    },
    resetStep(key: string): void {
      const current = store.snapshot();
      switch (key) {
        case 'brandname-and-tagline':
          patchState(store, { brandname: '', tagline: '', useTagline: false });
          break;
        case 'industry-and-values':
          patchState(store, {
            industry: '',
            values: [],
            archetype: '',
            ...(current.toneCustomized ? {} : { formality: 50, playfulness: 50, respect: 50, emotion: 50 }),
            ...(current.colorCustomized
              ? {}
              : {
                  colorTheory: initialBrandSession.colorTheory,
                  primaryColor: initialBrandSession.primaryColor,
                  secondaryColor: initialBrandSession.secondaryColor,
                  tertiaryColor: initialBrandSession.tertiaryColor,
                }),
            ...(current.typeCustomized
              ? {}
              : {
                  headingFont: initialBrandSession.headingFont,
                  bodyFont: initialBrandSession.bodyFont,
                }),
          });
          break;
        case 'target-audience':
          patchState(store, { ageRange: '', location: '' });
          break;
        case 'vision-and-mission':
          patchState(store, { purpose: '', audience: '' });
          break;
        case 'tone-of-voice':
          patchState(store, { formality: 50, playfulness: 50, respect: 50, emotion: 50, toneCustomized: false });
          break;
        case 'messaging-tone':
          patchState(store, { problem: '', solution: '', benefit: '' });
          break;
        case 'copywriting-tone':
          patchState(store, {
            ...generatedCopy({ ...current, copyCustomized: false }),
            copyCustomized: false,
          });
          break;
        case 'color-composer':
          patchState(store, { colorTheory: initialBrandSession.colorTheory, colorCustomized: false });
          break;
        case 'typography-composer':
          patchState(store, { typeScaleName: initialBrandSession.typeScaleName, typeCustomized: false });
          break;
        case 'logo-composer':
          patchState(store, { logoPrimary: null, logoSecondary: null, logoIcon: null });
          break;
        default:
          break;
      }
      patchState(store, {
        completedSteps: store.completedSteps().filter((step) => step !== key),
      });
    },
    resetAll(): void {
      patchState(store, {
        ...initialBrandSession,
        values: [],
        completedSteps: [],
      });
    },
  })),
  withHooks({
    onInit(store) {
      const saved = readStoredSession();
      if (saved) {
        patchState(store, saved);
      }

      effect(() => {
        persistSession(store.snapshot());
      });

      effect(() => {
        if (store.toneCustomized()) {
          return;
        }
        const archetype = store.archetype();
        if (!archetype) {
          return;
        }
        patchState(store, toneForArchetype(archetype));
      });

      effect(() => {
        if (store.colorCustomized()) {
          return;
        }
        const theory = store.colorTheory();
        const archetype = store.archetype();
        if (!archetype && theory === initialBrandSession.colorTheory) {
          return;
        }
        const hue = archetype ? hueForArchetype(archetype) : hexToHsl(initialBrandSession.primaryColor).h;
        const palette = paletteForTheory(theory || 'Analogous', hue);
        patchState(store, {
          primaryColor: palette.primary,
          secondaryColor: palette.secondary,
          tertiaryColor: palette.tertiary,
        });
      });

      effect(() => {
        if (store.typeCustomized()) {
          return;
        }
        const archetype = store.archetype();
        if (!archetype) {
          return;
        }
        const fonts = fontsForArchetype(archetype);
        patchState(store, {
          headingFont: fonts.heading[0] ?? initialBrandSession.headingFont,
          bodyFont: fonts.body[0] ?? initialBrandSession.bodyFont,
        });
      });
    },
  }),
);
