import { Component } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenResetButtonComponent } from '../../shared/components/daden-button-reset/daden-button-reset.component';
import { DadenSaveButtonComponent } from '../../shared/components/daden-button-save/daden-button-save.component';

@Component({
  selector: 'app-web-and-guidelines',
  imports: [DadenHeaderComponent, DadenResetButtonComponent, DadenSaveButtonComponent],
  templateUrl: './web-and-guidelines.component.html',
  styleUrl: './web-and-guidelines.component.scss',
  standalone: true
})
export class WebAndGuidelinesComponent {

}
