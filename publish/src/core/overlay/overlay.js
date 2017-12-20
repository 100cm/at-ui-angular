/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentFactoryResolver, Injectable, ApplicationRef, Injector, NgZone, } from '@angular/core';
import { OverlayState } from './overlay-state';
import { DomPortalHost } from '@angular/cdk';
import { OverlayRef } from './overlay-ref';
import { OverlayPositionBuilder } from './position/overlay-position-builder';
import { OverlayContainer } from './overlay-container';
import { ScrollStrategyOptions } from './scroll/index';
/**
 * Next overlay unique ID.
 */
let nextUniqueId = 0;
/**
 * The default state for newly created overlays.
 */
const defaultState = new OverlayState();
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
export class Overlay {
    /**
     * @param {?} scrollStrategies
     * @param {?} _overlayContainer
     * @param {?} _componentFactoryResolver
     * @param {?} _positionBuilder
     * @param {?} _appRef
     * @param {?} _injector
     * @param {?} _ngZone
     */
    constructor(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _appRef, _injector, _ngZone) {
        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._appRef = _appRef;
        this._injector = _injector;
        this._ngZone = _ngZone;
    }
    /**
     * Creates an overlay.
     * @param {?=} state State to apply to the overlay.
     * @param {?=} paneClassName
     * @return {?} Reference to the created overlay.
     */
    create(state = defaultState, paneClassName) {
        return this._createOverlayRef(this._createPaneElement(paneClassName), state);
    }
    /**
     * Returns a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?}
     */
    position() {
        return this._positionBuilder;
    }
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?=} className
     * @return {?} Newly-created pane element
     */
    _createPaneElement(className) {
        const /** @type {?} */ pane = document.createElement('div');
        pane.id = `nz-overlay-${nextUniqueId++}`;
        pane.classList.add('nz-overlay-pane');
        if (className) {
            const /** @type {?} */ classList = className.split(' ');
            classList.forEach(c => {
                pane.classList.add(c);
            });
        }
        this._overlayContainer.getContainerElement().appendChild(pane);
        return pane;
    }
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal host.
     * @return {?} A portal host for the given DOM element.
     */
    _createPortalHost(pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef, this._injector);
    }
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param {?} pane DOM element for the overlay
     * @param {?} state
     * @return {?}
     */
    _createOverlayRef(pane, state) {
        const /** @type {?} */ scrollStrategy = state.scrollStrategy || this.scrollStrategies.noop();
        const /** @type {?} */ portalHost = this._createPortalHost(pane);
        return new OverlayRef(portalHost, pane, state, scrollStrategy, this._ngZone);
    }
}
Overlay.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
Overlay.ctorParameters = () => [
    { type: ScrollStrategyOptions, },
    { type: OverlayContainer, },
    { type: ComponentFactoryResolver, },
    { type: OverlayPositionBuilder, },
    { type: ApplicationRef, },
    { type: Injector, },
    { type: NgZone, },
];
function Overlay_tsickle_Closure_declarations() {
    /** @type {?} */
    Overlay.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    Overlay.ctorParameters;
    /** @type {?} */
    Overlay.prototype.scrollStrategies;
    /** @type {?} */
    Overlay.prototype._overlayContainer;
    /** @type {?} */
    Overlay.prototype._componentFactoryResolver;
    /** @type {?} */
    Overlay.prototype._positionBuilder;
    /** @type {?} */
    Overlay.prototype._appRef;
    /** @type {?} */
    Overlay.prototype._injector;
    /** @type {?} */
    Overlay.prototype._ngZone;
}
