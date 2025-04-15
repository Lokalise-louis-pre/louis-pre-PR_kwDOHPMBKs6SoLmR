import { default as React } from '../../../node_modules/react';
import { PopoverProps } from '../Popover';
export declare const Tooltip: React.ForwardRefExoticComponent<Pick<PopoverProps, "children" | "style" | "placement" | "inPortal" | "delay" | "positioning" | "classNames"> & {
    /**
     * Whether to show the tooltip at all
     */
    show?: boolean | undefined;
    /**
     * Content of the tooltip
     */
    tooltip?: PopoverProps['content'];
    /**
     * Toggles whether the tooltip appears on focus.
     */
    disableOpenOnFocus?: boolean | undefined;
} & React.RefAttributes<HTMLElement>>;
