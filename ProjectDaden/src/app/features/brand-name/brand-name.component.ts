import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';

@Component({  
  selector: 'app-brand-name-tagline',
  standalone: true,
  imports: [
    TranslateModule,
    DadenHeaderComponent,
    DadenGroupHeaderComponent,
    DadenPageFooterComponent,
    DadenLabelComponent,
    DadenDetailComponent,
    DadenInputComponent,
  ],
  templateUrl: './brand-name.component.html',
})
export class BrandNameComponent implements OnInit {

  /**
   * Injecting the relevant Angular services for this component.
   */
  private readonly translate = inject(TranslateService);
  protected readonly session = inject(BaseClassGlobalStore);

  /**
   * the group headers and texts for indicating the form-context attached to i18n.
   */
  groupHeaderTitleBrandname: string = "";
  groupHeaderSubTitleBrandname: string = "";
  groupHeaderTitleTagline: string = "";
  groupHeaderSubTitleTagline: string = "";

  ngOnInit() {
    this.groupHeaderTitleBrandname = this.translate.instant("brandname.form-area.group-title-brandName");
    this.groupHeaderSubTitleBrandname = this.translate.instant("brandname.form-area.group-subTitle-brandName");
    this.groupHeaderTitleTagline = this.translate.instant("brandname.preview-area.group-title-tagline");
    this.groupHeaderSubTitleTagline = this.translate.instant("brandname.preview-area.group-subTitle-tagline");
  }

  updateBrandname(value: string | undefined): void {
    this.session.update({ brandname: value ?? '' });
  }

  updateTagline(value: string | undefined): void {
    this.session.update({ tagline: value ?? '' });
  }

  onToggle(useTagline: boolean): void {
    this.session.update({ useTagline });
  }
}