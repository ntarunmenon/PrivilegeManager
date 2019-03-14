import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "../login.service";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
    constructor(private loginService: LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
   
    let currentUser = this.loginService.currentUserValue;
        if (currentUser && currentUser.idToken) {
            req = req.clone({
                setHeaders: { 
                    "X-Auth-Token": currentUser.idToken
                }
            });
        }
        return next.handle(req);
  }

}