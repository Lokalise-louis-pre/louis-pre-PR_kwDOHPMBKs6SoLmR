import { default as React, HTMLAttributes, ReactNode } from '../../../node_modules/react';
export type SvgIconProps = {
    /**
     * Icon color can be set to any CSS color value.
     * `inherit` will inherit the text color of parent elements.
     */
    color?: string;
    /**
     * Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.
     */
    size?: string;
    /**
     * Should be set when the icon is used in a meaningful context, instead of purely decorative.
     */
    ariaLabel?: string;
    className?: string;
    children?: ReactNode;
} & HTMLAttributes<SVGElement>;
export declare const SvgIcon: ({ color, size, ariaLabel, children, className, ...props }: SvgIconProps) => React.JSX.Element;
declare module 'csstype' {
    interface Properties {
        '--louis-svgicon-color'?: string;
        '--louis-svgicon-size'?: string;
    }
}
