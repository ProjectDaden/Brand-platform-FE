import { signalStore, withState } from '@ngrx/signals';
import { LogoSectionCompleted } from './logo-section.model';

type InitialLogoSectionState = LogoSectionCompleted;

const InitialLogoSection: InitialLogoSectionState = {
    personalities: [],
    selectedPersonality: '',
    primairyLogoPath: '',
    secondaryLogoPath: '',
    iconOnlyLogoPath: '',
}

export const LogoSectionStore = signalStore(
    withState(InitialLogoSection)
);