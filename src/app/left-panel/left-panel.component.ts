import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor(private loginService:LoginService,
    private router:Router) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(["/"]);
  }

}
