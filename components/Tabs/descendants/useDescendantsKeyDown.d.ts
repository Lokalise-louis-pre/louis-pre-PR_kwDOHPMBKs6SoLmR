import { Context, KeyboardEvent } from '../../../../node_modules/react';
import { Descendant, DescendantContextValue } from './createDescendantsContext';
export declare const useDescendantKeyDown: <DescendantType extends Descendant>(context: Context<DescendantContextValue<DescendantType>>, options: {
    currentIndex: number | null | undefined;
    filter?: ((descendant: DescendantType) => boolean) | undefined;
    callback: (nextOption: number) => void;
}) => (event: KeyboardEvent) => void;
