import { Component, Renderer2, Inject, OnInit, signal, model } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenTableComponent } from '../../shared/components/daden-table/daden-table.component';
import { DadenCardComponent } from '../../shared/components/daden-card/daden-card.component';
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { DadenLoadingComponent } from '../../shared/components/daden-loading/daden-loading.component';
import { DadenPaginationComponent } from '../../shared/components/daden-pagination/daden-pagination.component';
import { DadenSliderComponent } from '../../shared/components/daden-slider/daden-slider.component';
import { DadenValueSliderComponent } from '../../shared/components/daden-value-slider/daden-value-slider.component';
import { DadenIconComponent } from '../../shared/components/daden-icon/daden-icon.component';
import { BrandColorThemeService } from '../tool-color-picker/services/brand-color-theme.service';

@Component({
  selector: 'app-brand-name-tagline',
  imports: [
    DadenDropdownComponent,
    FormsModule,
    CommonModule,
    DadenTableComponent,
    DadenCardComponent,
    DadenInputComponent,
    DadenLoadingComponent,
    DadenPaginationComponent,
    DadenSliderComponent,
    DadenIconComponent,
    DadenValueSliderComponent,
  ],
  templateUrl: './brand-name.component.html',
  styleUrl: './brand-name.component.scss',
  standalone: true,
})
export class BrandNameComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private brandColorThemeService: BrandColorThemeService
  ) {}

  ngOnInit() {
    this.selectedPersonality = this.getPersonalityFromBrandValues();
    this.loadSynonymsBasedOnPersonality(this.selectedPersonality);
  }

  // Personality and Tagline Logic
  personalityOptions: string[] = [
    'Hero', 'Caregiver', 'Explorer', 'Creator', 'Innocent', 'Sage', 'Jester',
    'Magician', 'Rebel', 'Ruler', 'Everyman', 'Lover',
  ];
  selectedPersonality: string = '';
  taglineUsed: 'yes' | 'no' = 'no'; // Updated to only allow "yes" or "no", default to "no"
  tagline: string = '';
  synonymOptions: string[] = [];
  selectedHeadingFont: string = '';
  selectedBodyFont: string = '';

  handlePersonalitySelection(personality: string) {
    this.selectedPersonality = personality;
    this.loadSynonymsBasedOnPersonality(personality);
  }

  private loadSynonymsBasedOnPersonality(personality: string) {
    let synonyms: string[];
    let headingFonts: string[];
    let bodyFonts: string[];

    switch (personality) {
      case 'Jester':
        synonyms = ['Playful', 'Witty', 'Fun'];
        headingFonts = ['Bangers', 'Fredoka One', 'Luckiest Guy'];
        bodyFonts = ['Comic Neue', 'Roboto', 'Open Sans'];
        break;
      case 'Creator':
        synonyms = ['Innovative', 'Creative', 'Visionary'];
        headingFonts = ['Montserrat', 'Playfair Display', 'Raleway'];
        bodyFonts = ['Lato', 'Source Sans Pro', 'Poppins'];
        break;
      // ... other cases as before ...
      default:
        synonyms = ['Versatile', 'Standard', 'Default'];
        headingFonts = ['Roboto', 'Arial', 'Helvetica'];
        bodyFonts = ['Open Sans', 'Lora', 'Merriweather'];
    }

    this.synonymOptions = synonyms;
    this.selectedHeadingFont = headingFonts[0];
    this.selectedBodyFont = bodyFonts[0];
    const allFonts = [...new Set([...headingFonts, ...bodyFonts])];
    this.loadGoogleFonts(allFonts);
  }

  private loadGoogleFonts(fonts: string[]) {
    const existingLink = this.document.getElementById('google-fonts-link');
    if (existingLink) {
      this.renderer.removeChild(this.document.head, existingLink);
    }

    const formattedFonts = fonts
      .map(font => `family=${encodeURIComponent(font)}:wght@400;700`)
      .join('&');
    const fontUrl = `https://fonts.googleapis.com/css2?${formattedFonts}&display=swap`;

    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'id', 'google-fonts-link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'href', fontUrl);
    this.renderer.appendChild(this.document.head, link);
  }

  private getPersonalityFromBrandValues(): string {
    return 'Jester';
  }

  get taglineOutput(): { taglineUsed: boolean; tagline: string } { // Updated to return boolean only
    return {
      taglineUsed: this.taglineUsed === 'yes', // Simplifies to true/false
      tagline: this.tagline,
    };
  }

  // Test Component Logic
  sliderValue: number = 50;
  onSliderChange(value: number) {
    console.log('Slider Value:', value);
  }

  slides: string[] = ['/assets/image1.jpg', '/assets/image2.jpg', '/assets/image3.jpg'];
  isLoading = true;
  totalItems: number = 100;
  itemsPerPage: number = 10;

  tableData = signal<{ name: string; age: number; country: string; mijnKlets: string }[]>([
    { name: 'John', age: 25, country: 'USA', mijnKlets: 'Klets' },
    { name: 'Anna', age: 22, country: 'Canada', mijnKlets: 'Klets2' },
    { name: 'Mike', age: 30, country: 'UK', mijnKlets: 'Klets3' },
  ]);

  inputValue = model<string>('');

  onInputValueChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.inputValue.set(value);
  }

  tableColumns = signal(['Name', 'Age', 'Country', 'Mijn Klets']);
  additionalContext = signal({ showAge: true });

  get currentThemes() {
    return this.brandColorThemeService.colorPaletteCollection.genericSignalCollection();
  }

  onPageChange(page: number) {
    console.log('Current Page:', page);
  }
}