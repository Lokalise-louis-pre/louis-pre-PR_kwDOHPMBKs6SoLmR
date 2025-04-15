import { Middleware, Placement, Strategy, UseRoleProps } from '@floating-ui/react';
export type UsePopoverProps = {
    /**
     * Controls the visibility of the popover.
     * If provided, the popover will be opened/closed in controlled mode.
     * Unset (by default) will let Popover decides in uncontrolled mode.
     */
    open?: boolean;
    /**
     * If `true`, the popover will be initially opened.
     */
    defaultIsOpen?: boolean;
    /**
     * Determines where the popover should appear relative to the child element.
     */
    placement?: Placement;
    /**
     * Determines whether the popover should appear on hover or click.
     */
    triggerEvent?: 'hover' | 'click';
    /**
     * Set delayed appearance of the popover when `triggerEvent` is 'hover'.
     * Set to `true` will use default value of 250 milliseconds.
     * Set to a custom number will make it delays with that amount in milliseconds.
     */
    delay?: boolean | number;
    /**
     * Callback when state of popover changed
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * useFloating middlewares.
     */
    middlewares?: Middleware[];
    /**
     * Sets the positioning of the popover.
     */
    strategy?: Strategy;
    role?: UseRoleProps['role'];
    /**
     * Toggles whether the popover is opened on focus.
     */
    disableOpenOnFocus?: boolean;
};
export declare function usePopover({ open: controlledOpen, defaultIsOpen, delay, placement, triggerEvent, onOpenChange: setControlledOpen, middlewares, strategy: customStrategy, role, disableOpenOnFocus, }: UsePopoverProps): {
    context: {
        x: number;
        y: number;
        placement: Placement;
        strategy: Strategy;
        middlewareData: import('@floating-ui/core').MiddlewareData;
        isPositioned: boolean;
        update: () => void;
        floatingStyles: import('../../../node_modules/react').CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event | undefined, reason?: import('@floating-ui/react').OpenChangeReason | undefined) => void;
        events: import('@floating-ui/react').FloatingEvents;
        dataRef: import('../../../node_modules/react').MutableRefObject<import('@floating-ui/react').ContextData>;
        nodeId: string | undefined;
        floatingId: string | undefined;
        refs: import('@floating-ui/react').ExtendedRefs<import('@floating-ui/react').ReferenceType>;
        elements: import('@floating-ui/react').ExtendedElements<import('@floating-ui/react').ReferenceType>;
    };
    descriptionId: string;
    refs: {
        reference: import('../../../node_modules/react').MutableRefObject<import('@floating-ui/react-dom').ReferenceType | null>;
        floating: import('../../../node_modules/react').MutableRefObject<HTMLElement | null>;
        setReference: (node: import('@floating-ui/react-dom').ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    } & import('@floating-ui/react').ExtendedRefs<import('@floating-ui/react').ReferenceType>;
    labelId: string;
    middlewareData: import('@floating-ui/core').MiddlewareData;
    open: boolean;
    setOpen: (visible: boolean) => void;
    strategy: Strategy;
    x: number;
    y: number;
    getReferenceProps: (userProps?: import('../../../node_modules/react').HTMLProps<Element> | undefined) => Record<string, unknown>;
    getFloatingProps: (userProps?: import('../../../node_modules/react').HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    getItemProps: (userProps?: (Omit<import('../../../node_modules/react').HTMLProps<HTMLElement>, "active" | "selected"> & {
        active?: boolean | undefined;
        selected?: boolean | undefined;
    }) | undefined) => Record<string, unknown>;
};
export type UsePopoverReturn = ReturnType<typeof usePopover>;
