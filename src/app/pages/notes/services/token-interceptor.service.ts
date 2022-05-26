import { Injectable } from '@angular/core';
import { UserService } from '../../user/services/user.service';
import { HttpInterceptor } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private authService: UserService) { }

  intercept(req:any, next: any) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: this.authService.getToken()
      }
    });
    return next.handle(tokenizeReq);
  }
}
