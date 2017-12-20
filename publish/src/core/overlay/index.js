/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { Overlay } from './overlay';
import { ScrollDispatchModule } from './scroll/index';
import { ConnectedOverlayDirective, OverlayOrigin } from './overlay-directives';
import { OverlayPositionBuilder } from './position/overlay-position-builder';
import { VIEWPORT_RULER_PROVIDER } from './position/viewport-ruler';
import { OVERLAY_CONTAINER_PROVIDER } from './overlay-container';
export const /** @type {?} */ OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    VIEWPORT_RULER_PROVIDER,
    OVERLAY_CONTAINER_PROVIDER,
];
export class OverlayModule {
}
OverlayModule.decorators = [
    { type: NgModule, args: [{
                imports: [ScrollDispatchModule],
                exports: [ConnectedOverlayDirective, OverlayOrigin, ScrollDispatchModule],
                declarations: [ConnectedOverlayDirective, OverlayOrigin],
                providers: [OVERLAY_PROVIDERS],
            },] },
];
/**
 * @nocollapse
 */
OverlayModule.ctorParameters = () => [];
function OverlayModule_tsickle_Closure_declarations() {
    /** @type {?} */
    OverlayModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    OverlayModule.ctorParameters;
}
export { Overlay } from './overlay';
export { OverlayContainer } from './overlay-container';
export { FullscreenOverlayContainer } from './fullscreen-overlay-container';
export { OverlayRef } from './overlay-ref';
export { OverlayState } from './overlay-state';
export { ConnectedOverlayDirective, OverlayOrigin } from './overlay-directives';
export { ViewportRuler } from './position/viewport-ruler';
export { ConnectionPositionPair, ScrollableViewProperties, ConnectedOverlayPositionChange } from './position/connected-position';
export { Scrollable, ScrollDispatcher, ScrollStrategy, ScrollStrategyOptions, RepositionScrollStrategy, CloseScrollStrategy, NoopScrollStrategy, BlockScrollStrategy, ScrollDispatchModule } from './scroll/index';
export { GlobalPositionStrategy } from './position/global-position-strategy';
export { ConnectedPositionStrategy } from './position/connected-position-strategy';
