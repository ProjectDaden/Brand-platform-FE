import { Component, inject, model, signal, TemplateRef } from '@angular/core';
import { DadenTableComponent } from '../../shared/components/daden-table/daden-table.component';
import { CommonModule } from '@angular/common';
import { DadenCardComponent } from "../../shared/components/daden-card/daden-card.component";
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { BrandColorThemeService } from '../tool-color-picker/services/brand-color-theme.service';

@Component({
  selector: 'app-brand-name',
  imports: [DadenTableComponent, CommonModule, DadenCardComponent, DadenInputComponent],
  templateUrl: './brand-name.component.html',
  styleUrl: './brand-name.component.scss',
  standalone: true,
})
export class BrandNameComponent {

  prop1 = inject(BrandColorThemeService);

  tableData = signal<{name: string, age: number, country: string, mijnKlets: string}[]>([
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

  additionalContext = signal({
    showAge: true,
  });

  get currentThemes() {
    return this.prop1.colorPaletteCollection.genericSignalCollection();
  }
}
