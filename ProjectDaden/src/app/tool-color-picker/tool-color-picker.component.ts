import { Component, signal } from '@angular/core';
import { DropdownComponent } from "../generic-components/dropdown-components/dropdown/dropdown.component";

@Component({
  selector: 'tool-color-picker',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './tool-color-picker.component.html'
})
export class ToolColorPickerComponent {

  colorThemes = signal<string[]>(['Bold', 'Elegant', 'Youthfull', "hallo"]);
  colorThemePlaceholder = signal('Select a color theme...');
  moods = signal<string[]>(['Happy', 'Sad', 'Angry', 'Calm']);
  moodPlaceholder = signal('Select a mood...');
  keywords = signal<string[]>(['Calm', 'Trustworthy', 'Tech', 'Fashion', 'Health']);
  keywordPlaceholder = signal('Select a keyword...');
  colorTheories = signal<string[]>(['Complementary', 'Analogous', 'Triad']);
  colorTheoryPlaceholder = signal('Select a color theory...');

}
