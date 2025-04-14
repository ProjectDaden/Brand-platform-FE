import { ArchetypeSetupService } from './../../services/archetype/archetype-setup.service';
import { Component, computed, inject } from '@angular/core';
import { NavigationService } from './services/nav-sidebar.service';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth.service';
import { DadenIconComponent } from '../../shared/components/daden-icon/daden-icon.component';
import { filter } from 'rxjs';
import { UrlTrackerService } from '../../shared/navigation-url-helper/generic-navigation-location-data';

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
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly urlTrackerService = inject(UrlTrackerService);
  private readonly archetypeInitialisation = inject(ArchetypeSetupService)

  // Computed signal for categories
  categories = computed(() => 
    Object.entries(this.navigationService.navigation())
  );

  // Toggle state for mobile menu
  isMenuOpen = false;

  ngOnInit() {
    this.navigationService.loadNavigation();
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      const segments = this.router.url.split('/').filter(segment => segment);
      this.urlTrackerService.segments.set(segments);
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.urlTrackerService.queryParams.set(params);
    });
    this.archetypeInitialisation.init();
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