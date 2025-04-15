import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Alert } from './Alert';
type PropsAndArgs = ComponentProps<typeof Alert> & {
    onCloseFunction: boolean;
};
/**
 * Alert is used to highlight an important message. Often used in combination with a Modal to ask for user confirmation.
 *
 * See [Figma Source File](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4032%3A36154).
 */
declare const meta: Meta<PropsAndArgs>;
export default meta;
type Story = StoryObj<PropsAndArgs>;
export declare const Warning: Story;
export declare const Info: Story;
export declare const Success: Story;
export declare const Error: Story;
export declare const Ai: Story;
export declare const WarningWithIcon: Story;
export declare const InfoWithIcon: Story;
export declare const SuccessWithIcon: Story;
export declare const ErrorWithIcon: Story;
export declare const AiWithIcon: Story;
export declare const WithCustomIcon: Story;
export declare const WithCloseOption: Story;
export declare const WithCloseAndIcon: Story;
/**
 * `AlertLink` is meant to be used within `Alert` component.
 */
export declare const WithAlertLink: Story;
