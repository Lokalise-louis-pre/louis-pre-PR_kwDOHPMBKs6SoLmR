import { Ref, default as React } from '../../../node_modules/react';
import { Props as DefaultProps, GroupBase, SelectInstance } from 'react-select';
import { AsyncProps } from 'react-select/async';
import { AsyncCreatableProps } from 'react-select/async-creatable';
import { CreatableProps } from 'react-select/creatable';
type AsyncSelectProps<Creatable extends boolean, OptionType, IsMulti extends boolean = false, GroupType extends GroupBase<OptionType> = GroupBase<OptionType>> = Creatable extends true ? AsyncCreatableProps<OptionType, IsMulti, GroupType> : AsyncProps<OptionType, IsMulti, GroupType>;
type SyncSelectProps<Creatable extends boolean, OptionType, IsMulti extends boolean = false, GroupType extends GroupBase<OptionType> = GroupBase<OptionType>> = Creatable extends true ? CreatableProps<OptionType, IsMulti, GroupType> : DefaultProps<OptionType, IsMulti, GroupType>;
type CheckAsync<Async extends boolean, Creatable extends boolean, OptionType, IsMulti extends boolean = false, GroupType extends GroupBase<OptionType> = GroupBase<OptionType>> = Async extends true ? AsyncSelectProps<Creatable, OptionType, IsMulti, GroupType> : SyncSelectProps<Creatable, OptionType, IsMulti, GroupType>;
export type CustomSelectProps = {
    styles?: never;
    theme?: never;
    /**
     * Renders a form validation `InputErrorMessage` when passed as `string | string[]`, or just applies error styling when `true`.
     */
    error?: boolean | string | readonly string[];
    async?: boolean;
    /**
     * Toggles whether the input accepts custom options added by the user.
     */
    creatable?: boolean;
    /**
     * Sets limit to visible selected values when isMulti prop is set
     */
    maxSelectedValuesVisible?: number;
};
export type SelectProps<Async extends boolean, Creatable extends boolean, OptionType, IsMulti extends boolean = false, GroupType extends GroupBase<OptionType> = GroupBase<OptionType>> = CheckAsync<Async, Creatable, OptionType, IsMulti, GroupType> & CustomSelectProps;
declare const InnerSelect: <Async extends boolean, Creatable extends boolean, OptionType, IsMulti extends boolean = false, GroupType extends GroupBase<OptionType> = GroupBase<OptionType>>({ async, creatable, error, isDisabled, components, className, onChange, ...rest }: SelectProps<Async, Creatable, OptionType, IsMulti, GroupType>, ref: Ref<SelectInstance<OptionType, IsMulti, GroupType>> | undefined) => React.JSX.Element;
export declare const Select: <Async extends boolean, Creatable extends boolean, OptionType, IsMulti extends boolean = false, GroupType extends GroupBase<OptionType> = GroupBase<OptionType>>(props: CheckAsync<Async, Creatable, OptionType, IsMulti, GroupType> & CustomSelectProps & {
    ref?: Ref<SelectInstance> | undefined;
}) => ReturnType<typeof InnerSelect>;
export {};
