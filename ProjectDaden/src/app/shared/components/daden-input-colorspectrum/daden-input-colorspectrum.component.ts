import { Component, effect, ElementRef, input, model, QueryList, ViewChild, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import { SliderType } from '../helper-types/helper-types';

@Component({
  selector: 'daden-input-colorspectrum',
  imports: [],
  templateUrl: './daden-input-colorspectrum.component.html',
  styleUrl: './daden-input-colorspectrum.component.scss'
})
export class DadenInputColorspectrumComponent {
  colorDegrees = model<number>(50);
  hueMinVal = input<number>(0);
  hueMaxVal = input<number>(0);
  satColorDegrees = model<number>(50);
  satMinVal = input<number>(0);
  satMaxVal = input<number>(0);
  tintMinVal = input<number>(0);
  tintMaxVal = input<number>(0);
  tintColorDegrees = model<number>(0);

  whichSlider = input<SliderType>('hue');

  @ViewChildren('sliderElement') sliders!: QueryList<ElementRef>;
   backgroundGradient = input<string>(""); // Receive gradient from parent
  @ViewChild('sliderContainer', { static: false }) sliderContainer!: ElementRef;

  // @ViewChild('hueSlider', { static: false }) hueSlider!: ElementRef;
  // @ViewChild('satSlider', { static: false }) satSlider!: ElementRef;
  // @ViewChild('tintSlider', { static: false }) tintSlider!: ElementRef;

  @ViewChild('hueThumb', { static: false }) hueThumb!: ElementRef;
  @ViewChild('satThumb', { static: false }) satThumb!: ElementRef;
  @ViewChild('tintThumb', { static: false }) tintThumb!: ElementRef;

  constructor() {
    effect(() => {
    if (this.sliderContainer?.nativeElement) {
      this.sliderContainer.nativeElement.style.background = this.backgroundGradient;
      console.log("Updated Background:", this.backgroundGradient);
    }
  });
    effect(() => {
    const hueValue = this.colorDegrees();
    const satValue = this.satColorDegrees();
    const tintValue = this.tintColorDegrees();
    
    // ✅ Animate Hue Slider
    if (this.hueThumb?.nativeElement) {
        gsap.to(this.hueThumb.nativeElement, {
            left: `${(hueValue / 360) * 100}%`,
            duration: 0.5,
            ease: 'elastic.out(.3, 0.3)',
            scale: 1.2
        });
    }

    // ✅ Animate Saturation Slider
    if (this.satThumb?.nativeElement) {
        gsap.to(this.satThumb.nativeElement, {
            left: `${(satValue / 100) * 100}%`,
            duration: 0.5,
            ease: 'elastic.out(.3, 0.3)',
            scale: 1.2
        });
    }
    if (this.tintThumb?.nativeElement) {
        gsap.to(this.tintThumb.nativeElement, {
            left: `${(tintValue / 100) * 100}%`,
            duration: 0.5,
            ease: 'elastic.out(.3, 0.3)',
            scale: 1.2
        });
    }

    console.log(`Effect Triggered: Hue -> ${hueValue}, Saturation -> ${satValue}`);
});
  }


  updateHueValue(event: Event) {
    const newValue = (event.target as HTMLInputElement).valueAsNumber;
    this.colorDegrees.set(newValue);

    gsap.to(this.hueThumb.nativeElement, {
      left: `${(this.colorDegrees() / 360) * 100}%`,
      duration: 0.5,
      ease: 'elastic.out(.3, 0.3)',
      scale: 1.2
    });
    console.log(this.colorDegrees(), " <--- AANTAL GRADEN HUE");
  }

  updateSatValue(event: Event) {
    const newValue = (event.target as HTMLInputElement).valueAsNumber;
    this.satColorDegrees.set(newValue);

    gsap.to(this.satThumb.nativeElement, {
      left: `${(this.satColorDegrees())}%`,
      duration: 0.5,
      ease: 'elastic.out(.3, 0.3)',
      scale: 1.2
    });
    console.log(this.satColorDegrees(), " <--- AANTAL GRADEN SAT");
  }

  updateTintValue(event: Event) {
    const newValue = (event.target as HTMLInputElement).valueAsNumber;
    this.tintColorDegrees.set(newValue);

    gsap.to(this.tintThumb.nativeElement, {
      left: `${(this.tintColorDegrees())}%`,
      duration: 0.5,
      ease: 'elastic.out(.3, 0.3)',
      scale: 1.2
    });
    console.log(this.tintColorDegrees(), " <--- AANTAL GRADEN LIGHTNESS");
  }

  // TODO This AFTER VIEW seems not needed. The animations don't need to run on component load.
  // ngAfterViewInit() {
  //   gsap.set(this.hueThumb?.nativeElement, { left: `${this.colorDegrees()}%` });
  //   gsap.set(this.satThumb?.nativeElement, { left: `${this.satColorDegrees()}%` });
  //   gsap.set(this.tintThumb?.nativeElement, { left: `${this.tintColorDegrees()}%` });
  // }

}
