import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Toggle } from './Toggle';
type Props = ComponentProps<typeof Toggle>;
/**
 * **Deprecated**. Use Switch instead.
 *
 * `Toggle` allows users to turn an individual option on or off. Changing a toggle should take immediate effect and should not require the user to click Save or Submit to apply the new state.
 *
 * [Figma Source File | Toggle](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=11056%3A30188&t=r39e6HnjBbidt5cB-0)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
