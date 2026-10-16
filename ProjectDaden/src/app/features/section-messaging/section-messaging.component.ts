import { Component, computed, inject } from '@angular/core';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';
import { DadenDropdown } from '../../shared/components/daden-dropdown/models/daden-dropdown';

@Component({
  selector: 'app-section-messaging',
  templateUrl: './section-messaging.component.html',
  styleUrls: ['./section-messaging.component.scss'],
  standalone: true,
  imports: [
    DadenHeaderComponent,
    DadenPageFooterComponent,
    DadenDropdownComponent,
    DadenGroupHeaderComponent,
    DadenDetailComponent,
    DadenLabelComponent,
    DadenInputComponent],
})
export class SectionMessagingComponent {
  protected readonly session = inject(BaseClassGlobalStore);

  private readonly benefitOptions: string[] = [
    'unmatched quality',
    'endless joy',
    'total convenience',
    'game-changing innovation',
    'timeless value',
    'pure excitement',
    'effortless solutions',
    'trusted reliability',
    'bold creativity',
    'authentic connection',
  ];

  benefitDropdown = computed<DadenDropdown>(() => ({
    items: this.benefitOptions,
    placeholder: 'Select a benefit...',
    selectedItem: this.session.benefit(),
    disabled: false,
  }));

  updateProblem(value: string | undefined): void {
    this.session.update({ problem: value ?? '' });
  }

  updateSolution(value: string | undefined): void {
    this.session.update({ solution: value ?? '' });
  }

  updateBenefit(benefit: string): void {
    this.session.update({ benefit });
  }
}
