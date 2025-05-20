import { inject, Injectable, Signal } from '@angular/core';
import { BaseClassBrandNameAndTaglineStore } from '../store/brandname-tagline.store';
import { BrandnameDefault } from '../models/brand-name';

@Injectable({
  providedIn: 'root',
})
export class BrandNameService {

  private readonly brandnameAndTaglineStore = inject(BaseClassBrandNameAndTaglineStore);

  /**
   * Starting position (default) for the brandname component. (DTO)
   * TODO: create loadBrandname instance from service and populate property here. See: brandIndustry component as example. 
   */
  newBrandName = BrandnameDefault;

  get completeBrandnameCollectionState(): Signal<{ brandname: string, tagline: string }> {
    return this.brandnameAndTaglineStore.brandnameCollectionStates;
  }

  // explicitly use : "!== undefined" for falsy checks. else stale data might be passed to the store.
  updateBrandnameCollection(updates: Partial<ReturnType<typeof this.newBrandName.genericSignalCollection>>) {
    if (updates.brandname !== undefined) this.brandnameAndTaglineStore.updateBrandname(updates.brandname);
    if (updates.taglineDescription !== undefined) this.brandnameAndTaglineStore.updateTagline(updates.taglineDescription);
    this.newBrandName.genericSignalCollection.update(curr => ({ ...curr, ...updates }));
  }
}