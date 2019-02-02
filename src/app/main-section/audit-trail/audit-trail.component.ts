import { Component, OnInit } from '@angular/core';
import { MainSectionContentService } from '../main-section-content-service';
import { AuditTrailService } from 'src/app/audit-trail.service';
import { AuditTrail } from 'src/app/model/audit-trail';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.css']
})
export class AuditTrailComponent implements OnInit {

  auditTrails$:Observable<AuditTrail[]>;
  
  constructor(private mainSectionContentService:MainSectionContentService,
    private auditTrailService:AuditTrailService) { }

  ngOnInit() {
    this.mainSectionContentService.announceContent({
      mainheading:'Employee Activities',
      mainsubheading:' To list all the activities performed',
      sectionheading:'Employee Activity'
    });

    this.auditTrails$ = this.auditTrailService.getAuditTrails();
  }

}
