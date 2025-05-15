
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { newBrandname } from './brandname-tagline.model';
import { computed, inject, Injectable } from '@angular/core';

type BrandNameState = newBrandname;

export const initialBrandnameAndTagline: BrandNameState = {
  brandname: "Please select...",
  tagline: "",
  taglineUsed: false
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
  }))
);

@Injectable({ providedIn: 'root' })
export class BaseClassBrandNameAndTaglineStore {

  brandnameTaglineStoreFlow = inject(BrandNameTaglineStore);

  readonly brandnameTaglineState = computed(() => ({
    brandname: this.brandnameTaglineStoreFlow.brandname(),
    tagline: this.brandnameTaglineStoreFlow.tagline(),
    taglineUsed: this.brandnameTaglineStoreFlow.taglineUsed(),
  }));

  updateBrandname(brandname: string) {
    this.brandnameTaglineStoreFlow.updateBrandname(brandname);
  }

  updateTagline(tagline: string) {
    this.brandnameTaglineStoreFlow.updateTagline(tagline);
  }
}