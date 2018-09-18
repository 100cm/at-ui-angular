import {CommonModule}                   from '@angular/common';
import {NgModule}                       from '@angular/core';
import {FormsModule}                    from "@angular/forms";
import {NotificationComponent}          from "./notification/notification.component";
import {NotificationContainerComponent} from "./notification-container/notification-container.component";
import {NotificationBaseService}        from "./notification-base.service";
import {AtNotificationService}          from "./notification.service";


@NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [NotificationComponent, NotificationContainerComponent],
            exports: [NotificationComponent, NotificationContainerComponent],
            entryComponents: [NotificationComponent, NotificationContainerComponent],
            providers: [NotificationBaseService, AtNotificationService]
          })
export class AtNotificationModule {
}
