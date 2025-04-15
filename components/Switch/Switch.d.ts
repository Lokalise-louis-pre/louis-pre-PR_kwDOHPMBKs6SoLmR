import { default as React } from '../../../node_modules/react';
export interface SwitchProps {
    /**
     * Sets Switch size.
     *
     * @default 'small'
     */
    size?: 'small' | 'large';
    /**
     * Applies error styling when `true`.
     *
     * @default false
     */
    error?: boolean;
    /**
     * If `true`, the `Switch` will be checked.
     * You'll need to pass `onChange` to update its value (since it is now controlled)
     *
     * @default false
     */
    checked?: boolean;
    /**
     * If `true`, the `Switch` will be disabled
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, the `Switch` input is marked as required,
     * and `required` attribute will be added
     *
     * @default false
     */
    required?: boolean;
    /**
     * If `true`, the Switch will be initially checked.
     *
     * @default false
     */
    defaultChecked?: boolean;
    /**
     * The callback invoked when the checked state of the `Switch` changes.
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * The callback invoked when the `Switch` is blurred (loses focus)
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * The callback invoked when the `Switch` is focused
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * The name of the input field in a `Switch`
     * (Useful for form submission).
     */
    name?: string;
    /**
     * The value to be used in a `Switch`.
     * This is the value that will be returned on form submission.
     */
    value?: string | number;
    /**
     * id assigned to input
     */
    id?: string;
    /**
     * Defines the string that labels the underlying input element.
     */
    'aria-label'?: string;
    /**
     * Refers to the `id` of the element that labels the underlying input element.
     */
    'aria-labelledby'?: string;
    'aria-invalid'?: true | undefined;
    'aria-describedby'?: string;
    /**
     * The tab-index property of the underlying input element.
     */
    tabIndex?: number;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
