import {
  ChangeDetectorRef,
  ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, Optional, Type
} from '@angular/core';
import { ComponentCreatorBase } from './component-creator-base';

export interface MessageContainer<T> {
  componentRef: ComponentRef<T>;
  message_id: string;
}

let globalCounter = 0;

export class ComponentCreator<T> {

  constructor(private base: ComponentCreatorBase,
              public cdr: ChangeDetectorRef,
              private component?: Type<T>, private _idPrefix: string = '') {

  }

  domElem: HTMLElement;
  componentRef: ComponentRef<T>;
  messages: Array<MessageContainer<T>>;

  create(): ComponentRef<T> {
    const componentRef = this.base.componentFactoryResolver
      .resolveComponentFactory(this.component)
      .create(this.base.injector);
    this.base.appRef.attachView(componentRef.hostView);
    this.cdr.detectChanges();
    this.domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(this.domElem);
    return componentRef;
  }

  remove(ref: ComponentRef<T>): void {
    this.base.appRef.detachView(ref.hostView);
    ref.destroy();
  }

  protected _generateMessageId(): string {
    return this._idPrefix + globalCounter++;
  }
}
