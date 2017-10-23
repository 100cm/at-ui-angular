import {Component, OnInit} from '@angular/core';
import {AtMessageService} from "../../../components/message/at-message.service";

@Component({
  selector: 'app-demo-basic-message',
  template: `
    <button atButton (click)="showMessage('info')">Info</button>
    <button atButton (click)="showMessage('error')">Error</button>
    <button atButton (click)="showMessage('warning')">Warning</button>
    <button atButton (click)="showMessage('success')">Success</button>

  `,
})
export class DemoBasicMessageComponent implements OnInit {

  constructor(private at_message_service: AtMessageService) {
  }

  ngOnInit() {
  }

  showMessage(info) {
    this.at_message_service[info]({
      message: "这是信息哦"
    })
  }
}
