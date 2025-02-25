import { Injectable, signal } from '@angular/core';
import { BrandColorTheme, } from '../models/brand-color-theme';
import { SignalCollection } from '../../../shared/models/signal-object-creation';

@Injectable({
  providedIn: 'root'
})
export class BrandColorThemeService {
  
  // All these arrays can be fetched from the backend when the time is there.
  public colorPaletteCollection: SignalCollection<BrandColorTheme> = {
    genericSignalCollection: signal({
      colorThemes: ['Bold', 'Elegant', 'Youthful', 'Hallo', "Nog een prop"],
      moods: ['Happy', 'Sad', 'Angry', 'Calm', 'explosive'],
      keywords: ['Calm', 'Trustworthy', 'Tech', 'Fashion', 'Health'],
      colorTheories: ['Complementary', 'Analogous', 'Triad'],
    })};

  constructor() { };

  addColorTheme(newTheme: string) {
    this.colorPaletteCollection.genericSignalCollection.update((current) => ({
      ...current,
      colorThemes: [...current.colorThemes, newTheme], // Create a new array
    }));
  }

    // Method to remove a color theme
    removeColorTheme(themeToRemove: string) {
      this.colorPaletteCollection.genericSignalCollection.update((current) => ({
        ...current,
        colorThemes: current.colorThemes.filter((theme) => theme !== themeToRemove),
      }));
    }
  
    // Method to update a mood
    updateMood(newMood: string, index: number) {
      this.colorPaletteCollection.genericSignalCollection.update((current) => {
        const updatedMoods = [...current.moods];
        updatedMoods[index] = newMood;
        return { ...current, moods: updatedMoods };
      });
    }
  
    // Method to add a new keyword
    addKeyword(newKeyword: string) {
      this.colorPaletteCollection.genericSignalCollection.update((current) => ({
        ...current,
        keywords: [...current.keywords, newKeyword],
      }));
    }
  
    // Method to remove a keyword
    removeKeyword(keywordToRemove: string) {
      this.colorPaletteCollection.genericSignalCollection.update((current) => ({
        ...current,
        keywords: current.keywords.filter((keyword) => keyword !== keywordToRemove),
      }));
    }
  
    // Method to get the current state
    getBrandColorTheme() {
      return this.colorPaletteCollection.genericSignalCollection();
    }

}
