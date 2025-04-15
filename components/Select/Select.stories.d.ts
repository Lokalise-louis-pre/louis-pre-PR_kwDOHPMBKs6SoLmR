import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Select } from '.';
type Props = ComponentProps<typeof Select>;
/**
 * Select allows users to select one or more options from a pre-defined list, or add their own option.
 *
 * Select depends on:
 * - [react-select](https://react-select.com/home)
 *
 * [Figma Source File | Select](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29262)
 * [Figma Source File | Multi select](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29305)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const DisabledOptionsFunction: Story;
export declare const DisabledOptionsProperty: Story;
export declare const MultiSelect: Story;
export declare const Creatable: Story;
export declare const ManyOptions: Story;
