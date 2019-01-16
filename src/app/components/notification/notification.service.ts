import { Injectable } from '@angular/core';
import { NotificationBaseService } from './notification-base.service';
import { NotificationConfig, NotificationOption } from './notification/notification-config';

@Injectable({
  providedIn: 'root'
})
export class AtNotificationService {

  constructor(public containerbase: NotificationBaseService) {
  }

  remove(messageId: string): void {
    this.containerbase.removeMessage(messageId);
  }

  success(options: NotificationOption = {}): NotificationConfig {
    const config = new NotificationConfig(options, 'success');
    this.containerbase.addMessage(config);
    return config;
  }

  info(options: NotificationOption = {}): NotificationConfig {
    const config = new NotificationConfig(options, 'info');
    this.containerbase.addMessage(config);
    return config;
  }

  show(options: NotificationOption = {}): NotificationConfig {
    const config = new NotificationConfig(options);
    this.containerbase.addMessage(config);
    return config;
  }

  warning(options: NotificationOption = {}): NotificationConfig {
    const config = new NotificationConfig(options, 'warning');
    this.containerbase.addMessage(config);
    return config;
  }

  error(options: NotificationOption = {}): NotificationConfig {
    const config = new NotificationConfig(options, 'error');
    this.containerbase.addMessage(config);
    return config;
  }

}
