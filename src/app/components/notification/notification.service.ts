import { Injectable }                     from '@angular/core';
import { ComponentCreator }               from '../core/component-creator';
import { ComponentCreatorBase }           from '../core/component-creator-base';
import { NotificationBaseService }        from './notification-base.service';
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { NotificationConfig }             from './notification/notification-config';
import { NotificationComponent }          from './notification/notification.component';

@Injectable({
              providedIn: 'root'
            })
export class AtNotificationService extends ComponentCreator<NotificationContainerComponent> {

  constructor(public containerbase: NotificationBaseService, public component_base: ComponentCreatorBase) {
    super(component_base, NotificationContainerComponent);
  }

  success(options = {}) {
    const config = new NotificationConfig(options, 'success');
    this.containerbase.addMessage(config);
  }

  info(options = {}) {
    const config = new NotificationConfig(options, 'info');
    this.containerbase.addMessage(config);
  }

  show(options = {}) {
    const config = new NotificationConfig(options);
    this.containerbase.addMessage(config);
  }

  warning(options = {}) {
    const config = new NotificationConfig(options, 'warning');
    this.containerbase.addMessage(config);
  }

  error(options = {}) {
    const config = new NotificationConfig(options, 'error');
    this.containerbase.addMessage(config);
  }

}
