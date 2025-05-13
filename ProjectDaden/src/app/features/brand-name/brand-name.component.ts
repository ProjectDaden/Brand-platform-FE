import { Component, OnInit, inject, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { BrandNameService } from './services/brand-name.service';
import { Brandname, BrandnameDefault } from './models/brand-name';
import { brandNameTaglineStore } from './store/brandname-tagline.store';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';
import { ArchetypeSetupService } from '../../services/archetype/archetype-setup.service';

@Component({
  selector: 'app-brand-name-tagline',
  standalone: true,
  providers: [brandNameTaglineStore, BaseClassGlobalStore],
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
  private readonly brandNameService = inject(BrandNameService);
  private readonly translate = inject(TranslateService);
  brandnameAndTaglineStore = inject(brandNameTaglineStore);
  globalStateTest = inject(BaseClassGlobalStore);
  archetypes = inject(ArchetypeSetupService);

  /**
   * Starting position (default) for the brandname component. (DTO)
   * TODO: create loadBrandname instance from service and populate property here. See: brandIndustry component as exaample. 
   */
  newBrandName = BrandnameDefault;

  /**
   * the group headers and texts for indicating the form-context attached to i18n.
   */
  groupHeaderTitleBrandname: string = "";
  groupHeaderSubTitleBrandname: string = "";
  groupHeaderTitleTagline: string = "";
  groupHeaderSubTitleTagline: string = "";
  detailText: string = "";

  brandNameInput = signal<string>("");
  taglineInput = signal<string>("Your tagline here...");
  isDisabled = signal<boolean>(false);

  personalityOptions = this.brandNameService.loadBrandNamePersonaltyOptions();
  watchNEWBrandName = computed(() => this.newBrandName.genericSignalCollection());

  ngOnInit() {
    this.groupHeaderTitleBrandname = this.translate.instant("brandname.form-area.group-title-brandName");
    this.groupHeaderSubTitleBrandname = this.translate.instant("brandname.form-area.group-subTitle-brandName");
    this.groupHeaderTitleTagline = this.translate.instant("brandname.preview-area.group-title-tagline");
    this.groupHeaderSubTitleTagline =this.translate.instant("brandname.preview-area.group-subTitle-tagline");
    this.detailText = "Craft a tagline that reflects your brand’s essence.";

    this.globalStateTest.getStore();
    // this.brandnameAndTaglineStore.updatePersonalityOptionsState(["This"], ["from"], ["BrandNameStore!!"]);
    console.log(this.archetypes.getArchetypeSignal()(), " <--- VANUIT COMPONENT ARCHETYPES");

    console.log(this.archetypes.bodyFonts(), " <--- ALL BODYFONTS IN COMP");
    console.log(this.archetypes.headingFonts(), " <--- ALL HEADINGFONTS IN COMP");
    console.log(this.archetypes.colorRanges(), " <--- ALL COLORRANGE IN COMP");
    console.log(this.archetypes.industries(), " <--- ALL INDUSTRIES IN COMP");
    console.log(this.archetypes.brandvalues(), " <--- ALL BRANDVALUES IN COMP");
  }

  triggerTaglineReview(event: string | undefined, prop: keyof Brandname) {
    if (event) {
      const brandNameProp: Partial<Brandname> = {};
      brandNameProp[prop] = event;
      this.updateNEWBrandnameCollection(brandNameProp);
    }
  }

  updateNEWBrandnameCollection(updates: Partial<ReturnType<typeof this.newBrandName.genericSignalCollection>>){
    this.newBrandName.genericSignalCollection.update(curr => ({...curr, ...updates}));
    console.log(updates, " hier moet ik generic updaten!!");
  }

  onReset() {
    // this.newBrandName.genericSignalCollection.set(BRANDNAME_DEFAULT);
    // this.handlePersonalitySelection('');
    // this.useTagline = BRANDNAME_DEFAULT.tagLineUsed === 'yes';
    // this.tagline = BRANDNAME_DEFAULT.tagLine || '';
    // console.log('RESET');
  }
}