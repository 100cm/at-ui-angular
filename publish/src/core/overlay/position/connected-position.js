/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Horizontal dimension of a connection point on the perimeter of the origin or overlay element. */
import { Optional } from '@angular/core';
/**
 * The points of the origin element and the overlay element to connect.
 */
export class ConnectionPositionPair {
    /**
     * @param {?} origin
     * @param {?} overlay
     */
    constructor(origin, overlay) {
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
}
function ConnectionPositionPair_tsickle_Closure_declarations() {
    /** @type {?} */
    ConnectionPositionPair.prototype.originX;
    /** @type {?} */
    ConnectionPositionPair.prototype.originY;
    /** @type {?} */
    ConnectionPositionPair.prototype.overlayX;
    /** @type {?} */
    ConnectionPositionPair.prototype.overlayY;
}
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 */
export class ScrollableViewProperties {
}
function ScrollableViewProperties_tsickle_Closure_declarations() {
    /** @type {?} */
    ScrollableViewProperties.prototype.isOriginClipped;
    /** @type {?} */
    ScrollableViewProperties.prototype.isOriginOutsideView;
    /** @type {?} */
    ScrollableViewProperties.prototype.isOverlayClipped;
    /** @type {?} */
    ScrollableViewProperties.prototype.isOverlayOutsideView;
}
/**
 * The change event emitted by the strategy when a fallback position is used.
 */
export class ConnectedOverlayPositionChange {
    /**
     * @param {?} connectionPair
     * @param {?} scrollableViewProperties
     */
    constructor(connectionPair, scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
}
/**
 * @nocollapse
 */
ConnectedOverlayPositionChange.ctorParameters = () => [
    { type: ConnectionPositionPair, },
    { type: ScrollableViewProperties, decorators: [{ type: Optional },] },
];
function ConnectedOverlayPositionChange_tsickle_Closure_declarations() {
    /**
     * @nocollapse
     * @type {?}
     */
    ConnectedOverlayPositionChange.ctorParameters;
    /** @type {?} */
    ConnectedOverlayPositionChange.prototype.connectionPair;
    /** @type {?} */
    ConnectedOverlayPositionChange.prototype.scrollableViewProperties;
}
