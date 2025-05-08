import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { IndustryAndValuesCompleted } from './industry-industry.model';

type IndustryAndValuesState = IndustryAndValuesCompleted;

export const initialIndustryAndValues: IndustryAndValuesState = {
    industry: "",
    values: []
}

export const IndustryAndValuesStore = signalStore(
    withState(initialIndustryAndValues),
    withMethods((store) => ({
        updateIndustrtyState(industrySelection: string) {
            patchState(store, { industry: industrySelection});
            console.log("VALUES in IndustryStore --->", store.industry());
        },
        updateValueState(valuesSelection: string[]) {
            patchState(store, (state) => ({ values: valuesSelection }));
            console.log("VALUES in IndustryStore --->", store.values());
            console.log("VALUES in IndustryStore --->", store);
        }
    }))
);