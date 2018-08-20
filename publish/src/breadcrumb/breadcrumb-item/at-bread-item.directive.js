/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { BreadcrumbComponent } from "../breadcrumb.component";
export class AtBreadItemDirective {
    /**
     * @param {?} el
     * @param {?} breadCrumb
     */
    constructor(el, breadCrumb) {
        this.el = el;
        this.breadCrumb = breadCrumb;
        this.inited = false;
    }
}
AtBreadItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atBreadItem]'
            },] },
];
// @HostBinding('class.at-breadcrumb__item') item = true
//
//
// @Input() separator = '/'
//
// ngAfterContentInit() {
//   if (!this.inited) {
//     let html = ''
//     Array.from(this._inner).forEach(_el => {
//       html += _el.outerHTML
//     })
//
//     html ? html : html += this.el.nativeElement.innerText
//     this.el.nativeElement.innerHTML =
//       `<span class="at_breadcrumb__text">${html}</span>
//   <span class="at-breadcrumb__separator">${this.separator}</span>`
//
//     this.inited = true
//   }
// }
/** @nocollapse */
AtBreadItemDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: BreadcrumbComponent, },
];
function AtBreadItemDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AtBreadItemDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AtBreadItemDirective.ctorParameters;
    /** @type {?} */
    AtBreadItemDirective.prototype._inner;
    /** @type {?} */
    AtBreadItemDirective.prototype.inited;
    /** @type {?} */
    AtBreadItemDirective.prototype.el;
    /** @type {?} */
    AtBreadItemDirective.prototype.breadCrumb;
}
