import {Component, ElementRef, HostBinding, Input, OnInit, Renderer2} from '@angular/core';

export type atMenuType = 'vertical' | 'horizontal' | 'inline'
export type atMenuTheme = 'light' | 'dark'

@Component({
  selector: '[atMenu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  ngOnInit() {
  }

  _atType: atMenuType = 'vertical'
  _el: any
  nativeElement: any
  _classList = []
  _prefixCls = 'at-menu'
  private _theme: atMenuTheme = 'light'


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

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
    this.nativeElement = this._elementRef.nativeElement;
    this._renderer.addClass(this._el, this._prefixCls);
  }


  @HostBinding(`class.at-menu--vertical`)
  get verticalClass() {
    return this.atType == 'vertical'
  }

  @HostBinding(`class.at-menu--horizontal`)
  get horizontalClass() {
    return this.atType == 'horizontal'
  }

  @HostBinding(`class.at-menu--inline`)
  get inlineClass() {
    return this.atType == 'inline'
  }

  @HostBinding('class.at-menu--dark')
  get darkTheme() {
    return this.theme == 'dark'
  }

  @HostBinding('class.at-menu--light')
  get lightTheme() {
    return this.theme == 'light'
  }


}
