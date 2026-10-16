import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { DadenButtonComponent } from '../../components/daden-button/daden-button.component';
import { BaseClassGlobalStore } from '../../../core/store/brand-design-global.store';
import { BRAND_WIZARD_STEPS, wizardStepIndex } from '../../../core/brand/brand-steps';

@Component({
  selector: 'daden-page-footer',
  imports: [DadenButtonComponent],
  templateUrl: './daden-page-footer.component.html'
})
export class DadenPageFooterComponent {
  private readonly session = inject(BaseClassGlobalStore);
  private readonly router = inject(Router);
  protected readonly error = signal('');

  currentKey(): string | null {
    const index = wizardStepIndex(this.router.url);
    return index === -1 ? null : BRAND_WIZARD_STEPS[index].key;
  }

  nextPath(): string | null {
    const index = wizardStepIndex(this.router.url);
    if (index === -1) {
      return BRAND_WIZARD_STEPS[BRAND_WIZARD_STEPS.length - 1].path;
    }
    return BRAND_WIZARD_STEPS[index + 1]?.path ?? null;
  }

  stillInvalid(): boolean {
    const key = this.currentKey();
    if (key === 'brandname-and-tagline') {
      return !this.session.brandname().trim();
    }
    if (key === 'industry-and-values') {
      return !this.session.industry().trim();
    }
    return false;
  }

  reset(): void {
    const key = this.currentKey();
    if (!key || key === 'brand-style-guide') {
      return;
    }
    this.session.resetStep(key);
    this.error.set('');
  }

  continue(): void {
    const key = this.currentKey();
    if (key === 'brandname-and-tagline' && !this.session.brandname().trim()) {
      this.error.set('Add a brand name before continuing.');
      return;
    }
    if (key === 'industry-and-values' && !this.session.industry().trim()) {
      this.error.set('Choose an industry before continuing.');
      return;
    }

    if (key) {
      this.session.markStepComplete(key);
    }

    const next = this.nextPath();
    if (!next) {
      return;
    }
    this.error.set('');
    void this.router.navigateByUrl(next);
  }
}
