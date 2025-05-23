import { Component, HostBinding, input, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { DadenIconComponent } from '../daden-icon/daden-icon.component';

@Component({
  selector: 'daden-button',
  standalone: true,
  imports: [CommonModule, TranslateModule, DadenIconComponent],
  templateUrl: './daden-button.component.html',
})
export class DadenButtonComponent {
  variant = input<'primary' | 'secondary' | 'tertiary' | 'text'>('primary');
  size = input<'big' | 'medium' | 'small'>('medium');
  color = input<'blue' | 'red' | 'yellow' | 'green'>('blue');
  hoverColor = input<'blue' | 'red' | 'yellow' | 'green' | null>(null);
  disabled = input<boolean>(false);
  active = input<boolean>(false);
  label = input<string>('');
  icon = input<string>('');
  emitItem = output<string>();
  // @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.emitItem.emit('HALLOOO FROM CHILLD');
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
        secondary:
          'hover:bg-yellow-700 hover:border-yellow-700 hover:text-white',
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

    const baseClasses =
      baseColorMap[this.color()][this.variant()] || baseColorMap.blue.primary;
    const hoverClasses = this.hoverColor()
      ? hoverColorMap[this.hoverColor() ?? 'blue'][this.variant()]
      : hoverColorMap[this.color()][this.variant()];
    const focusActiveClasses = focusActiveMap[this.color()];

    return `${baseClasses} ${hoverClasses} ${focusActiveClasses}`;
  }

  // Dynamic icon classes based on button size
  get iconClass(): string {
    const sizeMap = {
      big: 'w-6 h-6',
      medium: 'w-5 h-5',
      small: 'w-4 h-4',
    };
    return `${sizeMap[this.size()] || 'w-5 h-5'} ${this.disabled() ? 'text-gray-400' : ''
      }`;
  }

  private getCursorClass(): string {
    return this.disabled() ? '' : 'cursor-pointer';
  }

  private getSizeClass(): string {
    if (this.size() === 'big') return 'px-6 py-3 text-lg';
    if (this.size() === 'medium') return 'px-4 py-2 text-md';
    if (this.size() === 'small') return 'px-2 py-1 text-sm';
    return '';
  }

  @HostBinding('class') get classes() {
    return [
      'inline-flex items-center justify-center rounded-md font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
      this.getCursorClass(),
      this.getColorClasses(),
      this.getSizeClass(),
      this.disabled() ? 'opacity-50 bg-gray-500 hover:bg-gray-500' : '',
      this.active() ? 'ring-2' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }
}
