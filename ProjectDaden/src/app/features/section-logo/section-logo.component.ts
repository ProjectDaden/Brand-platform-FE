import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenResetButtonComponent } from '../../shared/components/daden-button-reset/daden-button-reset.component';
import { DadenSaveButtonComponent } from '../../shared/components/daden-button-save/daden-button-save.component';

// Define a specific type for logos
interface LogoVariations {
  primary: string | null;
  secondary: string | null;
  iconOnly: string | null;
}

@Component({
  selector: 'app-section-logo',
  imports: [
    DadenHeaderComponent, 
    DadenResetButtonComponent, 
    DadenSaveButtonComponent,
    DadenDropdownComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './section-logo.component.html',
  styleUrl: './section-logo.component.scss',
  standalone: true,
})
export class SectionLogoComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.selectedPersonality = this.getPersonalityFromBrandValues();
  }

  // Personality (for context, though not directly used for logos)
  personalityOptions: string[] = [
    'Hero', 'Caregiver', 'Explorer', 'Creator', 'Innocent', 'Sage', 'Jester',
    'Magician', 'Rebel', 'Ruler', 'Everyman', 'Lover',
  ];
  selectedPersonality: string = '';

  // Logo Variations with specific type
  logos: LogoVariations = {
    primary: null,
    secondary: null,
    iconOnly: null,
  };

  // Handle Personality Selection (optional context)
  handlePersonalitySelection(personality: string) {
    this.selectedPersonality = personality;
    // Could influence logo maker suggestions if implemented
  }

  // Handle File Upload
  onFileChange(event: Event, type: 'primary' | 'secondary' | 'iconOnly') {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.logos[type] = reader.result as string; // Base64 string
      };
      reader.readAsDataURL(file);
    }
  }

  // Clear Logo
  clearLogo(type: 'primary' | 'secondary' | 'iconOnly') {
    this.logos[type] = null;
    const input = this.document.getElementById(`${type}-upload`) as HTMLInputElement;
    if (input) input.value = ''; // Reset file input
  }

  private getPersonalityFromBrandValues(): string {
    return 'Jester'; // Mocked; replace with actual logic
  }

  // Output for connections
  get logoOutput(): { primary: string | null; secondary: string | null; iconOnly: string | null } {
    return {
      primary: this.logos.primary,
      secondary: this.logos.secondary,
      iconOnly: this.logos.iconOnly,
    };
  }
}