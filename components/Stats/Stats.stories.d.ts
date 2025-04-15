import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Stats } from '.';
type Props = ComponentProps<typeof Stats>;
/**
 * Stats is a component that can be used to show statistical information.
 *
 * [Figma Source File | Stats](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4028%3A25590)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const LinkToHref: Story;
export declare const AlignRight: Story;
