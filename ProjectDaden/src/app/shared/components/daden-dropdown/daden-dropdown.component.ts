import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DadenIconComponent } from '../../components/daden-icon/daden-icon.component';

@Component({
  selector: 'daden-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, DadenIconComponent],
  templateUrl: './daden-dropdown.component.html'
})
export class DadenDropdownComponent {
  items = input<string[]>([]);
  placeholder = input<string>("");
  selectedItem = input<string>("");
  selectedValue = output<string>();
  disabled = input<boolean>(false);

  onModelChange(newValue: string) {
    this.selectedValue.emit(newValue);
  }
}
