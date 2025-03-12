import { signal } from '@angular/core';
import { SignalCollection } from '../../../shared/models/signal-object-creation';
import { PersonalityOptions } from './personalities-options';

export interface BrandName {
  personalities: string[];
  tagLineUsed: 'yes' | 'no';
  tagLine: string;
  selectedPersonality: string;
  personalityOptions: PersonalityOptions;
}

export const brandNameDefault: SignalCollection<BrandName> = {
  genericSignalCollection: signal({
    personalities: ['Hero', 'Caregiver', 'Explorer', 'Creator', 'Innocent', 'Sage', 'Jester',
    'Magician', 'Rebel', 'Ruler', 'Everyman', 'Lover'],
    tagLineUsed: 'no',
    tagLine: '',
    selectedPersonality: 'Jester',
    personalityOptions: {} as PersonalityOptions
  }),
};
