import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { MainSectionComponent } from './main-section/main-section.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './main-section/employee-list/employee-list.component';

const appRoutes: Routes = [
  { path: 'main-section', component: MainSectionComponent,children: [
      {
        path: 'employees-list',
        component: EmployeeListComponent
      }
    ] 
  },
  { path: 'employee-detail', component: EmployeeDetailComponent },
  { path: '',   redirectTo: '/main-section/employees-list', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    MainSectionComponent,
    EmployeeDetailComponent,
    EmployeeListComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
