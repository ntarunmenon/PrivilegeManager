import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MainSectionContentService } from '../main-section-content-service';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/model/employee';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CONTENT_TYPE } from 'src/app/model/section-type';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  modalActionType:string = "NONE";
  employees$: Observable<Employee[]>;

  constructor(private modalService: NgbModal,
    private mainSectionContentService:MainSectionContentService,
    private employeeService:EmployeeService,
    private router:Router) {}

    ngOnInit() {
      this. modalActionType = "NONE";
      setTimeout(() => {
        this.mainSectionContentService.announceContent({
          mainheading:'Employee Manger',
          mainsubheading:'To manage PrivilegeManager Employees',
          sectionheading:'Employee List',
          buttontext:'Create Employee',
          sectionType: CONTENT_TYPE.Employee
        });
      });
      this.employees$ = this.employeeService.getEmployees();
    }

  openModal(content,modalActionType) {
    this.modalActionType = modalActionType;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    .result.then((saveOrCancel) => {
      if(saveOrCancel === 'Save' ){
        if(this.modalActionType === 'Disable'){
          this.mainSectionContentService.actionSuccessEvent('DISABLE');
        } else {
          this.mainSectionContentService.actionSuccessEvent('RESET');
        }
      }
    }, (dismissReason) => {
      this.modalActionType = 'NONE';
    });
    return false;
  }

  editEmployee(employee:Employee){
    this.employeeService.selectEmployee(employee);
    this.router.navigate(['/landing/main-section/employee-detail']);
  }

}
