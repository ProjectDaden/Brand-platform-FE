import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'daden-button',
  imports: [CommonModule],
  templateUrl: './daden-button.component.html',
  styleUrl: './daden-button.component.scss',
})
export class DadenButtonComponent {
  @Input() bgColor: string = 'bg-blue-600';
  @Input() textColor: string = 'text-white';
  @Input() hoverBgColor: string = 'hover:bg-blue-700';
  @Output() buttonClick = new EventEmitter<void>();

  get buttonClasses() {
    return `${this.bgColor} ${this.textColor} ${this.hoverBgColor}`;
  }

  onClick() {
    this.buttonClick.emit();
  }
}