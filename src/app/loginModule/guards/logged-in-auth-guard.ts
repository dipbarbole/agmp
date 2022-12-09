import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Injectable()
export class LoggedInAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticated$.value;
    if (isAuthenticated) {
      this.router.navigate(['/courses']);
      return false;
    } else {
      return true;
    }
  }
}
