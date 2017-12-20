/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {ViewportRuler} from './viewport-ruler';
import {ConnectedPositionStrategy} from './connected-position-strategy';
import {ElementRef, Injectable} from '@angular/core';
import {GlobalPositionStrategy} from './global-position-strategy';
import {FreePositionStrategy} from './free-position-strategy';
import {OverlayConnectionPosition, OriginConnectionPosition} from './connected-position';



/** Builder for overlay position strategy. */
@Injectable()
export class OverlayPositionBuilder {
  constructor(private _viewportRuler: ViewportRuler) { }

  /**
   * Creates a free position strategy
   */
  free(): FreePositionStrategy {
    return new FreePositionStrategy();
  }

  /**
   * Creates a global position strategy.
   */
  global(): GlobalPositionStrategy {
    return new GlobalPositionStrategy();
  }

  /**
   * Creates a relative position strategy.
   * @param elementRef
   * @param originPos
   * @param overlayPos
   */
  connectedTo(
      elementRef: ElementRef,
      originPos: OriginConnectionPosition,
      overlayPos: OverlayConnectionPosition): ConnectedPositionStrategy {
    return new ConnectedPositionStrategy(elementRef, originPos, overlayPos, this._viewportRuler);
  }
}
