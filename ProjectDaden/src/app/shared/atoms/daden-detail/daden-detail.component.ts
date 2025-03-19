import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; // Import TranslateModule

@Component({
  selector: 'daden-detail',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './daden-detail.component.html',
})
export class DadenDetailComponent {
  @Input() text: string = '';

}