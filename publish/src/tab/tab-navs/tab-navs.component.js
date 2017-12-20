import { Component, ContentChildren, Input, ViewChild } from '@angular/core';
import { TabLabelDirective } from '../tab-label.directive';
import { AtTabInkDirective } from '../at-tab-ink.directive';
export class TabNavsComponent {
    constructor() {
        this._selected_index = 0;
        this._position_modal = 'horizontal';
    }
    /**
     * @return {?}
     */
    get selected_index() {
        return this._selected_index;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set position(value) {
        this._position_modal = value;
        this.alignInk(this.selected_index);
    }
    /**
     * @return {?}
     */
    get position() {
        return this._position_modal;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected_index(value) {
        this._selected_index = value;
        this.alignInk(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._inkBar.alignToElement(this._labelWrappers.toArray()[0].elementRef.nativeElement);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    alignInk(index) {
        if (this._labelWrappers) {
            this._inkBar.alignToElement(this._labelWrappers.toArray()[index].elementRef.nativeElement);
        }
    }
}
TabNavsComponent.decorators = [
    { type: Component, args: [{
                selector: 'at-tab-navs',
                template: `
    <div AtTabInk [atPositionMode]="position" class="at-tabs-ink-bar at-tabs-ink-bar-animated"></div>
    <ng-content></ng-content>
  `,
            },] },
];
/**
 * @nocollapse
 */
TabNavsComponent.ctorParameters = () => [];
TabNavsComponent.propDecorators = {
    '_labelWrappers': [{ type: ContentChildren, args: [TabLabelDirective,] },],
    '_inkBar': [{ type: ViewChild, args: [AtTabInkDirective,] },],
    'position': [{ type: Input },],
    'selected_index': [{ type: Input },],
};
function TabNavsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TabNavsComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    TabNavsComponent.ctorParameters;
    /** @type {?} */
    TabNavsComponent.propDecorators;
    /** @type {?} */
    TabNavsComponent.prototype._labelWrappers;
    /** @type {?} */
    TabNavsComponent.prototype._inkBar;
    /** @type {?} */
    TabNavsComponent.prototype._selected_index;
    /** @type {?} */
    TabNavsComponent.prototype._position_modal;
}
