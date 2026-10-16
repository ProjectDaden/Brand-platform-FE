import { Component, computed, HostListener, inject } from '@angular/core';
import { DadenPreviewLandingComponent } from '../../shared/components/daden-preview-landing/daden-preview-landing.component';
import { DadenIconComponent } from '../../shared/components/daden-icon/daden-icon.component';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';

interface PreviewOption {
  key: string;
  label: string;
  comingSoon: boolean;
}

@Component({
  selector: 'aside-previews',
  standalone: true,
  imports: [DadenPreviewLandingComponent, DadenIconComponent],
  templateUrl: './aside-previews.component.html',
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }

    .phone-frame {
      position: relative;
      width: 360px;
      max-width: 100%;
      height: 100%;
      box-sizing: content-box;
      background: #111;
      border: 8px solid #191919;
      border-radius: 32px;
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
      overflow: hidden;
    }

    .phone-notch {
      position: absolute;
      top: 8px;
      left: 50%;
      z-index: 20;
      width: 92px;
      height: 22px;
      transform: translateX(-50%);
      background: #191919;
      border-radius: 999px;
      pointer-events: none;
    }

    .phone-screen {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      background: #fff;
      padding-top: 28px;
      padding-bottom: 18px;
    }

    .empty-preview {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100%;
      padding: 2rem 1.5rem;
      text-align: center;
    }

    .empty-preview-title {
      margin: 0 0 0.4rem;
      font-size: 0.95rem;
      font-weight: 600;
      color: #171717;
    }

    .empty-preview-copy {
      margin: 0;
      font-size: 0.85rem;
      color: #737373;
    }

    .phone-bar {
      position: absolute;
      bottom: 8px;
      left: 50%;
      z-index: 20;
      width: 108px;
      height: 4px;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.28);
      border-radius: 999px;
      pointer-events: none;
    }
  `],
})
export class AsidePreviewsComponent {
  private readonly session = inject(BaseClassGlobalStore);
  readonly hasBrandName = computed(() => this.session.brandname().trim().length > 0);

  menuOpen = false;
  selectedPreview = 'phone';

  readonly previewOptions: PreviewOption[] = [
    { key: 'desktop', label: 'Desktop', comingSoon: true },
    { key: 'tablet', label: 'Tablet', comingSoon: true },
    { key: 'phone', label: 'Phone', comingSoon: false },
    { key: 'print', label: 'Print', comingSoon: true },
    { key: 'offline-marketing', label: 'Offline Marketing', comingSoon: true },
    { key: 'social-media', label: 'Social Media', comingSoon: true },
    { key: 'web-ui', label: 'Web UI', comingSoon: true },
    { key: 'app-ui', label: 'App UI', comingSoon: true },
  ];

  toggleMenu(event: Event): void {
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;
  }

  selectPreview(option: PreviewOption, event: Event): void {
    event.stopPropagation();
    if (option.comingSoon) {
      return;
    }
    this.selectedPreview = option.key;
    this.menuOpen = false;
  }

  @HostListener('document:click')
  closeMenu(): void {
    this.menuOpen = false;
  }
}
