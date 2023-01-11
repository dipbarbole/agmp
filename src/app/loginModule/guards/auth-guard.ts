import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { isUserAuthenticatedSelector } from 'src/app/store/selectors/user/user.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    let isAuthenticated;
    this.store.select(isUserAuthenticatedSelector).subscribe((res) => {
      isAuthenticated = res;
    });
    if (isAuthenticated) {
      return of(true);
    }
    this.router.navigateByUrl('login');
    return of(false);
  }
}
