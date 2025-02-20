import { Component, signal, TemplateRef } from '@angular/core';
import { DadenTableComponent } from '../../shared/components/daden-table/daden-table.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-brand-name',
  imports: [DadenTableComponent, JsonPipe],
  templateUrl: './brand-name.component.html',
  styleUrl: './brand-name.component.scss',
  standalone: true,
})
export class BrandNameComponent {
  tableData = signal([
    { name: 'John', age: 25, country: 'USA' },
    { name: 'Anna', age: 22, country: 'Canada' },
    { name: 'Mike', age: 30, country: 'UK' },
  ]);

  tableColumns = signal(['Name', 'Age', 'Country']);

  additionalContext = signal({
    showAge: true,
  });

  rowTemplate!: TemplateRef<any>;
}
