import { default as React, ReactNode } from '../../../node_modules/react';
export type ViewButtonProps<T extends string> = {
    /**
     * Sets accessibility label.
     */
    label: string;
    /**
     * Sets value to use when onChange is executed.
     */
    value: T;
    /**
     * Toggles selected state of the button.
     */
    selected?: boolean;
    /**
     * Function executed when the button is clicked.
     */
    onChange?: (value: T) => void;
    /**
     * Renders text content and / or any HTML node in the alert.
     */
    children: ReactNode;
};
export declare const ViewButton: <T extends string>({ label, value, selected, onChange, children, }: ViewButtonProps<T>) => React.JSX.Element;
