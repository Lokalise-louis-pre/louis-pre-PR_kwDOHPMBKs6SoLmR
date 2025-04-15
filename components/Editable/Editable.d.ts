import { default as React } from '../../../node_modules/react';
export type EditableProps = {
    /**
     * Renders text content that can be edited.
     */
    value: string;
    /**
     * Sets a placeholder value in the input field when `value` is an empty string.
     */
    placeholder?: string;
    /**
     * Adds accessibility label on the input field.
     */
    label?: string;
    /**
     * Toggles disabled state of the save button.
     */
    disabled?: boolean;
    /**
     * Renders text content that can be edited when `value` is an empty string.
     */
    emptyText?: string;
    /**
     * Function executed when input is saved.
     */
    onChange: (value: string) => void;
    /**
     * Sets the css class attribute.
     */
    className?: string;
};
export declare const Editable: ({ value, placeholder, label, emptyText, onChange, disabled, className, }: EditableProps) => React.JSX.Element;
