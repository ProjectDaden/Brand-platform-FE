import { Component, computed, effect, ElementRef, input, model, QueryList, Signal, signal, ViewChild, ViewChildren, WritableSignal } from '@angular/core';
import gsap from 'gsap';
import { SliderType } from '../helper-types/helper-types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'daden-input-colorspectrum',
  imports: [FormsModule],
  templateUrl: './daden-input-colorspectrum.component.html',
  styleUrl: './daden-input-colorspectrum.component.scss'
})
export class DadenInputColorspectrumComponent {
  hue = model(30);
  saturation = model(100);
  lightness = model(50);

  hueLabel = input<string>("");
  satLabel = input<string>("");
  tintLabel = input<string>("");

  sliderLabels = model<Record<string, WritableSignal<string>>>({
    labelHue: signal<string>(""),
    labelSat: signal<string>(""),
    labelTint: signal<string>("")
  });

  saturationGradient = computed(() =>
    `linear-gradient(to right, 
     hsl(${this.hue()}, 0%, ${this.lightness()}%), 
     hsl(${this.hue()}, 100%, ${this.lightness()}%)`
  );

  // this.labelHue.set(`Primary Hue (Recommended: ${hueMin}-${hueMax}% )`);

  lightnessGradient = computed(() =>
    `linear-gradient(to right, 
     hsl(${this.hue()}, ${this.saturation()}%, 0%), 
     hsl(${this.hue()}, ${this.saturation()}%, 50%),
     hsl(${this.hue()}, ${this.saturation()}%, 100%)`
  );

  currentColor = computed(() =>
    `hsl(${this.hue()}, ${this.saturation()}%, ${this.lightness()}%)`
  );

   constructor() {
    // Reactively update signal values when parent inputs change
    effect(() => {
      this.sliderLabels()["labelHue"].set(` ${this.hueLabel()}`);
      this.sliderLabels()["labelSat"].set(`Saturation-levels (Recommended: ${this.satLabel()})`);
      this.sliderLabels()["labelTint"].set(`Lightness-levels (Recommended: ${this.tintLabel()})`);
    });
  }

    // Setter methods for external components
  // setHue(value: number) {
  //   this.hue.set(value);
  // }

  // setSaturation(value: number) {
  //   this.saturation.set(value);
  // }

  // setLightness(value: number) {
  //   this.lightness.set(value);
  // }

  // // Get current color as hex
  // getColorAsHex(): string {
  //   return this.hslToHex(
  //     this.hue(), 
  //     this.saturation(), 
  //     this.lightness()
  //   );
  // }

  // Update animation
  animateColorChange() {
    gsap.fromTo('.color-preview',
      { opacity: 0.8, scale: 0.98 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
        backgroundColor: this.currentColor()
      }
    );
  }

    private hslToHex(h: number, s: number, l: number): string {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }


