import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Button } from './Button';
type Props = ComponentProps<typeof Button>;
/**
 * Buttons are interactive elements. They are used to perform specific actions in the UI.
 *
 * [Figma Source File | Button](https://www.figma.com/design/zfCOLmZam4nrttG6IVzQyz/Expert-Design-System?node-id=4028-25591)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const Accent: Story;
export declare const Danger: Story;
/**
 * The `warning` appearance is used only with the `primary` variant and will be removed in the future.
 */
export declare const Warning: Story;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Tertiary: Story;
export declare const ExtraSmall: Story;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;
export declare const Active: Story;
export declare const Disabled: Story;
export declare const Loading: Story;
export declare const AsLink: Story;
export declare const LeftIcon: Story;
export declare const RightIcon: Story;
export declare const BothIcons: Story;
