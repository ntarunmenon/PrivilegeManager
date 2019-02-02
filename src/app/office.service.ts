import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Office } from './model/office';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private http: HttpClient) { }
  
  officeUrl = '/PrivilegeSystem/rest/location/getAllActive';

  public getOfficeLocations() {
    return this.http.get<Office[]>(this.officeUrl);
  }
}
