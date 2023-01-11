import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { isUserAuthenticatedSelector } from 'src/app/store/selectors/user/user.selectors';
import { AppState } from 'src/app/store/state/app.state';

@Injectable()
export class LoggedInAuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): boolean {
    let isAuthenticated;
    this.store.select(isUserAuthenticatedSelector).subscribe((res) => {
      isAuthenticated = res;
    });
    if (isAuthenticated) {
      this.router.navigate(['/courses']);
      return false;
    } else {
      return true;
    }
  }
}
