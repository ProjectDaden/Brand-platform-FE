import { Component, input, output, forwardRef, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'daden-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './daden-checkbox.component.html',
  styleUrl: './daden-checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DadenCheckboxComponent),
      multi: true,
    },
  ],
})
export class DadenCheckboxComponent implements ControlValueAccessor {
  // Inputs
  label = input<string>(''); // Custom label text
  disabledInput = input<boolean>(false);
  id = input<string>('checkbox-' + Math.random().toString(36).substring(2)); // Unique ID, generated once

  // Writable signal for disabled state
  disabled = signal<boolean>(false);

  // Output for change events
  valueChange = output<boolean>();

  // Internal state for ControlValueAccessor
  internalValue: boolean = false;
  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    effect(() => {
      this.disabled.set(this.disabledInput());
    });
  }

  writeValue(value: boolean): void {
    this.internalValue = !!value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onCheckboxChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.internalValue = input.checked;
    this.onChange(this.internalValue);
    this.onTouched();
    this.valueChange.emit(this.internalValue);
  }
}