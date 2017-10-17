import {Component, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: '[atDropMenuItem]',
  templateUrl: './dropdown-menu-item.component.html',
  styleUrls: ['./dropdown-menu-item.component.css']
})
export class DropdownMenuItemComponent implements OnInit {

  ngOnInit() {
  }

  _el: any
  nativeElement: any
  private _disabled = false
  private _divided = false


  @Input()
  get disabled(): boolean {
    return this._disabled;
  }


  set disabled(value: boolean) {
    this._disabled = value;
  }


  get divided(): boolean {
    return this._divided;
  }

  @Input()
  set divided(value: boolean) {
    this._divided = value;
  }

  private _active = false


  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
    this.nativeElement = this._elementRef.nativeElement;
  }

  @HostBinding(`class.at-dropdown-menu__item`) item_class = true


  @HostListener('click')
  setActive() {

  }

  @HostBinding('class.at-dropdown-menu__item--active')
  get activeCls() {
    return this._active
  }

  @HostBinding('class.at-dropdown-menu__item--divided')
  get getDivide() {
    return this._divided
  }

  @HostBinding('class.at-dropdown-menu__item--disabled')
  get getDisableCls() {
    return this.disabled
  }

  @Input('active')
  set active(active: boolean) {
    this._active = active
  }


  get active(): boolean {
    return this._active;
  }

}
