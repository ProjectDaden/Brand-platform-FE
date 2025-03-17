import { Component } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/organisms/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/atoms/daden-group-header/daden-group-header.component';

@Component({
  selector: 'app-mission-vision',
  imports: [DadenHeaderComponent, DadenPageFooterComponent, DadenGroupHeaderComponent],
  templateUrl: './mission-vision.component.html',
  styleUrl: './mission-vision.component.scss',
  standalone: true
})
export class MissionVisionComponent {

}
