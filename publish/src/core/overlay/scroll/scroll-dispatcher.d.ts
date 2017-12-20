/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, NgZone, Optional } from '@angular/core';
import { Platform } from '@angular/cdk';
import { Scrollable } from './scrollable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
/** Time in ms to throttle the scrolling events by default. */
export declare const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
export declare class ScrollDispatcher {
    private _ngZone;
    private _platform;
    /** Subject for notifying that a registered scrollable reference element has been scrolled. */
    _scrolled: Subject<void>;
    /** Keeps track of the global `scroll` and `resize` subscriptions. */
    _globalSubscription: Subscription | null;
    /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
    private _scrolledCount;
    /**
     * Map of all the scrollable references that are registered with the service and their
     * scroll event subscriptions.
     */
    scrollableReferences: Map<Scrollable, Subscription>;
    constructor(_ngZone: NgZone, _platform: Platform);
    /**
     * Registers a Scrollable with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event in its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    register(scrollable: Scrollable): void;
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    deregister(scrollable: Scrollable): void;
    /**
     * Subscribes to an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     */
    scrolled(auditTimeInMs: number, callback: () => any): Subscription;
    /** Returns all registered Scrollables that contain the provided element. */
    getScrollContainers(elementRef: ElementRef): Scrollable[];
    /** Returns true if the element is contained within the provided Scrollable. */
    scrollableContainsElement(scrollable: Scrollable, elementRef: ElementRef): boolean;
    /** Sends a notification that a scroll event has been fired. */
    _notify(): void;
}
export declare function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher: ScrollDispatcher, ngZone: NgZone, platform: Platform): ScrollDispatcher;
export declare const SCROLL_DISPATCHER_PROVIDER: {
    provide: typeof ScrollDispatcher;
    deps: (typeof NgZone | typeof Platform | Optional[])[];
    useFactory: (parentDispatcher: ScrollDispatcher, ngZone: NgZone, platform: Platform) => ScrollDispatcher;
};
