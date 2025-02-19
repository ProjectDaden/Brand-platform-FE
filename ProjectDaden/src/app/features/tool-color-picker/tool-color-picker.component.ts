import { Component, signal } from '@angular/core';
import { DadenDropdownComponent } from "../../shared/components/daden-dropdown/daden-dropdown.component";

@Component({
  selector: 'tool-color-picker',
  standalone: true,
  imports: [DadenDropdownComponent],
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

  handleSelection(value: string|null): void {
    console.log('Selection made!', value);
  }
}
