import { Component, computed, input, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'daden-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  colorThemes: Signal<string[]> = input(["select an item..."]);
  selectedColor: WritableSignal<string | null> = signal(null);
  isOpen: WritableSignal<boolean> = signal(false);

  // Method to select an item
  selectItem(item: string) {
    this.selectedColor.set(item);
    // Optionally close the dropdown after selection
    // this.isOpen.set(false);
  }

  // Method to toggle dropdown visibility
  toggleDropdown() {
    this.isOpen.set(!this.isOpen());
  }
}
