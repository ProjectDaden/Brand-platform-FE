import { Component, computed, inject } from '@angular/core';
import { NgStyle } from '@angular/common';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenInputRangeComponent } from '../../shared/components/daden-value-slider/daden-input-range.component';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';
import {
  combinedToneSample,
  TONE_AXES,
  ToneAxisKey,
  toneSample,
  toneUi,
} from '../../core/brand/brand-presets';

@Component({
  selector: 'app-voice-and-tone',
  imports: [
    NgStyle,
    DadenHeaderComponent,
    DadenPageFooterComponent,
    DadenGroupHeaderComponent,
    DadenDetailComponent,
    DadenInputRangeComponent,
  ],
  templateUrl: './voice-and-tone.component.html',
  standalone: true,
})
export class VoiceAndToneComponent {
  protected readonly session = inject(BaseClassGlobalStore);
  protected readonly axes = TONE_AXES;

  protected readonly combinedSample = computed(() => combinedToneSample(this.session.snapshot()));
  protected readonly ui = computed(() => toneUi(this.session.snapshot()));
  protected readonly sampleButtonStyle = computed(() => {
    const ui = this.ui();
    return {
      'border-radius': ui.radius,
      'padding': `${ui.padY} ${ui.padX}`,
      'font-weight': String(ui.weight),
      'letter-spacing': ui.letterSpacing,
    };
  });

  axisValue(key: ToneAxisKey): number {
    return this.session.snapshot()[key];
  }

  axisSample(key: ToneAxisKey): string {
    return toneSample(key, this.axisValue(key));
  }

  setTone(attribute: ToneAxisKey, value: number): void {
    this.session.update({ [attribute]: value, toneCustomized: true });
  }
}
