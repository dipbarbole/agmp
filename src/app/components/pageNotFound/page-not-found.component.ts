import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { isUserAuthenticatedSelector } from 'src/app/store/selectors/user/user.selectors';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(isUserAuthenticatedSelector).subscribe((res) => {
      this.isLoggedIn = res;
    });
  }

  backToHomePage() {
    // this.router.navigateByUrl('courses');
    this.router.navigateByUrl('login');
  }
}
