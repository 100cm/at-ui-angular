import {
  ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, Type
} from "@angular/core";
import {NotificationComponent} from "../notification/notification/notification.component";
import {ComponentCreatorBase} from "./component-creator-base";

@Injectable()
export class ComponentCreator<T> {
  constructor(private base: ComponentCreatorBase, private component?: Type<T>) {

  }

  domElem: HTMLElement
  componentRef: ComponentRef<T>

  create(component?: any) {
    this.componentRef = this.base.componentFactoryResolver
      .resolveComponentFactory(this.component)
      .create(this.base.injector);
    this.base.appRef.attachView(this.componentRef.hostView);
    this.domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(this.domElem);
  }

  remove() {
    this.base.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }

  getElem<T>() {
    return this.componentRef
  }

  getDom() {
    return this.domElem
  }


}
