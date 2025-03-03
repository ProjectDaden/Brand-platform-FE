import {
  Component,
  Renderer2,
  Inject,
  OnInit,
  signal,
  model,
  inject,
  effect,
  computed,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { brandNameDefault } from './models/brand-name';
import { BrandNameService } from './services/brand-name.service';

@Component({
  selector: 'app-brand-name-tagline',
  imports: [DadenDropdownComponent, FormsModule, CommonModule],
  templateUrl: './brand-name.component.html',
  styleUrl: './brand-name.component.scss',
  standalone: true,
})
export class BrandNameComponent implements OnInit {
  private document = inject(DOCUMENT);
  private renderer = inject(Renderer2);
  private brandNameService = inject(BrandNameService);

  brandName = brandNameDefault;

  constructor() {}

  watch = computed(() => {
    const brandNameValue = this.brandName.genericSignalCollection();
    console.log('TOUCHED BRANDNAME SIGNAL!!!', brandNameValue);
    console.log('synonymOptions !!!', this.brandNameService.personalityComposition());
    return brandNameValue;
  });

  ngOnInit() {
    this.loadSynonymsBasedOnPersonality(
      this.brandName.genericSignalCollection().selectedPersonality
    );
  }

  updateBrandNameCollection(
    updates: Partial<ReturnType<typeof this.brandName.genericSignalCollection>>
  ) {
    this.brandName.genericSignalCollection.update((current) => {
      const updatedBrandName = { ...current, ...updates };
      return updatedBrandName;
    });
    console.log('UPDATES', this.brandName.genericSignalCollection());
  }

  // Personality and Tagline Logic
  // personalityOptions?: string[] = this.brandName.genericSignalCollection().personalityOptions;
  selectedPersonality?: string = this.brandName.genericSignalCollection().selectedPersonality;
  taglineUsed?: 'yes' | 'no' = this.brandName.genericSignalCollection().tagLineUsed; // Updated to only allow "yes" or "no", default to "no"
  tagline?: string = this.brandName.genericSignalCollection().tagLine;
  synonymOptions?: string[] = this.brandName.genericSignalCollection().synonymOptions;
  selectedHeadingFont?: string = this.brandName.genericSignalCollection().selectedHeadingFont;
  selectedBodyFont?: string = this.brandName.genericSignalCollection().selectedBodyFont;

  handlePersonalitySelection(personality: string) {
    this.updateBrandNameCollection({ selectedPersonality: personality });
    const iets = this.brandNameService.getAllPersonalities();
    this.brandNameService.setPersonality(personality, iets);

    // comment
    console.log('Personality selected:', personality);
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
      .map((font) => `family=${encodeURIComponent(font)}:wght@400;700`)
      .join('&');
    const fontUrl = `https://fonts.googleapis.com/css2?${formattedFonts}&display=swap`;

    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'id', 'google-fonts-link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'href', fontUrl);
    this.renderer.appendChild(this.document.head, link);
  }

  get taglineOutput(): { taglineUsed: boolean; tagline: string } {
    // Updated to return boolean only
    return {
      taglineUsed: this.taglineUsed === 'yes', // Simplifies to true/false
      tagline: this.tagline ?? '',
    };
  }
}
