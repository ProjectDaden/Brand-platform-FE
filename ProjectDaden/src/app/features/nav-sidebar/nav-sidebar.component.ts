import { Component, computed, inject } from '@angular/core';
import { NavigationService } from './services/nav-sidebar.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nav-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-sidebar.component.html'
})
export class NavSidebarComponent {
  private navigationService = inject(NavigationService);
  
  categories = computed(() => 
    Object.entries(this.navigationService.navigation())
  );

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
}
