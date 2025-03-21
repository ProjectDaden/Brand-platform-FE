import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'daden-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './daden-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, // Register as a ControlValueAccessor
      useExisting: forwardRef(() => DadenInputComponent),
      multi: true,
    },
  ],
})
export class DadenInputComponent implements ControlValueAccessor {
  @Input() id: string = 'input-field';
  @Input() type: string = 'text';
  @Input() accept: string = '';
  @Input() disabled: boolean = false;
  @Input() placeholder: string = 'placeholder...';
  @Input() rows: number = 4; // For type="textarea"
  @Output() fileChange = new EventEmitter<{ event: Event; type: string }>();

  // Internal value for ControlValueAccessor
  value: string = '';
  private inputSubject = new Subject<string>();

  // ControlValueAccessor callbacks
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit() {
    // Apply debouncing to all text-like inputs
    if (['text', 'textarea', 'name', 'password', 'email'].includes(this.type)) {
      this.inputSubject.pipe(debounceTime(300)).subscribe(value => {
        this.value = value;
        this.onChange(value); // Notify form control of changes
        console.log(value); // TODO: Remove log eventually
      });
    }
  }

  // ControlValueAccessor methods
  writeValue(value: string): void {
    this.value = value || ''; // Handle null/undefined
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const value = target.value;
    if (['text', 'textarea', 'name', 'password', 'email'].includes(this.type)) {
      this.inputSubject.next(value);
      this.onTouched(); // Mark as touched
    } else if (this.type === 'file') {
      this.fileChange.emit({ event, type: this.type });
    }
  }
}