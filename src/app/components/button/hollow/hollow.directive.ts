import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[hollow]'
})
export class HollowDirective implements OnInit {

  _el: any;

  nativeElement: any;

  @Input('atType') atType: string;

  ngOnInit(): void {
    this._renderer.addClass(this._el, `at-btn--${this.atType}--hollow`);
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
    this.nativeElement = this._elementRef.nativeElement;

  }

}
