import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntity } from '../interfaces/user-entity.model';
import { AuthService } from '../shared/services/auth/auth.service';
import { IsAuthenticatedDirective } from '../shared/directives/is-authenticated.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  userInfo: UserEntity;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
      this.userInfo = this.authService.getUserInfo();
    });
  }

  getUserInfo() {
    const user: UserEntity = this.authService.getUserInfo();
    console.log('UserInfo', user);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}
