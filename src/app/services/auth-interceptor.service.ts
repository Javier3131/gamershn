import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(this.authService.user);
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          console.log('!user === true');
          return next.handle(req);
        }
        console.log('!user === false');
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token),
        });
        console.log(modifiedReq);
        return next.handle(modifiedReq);
      })
    );
  }
}
