import {
  Component,
  inject,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { BrandIndustryService } from './services/brand-industry.service';
import { DadenMultiListSelectionComponent } from '../../shared/components/daden-multi-list-selection/daden-multi-list-selection.component';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenDropdown } from '../../shared/components/daden-dropdown/models/daden-dropdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand-industry',
  imports: [
    DadenHeaderComponent,
    TranslateModule,
    CommonModule,
    DadenPageFooterComponent,
    DadenMultiListSelectionComponent,
    DadenGroupHeaderComponent,
    DadenLabelComponent,
    DadenDetailComponent,
    DadenDropdownComponent,
  ],
  templateUrl: './brand-industry.component.html',
  standalone: true,
})
export class BrandIndustryComponent implements OnInit {
  private readonly brandIndustryService = inject(BrandIndustryService);

  private readonly translate = inject(TranslateService);

  groupHeaderTitleIndustry: string = '';
  groupHeaderSubTitleIndustry: string = '';
  combinedSelectedArchetypes = this.brandIndustryService.combinedSelectedArchetypes;

  groupHeaderTitleBrandname: string = "";
  groupHeaderSubTitleBrandname: string = "";
  industryValues: string[] = [];

  dropDownIndustryConfig: DadenDropdown = {
    placeholder: "Select your industry...",
    items: [],
    selectedItem: this.brandIndustryCollectionComputed.industry,
    disabled: false,
  };

  // TODO not need to be signals
  industriesPlaceholder: Signal<string> = signal('Select your industry...');
  traitsPlaceholder: Signal<string> = signal('Select your traits...');
  personalityPlaceholder: Signal<string> = signal('Select your personality...');

  ngOnInit(): void {
    this.groupHeaderTitleIndustry = this.translate.instant("industry-and-values.preview-area.preview-title");
    this.groupHeaderSubTitleIndustry = this.translate.instant("industry-and-values.preview-area.preview-description");
    this.groupHeaderTitleIndustry = this.translate.instant('industry-and-values.form-area.group-title-industry');
    this.groupHeaderSubTitleIndustry = this.translate.instant('industry-and-values.form-area.group-subTitle-industry');

    this.brandIndustryService.loadBrandIndustry().subscribe((data) => {
      this.dropDownIndustryConfig.items = data.industryOptions;
    });
    this.brandIndustryService.loadIndustryValues().subscribe((data) => {
      this.industryValues = data.valueOptions;
    });
    this.brandIndustryService.loadBrandIndustryValueConnections();
  }

  get brandIndustryCollectionComputed() {
    return this.brandIndustryService.completeBrandIndustryCollectionState();
  }

  /**
   * @description Method to handle the industry value of the user. This is also the selection of the associated archetype.
   * @param industry The selected industry the user has positioned himself in.
   */
  handleDropdownIndustry(industry: string) {
    const foundArchetype = this.brandIndustryService.findArchetypeFromIndustry(industry);
    if (!foundArchetype) return;

    this.brandIndustryService.selectedIndustryArchetype.set(foundArchetype);
    console.log("TRIGGERING INDUSTRY COMPONENT WITH FOUNDARCHETYPE ---> ", foundArchetype);
    this.brandIndustryService.updateBrandIndustryCollection({ industry });
  }

  /**
   * @description  Method to handle industry (multi) values and the associated archetype-selection process.
   * @param values The selected values from brandindustry - values.
   */
  handleMultipleValues(values: string[]) {
    this.brandIndustryService.updateBrandIndustryCollection({values});
    const foundArchetypes = values
      .map(value => this.brandIndustryService.findArchetypeFromValues(value))
      .filter((found): found is string => !!found);
    this.brandIndustryService.selectedValueArchetypes.set(foundArchetypes);
  }
}