import { ChangeDetectorRef, ComponentRef, Injectable } from '@angular/core';
import { ComponentCreator } from '../core/component-creator';
import { ComponentCreatorBase } from '../core/component-creator-base';
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { NotificationConfig } from './notification/notification-config';

@Injectable({
  providedIn: 'root'
})
export class NotificationBaseService extends ComponentCreator<NotificationContainerComponent> {

  notificationComponentRef;

  constructor(public component_base: ComponentCreatorBase, public  cdr: ChangeDetectorRef) {
    super(component_base, cdr, NotificationContainerComponent);
    this.notificationComponentRef = this.create();
  }

  addMessage(config: NotificationConfig): void {
    this.notificationComponentRef.instance.addMessage(config);
  }

  removeMessage(messageId: string): void {
    this.notificationComponentRef.instance.remove(messageId);
  }

}
