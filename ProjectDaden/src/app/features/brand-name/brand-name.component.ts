import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { Brandname } from './models/brand-name';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';
import { ArchetypeSetupService } from '../../services/archetype/archetype-setup.service';
import { BrandNameService } from './services/brand-name.service';

@Component({
  selector: 'app-brand-name-tagline',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
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
  private readonly brandnameService = inject(BrandNameService);
  private readonly globalStateTest = inject(BaseClassGlobalStore);
  private readonly archetypes = inject(ArchetypeSetupService);

  /**
   * the group headers and texts for indicating the form-context attached to i18n.
   */
  groupHeaderTitleBrandname: string = "";
  groupHeaderSubTitleBrandname: string = "";
  groupHeaderTitleTagline: string = "";
  groupHeaderSubTitleTagline: string = "";
  isDisabled = signal<boolean>(false);

  ngOnInit() {
    this.groupHeaderTitleBrandname = this.translate.instant("brandname.form-area.group-title-brandName");
    this.groupHeaderSubTitleBrandname = this.translate.instant("brandname.form-area.group-subTitle-brandName");
    this.groupHeaderTitleTagline = this.translate.instant("brandname.preview-area.group-title-tagline");
    this.groupHeaderSubTitleTagline = this.translate.instant("brandname.preview-area.group-subTitle-tagline");

    this.globalStateTest.getStore();
  }

  get brandCollectionComputed() {
    return this.brandnameService.completeBrandnameCollectionState();
  }

  triggerUpdateBrandnameTagline(event: string | boolean, prop: keyof Brandname) {
    if (event !== undefined) {
      this.brandnameService.updateBrandnameCollection({ [prop]: event });
    }
  }

  onToggle(val: boolean) {
    this.isDisabled.set(val);
  }

  onReset() { }
}