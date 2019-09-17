import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ClassHelper } from '../../utils/class-helper';

export  type RowFlexType = 'center' | 'end' | 'start' | 'around' | 'between';
export type RowFlexAlign = 'top' | 'middle' | 'bottom';

@Component({
  selector: '[at-row]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `
})
export class RowComponent implements OnInit, ClassHelper {

  _prefixCls: string;
  _classList: string[] = [];
  _el: HTMLElement;
  nativeElement: HTMLElement;

  private _flexType: RowFlexType;
  private _alignType: RowFlexAlign;

  private _noGutter: boolean = false;
  private _reverse: boolean = false;

  private _atGutter = 8;

  get atGutter(): number {
    return this._atGutter / 2;
  }

  @Input()
  set atGutter(value: number) {
    this._atGutter = value;
  }

  get reverse(): boolean {
    return this._reverse;
  }

  @Input()
  set reverse(value: boolean) {
    this._reverse = value;
    this._setClassMap();
  }

  get noGutter(): boolean {
    return this._noGutter;
  }

  @Input()
  set noGutter(value: boolean) {
    this._noGutter = value;
    this._setClassMap();
  }

  get alignType(): RowFlexAlign {
    return (this._alignType && `flex-${this._alignType}`) as any;
  }

  @Input()
  set alignType(value: RowFlexAlign) {
    this._alignType = value;
    this._setClassMap();
  }

  get flexType(): RowFlexType {
    return (this._flexType && `flex-${this._flexType}`) as any;
  }

  @Input()
  set flexType(value: RowFlexType) {
    this._flexType = value;
    this._setClassMap();
  }

  constructor(public _elementRef: ElementRef, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
    this._renderer.addClass(this._el, 'row');
    this._renderer.addClass(this._el, 'at-row');
  }

  _setClassMap(): void {
    this._classList.forEach(_className => {
      this._renderer.removeClass(this._el, _className);
    });

    this._classList = [
      this.flexType && `${this.flexType}`,
      this.alignType && `${this.alignType}`,
      this.reverse && `reverse`,
      this.noGutter && 'no-gutter'
    ].filter((item) => {
      return !!item;
    });
    this._classList.forEach(_className => {
      this._renderer.addClass(this._el, _className);
    });
  }

  ngOnInit(): void {
  }

}
