import { default as React } from '../../../../node_modules/react';
import { BaseDatePickerProps } from '../BaseDatePicker';
type Value = {
    from: Date | undefined;
    to?: Date;
};
export interface InlineDateRangePickerProps extends Omit<BaseDatePickerProps<'range'>, 'selected' | 'onSelect' | 'mode'> {
    value: Value;
    onChange: (value: {
        from: Date;
        to: Date;
    }) => void;
}
export declare const InlineDateRangePicker: ({ value, onChange, ...rest }: InlineDateRangePickerProps) => React.JSX.Element;
export {};
