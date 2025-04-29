import { signal, inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Archetype, ArchetypeItem } from '../models/archetype';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArchetypeSetupService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly archeTypeInformation =
    'assets/tempUsage/archetype-complete-composition.json';

  completeArchetypeSet = signal<Archetype>({});
  bodyFonts = signal<string[]>([]);
  headingFonts = signal<string[]>([]);
  colorRanges = signal<string[]>([]);
  industries = signal<string[]>([]);
  brandvalues = signal<string[]>([]);
  
  async init(): Promise<void> {
    await this.initializeData();
  }

  private async initializeData(): Promise<void> {
    this.completeArchetypeSet.set(await firstValueFrom(this.http.get<any>(this.archeTypeInformation)));
    this.bodyFonts.set(this.extractUniqueValues("bodyFonts"));
    this.headingFonts.set(this.extractUniqueValues("headingFonts"));
    this.colorRanges.set(this.extractUniqueValues("colorRange"));
    this.industries.set(this.extractUniqueValues("industry"));
    this.brandvalues.set(this.extractUniqueValues("value"))
  }

  private extractUniqueValues(property: string): string[] {
    return [
      ...new Set(
        Object.values(this.completeArchetypeSet()["archetype"]).flatMap(
          (archetype: any) => archetype[property] || []
        )
      ),
    ];
  }

  getArchetypeSignal() {
    return this.completeArchetypeSet;
  }

  extractProperty(property: keyof ArchetypeItem): string[] {
    const archetypes = this.completeArchetypeSet();
    if (archetypes) {
      return Object.values(archetypes).flatMap(
        (archetype) => archetype[property] || []
      );
    }
    return [];
  }

}
