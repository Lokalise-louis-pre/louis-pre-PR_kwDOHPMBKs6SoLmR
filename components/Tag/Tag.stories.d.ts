import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Tag } from '.';
type Props = ComponentProps<typeof Tag>;
/**
 * Tag component is used for providing labels and categories for an item in a list.
 *
 * Depends on:
 * - [md5](https://github.com/pvorb/node-md5#readme)
 *
 * [Figma Source File | Tag](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4030%3A23309)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const Solid: Story;
export declare const Outline: Story;
export declare const NonClickable: Story;
export declare const NormalSize: Story;
export declare const SmallSize: Story;
export declare const WithNoEllipsis: Story;
export declare const WithEllipsis: Story;
