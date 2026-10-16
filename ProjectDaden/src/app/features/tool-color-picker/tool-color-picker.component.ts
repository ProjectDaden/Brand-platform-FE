import { Component, computed, inject } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { DadenDropdownComponent } from '../../shared/components/daden-dropdown/daden-dropdown.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenDropdown } from '../../shared/components/daden-dropdown/models/daden-dropdown';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';
import { contrastRatio, hexToRgb } from '../../core/brand/brand-presets';

@Component({
  selector: 'tool-color-picker',
  standalone: true,
  imports: [
    DadenHeaderComponent,
    DadenPageFooterComponent,
    DadenDropdownComponent,
    TranslateModule,
    DadenGroupHeaderComponent,
    DadenDetailComponent,
    DadenLabelComponent,
  ],
  templateUrl: './tool-color-picker.component.html'
})
export class ToolColorPickerComponent {
  protected readonly session = inject(BaseClassGlobalStore);

  private readonly theories = ['Simple', 'Tints', 'Shades', 'Tones', 'Analogous', 'Complementary', 'Triad'];

  theoryDropdown = computed<DadenDropdown>(() => ({
    items: this.theories,
    placeholder: 'Select a color theory...',
    selectedItem: this.session.colorTheory(),
    disabled: false,
  }));

  swatches = computed(() => [
    { name: 'Primary', hex: this.session.primaryColor() },
    { name: 'Secondary', hex: this.session.secondaryColor() },
    { name: 'Tertiary', hex: this.session.tertiaryColor() },
  ].map((swatch) => ({
    ...swatch,
    rgb: hexToRgb(swatch.hex),
    onWhite: contrastRatio(swatch.hex, '#ffffff').toFixed(2),
    onDark: contrastRatio(swatch.hex, '#111827').toFixed(2),
  })));

  selectTheory(theory: string): void {
    this.session.update({ colorTheory: theory, colorCustomized: false });
  }

  setColor(key: 'primaryColor' | 'secondaryColor' | 'tertiaryColor', event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.session.update({ [key]: value, colorCustomized: true });
  }
}
