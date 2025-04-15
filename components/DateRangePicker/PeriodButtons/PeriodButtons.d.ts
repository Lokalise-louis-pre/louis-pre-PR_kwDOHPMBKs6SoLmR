import { default as React } from '../../../../node_modules/react';
import { DateRangePickerPeriod } from '../DateRangePicker';
interface PeriodButtonsProps {
    periods: readonly DateRangePickerPeriod[];
    onChange: (value: DateRangePickerPeriod) => void;
}
export declare const PeriodButtons: ({ periods, onChange }: PeriodButtonsProps) => React.JSX.Element;
export {};
