import { Component, OnInit, inject, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { BrandNameService } from './services/brand-name.service';
import { Brandname, BrandnameDefault } from './models/brand-name';
import { brandNameTaglineStore } from './store/brandname-tagline.store';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';
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
    DadenPageFooterComponent,
    DadenLabelComponent,
    DadenDetailComponent,
    DadenInputComponent,
],
  templateUrl: './brand-name.component.html',
})
export class BrandNameComponent implements OnInit {

  /**
   * Injecting the relevant Angular services for this component.
   */
  private readonly brandNameService = inject(BrandNameService);
  private readonly translate = inject(TranslateService);
  brandnameAndTaglineStore = inject(brandNameTaglineStore);
  globalStateTest = inject(BaseClassGlobalStore);
  archetypes = inject(ArchetypeSetupService);

  /**
   * Starting position (default) for the brandname component. (DTO)
   */
  newBrandName = BrandnameDefault;

  /**
   * the group headers and texts for indicating the form-context attached to i18n.
   */
  groupHeaderTitleBrandname: string = "";
  groupHeaderSubTitleBrandname: string = "";
  groupHeaderTitleTagline: string = "";
  groupHeaderSubTitleTagline: string = "";
  detailText: string = "";

  brandNameInput = signal<string>("");
  taglineInput = signal<string>("Your tagline here...");
  isDisabled = signal<boolean>(false);

  personalityOptions = this.brandNameService.loadBrandNamePersonaltyOptions();
  watchNEWBrandName = computed(() => this.newBrandName.genericSignalCollection());

  ngOnInit() {
    this.groupHeaderTitleBrandname = this.translate.instant("brandname.form-area.group-title-brandName");
    this.groupHeaderSubTitleBrandname = this.translate.instant("brandname.form-area.group-subTitle-brandName");
    this.groupHeaderTitleTagline = this.translate.instant("brandname.preview-area.group-title-tagline");
    this.groupHeaderSubTitleTagline =this.translate.instant("brandname.preview-area.group-subTitle-tagline");
    this.detailText = "Craft a tagline that reflects your brand’s essence.";

    this.globalStateTest.getStore();
    this.brandnameAndTaglineStore.updatePersonalityOptionsState(["This"], ["from"], ["BrandNameStore!!"]);
    console.log(this.archetypes.getArchetypeSignal()(), " <--- VANUIT COMPONENT ARCHETYPES");

    console.log(this.archetypes.bodyFonts(), " <--- ALL BODYFONTS IN COMP");
    console.log(this.archetypes.headingFonts(), " <--- ALL HEADINGFONTS IN COMP");
    console.log(this.archetypes.colorRanges(), " <--- ALL COLORRANGE IN COMP");
    console.log(this.archetypes.industries(), " <--- ALL INDUSTRIES IN COMP");
    console.log(this.archetypes.brandvalues(), " <--- ALL BRANDVALUES IN COMP");
  }

  triggerTaglineReview(event: string | undefined, prop: keyof Brandname) {
    if (event) {
      const iets: Partial<Brandname> = {};
      iets[prop] = event;
      this.updateNEWBrandnameCollection(iets);
    }
  }

  updateNEWBrandnameCollection(updates: Partial<ReturnType<typeof this.newBrandName.genericSignalCollection>>){
    // TODO if(){} toevoegen op tagline. Laatste letter blijft hangen. of "set()" gebruiken ipv update.
    this.brandNameInput.set(this.newBrandName.genericSignalCollection().brandname);
    this.taglineInput.set(this.newBrandName.genericSignalCollection().taglineDescription);
    this.newBrandName.genericSignalCollection.update(curr => ({...curr, ...updates}));
    console.log(updates, " hier moet ik generic updaten!!");
    // this.newBrandName.genericSignalCollection()
  }

  onReset() {
    // this.newBrandName.genericSignalCollection.set(BRANDNAME_DEFAULT);
    // this.handlePersonalitySelection('');
    // this.useTagline = BRANDNAME_DEFAULT.tagLineUsed === 'yes';
    // this.tagline = BRANDNAME_DEFAULT.tagLine || '';
    // console.log('RESET');
  }
}



  // dropDownConfig: DadenDropdown = {
  //   items: this.brandName.genericSignalCollection().personalities,
  //   placeholder: "select an item...",
  //   selectedItem: "",
  //   disabled: false
  // }

  // brandName = brandNameDefault;

  
  // useTagline: boolean = this.brandName.genericSignalCollection().tagLineUsed === 'yes';
  // tagline: string = this.brandName.genericSignalCollection().tagLine || '';

    // watchBrandName = computed(() => this.brandName.genericSignalCollection());

  
    // this.loadSynonymsBasedOnPersonality(
    //   this.brandName.genericSignalCollection().selectedPersonality
    // );

    // handlePersonalitySelection(personality: string) {
    // const associatedPersonalityOptions = this.brandNameService.getAllPersonalities();
    // this.brandNameService.setPersonality(personality, associatedPersonalityOptions);
    // this.loadSynonymsBasedOnPersonality(personality);
    // this.updateBrandNameCollection({ selectedPersonality: personality });
    // console.log(personality, " <<<--- Reflected in the BrandName component");
  // }

  // updateBrandNameCollection(updates: Partial<ReturnType<typeof this.brandName.genericSignalCollection>>) {
  //   this.brandName.genericSignalCollection.update(current => ({ ...current, ...updates }));
  //   this.tagline = this.brandName.genericSignalCollection().tagLine || '';
  //   console.log('UPDATES', this.brandName.genericSignalCollection());
  // }

  // onTaglineToggle(value: boolean) {
  //   this.useTagline = value;
  //   this.updateBrandNameCollection({ tagLineUsed: value ? 'yes' : 'no' });
  //   console.log('Tagline enabled:', value);
  // }

  // private loadSynonymsBasedOnPersonality(personality: string) {
  //   const allPersonalities = this.brandNameService.getAllPersonalities();
  //   if (!(personality in allPersonalities)) {
  //     this.brandName.genericSignalCollection.update(current => ({
  //       ...current,
  //       personalityOptions: { synonyms: [], headingFonts: [], bodyFonts: [] } as PersonalityOptions,
  //     }));
  //     return;
  //   }

  //   const personalityOpts = this.brandNameService.personalityComposition();
  //   this.brandName.genericSignalCollection.update(current => ({
  //     ...current,
  //     personalityOptions: personalityOpts,
  //   }));

  //   this.loadGoogleFonts([...new Set([...personalityOpts.headingFonts, ...personalityOpts.bodyFonts])]);
  // }

  // private loadGoogleFonts(fonts: string[]) {
  //   if (!fonts.length) return;

  //   const existingLink = this.document.getElementById('google-fonts-link');
  //   const formattedFonts = fonts.map(font => `family=${encodeURIComponent(font)}:wght@400;700`).join('&');
  //   const fontUrl = `https://fonts.googleapis.com/css2?${formattedFonts}&display=swap`;

  //   if (existingLink?.getAttribute('href') === fontUrl) return;

  //   const link = this.renderer.createElement('link');
  //   this.renderer.setAttribute(link, 'id', 'google-fonts-link');
  //   this.renderer.setAttribute(link, 'rel', 'stylesheet');
  //   this.renderer.setAttribute(link, 'href', fontUrl);

  //   existingLink && this.renderer.removeChild(this.document.head, existingLink);
  //   this.renderer.appendChild(this.document.head, link);
  // }

  // get taglineOutput() {
  //   return {
  //     taglineUsed: this.useTagline,
  //     tagline: this.tagline || '',
  //   };
  // }