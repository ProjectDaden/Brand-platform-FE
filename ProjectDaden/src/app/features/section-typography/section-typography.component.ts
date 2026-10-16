import { Component, computed, effect, inject } from '@angular/core';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenDropdown } from '../../shared/components/daden-dropdown/models/daden-dropdown';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';
import { fontsForArchetype, loadGoogleFonts, titleCaseArchetype, TYPE_SCALE_NAMES, typeScaleFor } from '../../core/brand/brand-presets';

@Component({
  selector: 'app-section-typography',
  imports: [
    DadenDropdownComponent,
    DadenHeaderComponent,
    DadenPageFooterComponent,
    DadenGroupHeaderComponent,
    DadenDetailComponent,
    DadenLabelComponent
  ],
  templateUrl: './section-typography.component.html',
  styleUrl: './section-typography.component.scss',
  standalone: true,
})
export class SectionTypographyComponent {
  protected readonly session = inject(BaseClassGlobalStore);

  personalityOptions: string[] = [
    'Everyman',
    'Hero',
    'Caregiver',
    'Explorer',
    'Creator',
    'Innocent',
    'Sage',
    'Jester',
    'Magician',
    'Rebel',
    'Ruler',
    'Lover',
  ];

  typeScaleNames = TYPE_SCALE_NAMES;

  personalityDropdown = computed<DadenDropdown>(() => ({
    items: this.personalityOptions,
    placeholder: 'Select a personality...',
    selectedItem: titleCaseArchetype(this.session.archetype()),
    disabled: false,
  }));

  headingDropdown = computed<DadenDropdown>(() => {
    const fonts = fontsForArchetype(this.session.archetype() || 'Everyman');
    const selected = this.session.headingFont() || fonts.heading[0];
    const items = fonts.heading.includes(selected) ? fonts.heading : [selected, ...fonts.heading];
    return {
      items,
      placeholder: 'Select a heading font...',
      selectedItem: selected,
      disabled: false,
    };
  });

  bodyDropdown = computed<DadenDropdown>(() => {
    const fonts = fontsForArchetype(this.session.archetype() || 'Everyman');
    const selected = this.session.bodyFont() || fonts.body[0];
    const items = fonts.body.includes(selected) ? fonts.body : [selected, ...fonts.body];
    return {
      items,
      placeholder: 'Select a body font...',
      selectedItem: selected,
      disabled: false,
    };
  });

  typeScaleDropdown = computed<DadenDropdown>(() => ({
    items: this.typeScaleNames,
    placeholder: 'Select a type scale...',
    selectedItem: this.session.typeScaleName(),
    disabled: false,
  }));

  activeScale = computed(() => typeScaleFor(this.session.typeScaleName()));

  constructor() {
    effect(() => {
      loadGoogleFonts([...this.headingDropdown().items, ...this.bodyDropdown().items]);
    });
  }

  handlePersonalitySelection(personality: string): void {
    this.session.update({ archetype: personality, typeCustomized: false });
  }

  handleFontSelection(font: string, type: 'heading' | 'body'): void {
    if (type === 'heading') {
      this.session.update({ headingFont: font, typeCustomized: true });
      return;
    }
    this.session.update({ bodyFont: font, typeCustomized: true });
  }

  handleTypeScaleSelection(selectedName: string): void {
    this.session.update({ typeScaleName: selectedName, typeCustomized: true });
  }
}