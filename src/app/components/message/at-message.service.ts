import { Injectable } from '@angular/core';
import { AtNotificationService } from '../notification/notification.service';
import { NotificationConfig, NotificationOption } from '../notification/notification/notification-config';
import { AtMessageContainerService } from './at-message-container.service';

@Injectable({
  providedIn: 'root'
})
export class AtMessageService {

  constructor(private message_container_service: AtMessageContainerService) {

  }

  success(options: NotificationOption = {}): NotificationConfig {
    const config = new NotificationConfig(options, 'success');
    this.message_container_service.addMessage(config);
    return config;
  }

  info(options: NotificationOption = {}): NotificationConfig {
    const config = new NotificationConfig(options, 'info');
    this.message_container_service.addMessage(config);
    return config;
  }

  show(options: NotificationOption = {}): NotificationConfig {
    const config = new NotificationConfig(options);
    this.message_container_service.addMessage(config);
    return config;
  }

  warning(options: NotificationOption = {}): NotificationConfig {
    const config = new NotificationConfig(options, 'warning');
    this.message_container_service.addMessage(config);
    return config;
  }

  error(options: NotificationOption = {}): NotificationConfig {
    const config = new NotificationConfig(options, 'error');
    this.message_container_service.addMessage(config);
    return config;
  }

  loading(options: NotificationOption = {}): NotificationConfig {
    const config = new NotificationConfig(options, 'loading');
    this.message_container_service.addMessage(config);
    return config;
  }

  remove(messageId: string): void {
    this.message_container_service.removeMessage(messageId);
  }

}
