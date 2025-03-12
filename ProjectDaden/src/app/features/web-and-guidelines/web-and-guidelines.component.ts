import { Component } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenResetButtonComponent } from '../../shared/components/daden-button-reset/daden-button-reset.component';
import { DadenSaveButtonComponent } from '../../shared/components/daden-button-save/daden-button-save.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DadenCardComponent } from '../../shared/components/daden-card/daden-card.component';
import { DadenIconComponent } from '../../shared/components/daden-icon/daden-icon.component';
import { DadenInputComponent } from '../../shared/components/daden-input/daden-input.component';
import { DadenLoadingComponent } from '../../shared/components/daden-loading/daden-loading.component';
import { DadenPaginationComponent } from '../../shared/components/daden-pagination/daden-pagination.component';
import { DadenSliderComponent } from '../../shared/components/daden-slider/daden-slider.component';
import { DadenTableComponent } from '../../shared/components/daden-table/daden-table.component';
import { DadenValueSliderComponent } from '../../shared/components/daden-value-slider/daden-value-slider.component';

@Component({
  selector: 'app-web-and-guidelines',
  imports: [DadenHeaderComponent, DadenResetButtonComponent, DadenSaveButtonComponent,
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
      TranslateModule],
  templateUrl: './web-and-guidelines.component.html',
  styleUrl: './web-and-guidelines.component.scss',
  standalone: true
})
export class WebAndGuidelinesComponent {

}
