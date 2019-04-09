import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MainSectionContent } from "../model/main-section-content";
import { MainSectionMessage } from "../model/main-section-messsage";

@Injectable({
    providedIn: 'root',
   })
export class MainSectionContentService {
    
    private contentAnnounce = new Subject<MainSectionContent>();
    contentAnnounce$ = this.contentAnnounce.asObservable();
    
    private actionSuccess = new Subject<MainSectionMessage>();
    actionSuccess$ = this.actionSuccess.asObservable();

    announceContent(content:MainSectionContent){
        this.contentAnnounce.next(content);
    }

    actionSuccessEvent(actionType:MainSectionMessage){
        this.actionSuccess.next(actionType);
    }
}