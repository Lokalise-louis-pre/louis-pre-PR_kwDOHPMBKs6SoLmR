import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Card } from './Card';
type Props = ComponentProps<typeof Card>;
/**
 * Card is used to create pre-defined box layout.
 *
 * [Figma Source File | Card](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A28123)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const RenderAsDifferentContainer: Story;
