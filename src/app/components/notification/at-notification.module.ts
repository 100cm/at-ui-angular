import { CommonModule }                   from '@angular/common';
import { NgModule }                       from '@angular/core';
import { FormsModule }                    from '@angular/forms';
import { NotificationBaseService }        from './notification-base.service';
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { AtNotificationService }          from './notification.service';
import { NotificationComponent }          from './notification/notification.component';

@NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [NotificationComponent, NotificationContainerComponent],
            exports: [NotificationComponent, NotificationContainerComponent],
            entryComponents: [NotificationComponent, NotificationContainerComponent],
            providers: [NotificationBaseService, AtNotificationService]
          })
export class AtNotificationModule {
}
