import { Component } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenButtonComponent } from '../../shared/atoms/daden-button/daden-button.component';
import { DadenAccordionComponent } from '../../shared/molecules/daden-accordion/daden-accordion.component';
import { DadenContainerComponent } from '../../shared/atoms/daden-container/daden-container.component';
import { DadenPageFooterComponent } from '../../shared/organisms/daden-page-footer/daden-page-footer.component';

@Component({
  selector: 'app-web-and-guidelines',
  imports: [DadenHeaderComponent, DadenButtonComponent, DadenAccordionComponent, DadenContainerComponent, DadenPageFooterComponent ],
  templateUrl: './web-and-guidelines.component.html',
  styleUrl: './web-and-guidelines.component.scss',
  standalone: true
})
export class WebAndGuidelinesComponent {
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
