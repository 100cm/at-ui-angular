import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

export type AtButtonType = 'default' | 'primary' | 'text' | 'success' | 'error' | 'warning' | 'info';
export type AtButtonShape = 'circle' | null ;
export type AtButtonSize = 'small' | 'large' | 'smaller' ;

@Component({
  selector: '[atButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  set atType(type: AtButtonType) {
    this._type = type
    this._setClassMap()
  }

  get atType() {
    return this._type
  }

  @Input()
  set atShape(shape: AtButtonShape) {
    this._shape = shape
    this._setClassMap()
  }

  get atShape() {
    return this._shape
  }


  @Input()
  set atIcon(icon: string) {
    this._icon = icon
  }

  get atIcon() {
    return this._icon
  }


  @Input()
  set iconLoading(value: boolean) {
    this._iconLoading = value;
    value == false ? this._icon = null : this._icon = 'at-btn__loading icon-loader'
  }


  get size(): AtButtonSize {
    return this._size;
  }

  @Input()
  set size(value: AtButtonSize) {
    this._size = value;
    this._setClassMap()
  }

  @ViewChild('text') text: any

  _type: AtButtonType = 'default'
  _el: HTMLElement;
  _shape: AtButtonShape;
  nativeElement: HTMLElement;
  _prefixCls = 'at-btn';
  _classList = []
  _iconLoading = false
  _icon: string
  _size: AtButtonSize

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
    this.nativeElement = this._elementRef.nativeElement;
    this._renderer.addClass(this._el, this._prefixCls);
  }

  ngOnInit() {

  }

  _setClassMap(): void {
    this._classList.forEach(_className => {
      this._renderer.removeClass(this._el, _className);
    })

    this._classList = [
      this.atType && `${this._prefixCls}--${this.atType}`,
      this.atShape && `${this._prefixCls}--${this.atShape}`,
      this.size && `${this._prefixCls}--${this.size}`
    ].filter((item) => {
      return !!item;
    });
    this._classList.forEach(_className => {
      this._renderer.addClass(this._el, _className);
    })
  }

  showText: boolean = true;

  ngAfterContentInit() {
    // console.log(this.text)
    this.showText = (this.text.nativeElement.innerText.length > 0);
  }

}
