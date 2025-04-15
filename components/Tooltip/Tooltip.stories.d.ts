import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Tooltip } from './Tooltip';
type Props = ComponentProps<typeof Tooltip>;
/**
 * Tooltip is used to provide short descriptions or explanations for their paired element (child element). They should not contain any links or buttons.
 *
 * [Figma Source File | Tooltip](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4029%3A21088)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const RenderInPortal: Story;
/**
 * Tooltip can also be used together with generic Popover enabling "Tooltip on hover, Popover on click" behaviour.
 * Order of components (Tooltip in Popover or Popover in Tooltip) doesn't matter.
 */
export declare const WithPopover: Story;
