import { Component, input, output, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'daden-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './daden-dropdown.component.html',
  styleUrl: './daden-dropdown.component.scss'
})
export class DadenDropdownComponent {
  items = input<string[]>([]);
  placeholder = input<string>("");
  selectedValue = output<string>();

  selectItem(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedValue.emit(selectedValue);
  }
}
