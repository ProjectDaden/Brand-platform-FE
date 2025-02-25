import { Component, input } from '@angular/core';

@Component({
  selector: 'daden-slider',
  imports: [],
  templateUrl: './daden-slider.component.html',
  styleUrl: './daden-slider.component.scss',
})
export class DadenSliderComponent {
  slides = input<string[]>([]);
  currentSlideIndex: number = 0;

  // Go to the next slide
  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides().length;
  }

  // Go to the previous slide
  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides().length) % this.slides().length;
  }
}
