import { Booleanish, EventKeys } from '../ts';
export declare const isElement: (el: unknown) => el is Element;
export declare const isHTMLElement: (el: unknown) => el is HTMLElement;
export declare const getOwnerDocument: (node?: Element | null) => Document;
export declare const dataAttr: (condition: boolean | undefined) => Booleanish;
export declare const getActiveElement: (node?: HTMLElement) => HTMLElement;
export declare const contains: (parent: HTMLElement | null, child: HTMLElement) => boolean;
/**
 * Get the normalized event key across all browsers
 * @param event keyboard event
 */
export declare const normalizeEventKey: (event: Pick<KeyboardEvent, 'key' | 'keyCode'>) => EventKeys;
export declare const getRelatedTarget: (event: Pick<FocusEvent, 'relatedTarget' | 'target' | 'currentTarget'>) => HTMLElement;
