import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainSectionContentService } from './main-section-content-service';
import { MainSectionContent } from '../model/main-section-content';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {


  mainSectionContent:MainSectionContent;

  constructor(private mainSectionContentService:MainSectionContentService) { }

  ngOnInit() {
    this.mainSectionContentService.contentAnnounce$
    .subscribe(mainSectionContent => 
      {
        this.mainSectionContent = mainSectionContent
        console.log(this.mainSectionContent);
      }
      );
  }
}
