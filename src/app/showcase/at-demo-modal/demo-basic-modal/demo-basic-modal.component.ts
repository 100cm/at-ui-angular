import {Component, OnInit} from '@angular/core';
import {AtModalService} from "../../../components/modal/at-modal.service";

@Component({
  selector: 'app-demo-basic-modal',
  templateUrl: './demo-basic-modal.component.html',
  styleUrls: ['./demo-basic-modal.component.css']
})
export class DemoBasicModalComponent implements OnInit {

  constructor(private atModalService: AtModalService) {
  }

  ngOnInit() {
  }

  show = false

  setShow() {
    this.show = true
  }

  close() {
    this.show = false
  }

  show2 = false

  setShow2() {
    this.show2 = true
  }

  close2() {
    this.show2 = false
  }

  open() {
    this.atModalService.modal({
      status: 'error',
      atType: 'confirm',
      message: '我是错误',
      title: '我是错误的标题'
    })
  }

}
