import { Component, OnInit, inject, computed, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';

import { BrandNameService } from './services/brand-name.service';
import { brandNameDefault, DEFAULT_BRAND_NAME_VALUES } from './models/brand-name';
import { PersonalityOptions } from './store/brandname-tagline.model';
import { brandNameTaglineStore } from './store/brandname-tagline.store';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';
import { DadenDropdown } from '../../shared/components/daden-dropdown/models/daden-dropdown';
import { ArchetypeSetupService } from '../../services/archetype/archetype-setup.service';

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
    DadenDetailComponent,
    DadenInputComponent,
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
  archetypes = inject(ArchetypeSetupService);

  brandName = brandNameDefault;
  personalityOptions = this.brandNameService.loadBrandNamePersonaltyOptions();
  watchBrandName = computed(() => this.brandName.genericSignalCollection());
  useTagline: boolean = this.brandName.genericSignalCollection().tagLineUsed === 'yes';
  tagline: string = this.brandName.genericSignalCollection().tagLine || '';

  dropDownConfig: DadenDropdown = {
    items: this.brandName.genericSignalCollection().personalities,
    placeholder: "select an item...",
    selectedItem: "",
    disabled: false
  }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.loadSynonymsBasedOnPersonality(
      this.brandName.genericSignalCollection().selectedPersonality
    );
    this.globalStateTest.getStore();
    this.brandnameAndTaglineStore.updatePersonalityOptionsState(["This"], ["from"], ["BrandNameStore!!"]);
    console.log(this.archetypes.getArchetypeSignal()(), " <--- VANUIT COMPONENT ARCHETYPES");

    console.log(this.archetypes.bodyFonts(), " <--- ALL BODYFONTS IN COMP");
    console.log(this.archetypes.headingFonts(), " <--- ALL HEADINGFONTS IN COMP");
    console.log(this.archetypes.colorRanges(), " <--- ALL COLORRANGE IN COMP");
    console.log(this.archetypes.industries(), " <--- ALL INDUSTRIES IN COMP");
    console.log(this.archetypes.brandvalues(), " <--- ALL BRANDVALUES IN COMP");
  }

  handlePersonalitySelection(personality: string) {
    const associatedPersonalityOptions = this.brandNameService.getAllPersonalities();
    this.brandNameService.setPersonality(personality, associatedPersonalityOptions);
    this.loadSynonymsBasedOnPersonality(personality);
    this.updateBrandNameCollection({ selectedPersonality: personality });
  }

  updateBrandNameCollection(updates: Partial<ReturnType<typeof this.brandName.genericSignalCollection>>) {
    this.brandName.genericSignalCollection.update(current => ({ ...current, ...updates }));
    this.tagline = this.brandName.genericSignalCollection().tagLine || '';
    console.log('UPDATES', this.brandName.genericSignalCollection());
  }

  onTaglineToggle(value: boolean) {
    this.useTagline = value;
    this.updateBrandNameCollection({ tagLineUsed: value ? 'yes' : 'no' });
    console.log('Tagline enabled:', value);
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
      taglineUsed: this.useTagline,
      tagline: this.tagline || '',
    };
  }

  onReset() {
    this.brandName.genericSignalCollection.set(DEFAULT_BRAND_NAME_VALUES);
    this.handlePersonalitySelection('');
    this.useTagline = DEFAULT_BRAND_NAME_VALUES.tagLineUsed === 'yes';
    this.tagline = DEFAULT_BRAND_NAME_VALUES.tagLine || '';
    console.log('RESET');
  }
}