import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Table, TableCell, TableHeaderCell } from '.';
type Props = ComponentProps<typeof Table> & {
    tableHeaderCellProps?: ComponentProps<typeof TableHeaderCell>;
    tableCellProps?: ComponentProps<typeof TableCell>;
    tableFooterCellProps?: ComponentProps<typeof TableCell>;
};
/**
 * Table can be used to represent tabular data, comprised of rows and columns of cells containing data.
 *
 * Table exports 7 components:
 * - `Table`: Main component which can contain a `TableHeader`, `TableBody`, `TableFooter`, and one or more `TableRow` and `TableCell`.
 * - `TableHeader`: Renders a table header element.
 * - `TableHeaderCell`: Renders a styled table cell element for use in a `TableHeader`.
 * - `TableBody`: Renders a table body element.
 * - `TableFooter`: Renders a table footer element.
 * - `TableRow`: Renders a table row element.
 * - `TableCell`: Renders a styled table cell element for use in a `TableBody` or `TableFooter`.
 *
 * [Figma Source File | Table](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4037%3A21036)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
