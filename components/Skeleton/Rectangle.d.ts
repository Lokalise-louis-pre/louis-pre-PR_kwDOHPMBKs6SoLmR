import { HTMLAttributes, default as React } from '../../../node_modules/react';
export type RectangleProps = {
    /**
     * Center the Rectangle
     */
    centered?: boolean;
    /**
     * Set the height of Rectangle.
     */
    height: number;
    /**
     * Set the width of Rectangle. Can use percentage value.
     */
    width: number | string;
    /**
     * Sets the css class attribute.
     */
    className?: string;
    /**
     * Override or extend the styles applied to the component.
     */
    style?: React.CSSProperties;
} & HTMLAttributes<HTMLDivElement>;
export declare const Rectangle: {
    ({ centered, height, width, className, style, ...props }: RectangleProps): React.JSX.Element;
    displayName: string;
};
