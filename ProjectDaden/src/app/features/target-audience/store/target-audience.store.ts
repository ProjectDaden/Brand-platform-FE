import { signalStore, withState } from '@ngrx/signals';
import { TargetAudienceCompleted } from './target-audience.model';

type TargetAudienceState = TargetAudienceCompleted;

export const initialTargetAudienceState: TargetAudienceState = {
    ageGroups: [],
    selectedAgeGroup: '',
    locations: [],
    selectedLocation: '',
}

export const TargetAudienceStore = signalStore(
    withState(initialTargetAudienceState)
);