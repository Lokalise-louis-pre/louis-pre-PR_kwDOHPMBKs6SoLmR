import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from '../../../node_modules/react';
import { Checkbox, MultiCheckbox } from '.';
type CheckboxProps = ComponentProps<typeof Checkbox>;
type MultiCheckboxProps = ComponentProps<typeof MultiCheckbox>;
type StoryProps = CheckboxProps | MultiCheckboxProps;
/**
 * Checkbox is used to make a range of selections (none, one, or several). They can be used independently or in groups.
 *
 * Checkbox exports 4 components:
 * - `Checkbox`: Individual checkbox option, accepting standard input props.
 * - `MultiCheckbox`: Styled checkbox group, combining all selection values. Supports error messaging.
 * - `CheckboxGroup`: Unstyled checkbox group, handling group selection logic.
 * - `ManagedCheckbox`: Individual checkbox option intended to be used as part of a `MultiCheckbox` group or `ManagedCheckbox` group.
 *
 * [Figma Source File | Checkbox](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4030%3A21105)
 */
declare const meta: Meta<StoryProps>;
export default meta;
type CheckboxStory = StoryObj<CheckboxProps>;
export declare const Default: CheckboxStory;
export declare const Indeterminate: CheckboxStory;
export declare const WithError: CheckboxStory;
export declare const WithErrorChecked: CheckboxStory;
export declare const WithErrorIndeterminate: CheckboxStory;
export declare const Disabled: CheckboxStory;
export declare const DisabledChecked: CheckboxStory;
export declare const DisabledIndeterminate: CheckboxStory;
export declare const MultiCheckboxStory: StoryObj<MultiCheckboxProps>;
export declare const CustomLabels: CheckboxStory;
