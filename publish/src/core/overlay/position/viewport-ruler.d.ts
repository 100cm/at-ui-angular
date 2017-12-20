/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Optional } from '@angular/core';
import { ScrollDispatcher } from '../scroll/scroll-dispatcher';
/**
 * Simple utility for getting the bounds of the browser viewport.
 * @docs-private
 */
export declare class ViewportRuler {
    /** Cached document client rectangle. */
    private _documentRect?;
    constructor(scrollDispatcher: ScrollDispatcher);
    /** Gets a ClientRect for the viewport's bounds. */
    getViewportRect(documentRect?: ClientRect): ClientRect;
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @param documentRect
     */
    getViewportScrollPosition(documentRect?: ClientRect): {
        top: number;
        left: number;
    };
    /** Caches the latest client rectangle of the document element. */
    _cacheViewportGeometry(): void;
}
export declare function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler: ViewportRuler, scrollDispatcher: ScrollDispatcher): ViewportRuler;
export declare const VIEWPORT_RULER_PROVIDER: {
    provide: typeof ViewportRuler;
    deps: (Optional[] | typeof ScrollDispatcher)[];
    useFactory: (parentRuler: ViewportRuler, scrollDispatcher: ScrollDispatcher) => ViewportRuler;
};
