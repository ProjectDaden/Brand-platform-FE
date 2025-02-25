import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavSidebarComponent } from './features/nav-sidebar/nav-sidebar.component';
import { AsidePreviewsComponent } from './features/aside-previews/aside-previews.component';
import { AuthService } from './auth.service';
import { DadenLoadingComponent } from './shared/components/daden-loading/daden-loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavSidebarComponent, AsidePreviewsComponent, DadenLoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  authService = inject(AuthService);

  title = 'ProjectDaden';
  isLoading = false;

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  // Example method to simulate loading
  loadData() {
    this.isLoading = true;
    // Simulate a data fetch
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
