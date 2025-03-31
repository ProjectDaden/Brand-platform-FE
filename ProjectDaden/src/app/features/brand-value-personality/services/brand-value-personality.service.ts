import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BrandValuePersonality, brandValuePersonality } from '../models/brand-value-personality-interface';
@Injectable({
  providedIn: 'root'
})
export class BrandValuePersonalityService {
  private readonly http = inject(HttpClient);

  brandValueCollection = brandValuePersonality;

  loadBrandValuePersonality() {
    this.http.get<BrandValuePersonality>('assets/data/brand-value-personality.json').subscribe((data) => {
      this.brandValueCollection.genericSignalCollection.update((current) => ({
        ...current,
        data,
      }));
    });
  }

  getBrandValuePersonality() {
    console.log(this.brandValueCollection.genericSignalCollection());
    return this.brandValueCollection.genericSignalCollection();
  }
}
