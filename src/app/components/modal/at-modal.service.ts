import { ComponentRef, EventEmitter, Injectable, NgZone, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalBaseService } from './modal-base.service';
import { ModalComponent } from './modal.component';

export interface ModalOption {
  title?: string;
  message?: string;
  status?: 'error' | 'success' | 'warning' | 'info';
  atType?: 'confirm' | 'normal';
  atComponent?: TemplateRef<void>;
  showFooter?: boolean;
  showHeader?: boolean;
  width?: number;
  top?: number;
  closeable?: boolean;

  cancel?(): void;

  ok?(): void;

  atOnClose?: OnClickCallback<ModalComponent>;

  atOnOk?: OnClickCallback<ModalComponent>;

  atAfterClose?(): void;

  atAfterOk?(): void;
}

export interface ModalDataFilled {
  remove(): void;

  modal: ComponentRef<ModalComponent>;
}

export type OnClickCallback<T> = ((instance: T) => (false | void | {}) | Promise<boolean | void | {}>);

@Injectable()
export class AtModalService {

  constructor(private base_modal_service: ModalBaseService, private ngZone: NgZone) {
    this.base_modal_service.create();
  }

  modal(config?: ModalOption): Promise<ModalComponent> {
    return this.base_modal_service.create().then(_ => {
      const instance = this.base_modal_service.componentRef.instance;
      const propConfig = {...config};
      // 删掉ok 和cancel 回掉
      if (config) {
        delete propConfig.cancel;
        delete propConfig.ok;
      }
      for (const key in propConfig) {
        instance[key] = propConfig[key];
      }
      instance.subscribeStatus();
      instance.setShow(true);
      const $sub: Subscription = instance.showChange.subscribe(open => {
        if (open === false) {
          this.base_modal_service.remove(this.base_modal_service.componentRef);
          $sub.unsubscribe();
        }
      });
      return instance;
    });
  }

  success(config: ModalOption): void {
    this.setConfirm(config);
    config.status = 'success';
    this.modal(config);
  }

  error(config: ModalOption): void {
    this.setConfirm(config);
    config.status = 'error';
    this.modal(config);
  }

  warning(config: ModalOption): void {
    this.setConfirm(config);
    config.status = 'warning';
    this.modal(config);
  }

  info(config: ModalOption): void {
    this.setConfirm(config);
    config.status = 'info';
    this.modal(config);
  }

  confirm(config: ModalOption): void {
    this.setConfirm(config);
    config.status = 'info';
    this.modal(config);
  }

  setConfirm(config: ModalOption): void {
    config.atType = 'confirm';
    config.status = 'success';
  }

}
