import { KeyboardEvent } from '../../../node_modules/react';
interface UseShortcutProps {
    timeout?: number;
    preventDefault?: (event: KeyboardEvent) => boolean;
}
/**
 * React hook that provides an enhanced keydown handler,
 * that's used for key navigation within menus, select dropdowns.
 */
export declare const useShortcut: (props?: UseShortcutProps) => (fn: (keysSoFar: string) => void) => (event: KeyboardEvent) => void;
export {};
