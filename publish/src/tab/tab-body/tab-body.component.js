import { Component, Input } from '@angular/core';
export class TabBodyComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TabBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-tab-body',
                template: `
    <ng-template [ngTemplateOutlet]="content"></ng-template>`,
            },] },
];
/**
 * @nocollapse
 */
TabBodyComponent.ctorParameters = () => [];
TabBodyComponent.propDecorators = {
    'content': [{ type: Input },],
};
function TabBodyComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TabBodyComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    TabBodyComponent.ctorParameters;
    /** @type {?} */
    TabBodyComponent.propDecorators;
    /** @type {?} */
    TabBodyComponent.prototype.content;
}
