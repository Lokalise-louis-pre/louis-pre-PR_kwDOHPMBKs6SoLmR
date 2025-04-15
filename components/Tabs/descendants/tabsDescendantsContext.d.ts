import { Descendant } from './createDescendantsContext';
export type TabDescendant = Descendant & {
    disabled: boolean;
};
export declare const TabsDescendantsContext: import('../../../../node_modules/react').Context<import('./createDescendantsContext').DescendantContextValue<TabDescendant>>;
