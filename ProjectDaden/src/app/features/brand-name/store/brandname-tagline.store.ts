
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { newBrandname } from './brandname-tagline.model';
import { computed, inject, Injectable } from '@angular/core';
import { Brandname } from '../models/brand-name';

type BrandNameState = newBrandname;

export const initialBrandnameAndTagline: BrandNameState = {
  brandname: "",
  tagline: "",
};

export const BrandNameTaglineStore = signalStore(
  { providedIn: "root" },
  withState<BrandNameState>(initialBrandnameAndTagline),
  withMethods((store) => ({
    updateBrandname(brandname: string) {
      console.log("BRANDNAME GETS TRIGGRERED", brandname);
      patchState<BrandNameState>(store, { brandname: brandname });
    },
    updateTagline(tagline: string) {
      patchState<BrandNameState>(store, { tagline: tagline });
    }
  })),
  withComputed((store) => ({
    brandnameCollectionState: computed<Brandname>(() => ({
      brandname: store.brandname(),
      taglineDescription: store.tagline()
    }))
  }))
);

@Injectable({ providedIn: 'root' })
export class BaseClassBrandNameAndTaglineStore {

  brandnameTaglineStoreFlow = inject(BrandNameTaglineStore);

  get brandnameCollectionStates() {
    return this.brandnameTaglineStoreFlow.brandnameCollectionState
  }

  readonly brandnameTaglineState = computed(() => ({
    brandname: this.brandnameTaglineStoreFlow.brandname(),
    tagline: this.brandnameTaglineStoreFlow.tagline(),
  }));

  updateBrandname(brandname: string) {
    this.brandnameTaglineStoreFlow.updateBrandname(brandname);
  }

  updateTagline(tagline: string) {
    this.brandnameTaglineStoreFlow.updateTagline(tagline);
  }
}