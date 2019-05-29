import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AtNotificationService } from '../../../components/notification/notification.service';
import {
  NotificationConfig,
  NotificationOption
} from '../../../components/notification/notification/notification-config';

@Component({
  selector: 'app-demo-basic-notification',
  template: `
    <button at-button (click)="show()"> 点击提示消息</button>

    <hr>
    <ng-template #custom>
      <div style="color: red">
        自定义内容/title
      </div>
    </ng-template>
    <button at-button (click)="show({duration:0})"> 不带延时</button>
    <button at-button (click)="show({type:'info'})"> info</button>
    <button at-button (click)="show({type:'error'})"> error</button>
    <button at-button (click)="show({type:'success'})"> success</button>
    <button at-button (click)="show({type:'warning'})"> warning</button>
    <button at-button (click)="close()"> 关闭</button>
  `,
  styleUrls: ['./demo-basic-notification.component.css']
})
export class DemoBasicNotificationComponent implements OnInit {

  constructor(private component_creator: AtNotificationService) {
  }

  ngOnInit(): void {

  }

  note: NotificationConfig;

  @ViewChild('custom', { static: true }) custom: TemplateRef<void>;

  close(): void {
    this.component_creator.remove(this.note.index);
  }

  show(option: NotificationOption = {}): void {
    this.note = this.component_creator.show({
      title: '消息标题',
      message: '这是消息内容哦～～～',
      atOnClose: () => false,
      ...option
    });
    this.note.atAfterClose.subscribe(data => alert('closed'));
  }

}
