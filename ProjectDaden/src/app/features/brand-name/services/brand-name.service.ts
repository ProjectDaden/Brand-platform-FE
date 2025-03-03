import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { PersonalityOptions } from '../models/personalities-options';

@Injectable({
  providedIn: 'root',
})
export class BrandNameService {
  private readonly http = inject(HttpClient);
  private configUrl =
    'assets/tempUsage/brand-name-personality-compositions.json';

    private allPersonalities: { [key: string]: PersonalityOptions } = {};
  personalityComposition = signal<PersonalityOptions>({
    synonyms: [],
    headingFonts: [],
    bodyFonts: [],
  });

  constructor() {
    this.loadBrandNamePersonaltyOptions();
    this.loadAllPersonalities();
  }

  private loadAllPersonalities() {
    this.http.get<{ [key: string]: PersonalityOptions }>(this.configUrl).subscribe((data) => {
      this.allPersonalities = data;
      this.setPersonality('default', this.allPersonalities);
    });
  }

  getAllPersonalities(): { [key: string]: PersonalityOptions } {
    return this.allPersonalities;
  }

  loadBrandNamePersonaltyOptions() {
    this.http.get<{ [key: string]: PersonalityOptions }>(this.configUrl).subscribe((data) => {
      console.log(data, "DATA IN THE BRANDNAME SERVICE!!");
        this.setPersonality('default', data);
      });
  }

  setPersonality(personalityKey: string, personalities: { [key: string]: PersonalityOptions }) {
    if (personalities[personalityKey]) {
      console.log(personalities[personalityKey], "PERSONALITIES KEY!!");
      this.personalityComposition.set(personalities[personalityKey]);
    } else {
      console.error(`Personality option "${personalityKey}" not found.`);
    }
  }

  changePersonality(personalityKey: string) {
    this.http.get<{ [key: string]: PersonalityOptions }>(this.configUrl).subscribe((data) => {
        this.setPersonality(personalityKey, data);
      });
  }
}
