import {
  Component,
  computed,
  effect,
  input,
  model,
  signal,
  WritableSignal,
} from '@angular/core';
import gsap from 'gsap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'daden-input-colorspectrum',
  imports: [FormsModule, CommonModule],
  templateUrl: './daden-input-colorspectrum.component.html',
  styleUrl: './daden-input-colorspectrum.component.scss',
})
export class DadenInputColorspectrumComponent {

readonly hueMin = input<number>(240);
readonly hueMax = input<number>(270);
readonly center = input<number>(240);
readonly indicatorHue = input<number>(0);

readonly satMin = signal<string>("50%");
readonly satMax = signal<number>(40);

readonly tintMin = signal<string>("30%");
readonly tintMax = signal<number>(40);

get indicatorLeft(): string {
  return `${(this.hueMin() / 360) * 100}%`;
}

get indicatorWidth(): number {
  return ((this.hueMax() - this.hueMin()) / 360) * 100;
}





  hue = model(30);
  saturation = model(100);
  lightness = model(50);

  hueLabel = input<string>('');
  satLabel = input<string>('');
  tintLabel = input<string>('');

  initialHue = signal<number>(this.hue()); // ← from your data source
  hue2 = signal<number>(this.hue());

  sliderLabels = model<Record<string, WritableSignal<string>>>({
    labelHue: signal<string>(''),
    labelSat: signal<string>(''),
    labelTint: signal<string>(''),
  });

  saturationGradient = computed(
    () =>
      `linear-gradient(to right, 
     hsl(${this.hue()}, 0%, ${this.lightness()}%), 
     hsl(${this.hue()}, 100%, ${this.lightness()}%)`
  );

  lightnessGradient = computed(
    () =>
      `linear-gradient(to right, 
     hsl(${this.hue()}, ${this.saturation()}%, 0%), 
     hsl(${this.hue()}, ${this.saturation()}%, 50%),
     hsl(${this.hue()}, ${this.saturation()}%, 100%)`
  );

  currentColor = computed(
    () => `hsl(${this.hue()}, ${this.saturation()}%, ${this.lightness()}%)`
  );

    colorBlocks = computed(() => {
    const h = this.hue();
    const s = this.saturation();
    const baseL = this.lightness();

    return Array.from({ length: 9 }, (_, i) => {
      const stepL = Math.min(baseL + i * 5, 100);
      return {
        hsl: `hsl(${h}, ${s}%, ${stepL}%)`,
        hex: this.hslToHex(h, s, stepL),
        label: `primary-${(i + 1) * 100}`,
      };
    });
  });

  constructor() {
    effect(() => {
      this.sliderLabels()['labelHue'].set(` ${this.hueLabel()}`);
      this.sliderLabels()['labelSat'].set(
        `Saturation-levels (Recommended: ${this.satLabel()})`
      );
      this.sliderLabels()['labelTint'].set(
        `Lightness-levels (Recommended: ${this.tintLabel()})`
      );
    });
  }

  // Update animation
  animateColorChange() {
    gsap.fromTo(
      '.color-preview',
      { opacity: 0.8, scale: 0.98 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
        backgroundColor: this.currentColor(),
      }
    );
  }

  private hslToHex(h: number, s: number, l: number): string {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }
}
