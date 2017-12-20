/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ViewportRuler } from './viewport-ruler';
import { ConnectedPositionStrategy } from './connected-position-strategy';
import { Injectable } from '@angular/core';
import { GlobalPositionStrategy } from './global-position-strategy';
import { FreePositionStrategy } from './free-position-strategy';
/**
 * Builder for overlay position strategy.
 */
export class OverlayPositionBuilder {
    /**
     * @param {?} _viewportRuler
     */
    constructor(_viewportRuler) {
        this._viewportRuler = _viewportRuler;
    }
    /**
     * Creates a free position strategy
     * @return {?}
     */
    free() {
        return new FreePositionStrategy();
    }
    /**
     * Creates a global position strategy.
     * @return {?}
     */
    global() {
        return new GlobalPositionStrategy();
    }
    /**
     * Creates a relative position strategy.
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    connectedTo(elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(elementRef, originPos, overlayPos, this._viewportRuler);
    }
}
OverlayPositionBuilder.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
OverlayPositionBuilder.ctorParameters = () => [
    { type: ViewportRuler, },
];
function OverlayPositionBuilder_tsickle_Closure_declarations() {
    /** @type {?} */
    OverlayPositionBuilder.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    OverlayPositionBuilder.ctorParameters;
    /** @type {?} */
    OverlayPositionBuilder.prototype._viewportRuler;
}
