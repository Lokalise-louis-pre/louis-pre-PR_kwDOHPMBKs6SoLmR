import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Pagination } from './Pagination';
type Props = ComponentProps<typeof Pagination>;
/**
 * The pagination component is a way to navigate through long lists of data. It allows the user to select a specific page to view, and provides an easy way to move between pages.
 *
 * Pagination expects items to start counting at `0` (where the last item equals `total - 1`).
 *
 * [Figma Source File | Pagination](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29260)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
