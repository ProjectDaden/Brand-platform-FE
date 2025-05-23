import { Component, OnInit } from '@angular/core';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';

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
export class SectionMessagingComponent implements OnInit {
  problem: string = '';
  solution: string = '';
  selectedBenefit: string = '';

  benefitOptions: string[] = [
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

  constructor() {}

  ngOnInit(): void {
    // Optionally pre-populate with default values if desired
    this.problem = 'boring days';
    this.solution = 'exciting solutions';
    this.selectedBenefit = 'endless joy';
  }

  handleBenefitSelection(benefit: string): void {
    this.selectedBenefit = benefit;
  }

  updateMessaging(): void {
    // This method could trigger updates elsewhere if integrated with a service
    // For now, it just ensures two-way binding updates the preview
  }

  // Output data for connections
  getMessagingData() {
    return {
      problem: this.problem,
      solution: this.solution,
      benefit: this.selectedBenefit,
    };
  }
}