import {Injectable} from '@angular/core';
import {ComponentCreator} from "../core/component-creator";
import {NotificationComponent} from "./notification/notification.component";
import {ComponentCreatorBase} from "../core/component-creator-base";
import {NotificationContainerComponent} from "./notification-container/notification-container.component";
import {NotificationBaseService} from "./notification-base.service";
import {NotificationConfig} from "./notification/notification-config";

@Injectable()
export class AtNotificationService extends ComponentCreator<NotificationContainerComponent> {

  constructor(public containerbase: NotificationBaseService, public component_base: ComponentCreatorBase) {
    super(component_base, NotificationContainerComponent)
  }


  success(options = {}) {
    let config = new NotificationConfig(options, 'success')
    this.containerbase.addMessage(config)
  }

  info(options = {}) {
    let config = new NotificationConfig(options, 'info')
    this.containerbase.addMessage(config)
  }

  show(options = {}) {
    let config = new NotificationConfig(options)
    this.containerbase.addMessage(config)
  }

  warning(options = {}) {
    let config = new NotificationConfig(options, 'warning')
    this.containerbase.addMessage(config)
  }

  error(options = {}) {
    let config = new NotificationConfig(options, 'error')
    this.containerbase.addMessage(config)
  }


}
