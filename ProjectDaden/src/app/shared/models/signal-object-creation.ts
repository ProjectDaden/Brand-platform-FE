import { Signal } from "@angular/core";

/*
  Interface for the SignalCollection object.
  This object is used to create a signal with a generic type.
*/
export interface SignalCollection<T> {
  genericSignalCollection: Signal<T>;
}