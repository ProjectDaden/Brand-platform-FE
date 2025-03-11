import { Component } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenResetButtonComponent } from '../../shared/components/daden-button-reset/daden-button-reset.component';
import { DadenSaveButtonComponent } from '../../shared/components/daden-button-save/daden-button-save.component';

@Component({
  selector: 'app-socialmedia-styleguide',
  imports: [DadenHeaderComponent, DadenResetButtonComponent, DadenSaveButtonComponent],
  templateUrl: './socialmedia-styleguide.component.html',
  styleUrl: './socialmedia-styleguide.component.scss',
  standalone: true
})
export class SocialmediaStyleguideComponent {

}
