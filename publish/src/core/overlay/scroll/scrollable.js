/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ScrollDispatcher } from './scroll-dispatcher';
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
export class Scrollable {
    /**
     * @param {?} _elementRef
     * @param {?} _scroll
     * @param {?} _ngZone
     * @param {?} _renderer
     */
    constructor(_elementRef, _scroll, _ngZone, _renderer) {
        this._elementRef = _elementRef;
        this._scroll = _scroll;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this._elementScrolled = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._scrollListener = this._ngZone.runOutsideAngular(() => {
            return this._renderer.listen(this.getElementRef().nativeElement, 'scroll', (event) => {
                this._elementScrolled.next(event);
            });
        });
        this._scroll.register(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._scroll.deregister(this);
        if (this._scrollListener) {
            this._scrollListener();
            this._scrollListener = null;
        }
    }
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    elementScrolled() {
        return this._elementScrolled.asObservable();
    }
    /**
     * @return {?}
     */
    getElementRef() {
        return this._elementRef;
    }
}
Scrollable.decorators = [
    { type: Directive, args: [{
                selector: '[cdk-scrollable], [cdkScrollable]'
            },] },
];
/**
 * @nocollapse
 */
Scrollable.ctorParameters = () => [
    { type: ElementRef, },
    { type: ScrollDispatcher, },
    { type: NgZone, },
    { type: Renderer2, },
];
function Scrollable_tsickle_Closure_declarations() {
    /** @type {?} */
    Scrollable.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    Scrollable.ctorParameters;
    /** @type {?} */
    Scrollable.prototype._elementScrolled;
    /** @type {?} */
    Scrollable.prototype._scrollListener;
    /** @type {?} */
    Scrollable.prototype._elementRef;
    /** @type {?} */
    Scrollable.prototype._scroll;
    /** @type {?} */
    Scrollable.prototype._ngZone;
    /** @type {?} */
    Scrollable.prototype._renderer;
}
