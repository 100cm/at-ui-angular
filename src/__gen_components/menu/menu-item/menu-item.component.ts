import {Component, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: '[atMenuItem]',
  template:`<ng-content></ng-content>
`,
})
export class MenuItemComponent implements OnInit {


  ngOnInit() {
  }

  _el: any
  nativeElement: any
  private _active = false


  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
    this.nativeElement = this._elementRef.nativeElement;
  }

  @HostBinding(`class.at-menu__item`) item_class = true


  @HostListener('click')
  setActive() {

  }

  @HostBinding('class.at-menu__item--active')
  get activeCls() {
    return this._active
  }


  @Input('active')
  set active(active: boolean) {
    this._active = active
  }


  get active(): boolean {
    return this._active;
  }
}
