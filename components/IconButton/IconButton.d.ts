import { ReactNode, default as React } from '../../../node_modules/react';
import { PopoverProps } from '../Popover';
import { PressableElement, PressableProps } from '../Pressable';
export type Appearance = 'primary' | 'secondary' | 'verified' | 'reviewed';
export type Size = 'xs' | 'sm' | 'md' | 'lg';
export type IconButtonProps = {
    /**
     * Changes the button appearance.
     */
    appearance?: Appearance;
    /**
     * Changes button size.
     */
    size?: Size;
    /**
     * Toggles the active state of the button.
     */
    active?: boolean;
    /**
     * Label for tooltip and accessibility.
     */
    ariaLabel: string;
    /**
     * Toggles disabled state of the button.
     */
    disabled?: boolean;
    /**
     * Toggles the loading icon within the button.
     */
    loading?: boolean;
    /**
     * Explicitly set a different label for the tooltip, vs the aria-label
     * Only use this is in cases where the aria-label is not appropriate for a visual tooltip,
     * e.g. if it's very long or overly verbose.
     */
    tooltipOverride?: PopoverProps['content'];
    /**
     * Toggles whether the tooltip appears on focus.
     */
    disableTooltipOnFocus?: boolean;
    /**
     * Toggles rendering the tooltip in a portal container.
     */
    tooltipInPortal?: PopoverProps['inPortal'];
    /**
     * Determines where the tooltip should appear relative to the IconButton.
     */
    tooltipPlacement?: PopoverProps['placement'];
    /**
     * Displays Icon component in the button.
     */
    children: ReactNode;
} & PressableProps;
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<PressableElement>>;
