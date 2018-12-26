import {
  ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, Optional, Type
}                             from '@angular/core';
import {ComponentCreatorBase} from './component-creator-base';

export class ComponentCreator<T> {


  constructor(private base: ComponentCreatorBase, private component?: Type<T>) {

  }

  domElem: HTMLElement
  componentRef: ComponentRef<T>

  create() {
    // setTimeout(() => {
    let componentRef = <any>this.base.componentFactoryResolver
      .resolveComponentFactory(this.component)
      .create(this.base.injector);
    this.base.appRef.attachView(componentRef.hostView);
    this.domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(this.domElem);
    // })
    return componentRef
  }

  remove(ref) {
    this.base.appRef.detachView(ref.hostView);
    console.log('remove', ref)
    ref.destroy();
  }

  getElem<T>() {
    return this.componentRef
  }

  getDom() {
    return this.domElem
  }


}
