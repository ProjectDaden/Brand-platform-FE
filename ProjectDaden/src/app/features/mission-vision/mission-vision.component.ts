import { Component, inject, signal } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';

@Component({
  selector: 'app-mission-vision',
  imports: [DadenHeaderComponent, DadenPageFooterComponent, DadenGroupHeaderComponent, DadenDetailComponent, DadenLabelComponent, DadenInputComponent],
  templateUrl: './mission-vision.component.html',
  standalone: true
})
export class MissionVisionComponent {
  protected readonly session = inject(BaseClassGlobalStore);

  readonly purposes = ['empower', 'inspire', 'connect', 'simplify', 'protect'];
  readonly audiences = ['communities', 'innovators', 'families', 'professionals', 'customers'];

  purposeMode = signal<'preset' | 'custom'>('preset');
  audienceMode = signal<'preset' | 'custom'>('preset');

  constructor() {
    const purpose = this.session.purpose();
    this.purposeMode.set(purpose && !this.purposes.includes(purpose) ? 'custom' : 'preset');
    const audience = this.session.audience();
    this.audienceMode.set(audience && !this.audiences.includes(audience) ? 'custom' : 'preset');
  }

  purposeSelectValue(): string {
    if (this.purposeMode() === 'custom') {
      return 'custom';
    }
    return this.purposes.includes(this.session.purpose()) ? this.session.purpose() : '';
  }

  audienceSelectValue(): string {
    if (this.audienceMode() === 'custom') {
      return 'custom';
    }
    return this.audiences.includes(this.session.audience()) ? this.session.audience() : '';
  }

  onPurposePick(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'custom') {
      this.purposeMode.set('custom');
      if (this.purposes.includes(this.session.purpose())) {
        this.session.update({ purpose: '' });
      }
      return;
    }
    this.purposeMode.set('preset');
    this.session.update({ purpose: value });
  }

  onAudiencePick(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'custom') {
      this.audienceMode.set('custom');
      if (this.audiences.includes(this.session.audience())) {
        this.session.update({ audience: '' });
      }
      return;
    }
    this.audienceMode.set('preset');
    this.session.update({ audience: value });
  }

  updatePurpose(value: string | undefined): void {
    this.session.update({ purpose: value ?? '' });
  }

  updateAudience(value: string | undefined): void {
    this.session.update({ audience: value ?? '' });
  }
}
