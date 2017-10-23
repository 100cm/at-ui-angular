import {Directive, ElementRef, HostBinding, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[atBreadItem]'
})
export class AtBreadItemDirective {

  _inner: HTMLElement[]

  inited = false

  constructor(private el: ElementRef) {
    this._inner = this.el.nativeElement.children
  }


  @HostBinding('class.at-breadcrumb__item') item = true


  @Input() separator = '/'

  ngAfterContentInit() {
    if (!this.inited) {
      let html = ''
      Array.from(this._inner).forEach(_el => {
        html += _el.outerHTML
      })

      html ? html : html += this.el.nativeElement.innerText
      this.el.nativeElement.innerHTML =
        `<span class="at_breadcrumb__text">${html}</span>
    <span class="at-breadcrumb__separator">${this.separator}</span>`

      this.inited = true
    }
  }

}
