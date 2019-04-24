import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { MainSectionContentService } from '../main-section/main-section-content-service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  dropdownSettings = {};
  dropdownList = [];
  selectedItems = [];
  isUpdate = false;

  employeeDetailForm = new FormGroup({
    empNameEn: new FormControl(''),
    empNameAr: new FormControl(''),
    empGprNo: new FormControl(''),
    empCode: new FormControl('', Validators.required),
    isActive: new FormControl(''),
    roles: new FormControl('', Validators.required),
    empTelNo: new FormControl(''),
    empEmail: new FormControl('', Validators.required),
  });


  employee: Employee;
  constructor( private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    console.log('inside init');
    this.employeeDetailForm.reset();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'srvRoleId',
      textField: 'roleName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };

    this.dropdownList = [
      { srvRoleId: 1, roleName: 'ROLE_SPRIVILEGE_SYS' },
      { srvRoleId: 2, roleName: 'TRADING_SYSTEM_MANAGER"' },
      { srvRoleId: 3, roleName: 'TRADING_SYSTEM_OFFICER' },
      { srvRoleId: 4, roleName: 'SALES_MANAGER' },
    ];


   this.employeeService.employeeSelected$.pipe(
      filter(employee => employee != null)
    ).subscribe(emplyee => {
      console.log(emplyee);
      this.employee = emplyee;
      this.updateEmployeeForm(emplyee);
      this.isUpdate = true;
    });
  }

  updateEmployeeForm(employee: Employee) {
      this.employeeDetailForm.setValue({
        empNameEn: employee.empNameEn,
        empNameAr: employee.empNameAr,
        empGprNo: employee.empGprNo,
        empCode: employee.empCode,
        isActive: employee.isActive,
        empTelNo: employee.empTelNo,
        empEmail: employee.empEmail,
        roles: employee.roles
      });
  }

  cancel() {
    this.router.navigate(['/landing/main-section/employees-list']);
  }

  update() {
    const updateEmployee: Employee = this.employeeDetailForm.value;
    if (this.isUpdate) {
      this.employee.empNameEn = updateEmployee.empNameEn;
      this.employee.empNameAr = updateEmployee.empNameAr;
      this.employee.empGprNo = updateEmployee.empGprNo;
      this.employee.isActive = updateEmployee.isActive;
      this.employee.empTelNo = updateEmployee.empTelNo;
      this.employee.roles = updateEmployee.roles;
      this.employeeService.saveEmployee(this.employee);
      this.employee.enabled = true;
    } else {
      this.employeeService.saveEmployee(updateEmployee);
    }
    console.log('Finished Save');
    this.router.navigate(['/landing/main-section/employees-list']);
  }

}
