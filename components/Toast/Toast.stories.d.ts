import { Meta, StoryObj } from '@storybook/react';
import { ToastProps as ToastPropsType } from '.';
type ToastProps = ToastPropsType & {
    name: string;
};
/**
 * Toast shows a notification in the top-right corner of the window. It can be automatically closed after a preset amount of time,
 * or for important notifications it can remain visible until the user dismisses it.
 *
 * Toast depends on [react-toastify](https://github.com/fkhadra/react-toastify).
 *
 * [Figma Source File | Toast](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4032%3A29263)
 */
declare const meta: Meta<ToastProps>;
export default meta;
type Story = StoryObj<ToastProps>;
export declare const Success: Story;
export declare const Error: Story;
export declare const Warning: Story;
export declare const Info: Story;
export declare const Autoclosing: Story;
export declare const WithAnchor: Story;
export declare const ToastHelperFunctions: Story;
