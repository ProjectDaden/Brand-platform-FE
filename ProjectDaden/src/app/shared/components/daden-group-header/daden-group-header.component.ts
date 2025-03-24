import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; // Import TranslateModule

@Component({
  selector: 'daden-group-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './daden-group-header.component.html'
})

export class DadenGroupHeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}