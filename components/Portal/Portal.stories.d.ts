import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Portal } from '.';
type Props = ComponentProps<typeof Portal>;
/**
 * Creates and appends a DOM node to the end of document.body (or a specific container if provided) and renders a React tree into it.
 * Useful for preventing parent styles from clipping or hiding content (for example popovers, dropdowns, and modals).
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const AppendToContainer: Story;
