import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { MainSectionContentService } from '../main-section/main-section-content-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  private employeeSelected$:Observable<Employee>;
  employee:Employee;
  constructor( private router:Router,
    private employeeService:EmployeeService) { }

  ngOnInit() {
   
    this.employeeService.employeeSelected$.pipe(
      filter(employee => employee != null)
    ).subscribe(emplyee => this.employee = emplyee);
  }

  cancel() {
    this.router.navigate(['/landing/main-section/employees-list']);
  }

}
