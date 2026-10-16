import { Component, computed, input, InputSignal, model } from '@angular/core';

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

  fillPercent = computed(() => {
    const span = this.max() - this.min();
    if (span <= 0) {
      return 0;
    }
    return ((this.value() - this.min()) / span) * 100;
  });

  onSliderChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value.set(parseFloat(target.value));
  }

}
