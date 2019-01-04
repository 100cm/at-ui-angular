import {Component, ElementRef, HostBinding, HostListener, Input, OnInit, Optional, Renderer2} from '@angular/core';
import {SubMenuComponent}                                                                     from '../sub-menu/sub-menu.component';
import {MenuComponent}                                                                        from '../menu.component';

@Component({
  selector: '[at-menu-item]',
  template: `
    <ng-content></ng-content>
  `,
})
export class MenuItemComponent implements OnInit {


  ngOnInit() {
  }

  _el: any
  nativeElement: any
  private _active = false


  constructor(private _elementRef: ElementRef, private _renderer: Renderer2, @Optional() private sub_menu: SubMenuComponent,
              private menu_component: MenuComponent) {
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

  @HostBinding('style.padding-left.px')
  get setPaddingLeft(): number {
    if (this.menu_component.atType === 'inline') {
      if (this.sub_menu) {
        return (this.sub_menu.level + 1) * 23;
      }
      else {
        return null;
      }
    }
    else {
      return null;
    }
  }
}
