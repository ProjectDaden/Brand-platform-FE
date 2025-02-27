import { signal } from "@angular/core";
import { SignalCollection } from "../../../shared/models/signal-object-creation";

export interface BrandValuePersonality {
    industries: string[];
    traits: string[];
    personalities: string[];
}

export const brandValuePersonality: SignalCollection<BrandValuePersonality> = {
  genericSignalCollection: signal({
    industries: ['Technology', 'Retail', 'Education', 'Healthcare', 'Finance', 'Youthful', 'Hallo'],
    traits: ['Innovative', 'Trustworthy', 'Playful', 'Sustainable', 'Reliable', 'Bold'],
    personalities: ['Creator', 'Jester', 'Explorer', 'Caregiver', 'Hero', 'Sage'],
  })
};