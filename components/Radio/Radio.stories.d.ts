import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { RadioGroup } from '.';
type Props = ComponentProps<typeof RadioGroup>;
/**
 * Radio is used to present a single-select choice.
 *
 * Radio exports 3 components:
 * - `RadioGroup`: Styled radio group, with error messaging.
 * - `Radio`: Individual radio options.
 * - **Deprecated**: `RadioContext` is an internal Louis component and will no longer be exported in the future, use `RadioGroup` instead.
 *
 * Accessibility:
 * - `RadioGroup` is rendered with the `radiogroup` role.
 * - If an `error` message is passed, `RadioGroup` also renders with an `aria-errormessage` attribute identifying the element that provides an error message for the radiogroup.
 *
 * [Figma Source File | Radio](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4030%3A21105)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const DisabledOptions: Story;
export declare const WithError: Story;
