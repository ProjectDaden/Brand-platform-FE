import { signal, WritableSignal } from "@angular/core";
import { SignalCollection } from "../../../shared/models/signal-object-creation";

export interface BrandColorTheme {
  colorThemes: string[];
  moods: string[];
  keywords: string[];
  colorTheories: string[];
}

// TODO needs to be a getRequest setting these values and be pkaced in a service for future use when having a backend.
export const brandColorTheme: SignalCollection<BrandColorTheme> = {
  genericSignalCollection: signal({
    colorThemes: ['Bold', 'Elegant', 'Youthful', 'Hallo'],
    moods: ['Happy', 'Sad', 'Angry', 'Calm'],
    keywords: ['Calm', 'Trustworthy', 'Tech', 'Fashion', 'Health'],
    colorTheories: ['Complementary', 'Analogous', 'Triad'],
  }) as WritableSignal<BrandColorTheme>
};


