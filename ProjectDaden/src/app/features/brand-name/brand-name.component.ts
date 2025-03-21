import { Component, OnInit, inject, computed, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenPageFooterComponent } from '../../shared/organisms/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/atoms/daden-group-header/daden-group-header.component';

import { BrandNameService } from './services/brand-name.service';
import { brandNameDefault, DEFAULT_BRAND_NAME_VALUES } from './models/brand-name';
import { BrandNameAndTaglineCompleted, PersonalityOptions } from './store/brandname-tagline.model';
import { brandNameTaglineStore } from './store/brandname-tagline.store';
import { DadenLabelComponent } from '../../shared/atoms/daden-label/daden-label.component';
import { DadenDetailComponent } from '../../shared/atoms/daden-detail/daden-detail.component';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';

@Component({
  selector: 'app-brand-name-tagline',
  standalone: true,
  providers: [brandNameTaglineStore, BaseClassGlobalStore],
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    DadenHeaderComponent,
    DadenGroupHeaderComponent,
    DadenDropdownComponent,    
    DadenPageFooterComponent,
    DadenLabelComponent,
    DadenDetailComponent
  ],
  templateUrl: './brand-name.component.html',
})
export class BrandNameComponent implements OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);
  private readonly brandNameService = inject(BrandNameService);
  private readonly translate = inject(TranslateService);
  brandnameAndTaglineStore = inject(brandNameTaglineStore);
  globalStateTest = inject(BaseClassGlobalStore);


  test1: BrandNameAndTaglineCompleted = {
    personalities: ["een", "twee"],
    selectedPersonality: 'twee',
    personalityOptions: {
      synonyms: ["Pietje", "Puk"],
      headingFonts: ["Pietje", "Bel"],
      bodyFonts: ["Klaartje", "Puk"],
    },
    tagLineUsed: 'yes',
    tagLine: 'This seemts to be working!'
  }


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
    this.globalStateTest.getStore();
    // this.globalStateTest.updateGlobalState(this.test1);
    this.brandnameAndTaglineStore.updatePersonalityOptionsState(["This"], ["from"], ["BrandNameStore!!"]);
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
