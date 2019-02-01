import { Component, OnInit } from '@angular/core';
import { MainSectionContentService } from '../main-section-content-service';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit {

  constructor(private mainSectionContentService:MainSectionContentService) { }

  ngOnInit() {
    this.mainSectionContentService.announceContent({
      mainheading:'Employee Locations',
      mainsubheading:'To Manage Employee locations',
      sectionheading:'Employee Office Locations',
      buttontext:'Create Location'
    });
  }

}
