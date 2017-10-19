import {Component, OnInit} from '@angular/core';
import {AtNotificationService} from "../../../components/notification/notification.service";

@Component({
  selector: 'app-demo-basic-notification',
  template: `
    <button atButton (click)="show()"> 点击提示消息</button>

    <hr>

    <button atButton (click)="show({duration:0})"> 不带延时</button>
    <button atButton (click)="show({type:'info'})"> info</button>
    <button atButton (click)="show({type:'error'})"> error</button>
    <button atButton (click)="show({type:'success'})"> success</button>
    <button atButton (click)="show({type:'warning'})"> warning</button>
  `,
  styleUrls: ['./demo-basic-notification.component.css']
})
export class DemoBasicNotificationComponent implements OnInit {

  constructor(private component_creator: AtNotificationService) {
  }

  ngOnInit() {

  }

  show(option = {}) {
    this.component_creator.show({
      title: '你好',
      message: '这是消息内容哦～～～',
      ...option
    })
  }

}
