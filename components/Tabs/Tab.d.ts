import { ButtonHTMLAttributes, ReactNode, default as React } from '../../../node_modules/react';
export type TabProps = {
    /**
     * Renders text content and / or any HTML node inside.
     */
    children?: ReactNode;
    /**
     * Toggles disabled state of the `Tab`.
     */
    disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const Tab: React.ForwardRefExoticComponent<{
    /**
     * Renders text content and / or any HTML node inside.
     */
    children?: ReactNode;
    /**
     * Toggles disabled state of the `Tab`.
     */
    disabled?: boolean | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
