import { Component } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenGroupHeaderComponent } from '../../shared/atoms/daden-group-header/daden-group-header.component';
import { DadenAccordionComponent } from '../../shared/molecules/daden-accordion/daden-accordion.component';
import { DadenButtonComponent } from '../../shared/atoms/daden-button/daden-button.component';
import { DadenPageFooterComponent } from '../../shared/organisms/daden-page-footer/daden-page-footer.component';
import { DadenLoadingComponent } from '../../shared/components/daden-loading/daden-loading.component';
import { DadenPaginationComponent } from '../../shared/components/daden-pagination/daden-pagination.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DadenLabelComponent } from '../../shared/atoms/daden-label/daden-label.component';
import { DadenDetailComponent } from '../../shared/atoms/daden-detail/daden-detail.component';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenModalComponent } from '../../shared/components/daden-modal/daden-modal.component';
import { DadenInputComponent } from '../../shared/atoms/daden-input/daden-input.component';
import { DadenInputRangeComponent } from '../../shared/components/daden-value-slider/daden-input-range.component';
import { DadenCheckboxComponent } from '../../shared/atoms/daden-checkbox/daden-checkbox.component';

@Component({
  selector: 'app-web-and-guidelines',
  imports: [
    CommonModule,
    DadenGroupHeaderComponent,
    DadenButtonComponent,
    DadenPageFooterComponent,
    DadenAccordionComponent,
    FormsModule,
    TranslateModule,
    DadenHeaderComponent,
    DadenLoadingComponent,
    DadenPaginationComponent,
    DadenLabelComponent,
    DadenDetailComponent,
    DadenDropdownComponent,
    DadenInputComponent,
    DadenInputRangeComponent,
    DadenCheckboxComponent
  ],
  templateUrl: './web-and-guidelines.component.html',
  standalone: true
})
export class WebAndGuidelinesComponent {
  subscribeToNewsletter = false;

  onNewsletterToggle(value: boolean) {
    console.log('Newsletter subscription:', value);
  }
  faqItems = [
    {
      title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, eveniet?',
      content: 'Lorem ipsum sdolor sit, amet consectetur adipisicing elit. Molestiae sit nesciunt, neque tempore magni facilis voluptas, qui magnam, dolore quas iure iste. Qui, molestias voluptatum.',
      open: false,
    },
    {
      title: 'Lorem ipsum dolor sit amet?',
      content: 'Lorem ipsum sdolor sit amet consectetur, adipisicing elit. Corrupti magnam reprehenderit, totam ipsum adipisci nobis?',
      open: false,
    },
    // Add more items as needed
  ];
}
