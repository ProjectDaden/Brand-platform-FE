import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'daden-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daden-accordion.component.html',
  styles: [],
})
export class DadenAccordionComponent {
  // Input for accordion items
  @Input() items: { title: string; content: string; open?: boolean }[] = [];

  // Toggle the open state of an item
  toggleItem(index: number) {
    this.items[index].open = !this.items[index].open;
  }
}