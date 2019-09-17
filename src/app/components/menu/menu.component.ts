import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { AtDropSubmenuComponent }                                       from '../dropdown/at-drop-submenu/at-drop-submenu.component';
import { SubMenuComponent }                                             from './sub-menu/sub-menu.component';

export type atMenuType = 'vertical' | 'horizontal' | 'inline';
export type atMenuTheme = 'light' | 'dark' | 'dracula';

@Component({
  selector: '[at-menu]',
  template: `
    <ng-content></ng-content>
  `
})
export class MenuComponent implements OnInit {

  ngOnInit(): void {
    this._renderer.addClass(this._el, this._prefixCls);
  }

  _atType: atMenuType         = 'vertical';
  _el: any;
  nativeElement: any;
  _classList                  = [];
  _prefixCls                  = 'at-menu';
  private _theme: atMenuTheme = 'light';

  sub_menus: Array<SubMenuComponent | AtDropSubmenuComponent> = [];

  @Input()
  single = false;

  get theme(): atMenuTheme {
    return this._theme;
  }

  @Input('theme')
  set theme(value: atMenuTheme) {
    this._theme = value;
  }

  get atType(): atMenuType {
    return this._atType;
  }

  @Input()
  set atType(value: atMenuType) {
    this._atType = value;
  }

  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {
    this._el           = this._elementRef.nativeElement;
    this.nativeElement = this._elementRef.nativeElement;
  }

  @HostBinding(`class.at-menu--vertical`)
  get verticalClass(): boolean {
    return this.atType === 'vertical';
  }

  @HostBinding(`class.at-menu--horizontal`)
  get horizontalClass(): boolean {
    return this.atType === 'horizontal';
  }

  @HostBinding(`class.at-menu--inline`)
  get inlineClass(): boolean {
    return this.atType === 'inline';
  }

  @HostBinding('class.at-menu--dark')
  get darkTheme(): boolean {
    return this.theme === 'dark';
  }

  @HostBinding('class.at-menu--dracula')
  get draculaTheme(): boolean {
    return this.theme === 'dracula';
  }

  @HostBinding('class.at-menu--light')
  get lightTheme(): boolean {
    return this.theme === 'light';
  }

  clearAllOpen(sub_menu_ref): void {
    this.sub_menus.forEach(sub_menu => {
      (sub_menu.isOpen && sub_menu_ref !== sub_menu) ? sub_menu.isOpen = false : null;
    });
  }

}
