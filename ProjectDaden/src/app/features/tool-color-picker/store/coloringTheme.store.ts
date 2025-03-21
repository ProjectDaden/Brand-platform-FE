import { signalStore, withState } from '@ngrx/signals';
import { ColorPickerThemeCompleted } from './coloringTheme.model';

type ColorPickerThemeState = ColorPickerThemeCompleted;

export const initialColorPickerTheme: ColorPickerThemeState = {
    colorIndustries: [],
    selectedColorIndustry: '',
    colorPersonalities: [],
    selectedColorPersonality: '',
    colorValues: [],
    selectedColorValue: '',
    colorScheme: [],
    selectedcolorScheme: '',
    primaryColor: '',
    secondaryColor: '',
    tertiaryColor: '',
}

export const ColorPickerThemeStore = signalStore(
    withState(initialColorPickerTheme)
);