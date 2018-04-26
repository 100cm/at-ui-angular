import {Component, OnInit} from '@angular/core';
import {AtModalService} from "../../../components/modal/at-modal.service";

@Component({
  selector: 'app-demo-service-modal',
  template: `
    <div>
      <button atButton [atType]="'error'" (click)="show('error')">error</button>
      <button atButton [atType]="'warning'" (click)="show('warning')">warning</button>
      <button atButton [atType]="'success'" (click)="show('success')">success</button>
      <button atButton [atType]="'info'" (click)="show('info')">info</button>
    </div>`,
  styleUrls: ['./demo-service-modal.component.css']
})
export class DemoServiceModalComponent implements OnInit {

  constructor(private atModalService: AtModalService) {
  }

  ngOnInit() {
  }

  show(type) {
    this.atModalService.modal({
      atType: 'confirm',
      title: type,
      status: type,
      message: '这是消息体',
    })
  }

}
