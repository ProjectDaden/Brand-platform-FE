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
  selectedOptions: string[] = [];
selectedOptionsState = input<string[]>([]); // New input for selected options

  onSelectionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);
    this.selectionChange.emit(this.selectedOptions); // Emit the selected values
    console.log(`Selected ${this.selectedOptions.length} items: ${this.selectedOptions.join(', ')}`);
  }

  isSelected(option: string): boolean {
    return this.selectedOptionsState().includes(option);
  }

      // This method is optional if the [selected] binding in the template works as expected
    // Kept for robustness or if additional logic is needed
  private updateSelectedOptions() {
    const selectElement = document.querySelector('select') as HTMLSelectElement;
    if (selectElement) {
      Array.from(selectElement.options).forEach(option => {
        option.selected = this.selectedOptionsState().includes(option.value);
      });
    }
  }
}
