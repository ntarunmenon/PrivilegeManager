import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from './model/user';
import { tap, map, flatMap, merge, concatAll } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUrl = '/api/login';

  login (username,password) : Observable<User> {
   return this.http.post<HttpResponse<any>>(this.loginUrl,{
      username: username,
      password : password
    }, 
    { observe: 'response' }
    ).pipe(
      map (resp => {
      console.log(resp);
     let user:User;
      if(resp.status != 200) {
        user = null;
      }
      user = resp.body["user"];
      localStorage.idToken = resp.body["idToken"];
      console.log(`logged in as ${user} with JWT  ${ localStorage.idToken}`);
      return user;
    }));
   
  }
}
