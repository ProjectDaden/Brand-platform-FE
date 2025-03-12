import { Component, OnInit, inject, computed, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenResetButtonComponent } from '../../shared/components/daden-button-reset/daden-button-reset.component';
import { DadenSaveButtonComponent } from '../../shared/components/daden-button-save/daden-button-save.component';

import { BrandNameService } from './services/brand-name.service';
import { brandNameDefault, DEFAULT_BRAND_NAME_VALUES } from './models/brand-name';
import { PersonalityOptions } from './models/personalities-options';

@Component({
  selector: 'app-brand-name-tagline',
  standalone: true,
  imports: [
    DadenHeaderComponent,
    DadenDropdownComponent,
    FormsModule,
    CommonModule,
    TranslateModule,
    DadenResetButtonComponent,
    DadenSaveButtonComponent,
  ],
  templateUrl: './brand-name.component.html',
  styleUrl: './brand-name.component.scss',
})
export class BrandNameComponent implements OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);
  private readonly brandNameService = inject(BrandNameService);
  private readonly translate = inject(TranslateService);

  brandName = brandNameDefault;
  personalityOptions = this.brandNameService.loadBrandNamePersonaltyOptions();

  watchBrandName = computed(() => this.brandName.genericSignalCollection());

  taglineUsed?: 'yes' | 'no' = this.brandName.genericSignalCollection().tagLineUsed;
  tagline?: string = this.brandName.genericSignalCollection().tagLine;

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.loadSynonymsBasedOnPersonality(
      this.brandName.genericSignalCollection().selectedPersonality
    );
  }

  handlePersonalitySelection(personality: string) {
    const associatedPersonalityOptions = this.brandNameService.getAllPersonalities();
    this.brandNameService.setPersonality(personality, associatedPersonalityOptions);
    this.loadSynonymsBasedOnPersonality(personality);
    this.updateBrandNameCollection({ selectedPersonality: personality });
  }

  updateBrandNameCollection(updates: Partial<ReturnType<typeof this.brandName.genericSignalCollection>>) {
    this.brandName.genericSignalCollection.update(current => ({ ...current, ...updates }));
    console.log('UPDATES', this.brandName.genericSignalCollection());
  }

  private loadSynonymsBasedOnPersonality(personality: string) {
    const allPersonalities = this.brandNameService.getAllPersonalities();
    if (!(personality in allPersonalities)) {
      this.brandName.genericSignalCollection.update(current => ({
        ...current,
        personalityOptions: { synonyms: [], headingFonts: [], bodyFonts: [] } as PersonalityOptions,
      }));
      return;
    }

    const personalityOpts = this.brandNameService.personalityComposition();
    this.brandName.genericSignalCollection.update(current => ({
      ...current,
      personalityOptions: personalityOpts,
    }));

    this.loadGoogleFonts([...new Set([...personalityOpts.headingFonts, ...personalityOpts.bodyFonts])]);
  }

  private loadGoogleFonts(fonts: string[]) {
    if (!fonts.length) return;

    const existingLink = this.document.getElementById('google-fonts-link');
    const formattedFonts = fonts.map(font => `family=${encodeURIComponent(font)}:wght@400;700`).join('&');
    const fontUrl = `https://fonts.googleapis.com/css2?${formattedFonts}&display=swap`;

    if (existingLink?.getAttribute('href') === fontUrl) return;

    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'id', 'google-fonts-link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'href', fontUrl);

    existingLink && this.renderer.removeChild(this.document.head, existingLink);
    this.renderer.appendChild(this.document.head, link);
  }

  get taglineOutput() {
    return {
      taglineUsed: this.taglineUsed === 'yes',
      tagline: this.tagline ?? '',
    };
  }

  onReset(){
    this.brandName.genericSignalCollection.set(DEFAULT_BRAND_NAME_VALUES);
    this.handlePersonalitySelection('');
    this.taglineUsed = DEFAULT_BRAND_NAME_VALUES.tagLineUsed;
    this.tagline = DEFAULT_BRAND_NAME_VALUES.tagLine;
    console.log('RESET');
  }
}
