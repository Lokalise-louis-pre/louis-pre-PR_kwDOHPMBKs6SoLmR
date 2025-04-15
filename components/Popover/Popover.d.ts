import { Placement, Strategy } from '@floating-ui/react';
import { default as React, ComponentType, CSSProperties, HTMLProps, ReactElement, ReactNode, RefAttributes } from '../../../node_modules/react';
import { ArrowProps } from './DefaultArrow';
import { ContentProps } from './DefaultContent';
import { UsePopoverProps } from './usePopover';
import { SpacingLevels } from '../../foundations/designTokens';
type Children = ReactElement<HTMLProps<HTMLElement>> | string | number;
type Components = {
    Arrow: ComponentType<ArrowProps>;
    Content: ComponentType<ContentProps>;
};
type BasePopoverProps = {
    /**
     * Renders text content and / or any HTML node in the popover.
     */
    content?: string | ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode);
    /**
     * Renders text content or any HTML node to attach the popover to.
     */
    children: Children | ((visible: boolean) => Children);
    /**
     * Overrides the default Arrow and Content components to render the popover.
     * **DEPRECATED** Use `classNames` instead
     */
    components?: Partial<Components>;
    /**
     * Toggles an arrow pointing to the attached element.
     */
    withArrow?: boolean;
    /**
     * Toggles rendering in a portal container to prevent other elements from clipping or hiding the popover.
     */
    inPortal?: boolean;
    /**
     * Sets popover offset using theme spacing when rendering without an arrow.
     */
    offset?: SpacingLevels;
    /**
     * Function executed when the visibility of the popover changes.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Sets the positioning of the popover.
     */
    positioning?: Strategy;
    /**
     * Determines where the popover should appear relative to the child element.
     */
    placement?: Placement | 'auto';
    /**
     * Sets the CSS classes for content and arrow.
     */
    classNames?: {
        content?: string;
        arrow?: string;
    };
    /**
     * Sets the style for the content.
     */
    style?: CSSProperties;
};
export type PopoverProps = Omit<UsePopoverProps, 'strategy' | 'placement'> & BasePopoverProps & RefAttributes<HTMLElement>;
export declare const Popover: React.ForwardRefExoticComponent<Omit<PopoverProps, "ref"> & React.RefAttributes<HTMLElement>>;
export {};
