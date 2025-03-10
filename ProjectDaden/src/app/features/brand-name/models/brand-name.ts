import { signal } from '@angular/core';
import { SignalCollection } from '../../../shared/models/signal-object-creation';
import { PersonalityOptions } from './personalities-options';

export interface BrandName {
  personalities: string[];
  tagLineUsed: 'yes' | 'no';
  tagLine: string;
  selectedPersonality: string;
  personalityOptions: PersonalityOptions;

//   handlePersonalitySelection(personality: string): void;
//   handleTagLineUsed(used: 'yes' | 'no'): void;
//   handleTagLine(tagLine: string): void;
//   handleSynonymSelection(synonyms: string[]): void;
//   loadSynonymsBasedOnPersonality(personality: string): void;
}

export const brandNameDefault: SignalCollection<BrandName> = {
  genericSignalCollection: signal({
    personalities: ['Hero', 'Caregiver', 'Explorer', 'Creator', 'Innocent', 'Sage', 'Jester',
    'Magician', 'Rebel', 'Ruler', 'Everyman', 'Lover'],
    tagLineUsed: 'no',
    tagLine: '',
    selectedPersonality: 'Jester',
    personalityOptions: {} as PersonalityOptions,
    // handlePersonalitySelection: (personality: string) => {},
    // handleTagLineUsed: (used: 'yes' | 'no') => {},
    // handleTagLine: (tagLine: string) => {},
    // handleSynonymSelection: (synonyms: string[]) => {},
  }),
};
