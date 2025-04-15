import { HTMLAttributes, ReactNode, default as React } from '../../../node_modules/react';
export type TabPanelProps = {
    /**
     * Renders text content and / or any HTML node inside.
     */
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export declare const TabPanel: React.ForwardRefExoticComponent<{
    /**
     * Renders text content and / or any HTML node inside.
     */
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
