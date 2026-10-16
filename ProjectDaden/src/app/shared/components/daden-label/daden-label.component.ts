import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'daden-label',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './daden-label.component.html',
})
export class DadenLabelComponent {
  label = input('');
}
