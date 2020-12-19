import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { UserdetailsService } from './userdetails.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){}
  intercept(req, next) {
    let userservice = this.injector.get(UserdetailsService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${userservice.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }

}
