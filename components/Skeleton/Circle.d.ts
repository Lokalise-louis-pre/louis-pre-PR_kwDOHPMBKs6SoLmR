import { HTMLAttributes, default as React } from '../../../node_modules/react';
export type CircleProps = {
    /**
     * Sets the height and width of the circle.
     */
    size: number;
    /**
     * Sets the css class attribute.
     */
    className?: string;
    /**
     * Override or extend the styles applied to the component.
     */
    style?: React.CSSProperties;
} & HTMLAttributes<HTMLDivElement>;
export declare const Circle: {
    ({ size, className, style, ...props }: CircleProps): React.JSX.Element;
    displayName: string;
};
