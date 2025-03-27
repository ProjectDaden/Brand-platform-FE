import { WritableSignal } from "@angular/core";

export interface DadenCheckbox {
    label: string;
    state: WritableSignal<boolean>;
    disabled: WritableSignal<boolean>
  }