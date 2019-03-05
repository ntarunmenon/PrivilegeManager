import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/landing/main-section/office-list']);
  }

}
