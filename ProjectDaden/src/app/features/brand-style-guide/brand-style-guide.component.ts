import { Component, computed, effect, inject } from '@angular/core';
import { NgStyle } from '@angular/common';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenButtonComponent } from '../../shared/components/daden-button/daden-button.component';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';
import { brandStory, combinedToneSample, contrastRatio, generatedCopy, hexToRgb, loadGoogleFonts, TONE_AXES, toneSample, toneUi } from '../../core/brand/brand-presets';

@Component({
  selector: 'app-brand-style-guide',
  standalone: true,
  imports: [NgStyle, DadenHeaderComponent, DadenButtonComponent],
  templateUrl: './brand-style-guide.component.html',
  styleUrl: './brand-style-guide.component.scss',
})
export class BrandStyleGuideComponent {
  protected readonly session = inject(BaseClassGlobalStore);

  story = computed(() => brandStory(this.session.snapshot()));
  copy = computed(() => {
    const snapshot = this.session.snapshot();
    if (snapshot.copyCustomized) {
      return {
        aboutUs: snapshot.aboutUs,
        productDescription: snapshot.productDescription,
        cta: snapshot.cta,
      };
    }
    return generatedCopy(snapshot);
  });

  toneAxes = computed(() => {
    const snapshot = this.session.snapshot();
    return TONE_AXES.map((axis) => ({
      ...axis,
      value: snapshot[axis.key],
      sample: toneSample(axis.key, snapshot[axis.key]),
    }));
  });

  voiceLine = computed(() => combinedToneSample(this.session.snapshot()));
  sampleButtonStyle = computed(() => {
    const ui = toneUi(this.session.snapshot());
    return {
      'border-radius': ui.radius,
      padding: `${ui.padY} ${ui.padX}`,
      'font-weight': String(ui.weight),
      'letter-spacing': ui.letterSpacing,
    };
  });

  swatches = computed(() => [
    { name: 'Primary', hex: this.session.primaryColor() },
    { name: 'Secondary', hex: this.session.secondaryColor() },
    { name: 'Tertiary', hex: this.session.tertiaryColor() },
  ].map((swatch) => ({
    ...swatch,
    rgb: hexToRgb(swatch.hex),
    onWhite: contrastRatio(swatch.hex, '#ffffff').toFixed(2),
  })));

  constructor() {
    effect(() => {
      loadGoogleFonts([this.session.headingFont(), this.session.bodyFont()], 'daden-guide-fonts');
    });
  }

  printGuide(): void {
    window.print();
  }
}
