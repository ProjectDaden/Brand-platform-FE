import { Component, model } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-daden-input',
  imports: [],
  templateUrl: './daden-input.component.html',
  styleUrl: './daden-input.component.scss',
  standalone: true
})
export class DadenInputComponent {
  inputValue = model<string>('');
  inputSubject = new Subject<string>();

  ngOnInit() {
    this.inputSubject.pipe(
      debounceTime(300) // Set the debounce time to 300ms
    ).subscribe(value => {
      console.log(value); // TODO remove log eventually
      this.inputValue.set(value);
    });
  }

  onInputChange(evt: Event) {
    const inputElement = evt.target as HTMLInputElement;
    const value = inputElement.value;
    this.inputSubject.next(value);
  }

  /*
  How to use in the parent of the application .ts-file:

  - Define a WritableSignal -> model with the type of the value.
  inputValue = model<string>('');

  - Define a Method to track changes from the inputFlield.
  onInputValueChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.inputValue.set(value);
  }

  - HTML file:
  <app-daden-input (valueChange)="onInputValueChange($event)"></app-daden-input>
  */
}
