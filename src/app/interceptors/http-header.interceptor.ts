import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { userAuthTokenSelector } from '../store/selectors/user/user.selectors';
import { AppState } from '../store/state/app.state';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select(userAuthTokenSelector).pipe(
      switchMap(token => {
        if (token) {
          const modifiedRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
          });
          return next.handle(modifiedRequest);
        }
        return next.handle(req);
      })
    );
  }
}
