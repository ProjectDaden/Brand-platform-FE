import { Injectable } from '@angular/core';
import { BrandColorTheme, brandColorTheme } from '../models/brand-color-theme';
import { SignalCollection } from '../../../shared/models/signal-object-creation';

@Injectable({
  providedIn: 'root'
})
export class BrandColorThemeService {
  
  // All these brandColorTheme arrays can be fetched from the backend when the time is there.
  public colorPaletteCollection: SignalCollection<BrandColorTheme> = brandColorTheme;

  constructor() { };

  addColorTheme(newTheme: string) {
    this.colorPaletteCollection.genericSignalCollection.update((current) => ({
      ...current,
      industries: [...current.industries, newTheme], // Create a new array
    }));
  }

    // Method to remove a color theme
    removeColorTheme(themeToRemove: string) {
      this.colorPaletteCollection.genericSignalCollection.update((current) => ({
        ...current,
        industries: current.industries.filter((theme) => theme !== themeToRemove),
      }));
    }
  
    // Method to update a mood
    updateMood(newMood: string, index: number) {
      this.colorPaletteCollection.genericSignalCollection.update((current) => {
        const updatedMoods = [...current.personalities];
        updatedMoods[index] = newMood;
        return { ...current, moods: updatedMoods };
      });
    }
  
    // Method to add a new keyword
    addKeyword(newKeyword: string) {
      this.colorPaletteCollection.genericSignalCollection.update((current) => ({
        ...current,
        values: [...current.values, newKeyword],
      }));
    }
  
    // Method to remove a keyword
    removeKeyword(keywordToRemove: string) {
      this.colorPaletteCollection.genericSignalCollection.update((current) => ({
        ...current,
        keywords: current.values.filter((value) => value !== keywordToRemove),
      }));
    }
  
    // Method to get the current state
    getBrandColorTheme() {
      return this.colorPaletteCollection.genericSignalCollection();
    }

}
