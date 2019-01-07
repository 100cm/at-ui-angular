import { Component, OnInit } from '@angular/core';
import { AtMessageService } from '../../../components/message/at-message.service';

@Component({
  selector: 'app-demo-loading-message',
  template: `
    <button at-button (click)="showMessage('loading')">Info</button>`
})
export class DemoLoadingMessageComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private at_message_service: AtMessageService) {
  }

  showMessage(info) {
    this.at_message_service[info]({
      message: '这是信息哦'
    });
  }
}
