import { signalStore, withState } from '@ngrx/signals';
import { BrandNameAndTaglineCompleted } from './brandname-tagline.model';

type BrandNameState = BrandNameAndTaglineCompleted;

const initialBrandnameAndTagline: BrandNameState = {
    personalities: [],
    selectedPersonality: '',
    personalityOptions: {
        synonyms: [],
        headingFonts: [],
        bodyFonts: [],
    },
    tagLineUsed: 'no',
    tagLine: '',
}

export const BrandNameStore = signalStore(
    withState(initialBrandnameAndTagline)
);