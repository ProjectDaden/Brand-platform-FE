import { Component, Input, Output, HostBinding, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'daden-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daden-button.component.html',
})
export class DadenButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'text' = 'primary';
  @Input() size: 'big' | 'medium' | 'small' = 'medium';
  @Input() color: 'blue' | 'red' | 'yellow' | 'green' = 'blue'; // Base color
  @Input() hoverColor: 'blue' | 'red' | 'yellow' | 'green' | null = null; // Hover color (optional)
  @Input() disabled = false;
  @Input() active = false;
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }


  private getColorClasses() {
    const baseColorMap = {
      blue: {
        primary: 'bg-blue-500 text-white',
        secondary: 'border border-blue-500 text-blue-500',
        tertiary: 'text-blue-500',
        text: 'text-blue-500',
      },
      red: {
        primary: 'bg-red-500 text-white',
        secondary: 'border border-red-500 text-red-500',
        tertiary: 'text-red-500',
        text: 'text-red-500',
      },
      yellow: {
        primary: 'bg-yellow-500 text-white',
        secondary: 'border border-yellow-500 text-yellow-500',
        tertiary: 'text-yellow-500',
        text: 'text-yellow-500',
      },
      green: {
        primary: 'bg-green-500 text-white',
        secondary: 'border border-green-500 text-green-500',
        tertiary: 'text-green-500',
        text: 'text-green-500',
      },
    };

    const hoverColorMap = {
      blue: {
        primary: 'hover:bg-blue-700 hover:text-white',
        secondary: 'hover:bg-blue-700 hover:border-blue-700 hover:text-white',
        tertiary: 'hover:bg-blue-700 hover:text-white',
        text: 'hover:text-blue-700 hover:underline',
      },
      red: {
        primary: 'hover:bg-red-700 hover:text-white',
        secondary: 'hover:bg-red-700 hover:border-red-700 hover:text-white',
        tertiary: 'hover:bg-red-700 hover:text-white',
        text: 'hover:text-red-700 hover:underline',
      },
      yellow: {
        primary: 'hover:bg-yellow-700 hover:text-white',
        secondary: 'hover:bg-yellow-700 hover:border-yellow-700 hover:text-white',
        tertiary: 'hover:bg-yellow-700 hover:text-white',
        text: 'hover:text-yellow-700 hover:underline',
      },
      green: {
        primary: 'hover:bg-green-700 hover:text-white',
        secondary: 'hover:bg-green-700 hover:border-green-700 hover:text-white',
        tertiary: 'hover:bg-green-700 hover:text-white',
        text: 'hover:text-green-700 hover:underline',
      },
    };

    const focusActiveMap = {
      blue: 'focus:ring-blue-500 active:ring-blue-500',
      red: 'focus:ring-red-500 active:ring-red-500',
      yellow: 'focus:ring-yellow-500 active:ring-yellow-500',
      green: 'focus:ring-green-500 active:ring-green-500',
    };

    const baseClasses = baseColorMap[this.color][this.variant] || baseColorMap.blue.primary;
    const hoverClasses = this.hoverColor
      ? hoverColorMap[this.hoverColor][this.variant]
      : hoverColorMap[this.color][this.variant]; // Fallback to base color if no hoverColor
    const focusActiveClasses = focusActiveMap[this.color];

    return `${baseClasses} ${hoverClasses} ${focusActiveClasses}`;
  }

  @HostBinding('class') get classes() {
    return [
      'inline-flex items-center justify-center rounded-md  font-normaltransition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
      this.disabled ? '' : 'cursor-pointer', // Only apply cursor-pointer when not disabled
      this.getColorClasses(),
      this.size === 'big' ? 'px-6 py-3 text-lg' :
      this.size === 'medium' ? 'px-4 py-2 text-md' :
      this.size === 'small' ? 'px-2 py-1 text-sm' : '',
      this.disabled ? 'opacity-50 bg-gray-500 hover:bg-gray-500' : '',
      this.active ? 'ring-2' : '',
    ].filter(Boolean).join(' ');
  }
}