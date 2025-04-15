import { default as React, AnchorHTMLAttributes, ButtonHTMLAttributes } from '../../../../node_modules/react';
export type MenuItemProps = {
    /**
     * Toggles checkmark icon to indicate that the menu item is selected.
     */
    selected?: boolean;
    /**
     * Toggle disabled state of the menu item.
     */
    disabled?: boolean;
    /**
     * Overrides the parent menu's `closeOnSelect` prop.
     */
    closeOnSelect?: boolean;
    /**
     * Sets the css class attribute.
     */
    className?: string;
} & (({
    /**
     * Renders `MenuItem` as an HTML Anchor Element when passed, instead of as a `button`.
     */
    href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'style' | 'tabIndex' | 'href'>) | ({
    href?: never;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'style' | 'tabIndex'>));
export declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLButtonElement>>;
