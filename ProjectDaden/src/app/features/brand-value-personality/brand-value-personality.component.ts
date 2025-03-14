import { Component, inject, Signal, signal } from '@angular/core';
import { BrandValuePersonalityService } from './services/brand-value-personality.service';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenMultiListSelectionComponent } from '../../shared/components/daden-multi-list-selection/daden-multi-list-selection.component';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenResetButtonComponent } from '../../shared/components/daden-button-reset/daden-button-reset.component';
import { DadenSaveButtonComponent } from '../../shared/components/daden-button-save/daden-button-save.component';

@Component({
  selector: 'app-brand-value-personality',
  imports: [DadenHeaderComponent, DadenResetButtonComponent, DadenSaveButtonComponent, DadenDropdownComponent, DadenMultiListSelectionComponent],
  templateUrl: './brand-value-personality.component.html',
  styleUrl: './brand-value-personality.component.scss',
  standalone: true
})
export class BrandValuePersonalityComponent {

  brandValuePersonality = inject(BrandValuePersonalityService);

  brandPersonalityValues = this.brandValuePersonality.getBrandValuePersonality();

  // TODO not need to be signals
  industriesPlaceholder: Signal<string> = signal('Select your industry...');
  traitsPlaceholder: Signal<string> = signal('Select your traits...');
  personalityPlaceholder: Signal<string> = signal('Select your personality...');

  handleSelection(value: string|null): void {
    console.log('Selection made!', value);
  }

  handleSelectionChange(selectedItems: string[]) {
    console.log('Selected items:', selectedItems);
  }

}
