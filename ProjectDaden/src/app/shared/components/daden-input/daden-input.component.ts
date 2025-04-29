import { Component,input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'daden-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daden-input.component.html',
})
export class DadenInputComponent {

  private inputSubject = new Subject<string>();
  id = input('input-field');
  type = input('text');
  placeholder = input('Enter value...');
  isDisabled = input<boolean>(false);
  accept = input('');
  rows = input(4);
  value = model<string>();
  chechkValue = model<boolean>(true);

  constructor() {
    this.inputSubject.pipe(debounceTime(300)).subscribe((debouncedValue) => {
      this.value.set(debouncedValue);
      console.log(this.value(), " <<< Input GENERIC Working in Generic input");
    });
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    this.inputSubject.next(target.value);
  }

  onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      this.value.set(file.name);
    }
  }

  onCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.chechkValue.set(target.checked);
  }

  

  //  // Input signals
  //  id = input('input-field');
  //  type = input('text');
  //  accept = input('');
  //  disabled = input(false);
  //  placeholder = input('Enter your value...');
  //  rows = input(4); // Applies when the type is "textarea"

  //  // Signal for the value (used internally and for output)
  //  value: WritableSignal<string> = signal('');

  //  // Output signal for two-way binding or parent notification
  //  valueChange = output<string>();

  //  // Subject for debouncing
  //  private inputSubject = new Subject<string>();

  //  constructor() {
  //    // Apply debouncing to input changes
  //    this.inputSubject.pipe(debounceTime(300)).subscribe((debouncedValue) => {
  //      this.value.set(debouncedValue); // Update internal signal
  //      this.valueChange.emit(debouncedValue); // Emit debounced value via output signal
  //    });
  //  }

  //  onInputChange(event: Event): void {
  //    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
  //    this.inputSubject.next(target.value); // Emit raw value for debouncing
  //  }


  // @Input() id: string = 'input-field';
  // @Input() type: string = 'text';
  // @Input() accept: string = '';
  // @Input() disabled: boolean = false;
  // @Input() placeholder: string = 'placeholder...';
  // @Input() rows: number = 4; // For type="textarea"
  // @Output() fileChange = new EventEmitter<{ event: Event; type: string }>();

  // // Internal value for ControlValueAccessor
  // value: string = '';
  // private inputSubject = new Subject<string>();

  // // ControlValueAccessor callbacks
  // private onChange: (value: string) => void = () => {};
  // private onTouched: () => void = () => {};

  // ngOnInit() {
  //   // Apply debouncing to all text-like inputs
  //   if (['text', 'textarea', 'name', 'password', 'email'].includes(this.type)) {
  //     this.inputSubject.pipe(debounceTime(300)).subscribe(value => {
  //       this.value = value;
  //       this.onChange(value); // Notify form control of changes
  //       console.log(value); // TODO: Remove log eventually
  //     });
  //   }
  // }

  // // ControlValueAccessor methods
  // writeValue(value: string): void {
  //   this.value = value || ''; // Handle null/undefined
  // }

  // registerOnChange(fn: (value: string) => void): void {
  //   this.onChange = fn;
  // }

  // registerOnTouched(fn: () => void): void {
  //   this.onTouched = fn;
  // }

  // setDisabledState(isDisabled: boolean): void {
  //   this.disabled = isDisabled;
  // }

  // onInputChange(event: Event) {
  //   const target = event.target as HTMLInputElement | HTMLTextAreaElement;
  //   const value = target.value;
  //   if (['text', 'textarea', 'name', 'password', 'email'].includes(this.type)) {
  //     this.inputSubject.next(value);
  //     this.onTouched(); // Mark as touched
  //   } else if (this.type === 'file') {
  //     this.fileChange.emit({ event, type: this.type });
  //   }
  // }
}