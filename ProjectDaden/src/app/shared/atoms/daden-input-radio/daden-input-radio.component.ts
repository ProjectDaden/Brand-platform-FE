import { Component, input, output, forwardRef, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'daden-input-radio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './daden-input-radio.component.html',
  styleUrl: './daden-input-radio.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DadenInputRadioComponent),
      multi: true,
    },
  ],
})
export class DadenInputRadioComponent implements ControlValueAccessor {
  // Inputs
  name = input<string>(''); // Radio group name
  value = input<string>(''); // Value for this radio option
  disabledInput = input<boolean>(false); // Renamed to avoid conflict
  id = input<string>('radio-' + Math.random().toString(36).substring(2)); // Unique ID

  // Writable signal for disabled state
  disabled = signal<boolean>(false);

  // Output for change events
  valueChange = output<string>();

  // Internal state for ControlValueAccessor
  internalValue: string = '';
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    // Sync the disabled signal with the disabledInput input
    effect(() => {
      this.disabled.set(this.disabledInput());
    });
  }

  // ControlValueAccessor methods
  writeValue(value: string): void {
    this.internalValue = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled); // Update the writable signal
  }

  // Handle radio change
  onRadioChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.checked) {
      this.internalValue = this.value();
      this.onChange(this.internalValue);
      this.onTouched();
      this.valueChange.emit(this.internalValue);
    }
  }
}