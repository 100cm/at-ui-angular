/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class TabSetComponent {
    constructor() {
        this.position = 'horizontal';
        this.selected_index = 0;
        this.tabs = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} i
     * @return {?}
     */
    selectTab(i) {
        this.selected_index = i;
    }
}
TabSetComponent.decorators = [
    { type: Component, args: [{
                selector: 'atTabSet',
                template: `
    <div class="at-tab at-tab-{{position}}">
      <div class="at-tabs-bar ">
        <div class="at-tabs-nav-container">
          <div class="at-tabs-nav-wrap">
            <div class="at-tab--navs">
              <at-tab-navs
                [selected_index]="selected_index"
                [position]="position">
                <div at-tab-label *ngFor="let item of tabs;let i =index" (click)="selectTab(i)" class="at-tab-nav">
                  <ng-template [ngTemplateOutlet]="item._tabHeading">
                  </ng-template>
                </div>
              </at-tab-navs>
            </div>
          </div>
        </div>
      </div>

      <div class="at-tab--contents">
        <div class="at-tab-content">
          <at-tab-body [content]="tabs[selected_index]?._content">

          </at-tab-body>
        </div>
      </div>

    </div>
  `,
            },] },
];
/** @nocollapse */
TabSetComponent.ctorParameters = () => [];
TabSetComponent.propDecorators = {
    "position": [{ type: Input },],
    "selected_index": [{ type: Input },],
};
function TabSetComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TabSetComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TabSetComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TabSetComponent.propDecorators;
    /** @type {?} */
    TabSetComponent.prototype.position;
    /** @type {?} */
    TabSetComponent.prototype.selected_index;
    /** @type {?} */
    TabSetComponent.prototype.tabs;
}
