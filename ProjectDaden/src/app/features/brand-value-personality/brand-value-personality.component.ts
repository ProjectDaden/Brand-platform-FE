import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrandValuePersonalityService } from './services/brand-value-personality.service';
import { DadenMultiListSelectionComponent } from '../../shared/components/daden-multi-list-selection/daden-multi-list-selection.component';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-brand-value-personality',
  imports: [DadenHeaderComponent, TranslateModule, DadenPageFooterComponent, DadenMultiListSelectionComponent, DadenGroupHeaderComponent, DadenLabelComponent, DadenDetailComponent],
  templateUrl: './brand-value-personality.component.html',
  standalone: true
})
export class BrandValuePersonalityComponent implements OnInit {

  private readonly http = inject(HttpClient);
  brandValuePersonality = inject(BrandValuePersonalityService);
  private readonly translate = inject(TranslateService);

  groupHeaderTitleIndustry: string = "";
  groupHeaderSubTitleIndustry: string = "";
  

  brandPersonalityValues = this.brandValuePersonality.getBrandValuePersonality();
  colorTheoryData = signal<any>({});
  private readonly colorTheoryPath = "assets/tempUsage/color-theory-categories.json";

  // TODO not need to be signals
  industriesPlaceholder: Signal<string> = signal('Select your industry...');
  traitsPlaceholder: Signal<string> = signal('Select your traits...');
  personalityPlaceholder: Signal<string> = signal('Select your personality...');

  ngOnInit(): void {
    this.loadColorTheory();
    this.groupHeaderTitleIndustry = "Set your brand name";
    this.groupHeaderSubTitleIndustry = "Give your brand a name that people will recognize";
  }

    private loadColorTheory() {
      this.http.get<any>(this.colorTheoryPath).subscribe((data) => {
        this.colorTheoryData.set(data);
        console.log(data, " <<< data colorTheory!");
      });
    }

  handleSelection(value: string|null): void {
    console.log('Selection made!', value);
  }

  handleSelectionChange(selectedItems: string[]) {
    console.log('Selected items:', selectedItems);
  }

}
