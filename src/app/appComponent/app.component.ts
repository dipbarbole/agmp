import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { isUserAuthenticatedSelector, userSelector } from '../store/selectors/user/user.selectors';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    combineLatest([
      this.store.select(userSelector),
      this.store.select(isUserAuthenticatedSelector)
    ]).subscribe(([user, isAuthenticated]) => {
      // this.userInfo = user;
      this.isAuthenticated = isAuthenticated;
    });
  }
}
