import { Component, OnInit } from '@angular/core';
import { MainSectionContentService } from '../main-section-content-service';

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.css']
})
export class AuditTrailComponent implements OnInit {

  constructor(private mainSectionContentService:MainSectionContentService) { }

  ngOnInit() {
    this.mainSectionContentService.announceContent({
      mainheading:'Employee Activities',
      mainsubheading:' To list all the activities performed',
      sectionheading:'Employee Activity'
    });
  }

}
