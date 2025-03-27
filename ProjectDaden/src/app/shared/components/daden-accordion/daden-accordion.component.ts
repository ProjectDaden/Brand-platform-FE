import { Component, input, Input } from '@angular/core';
 import { CommonModule } from '@angular/common';
import { DadenAccordion } from './models/daden-accordion';
 
 @Component({
   selector: 'daden-accordion',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './daden-accordion.component.html',
   styles: [],
 })
 export class DadenAccordionComponent {
   // Input for accordion items
   items = input<DadenAccordion[]>([
    { title: "", content: "", open: false }
  ]);
 
   // Toggle the open state of an item
   toggleItem(index: number) {
     this.items()[index].open = !this.items()[index].open;
   }
 }