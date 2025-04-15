import { DateRangePickerPeriod } from './DateRangePicker';
type Value = {
    from: Date;
    to: Date;
};
export declare const periodFunctions: Record<DateRangePickerPeriod, () => Value | undefined>;
export {};
