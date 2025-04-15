import { default as React } from '../../../node_modules/react';
import { PopoverProps } from '../Popover';
export interface HintProps {
    /**
     * Sets the positioning of the Hint popover, uses the `Popover` defaults when not set.
     */
    positioning?: PopoverProps['positioning'];
    /**
     * Determines where the hint should appear relative to the hint icon.
     */
    placement?: PopoverProps['placement'];
    /**
     * Changes the width of the hint.
     */
    width?: 'auto' | number;
    /**
     * Changes the accessibility label on the hint icon.
     */
    ariaLabel?: string;
    /**
     * Renders text content and / or any HTML node in the hint.
     */
    children: PopoverProps['content'];
    /**
     * Sets the css class attribute.
     */
    className?: string;
}
export declare const Hint: ({ placement, ariaLabel, width, positioning, children, className, }: HintProps) => React.JSX.Element;
