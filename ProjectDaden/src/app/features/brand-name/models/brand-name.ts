import { signal } from '@angular/core';
import { SignalCollection } from '../../../shared/models/signal-object-creation';
import { PersonalityOptions } from '../store/personalities-options';

export interface BrandName {
  personalities: string[];
  tagLineUsed: 'yes' | 'no';
  tagLine: string;
  selectedPersonality: string;
  personalityOptions: PersonalityOptions;
}

export const DEFAULT_BRAND_NAME_VALUES: BrandName = {
  personalities: ['Hero', 'Caregiver', 'Explorer', 'Creator', 'Innocent', 'Sage', 'Jester',
    'Magician', 'Rebel', 'Ruler', 'Everyman', 'Lover'],
  tagLineUsed: 'no',
  tagLine: '',
  selectedPersonality: '',
  personalityOptions: {} as PersonalityOptions
};

export const brandNameDefault: SignalCollection<BrandName> = {
  genericSignalCollection: signal(DEFAULT_BRAND_NAME_VALUES),
};

export interface NEWBrandname {
  brandname: string;
  taglineDescription: string;
}

export const NEW_BRANDNAME_DEFAULT: NEWBrandname = {
  brandname: '',
  taglineDescription: ''
}

export const NEWBrandnameDefault: SignalCollection<NEWBrandname> = {
  genericSignalCollection: signal(NEW_BRANDNAME_DEFAULT)
}