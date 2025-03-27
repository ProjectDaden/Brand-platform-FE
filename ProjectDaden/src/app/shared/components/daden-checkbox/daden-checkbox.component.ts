import { Component, input, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DadenCheckbox } from './models/daden-checkbox';

@Component({
  selector: 'daden-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './daden-checkbox.component.html',
  styleUrl: './daden-checkbox.component.scss',
})
export class DadenCheckboxComponent {

  checkboxes = input<DadenCheckbox[]>([]);

  allChecked: WritableSignal<boolean> = signal(false);

  toggleAllCheckboxes(): void {
    const isAllChecked = this.allChecked();
    this.checkboxes().forEach((checkbox) => {
      if (!checkbox.disabled()) {
        checkbox.state.set(!isAllChecked);
      }
    });
    this.allChecked.set(!isAllChecked);
  }

  // Method to check if all checkboxes are disabled
  areAllDisabled(): boolean {
    return this.checkboxes().every((checkbox) => checkbox.disabled());
  }

  // Method to update the "Select All" checkbox state
  updateAllCheckedState(): void {
    const areAllChecked = this.checkboxes().every(
      (checkbox) => checkbox.state() || checkbox.disabled()
    );
    this.allChecked.set(areAllChecked);
  }
}