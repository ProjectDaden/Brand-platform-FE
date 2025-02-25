import { Component, inject, model, signal } from '@angular/core';
import { DadenTableComponent } from '../../shared/components/daden-table/daden-table.component';
import { CommonModule } from '@angular/common';
import { DadenCardComponent } from "../../shared/components/daden-card/daden-card.component";
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { BrandColorThemeService } from '../tool-color-picker/services/brand-color-theme.service';
import { DadenLoadingComponent } from "../../shared/components/daden-loading/daden-loading.component";
import { DadenPaginationComponent } from '../../shared/components/daden-pagination/daden-pagination.component';
import { DadenSliderComponent } from '../../shared/components/daden-slider/daden-slider.component';

@Component({
  selector: 'app-brand-name',
  imports: [
    DadenTableComponent, 
    CommonModule, 
    DadenCardComponent, 
    DadenInputComponent, 
    DadenLoadingComponent, 
    DadenPaginationComponent,
    DadenSliderComponent],
  templateUrl: './brand-name.component.html',
  styleUrl: './brand-name.component.scss',
  standalone: true,
})
export class BrandNameComponent {

  prop1 = inject(BrandColorThemeService);

  
  slides: string[] = [
    '/assets/image1.jpg',
    '/assets/image2.jpg',
    '/assets/image3.jpg'
  ];

  // loading component
  isLoading = true;

    // Pagination component
  totalItems: number = 100; // Total number of items dependend on data-input
  itemsPerPage: number = 10; // Items per page

  // Table component
  tableData = signal<{name: string, age: number, country: string, mijnKlets: string}[]>([
    { name: 'John', age: 25, country: 'USA', mijnKlets: 'Klets' },
    { name: 'Anna', age: 22, country: 'Canada', mijnKlets: 'Klets2' },
    { name: 'Mike', age: 30, country: 'UK', mijnKlets: 'Klets3' },
  ]);

  // Input component
  inputValue = model<string>('');

  // Input component event
  onInputValueChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.inputValue.set(value);
  }

  // Table component
  tableColumns = signal(['Name', 'Age', 'Country', 'Mijn Klets']);

  // Table component context
  additionalContext = signal({
    showAge: true,
  });

  // Color theme service
  get currentThemes() {
    return this.prop1.colorPaletteCollection.genericSignalCollection();
  }

  // Pagination component needs Fetch or update data based on the current page
  onPageChange(page: number) {
    console.log('Current Page:', page);
  }

  
}
