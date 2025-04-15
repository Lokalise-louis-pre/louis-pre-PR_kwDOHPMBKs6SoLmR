import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { IconButton } from './IconButton';
type Props = ComponentProps<typeof IconButton>;
/**
 * IconButton is a button with only an icon in it. It is used when the user is very familiar with the action (e.g. frequently used buttons that don't require a label), or in places where the available space is limited.
 * A tooltip is displayed on hover to describe the button's action.
 *
 * Since the IconButton has no label, the `ariaLabel` prop is required for accessibility.
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Verified: Story;
export declare const Reviewed: Story;
export declare const ExtraSmall: Story;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;
export declare const Active: Story;
export declare const Disabled: Story;
export declare const Loading: Story;
export declare const AsLink: Story;
