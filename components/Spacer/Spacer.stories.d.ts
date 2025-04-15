import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Spacer } from './Spacer';
type Props = ComponentProps<typeof Spacer>;
/**
 * Meant for adding space between different components. It allows extracting margins from other components which allows making components more reusable.
 * Also, `Spacer` allows avoiding creation of custom components that are meant just for adding some margins.
 *
 * **Keep in mind that `Spacer` should be used only in places where using `flex gap` and `grid gap` doesn't make sense.**
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const SpecificDirections: Story;
export declare const Shorthand: Story;
