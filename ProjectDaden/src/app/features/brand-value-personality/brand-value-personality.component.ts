import { Component, inject, Signal, signal } from '@angular/core';
import { BrandValuePersonalityService } from './services/brand-value-personality.service';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenMultiListSelectionComponent } from '../../shared/components/daden-multi-list-selection/daden-multi-list-selection.component';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/organisms/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/atoms/daden-group-header/daden-group-header.component';
import { DadenLabelComponent } from '../../shared/atoms/daden-label/daden-label.component';
import { DadenDetailComponent } from '../../shared/atoms/daden-detail/daden-detail.component';

@Component({
  selector: 'app-brand-value-personality',
  imports: [DadenHeaderComponent, DadenPageFooterComponent, DadenDropdownComponent, DadenMultiListSelectionComponent, DadenGroupHeaderComponent, DadenLabelComponent, DadenDetailComponent],
  templateUrl: './brand-value-personality.component.html',
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
