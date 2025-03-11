import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavigationService } from '../../../features/nav-sidebar/services/nav-sidebar.service';
import { NavigationCategory } from '../../../features/nav-sidebar/models/nav-sidebar-interface';
import { DadenButtonComponent } from "../daden-button/daden-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'daden-save-button',
  templateUrl: './daden-button-save.component.html',
  styleUrl: './daden-button-save.component.scss',
  imports: [DadenButtonComponent]
})
export class DadenSaveButtonComponent {
  @Input() currentRoute: string = '';
  @Output() save = new EventEmitter<void>();

  constructor(private navigationService: NavigationService, private router: Router) {}

  onSaveAndContinue() {
    this.save.emit(); // Trigger save logic in parent
    this.navigateToNext();
  }

  private navigateToNext() {
    const navigation = this.navigationService.navigation();
    const allRoutes = this.getAllRoutes(navigation);
    const currentIndex = allRoutes.indexOf(this.currentRoute);
    if (currentIndex !== -1 && currentIndex < allRoutes.length - 1) {
      const nextRoute = allRoutes[currentIndex + 1];
      this.router.navigate([nextRoute]);
    }
  }

  private getAllRoutes(categories: NavigationCategory): string[] {
    return Object.entries(categories).flatMap(([categoryId, items]) =>
      Object.entries(items).map(([key]) => `/v1/${categoryId}/${key}`)
    );
  }
}