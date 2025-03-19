import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import {
  BrandNameAndTaglineCompleted,
} from './brandname-tagline.model';

type BrandNameState = BrandNameAndTaglineCompleted;

const initialBrandnameAndTagline: BrandNameState = {
  personalities: [],
  selectedPersonality: '',
  personalityOptions: {
    synonyms: [],
    headingFonts: [],
    bodyFonts: [],
  },
  tagLineUsed: 'no',
  tagLine: '',
};

export const brandNameTaglineStore = signalStore(
  withState<BrandNameState>(initialBrandnameAndTagline),
  withMethods((store) => ({
    updatePersonalityOptionsState(
      syn: string[],
      head: string[],
      body: string[]
    ) {
      patchState(store, (state) => ({
        personalityOptions: { ...state.personalityOptions, syn, head, body },
      }));
      console.log(store.personalityOptions(), "From inside state!!");
    },
    updateSelectedPersonality(personality: string) {
      const curSynonyms = store.personalityOptions().synonyms;
      patchState<BrandNameState>(store, { selectedPersonality: personality });
    },
    updateTagline(tagline: string) {
        const curTagline = store.tagLine;
        patchState<BrandNameState>(store, { tagLine: tagline });
      },
  }))
);
