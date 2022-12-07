import { Injectable } from '@angular/core';
import { UserEntity } from 'src/app/interfaces/user-entity.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor() {
    const userInfo = localStorage.getItem('userInfo');
    const isAuthenticated = userInfo
      ? JSON.parse(userInfo).isAuthenticated
      : false;
    this.isAuthenticated$.next(isAuthenticated);
  }

  login(user: UserEntity) {
    localStorage.setItem('userInfo', JSON.stringify(user));
    this.isAuthenticated$.next(true);
  }

  logout() {
    localStorage.removeItem('userInfo');
    this.isAuthenticated$.next(false);
  }

  getUserInfo(): UserEntity {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : 'No user info found';
  }

  isAuthenticated() {
    return this.isAuthenticated$.value;
  }
}
