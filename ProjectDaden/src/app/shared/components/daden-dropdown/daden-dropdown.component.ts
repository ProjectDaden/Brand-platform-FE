import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DadenIconComponent } from '../../components/daden-icon/daden-icon.component';
import { DadenDropdown } from './models/daden-dropdown';

@Component({
  selector: 'daden-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, DadenIconComponent],
  templateUrl: './daden-dropdown.component.html'
})
export class DadenDropdownComponent{

  /**
   * The items to be displayed in the dropdown.
   */
  dropDownParts = input<DadenDropdown>({
    items: [],
    selectedItem: '',
    disabled: false
  });
  selectedValue = output<string>();


  onModelChange(newValue: string) {
    console.log(" ---> from dropdown", newValue);
    this.selectedValue.emit(newValue);
  }
}
