import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Employee } from './model/employee';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role } from './model/role';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeesUrl = '/api/employees';
  private subject:Subject<Employee> = new BehaviorSubject<Employee>(null);
  employeeSelected$:Observable<Employee> = this.subject.asObservable();

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        map((data : Object[]) => {
          const employees: Employee[] = [];
          data.forEach(function (element) {
            const roles: Role[] = [];  
            element['srvEmpRoleList'].forEach((emploeeObj: any) => {
                roles.push({
                  srvRoleId: emploeeObj['roleId']['srvRoleId'],
                  roleName:emploeeObj['roleId']['roleName']
                });
              })

            employees.push({
              mntEmpId: element['mntEmpId'],
              empNameEn: element['empNameEn'],
              empNameAr: element['empNameAr'],
              empGprNo: element['empGprNo'],
              isActive: element['isActive'],
              empCode: element['empCode'],
              modifiedDate: element['modifiedDate'],
              empEmail: element['empEmail'],
              empTelNo: element['empTelNo'],
              roles: roles
              });
            })
          return employees;
        })
      );
  }

  selectEmployee(employee: Employee) {
    this.subject.next(employee);
  }

  saveEmployee(employee: Employee) {
    console.log('inside save')
    return this.http.post<HttpResponse<String>>(this.employeesUrl,employee)
    .subscribe(response => {
      return true
    },
    error => {
      return false
    })
  }
}
