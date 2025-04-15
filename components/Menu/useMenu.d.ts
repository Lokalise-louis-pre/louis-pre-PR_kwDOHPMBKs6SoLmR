import { Placement } from '@floating-ui/react';
export interface UseMenuProps {
    opened: boolean;
    onClose: () => void;
    onToggle: () => void;
    onOpen: () => void;
    closeOnSelect?: boolean;
    placement?: Placement;
}
export type UseMenuReturn = ReturnType<typeof useMenu>;
/**
 * React Hook to manage a menu
 *
 * It provides the logic and will be used with react context
 * to propagate its return value to all children
 */
export declare const useMenu: (props?: Partial<UseMenuProps>) => {
    openAndFocusFirstItem: () => void;
    openAndFocusLastItem: () => void;
    onTransitionEnd: () => void;
    descendants: import('./descendant').DescendantsManager<HTMLElement, Record<string, unknown>>;
    buttonId: string;
    menuId: string;
    orientation: string;
    opened: boolean;
    onToggle: () => void;
    onOpen: () => void;
    onClose: () => void;
    menuRef: HTMLDivElement | null;
    setMenuRef: import('../../../node_modules/react').Dispatch<import('../../../node_modules/react').SetStateAction<HTMLDivElement | null>>;
    buttonRef: HTMLButtonElement | null;
    setButtonRef: import('../../../node_modules/react').Dispatch<import('../../../node_modules/react').SetStateAction<HTMLButtonElement | null>>;
    focusedIndex: number;
    setFocusedIndex: import('../../../node_modules/react').Dispatch<import('../../../node_modules/react').SetStateAction<number>>;
    closeOnSelect: boolean;
};
