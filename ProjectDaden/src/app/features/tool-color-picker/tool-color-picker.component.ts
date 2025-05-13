import { map } from 'rxjs';
import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DadenDropdownComponent } from "../../shared/components/daden-dropdown/daden-dropdown.component";
import { BrandColorThemeService } from './services/brand-color-theme.service';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenDropdown } from '../../shared/components/daden-dropdown/models/daden-dropdown';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tool-color-picker',
  standalone: true,
  imports: [
    DadenHeaderComponent,
    DadenPageFooterComponent,
    DadenDropdownComponent,
    CommonModule,
    TranslateModule,
    DadenGroupHeaderComponent,
    DadenDetailComponent,
    DadenLabelComponent],
  templateUrl: './tool-color-picker.component.html'
})
export class ToolColorPickerComponent implements OnInit {

  brandColorThemeService = inject(BrandColorThemeService);
  private readonly translate = inject(TranslateService);
  private readonly http = inject(HttpClient);

  private readonly colorTheoryPath = 'assets/tempUsage/color-theory-categories.json';

  themes = this.brandColorThemeService.getBrandColorTheme();
  colorTheoryWatch = computed(() => this.colorTheoryData());

  colorTheoryData = signal<any>({});

  groupHeaderTitleColor: string = "";
  groupHeaderSubTitleColor: string = "";
  dropDownColorTheoryConfig: DadenDropdown = {
    items: [],
    selectedItem: '',
    disabled: false
  }

  constructor() {
            // Effect runs when `dataSignal` updates
            effect(() => {
              console.log('Signal Updated:', this.colorTheoryData());
            });
  };

  colorThemePlaceholder = signal('Select a color theme...');
  moodPlaceholder = signal('Select a mood...');
  keywordPlaceholder = signal('Select a keyword...');
  colorTheoryPlaceholder = signal('Select a color theory...');

  ngOnInit(): void {
    this.groupHeaderTitleColor = this.translate.instant("brand-color-section.form-area.group-title-audience");
    this.groupHeaderSubTitleColor = this.translate.instant("brand-color-section.form-area.group-subTitle-audience");

    console.log(this.loadColorTheory(), " <--- ColorTheory DATA");

    console.log(this.colorTheoryData(), " <--- ColorTheory DATA ON THE LOCAL PROP");
  }

  handleColorTheorySelection(e: string): void {
    console.log('Selection made!', e);
  }

  private loadColorTheory() {
    this.http.get<any>(this.colorTheoryPath).subscribe((data) => {
      this.colorTheoryData.set(data.color_theory);
      const schemes = data.color_theory.schemes;
    
    // Extract only the scheme keys (Simple, Tints, Shades, etc.)
    this.dropDownColorTheoryConfig.items = Object.keys(schemes).map(
      (key) => `${key}: ${schemes[key].description}`
    );
      console.log(data, ' <<< data colorTheory!');
    });
  }

  private initializeSignal<T>(value: T): T {
    return value;
  }

  // updateValue(field: keyof typeof this.selectedData['value'], value: any) {
  //   // Only update if the new value is different
  //   if (this.selectedData()[field] !== value) {
  //     this.selectedData.update((data) => ({
  //       ...data,
  //       [field]: value,
  //     }));
  //   }
  // }

  // // Method to submit data to the backend
  // submit() {
  //   const jsonData = this.selectedData(); // Directly use the signal value
  //   this.http.post('your-backend-endpoint', jsonData).subscribe({
  //     next: (response) => {
  //       console.log('Data submitted successfully:', response);
  //     },
  //     error: (error) => {
  //       console.error('Error submitting data:', error);
  //     },
  //   });
  // }
}
