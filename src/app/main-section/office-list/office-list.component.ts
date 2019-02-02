import { Component, OnInit } from '@angular/core';
import { MainSectionContentService } from '../main-section-content-service';
import { OfficeService } from 'src/app/office.service';
import { Office } from 'src/app/model/office';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit {

  officeLocations$: Observable<Office[]>;
  
  constructor(private mainSectionContentService:MainSectionContentService,
    private officeService:OfficeService) { }

  ngOnInit() {
    this.mainSectionContentService.announceContent({
      mainheading:'Employee Locations',
      mainsubheading:'To Manage Employee locations',
      sectionheading:'Employee Office Locations',
      buttontext:'Create Location'
    });

    this.officeLocations$ = this.officeService.getOfficeLocations();
  }

}
