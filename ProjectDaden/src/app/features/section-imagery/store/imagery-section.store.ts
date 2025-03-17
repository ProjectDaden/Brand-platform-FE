import { signalStore, withState } from '@ngrx/signals';
import { ImagerySectionCompleted } from './imagery-section.model';

type ImagerySectionState = ImagerySectionCompleted;

const InitialImagerySection: ImagerySectionState = {
    personalities: [],
    selectedPersonality: '',
    imageryStyles: [],
    selectedImageryStyle: '',
    stockLibInput: '',
}

export const LogoSectionStore = signalStore(
    withState(InitialImagerySection)
);