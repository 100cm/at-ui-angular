import { ChangeDetectorRef, Injectable } from '@angular/core';
import { ComponentCreator } from '../core/component-creator';
import { ComponentCreatorBase } from '../core/component-creator-base';
import { NotificationConfig } from '../notification/notification/notification-config';
import { MessageContainerComponent } from './message-container/message-container.component';

@Injectable({
  providedIn: 'root'
})
export class AtMessageContainerService extends ComponentCreator<MessageContainerComponent> {

  constructor(public component_base: ComponentCreatorBase) {
    super(component_base, MessageContainerComponent);
    this.create();
  }

  addMessage(config: NotificationConfig): void {
    this.componentRef.instance.addMessage(config);
  }

  removeMessage(messageId: string): void {
    this.componentRef.instance.remove(messageId);
  }

}
