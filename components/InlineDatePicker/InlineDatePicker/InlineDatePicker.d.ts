import { default as React } from '../../../../node_modules/react';
import { BaseDatePickerProps } from '../BaseDatePicker';
export type InlineDatePickerProps = Omit<BaseDatePickerProps<'single'>, 'mode'>;
export declare const InlineDatePicker: ({ onDayClick, ...props }: InlineDatePickerProps) => React.JSX.Element;
