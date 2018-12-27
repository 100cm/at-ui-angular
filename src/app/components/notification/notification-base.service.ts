import {ComponentRef, Injectable}       from '@angular/core';
import {ComponentCreator}               from '../core/component-creator';
import {NotificationContainerComponent} from './notification-container/notification-container.component';
import {ComponentCreatorBase}           from '../core/component-creator-base';
import {NotificationComponent}          from './notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationBaseService extends ComponentCreator<NotificationContainerComponent> {

  notificationComponentRef
  constructor(public component_base: ComponentCreatorBase) {
    super(component_base, NotificationContainerComponent)
    this.notificationComponentRef = this.create()
  }


  addMessage(config) {
    this.notificationComponentRef.instance.addMessage(config)
  }

}
