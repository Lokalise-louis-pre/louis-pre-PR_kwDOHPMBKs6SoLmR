import { Story } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Switch } from './Switch';
type Props = ComponentProps<typeof Switch>;
/**
 * Switch allows users to turn an individual option on or off.
 * Changing a switch should take immediate effect and should not require the user to click Save or Submit to apply the new state.
 *
 * [Figma Source File | Switch](https://www.figma.com/file/aw89OTdj5ciuZxTNS5QuRa/Autopilot-Design-System?type=design&node-id=32%3A3214)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
