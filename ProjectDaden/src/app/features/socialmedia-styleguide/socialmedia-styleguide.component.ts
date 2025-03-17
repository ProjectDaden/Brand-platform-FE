import { Component } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenContainerComponent } from '../../shared/atoms/daden-container/daden-container.component';
import { DadenPageFooterComponent } from '../../shared/organisms/daden-page-footer/daden-page-footer.component';

@Component({
  selector: 'app-socialmedia-styleguide',
  imports: [DadenHeaderComponent, DadenContainerComponent, DadenPageFooterComponent],
  templateUrl: './socialmedia-styleguide.component.html',
  styleUrl: './socialmedia-styleguide.component.scss',
  standalone: true
})
export class SocialmediaStyleguideComponent {

}
