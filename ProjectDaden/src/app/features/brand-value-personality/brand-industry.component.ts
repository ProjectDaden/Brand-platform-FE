import {
  Component,
  computed,
  inject,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
import { brandIndustryDefault } from './models/brand-industry-interface';
import { CommonModule } from '@angular/common';
import { IndustryAndValuesStore } from './store/industry-industry.store';

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
  private readonly http = inject(HttpClient);
  private readonly brandIndustryService = inject(BrandIndustryService);
  private readonly brandIndustryStore = inject(IndustryAndValuesStore);
  private readonly translate = inject(TranslateService);

  brandIndustryListPath = 'assets/tempUsage/brand-industry.json';

  groupHeaderTitleIndustry: string = '';
  groupHeaderSubTitleIndustry: string = '';
  brandIndustryList = signal<any>([]);

  dropDownIndustryConfig: DadenDropdown = {
    placeholder: "Select your industry...",
    items: [],
    selectedItem: '',
    disabled: false,
  };

  groupHeaderTitleBrandname: string = "";
  groupHeaderSubTitleBrandname: string = "";

  industryValues: string[] = [];

  brandIndustry = brandIndustryDefault;

  brandIndustryWatch = computed(() =>
    this.brandIndustry.genericSignalCollection()
  );

  brandPersonalityValues = this.brandIndustryService.getBrandValuePersonality();
  colorTheoryData = signal<any>({});

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
      console.log(data.industryOptions, " <--- Industry GET");
      this.dropDownIndustryConfig.items = data.industryOptions;
    });
    this.brandIndustryService.loadIndustryValues().subscribe((data) => {
      console.log(data.valueOptions, " <--- IndustryValues get");
      this.industryValues = data.valueOptions;
    })
  }

  handleDropdownSelection(industry: string){
    this.brandIndustry.genericSignalCollection.update(curr => ({ ...curr, industry}));
    console.log(industry, "CATCHED FROM INDUSTRY PARENT");
  }

  handleMultipleValues(values: string[]) {
    this.brandIndustry.genericSignalCollection.update(curr => ({ ...curr, values}));
    console.log(values, " <--- FROM MULTIPVALUES");
  }
}
