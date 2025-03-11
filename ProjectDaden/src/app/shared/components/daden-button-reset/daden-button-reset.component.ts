import { Component, Output, EventEmitter } from '@angular/core';
import { DadenButtonComponent } from "../daden-button/daden-button.component";



@Component({
  selector: 'daden-reset-button',
  templateUrl: './daden-button-reset.component.html',
  styleUrl: './daden-button-reset.component.scss',
  imports: [DadenButtonComponent]
})

export class DadenResetButtonComponent {
  @Output() reset = new EventEmitter<void>();

  onReset() {
    this.reset.emit();
  }
}