export interface UserEntity {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  isAuthenticated?: boolean;
  login?: string;
  name?: NameModel;
  fakeToken?: string;
}

export interface NameModel {
  first: string;
  last: string;
}

export interface TokenRequest {
  token: string;
}

export interface LoginModel {
  login: string;
  password: string;
}
