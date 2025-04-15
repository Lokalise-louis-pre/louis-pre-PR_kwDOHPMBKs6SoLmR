import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { InputErrorMessage } from './InputErrorMessage';
type Props = ComponentProps<typeof InputErrorMessage> & {
    error?: string | string[] | boolean;
};
/**
 * InputErrorMessage is used to display one or more form validation error messages next to input fields.
 *
 * InputErrorMessage exports a `useInputErrorMessages` hook that accepts 1 or more error messages or a boolean,
 * and returns an object with an `isInvalid` boolean if there are errors, and an `errorMessages` array with an object for each error containing the message and a generated unique ID.
 * The `errorMessages` array can be passed as a child to `InputErrorMessage`.
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const MultipleMessages: Story;
