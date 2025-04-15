import { Dispatch, SetStateAction } from '../../../../node_modules/react';
export type TabsContextValue = {
    id: string;
    isControlled: boolean;
    onSelectTab: (index: number) => void;
    onSelectTabWithKeyboard: (index: number) => void;
    selectedIndex: number;
    setSelectedIndex: Dispatch<SetStateAction<number>>;
};
export declare const TabsContext: import('../../../../node_modules/react').Context<TabsContextValue | undefined>;
