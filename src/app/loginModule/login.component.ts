import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { UserEntity } from 'src/app/interfaces/user-entity.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('flastname', [Validators.required]),
      password: new FormControl('flastname', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ])
    });
  }

  onSubmit() {
    const userInfo: UserEntity = { ...this.loginForm.value, isAuthenticated: true };
    this.authService.login(userInfo);
    this.router.navigateByUrl('/courses');
  }
}
