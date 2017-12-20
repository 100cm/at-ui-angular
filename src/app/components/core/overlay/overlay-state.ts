/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {PositionStrategy} from './position/position-strategy';
import {Direction} from '@angular/cdk';
import {ScrollStrategy} from './scroll/scroll-strategy';


/**
 * OverlayState is a bag of values for either the initial configuration or current state of an
 * overlay.
 */
export class OverlayState {
  /** Strategy with which to position the overlay. */
  positionStrategy: PositionStrategy;

  /** Strategy to be used when handling scroll events while the overlay is open. */
  scrollStrategy: ScrollStrategy;

  /** Custom class to add to the overlay pane. */
  panelClass = '';

  /** Whether the overlay has a backdrop. */
  hasBackdrop = false;

  /** Custom class to add to the backdrop */
  backdropClass = 'cdk-overlay-dark-backdrop';

  /** The width of the overlay panel. If a number is provided, pixel units are assumed. */
  width?: number | string;

  /** The height of the overlay panel. If a number is provided, pixel units are assumed. */
  height?: number | string;

  /** The min-width of the overlay panel. If a number is provided, pixel units are assumed. */
  minWidth?: number | string;

  /** The min-height of the overlay panel. If a number is provided, pixel units are assumed. */
  minHeight?: number | string;

  /** The direction of the text in the overlay panel. */
  direction?: Direction = 'ltr';

  // TODO(jelbourn): configuration still to add
  // - focus trap
  // - disable pointer events
  // - z-index
}
