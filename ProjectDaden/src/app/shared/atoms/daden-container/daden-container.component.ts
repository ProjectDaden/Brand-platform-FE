import { Component, Input } from '@angular/core';

@Component({
  selector: 'daden-container',
  standalone: true,
  imports: [],
  templateUrl: './daden-container.component.html'
})
export class DadenContainerComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
