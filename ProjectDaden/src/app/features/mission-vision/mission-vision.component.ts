import { Component } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenResetButtonComponent } from '../../shared/components/daden-button-reset/daden-button-reset.component';
import { DadenSaveButtonComponent } from '../../shared/components/daden-button-save/daden-button-save.component';

@Component({
  selector: 'app-mission-vision',
  imports: [DadenHeaderComponent, DadenResetButtonComponent, DadenSaveButtonComponent],
  templateUrl: './mission-vision.component.html',
  styleUrl: './mission-vision.component.scss',
  standalone: true
})
export class MissionVisionComponent {

}
