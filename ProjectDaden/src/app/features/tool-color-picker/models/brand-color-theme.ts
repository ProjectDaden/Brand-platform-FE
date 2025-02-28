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
    colorTheories: ['simple', 'tints', 'shades', 'tones', 'analogous', 'split analogous','Triad', 'complementary'],
    // Simple = 1 hsl value
    // Tints = hsl plus lightness (1x and 2x +10-20%)
    // Shades = hsl minus lightness (1x and 2x -10-20%)
    // Tones = hsl minus saturation (1x and 2x -15-40%)
    // Analogous = hsl value plus 1 adjacent hue (30-60 degrees)
    // Split analogous = hsl value plus 2 adjacent hues (-30-60 degrees and +30-60 degrees)
    // Triad = hsl value plus 2 evenly spaced hsl hues (-120 degrees and +120 degrees)
    // Complementary = hsl value plus opposite hsl hue (180 degrees)
  })
};

