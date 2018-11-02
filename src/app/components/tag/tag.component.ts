import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {ClassHelper} from "../utils/class-helper";
import {TagAnimation} from "../animations/tag-animation";

const tagThemes: Array<string> = ['default', 'primary', 'success', 'error', 'warning']

@Component({
  selector: 'at-tag',
  template:`<span #tag *ngIf="!closed"
                  [@tagAnimation]
  >
  <span class="at-tag__text">
    <ng-content></ng-content>
    <i class="icon icon-x at-tag__close" *ngIf="closeable" (click)="closeTag()"></i>
</span>

</span>

  `,
  animations   : [
    TagAnimation
  ],
})
export class TagComponent implements OnInit, ClassHelper {
  nativeElement: any;
  _classList: Array<any> = [];
  _el: HTMLElement;
  _prefixCls = 'at-tag';
  viewChecked = false
  private _closed = false

  private _closeable: boolean = false

  @ViewChild('tag') tagSpan: any

  private _color = 'default'

  get color(): string {
    return this._color;
  }

  @Input()
  set color(value: string) {
    this._color = value;
    this._setClassMap()
  }


  get closeable(): boolean {
    return this._closeable;
  }

  get closed(): boolean {
    return this._closed;
  }

  @Input()
  set closed(value: boolean) {
    this._closed = value;
  }


  @Input()
  set closeable(value: boolean) {
    this._closeable = value;
  }

  @Output() onClose: EventEmitter<boolean> = new EventEmitter()

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;

  }

  ngOnInit() {
  }

  _setClassMap(): void {
    if (this.tagSpan) {
      this.viewChecked = true
      this._renderer.addClass(this.tagSpan.nativeElement, this._prefixCls);
      this._classList.forEach(_className => {
        this._renderer.removeClass(this.tagSpan.nativeElement, _className);
      })

      this._classList = [
        tagThemes.filter(_ => _ == this.color).length> 0 && `${this._prefixCls}--${this.color}`,
      ].filter((item) => {
        return !!item;
      });
      this._classList.forEach(_className => {
        this._renderer.addClass(this.tagSpan.nativeElement, _className);
      })

      //set other colors
      if (tagThemes.filter(_ => _ == this.color).length <= 0) {
        this._renderer.setStyle(this.tagSpan.nativeElement, 'background-color', this.color)
        this._renderer.setStyle(this.tagSpan.nativeElement, 'border-color', this.color)
      }
    }

  }

  ngAfterContentInit() {

  }

  ngAfterViewChecked() {
    if (!this.viewChecked) {
      this._setClassMap()

    }
  }

  closeTag() {
    this.closed = true
    this.onClose.emit(this.closed)
  }

}
