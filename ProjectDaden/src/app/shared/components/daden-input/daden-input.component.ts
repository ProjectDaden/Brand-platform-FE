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
  chechkValue = model<boolean>(false);
  minValue = input<number>(0);
  maxValue = input<number>(0);
  stepValue = input<number>(0);
  defaultValue = input<number>(0);
  defaultColor = input<string>("#ff0000");
  selectedColor = signal<string>(this.defaultColor());

  constructor() {
    this.rangeChangeSubject.pipe(debounceTime(300)).subscribe(value => {
      this.onRangeChange(value);
      console.log(this.value(), " <<< Input RANGE INPUT Working in Generic input");
    });
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    // this.inputSubject.next(target.value);
    this.value.set(target.value);
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
}
