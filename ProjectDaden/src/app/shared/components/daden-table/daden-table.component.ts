import { CommonModule } from '@angular/common';
import { Component, Input, input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-daden-table',
  imports: [CommonModule],
  templateUrl: './daden-table.component.html',
  styleUrl: './daden-table.component.scss',
  standalone: true
})
export class DadenTableComponent {

  data = input<{ name: string, age: number, country: string, mijnKlets: string }[]>([]);
  columns = input<string[]>([]);
  rowTemplate = input<TemplateRef<any> | null>(null);
  context = input<any>({});

}
