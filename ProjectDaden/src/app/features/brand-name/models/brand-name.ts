import { signal } from '@angular/core';
import { SignalCollection } from '../../../shared/models/signal-object-creation';

export interface Brandname {
  brandname: string;
  taglineDescription: string;
}

export const BRANDNAME_DEFAULT: Brandname = {
  brandname: '',
  taglineDescription: ''
}

export const BrandnameDefault: SignalCollection<Brandname> = {
  genericSignalCollection: signal(BRANDNAME_DEFAULT)
}