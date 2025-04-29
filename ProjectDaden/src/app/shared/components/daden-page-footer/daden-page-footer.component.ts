import { Component, input, output } from '@angular/core';
 import { DadenButtonComponent } from '../../components/daden-button/daden-button.component';
 
 @Component({
   selector: 'daden-page-footer',
   imports: [DadenButtonComponent],
   templateUrl: './daden-page-footer.component.html'
 })
 export class DadenPageFooterComponent{
  someContext = input<unknown>();
 sendTriggerEvent = output<unknown>();
 }