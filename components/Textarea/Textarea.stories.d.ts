import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Textarea } from './Textarea';
type Props = ComponentProps<typeof Textarea>;
/**
 * Textarea designed for longer and larger text input that may span multiple lines.
 *
 * [Figma Source File | Textarea](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4029%3A21039)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const Rows: Story;
export declare const WithError: Story;
