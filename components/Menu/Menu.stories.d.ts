import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Menu, MenuItem, MenuList } from '.';
type MenuProps = ComponentProps<typeof Menu>;
type MenuListProps = ComponentProps<typeof MenuList>;
type MenuItemProps = ComponentProps<typeof MenuItem>;
type Props = MenuProps & {
    menuListProps?: MenuListProps;
    menuItemProps?: MenuItemProps;
};
/**
 * Menu opens an options list inside a dropdown.
 *
 * Menu exports 6 components:
 * - `Menu`: The wrapper component provides context and state.
 * - `MenuList`: The wrapper for the menu items. Must be a direct child of `Menu`.
 * - `MenuDrawer`: Styled component to build custom dropdowns while maintaining visual consistency.
 * - `MenuItem`: The trigger that handles menu selection. Must be a child of a `MenuList`.
 * - `MenuItemContainer`: Styled component to build custom dropdowns while maintaining visual consistency.
 * - `MenuDivider`: A visual separator for menu items.
 *
 * [Figma Source File | Menu](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A28125)
 *
 * ### Keyboard Interaction
 * - `Enter` or `Space` - opens menu list and when pressed again they select the active menu item and returns focus to menu button.
 * - `ArrowDown` - opens the menu and moves focus to the first menu item. When pressed again selects next menu item.
 * - `ArrowUp` - opens the menu and moves focus to the last menu item. When pressed again selects previous menu item.
 * - `Escape` - closes the menu and sets focus to menu button.
 * - `Tab` - closes menu list and returns focus to menu button.
 * - `A-Z` or `a-z` - when menu list is opened, selects menu item that matches what is typed.
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const StayOpen: Story;
