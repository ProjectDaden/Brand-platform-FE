
import { Component, computed, HostListener, inject } from '@angular/core';
import { NavigationService } from './services/nav-sidebar.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth.service';
import { DadenIconComponent } from '../../shared/components/daden-icon/daden-icon.component';
import { BaseClassGlobalStore } from '../../core/store/brand-design-global.store';
import { BRAND_START_PATH, isComingSoon, isStepComplete } from '../../core/brand/brand-steps';

@Component({
  selector: 'nav-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, DadenIconComponent],
  templateUrl: './nav-sidebar.component.html'
})
export class NavSidebarComponent {
  private readonly navigationService = inject(NavigationService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly session = inject(BaseClassGlobalStore);

  isMenuOpen = false;
  settingsOpen = false;

  categories = computed(() =>
    Object.entries(this.navigationService.navigation())
  );

  formatTitle(title: string): string {
    return title.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  getMenuItems(category: any): { key: string; value: string }[] {
    return Object.entries(category).map(([key, value]) => ({
      key,
      value: value as string
    }));
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleSettings(event: Event): void {
    event.stopPropagation();
    this.settingsOpen = !this.settingsOpen;
  }

  @HostListener('document:click')
  closeSettings(): void {
    this.settingsOpen = false;
  }

  resetAll(): void {
    this.settingsOpen = false;
    if (!window.confirm('Reset all pages? This clears the brand on this device.')) {
      return;
    }
    this.session.resetAll();
    void this.router.navigateByUrl(BRAND_START_PATH);
  }

  isComplete(key: string): boolean {
    return isStepComplete(key, this.session.snapshot());
  }

  comingSoon(key: string): boolean {
    return isComingSoon(key);
  }
}
