import { inject, Injectable, Signal } from '@angular/core';
import { BaseClassBrandNameAndTaglineStore } from '../store/brandname-tagline.store';
import { Brandname } from '../models/brand-name';

@Injectable({
  providedIn: 'root',
})
export class BrandNameService {

  private readonly brandnameAndTaglineStore = inject(BaseClassBrandNameAndTaglineStore);

    /**
   * This getter gets its brandname-and-tagline-data from the BaseClass Brandname. 
   */
  get completeBrandnameCollectionState(): Signal<Brandname> {
    return this.brandnameAndTaglineStore.brandnameCollectionStates;
  }

  /**
   * Method for updating on any brandname property changes.
   * @param updates optional Brandname arguments that must adhere to the brandname interface.
   */
  // explicitly use : "!== undefined" for falsy checks. else stale data might be passed to the store.
  updateBrandnameCollection(updates: Partial<Brandname>) {
    if (updates.brandname !== undefined) this.brandnameAndTaglineStore.updateBrandname(updates.brandname);
    if (updates.taglineDescription !== undefined) this.brandnameAndTaglineStore.updateTagline(updates.taglineDescription);
  }
}

// Interesting difference with Partial<Brandname> is that the one below can adapt to other Brandname structures (e.g. more fields).
//   updateBrandnameCollection(updates: Partial<ReturnType<typeof this.newBrandName.genericSignalCollection>>) {
