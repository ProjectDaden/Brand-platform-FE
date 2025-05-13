import { Component, Input, Signal } from '@angular/core';

@Component({
  selector: 'daden-preview-landing',
  templateUrl: './daden-preview-landing.component.html',
  styleUrl: './daden-preview-landing.component.scss',
  standalone: true, // Already standalone
  imports: [], // Add any necessary modules if needed
})
export class DadenPreviewLandingComponent {
  // Define input for brandnamePreview
  @Input() brandnamePreview!: Signal<{ brandname: string; tagline?: string }>;
}