import { signalStore, withState } from '@ngrx/signals';
import { TypographyCompleted } from './typography-section.model';

type TypographySectionState = TypographyCompleted;

export const initialTypographySection: TypographySectionState = {
    personalities: [],
    selectedPersonality: '',
    personalityOptions: {
        synonyms: [],
        headingFonts: [],
        bodyFonts: [],
    },
    typeScales: [],
    selectedTypeScale: '',
}

export const TypographySectionStore = signalStore(
    withState(initialTypographySection)
);