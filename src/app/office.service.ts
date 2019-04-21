import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Office } from './model/office';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  private subject:Subject<Office> = new BehaviorSubject<Office>(null);
  officeSelected$:Observable<Office> = this.subject.asObservable();


  constructor(private http: HttpClient) { }
  
  officeUrl = '/api/locations';

  public getOfficeLocations() {
    return this.http.get<Office[]>(this.officeUrl);
  }

  selectOffice(office:Office){
    this.subject.next(office);
  }

  saveOffice(office: Office) {
    console.log('inside save')
    return this.http.post<HttpResponse<String>>(this.officeUrl, office)
    .subscribe(response => {
      return true
    },
    error => {
      return false
    })
  }
}
