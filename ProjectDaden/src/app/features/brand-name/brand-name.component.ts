import { Component, Renderer2, OnInit, inject, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DOCUMENT } from '@angular/common';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { brandNameDefault } from './models/brand-name';
import { BrandNameService } from './services/brand-name.service';
import { PersonalityOptions } from './models/personalities-options';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-brand-name-tagline',
  imports: [DadenDropdownComponent, FormsModule, TranslateModule, CommonModule],
  templateUrl: './brand-name.component.html',
  styleUrl: './brand-name.component.scss',
  standalone: true,
})
export class BrandNameComponent implements OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);
  private readonly brandNameService = inject(BrandNameService);
  translate = inject(TranslateService);

  brandName = brandNameDefault;
  personalityOptions = this.brandNameService.loadBrandNamePersonaltyOptions();

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  watchBrandName = computed(() => {
    const brandNameValue = this.brandName.genericSignalCollection();
    console.log(brandNameValue, 'CURRENTLY LOADED OPTIONS');
    return brandNameValue;
  });

  ngOnInit() {
    this.loadSynonymsBasedOnPersonality(
      this.brandName.genericSignalCollection().selectedPersonality
    );
  }

  taglineUsed?: 'yes' | 'no' = this.brandName.genericSignalCollection().tagLineUsed;
  tagline?: string = this.brandName.genericSignalCollection().tagLine;

  handlePersonalitySelection(personality: string) {
    this.updateBrandNameCollection({ selectedPersonality: personality });
    const associatedPersonalityOptions = this.brandNameService.getAllPersonalities();
    this.brandNameService.setPersonality(personality, associatedPersonalityOptions);
    this.loadSynonymsBasedOnPersonality(personality);
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

  private loadSynonymsBasedOnPersonality(personality: string) {
    let personalityOpts: PersonalityOptions;
    const allPersonalities = this.brandNameService.getAllPersonalities();
    
    if (personality in allPersonalities) {
      personalityOpts = this.brandNameService.personalityComposition();
      this.brandName.genericSignalCollection.update(current => ({
        ...current,
        personalityOptions: personalityOpts
      }));
    } else {
      // Reset personality options when no valid personality is selected
      const emptyOptions: PersonalityOptions = {
        synonyms: [],
        headingFonts: [],
        bodyFonts: []
      };
      this.brandName.genericSignalCollection.update(current => ({
        ...current,
        personalityOptions: emptyOptions
      }));
      return; // Exit early since we don't need to load fonts
    }
    const allFonts = [
      ...new Set([
        ...personalityOpts.headingFonts,
        ...personalityOpts.bodyFonts,
      ]),
    ];
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
