/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Describes a strategy that will be used by an overlay
 * to handle scroll events while it is open.
 * @abstract
 */
export class ScrollStrategy {
}
function ScrollStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    ScrollStrategy.prototype.enable;
    /** @type {?} */
    ScrollStrategy.prototype.disable;
    /** @type {?} */
    ScrollStrategy.prototype.attach;
}
/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 * @return {?}
 */
export function getMdScrollStrategyAlreadyAttachedError() {
    return Error(`Scroll strategy has already been attached.`);
}
