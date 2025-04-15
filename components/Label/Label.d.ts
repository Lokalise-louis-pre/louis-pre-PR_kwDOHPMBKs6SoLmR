import { default as React, ReactNode } from '../../../node_modules/react';
export interface LabelProps {
    /**
     * Sets text content and / or any HTML node as the label text.
     */
    text: ReactNode;
    /**
     * Sets the description text under the label heading.
     */
    description?: string;
    /**
     * Toggles a red asterisk to indicate that the field is required.
     */
    required?: boolean;
    /**
     * Sets the `for` attribute on the label element.
     */
    for?: string;
    /**
     * Sets the `id` attribute on the label text span.
     */
    id?: string;
    /**
     * Toggles a bottom border on the label.
     */
    underline?: boolean;
    /**
     * Sets the css class attribute.
     */
    className?: string;
    /**
     * Renders text content and / or any HTML node in the label.
     */
    children?: ReactNode;
}
export declare const Label: ({ text, description, required, underline, for: htmlFor, id, className, children, }: LabelProps) => React.JSX.Element;
