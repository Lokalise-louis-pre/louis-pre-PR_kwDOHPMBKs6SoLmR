import { default as React } from '../../../node_modules/react';
import { Matcher as DisabledDays } from 'react-day-picker';
import { PopoverProps } from '../Popover';
export declare const AllPeriods: readonly ["custom", "today", "yesterday", "last7Days", "last30Days", "lastWeek", "thisWeek", "lastMonth", "thisMonth"];
export type DateRangePickerPeriod = (typeof AllPeriods)[number];
declare const AllValues: {
    from: Date;
    to: Date;
};
export type DateRangePickerValue = typeof AllValues;
export interface DateRangePickerProps {
    /**
     * Sets the `name` attribute of the DatePicker button element.
     */
    name?: string;
    /**
     * Sets a preselected date range in the input field.
     */
    value?: DateRangePickerValue;
    /**
     * Enables the quick select buttons in the DateRangePicker.
     */
    periods?: DateRangePickerPeriod[];
    /**
     * Function executed when a date range is selected.
     */
    onChange: (value: DateRangePickerValue) => void;
    /**
     * Sets the day(s) that should appear as disabled using "matching days modifiers": https://react-day-picker.js.org/basics/modifiers#disabling-days.
     */
    disabledDays?: DisabledDays | DisabledDays[];
    /**
     * Renders a form validation `InputErrorMessage` when passed as `string | string[]`.
     */
    error?: boolean | string | string[];
    /**
     * Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.
     */
    inPortal?: PopoverProps['inPortal'];
    /**
     * Sets the positioning of the DateRangePicker popover, uses the `Popover` defaults when not set.
     */
    positioning?: PopoverProps['positioning'];
    /**
     * Sets the css class attribute.
     */
    className?: string;
}
export declare const DateRangePicker: ({ name, value, periods, error, onChange, disabledDays, inPortal, positioning, className, }: DateRangePickerProps) => React.JSX.Element;
export {};
