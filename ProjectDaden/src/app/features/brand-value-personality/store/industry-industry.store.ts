import { signalStore, withState } from '@ngrx/signals';
import { IndustryAndValuesCompleted } from './industry-industry.model';

type IndustryAndValuesState = IndustryAndValuesCompleted;

export const initialIndustryAndValues: IndustryAndValuesState = {
    industries: [],
    values: []
}

export const IndustryAndValuesStore = signalStore(
    withState(initialIndustryAndValues)
);