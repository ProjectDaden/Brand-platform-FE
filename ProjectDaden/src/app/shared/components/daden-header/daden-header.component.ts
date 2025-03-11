import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../features/nav-sidebar/services/nav-sidebar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationCategory } from '../../../features/nav-sidebar/models/nav-sidebar-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'daden-header',
  imports: [CommonModule],
  templateUrl: './daden-header.component.html',
  styleUrl: './daden-header.component.scss'
})
export class DadenHeaderComponent implements OnInit {
  pageName: string = '';
  categoryDescription: string = '';

  constructor(
    private navigationService: NavigationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setHeaderInfo();
  }

  private setHeaderInfo() {
    // Get current route segments
    const urlSegments = this.router.url.split('/'); // e.g., ['', 'v1', 'visual-identity', 'imagery']
    const categoryId = urlSegments[2]; // e.g., 'visual-identity'
    const pageKey = urlSegments[3]; // e.g., 'imagery'

    // Get navigation data from service
    const navigation = this.navigationService.navigation();
    if (!navigation || !categoryId || !pageKey) return;

    // Find page name and category description
    const categories = navigation as NavigationCategory;
    const category = categories[categoryId];
    if (category && category[pageKey]) {
      this.pageName = this.formatTitle(category[pageKey]); // e.g., "Imagery"
      this.categoryDescription = this.getCategoryDescription(categoryId); // Custom logic for description
    }
  }

  // Format title (e.g., "mission-vision" -> "Mission & Vision")
  private formatTitle(value: string): string {
    return value
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Placeholder for category description (customize as needed)
  private getCategoryDescription(categoryId: string): string {
    const descriptions: { [key: string]: string } = {
      'core-brand-identity': 'Defining Your Brand’s Purpose',
      'brand-voice-and-tone': 'Shaping Your Brand’s Voice',
      'visual-identity': 'Defining Your Brand’s Face',
      'application-and-implementation': 'Applying Your Brand Guidelines'
    };
    return descriptions[categoryId] || 'Category Description';
  }
}