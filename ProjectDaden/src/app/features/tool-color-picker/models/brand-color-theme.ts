import { signal } from "@angular/core";
import { SignalCollection } from "../../../shared/models/signal-object-creation";

export interface BrandColorTheme {
  industries: string[];
  personalities: string[];
  values: string[];
  colorTheories: string[];
}

// TODO needs to be a getRequest setting these values and be pkaced in a service for future use when having a backend.
export const brandColorTheme: SignalCollection<BrandColorTheme> = {
  genericSignalCollection: signal({
    industries: ['Bold', 'Elegant', 'Youthful', 'Hallo'],
    personalities: ['Happy', 'Sad', 'Angry', 'Calm'],
    values: ['Calm', 'Trustworthy', 'Tech', 'Fashion', 'Health'],
    colorTheories: ['Complementary', 'Analogous', 'Triad'],
  })
};

