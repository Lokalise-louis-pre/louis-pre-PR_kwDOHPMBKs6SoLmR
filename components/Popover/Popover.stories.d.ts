import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Popover } from './Popover';
type Props = ComponentProps<typeof Popover>;
/**
 * Popover is used to display in-product help content, attached to the child element passed to it.
 *
 * Popover depends on:
 * - [Floating UI](https://floating-ui.com/)
 *
 * **NOTE:** The `Popover` relies on user interactions for the trigger, and we do not want to modify its styles through Popover.
 * Therefore, we do not recommend using `styled(Popover)` directly. If you wish to customize the `Popover`,
 * you can provide your own `Content` and `Arrow` components via the `components` prop.
 *
 * [Figma Source File | Popover](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4029%3A21088)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const OnClick: Story;
export declare const OnHover: Story;
export declare const OnDisabledHover: Story;
export declare const Offset: Story;
export declare const PlacementLeft: Story;
export declare const PlacementRight: Story;
export declare const Delay: Story;
export declare const Portal: Story;
