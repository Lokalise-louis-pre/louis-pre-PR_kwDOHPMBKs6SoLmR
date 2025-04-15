import { default as React } from '../../../node_modules/react';
import { Matcher as DisabledDays } from 'react-day-picker';
import { PopoverProps } from '../Popover';
export type DatePickerProps = {
    /**
     * Sets the `name` attribute of the DatePicker button element.
     */
    name?: string;
    /**
     * Sets a preselected date in the input field.
     */
    value?: Date;
    /**
     * Function executed when a date is selected.
     */
    onChange: (date: Date) => void;
    /**
     * Sets the day(s) that should appear as disabled using "matching days modifiers": https://react-day-picker.js.org/basics/modifiers#disabling-days.
     */
    disabledDays?: DisabledDays | DisabledDays[];
    /**
     * Renders a form validation `InputErrorMessage` when passed as `string | string[]`.
     */
    error?: boolean | string | string[];
    /**
     * Toggles rendering in a portal container to prevent other elements from clipping or hiding the DatePicker popover.
     */
    inPortal?: PopoverProps['inPortal'];
    /**
     * Sets the positioning of the DatePicker popover, uses the `Popover` defaults when not set.
     */
    positioning?: PopoverProps['positioning'];
    /**
     * Sets the css class attribute.
     */
    className?: string;
};
export declare const DatePicker: ({ name, value, disabledDays, onChange, error, inPortal, positioning, className, }: DatePickerProps) => React.JSX.Element;
