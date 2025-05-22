import { signalStore, withState, withMethods, patchState, withComputed } from '@ngrx/signals';
import { IndustryAndValuesCompleted } from './brand-industry.model';
import { computed, inject, Injectable, Signal } from '@angular/core';
import { BrandIndustry } from '../models/brand-industry-interface';

type IndustryAndValuesState = IndustryAndValuesCompleted;

export const initialIndustryAndValues: IndustryAndValuesState = {
    brandIndustry: "",
    brandValues: []
}

export const IndustryAndValuesStore = signalStore(
    { providedIn: "root" },
    withState(initialIndustryAndValues),
    withMethods((store) => ({
        updateIndustrtyState(industrySelection: string) {
            patchState(store, { brandIndustry: industrySelection });
            console.log("BRANDINDUSTRY --->", store.brandIndustry());
        },
        updateValueState(valuesSelection: string[]) {
            patchState(store, { brandValues: valuesSelection });
            console.log("BRANDINDUSTRYVALUES --->", store.brandValues());
        }
    })),
    withComputed((store) => ({
        brandIndustryCollectionState: computed<BrandIndustry>(() => ({
            industry: store.brandIndustry(),
            values: store.brandValues()
        }))
    }))
);

@Injectable({ providedIn: 'root' })
export class BaseClassBrandIndustryStore {
    private readonly brandIndustryStoreFlow = inject(IndustryAndValuesStore);

    get brandIndustryState(): Signal<BrandIndustry> {
        return this.brandIndustryStoreFlow.brandIndustryCollectionState;
    }

    updateBrandIndustry(industrySelection: string) {
        this.brandIndustryStoreFlow.updateIndustrtyState(industrySelection);
    }

    updateBrandValues(valuesSelection: string[]) {
        this.brandIndustryStoreFlow.updateValueState(valuesSelection);
    }
}