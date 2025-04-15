import { ReactNode, default as React } from '../../../node_modules/react';
export type SkeletonProps = {
    /**
     * Toggles the animation.
     */
    animated?: boolean;
    /**
     * Adds accessibility label.
     */
    description: string;
    /**
     * Sets the css class attribute.
     */
    className?: string;
    /**
     * Override or extend the styles applied to the component.
     */
    style?: React.CSSProperties;
    /**
     * Renders text content and / or any HTML node, including `Rectangle` or `Circle` in the container.
     */
    children: ReactNode;
};
export declare const Skeleton: {
    ({ children, animated, description, className, style }: SkeletonProps): React.JSX.Element;
    displayName: string;
};
