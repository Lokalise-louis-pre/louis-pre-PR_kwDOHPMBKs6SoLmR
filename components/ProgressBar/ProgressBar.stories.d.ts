import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { ProgressBar } from './ProgressBar';
type Props = ComponentProps<typeof ProgressBar>;
/**
 * ProgressBar is used to visualize the progression of an operation.
 *
 * ProgressBar is rendered with the `progressbar` role and an `aria-valuenow` attribute for the current progress indicator value.
 *
 * [Figma Source File | ProgressBar](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29261)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
