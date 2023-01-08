import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
      return of(true);
    }
    this.router.navigateByUrl('login');
    return of(false);
  }
}
