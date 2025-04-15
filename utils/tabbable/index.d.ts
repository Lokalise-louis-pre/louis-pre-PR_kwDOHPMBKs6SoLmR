export declare const hasTabIndex: (element: HTMLElement) => boolean;
export declare const hasNegativeTabIndex: (element: HTMLElement) => boolean;
export declare const isDisabled: (element: HTMLElement) => boolean;
export interface FocusableElement {
    focus(options?: FocusOptions): void;
}
export declare const isInputElement: (element: FocusableElement) => element is HTMLInputElement;
export declare const isActiveElement: (element: FocusableElement) => boolean;
export declare const isHidden: (element: HTMLElement) => boolean;
export declare const isContentEditable: (element: HTMLElement) => boolean;
export declare const isFocusable: (element: HTMLElement) => boolean;
export declare const isTabbable: (element?: HTMLElement | null) => boolean;
