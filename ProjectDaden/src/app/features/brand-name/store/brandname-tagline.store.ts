import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import {
  BrandNameAndTaglineCompleted,
} from './brandname-tagline.model';
import { Injectable } from '@angular/core';

type BrandNameState = BrandNameAndTaglineCompleted;

export const initialBrandnameAndTagline: BrandNameState = {
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
        synonyms: string[],
        headingFonts: string[],
        bodyFonts: string[]
    ) {
      patchState(store, (state) => ({
        personalityOptions: { ...state.personalityOptions, synonyms, headingFonts, bodyFonts }}));
      console.log(store.personalityOptions(), "From inside BrandNameTagline state!!");
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

@Injectable({ providedIn: 'root' })
export class BaseClassBrandNameAndTaglineStore extends brandNameTaglineStore {
  constructor() {
    super();
  }

override updatePersonalityOptionsState = (synonyms: string[], headingFonts: string[], bodyFonts: string[]): void => 
    super.updatePersonalityOptionsState(synonyms, headingFonts, bodyFonts);

  getBrandNameTaglineStore(){
    console.log(initialBrandnameAndTagline, " Current initial BrandNameAndTagline state!");
  }
}
