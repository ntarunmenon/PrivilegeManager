import { CONTENT_TYPE } from "./section-type";

export interface MainSectionContent {
    mainheading:string,
    mainsubheading:string,
    sectionheading:string,
    buttontext?:string
    sectionType: CONTENT_TYPE
}