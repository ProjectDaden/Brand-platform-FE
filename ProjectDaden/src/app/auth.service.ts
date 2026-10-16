import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly LOCAL_STORAGE_KEY = 'login-app';

  constructor(private router: Router) {}

  login(_username: string, _password: string): boolean {
    return false;
  }

  loginAsGuest(): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify({ username: 'guest' }));
  }

  logout() {
    localStorage.removeItem(this.LOCAL_STORAGE_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.LOCAL_STORAGE_KEY) !== null;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
