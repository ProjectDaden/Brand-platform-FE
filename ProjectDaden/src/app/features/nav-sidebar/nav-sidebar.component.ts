import { Component, computed, inject } from '@angular/core';
import { NavigationService } from './services/nav-sidebar.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'nav-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-sidebar.component.html'
})
export class NavSidebarComponent {
  private navigationService = inject(NavigationService);
  private authService = inject(AuthService);
  private router = inject(Router);

  // Computed signal for categories
  categories = computed(() => 
    Object.entries(this.navigationService.navigation())
  );

  // Toggle state for mobile menu
  isMenuOpen = false;

  ngOnInit() {
    this.navigationService.loadNavigation();
  }

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