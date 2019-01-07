import { Injectable } from '@angular/core';
import { AtNotificationService } from '../notification/notification.service';
import { NotificationConfig } from '../notification/notification/notification-config';
import { AtMessageContainerService } from './at-message-container.service';

@Injectable({
  providedIn: 'root'
            })
export class AtMessageService {

  constructor(private message_container_service: AtMessageContainerService) {

  }

  success(options = {}) {
    const config = new NotificationConfig(options, 'success');
    this.message_container_service.addMessage(config);
  }

  info(options = {}) {
    const config = new NotificationConfig(options, 'info');
    this.message_container_service.addMessage(config);
  }

  show(options = {}) {
    const config = new NotificationConfig(options);
    this.message_container_service.addMessage(config);
  }

  warning(options = {}) {
    const config = new NotificationConfig(options, 'warning');
    this.message_container_service.addMessage(config);
  }

  error(options = {}) {
    const config = new NotificationConfig(options, 'error');
    this.message_container_service.addMessage(config);
  }

  loading(options) {
    const config = new NotificationConfig(options, 'loading');
    this.message_container_service.addMessage(config);
  }

}
