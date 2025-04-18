import { signalStore, withState } from '@ngrx/signals';
import { MessagingToneCompleted } from './messaging-tone.model';

type ToneOfVoiceState = MessagingToneCompleted;

export const initialMessagingTone: ToneOfVoiceState = {
    coreMessage: '',
    solutionMessage: '',
    beneficiary: [],
}

export const ToneOfVoiceStore = signalStore(
    withState(initialMessagingTone)
);