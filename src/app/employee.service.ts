import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './model/employee';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeesUrl = '/api/employees';
  private subject:Subject<Employee> = new BehaviorSubject<Employee>(null);
  employeeSelected$:Observable<Employee> = this.subject.asObservable();

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.employeesUrl)
      .pipe(
        map(data => {
            data;
        })
      );
  }

  selectEmployee(employee:Employee){
    this.subject.next(employee);
  }

}
