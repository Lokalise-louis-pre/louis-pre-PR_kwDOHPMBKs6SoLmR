import { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
/**
 * Code is used to display code snippets (strings or small blocks of reusable code) that can be copied.
 *
 * [Figma Source File | Code](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4028%3A25695)
 */
declare const meta: Meta<typeof Code>;
export default meta;
type Story = StoryObj<typeof Code>;
export declare const Clipboard: Story;
export declare const Multiline: Story;
export declare const Label: Story;
