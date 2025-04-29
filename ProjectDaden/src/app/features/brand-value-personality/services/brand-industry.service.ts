import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { BrandIndustry, brandIndustryDefault } from '../models/brand-industry-interface';
import { BrandIndustryList, IndustryValuesList, List } from '../models/brand-industry-list';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BrandIndustryService {
  private readonly http = inject(HttpClient);

  brandIndustry = brandIndustryDefault;

  brandIndustryListPath = "assets/tempUsage/brand-industry.json";
  industryValuesListPath = "assets/tempUsage/brand-values.json";
  brandIndustryList = signal<BrandIndustryList>({industryOptions: []});

  loadBrandValuePersonality() {
    this.http.get<BrandIndustry>('assets/data/brand-value-personality.json').subscribe((data) => {
      this.brandIndustry.genericSignalCollection.update((current) => ({
        ...current,
        data,
      }));
    });
  }

  loadBrandIndustry(): Observable<BrandIndustryList> {
    return this.http.get<BrandIndustryList>(this.brandIndustryListPath);
  }

  loadIndustryValues(): Observable<IndustryValuesList> {
    return this.http.get<IndustryValuesList>(this.industryValuesListPath);
  }

  getBrandValuePersonality() {
    console.log(this.brandIndustry.genericSignalCollection());
    return this.brandIndustry.genericSignalCollection();
  }
}

