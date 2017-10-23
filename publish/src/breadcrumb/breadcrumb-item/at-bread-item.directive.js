import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
export class AtBreadItemDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.inited = false;
        this.item = true;
        this.separator = '/';
        this._inner = this.el.nativeElement.children;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.inited) {
            let /** @type {?} */ html = '';
            Array.from(this._inner).forEach(_el => {
                html += _el.outerHTML;
            });
            html ? html : html += this.el.nativeElement.innerText;
            this.el.nativeElement.innerHTML =
                `<span class="at_breadcrumb__text">${html}</span>
    <span class="at-breadcrumb__separator">${this.separator}</span>`;
            this.inited = true;
        }
    }
}
AtBreadItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[atBreadItem]'
            },] },
];
/**
 * @nocollapse
 */
AtBreadItemDirective.ctorParameters = () => [
    { type: ElementRef, },
];
AtBreadItemDirective.propDecorators = {
    'item': [{ type: HostBinding, args: ['class.at-breadcrumb__item',] },],
    'separator': [{ type: Input },],
};
function AtBreadItemDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    AtBreadItemDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    AtBreadItemDirective.ctorParameters;
    /** @type {?} */
    AtBreadItemDirective.propDecorators;
    /** @type {?} */
    AtBreadItemDirective.prototype._inner;
    /** @type {?} */
    AtBreadItemDirective.prototype.inited;
    /** @type {?} */
    AtBreadItemDirective.prototype.item;
    /** @type {?} */
    AtBreadItemDirective.prototype.separator;
    /** @type {?} */
    AtBreadItemDirective.prototype.el;
}
