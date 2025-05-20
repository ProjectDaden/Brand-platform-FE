import { Component, inject } from '@angular/core';
import { DadenIconComponent } from '../../shared/components/daden-icon/daden-icon.component';
import { DadenPreviewLandingComponent } from '../../shared/components/daden-preview-landing/daden-preview-landing.component';
import { CommonModule } from '@angular/common';
import { AsidePreviewService } from './services/aside-preview.service';

@Component({
  selector: 'aside-previews',
  standalone: true,
  imports: [DadenIconComponent, CommonModule, DadenPreviewLandingComponent ],
  providers: [AsidePreviewService],
  templateUrl: './aside-previews.component.html',
})
export class AsidePreviewsComponent {
  brandnameTaglinePreviews = inject(AsidePreviewService);

  getBrandNameAndTagline = this.brandnameTaglinePreviews.brandnameTaglineState;

}
