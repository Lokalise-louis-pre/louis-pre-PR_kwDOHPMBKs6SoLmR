import { Story } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Loading } from './Loading';
type Props = ComponentProps<typeof Loading>;
/**
 * Loading signals a user action is processing with no indication of progress and takes the full width and height of your relative container.
 * If a process will take longer than just a couple of seconds please consider using Toast to notify the user on the progress.
 *
 * We also recommend reviewing our design document on Loading Spinner best practices: [Figma | Loading-States](https://www.figma.com/file/XeM707H2pwwgEewW8DbnPM/Loading-States)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
