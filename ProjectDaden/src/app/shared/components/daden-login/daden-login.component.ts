import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DadenButtonComponent } from '../../components/daden-button/daden-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { DadenLabelComponent } from '../../components/daden-label/daden-label.component';
import { DadenGroupHeaderComponent } from '../../components/daden-group-header/daden-group-header.component';
import { BRAND_START_PATH } from '../../../core/brand/brand-steps';

@Component({
  selector: 'app-daden-login',
  imports: [FormsModule, DadenButtonComponent, TranslateModule,DadenLabelComponent, DadenGroupHeaderComponent],
  templateUrl: './daden-login.component.html'
})
export class DadenLoginComponent {
  username: string = '';
  password: string = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.error = '';
      void this.router.navigateByUrl(BRAND_START_PATH);
      return;
    }
    this.error = "Username/password doesn't exist";
  }

  continueAsGuest(): void {
    this.error = '';
    this.authService.loginAsGuest();
    void this.router.navigateByUrl(BRAND_START_PATH);
  }

}
