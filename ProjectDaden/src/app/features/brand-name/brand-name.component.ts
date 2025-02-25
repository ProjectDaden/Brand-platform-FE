import { Component, signal, TemplateRef } from '@angular/core';
import { DadenTableComponent } from '../../shared/components/daden-table/daden-table.component';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-brand-name',
  imports: [DadenTableComponent, JsonPipe, CommonModule],
  templateUrl: './brand-name.component.html',
  styleUrl: './brand-name.component.scss',
  standalone: true,
})
export class BrandNameComponent {
  tableData = signal<{name: string, age: number, country: string, mijnKlets: string}[]>([
    { name: 'John', age: 25, country: 'USA', mijnKlets: 'Klets' },
    { name: 'Anna', age: 22, country: 'Canada', mijnKlets: 'Klets2' },
    { name: 'Mike', age: 30, country: 'UK', mijnKlets: 'Klets3' },
  ]);

  tableColumns = signal(['Name', 'Age', 'Country', 'Mijn Klets']);

  additionalContext = signal({
    showAge: true,
  });
}
