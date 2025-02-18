import { Component, Signal, signal } from '@angular/core';
import { DropdownComponent } from "../generic-components/dropdown-components/dropdown/dropdown.component";

@Component({
  selector: 'tool-color-picker',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './tool-color-picker.component.html'
})
export class ToolColorPickerComponent {
  items: Signal<string[]> = signal(['Bold', 'Elegant', 'Youthfull']);
}
