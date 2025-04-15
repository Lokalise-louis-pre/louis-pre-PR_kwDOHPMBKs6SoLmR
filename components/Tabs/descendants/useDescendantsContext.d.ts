import { Context } from '../../../../node_modules/react';
import { Descendant, DescendantContextValue } from './createDescendantsContext';
export declare const useDescendantsContext: <DescendantType extends Descendant>(descendant: Omit<DescendantType, "index">, context: Context<DescendantContextValue<DescendantType>>, indexProp?: number) => number;
