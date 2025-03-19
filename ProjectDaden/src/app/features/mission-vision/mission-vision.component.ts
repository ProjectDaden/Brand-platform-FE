import { Component } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/organisms/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/atoms/daden-group-header/daden-group-header.component';
import { DadenDetailComponent } from '../../shared/atoms/daden-detail/daden-detail.component';
import { DadenLabelComponent } from '../../shared/atoms/daden-label/daden-label.component';

@Component({
  selector: 'app-mission-vision',
  imports: [DadenHeaderComponent, DadenPageFooterComponent, DadenGroupHeaderComponent, DadenDetailComponent, DadenLabelComponent],
  templateUrl: './mission-vision.component.html',
  standalone: true
})
export class MissionVisionComponent {

}
