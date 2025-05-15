import { BaseClassBrandNameAndTaglineStore, brandNameTaglineStore } from './../brand-name/store/brandname-tagline.store';
import { Component, inject, signal, Signal } from '@angular/core';
import { DadenIconComponent } from '../../shared/components/daden-icon/daden-icon.component';
import { DadenPreviewLandingComponent } from '../../shared/components/daden-preview-landing/daden-preview-landing.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aside-previews',
  standalone: true,
  imports: [DadenIconComponent, CommonModule, DadenPreviewLandingComponent ],
  templateUrl: './aside-previews.component.html',
})
export class AsidePreviewsComponent {

  brandNameTaglineStore = inject(BaseClassBrandNameAndTaglineStore);

  readonly brandnamePreview = this.brandNameTaglineStore.brandnameTaginleState;

}
