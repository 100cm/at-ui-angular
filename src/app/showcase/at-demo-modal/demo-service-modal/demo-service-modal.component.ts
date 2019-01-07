import { Component, OnInit } from '@angular/core';
import { AtModalService } from '../../../components/modal/at-modal.service';

@Component({
  selector: 'app-demo-service-modal',
  template: `
    <div>
      <button at-button [atType]="'error'" (click)="show('error')">error</button>
      <button at-button [atType]="'warning'" (click)="show('warning')">warning</button>
      <button at-button [atType]="'success'" (click)="show('success')">success</button>
      <button at-button [atType]="'info'" (click)="show('info')">info</button>
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
      message: '这是消息体'
    });
  }

}
