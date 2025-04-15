import { default as React, ReactElement } from '../../../node_modules/react';
import { CheckboxGroupProps } from './CheckboxGroup';
import { ManagedCheckboxProps } from './ManagedCheckbox';
export interface MultiCheckboxProps extends Omit<CheckboxGroupProps, 'children' | 'error'> {
    /**
     * Renders `ManagedCheckbox` children as checkbox options.
     */
    children: ReactElement<ManagedCheckboxProps> | ReactElement<ManagedCheckboxProps>[];
    /**
     * Renders a form validation `InputErrorMessage`.
     */
    error?: boolean | string | string[];
    /**
     * Sets the css class attribute.
     */
    className?: string;
}
export declare const MultiCheckbox: {
    ({ children, error, className, ...props }: MultiCheckboxProps): React.JSX.Element;
    displayName: string;
};
