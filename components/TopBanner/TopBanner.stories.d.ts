import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { TopBanner } from './TopBanner';
type Props = ComponentProps<typeof TopBanner> & {
    onCloseFunction?: boolean;
};
/**
 * TopBanner is used to display messages on the top of the page. It takes the full width of the page.
 *
 * TopBanner exports 2 components:
 * - `TopBanner`: Main component.
 * - `TopBannerLink`: Link that is meant to be used within `TopBanner`.
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Warning: Story;
export declare const Info: Story;
export declare const Error: Story;
export declare const WithOnClose: Story;
export declare const WithTopBannerLink: Story;
export declare const CenteredCloseButton: Story;
