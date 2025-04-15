import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Hint } from './Hint';
type Props = ComponentProps<typeof Hint>;
/**
 * Hint can be used as an icon button to provide additional context and explanations for other UI elements or text.
 *
 * [Figma Source File | Hint](https://www.figma.com/design/zfCOLmZam4nrttG6IVzQyz/Expert-Design-System?node-id=11075-35352)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const ExplicitPlacement: Story;
export declare const InsideLabel: Story;
