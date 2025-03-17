import { signalStore, withState } from '@ngrx/signals';
import { CopywritingCompleted } from './copywriting.model';

type CopywritingState = CopywritingCompleted;

const initialCopywriting: CopywritingState = {
  aboutUsMessage: '',
  productDescription: '',
  callToActionMsg: '',
}

export const CopywritingStore = signalStore(
    withState(initialCopywriting)
);