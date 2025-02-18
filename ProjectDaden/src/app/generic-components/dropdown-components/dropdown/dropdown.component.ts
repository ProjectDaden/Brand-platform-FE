import { Component, input, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'daden-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  items = input<string[]>([]);
  placeholder = input<string>("");
  selectedColor: WritableSignal<string | null> = signal(null);
  isOpen: WritableSignal<boolean> = signal(false);

  // Method to select an item
  selectItem(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedColor.set(selectedValue);
    console.log(this.selectedColor(), "<- currently selected item");
    // Optionally close the dropdown after selection
    // this.isOpen.set(false);
  }

  // Method to toggle dropdown visibility
  toggleDropdown() {
    this.isOpen.set(!this.isOpen());
  }
}
