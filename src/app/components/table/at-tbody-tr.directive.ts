import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[at-tbody-tr]'
})
export class AtTbodyTrDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  get atExpand(): boolean {
    return this._atExpand;
  }

  @Input()
  set atExpand(value: boolean) {
    this._atExpand = value;
    if (value) {
      this.renderer.removeStyle(this.el.nativeElement, 'display');
      this.renderer.addClass(this.el.nativeElement, 'at-table__tr__expand');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      this.renderer.removeClass(this.el.nativeElement, 'at-table__tr__expand');
    }

  }
  private _atExpand = true;
}
