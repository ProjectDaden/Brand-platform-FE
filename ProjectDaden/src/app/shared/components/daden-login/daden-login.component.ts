import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DadenButtonComponent } from '../../atoms/daden-button/daden-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { DadenLabelComponent } from '../../atoms/daden-label/daden-label.component';
import { DadenGroupHeaderComponent } from '../../atoms/daden-group-header/daden-group-header.component';

@Component({
  selector: 'app-daden-login',
  imports: [FormsModule, DadenButtonComponent, TranslateModule,DadenLabelComponent, DadenGroupHeaderComponent],
  templateUrl: './daden-login.component.html'
})
export class DadenLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/color-picker']);
    } else {
      alert('Login failed');
    }
  }

}
