import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { SearchInput } from './SearchInput';
type Props = ComponentProps<typeof SearchInput>;
/**
 * SearchInput is a specialized Input field adjusted for search queries. It adds search-specific props and keyboard shortcuts for Enter (trigger onValueChange immediately) and Escape (clear input).
 *
 * SearchInput depends on:
 * - [debounce](https://github.com/component/debounce)
 * - [use-local-slice](https://github.com/phryneas/use-local-slice)
 *
 * Recommendations:
 * The SearchInput component will try to expand horizontally to fill its container.
 * In most cases this behaviour is desirable.
 * However if the containing element does not have a fixed width it might naturally shrink to the size of its children.
 * In these cases the appearance and disappearance of the clearable icon can cause a layout shift in the containing element.
 * To avoid this, we recommend setting a fixed width to the element that contains the SearchInput component.
 *
 * [Figma Source File | SearchInput](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4032%3A29303)
 */
declare const meta: Meta<Props>;
export default meta;
type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const Small: Story;
export declare const Loading: Story;
export declare const WithError: Story;
export declare const SearchOptions: Story;
export declare const DebounceTime: Story;
