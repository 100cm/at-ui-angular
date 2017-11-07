import { Component, HostBinding, Input, ViewChild } from '@angular/core';
import { RadioComponent } from '../radio.component';
export class RadioButtonComponent extends RadioComponent {
    constructor() {
        super(...arguments);
        this._prefixCls = 'at-radio-button';
    }
    /**
     * @return {?}
     */
    get buttonChecked() {
        return this._checked;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.fill) {
            this._renderer.setStyle(this.content_span.nativeElement, 'background-color', this.fill);
            this._renderer.setStyle(this.content_span.nativeElement, 'border-color', this.fill);
        }
        if (this.textColor) {
            this._renderer.setStyle(this.content_span.nativeElement, 'color', this.textColor);
        }
    }
}
RadioButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[atRadioButton]',
                template: `<input type="radio" [disabled]="disabled" class="at-radio-button__original" [(ngModel)]="checked">
  <span #content_span class="at-radio-button__inner">
  <ng-content>

</ng-content>
</span>
  `,
            },] },
];
/**
 * @nocollapse
 */
RadioButtonComponent.ctorParameters = () => [];
RadioButtonComponent.propDecorators = {
    'fill': [{ type: Input },],
    'textColor': [{ type: Input },],
    'buttonChecked': [{ type: HostBinding, args: ['class.at-radio--checked',] },],
    'content_span': [{ type: ViewChild, args: ['content_span',] },],
};
function RadioButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    RadioButtonComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    RadioButtonComponent.ctorParameters;
    /** @type {?} */
    RadioButtonComponent.propDecorators;
    /** @type {?} */
    RadioButtonComponent.prototype.fill;
    /** @type {?} */
    RadioButtonComponent.prototype.textColor;
    /** @type {?} */
    RadioButtonComponent.prototype.content_span;
    /** @type {?} */
    RadioButtonComponent.prototype._prefixCls;
}
