import { Component, computed, effect, inject, input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { BaseClassGlobalStore } from '../../../core/store/brand-design-global.store';
import {
  colorAtLightness,
  combinedToneSample,
  generatedCopy,
  hexToHsl,
  loadGoogleFonts,
  toneUi,
  typeScaleFor,
} from '../../../core/brand/brand-presets';

export type PreviewViewport = 'phone' | 'tablet' | 'desktop';

@Component({
  selector: 'daden-preview-landing',
  templateUrl: './daden-preview-landing.component.html',
  styleUrl: './daden-preview-landing.component.scss',
  standalone: true,
  imports: [NgStyle],
})
export class DadenPreviewLandingComponent {
  protected readonly session = inject(BaseClassGlobalStore);
  readonly viewport = input<PreviewViewport>('phone');

  displayName = computed(() => this.session.brandname().trim() || 'Your brand');
  monogram = computed(() => this.displayName().charAt(0).toUpperCase());
  taglineText = computed(() => (this.session.useTagline() ? this.session.tagline().trim() : ''));
  industryText = computed(() => this.session.industry().trim() || 'small business');
  audienceText = computed(() => this.session.audience().trim() || 'the people you serve');
  purposeText = computed(() => this.session.purpose().trim() || 'make the next step clearer');
  problemText = computed(() => this.session.problem().trim() || 'everyday friction');
  solutionText = computed(() => this.session.solution().trim() || 'a clearer way forward');
  benefitText = computed(() => this.session.benefit().trim() || 'a result people can feel');
  locationText = computed(() => this.session.location().trim());
  ageText = computed(() => this.session.ageRange().trim());
  voiceLine = computed(() => combinedToneSample(this.session.snapshot()));

  private liveCopy = computed(() => generatedCopy(this.session.snapshot()));

  heroText = computed(() =>
    this.session.copyCustomized() && this.session.aboutUs().trim()
      ? this.session.aboutUs()
      : this.liveCopy().aboutUs
  );

  productText = computed(() =>
    this.session.copyCustomized() && this.session.productDescription().trim()
      ? this.session.productDescription()
      : this.liveCopy().productDescription
  );

  ctaLabel = computed(() => {
    const custom = this.session.copyCustomized() ? this.session.cta().trim() : '';
    const label = custom || this.liveCopy().cta;
    return label.length > 28 ? `${label.slice(0, 25)}...` : label;
  });

  previewStyle = computed(() => {
    const primary = this.session.primaryColor();
    const secondary = this.session.secondaryColor();
    const tertiary = this.session.tertiaryColor();
    const scale = typeScaleFor(this.session.typeScaleName());
    const ui = toneUi(this.session.snapshot());
    return {
      '--primary-hue': String(hexToHsl(primary).h),
      '--secondary-hue': String(hexToHsl(secondary).h),
      '--tertiary-hue': String(hexToHsl(tertiary).h),
      '--primary-color-100': primary,
      '--primary-color-150': colorAtLightness(primary, 28),
      '--primary-color-200': colorAtLightness(primary, 14),
      '--primary-color-075': colorAtLightness(primary, 62),
      '--primary-color-050': colorAtLightness(primary, 75),
      '--primary-color-025': colorAtLightness(primary, 86),
      '--primary-color-010': colorAtLightness(primary, 93),
      '--primary-color-005': colorAtLightness(primary, 97),
      '--secondary-color-100': secondary,
      '--secondary-color-050': colorAtLightness(secondary, 75),
      '--secondary-color-025': colorAtLightness(secondary, 86),
      '--secondary-color-005': colorAtLightness(secondary, 97),
      '--tertiary-color-100': tertiary,
      '--ff-heading': `'${this.session.headingFont()}', sans-serif`,
      '--ff-body': `'${this.session.bodyFont()}', sans-serif`,
      '--fs-h1': scale.h1,
      '--fs-h2': scale.h2,
      '--fs-h3': scale.h3,
      '--fs-h4': scale.h4,
      '--fs-h5': scale.h5,
      '--fs-h6': scale.h6,
      '--fs-body': scale.body,
      '--fs-small': scale.small,
      '--fs-detail': scale.detail,
      '--tone-radius': ui.radius,
      '--tone-pad-x': ui.padX,
      '--tone-pad-y': ui.padY,
      '--tone-weight': String(ui.weight),
      '--tone-hover-scale': String(ui.hoverScale),
      '--tone-hover-rotate': ui.hoverRotate,
      '--tone-tracking': ui.letterSpacing,
    };
  });

  constructor() {
    effect(() => {
      loadGoogleFonts([this.session.headingFont(), this.session.bodyFont()]);
    });
  }
}
