import { Component, inject, model, signal } from '@angular/core';
import { BrandColorThemeService } from '../tool-color-picker/services/brand-color-theme.service';
import { DadenTableComponent } from '../../shared/components/daden-table/daden-table.component';
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { DadenCardComponent } from '../../shared/components/daden-card/daden-card.component';
import { DadenPaginationComponent } from '../../shared/components/daden-pagination/daden-pagination.component';
import { DadenSliderComponent } from '../../shared/components/daden-slider/daden-slider.component';
import { DadenValueSliderComponent } from '../../shared/components/daden-value-slider/daden-value-slider.component';

@Component({
  selector: 'app-socialmedia-styleguide',
  imports: [
    DadenTableComponent, 
    DadenInputComponent, 
    DadenCardComponent, 
    DadenPaginationComponent, 
    DadenSliderComponent,
    DadenValueSliderComponent
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
