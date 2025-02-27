import { Component, input, output } from '@angular/core';

@Component({
  selector: 'daden-multi-list-selection',
  imports: [],
  templateUrl: './daden-multi-list-selection.component.html',
  styleUrl: './daden-multi-list-selection.component.scss'
})
export class DadenMultiListSelectionComponent {
  options = input<string[]>([]);
  selectionChange = output<string[]>();
  // @Input() options: string[] = []; // Input for options
  // @Output() selectionChange = new EventEmitter<string[]>(); // Output for selected values

  selectedOptions: string[] = [];

  onSelectionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);
    this.selectionChange.emit(this.selectedOptions); // Emit the selected values
    console.log(`Selected ${this.selectedOptions.length} items: ${this.selectedOptions.join(', ')}`);
  }

}
