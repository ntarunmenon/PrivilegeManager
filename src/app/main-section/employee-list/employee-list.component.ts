import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  modalActionType:string = "NONE";


  constructor(private modalService: NgbModal) {}

  ngOnInit() {
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
