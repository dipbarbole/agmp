import { Action } from '@ngrx/store';
import { UserEntity, LoginModel } from 'src/app/interfaces/user-entity.model';

export enum UserActions {
  LoginUser = '[User] Login User',
  LoginUserSuccess = '[User] Login User Success',
  LogOffUser = '[User] LogOff User'
}

export class LoginUser implements Action {
  public readonly type = UserActions.LoginUser;
  constructor(public payload: LoginModel) {}
}

export class LoginUserSuccess implements Action {
  public readonly type = UserActions.LoginUserSuccess;
  constructor(public user: UserEntity) {}
}

export class LogOffUser implements Action {
  public readonly type = UserActions.LogOffUser;
}

export type UserActionTypes = LoginUser | LoginUserSuccess | LogOffUser;
