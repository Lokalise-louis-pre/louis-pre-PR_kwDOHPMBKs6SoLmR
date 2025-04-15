import { ReactElement, default as React } from '../../../node_modules/react';
import { MenuList } from './MenuList';
export interface MenuProps {
    /**
     * Renders either any HTML node or a callback that returns the Menu internal state for "opened".
     * Custom menuButton components must accept a `ref` and `rest` props
     */
    menuButton: ReactElement | ((arg: {
        opened: boolean;
    }) => ReactElement);
    /**
     * Renders a `MenuList`.
     */
    children: ReactElement<unknown, typeof MenuList>;
    /**
     * Toggles whether the menu will close when a menu item is clicked
     */
    closeOnSelect?: boolean;
    /**
     * A callback which is executed when the menu closes
     */
    onClose?: () => void;
}
export declare const Menu: ({ children, menuButton, closeOnSelect, onClose }: MenuProps) => React.JSX.Element;
