import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeesUrl = '/api/employees';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

}
