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
              private component?: Type<T>, private _idPrefix: string = '') {

  }

  domElem: HTMLElement;
  componentRef: ComponentRef<T>;
  messages: Array<MessageContainer<T>>;

  create(): void {
    Promise.resolve().then(_ => {
      this.componentRef = this.base.componentFactoryResolver
        .resolveComponentFactory(this.component)
        .create(this.base.injector);
      this.base.appRef.attachView(this.componentRef.hostView);
      this.domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
      document.body.appendChild(this.domElem);
    });
  }

  remove(ref: ComponentRef<T>): void {
    this.base.appRef.detachView(ref.hostView);
    ref.destroy();
  }

  protected _generateMessageId(): string {
    return this._idPrefix + globalCounter++;
  }
}
