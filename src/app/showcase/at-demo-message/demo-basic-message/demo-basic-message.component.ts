import { Component, OnInit } from '@angular/core';
import { AtMessageService } from '../../../components/message/at-message.service';

@Component({
  selector: 'app-demo-basic-message',
  template: `
    <button at-button (click)="showMessage('info')">Info</button>
    <button at-button (click)="showMessage('error')">Error</button>
    <button at-button (click)="showMessage('warning')">Warning</button>
    <button at-button (click)="showMessage('success')">Success</button>

  `
})
export class DemoBasicMessageComponent implements OnInit {

  constructor(private at_message_service: AtMessageService) {
  }

  ngOnInit() {
  }

  showMessage(info) {
    this.at_message_service[info]({
      message: '这是信息哦'
    });
  }
}
