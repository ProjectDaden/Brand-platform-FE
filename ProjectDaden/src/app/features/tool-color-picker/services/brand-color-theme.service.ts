import { Injectable, signal, WritableSignal } from '@angular/core';
import { BrandColorTheme, } from '../models/brand-color-theme';

@Injectable({
  providedIn: 'root'
})
export class BrandColorThemeService {

  private readonly brandColorTheme: WritableSignal<BrandColorTheme> = signal<BrandColorTheme>({
    colorThemes: ['Bold', 'Elegant', 'Youthful', 'Hallo'],
    moods: ['Happy', 'Sad', 'Angry', 'Calm'],
    keywords: ['Calm', 'Trustworthy', 'Tech', 'Fashion', 'Health'],
    colorTheories: ['Complementary', 'Analogous', 'Triad'],
  });

  constructor() { };

  addColorTheme(newTheme: string) {
    this.brandColorTheme.update((current) => ({
      ...current,
      colorThemes: [...current.colorThemes, newTheme], // Create a new array
    }));
  }

    // Method to remove a color theme
    removeColorTheme(themeToRemove: string) {
      this.brandColorTheme.update((current) => ({
        ...current,
        colorThemes: current.colorThemes.filter((theme) => theme !== themeToRemove),
      }));
    }
  
    // Method to update a mood
    updateMood(newMood: string, index: number) {
      this.brandColorTheme.update((current) => {
        const updatedMoods = [...current.moods];
        updatedMoods[index] = newMood;
        return { ...current, moods: updatedMoods };
      });
    }
  
    // Method to add a new keyword
    addKeyword(newKeyword: string) {
      this.brandColorTheme.update((current) => ({
        ...current,
        keywords: [...current.keywords, newKeyword],
      }));
    }
  
    // Method to remove a keyword
    removeKeyword(keywordToRemove: string) {
      this.brandColorTheme.update((current) => ({
        ...current,
        keywords: current.keywords.filter((keyword) => keyword !== keywordToRemove),
      }));
    }
  
    // Method to get the current state
    getBrandColorTheme() {
      return this.brandColorTheme();
    }

}
