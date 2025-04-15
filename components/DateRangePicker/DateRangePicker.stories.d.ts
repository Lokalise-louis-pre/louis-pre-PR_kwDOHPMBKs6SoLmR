import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { DateRangePicker } from './DateRangePicker';
type Props = ComponentProps<typeof DateRangePicker>;
/**
 * DateRangePicker is used to select a date range from a calendar.
 *
 * DateRangePicker depends on:
 * - [react-day-picker](https://react-day-picker-v7.netlify.app/docs/getting-started/)
 * - [date-fns](https://github.com/date-fns/date-fns)
 *
 * [Figma Source File | DateRangePicker](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4032%3A28124)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const PreselectedDateRange: Story;
export declare const DisabledDays: Story;
export declare const WithError: Story;
