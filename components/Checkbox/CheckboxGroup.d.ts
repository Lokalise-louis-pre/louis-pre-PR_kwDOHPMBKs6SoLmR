import { default as React, ChangeEvent, ReactNode } from '../../../node_modules/react';
export type CheckboxGroupProps = {
    /**
     * Renders `ManagedCheckbox` children as checkbox options.
     */
    children: ReactNode;
    /**
     * Sets the currently checked `ManagedCheckbox` options.
     */
    value?: readonly string[];
    /**
     * Sets the name attributes for the `ManagedCheckbox` options.
     */
    name: string;
    /**
     * Function executed when a `ManagedCheckbox` option is checked / unchecked.
     */
    onChange?: (e: ChangeEvent<HTMLInputElement>, value: readonly string[]) => void;
    /**
     * Renders a form validation `InputErrorMessage`.
     */
    error?: boolean;
    /**
     * Error IDs for `InputErrorMessage` in a managed CheckboxGroup.
     * */
    errorIds?: string;
};
export declare const CheckboxGroup: {
    ({ children, value: checkedValues, name, error, errorIds, onChange, }: CheckboxGroupProps): React.JSX.Element;
    displayName: string;
};
