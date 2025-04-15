import { Story } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { DatePicker } from './DatePicker';
type Props = ComponentProps<typeof DatePicker>;
/**
 * DatePicker is used to select a date from a calendar.
 *
 * DatePicker depends on:
 * - [react-day-picker](https://react-day-picker.js.org/)
 * - [date-fns](https://github.com/date-fns/date-fns)
 *
 * [Figma Source File | DatePicker](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4032%3A28124)
 *
 * (note: All examples use `inPortal = true` to ensure they display properly in Storybook, only use this prop when needed.)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const PreselectedDate: Story;
export declare const DisabledDays: Story;
export declare const WithError: Story;
