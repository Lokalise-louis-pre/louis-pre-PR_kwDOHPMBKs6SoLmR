import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { ViewButtonGroup } from '.';
type Props = ComponentProps<typeof ViewButtonGroup>;
/**
 * ViewButtonGroup can be used to switch between different views (e.g. from a list view to a card view).
 * It must have at least 2 or more `ViewButton` children to toggle between.
 *
 * [Figma Source File | ViewButtonGroup](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4030%3A23318)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
