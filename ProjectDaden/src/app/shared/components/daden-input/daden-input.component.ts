import { Component,input, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, debounceTime } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'daden-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './daden-input.component.html',
})
export class DadenInputComponent {

  private readonly inputSubject = new Subject<string>();
  private readonly rangeChangeSubject = new Subject<number>();
  
  id = input<string>('input-field');
  type = input<string>('text');
  placeholder = input<string>('Enter value...');
  isDisabled = input<boolean>(false);
  accept = input('');
  rows = input(4);
  value = model<string>();
  chechkValue = model<boolean>(true);
  minValue = input<number>(0);
  maxValue = input<number>(0);
  stepValue = input<number>(0);
  defaultValue = input<number>(0);
  defaultColor = input<string>("#ff0000");
  selectedColor = signal<string>(this.defaultColor());

  constructor() {
    this.inputSubject.pipe(debounceTime(300)).subscribe((debouncedValue) => {
      this.value.set(debouncedValue);
      console.log(this.value(), " <<< Input GENERIC Working in Generic input");
    });
    this.rangeChangeSubject.pipe(debounceTime(300)).subscribe(value => {
      this.onRangeChange(value);
      console.log(this.value(), " <<< Input RANGE INPUT Working in Generic input");
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

  debouncedOnRangeChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = Number(inputElement.value);
    this.rangeChangeSubject.next(value);
  }

  onRangeChange(value: number): void {
    console.log("Debounced range value:", value);
  }

  onColorChange(event: Event): void{
    const inputElement = event.target as HTMLInputElement;
    this.selectedColor.set(inputElement.value);
    console.log('Selected Color:', this.selectedColor);
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