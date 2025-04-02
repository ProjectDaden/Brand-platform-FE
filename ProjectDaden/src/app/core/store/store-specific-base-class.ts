import { Injectable, Signal, signal } from '@angular/core';

@Injectable()
export abstract class BaseStore<T extends object> {
  protected readonly store: Signal<T>;
  private readonly _setState: (newState: T) => void;

  constructor(initialState: T) {
    const stateSignal = signal<T>(initialState);
    this.store = stateSignal;
    this._setState = stateSignal.set;
  }

  get state(): T {
    return this.store();
  }

  resetStore() {
    this._setState({ ...this.state }); // Reset to the initial state
  }

  patchState(updates: Partial<T>) {
    this._setState({ ...this.state, ...updates }); // Merge updates
  }
}