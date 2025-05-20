import { Component, signal } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { DadenAccordionComponent } from '../../shared/components/daden-accordion/daden-accordion.component';
import { DadenButtonComponent } from '../../shared/components/daden-button/daden-button.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenLoadingComponent } from '../../shared/components/daden-loading/daden-loading.component';
import { DadenPaginationComponent } from '../../shared/components/daden-pagination/daden-pagination.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { DadenInputRangeComponent } from '../../shared/components/daden-value-slider/daden-input-range.component';
import { DadenCheckboxComponent } from '../../shared/components/daden-checkbox/daden-checkbox.component';
import { DadenCardComponent } from "../../shared/components/daden-card/daden-card.component";
import { DadenCard } from '../../shared/components/daden-card/models/daden-card';
import { DadenCheckbox } from '../../shared/components/daden-checkbox/models/daden-checkbox';
import { DadenColorPickerComponent } from '../../shared/components/daden-color-picker/daden-color-picker.component';

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
    DadenCheckboxComponent,
    DadenCardComponent,
    DadenColorPickerComponent
],
  templateUrl: './web-and-guidelines.component.html',
  standalone: true
})
export class WebAndGuidelinesComponent {
  subscribeToNewsletter = false;
  // example of parent static input data. this could be dynamic when creating a WritableSignal from it.
  // Don't forget to add a set or update function when it needs to be dynamic.
  cardConfig: DadenCard = {
    title: 'Title from parent',
    description: 'Descr. from parent',
    imageUrl: '../../../assets/image1.jpg',
    tags: ['tag1']
  }

  // The way to use single or multiple checkboxes in a parent. 
  checkboxes: DadenCheckbox[] = [
    { label: 'Checkbox 1', state: signal(false), disabled: signal(false) },
    { label: 'Checkbox 2', state: signal(false), disabled: signal(false) },
    // { label: 'Checkbox 3', state: signal(false), disabled: signal(true)  },
  ];

  getCheckedStates(): string[] {
    // Collect labels of checked checkboxes
    return this.checkboxes
      .filter((checkbox) => checkbox.state())
      .map((checkbox) => checkbox.label);
  }

  someMethod(val: string){
    console.log(val);
  }

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
