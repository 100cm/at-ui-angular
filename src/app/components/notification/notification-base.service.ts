import { ChangeDetectorRef, ComponentRef, Injectable } from '@angular/core';
import { ComponentCreator } from '../core/component-creator';
import { ComponentCreatorBase } from '../core/component-creator-base';
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { NotificationConfig } from './notification/notification-config';

@Injectable({
  providedIn: 'root'
})
export class NotificationBaseService extends ComponentCreator<NotificationContainerComponent> {

  constructor(public component_base: ComponentCreatorBase) {
    super(component_base, NotificationContainerComponent);
  }

  addMessage(config: NotificationConfig): void {
    if (this.componentRef) {
      this.componentRef.instance.addMessage(config);
    } else {
      this.create().then(_ => {
        this.componentRef.instance.addMessage(config);
      });
    }
  }

  removeMessage(messageId: string): void {
    this.componentRef.instance.remove(messageId);
  }

}
