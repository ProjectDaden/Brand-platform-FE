import { Component, OnInit, inject } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';
import { generatedCopy } from '../../core/brand/brand-presets';

@Component({
  selector: 'app-section-copywriting',
  templateUrl: './section-copywright.component.html',
  standalone: true,
  imports: [DadenHeaderComponent, DadenPageFooterComponent, DadenGroupHeaderComponent, DadenLabelComponent, DadenDetailComponent, DadenInputComponent],
})
export class SectionCopywrightComponent implements OnInit {
  protected readonly session = inject(BaseClassGlobalStore);

  ngOnInit(): void {
    if (this.session.copyCustomized()) {
      return;
    }
    this.session.update(generatedCopy(this.session.snapshot()));
  }

  updateAbout(value: string | undefined): void {
    this.session.update({ aboutUs: value ?? '', copyCustomized: true });
  }

  updateProduct(value: string | undefined): void {
    this.session.update({ productDescription: value ?? '', copyCustomized: true });
  }

  updateCta(value: string | undefined): void {
    this.session.update({ cta: value ?? '', copyCustomized: true });
  }
}
