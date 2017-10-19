import { ComponentCreator } from "../core/component-creator";
import { NotificationContainerComponent } from "./notification-container/notification-container.component";
import { ComponentCreatorBase } from "../core/component-creator-base";
export declare class NotificationBaseService extends ComponentCreator<NotificationContainerComponent> {
    component_base: ComponentCreatorBase;
    constructor(component_base: ComponentCreatorBase);
    addMessage(config: any): void;
}
