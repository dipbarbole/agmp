import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoginModel, UserEntity } from 'src/app/interfaces/user-entity.model';
import { Router } from '@angular/router';
import { LoginUser } from '../store/actions/user.actions';
import { AppState } from '../store/state/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private store: Store<AppState>, private router: Router) {
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
    const userInfo: LoginModel = { ...this.loginForm.value };
    this.store.dispatch(new LoginUser(userInfo));
  }
}
