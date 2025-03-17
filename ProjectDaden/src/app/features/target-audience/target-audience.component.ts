import { Component } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenResetButtonComponent } from '../../shared/components/daden-button-reset/daden-button-reset.component';
import { DadenSaveButtonComponent } from '../../shared/components/daden-button-save/daden-button-save.component';

@Component({
  selector: 'app-target-audience',
    imports: [DadenHeaderComponent, DadenResetButtonComponent, DadenSaveButtonComponent],
  templateUrl: './target-audience.component.html',
  styleUrl: './target-audience.component.scss',
  standalone: true
})
export class TargetAudienceComponent {

}
