import { Component, inject, model, signal } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenResetButtonComponent } from '../../shared/components/daden-button-reset/daden-button-reset.component';
import { DadenSaveButtonComponent } from '../../shared/components/daden-button-save/daden-button-save.component';
import { BrandColorThemeService } from '../tool-color-picker/services/brand-color-theme.service';

@Component({
  selector: 'app-socialmedia-styleguide',
  imports: [DadenHeaderComponent, DadenResetButtonComponent, DadenSaveButtonComponent
  ],
  templateUrl: './socialmedia-styleguide.component.html',
  styleUrl: './socialmedia-styleguide.component.scss',
  standalone: true
})
export class SocialmediaStyleguideComponent {

  private brandColorThemeService = inject(BrandColorThemeService);

  // Test Component Logic
  sliderValue: number = 50;
  onSliderChange(value: number) {
    console.log('Slider Value:', value);
  }

  slides: string[] = ['/assets/image1.jpg', '/assets/image2.jpg', '/assets/image3.jpg'];
  isLoading = true;
  totalItems: number = 100;
  itemsPerPage: number = 10;

  tableData = signal<{ name: string; age: number; country: string; mijnKlets: string }[]>([
    { name: 'John', age: 25, country: 'USA', mijnKlets: 'Klets' },
    { name: 'Anna', age: 22, country: 'Canada', mijnKlets: 'Klets2' },
    { name: 'Mike', age: 30, country: 'UK', mijnKlets: 'Klets3' },
  ]);

  inputValue = model<string>('');

  onInputValueChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.inputValue.set(value);
  }

  tableColumns = signal(['Name', 'Age', 'Country', 'Mijn Klets']);
  additionalContext = signal({ showAge: true });

  get currentThemes() {
    return this.brandColorThemeService.colorPaletteCollection.genericSignalCollection();
  }

  onPageChange(page: number) {
    console.log('Current Page:', page);
  }

}
