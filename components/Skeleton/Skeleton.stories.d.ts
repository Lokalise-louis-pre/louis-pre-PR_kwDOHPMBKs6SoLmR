import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Circle, Rectangle, Skeleton } from '.';
type Props = ComponentProps<typeof Skeleton> & {
    circleProps?: ComponentProps<typeof Circle>;
    rectangleProps?: ComponentProps<typeof Rectangle>;
};
/**
 * Skeleton is used to create loading placeholders.
 *
 * Skeleton exports 3 components:
 * - `Skeleton`: main container component.
 * - `Circle`: circle with variable diameter.
 * - `Rectangle`: rectangle with variable dimensions.
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const CircleStory: Story;
export declare const RectangleStory: Story;
export declare const AnimatedCircle: Story;
export declare const AnimatedRectangle: Story;
export declare const LayoutWithFlex: Story;
