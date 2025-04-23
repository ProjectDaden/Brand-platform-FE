import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { PersonalityOptions } from '../store/personalities-options';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandNameService {
  private readonly http = inject(HttpClient);
  private readonly configUrl =
    'assets/tempUsage/brand-name-personality-compositions.json';
  private readonly personalitiesListPath = "assets/tempUsage/brand-personality-true.json";
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

  getPersonalities() : Observable<string[]> {
    return this.http.get<{ personalities: string[] }>(this.personalitiesListPath).pipe(
      map(response => {
       return Array.isArray(response.personalities) ? response.personalities : [];
  }));
  }

  // The api-call to load all existing personalities.
  private loadAllPersonalities() {
    this.http.get<{ [key: string]: PersonalityOptions }>(this.configUrl).subscribe((data) => {
      this.allPersonalities = data;
      this.setPersonality('default', this.allPersonalities);
    });
  }



  // Expose all personalities to interested consumers.
  getAllPersonalities(): { [key: string]: PersonalityOptions } {
    return this.allPersonalities;
  }

  // The api-call to load the default personality.
  loadBrandNamePersonaltyOptions() {
    this.http.get<{ [key: string]: PersonalityOptions }>(this.configUrl).subscribe((data) => {
      // console.log(data, "DATA IN THE BRANDNAME SERVICE!!");
        this.setPersonality('default', data);
      });
  }

  // Set the personality composition.
  setPersonality(personalityKey: string, personalities: { [key: string]: PersonalityOptions }) {
    if (personalities[personalityKey]) {
      // console.log(personalities[personalityKey], "PERSONALITIES KEY!!");
      this.personalityComposition.set(personalities[personalityKey]);
    } else {
      console.error(`Personality option "${personalityKey}" not found.`);
    }
  }

  // The api-call to change the personality.
  changePersonality(personalityKey: string) {
    this.http.get<{ [key: string]: PersonalityOptions }>(this.configUrl).subscribe((data) => {
        this.setPersonality(personalityKey, data);
      });
  }
}
