import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenRequest, UserEntity } from 'src/app/interfaces/user-entity.model';
import { BehaviorSubject } from 'rxjs';
import { URLS } from '../../urls/urls';
import { tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: UserEntity;
  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  login({ login, password }: UserEntity) {
    this.http
      .post<TokenRequest>(URLS.LOGIN, { login, password })
      .pipe(
        tap(token => token),
        switchMap(token => this.http.post<UserEntity>(URLS.USER_INFO, token))
      )
      .subscribe(user => {
        this.loggedInUser = user;
        this.isAuthenticated$.next(true);
        this.router.navigateByUrl('courses');
      });
  }

  logout(): void {
    this.isAuthenticated$.next(false);
  }

  getAuthToken(): any {
    return this.loggedInUser ? this.loggedInUser.fakeToken : '';
  }

  getUserInfo(): UserEntity {
    return this.loggedInUser;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticated$.value;
  }
}
