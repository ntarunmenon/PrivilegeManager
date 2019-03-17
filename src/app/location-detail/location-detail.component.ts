import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Office } from '../model/office';
import { OfficeService } from '../office.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  office:Office;
  
  constructor(private router:Router,
    private officeService:OfficeService) { }

  ngOnInit() {

    this.officeService.officeSelected$.pipe(
      filter(office => office != null)
    ).subscribe(office => {
      console.log(office)
      this.office = office
    });

  }

  cancel() {
    this.router.navigate(['/landing/main-section/office-list']);
  }

}
