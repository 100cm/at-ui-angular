import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[at-upload-list]'
})
export class AtUploadListDirective {

  constructor() {
  }

  _active = false;

  @HostListener('mouseover')
  ActiveClass() {
    this._active = true;
  }

  @HostListener('mouseout')
  setActiveClass() {
    this._active = false;
  }

  @HostBinding('class.at-upload-files-item-hover')
  get active_class() {
    return this._active;
  }

}
