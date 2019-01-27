import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { MainSectionComponent } from './main-section/main-section.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: 'employees', component: MainSectionComponent },
  { path: 'office-locations', component: MainSectionComponent },
  { path: 'audit-trail', component: MainSectionComponent },
  { path: '',   redirectTo: '/employees', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    MainSectionComponent
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
