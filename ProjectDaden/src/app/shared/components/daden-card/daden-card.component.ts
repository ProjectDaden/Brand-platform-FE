import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadenCard } from './models/daden-card';

@Component({
  selector: 'daden-card',
  imports: [CommonModule],
  templateUrl: './daden-card.component.html',
  styleUrl: './daden-card.component.scss',
  standalone: true
})
export class DadenCardComponent {
  dadenCard = input<DadenCard>({
    title: "Default Title",
    description: 'Default description',
    imageUrl: "",
    tags: []
  });

  constructor() {}
}
