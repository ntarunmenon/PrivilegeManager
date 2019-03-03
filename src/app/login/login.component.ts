import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private loginService:LoginService,
    private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.username,this.password)
    .pipe(first())
    .subscribe(
        data => {
          this.router.navigate(['/landing/main-section/employees-list']);
      },
        error => {
          console.log('Error during login');
        }
    );
  }
}
