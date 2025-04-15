import { default as React, ReactNode } from '../../../node_modules/react';
export type StatsProps = {
    /**
     * Title of the stat.
     */
    title: string;
    /**
     * Link to some place, render as clickable when an href is passed.
     */
    href?: string;
    /**
     * Indicate the stat is clickable.
     */
    clickable?: boolean;
    /**
     * Align text to right.
     */
    alignRight?: boolean;
    /**
     * Renders a styled percentage sign after the passed content.
     */
    percent?: boolean;
    /**
     * Sets the css class attribute.
     */
    className?: string;
    /**
     * Renders text content.
     */
    children: ReactNode;
};
export declare const Stats: {
    ({ title, children, href, clickable, alignRight, percent, className, }: StatsProps): React.JSX.Element;
    displayName: string;
};
