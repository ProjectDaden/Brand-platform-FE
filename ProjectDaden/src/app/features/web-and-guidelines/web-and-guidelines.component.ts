import { Component } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-web-and-guidelines',
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    DadenHeaderComponent,
  ],
  templateUrl: './web-and-guidelines.component.html',
  styleUrl: './web-and-guidelines.component.scss',
  standalone: true
})
export class WebAndGuidelinesComponent {

}
