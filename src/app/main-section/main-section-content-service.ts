import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MainSectionContent } from "../model/main-section-content";

@Injectable({
    providedIn: 'root',
   })
export class MainSectionContentService {

    private contentAnnounce = new Subject<MainSectionContent>();
    contentAnnounce$ = this.contentAnnounce.asObservable();

    announceContent(content:MainSectionContent){
        this.contentAnnounce.next(content);
    }
}