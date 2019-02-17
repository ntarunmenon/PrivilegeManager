import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './model/employee';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeesUrl = '/api/employees';
  private subject:Subject<Employee> = new BehaviorSubject<Employee>(null);
  employeeSelected$:Observable<Employee> = this.subject.asObservable();

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  selectEmployee(employee:Employee){
    this.subject.next(employee);
  }

}
