import { Provider } from '../../../../node_modules/react';
import { DescendantOptions, DescendantsManager } from './descendant';
/**
 * @internal
 * React hook that initializes the DescendantsManager
 */
declare const useDescendants: <T extends HTMLElement = HTMLElement, K extends Record<string, unknown> = Record<string, unknown>>() => DescendantsManager<T, K>;
export type UseDescendantsReturn = ReturnType<typeof useDescendants>;
export declare const createDescendantContext: <T extends HTMLElement = HTMLElement, K extends Record<string, unknown> = Record<string, unknown>>() => readonly [Provider<DescendantsManager<T, K>>, () => DescendantsManager<T, K>, () => DescendantsManager<T, K>, (options?: DescendantOptions<K> | undefined) => {
    descendants: DescendantsManager<HTMLElement, Record<string, unknown>>;
    index: number;
    enabledIndex: number;
    register: (node: T | null) => void;
}];
export {};
