import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { BrandIndustry, brandIndustryDefault } from '../models/brand-industry-interface';
import { BrandIndustryList, IndustryValuesList } from '../models/brand-industry-list';
import { Observable, tap } from 'rxjs';
import { BrandIndustryRules, Rule } from '../../../shared/models/industry-values-connections';
import { BaseClassBrandIndustryStore } from '../store/brand-industry.store';
@Injectable({
  providedIn: 'root'
})
export class BrandIndustryService {
  private readonly http = inject(HttpClient);
  private readonly brandIndustryStore = inject(BaseClassBrandIndustryStore);

  brandIndustry = brandIndustryDefault;

  brandIndustryListPath = "assets/tempUsage/brand-industry.json";
  industryValuesListPath = "assets/tempUsage/brand-values.json";
  industryValuesConnectionPath = "assets/tempUsage/industry-values-archetype-connections.json";

  brandIndustryList = signal<BrandIndustryList>({ industryOptions: [] });
  brandIndustryValuesConnection = signal<BrandIndustryRules>({ rules: [] });
  topThreeArchetypes: Record<string, number> = {};
  selectedIndustryArchetype = signal<string>("");
  selectedValueArchetypes = signal<string[]>([]);

  combinedSelectedArchetypes = computed(() => {
    const collectArchetypes = this.selectedIndustryArchetype()
      ? [this.selectedIndustryArchetype(), ...this.selectedValueArchetypes()]
      : [...this.selectedValueArchetypes()];
    console.log(this.calculateRoundedPercentages(collectArchetypes), " <--- COMBINED SELECTED ARCHETYPES IN SERVICE");
    return collectArchetypes;
  });

  get industryValuesConnections() {
    return this.brandIndustryValuesConnection();
  }

  /**
   * This getter gets its brandindustry-data from the BaseClass Brandindustry. 
   */
  get completeBrandIndustryCollectionState(): Signal<BrandIndustry> {
    return this.brandIndustryStore.brandIndustryState;
  }

  updateBrandIndustryCollection(updates: Partial<BrandIndustry>) {
    if (updates.industry !== undefined) this.brandIndustryStore.updateBrandIndustry(updates.industry);
    if (updates.values !== undefined) this.brandIndustryStore.updateBrandValues(updates.values);
  }

  /**
   * Loads jsonfile which holds the conditions associated to the archetypes.
   * Taps into the data and stores it locally.
   * TODO needs to be an API-call to a backend in the future. 
   */
  loadBrandIndustryValueConnections(): void {
    this.http.get<BrandIndustryRules>(this.industryValuesConnectionPath)
      .pipe(tap((data) => this.brandIndustryValuesConnection.set(data))).subscribe();
  }

  /**
   * Method to retrieve the list of brandindustry options.
   * @returns the list of possible brand industries.
   */
  loadBrandIndustry(): Observable<BrandIndustryList> {
    return this.http.get<BrandIndustryList>(this.brandIndustryListPath);
  }

  /**
   * Method to retrieve the list of brand-industry-values.
   * @returns the list of possible industry-values to select from.
   */
  loadIndustryValues(): Observable<IndustryValuesList> {
    return this.http.get<IndustryValuesList>(this.industryValuesListPath);
  }

  /**
 * @description Method to traverse the brandValue Connections object to find archetypes associated with the brandindustry value.
 * @param industryValue The selected Brandindustry value for finding archetype.
 * @returns string archetype or undesined.
 */
  findArchetypeFromValues(industryValue: string): string | undefined {
    return this.industryValuesConnections.rules
      .find((rule: Rule) => rule.condition.value?.includes(industryValue))?.archetype;
  }

  /**
    * @description Method to traverse the brandIndustry Connections object to find archetypes associated with the brandindustry industry.
    * @param industryValue The selected Brandindustry for finding archetype.
    * @returns string archetype or undesined.
    */
  findArchetypeFromIndustry(industry: string): string | undefined {
    return this.industryValuesConnections.rules
      .find((rule: Rule) => rule.condition.industry?.includes(industry))?.archetype;
  }

  private calculateRoundedPercentages(arr: string[]): Record<string, number> {
    const total = arr.length;
    const counts: Record<string, number> = {};

    arr.forEach(value => {
      counts[value] = (counts[value] || 0) + 1;
    });

    const percentages: Record<string, number> = {};
    for (const key in counts) {
      percentages[key] = Math.ceil((counts[key] / total) * 100);
    }

    const sortedEntries = Object.entries(percentages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15);

    this.topThreeArchetypes = Object.fromEntries(sortedEntries);

    console.log("Top 3 Archetypes:", this.topThreeArchetypes); // Debugging output
    return this.topThreeArchetypes;
  }


}



// loadBrandValuePersonality() {
//   this.http.get<BrandIndustry>('assets/data/brand-value-personality.json').subscribe((data) => {
//     this.brandIndustry.genericSignalCollection.update((current) => ({
//       ...current,
//       data,
//     }));
//   });
// }

// getBrandIndustry() {
//   console.log(this.brandIndustry.genericSignalCollection());
//   return this.brandIndustry.genericSignalCollection;
// }

