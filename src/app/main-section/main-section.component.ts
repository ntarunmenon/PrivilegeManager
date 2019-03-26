import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MainSectionContentService } from './main-section-content-service';
import { MainSectionContent } from '../model/main-section-content';
import { Observable } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';

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

  constructor(private mainSectionContentService:MainSectionContentService,private cdf: ChangeDetectorRef) { }

  ngOnInit() {
    this.mainSectionContentService.contentAnnounce$
    .subscribe(mainSectionContent => 
      {
        this.mainSectionContent = mainSectionContent
        this.cdf.detectChanges(); //https://stackoverflow.com/questions/55293954/expressionchangedafterithasbeencheckederror-shared-service/55294187#55294187
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
}
