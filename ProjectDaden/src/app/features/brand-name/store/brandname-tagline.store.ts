import { Brandname } from './../models/brand-name';
import { IndustryAndValuesStore } from './../../brand-value-personality/store/industry-industry.store';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import {
  BrandNameAndTaglineCompleted,
  newBrandname,
} from './brandname-tagline.model';
import { computed, Injectable } from '@angular/core';

type BrandNameState = newBrandname;

export const initialBrandnameAndTagline: BrandNameState = {
  brandname: "PLACEHOLDER...",
  tagline: "",
  taglineUsed: false
};

export const brandNameTaglineStore = signalStore(
  withState<BrandNameState>(initialBrandnameAndTagline),
  withMethods((store) => ({
    updateBrandname(brandname: string) {
      patchState<BrandNameState>(store, { brandname: brandname });
    },
    updateTagline(tagline: string) {
      patchState<BrandNameState>(store, { tagline: tagline });
    },
  }))
);

@Injectable({ providedIn: 'root' })
export class BaseClassBrandNameAndTaglineStore extends brandNameTaglineStore {
  constructor() {
    super();
  }

  readonly brandnameTaginleState = computed(() => ({
    brandname: this.brandname(),
    tagline: this.tagline(),
    taglineUsed: this.taglineUsed(),
  }));

  override updateBrandname = (brandname: string): void => super.updateBrandname(brandname);
  override updateTagline = (tagline: string): void => super.updateTagline(tagline);

  // override updatePersonalityOptionsState = (synonyms: string[], headingFonts: string[], bodyFonts: string[]): void =>
  //   super.updatePersonalityOptionsState(synonyms, headingFonts, bodyFonts);

  getBrandNameTaglineStore() {
    console.log(initialBrandnameAndTagline, " Current initial BrandNameAndTagline state!");
  }
}
