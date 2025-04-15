import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Input } from './Input';
type Props = ComponentProps<typeof Input>;
/**
 * Input is used for text input fields.
 *
 * [Figma Source File | Input](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4029%3A21039)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const Small: Story;
export declare const Clearable: Story;
export declare const WithError: Story;
export declare const PrefixSuffix: Story;
