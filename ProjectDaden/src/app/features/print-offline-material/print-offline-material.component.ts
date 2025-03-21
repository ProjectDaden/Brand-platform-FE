import { Component } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';

@Component({
  selector: 'app-print-offline-material',
  imports: [DadenHeaderComponent, DadenPageFooterComponent],
  templateUrl: './print-offline-material.component.html',
  standalone: true
})
export class PrintOfflineMaterialComponent {

}
