import { Meta, StoryObj } from '@storybook/react';
import { Label } from '.';
declare const meta: Meta<typeof Label>;
export default meta;
type Story = StoryObj<typeof Label>;
export declare const Default: Story;
export declare const Description: Story;
export declare const Required: Story;
export declare const Underline: Story;
/**
 * Accessibility notes:
 * If `required` is `true`, a red asterisk is added with an `aria-label` of "Required".
 */
