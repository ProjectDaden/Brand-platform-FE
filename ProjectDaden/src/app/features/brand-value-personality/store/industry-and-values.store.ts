import { signalStore, withState } from '@ngrx/signals';
import { IndustryAndValuesCompleted } from './industry-and-value.model';

type IndustryAndValuesState = IndustryAndValuesCompleted;

const initialIndustryAndValues: IndustryAndValuesState = {
    industries: [],
    selectedIndustry: '',
    traits: [],
    personalities: [],
    selectedPersonality: '',
}

export const IndustryAndValuesStore = signalStore(
    withState(initialIndustryAndValues)
);