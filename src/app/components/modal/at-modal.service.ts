import {EventEmitter, Injectable, NgZone} from '@angular/core';
import {ModalBaseService}                 from './modal-base.service';

@Injectable()
export class AtModalService {

  constructor(private base_modal_service: ModalBaseService, private ngZone: NgZone) {

  }

  modal(config?) {
    let ref = this.base_modal_service.create()
    let instance = ref.instance
    let propConfig = Object.assign(config)
    //删掉ok 和cancel 回掉
    if (config) {
      delete propConfig['cancel']
      delete propConfig['ok']
    }
    for (let key in propConfig) {
      instance[key] = propConfig[key]
    }
    instance.subscribeStatus()
    instance.setShow(true)
    instance.showChange.subscribe(open => {
      if (open === false) {
        this.base_modal_service.remove(ref)
      }
    })
  }

  success(config) {
    this.setConfirm(config)
    config.status = 'success'
    this.modal(config)
  }

  error(config) {
    this.setConfirm(config)
    config.status = 'error'
    this.modal(config)
  }

  warning(config) {
    this.setConfirm(config)
    config.status = 'warning'
    this.modal(config)
  }

  info(config) {
    this.setConfirm(config)
    config.status = 'info'
    this.modal(config)
  }

  confirm(config) {
    this.setConfirm(config)
    config.status = 'info'
    this.modal(config)
  }

  setConfirm(config) {
    config.atType = 'confirm'
    config.status = 'success'
  }

}
