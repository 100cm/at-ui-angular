import { TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OnClickCallback } from '../../modal/at-modal.service';

export type NotificationConfigType = 'success' | 'info' | 'error' | 'warning' | 'loading';

export interface NotificationOption {
  index?: string;
  title?: string | TemplateRef<void>;
  duration?: number;
  icon?: string | TemplateRef<void>;
  message?: string | TemplateRef<void>;
  showClose?: boolean;
  state?: 'enter' | 'leave';
  type?: NotificationConfigType;
  atOnClose?: OnClickCallback<NotificationConfig>;
}

export class NotificationConfig implements NotificationOption {
  index?: string;
  title?: string | TemplateRef<void>;
  duration?: number;
  icon?: string | TemplateRef<void>;
  message?: string | TemplateRef<void>;
  showClose?: boolean;
  state?: 'enter' | 'leave';
  type?: NotificationConfigType;
  atOnClose?: OnClickCallback<NotificationConfig>;
  $atAfterClose = new Subject<NotificationConfig>();

  get atAfterClose(): Observable<NotificationConfig> {
    return this.$atAfterClose.asObservable();
  }

  guid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c: string): string {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  constructor(options: NotificationOption, type?: NotificationConfigType) {
    this.index = this.guid();
    this.title = options.title || '';
    this.state = 'enter';
    this.duration = options.duration === 0 ? 0 : (options.duration || 4000);
    this.message = options.message || '';
    this.icon = options.icon || '';
    this.showClose = options.showClose || true;
    this.type = type || options.type || 'info';
    this.atOnClose = options.atOnClose || (() => {
    });
  }
}
