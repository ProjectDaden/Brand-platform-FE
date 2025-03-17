import { Component } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/organisms/daden-page-footer/daden-page-footer.component';

@Component({
  selector: 'app-print-offline-material',
  imports: [DadenHeaderComponent, DadenPageFooterComponent],
  templateUrl: './print-offline-material.component.html',
  styleUrl: './print-offline-material.component.scss',
  standalone: true
})
export class PrintOfflineMaterialComponent {

}
