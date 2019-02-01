import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MainSectionContentService } from '../main-section-content-service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  modalActionType:string = "NONE";

  constructor(private modalService: NgbModal,
    private mainSectionContentService:MainSectionContentService) {}

    ngOnInit() {
      this.mainSectionContentService.announceContent({
        mainheading:'Employee Manger',
        mainsubheading:'To manage SmartAmer Employees',
        sectionheading:'Employee List',
        buttontext:'Create Employee'
      });
    }

  openModal(content,modalActionType) {
    this.modalActionType = modalActionType;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    .result.then((saveOrCancel) => {
    }, (dismissReason) => {
      this.modalActionType = 'NONE';
    });
    return false;
  }

}
