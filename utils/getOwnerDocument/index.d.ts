import { MutableRefObject } from '../../../node_modules/react';
type ElementType = Element | MutableRefObject<Element | null> | null | undefined;
export declare const getOwnerDocument: (element: ElementType) => Document | null;
export {};
