import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Tabs } from '.';
type Props = ComponentProps<typeof Tabs> & {
    ariaLabelledBy?: string;
    ariaLabel?: string;
};
/**
 * Tabs are used to show the content that is conveniently placed in the same part of the interface.
 *
 * Tabs exports 5 components:
 * - `Tabs`: Main component. Wrapper of `TabList` and `TabPanel`.
 * - `TabList`: Wrapper of `Tab`.
 * - `Tab`: Element that shows `TabPanel`.
 * - `TabPanels`: Wrapper of `TabPanel`.
 * - `TabPanel`: Container of the content of the tab which is displayed when the corresponding `Tab` is active.
 *
 * Accessibility:
 * `Tabs` follows the accessibility guidelines for tabs: https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/.
 *
 * [Figma Source File | Tabs](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29304)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const DisabledTab: Story;
