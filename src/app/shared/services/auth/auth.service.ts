import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  LoginModel,
  TokenRequest,
  UserEntity,
} from 'src/app/interfaces/user-entity.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { URLS } from '../../urls/urls';
import { tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login({ login, password }: LoginModel): Observable<UserEntity> {
    return this.http
      .post<TokenRequest>(URLS.LOGIN, { login, password })
      .pipe(
        switchMap((token) => this.http.post<UserEntity>(URLS.USER_INFO, token))
      );
  }
}
