import { Component, inject } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenButtonComponent } from '../../shared/components/daden-button/daden-button.component';
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';

@Component({
  selector: 'app-section-logo',
  imports: [
    DadenHeaderComponent,
    DadenInputComponent,
    DadenPageFooterComponent,
    DadenGroupHeaderComponent,
    DadenDetailComponent,
    DadenLabelComponent,
    DadenButtonComponent
  ],
  templateUrl: './section-logo.component.html',
  standalone: true,
})
export class SectionLogoComponent {
  protected readonly session = inject(BaseClassGlobalStore);

  onFileChange(event: Event, type: 'primary' | 'secondary' | 'icon') {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : null;
      if (type === 'primary') {
        this.session.update({ logoPrimary: result });
      } else if (type === 'secondary') {
        this.session.update({ logoSecondary: result });
      } else {
        this.session.update({ logoIcon: result });
      }
    };
    reader.readAsDataURL(file);
  }

  clearLogo(type: 'primary' | 'secondary' | 'icon') {
    if (type === 'primary') {
      this.session.update({ logoPrimary: null });
    } else if (type === 'secondary') {
      this.session.update({ logoSecondary: null });
    } else {
      this.session.update({ logoIcon: null });
    }
    const input = document.getElementById(`${type}-upload`) as HTMLInputElement | null;
    if (input) {
      input.value = '';
    }
  }
}