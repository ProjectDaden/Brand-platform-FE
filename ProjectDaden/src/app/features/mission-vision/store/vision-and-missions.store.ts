import { signalStore, withState } from '@ngrx/signals';
import { VisionAndMissionsCompleted } from './vision-and-missions.model';

type VisionAndMissionsState = VisionAndMissionsCompleted;

export const initialVisionAndMissions: VisionAndMissionsState = {
    purposes: [],
    selectedPurpose: '',
    audiences: [],
    selectedAudience: '',
}

export const VisionAndMissionsStore = signalStore(
    withState(initialVisionAndMissions)
);