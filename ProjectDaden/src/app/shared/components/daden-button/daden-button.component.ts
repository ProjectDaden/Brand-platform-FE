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
        primary: 'bg-blue-600 text-white',
        secondary: 'border border-blue-600 text-blue-700 bg-white',
        tertiary: 'text-blue-600',
        text: 'text-blue-600',
      },
      red: {
        primary: 'bg-red-600 text-white',
        secondary: 'border border-red-300 text-red-700',
        tertiary: 'text-red-600',
        text: 'text-red-600',
      },
      yellow: {
        primary: 'bg-amber-500 text-white',
        secondary: 'border border-amber-400 text-amber-700',
        tertiary: 'text-amber-600',
        text: 'text-amber-600',
      },
      green: {
        primary: 'bg-emerald-600 text-white',
        secondary: 'border border-emerald-400 text-emerald-700',
        tertiary: 'text-emerald-600',
        text: 'text-emerald-600',
      },
    };

    const hoverColorMap = {
      blue: {
        primary: 'hover:bg-blue-700 hover:text-white',
        secondary: 'hover:bg-blue-50 hover:border-blue-700',
        tertiary: 'hover:bg-blue-50 hover:text-blue-800',
        text: 'hover:text-blue-800 hover:underline',
      },
      red: {
        primary: 'hover:bg-red-700 hover:text-white',
        secondary: 'hover:bg-red-50 hover:border-red-400',
        tertiary: 'hover:bg-red-50 hover:text-red-700',
        text: 'hover:text-red-700 hover:underline',
      },
      yellow: {
        primary: 'hover:bg-amber-600 hover:text-white',
        secondary: 'hover:bg-amber-50 hover:border-amber-500',
        tertiary: 'hover:bg-amber-50 hover:text-amber-700',
        text: 'hover:text-amber-700 hover:underline',
      },
      green: {
        primary: 'hover:bg-emerald-700 hover:text-white',
        secondary: 'hover:bg-emerald-50 hover:border-emerald-500',
        tertiary: 'hover:bg-emerald-50 hover:text-emerald-700',
        text: 'hover:text-emerald-700 hover:underline',
      },
    };

    const focusActiveMap = {
      blue: 'focus:ring-blue-500/40 active:ring-blue-500/40',
      red: 'focus:ring-red-500/30 active:ring-red-500/30',
      yellow: 'focus:ring-amber-500/30 active:ring-amber-500/30',
      green: 'focus:ring-emerald-500/30 active:ring-emerald-500/30',
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
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
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
