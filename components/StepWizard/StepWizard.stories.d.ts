import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { StepWizard } from '.';
type StoryProps = ComponentProps<typeof StepWizard> & {
    title?: string;
    description?: string;
    options?: string;
    signature?: string;
    isPageLoading?: boolean;
    confirmTooltip?: string;
    onFirstPageSave?: () => void;
    onSecondPageSave?: () => void;
    onLastPageSave?: () => void;
    onSubmit?: (formState: Record<string, string>) => void;
};
/**
 * A multi-step wizard that you can use to collect information through steps.
 */
declare const meta: Meta<StoryProps>;
export default meta;
type Story = StoryObj<StoryProps>;
export declare const Default: Story;
export declare const WithKeyboardShortcuts: Story;
