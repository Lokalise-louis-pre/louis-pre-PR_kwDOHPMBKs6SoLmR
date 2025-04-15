import { RefObject } from '../../../node_modules/react';
import { FocusableElement } from '../tabbable';
interface UseFocusOnHideOptions {
    focusRef: RefObject<FocusableElement | null>;
    shouldFocus?: boolean;
    visible?: boolean;
}
/**
 * Popover hook to manage the focus when the popover closes or hides.
 *
 * We either want to return focus back to the popover trigger or
 * let focus proceed normally if user moved to another interactive
 * element in the viewport.
 */
export declare const useFocusOnHide: (containerRef: RefObject<HTMLElement | null>, options: UseFocusOnHideOptions) => void;
export {};
