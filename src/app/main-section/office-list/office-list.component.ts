import { Component, OnInit } from '@angular/core';
import { MainSectionContentService } from '../main-section-content-service';
import { OfficeService } from 'src/app/office.service';
import { Office } from 'src/app/model/office';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CONTENT_TYPE } from 'src/app/model/section-type';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit {

  officeLocations$: Observable<Office[]>;
  
  constructor(private mainSectionContentService:MainSectionContentService,
    private officeService:OfficeService,
    private router:Router) { }

  ngOnInit() {
 
    setTimeout(() => { // https://stackoverflow.com/questions/55293954/expressionchangedafterithasbeencheckederror-shared-service
      this.mainSectionContentService.announceContent({
        mainheading:'Employee Locations',
        mainsubheading:'To Manage Employee locations',
        sectionheading:'Employee Office Locations',
        buttontext:'Create Location',
        sectionType: CONTENT_TYPE.Office
      });
    });
    this.officeLocations$ = this.officeService.getOfficeLocations();
  }

  editOffice(office:Office){
    this.officeService.selectOffice(office);
    this.router.navigate(['/landing/main-section/location-detail']);
  }


}
