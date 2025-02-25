import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-daden-login',
  imports: [FormsModule],
  templateUrl: './daden-login.component.html',
  styleUrl: './daden-login.component.scss'
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
