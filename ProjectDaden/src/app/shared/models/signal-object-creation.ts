import { Signal, WritableSignal } from "@angular/core";

/*
  Interface for the SignalCollection object.
  This object is used to create a signal object with a generic type.
*/
export interface SignalCollection<T> {
  genericSignalCollection: WritableSignal<T>;
}