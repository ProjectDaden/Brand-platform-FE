import { Component, inject, signal } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/organisms/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/atoms/daden-group-header/daden-group-header.component';
import { DadenDropdownComponent } from "../../shared/components/daden-dropdown/daden-dropdown.component";
import { BrandColorThemeService } from './services/brand-color-theme.service';

@Component({
  selector: 'tool-color-picker',
  standalone: true,
  imports: [
    DadenHeaderComponent, 
    DadenPageFooterComponent,
    DadenDropdownComponent,
    DadenGroupHeaderComponent],
  templateUrl: './tool-color-picker.component.html'
})
export class ToolColorPickerComponent {

  brandColorThemeService = inject(BrandColorThemeService);

  themes = this.brandColorThemeService.getBrandColorTheme();

  colorThemePlaceholder = signal('Select a color theme...');
  moodPlaceholder = signal('Select a mood...');
  keywordPlaceholder = signal('Select a keyword...');
  colorTheoryPlaceholder = signal('Select a color theory...');

  handleSelection(value: string|null): void {
    console.log('Selection made!', value);
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
