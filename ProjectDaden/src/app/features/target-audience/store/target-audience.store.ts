import { signalStore, withState } from '@ngrx/signals';
import { TargetAudienceCompleted } from './target-audience.model';

type TargetAudienceState = TargetAudienceCompleted;

const initialTargetAudienceState: TargetAudienceState = {
    ageGroups: [],
    selectedAgeGroup: '',
    locations: [],
    selectedLocation: '',
    interests: [],
    selectedInterest: '',
    behaviors: [],
    selectedBehavior: '',
    goalsAndAspirations: [],
    selectedGoal: '',
    fearsAndFrustrations: [],
    selectedIndustry: '',
}

export const IndustryAndValuesStore = signalStore(
    withState(initialTargetAudienceState)
);