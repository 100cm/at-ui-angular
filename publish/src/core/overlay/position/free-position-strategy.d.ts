import { PositionStrategy } from './position-strategy';
/**
* Free position strategy for overlay without origin
* @author lingyi.zcs
*/
export declare class FreePositionStrategy implements PositionStrategy {
    private _wrapper;
    /**
     * Apply the position to the element. (NOTE: normally will triggered by scrolling)
     * @docs-private
     *
     * @param element Element to which to apply the CSS.
     * @returns Resolved when the styles have been applied.
     */
    apply(element: HTMLElement): void;
    /**
     * Removes the wrapper element from the DOM.
     */
    dispose(): void;
}