  // use in parent:
  // parent.component.ts
// export class ParentComponent {
//   @ViewChild(ColorPickerComponent) colorPicker!: ColorPickerComponent;

//   setRandomColor() {
//     this.colorPicker.setHue(Math.floor(Math.random() * 360));
//     this.colorPicker.setSaturation(80);
//     this.colorPicker.setLightness(60);
    
//     console.log('Current color:', this.colorPicker.getColorAsHex());
//   }
// }

}

  // colorDegrees = model<number>(50);
  //   hueMinVal = input<number>(0);
  //   hueMaxVal = input<number>(0);
  //   satColorDegrees = model<number>(50);
  //   satMinVal = input<number>(0);
  //   satMaxVal = input<number>(0);
  //   tintMinVal = input<number>(0);
  //   tintMaxVal = input<number>(0);
  //   tintColorDegrees = model<number>(0);

  //   whichSlider = input<SliderType>('hue');

  //   @ViewChildren('sliderElement') sliders!: QueryList<ElementRef>;
  //    backgroundGradient = input<string>(""); // Receive gradient from parent
  //   @ViewChild('sliderContainer', { static: false }) sliderContainer!: ElementRef;

  //   // @ViewChild('hueSlider', { static: false }) hueSlider!: ElementRef;
  //   // @ViewChild('satSlider', { static: false }) satSlider!: ElementRef;
  //   // @ViewChild('tintSlider', { static: false }) tintSlider!: ElementRef;

  // @ViewChild('hueThumb', { static: false }) hueThumb!: ElementRef;
  //   @ViewChild('satThumb', { static: false }) satThumb!: ElementRef;
  //   @ViewChild('tintThumb', { static: false }) tintThumb!: ElementRef;

  //   constructor() {
  //     effect(() => {
  //     if (this.sliderContainer?.nativeElement) {
  //       this.sliderContainer.nativeElement.style.background = this.backgroundGradient;
  //       console.log("Updated Background:", this.backgroundGradient);
  //     }
  //   });
  //     effect(() => {
  //     const hueValue = this.colorDegrees();
  //     const satValue = this.satColorDegrees();
  //     const tintValue = this.tintColorDegrees();

  //     // ✅ Animate Hue Slider
  //     if (this.hueThumb?.nativeElement) {
  //         gsap.to(this.hueThumb.nativeElement, {
  //             left: `${(hueValue / 360) * 100}%`,
  //             duration: 0.5,
  //             ease: 'elastic.out(.3, 0.3)',
  //             scale: 1.2
  //         });
  //     }

  //     // ✅ Animate Saturation Slider
  //     if (this.satThumb?.nativeElement) {
  //         gsap.to(this.satThumb.nativeElement, {
  //             left: `${(satValue / 100) * 100}%`,
  //             duration: 0.5,
  //             ease: 'elastic.out(.3, 0.3)',
  //             scale: 1.2
  //         });
  //     }
  //     if (this.tintThumb?.nativeElement) {
  //         gsap.to(this.tintThumb.nativeElement, {
  //             left: `${(tintValue / 100) * 100}%`,
  //             duration: 0.5,
  //             ease: 'elastic.out(.3, 0.3)',
  //             scale: 1.2
  //         });
  //     }

  //     console.log(`Effect Triggered: Hue -> ${hueValue}, Saturation -> ${satValue}`);
  // });
  //   }


  //   updateHueValue(event: Event) {
  //     const newValue = (event.target as HTMLInputElement).valueAsNumber;
  //     this.colorDegrees.set(newValue);

  //     gsap.to(this.hueThumb.nativeElement, {
  //       left: `${(this.colorDegrees() / 360) * 100}%`,
  //       duration: 0.5,
  //       ease: 'elastic.out(.3, 0.3)',
  //       scale: 1.2
  //     });
  //     console.log(this.colorDegrees(), " <--- AANTAL GRADEN HUE");
  //   }

  //   updateSatValue(event: Event) {
  //     const newValue = (event.target as HTMLInputElement).valueAsNumber;
  //     this.satColorDegrees.set(newValue);

  //     gsap.to(this.satThumb.nativeElement, {
  //       left: `${(this.satColorDegrees())}%`,
  //       duration: 0.5,
  //       ease: 'elastic.out(.3, 0.3)',
  //       scale: 1.2
  //     });
  //     console.log(this.satColorDegrees(), " <--- AANTAL GRADEN SAT");
  //   }

  //   updateTintValue(event: Event) {
  //     const newValue = (event.target as HTMLInputElement).valueAsNumber;
  //     this.tintColorDegrees.set(newValue);

  //     gsap.to(this.tintThumb.nativeElement, {
  //       left: `${(this.tintColorDegrees())}%`,
  //       duration: 0.5,
  //       ease: 'elastic.out(.3, 0.3)',
  //       scale: 1.2
  //     });
  //     console.log(this.tintColorDegrees(), " <--- AANTAL GRADEN LIGHTNESS");
  //   }

  //   // TODO This AFTER VIEW seems not needed. The animations don't need to run on component load.
  //   // ngAfterViewInit() {
  //   //   gsap.set(this.hueThumb?.nativeElement, { left: `${this.colorDegrees()}%` });
  //   //   gsap.set(this.satThumb?.nativeElement, { left: `${this.satColorDegrees()}%` });
  //   //   gsap.set(this.tintThumb?.nativeElement, { left: `${this.tintColorDegrees()}%` });
  //   // }
