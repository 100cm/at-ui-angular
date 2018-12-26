import {EventEmitter, Injectable} from '@angular/core';
import {ModalBaseService} from "./modal-base.service";

@Injectable()
export class AtModalService {

  constructor(private base_modal_service: ModalBaseService) {

  }

  modal(config?) {
    // this.base_modal_service.create()
    // let instance = this.base_modal_service.getElem().instance
    // let propConfig = Object.assign(config)
    // //删掉ok 和cancel 回掉
    // if (config) {
    //   delete propConfig['cancel']
    //   delete propConfig['ok']
    // }
    // for (let key in propConfig) {
    //   instance[key] = propConfig[key]
    // }
    // instance.show = true
    // let cancel = instance.cancel.bind(instance)
    // let ok = instance.ok.bind(instance)
    //
    // instance.cancel = () => {
    //   cancel()
    //   config && config.cancel && config.cancel()
    //   setTimeout(_ => {
    //     this.base_modal_service.remove()
    //   }, 180)
    //
    // }
    // instance.ok = () => {
    //   ok()
    //   config && config.ok && config.ok()
    //   setTimeout(_ => {
    //     this.base_modal_service.remove()
    //   }, 180)
    // }
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
