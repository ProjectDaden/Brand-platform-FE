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
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';
import { titleCaseArchetype } from '../../core/brand/brand-presets';

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
  protected readonly session = inject(BaseClassGlobalStore);

  private readonly translate = inject(TranslateService);

  groupHeaderTitleIndustry: string = '';
  groupHeaderSubTitleIndustry: string = '';

  groupHeaderTitleBrandname: string = "";
  groupHeaderSubTitleBrandname: string = "";
  industryValues: string[] = [];

  dropDownIndustryConfig: DadenDropdown = {
    placeholder: "Select your industry...",
    items: [],
    selectedItem: this.session.industry(),
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
      this.dropDownIndustryConfig = {
        ...this.dropDownIndustryConfig,
        items: data.industryOptions,
        selectedItem: this.session.industry(),
      };
    });
    this.brandIndustryService.loadIndustryValues().subscribe((data) => {
      this.industryValues = data.valueOptions;
    });
    this.brandIndustryService.loadBrandIndustryValueConnections();
  }

  /**
   * @description Method to handle the industry value of the user. This is also the selection of the associated archetype.
   * @param industry The selected industry the user has positioned himself in.
   */
  handleDropdownIndustry(industry: string) {
    this.session.update({ industry });
    this.brandIndustryService.updateBrandIndustryCollection({ industry });
    const foundArchetype = this.brandIndustryService.findArchetypeFromIndustry(industry) ?? '';
    this.brandIndustryService.selectedIndustryArchetype.set(foundArchetype);
    this.publishArchetype();
  }

  /**
   * @description  Method to handle industry (multi) values and the associated archetype-selection process.
   * @param values The selected values from brandindustry - values.
   */
  handleMultipleValues(values: string[]) {
    this.session.update({ values });
    this.brandIndustryService.updateBrandIndustryCollection({ values });
    const foundArchetypes = values
      .map(value => this.brandIndustryService.findArchetypeFromValues(value))
      .filter((found): found is string => !!found);
    this.brandIndustryService.selectedValueArchetypes.set(foundArchetypes);
    this.publishArchetype();
  }

  private publishArchetype(): void {
    const names = this.brandIndustryService.combinedSelectedArchetypes();
    if (!names.length) {
      this.session.update({ archetype: '' });
      return;
    }

    const counts = new Map<string, number>();
    for (const name of names) {
      counts.set(name, (counts.get(name) ?? 0) + 1);
    }

    const primary = [...counts.entries()].sort((left, right) => right[1] - left[1])[0]?.[0];
    if (!primary) {
      return;
    }

    this.session.update({ archetype: titleCaseArchetype(primary) });
  }
}