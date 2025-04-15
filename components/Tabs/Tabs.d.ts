import { HTMLAttributes, ReactNode, default as React } from '../../../node_modules/react';
import { TabsContextValue } from './context/tabsContext';
export type TabsProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
    /**
     * Renders text content and / or any HTML node inside.
     * Expects `TabList` and `TabPanels` components as children.
     * You can also pass a render function to access `id` and `selectedIndex`.
     */
    children: ReactNode | ((props: TabsContextValue) => ReactNode);
    /**
     * Controls visible tab from outside.
     * Must be used together with `onChange` to make tabs interactive.
     */
    index?: number;
    /**
     * Specifies a tab that should be opened by default.
     */
    defaultIndex?: number;
    /**
     * Function executed when a tab is changed.
     */
    onChange?: (index: number) => void;
};
export declare const Tabs: React.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
    /**
     * Renders text content and / or any HTML node inside.
     * Expects `TabList` and `TabPanels` components as children.
     * You can also pass a render function to access `id` and `selectedIndex`.
     */
    children: ReactNode | ((props: TabsContextValue) => ReactNode);
    /**
     * Controls visible tab from outside.
     * Must be used together with `onChange` to make tabs interactive.
     */
    index?: number | undefined;
    /**
     * Specifies a tab that should be opened by default.
     */
    defaultIndex?: number | undefined;
    /**
     * Function executed when a tab is changed.
     */
    onChange?: ((index: number) => void) | undefined;
} & React.RefAttributes<HTMLDivElement>>;
