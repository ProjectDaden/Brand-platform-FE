
import { Component, computed, inject } from '@angular/core';
import { NavigationService } from './services/nav-sidebar.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth.service';
import { DadenIconComponent } from '../../shared/components/daden-icon/daden-icon.component';

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


  // Toggle state for mobile menu
  isMenuOpen = false;

  // Computed signal for categories
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
}