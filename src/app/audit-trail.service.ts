import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, flatMap, merge, concatAll } from 'rxjs/operators';
import { from, concat } from 'rxjs';
import { AuditTrail } from './model/audit-trail';

@Injectable({
  providedIn: 'root'
})
export class AuditTrailService {

  constructor(private http: HttpClient) { }
  
  auditTrailUrl = '/api/auditlogs';

  public getAuditTrails() {
   return this.http.get<AuditTrail[]>(this.auditTrailUrl)
    .pipe(
      map((data :Object[]) =>  {
        return data.map(value => {
          const auditTrail:AuditTrail = {
            logAction:value["logAction"],
            targetEmpId:value["targetEmpId"]["empCode"],
            createdDate:value["loggedDateTime"]
          }
          return auditTrail;
        });
    })
    )
  }
}
