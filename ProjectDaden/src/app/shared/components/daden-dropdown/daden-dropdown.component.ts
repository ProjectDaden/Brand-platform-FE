import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'daden-dropdown',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './daden-dropdown.component.html',
  styleUrl: './daden-dropdown.component.scss'
})
export class DadenDropdownComponent {
  items = input<string[]>([]);
  placeholder = input<string>("");
  selectedItem = input<string>("");
  selectedValue = output<string>();

  onModelChange(newValue: string) {
    this.selectedValue.emit(newValue);
  }
}
