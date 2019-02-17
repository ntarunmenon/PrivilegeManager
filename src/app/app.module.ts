import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { MainSectionComponent } from './main-section/main-section.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './main-section/employee-list/employee-list.component';
import { OfficeListComponent } from './main-section/office-list/office-list.component';
import { AuditTrailComponent } from './main-section/audit-trail/audit-trail.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { MainSectionContentService } from './main-section/main-section-content-service';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'landing', component: LandingComponent,children: [
      { path: 'main-section', component: MainSectionComponent,children: [
        {
          path: 'employees-list',
          component: EmployeeListComponent
        },
        {
          path: 'office-list',
          component: OfficeListComponent
        },
        {
          path: 'audit-trail',
          component: AuditTrailComponent
        }
      ]
    }
  ]
} ,
  { path: 'employee-detail', component: EmployeeDetailComponent },
  { path: 'location-detail', component: LocationDetailComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    MainSectionComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    OfficeListComponent,
    AuditTrailComponent,
    LocationDetailComponent,
    LandingComponent,
    LoginComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
