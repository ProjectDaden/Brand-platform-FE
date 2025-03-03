import { signal } from '@angular/core';
import { SignalCollection } from '../../../shared/models/signal-object-creation';

export interface BrandName {
  personalityOptions: string[];
  tagLineUsed: 'yes' | 'no';
  tagLine: string;
  synonymOptions: string[];
  selectedPersonality: string;
  selectedHeadingFont: string;
  selectedBodyFont: string;

//   handlePersonalitySelection(personality: string): void;
//   handleTagLineUsed(used: 'yes' | 'no'): void;
//   handleTagLine(tagLine: string): void;
//   handleSynonymSelection(synonyms: string[]): void;
//   loadSynonymsBasedOnPersonality(personality: string): void;
}

export const brandNameDefault: SignalCollection<BrandName> = {
  genericSignalCollection: signal({
    personalityOptions: ['Hero', 'Caregiver', 'Explorer', 'Creator', 'Innocent', 'Sage', 'Jester',
    'Magician', 'Rebel', 'Ruler', 'Everyman', 'Lover'],
    tagLineUsed: 'no',
    tagLine: '',
    synonymOptions: [],
    selectedPersonality: 'Jester',
    selectedHeadingFont: '',
    selectedBodyFont: '',
    // handlePersonalitySelection: (personality: string) => {},
    // handleTagLineUsed: (used: 'yes' | 'no') => {},
    // handleTagLine: (tagLine: string) => {},
    // handleSynonymSelection: (synonyms: string[]) => {},
  }),
};
