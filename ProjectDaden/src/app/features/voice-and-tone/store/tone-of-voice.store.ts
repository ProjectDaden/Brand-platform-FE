import { signalStore, withState } from '@ngrx/signals';
import { ToneOfVoiceCompleted } from './tone-of-voice.model';

type ToneOfVoiceState = ToneOfVoiceCompleted;

const initialToneOfVoice: ToneOfVoiceState = {
    formalityIndex: 0,
    playfulnessIndex: 0,
    respectIndex: 0,
    emotionIndex: 0,
}

export const VisionAndMissionsStore = signalStore(
    withState(initialToneOfVoice)
);