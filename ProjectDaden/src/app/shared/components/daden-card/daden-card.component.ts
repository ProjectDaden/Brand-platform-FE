import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daden-card',
  imports: [CommonModule],
  templateUrl: './daden-card.component.html',
  styleUrl: './daden-card.component.scss',
  standalone: true
})
export class DadenCardComponent {
  title = input<string>('Default Title');
  description = input<string>('Default description');
  imageUrl = input<string>('');
  tags = input<string[]>([]);

  constructor() {}
}
