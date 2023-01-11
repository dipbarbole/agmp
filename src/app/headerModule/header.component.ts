import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntity } from '../interfaces/user-entity.model';
import { AuthService } from '../shared/services/auth/auth.service';
import { IsAuthenticatedDirective } from '../shared/directives/is-authenticated.directive';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { isUserAuthenticatedSelector, userSelector } from '../store/selectors/user/user.selectors';
import { LogOffUser } from '../store/actions/user.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  userInfo: UserEntity;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    combineLatest([
      this.store.select(userSelector),
      this.store.select(isUserAuthenticatedSelector)
    ]).subscribe(([user, isAuthenticated]) => {
      this.userInfo = user;
      this.isAuthenticated = isAuthenticated;
    });
  }

  logout() {
    this.store.dispatch(new LogOffUser());
    // this.authService.logout();
    // this.router.navigateByUrl('');
  }
}
