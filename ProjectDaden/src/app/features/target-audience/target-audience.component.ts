import { Component } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenContainerComponent } from '../../shared/atoms/daden-container/daden-container.component';
import { DadenPageFooterComponent } from '../../shared/organisms/daden-page-footer/daden-page-footer.component';

@Component({
  selector: 'app-target-audience',
    imports: [DadenHeaderComponent, DadenContainerComponent, DadenPageFooterComponent],
  templateUrl: './target-audience.component.html',
  styleUrl: './target-audience.component.scss',
  standalone: true
})
export class TargetAudienceComponent {

}
