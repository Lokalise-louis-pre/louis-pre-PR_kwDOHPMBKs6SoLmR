import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Editable } from './Editable';
type Props = ComponentProps<typeof Editable>;
/**
 * Editable is used for editing inline text by clicking on the text.
 *
 * Figma Source File | Editable (not yet available in Figma, will be updated)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const EmptyText: Story;
export declare const Disabled: Story;
