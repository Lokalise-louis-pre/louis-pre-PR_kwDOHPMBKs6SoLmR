import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Flex } from './Flex';
type Props = ComponentProps<typeof Flex>;
/**
 * Flex is used to create flexbox layouts.
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
