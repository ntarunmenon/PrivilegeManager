import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainSectionContentService } from './main-section-content-service';
import { MainSectionContent } from '../model/main-section-content';
import { Observable } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';
import { CONTENT_TYPE } from '../model/section-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  showResetMessage = false;
  showDisableMessage = false;
  mainSectionContent:MainSectionContent;
  actionSuccess$:Observable<string>;

  constructor(private mainSectionContentService:MainSectionContentService,
    private router:Router) { }

  ngOnInit() {
    this.mainSectionContentService.contentAnnounce$
    .subscribe(mainSectionContent => 
      {
        this.mainSectionContent = mainSectionContent
      }
      );
      this.actionSuccess$ = this.mainSectionContentService.actionSuccess$;

      this.actionSuccess$.
        subscribe(data => {
          data === 'DISABLE' ? this.showDisableMessage = true:this.showResetMessage = true;
        });

      this.actionSuccess$.pipe(
        debounceTime(5000)
      ).subscribe((data) => 
       data === 'DISABLE' ? this.showDisableMessage = false:this.showResetMessage = false
      )
  }

  onClickCreate() {
    if (this.mainSectionContent.sectionType === CONTENT_TYPE.Employee) {
      this.router.navigate(['/landing/main-section/employee-detail']);
    } else {
      this.router.navigate(['/landing/main-section/location-detail']);
    }
  }
}
