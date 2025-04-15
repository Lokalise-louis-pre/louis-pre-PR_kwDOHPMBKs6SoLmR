import { default as React } from '../../../node_modules/react';
import { GroupBase, MultiValueProps } from 'react-select';
import { CustomSelectProps } from './Select';
export declare const MultiValue: <OptionType, IsMulti extends boolean = false, GroupType extends GroupBase<OptionType> = GroupBase<OptionType>>(props: MultiValueProps<OptionType, IsMulti, GroupType> & {
    selectProps: Pick<CustomSelectProps, 'maxSelectedValuesVisible'>;
}) => React.JSX.Element | null;
