import { Component, input, InputSignal, model, output } from '@angular/core';

@Component({
  selector: 'daden-input-range',
  imports: [],
  templateUrl: './daden-input-range.component.html',
  styleUrl: './daden-input-range.component.scss'
})
export class DadenInputRangeComponent {

  min: InputSignal<number> = input<number>(0);
  max: InputSignal<number> = input<number>(100);
  step: InputSignal<number> = input<number>(1);
  value = model<number>(50);
  valueChange = output<number>();

  onSliderChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const numValue = parseFloat(target.value);
    this.value.set(numValue);
    this.valueChange.emit(this.value());
  }

}
