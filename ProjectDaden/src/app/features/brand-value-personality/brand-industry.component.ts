import { Condition, Rule } from './../../shared/models/industry-values-connections';
import {
  Component,
  computed,
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
import { IndustryAndValuesStore } from './store/industry-industry.store';
import { BrandIndustryRules } from '../../shared/models/industry-values-connections';

@Component({
  selector: 'app-brand-industry',
  providers: [IndustryAndValuesStore],
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
  private readonly brandIndustryStore = inject(IndustryAndValuesStore);
  private readonly translate = inject(TranslateService);

  brandIndustry = this.brandIndustryService.getBrandIndustry();
  brandIndustryWatch = computed(() => this.brandIndustry());

  groupHeaderTitleIndustry: string = '';
  groupHeaderSubTitleIndustry: string = '';
  brandIndustryList = signal<any>([]);
  selectedArchetype = signal<string[]>([]);
  rules = signal<BrandIndustryRules>({
    rules: []
  });

  groupHeaderTitleBrandname: string = "";
  groupHeaderSubTitleBrandname: string = "";
  industryValues: string[] = [];

  dropDownIndustryConfig: DadenDropdown = {
    placeholder: "Select your industry...",
    items: [],
    selectedItem: '',
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

  private previousIndustryArchetype: string | null = null;

  /**
   * @description Method to handle the industry value of the user. This is also the selection of the associated archetype.
   * @param industry The selected industry the user has positioned himself in.
   */
  handleDropdownIndustry(industry: string) {
    const foundArchetype = this.findArchetypeFromIndustry(industry);

    if (foundArchetype) {
      this.selectedArchetype.update(curr => {
        const filteredArchetypes = curr.filter(archetype => archetype !== this.previousIndustryArchetype);
        this.previousIndustryArchetype = foundArchetype;
        return [...filteredArchetypes, foundArchetype];
      });
    }
    this.brandIndustryStore.updateIndustrtyState(industry);
    this.brandIndustry.update(curr => ({ ...curr, industry }));
    console.log(this.selectedArchetype(), " <--- HOUDT DIE ALLE ARCHETYPES BIJ????");
  }

  /**
   * @description  Method to handle industry (multi) values and the associated archetype-selection process.
   * @param values The selected values from brandindustry - values.
   */
  handleMultipleValues(values: string[]) {
    const foundArchetypes = values.map(value => this.findArchetypeFromValues(value)).filter((found): found is string => !!found);
    // this.selectedArchetype.set(foundArchetypes);
    this.selectedArchetype.update((curr) => [...curr, ...foundArchetypes]);
    this.brandIndustryStore.updateValueState(values);
    this.brandIndustry.update(curr => ({ ...curr, values }));
    // console.log(this.brandIndustryService.industryValuesConnections, " <--- COMPLETE JSON CONNECTIONS BUT HERE IN SERVICE");
    // console.log(this.selectedArchetype(), " <---- ARCHETYPES SELECTED!!!");
    console.log(this.selectedArchetype(), " <--- HOUDT DIE ALLE ARCHETYPES BIJ IN MULTI????");
  }

  /**
   * @description Method to traverse the brandValue Connections object to find archetypes associated with the brandindustry value.
   * @param industryValue The selected Brandindustry value for finding archetype.
   * @returns string archetype or undesined.
   */
  findArchetypeFromValues(industryValue: string): string | undefined {
    return this.brandIndustryService.industryValuesConnections.rules
      .find((rule: Rule) => rule.condition.value?.includes(industryValue))?.archetype;
  }

  /**
    * @description Method to traverse the brandIndustry Connections object to find archetypes associated with the brandindustry industry.
    * @param industryValue The selected Brandindustry for finding archetype.
    * @returns string archetype or undesined.
    */
  findArchetypeFromIndustry(industryValue: string): string | undefined {
    return this.brandIndustryService.industryValuesConnections.rules
      .find((rule: Rule) => rule.condition.industry?.includes(industryValue))?.archetype;
  }

  isIndustryBased(archetype: string): boolean {
    return ["Hero", "Caregiver", "Explorer", "Creator", "Innocent", "Sage", "Jester", "Magician", "Rebel", "Ruler", "Everyman", "Lover"]
      .includes(archetype);
  }
}