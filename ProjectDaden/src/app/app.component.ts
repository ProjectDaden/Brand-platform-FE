import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavSidebarComponent } from './features/nav-sidebar/nav-sidebar.component';
import { AsidePreviewsComponent } from './features/aside-previews/aside-previews.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavSidebarComponent, AsidePreviewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProjectDaden';

  authService = inject(AuthService);

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
