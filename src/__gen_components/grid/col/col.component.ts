import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: '[atCol]',
  template: `
    <ng-content></ng-content>
  `,
})
export class ColComponent implements OnInit {

  constructor(public _elementRef: ElementRef, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
  }

  private _span: number
  private _offset: number
  _el: any
  _classList: Array<any> = []
  _col_type: 'md' | 'sm' | 'xs' | 'lg' = 'md'


  @Input()
  set colType(value) {
    this._col_type = value
    this.setClassMap()
  }

  get colType() {
    return this._col_type
  }

  get span(): number {
    return this._span;
  }

  @Input()
  set span(value: number) {
    this._span = value;
    this.setClassMap()
  }


  get offset(): number {
    return this._offset;
  }

  @Input()
  set offset(value: number) {
    this._offset = value;
    this.setClassMap()
  }

  ngOnInit() {
  }


  /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
  setClassMap(): void {
    this._classList.forEach(_className => {
      this._renderer.removeClass(this._el, _className);
    });
    this._classList = [
      this.span && `col-${this.colType}-${this.span}`,
      this.offset && `col-${this.colType}-offset-${this.offset}`
    ];
    this._classList = this._classList.filter((item) => {
      return !!item;
    });
    this._classList.forEach(_className => {
      this._renderer.addClass(this._el, _className);
    })
  }

}
