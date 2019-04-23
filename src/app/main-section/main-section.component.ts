import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainSectionContentService } from './main-section-content-service';
import { MainSectionContent } from '../model/main-section-content';
import { Observable } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';
import { CONTENT_TYPE } from '../model/section-type';
import { Router } from '@angular/router';
import { MainSectionMessage } from '../model/main-section-messsage';
import { OfficeService } from '../office.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  showMessage = false;
  userMessage : string = ""
  showDisableMessage = false;
  mainSectionContent:MainSectionContent;
  actionSuccess$:Observable<MainSectionMessage>;

  constructor(private mainSectionContentService:MainSectionContentService,private officeService:OfficeService,
    private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.mainSectionContentService.contentAnnounce$
    .subscribe(mainSectionContent => 
      {
        this.mainSectionContent = mainSectionContent
      }
      );
      this.actionSuccess$ = this.mainSectionContentService.actionSuccess$;

      this.actionSuccess$.subscribe(data => {
        this.showMessage = true
        this.userMessage = MainSectionMessage.getMessage(data)
      });

      this.actionSuccess$.pipe(
        debounceTime(5000)
      ).subscribe( data => { 
        this.showMessage = false
        this.userMessage = ""
      })
  }

  onClickCreate() {
    if (this.mainSectionContent.sectionType === CONTENT_TYPE.Employee) {
      this.employeeService.selectEmployee(null)
      this.router.navigate(['/landing/main-section/employee-detail']);
    } else {
      this.officeService.selectOffice(null);
      this.router.navigate(['/landing/main-section/location-detail']);
    }
  }
}
