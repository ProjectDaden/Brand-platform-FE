import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/organisms/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/atoms/daden-group-header/daden-group-header.component';
import { DadenDetailComponent } from '../../shared/atoms/daden-detail/daden-detail.component';
import { DadenLabelComponent } from '../../shared/atoms/daden-label/daden-label.component';
import { DadenButtonComponent } from '../../shared/atoms/daden-button/daden-button.component';
import { DadenInputComponent } from '../../shared/atoms/daden-input/daden-input.component';


// Define a specific type for logos
interface LogoVariations {
  primary: string | null;
  secondary: string | null;
  icon: string | null;
}

@Component({
  selector: 'app-section-logo',
  imports: [
    DadenHeaderComponent, 
    DadenInputComponent,
    DadenPageFooterComponent,
    DadenDropdownComponent,
    DadenGroupHeaderComponent,
    DadenDetailComponent,
    DadenLabelComponent,
    FormsModule,
    CommonModule,
    DadenButtonComponent
  ],
  templateUrl: './section-logo.component.html',
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
    icon: null,
  };

  // Handle Personality Selection (optional context)
  handlePersonalitySelection(personality: string) {
    this.selectedPersonality = personality;
    // Could influence logo maker suggestions if implemented
  }

  // Handle File Upload
  onFileChange(event: Event, type: 'primary' | 'secondary' | 'icon') {
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
  clearLogo(type: 'primary' | 'secondary' | 'icon') {
    this.logos[type] = null;
    const input = this.document.getElementById(`${type}-upload`) as HTMLInputElement;
    if (input) input.value = ''; // Reset file input
  }

  private getPersonalityFromBrandValues(): string {
    return 'Jester'; // Mocked; replace with actual logic
  }

  // Output for connections
  get logoOutput(): { primary: string | null; secondary: string | null; icon: string | null } {
    return {
      primary: this.logos.primary,
      secondary: this.logos.secondary,
      icon: this.logos.icon,
    };
  }
}