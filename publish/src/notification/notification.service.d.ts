import { ComponentCreator } from "../core/component-creator";
import { ComponentCreatorBase } from "../core/component-creator-base";
import { NotificationContainerComponent } from "./notification-container/notification-container.component";
import { NotificationBaseService } from "./notification-base.service";
export declare class AtNotificationService extends ComponentCreator<NotificationContainerComponent> {
    containerbase: NotificationBaseService;
    component_base: ComponentCreatorBase;
    constructor(containerbase: NotificationBaseService, component_base: ComponentCreatorBase);
    success(options?: {}): void;
    info(options?: {}): void;
    show(options?: {}): void;
    warning(options?: {}): void;
    error(options?: {}): void;
}
