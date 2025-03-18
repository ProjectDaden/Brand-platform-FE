import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; // Import TranslateModule

@Component({
  selector: 'daden-label',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './daden-label.component.html',
})
export class DadenLabelComponent {
  @Input() label: string = '';

}