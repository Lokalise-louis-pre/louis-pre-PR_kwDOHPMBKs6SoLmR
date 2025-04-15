import { MutableRefObject, RefCallback } from '../../../node_modules/react';
export type ReactRef<T> = RefCallback<T> | MutableRefObject<T>;
/**
 * Assigns a value to a ref function or object
 *
 * @param ref the ref to assign to
 * @param value the value
 */
export declare function assignRef<RefValueType = unknown>(ref: ReactRef<RefValueType> | null | undefined, value: RefValueType): void;
/**
 * Combine multiple React refs into a single ref function.
 * This is used mostly when you need to allow consumers forward refs to
 * internal components
 *
 * @param refs refs to combine
 */
export declare function useMergeRefs<RefValueType = unknown>(...refs: (ReactRef<RefValueType> | null | undefined)[]): (node: RefValueType | null) => void;
