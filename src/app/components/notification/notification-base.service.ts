import {Injectable} from '@angular/core';
import {ComponentCreator} from "../core/component-creator";
import {NotificationContainerComponent} from "./notification-container/notification-container.component";
import {ComponentCreatorBase} from "../core/component-creator-base";

@Injectable({
              providedIn:'root'
            })
export class NotificationBaseService extends ComponentCreator<NotificationContainerComponent> {

  constructor(public component_base: ComponentCreatorBase) {
    super(component_base, NotificationContainerComponent)
    this.create()
  }


  addMessage(config) {
    this.getElem().instance.addMessage(config)
  }

}
