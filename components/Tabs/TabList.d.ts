import { default as React, HTMLAttributes, ReactNode } from '../../../node_modules/react';
export type TabListProps = {
    /**
     * Renders text content and / or any HTML node inside. Expects multiple `Tab` components as children.
     */
    children?: ReactNode;
} & {
    ariaLabelledBy?: string;
    ariaLabel?: string;
} & HTMLAttributes<HTMLDivElement>;
export declare const TabList: React.ForwardRefExoticComponent<{
    /**
     * Renders text content and / or any HTML node inside. Expects multiple `Tab` components as children.
     */
    children?: ReactNode;
} & {
    ariaLabelledBy?: string | undefined;
    ariaLabel?: string | undefined;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
