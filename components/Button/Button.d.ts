import { ReactNode, default as React } from '../../../node_modules/react';
import { PressableElement, PressableProps } from '../Pressable';
export type Size = 'xs' | 'sm' | 'md' | 'lg';
export type Appearance = 'accent' | 'danger' | 'warning';
export type Variant = 'primary' | 'secondary' | 'tertiary';
export type ButtonProps = {
    /**
     * Changes the button appearance.
     */
    appearance?: Appearance;
    /**
     * Change the button variant.
     */
    variant?: Variant;
    /**
     * Changes button scale in padding and font size.
     */
    size?: Size;
    /**
     * Toggles disabled state of the button.
     */
    disabled?: boolean;
    /**
     * Toggles the loading icon within the button.
     */
    loading?: boolean;
    /**
     * Toggles the active state of the button.
     */
    active?: boolean;
    /**
     * Enables the type attribute for the button.
     */
    type?: 'button' | 'submit' | 'reset' | undefined;
    /**
     * Renders an icon on the left side of the button through a provided child element.
     */
    leftIcon?: ReactNode;
    /**
     * Renders an icon on the right side of the button through a provided child element.
     */
    rightIcon?: ReactNode;
    /**
     * Renders text content and / or any HTML node in the button.
     */
    children?: ReactNode;
} & PressableProps;
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<PressableElement>>;
