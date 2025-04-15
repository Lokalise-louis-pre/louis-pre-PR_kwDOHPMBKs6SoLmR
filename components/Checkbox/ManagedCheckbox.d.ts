import { InputHTMLAttributes, default as React } from '../../../node_modules/react';
export interface ManagedCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * Sets the value attribute for the checkbox option.
     */
    value: string;
    /**
     * Toggles whether the checkbox should appear as indeterminate.
     */
    indeterminate?: boolean;
}
export declare const ManagedCheckbox: React.ForwardRefExoticComponent<ManagedCheckboxProps & React.RefAttributes<HTMLInputElement>>;
