/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getMdScrollStrategyAlreadyAttachedError } from './scroll-strategy';
/**
 * Strategy that will update the element position as the user is scrolling.
 */
export class RepositionScrollStrategy {
    /**
     * @param {?} _scrollDispatcher
     * @param {?=} _config
     */
    constructor(_scrollDispatcher, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._config = _config;
        this._scrollSubscription = null;
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    attach(overlayRef) {
        if (this._overlayRef) {
            throw getMdScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    }
    /**
     * @return {?}
     */
    enable() {
        if (!this._scrollSubscription) {
            const /** @type {?} */ throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle, () => {
                this._overlayRef.updatePosition();
            });
        }
    }
    /**
     * @return {?}
     */
    disable() {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    }
}
function RepositionScrollStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    RepositionScrollStrategy.prototype._scrollSubscription;
    /** @type {?} */
    RepositionScrollStrategy.prototype._overlayRef;
    /** @type {?} */
    RepositionScrollStrategy.prototype._scrollDispatcher;
    /** @type {?} */
    RepositionScrollStrategy.prototype._config;
}
